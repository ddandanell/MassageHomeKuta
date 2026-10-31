/**
 * Build step (local only, needs chrome): capture the full server-side body of the
 * three hand-built legacy blog posts, which are JSX pages rather than entries in
 * src/data/blog-articles.ts and therefore not covered by scripts/blog-bodies.mjs.
 *
 * Output: seo/blog-bodies-legacy.json — merged with seo/blog-bodies.json by
 * scripts/prerender-build.mjs. Sanitised to semantic tags only: no script/style/
 * svg/button/img (hashed asset URLs would go stale on the next build).
 *
 * Usage: node scripts/blog-bodies-legacy.mjs [route ...]
 * Requires: a completed `vite build` and google-chrome on PATH.
 */
import { execFile, spawn } from "node:child_process";
import { writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(process.cwd());
const OUT = join(ROOT, "seo/blog-bodies-legacy.json");
const PORT = Number(process.env.PRERENDER_PORT || 4176);
const BASE = `http://127.0.0.1:${PORT}`;
const CHROME = process.env.CHROME_BIN || "google-chrome";

const defaultRoutes = [
  "/blog/massage-kuta-bali-price-guide",
  "/blog/how-to-book-massage-kuta-whatsapp",
  "/blog/best-areas-kuta-home-massage-coverage",
];
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
    // keep no classes/ids: they reference build-specific Tailwind output
    return `<${t}>`;
  });
  html = html
    .replace(/<\/?(span|div)>/gi, " ")
    .replace(/\s+/g, " ")
    .replace(/>\s+</g, "><")
    .replace(/<p>\s*<\/p>/gi, "")
    .replace(/<li>\s*<\/li>/gi, "")
    .replace(/<a><\/a>/gi, "")
    .trim();
  return html;
}

const words = (h) => h.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length;

function render(url) {
  return new Promise((resolveP) => {
    execFile(
      CHROME,
      [
        "--headless=new", "--disable-gpu", "--no-sandbox", "--hide-scrollbars",
        "--user-data-dir=/tmp/chrome-legacy-bodies", "--virtual-time-budget=9000",
        "--dump-dom", url,
      ],
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
  for (const route of list) {
    const html = await render(BASE + route);
    if (!html) { console.error("FAILED " + route); continue; }
    const start = html.search(/<main\b/i);
    const end = html.lastIndexOf("</main>");
    if (start < 0 || end < 0) { console.error("no <main> for " + route); continue; }
    const inner = html.slice(html.indexOf(">", start) + 1, end);
    const body = `<main id="content">${sanitize(inner)}</main>`;
    bodies[route] = body;
    console.error(`ok ${route} — ${words(body)} words, ${(body.match(/<h2>/g) || []).length} h2`);
  }
  writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), bodies }, null, 1));
  console.error(`wrote ${Object.keys(bodies).length}/${list.length} -> ${OUT}`);
} finally {
  server.kill("SIGTERM");
}
