/**
 * Build step: emit seo/blog-bodies.json — the full server-rendered body HTML of
 * every /blog/:slug article, straight from src/data/blog-articles.ts.
 *
 * Why: the prerender snapshot (scripts/prerender-snapshot.mjs) can only capture
 * a clamped skeleton from the rendered DOM (h1 + 3 paragraphs + an h2 <ul>),
 * so each guide shipped ~250 words and no H2s in the first byte of HTML. The
 * article data is already structured, so the real body needs no browser: read
 * the data, render it to HTML, hand it to scripts/prerender-build.mjs.
 *
 * Usage: node scripts/blog-bodies.mjs            (writes seo/blog-bodies.json)
 * Requires: esbuild (a vite dependency) to bundle the .ts data module.
 */
import { execFileSync } from "node:child_process";
import { writeFileSync, mkdtempSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = resolve(process.cwd());
const SRC = join(ROOT, "src/data/blog-articles.ts");
const OUT = join(ROOT, "seo/blog-bodies.json");

const esc = (s) =>
  String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

if (!existsSync(SRC)) {
  console.error("blog-bodies: missing " + SRC);
  process.exit(1);
}

const dir = mkdtempSync(join(tmpdir(), "blog-bodies-"));
const bundle = join(dir, "blog-articles.mjs");
execFileSync(
  join(ROOT, "node_modules/.bin/esbuild"),
  [SRC, "--bundle", "--format=esm", "--platform=node", "--log-level=warning", "--outfile=" + bundle],
  { stdio: "inherit" },
);
const mod = await import(pathToFileURL(bundle).href + "?t=" + Date.now());
const articles = mod.blogArticles || [];
if (!articles.length) {
  console.error("blog-bodies: no articles exported");
  process.exit(1);
}

const bodies = {};
for (const a of articles) {
  if (!a.slug) continue;
  const parts = ['<main id="content"><article>'];
  parts.push(`<p>${esc(a.category)}</p>`);
  parts.push(`<h1>${esc(a.title)}</h1>`);
  if (a.excerpt) parts.push(`<p>${esc(a.excerpt)}</p>`);
  if (a.intro) parts.push(`<p>${esc(a.intro)}</p>`);
  for (const s of a.sections || []) {
    parts.push(`<section><h2>${esc(s.h2)}</h2>${s.html || ""}</section>`);
  }
  if ((a.faqs || []).length) {
    parts.push("<section><h2>Frequently asked questions</h2>");
    for (const f of a.faqs) {
      parts.push(`<div><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`);
    }
    parts.push("</section>");
  }
  parts.push(
    '<p><a href="https://wa.me/628112656869">Check availability on WhatsApp</a></p>',
  );
  parts.push("</article></main>");
  bodies["/blog/" + a.slug] = parts.join("");
}

writeFileSync(OUT, JSON.stringify({ generatedAt: new Date().toISOString(), bodies }, null, 1));
const words = Object.values(bodies).map((h) => h.replace(/<[^>]*>/g, " ").split(/\s+/).filter(Boolean).length);
console.log(
  `blog-bodies: ${Object.keys(bodies).length} articles -> seo/blog-bodies.json (${Math.min(...words)}–${Math.max(...words)} words each)`,
);
