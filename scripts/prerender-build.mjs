/**
 * Build step: emit a real HTML file per route from the committed snapshot
 * (seo/prerender.json), using the freshly built dist/index.html as the shell so
 * asset hashes stay correct. No chrome required — runs on Vercel.
 *
 * Result: every URL ships its own title, description, canonical, OG tags,
 * JSON-LD, H1, intro copy and internal links in the first byte of HTML,
 * while React still takes over and renders the full page.
 *
 * Blog guides additionally ship their entire body (every H2, list, table, FAQ):
 *  - seo/blog-bodies.json         from src/data/blog-articles.ts (blog-bodies.mjs)
 *  - seo/blog-bodies-legacy.json  captured from the 3 hand-built JSX posts
 * The DOM snapshot can only supply a clamped skeleton, hence the two sources.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const DIST = resolve(process.argv[2] || "dist");
const SNAP = resolve(process.argv[3] || "seo/prerender.json");

const esc = (s) =>
  String(s || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const DATA_BODIES = resolve(process.env.BLOG_BODIES || "seo/blog-bodies.json");
const LEGACY_BODIES = resolve(process.env.BLOG_BODIES_LEGACY || "seo/blog-bodies-legacy.json");
const bodies = {};
for (const [file, label] of [
  [LEGACY_BODIES, "legacy"],
  [DATA_BODIES, "data"],
]) {
  try {
    Object.assign(bodies, JSON.parse(readFileSync(file, "utf8")).bodies || {});
  } catch {
    console.error("prerender: no " + label + " bodies at " + file);
  }
}
console.error("prerender: loaded " + Object.keys(bodies).length + " full article bodies");

const template = readFileSync(join(DIST, "index.html"), "utf8");
if (!template.includes('<div id="root"></div>')) {
  console.error("prerender: dist/index.html is not a clean vite build — run vite build first");
  process.exit(1);
}
const { pages } = JSON.parse(readFileSync(SNAP, "utf8"));

const DROP = [
  /<meta\b[^>]*(name|property)="(description|keywords|author|robots|googlebot|geo\.[^"]*|ICBM|og:[^"]*|twitter:[^"]*)"[^>]*>\s*/gi,
  /<link\b[^>]*rel="canonical"[^>]*>\s*/gi,
  /<title>[\s\S]*?<\/title>\s*/i,
];

function head(p) {
  const title = p.title || "Home Massage Kuta, Bali";
  const url = p.canonical;
  const img = p.ogImage || "https://www.homemassagekuta.com/og-image.jpg";
  const tags = [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(p.description)}" />`,
    p.keywords ? `<meta name="keywords" content="${esc(p.keywords)}" />` : "",
    `<meta name="author" content="Home Massage Kuta" />`,
    `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />`,
    `<meta name="geo.region" content="ID-BA" />`,
    `<meta name="geo.placename" content="Kuta, Bali" />`,
    `<meta name="geo.position" content="-8.7203;115.1672" />`,
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta property="og:title" content="${esc(p.ogTitle || title)}" />`,
    `<meta property="og:description" content="${esc(p.ogDescription || p.description)}" />`,
    `<meta property="og:type" content="${esc(p.ogType || "website")}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:image" content="${esc(img)}" />`,
    `<meta property="og:site_name" content="Home Massage Kuta" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta name="twitter:card" content="${esc(p.twitterCard || "summary_large_image")}" />`,
    `<meta name="twitter:title" content="${esc(p.ogTitle || title)}" />`,
    `<meta name="twitter:description" content="${esc(p.ogDescription || p.description)}" />`,
    `<meta name="twitter:image" content="${esc(p.twitterImage || img)}" />`,
    ...(p.jsonLd || []).map((j) => `<script type="application/ld+json">${j}</script>`),
  ];
  return tags.filter(Boolean).join("\n    ");
}

function skeleton(p) {
  const parts = ["<main>"];
  if (p.h1) parts.push(`<h1>${esc(p.h1)}</h1>`);
  for (const para of p.paragraphs || []) parts.push(`<p>${esc(para)}</p>`);
  if ((p.h2s || []).length) parts.push(`<ul>${p.h2s.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>`);
  if ((p.links || []).length) {
    parts.push(`<nav>${p.links
      .map((h) => `<a href="${esc(h)}">${esc(h.replace(/^\//, "").replace(/-/g, " ") || "home")}</a>`)
      .join(" · ")}</nav>`);
  }
  parts.push(`<p><a href="https://wa.me/628112656869">Book by WhatsApp</a></p>`);
  parts.push("</main>");
  return parts.join("");
}

const GA4_ID = process.env.GA4_ID || "";
const ga4 = GA4_ID
  ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${GA4_ID}"></script>
    <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA4_ID}');</script>`
  : "";

let written = 0;
let fullBodies = 0;
for (const p of pages) {
  if (!p.path) continue;
  let html = template;
  for (const re of DROP) html = html.replace(re, "");
  html = html.replace("</head>", `  ${head(p)}\n  ${ga4}\n  </head>`);
  const body = bodies[p.path];
  if (body) fullBodies++;
  else if (p.path.startsWith("/blog/")) console.error("prerender: WARN no full body for " + p.path + " — skeleton only");
  html = html.replace(/<div id="root"><\/div>/, `<div id="root">${body || skeleton(p)}</div>`);
  const file = p.path === "/" ? join(DIST, "index.html") : join(DIST, p.path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  written++;
}
console.log(`prerender: wrote ${written} html files, ${fullBodies} with full article bodies`);
