/**
 * Build step (local only, needs chrome): capture the full server-side body of
 * every prerendered route that does not get its body from the article data.
 *
 * Why: the prerender snapshot clamps each page to h1 + 3 paragraphs + an h2 <ul>,
 * so 64 of 94 URLs shipped under 300 words and zero H2s in the first byte — while
 * the JS-rendered page has the real copy. Capture that copy once, sanitise it to
 * semantic tags, and let scripts/prerender-build.mjs inline it.
 *
 * Output: seo/page-bodies.json (committed). Chrome is needed only here, never on
 * Vercel: the JSON is the artifact the build consumes.
 *
 * Usage: node scripts/page-bodies.mjs [route ...]
 * Requires: a completed `vite build` and google-chrome on PATH.
 */
import { execFile, spawn } from "node:child_process";
import { writeFileSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(process.cwd());
const OUT = join(ROOT, "seo/page-bodies.json");
const PORT = Number(process.env.PRERENDER_PORT || 4176);
const BASE = `http://127.0.0.1:${PORT}`;
const CHROME = process.env.CHROME_BIN || "google-chrome";

// Default: every prerendered route except /blog/* (those have data-generated bodies).
const snap = JSON.parse(readFileSync(join(ROOT, "seo/prerender.json"), "utf8"));
const allPaths = (snap.pages || []).map((p) => p.path).filter(Boolean);
const defaultRoutes = allPaths.filter((p) => !p.startsWith("/blog/"));
const routes = process.argv.slice(2).filter((a) => a.startsWith("/"));
const list = routes.length ? routes : defaultRoutes;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const KEEP = new Set([
  "h1", "h2", "h3", "h4", "p", "ul", "ol", "li", "dl", "dt", "dd", "a", "strong",
  "em", "b", "i", "u", "small", "blockquote", "table", "thead", "tbody", "tr",
  "th", "td", "br", "hr", "figure", "figcaption", "section", "article", "div",
  "span", "nav",
]);
const DROP_BLOCKS =
  /<(script|style|svg|button|img|picture|iframe|video|audio|source|form|input|select|textarea|noscript)\b[\s\S]*?<\/\1>|<(img|input|br|hr|source)\b[^>]*>/gi;

function sanitize(mainHtml) {
  let html = mainHtml.replace(DROP_BLOCKS, " ");
  html = html.replace(/<(\/?)([a-zA-Z0-9]+)\b[^>]*>/g, (m, close, tag) => {
    const t = tag.toLowerCase();
    if (!KEEP.has(t)) return " ";
    if (close) return `</${t}>`;
    if (t === "a") {
      const href = m.match(/href="([^"]*)"/i);
      return href ? `<a href="${href[1]}">` : "<a>";
    }
    return `<${t}>`;
  });
  return html
    .replace(/<\/?(span|div|nav)>/gi, " ")
    .replace(/\s+/g, " ")
    .replace(/>\s+</g, "><")
    .replace(/<p>\s*<\/p>/gi, "")
    .replace(/<li>\s*<\/li>/gi, "")
    .replace(/<a><\/a>/gi, "")
    .trim();
}

const words = (h) => h.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;

const CHROME_ARGS = [
  "--headless=new", "--disable-gpu", "--no-sandbox", "--hide-scrollbars",
  "--virtual-time-budget=9000", "--dump-dom",
];

function render(url) {
  return new Promise((resolveP) => {
    execFile(
      CHROME,
      CHROME_ARGS.concat(["--user-data-dir=/tmp/chrome-page-bodies", url]),
      { maxBuffer: 60 * 1024 * 1024, timeout: 90000 },
      (err, stdout) => resolveP(err && !stdout ? "" : stdout),
    );
  });
}

async function waitForServer() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch(BASE + "/", { signal: AbortSignal.timeout(2000) });
      if (r.ok) return true;
    } catch {}
    await sleep(1000);
  }
  return false;
}

const server = spawn("npx", ["vite", "preview", "--port", String(PORT), "--strictPort"], {
  cwd: ROOT, stdio: "ignore", detached: false,
});

try {
  if (!(await waitForServer())) throw new Error("preview server did not start");
  const bodies = {};
  let done = 0;
  for (const route of list) {
    const html = await render(BASE + route);
    done++;
    if (!html) { console.error("FAILED " + route); continue; }
    let inner;
    const start = html.search(/<main\b/i);
    const end = html.lastIndexOf("</main>");
    if (start >= 0 && end > start) {
      inner = html.slice(html.indexOf(">", start) + 1, end);
    } else {
      // pages without a <main> wrapper: take the app root and drop the chrome
      const rStart = html.search(/<div id="root"[^>]*>/i);
      const rEnd = html.lastIndexOf("</div>");
      if (rStart < 0 || rEnd < 0) { console.error("no root for " + route); continue; }
      inner = html
        .slice(html.indexOf(">", rStart) + 1, rEnd)
        .replace(/<header[\s\S]*?<\/header>/gi, " ")
        .replace(/<footer[\s\S]*?<\/footer>/gi, " ");
      console.error("no <main>, used #root fallback for " + route);
    }
    const body = `<main id="content">${sanitize(inner)}</main>`;
    bodies[route] = body;
    console.error(`[${done}/${list.length}] ${route} — ${words(body)} words, ${(body.match(/<h2>/g) || []).length} h2`);
  }
  // merge, so a single-route re-capture does not drop the other pages
  let prior = {};
  try { prior = JSON.parse(readFileSync(OUT, "utf8")).bodies || {}; } catch {}
  const merged = Object.assign(prior, bodies);
  writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), bodies: merged }, null, 1));
  console.error(`wrote ${Object.keys(bodies).length}/${list.length} -> ${OUT}`);
} finally {
  server.kill("SIGTERM");
}
