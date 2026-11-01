/**
 * Capture the JS-rendered head + content skeleton of every route, so the build
 * can serve real per-URL HTML instead of one identical SPA shell.
 *
 * Usage: node scripts/prerender-snapshot.mjs [outFile]
 * Requires: a completed `vite build` (reads dist/) and google-chrome on PATH.
 * Runs locally/CI-with-chrome only. The committed JSON is consumed by
 * scripts/prerender-build.mjs at Vercel build time (no chrome needed there).
 */
import { execFile, spawn } from "node:child_process";
import { readFileSync, writeFileSync, mkdirSync, renameSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { dedupeJsonLd } from "./lib/jsonld-dedupe.mjs";

const ROOT = resolve(process.cwd());
const OUT = resolve(process.argv[2] || "seo/prerender.json");
const PORT = Number(process.env.PRERENDER_PORT || 4174);
const BASE = `http://127.0.0.1:${PORT}`;
const SITE = "https://www.homemassagekuta.com";
const CHROME = process.env.CHROME_BIN || "google-chrome";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function routes() {
  const app = readFileSync(resolve(ROOT, "src/App.tsx"), "utf8");
  const staticRoutes = [...app.matchAll(/path:\s*"([^"]+)"/g)]
    .map((m) => m[1])
    .filter((p) => !p.includes(":") && p !== "*");
  let blogSlugs = [];
  try {
    const data = readFileSync(resolve(ROOT, "src/data/blog-articles.ts"), "utf8");
    blogSlugs = [...data.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
  } catch {}
  const all = [...new Set([...staticRoutes, ...blogSlugs.map((s) => `/blog/${s}`)])];
  return all.map((p) => (p === "/" ? "/" : p.replace(/\/$/, "")));
}

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");

const strip = (s) => decode(String(s).replace(/<[^>]*>/g, " ")).replace(/\s+/g, " ").trim();

function attr(tag, name) {
  const m = tag.match(new RegExp(`${name}="([^"]*)"`));
  return m ? decode(m[1]) : "";
}

function parse(html, route) {
  const head = (html.match(/<head[^>]*>([\s\S]*?)<\/head>/i) || ["", ""])[1];
  const title = decode((head.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || ["", ""])[1] || "");
  const metas = [...head.matchAll(/<meta\b[^>]*>/gi)].map((m) => m[0]);
  const get = (key) => {
    const hits = metas.filter((t) => attr(t, "property") === key || attr(t, "name") === key);
    const hit = hits[hits.length - 1];
    return hit ? attr(hit, "content") : "";
  };
  const canonAll = [...head.matchAll(/<link[^>]*rel="canonical"[^>]*>/gi)].map((m) => m[0]);
  const canonical = canonAll[canonAll.length - 1] || "";
  // Whole document, not just <head>: 10 pages (the boulevard landing pages plus
  // /sitemap) emit their LocalBusiness, FAQPage and BreadcrumbList blocks as raw
  // <script> tags inside the component tree, so a head-only read captured nothing
  // for them. Duplicates are collapsed by dedupeJsonLd below.
  const jsonLd = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((m) => m[1].trim())
    .filter((s) => s.startsWith("{"));

  const rootM = html.match(/<div id="root"[^>]*>([\s\S]*)<\/div>\s*<script/i);
  const rootRaw = rootM ? rootM[1] : html;
  const root = rootRaw
    .replace(/<header[\s\S]*?<\/header>/gi, ' ')
    .replace(/<nav[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<footer[\s\S]*?<\/footer>/gi, ' ');
  const h1Tag = (root.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || ["", ""])[1];
  const paragraphs = [...root.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)]
    .map((m) => strip(m[1]))
    .filter((p) => p.length > 40)
    .slice(0, 3);
  const h2s = [...new Set([...root.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => strip(m[1])))].slice(0, 10);
  const links = [...root.matchAll(/<a\b[^>]*href="([^"]+)"/gi)]
    .map((m) => m[1])
    .filter((h) => h.startsWith("/") && !h.startsWith("//"))
    .filter((h, i, a) => a.indexOf(h) === i)
    .slice(0, 40);

  return {
    path: route,
    title,
    description: get("description"),
    keywords: get("keywords"),
    canonical: canonical ? attr(canonical, "href") : "",
    ogTitle: get("og:title"),
    ogDescription: get("og:description"),
    ogType: get("og:type") || "website",
    ogImage: get("og:image"),
    ogSiteName: get("og:site_name"),
    twitterCard: get("twitter:card") || "summary_large_image",
    twitterImage: get("twitter:image") || get("og:image"),
    h1: strip(h1Tag),
    paragraphs,
    h2s,
    links,
    jsonLd,
  };
}

// Every render gets its own throwaway profile directory. A shared --user-data-dir
// makes a second chrome hand off to the singleton already owning that profile and
// exit with empty stdout, which silently skipped 30-65 of 96 routes and produced
// false gate failures. The directory is removed after the render, success or not.
function render(url, id) {
  const profile = `/tmp/chrome-prerender-${process.pid}-${id}`;
  const cleanup = () => {
    try {
      rmSync(profile, { recursive: true, force: true });
    } catch {}
  };
  return new Promise((resolveP) => {
    let settled = false;
    const done = (html) => {
      if (settled) return;
      settled = true;
      cleanup();
      resolveP(html);
    };
    const child = execFile(
      CHROME,
      [
        "--headless=new",
        "--disable-gpu",
        "--no-sandbox",
        "--hide-scrollbars",
        `--user-data-dir=${profile}`,
        "--virtual-time-budget=9000",
        "--dump-dom",
        url,
      ],
      { maxBuffer: 40 * 1024 * 1024, timeout: 90000 },
      (err, stdout) => done(err && !stdout ? "" : stdout),
    );
    child.on("error", () => done(""));
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
  cwd: ROOT,
  stdio: "ignore",
  detached: false,
});

try {
  if (!(await waitForServer())) throw new Error("preview server did not start");
  const list = routes();
  const out = [];
  const failed = [];
  let i = 0;
  for (const route of list) {
    i += 1;
    const html = await render(BASE + route, i);
    if (!html) {
      console.error("FAILED", route);
      failed.push(route);
      continue;
    }
    const rec = parse(html, route);
    if (!rec.canonical) rec.canonical = SITE + (route === "/" ? "/" : route);
    rec.jsonLd = dedupeJsonLd(rec.jsonLd);
    out.push(rec);
    console.error(`ok ${route} — ${rec.title?.slice(0, 60)}`);
  }
  // Fail closed: a partial snapshot would delete real pages from the build and,
  // being a tracked generated artifact, leave the tree dirty. Abort with nothing
  // written rather than commit a truncated snapshot.
  if (failed.length || out.length !== list.length) {
    console.error(`\nABORT: rendered ${out.length}/${list.length} routes, ${failed.length} failed`);
    throw new Error(
      "partial snapshot: rendered " + out.length + "/" + list.length + " routes; " + OUT + " left untouched",
    );
  }
  mkdirSync(dirname(OUT), { recursive: true });
  const tmp = `${OUT}.tmp-${process.pid}`;
  writeFileSync(tmp, JSON.stringify({ generatedAt: new Date().toISOString(), site: SITE, pages: out }, null, 1));
  renameSync(tmp, OUT);
  console.error(`\nwrote ${out.length}/${list.length} pages -> ${OUT}`);
} finally {
  server.kill("SIGTERM");
}
