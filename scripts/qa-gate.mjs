#!/usr/bin/env node
// qa-gate.mjs — mechanical pre-publish gate for site-002 (homemassagekuta.com).
// Checks a defined subset of the team's 12-point release checklist against the
// built dist/: items 4 (one title, one description), 5 (canonical matches route,
// no trailing slash), 6 (one H1, no placeholders), 7 partial (valid JSON-LD, no
// duplicate @type blocks in the static HTML) and 8 partial (every sitemap loc,
// hreflang alternate and internal link resolves to a built page).
//
// NOT checked here, and not to be inferred from a PASS:
//   - item 12 authorization/rollback (there is no auth, branch or rollback check)
//   - post-JS duplicate or conflicting JSON-LD (needs a browser: see
//     render-audit.mjs), pre-JS/post-JS schema parity
//   - schema without visible support, unsourced claims, fact or copy review
//     (items 1,2,3,9,10 stay with Independent QA Reviewer)
//   - design, mobile targets, forms, anything requiring a user session
//
// Cannot judge facts, intent or design. Fail-closed: any FAIL exits 1 and the
// caller must not push.
//
// usage: node src/qa-gate.mjs <repoPath> [--json]

import { readFileSync, readdirSync, statSync, existsSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const repoPath = process.argv[2];
const asJson = process.argv.includes('--json');
if (!repoPath || !existsSync(join(repoPath, 'dist'))) {
  console.error('gate: no dist/ at ' + repoPath + ' — run the build first');
  process.exit(2);
}

const DIST = join(repoPath, 'dist');
const SITE = 'https://www.homemassagekuta.com';
const ORIGIN = 'https://www.homemassagekuta.com';

const walk = (dir, out = []) => {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
};

// route for a dist html file: /x/index.html -> /x , /index.html -> /
const routeOf = (file) => {
  let r = '/' + relative(DIST, file).replace(/\\/g, '/');
  r = r.replace(/index\.html$/, '').replace(/\/$/, '');
  return r === '' ? '/' : r;
};

const htmlFiles = walk(DIST).filter((f) => f.endsWith('.html'));
const routeExists = new Set(htmlFiles.map(routeOf));

const fails = [];
const warns = [];
const fail = (check, detail) => fails.push({ check, detail });
const warn = (check, detail) => warns.push({ check, detail });

const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]*>/g, ' ');

// Read one attribute out of a single tag, honouring both quote styles.
// A quote-blind regex silently truncated description values at the first
// apostrophe ("Sanur, Bali's tranquil ..." -> "Sanur, Bali"), which produced
// three phantom description-length warnings on 31 Oct.
const attrOf = (tag, name) => {
  const m = tag.match(new RegExp('\\b' + name + '\\s*=\\s*"([^"]*)"|\\b' + name + '\\s*=\\s*\'([^\']*)\'', 'i'));
  return m ? (m[1] !== undefined ? m[1] : m[2]) : null;
};
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

// ---------- 1. sitemap ----------
const smPath = join(repoPath, 'public', 'sitemap.xml');
let sitemapUrls = [];
if (!existsSync(smPath)) fail('sitemap', 'public/sitemap.xml missing');
else {
  const sm = readFileSync(smPath, 'utf8');
  sitemapUrls = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
  if (!sitemapUrls.length) fail('sitemap', 'no <loc> entries');

  // every advertised URL must be a real prerendered page
  for (const u of sitemapUrls) {
    const p = u.replace(ORIGIN, '').replace(SITE, '').replace(/^https?:\/\/[^/]+/, '') || '/';
    const norm = p.replace(/\/$/, '') || '/';
    if (!routeExists.has(norm)) fail('sitemap-loc-not-built', u + ' has no prerendered html (soft 404)');
  }

  // every hreflang alternate must point at a page that exists AND is self-consistent:
  // this is the check that catches fake /id/ alternates
  for (const m of sm.matchAll(/<xhtml:link[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"[^>]*\/>/g)) {
    const [, lang, href] = m;
    const p = href.replace(ORIGIN, '').replace(SITE, '').replace(/^https?:\/\/[^/]+/, '') || '/';
    const norm = p.replace(/\/$/, '') || '/';
    if (!routeExists.has(norm)) fail('sitemap-hreflang', 'hreflang "' + lang + '" -> ' + href + ' is not a prerendered page (serves SPA fallback)');
  }
}

// ---------- 2. per-page head + structure ----------
const titles = new Map();
const descs = new Map();
const stats = { pages: 0, minWords: Infinity, minWordsRoute: '' };

for (const file of htmlFiles) {
  const route = routeOf(file);
  const html = readFileSync(file, 'utf8');
  stats.pages++;

  const t = [...html.matchAll(/<title[^>]*>([\s\S]*?)<\/title>/gi)].map((m) => decode(m[1].trim()));
  if (t.length !== 1) fail('title', route + ': ' + t.length + ' <title> tags');
  else {
    if (!t[0]) fail('title', route + ': empty title');
    if (t[0].length > 70) warn('title-length', route + ': ' + t[0].length + ' chars');
    const k = t[0].toLowerCase();
    if (titles.has(k)) fail('duplicate-title', route + ' duplicates ' + titles.get(k));
    else titles.set(k, route);
  }

  const d = [...html.matchAll(/<meta\b[^>]*>/gi)]
    .filter((m) => (attrOf(m[0], 'name') || '').toLowerCase() === 'description')
    .map((m) => attrOf(m[0], 'content'));
  if (d.length !== 1) fail('description', route + ': ' + d.length + ' meta descriptions');
  else {
    const v = decode(d[0] || '').trim();
    if (v.length < 60) warn('description-length', route + ': ' + v.length + ' chars');
    const k = v.toLowerCase();
    if (descs.has(k)) fail('duplicate-description', route + ' duplicates ' + descs.get(k));
    else descs.set(k, route);
  }

  const canon = [...html.matchAll(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/gi)].map((m) => m[1]);
  if (canon.length !== 1) fail('canonical', route + ': ' + canon.length + ' canonical tags');
  else {
    const want = ORIGIN + (route === '/' ? '/' : route);
    const c = canon[0];
    if (c.replace(/\/$/, '') !== want.replace(/\/$/, '')) fail('canonical-mismatch', route + ': canonical ' + c + ' expected ' + want);
    else if (route !== '/' && c.endsWith('/')) fail('canonical-trailing-slash', route + ': canonical ' + c + ' has a trailing slash the served URL does not');
  }

  const h1 = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
  if (h1.length !== 1) fail('h1', route + ': ' + h1.length + ' h1 tags');
  else if (!decode(strip(h1[0][1])).trim()) fail('h1', route + ': empty h1');

  if (/name=["']robots["'][^>]*content=["'][^"']*noindex/i.test(html) && sitemapUrls.some((u) => u.replace(ORIGIN, '') === (route === '/' ? '/' : route)))
    fail('noindex-in-sitemap', route + ' is noindex but listed in sitemap');

  const ldTypes = new Map();
  const priceRanges = new Map();
  for (const m of html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi)) {
    let parsed;
    try { parsed = JSON.parse(m[1]); } catch (e) {
      fail('jsonld', route + ': invalid JSON-LD (' + e.message.slice(0, 60) + ')');
      continue;
    }
    for (const block of Array.isArray(parsed) ? parsed : [parsed]) {
      if (!block || typeof block !== 'object') continue;
      const t = block['@type'];
      const key = Array.isArray(t) ? t.join('+') : String(t || 'unknown');
      ldTypes.set(key, (ldTypes.get(key) || 0) + 1);
      if (block.priceRange) {
        if (!priceRanges.has(key)) priceRanges.set(key, new Set());
        priceRanges.get(key).add(String(block.priceRange));
      }
    }
  }
  for (const [t, n] of ldTypes) {
    if (n > 1) fail('jsonld-duplicate', route + ': ' + n + ' static blocks declare @type ' + t + ' (one per type)');
  }
  for (const [t, set] of priceRanges) {
    if (set.size > 1) fail('jsonld-conflict', route + ': @type ' + t + ' declares conflicting priceRange ' + [...set].join(' vs '));
  }

  const text = decode(strip(html)).replace(/\s+/g, ' ').trim();
  const words = text ? text.split(' ').length : 0;
  // The prerender build ships a content skeleton (head, h1, intro, h2 list, links) rather than
  // the full body, so 180-300 words before JS is the known architecture ceiling (task T-0006),
  // not a regression. Only a true collapse is a failure.
  if (route.startsWith('/blog/') && words < 120) fail('thin-blog', route + ': only ' + words + ' words before JS (skeleton missing)');
  else if (route.startsWith('/blog/') && words < 600) warn('skeleton-only', route + ': ' + words + ' words before JS (T-0006 body limit)');
  if (route.startsWith('/services/') && words < 200) warn('thin-service', route + ': ' + words + ' words before JS');
  if (words < stats.minWords) { stats.minWords = words; stats.minWordsRoute = route; }

  for (const bad of ['undefined', '[object Object]', 'NaN', 'TODO', 'lorem ipsum']) {
    if (new RegExp('\\b' + bad.replace('[', '\\[').replace(']', '\\]') + '\\b', 'i').test(text)) fail('placeholder', route + ': contains "' + bad + '"');
  }

  for (const m of html.matchAll(/<a[^>]+href=["'](\/[^"'#?]*)/gi)) {
    const p = m[1].replace(/\/$/, '') || '/';
    if (p.startsWith('/assets') || /\.[a-z0-9]{2,4}$/i.test(p)) continue;
    if (!routeExists.has(p)) fail('internal-link', route + ' -> ' + m[1] + ' has no prerendered page');
  }

  const price = text.match(/(?:Rp|IDR)\s?[\d.,]{3,}/gi);
  if (price) warn('price-claim', route + ': currency figures present (' + [...new Set(price)].slice(0, 3).join(', ') + ') — verify against the no-published-prices rule');
}

// ---------- 3. sitemap coverage ----------
const built = [...routeExists];
for (const r of built) {
  if (r.startsWith('/assets') || /\.(txt|xml|ico|png|jpg|svg)$/i.test(r)) continue;
  const inSm = sitemapUrls.some((u) => (u.replace(ORIGIN, '').replace(/\/$/, '') || '/') === r);
  if (!inSm) warn('not-in-sitemap', r + ' is prerendered but not in sitemap');
}

const result = {
  checked_at: new Date().toISOString(),
  site: 'homemassagekuta.com',
  pages: stats.pages,
  sitemap_urls: sitemapUrls.length,
  min_words: stats.minWords === Infinity ? 0 : stats.minWords,
  min_words_route: stats.minWordsRoute,
  fail_count: fails.length,
  warn_count: warns.length,
  verdict: fails.length ? 'FAIL' : 'PASS',
  fails,
  warns,
};

try { mkdirSync(join(repoPath, '..', 'seo-machine', 'out'), { recursive: true }); } catch {}
try { writeFileSync(join(repoPath, '..', 'seo-machine', 'out', 'qa-gate-' + new Date().toISOString().slice(0, 10) + '.json'), JSON.stringify(result, null, 2)); } catch {}

if (asJson) console.log(JSON.stringify(result, null, 2));
else {
  for (const f of fails) console.log('FAIL  [' + f.check + '] ' + f.detail);
  for (const w of warns.slice(0, 15)) console.log('warn  [' + w.check + '] ' + w.detail);
  if (warns.length > 15) console.log('warn  ... ' + (warns.length - 15) + ' more warnings');
  console.log('gate: ' + result.verdict + ' — ' + stats.pages + ' pages, ' + fails.length + ' fails, ' + warns.length + ' warnings, min words ' + (stats.minWords === Infinity ? 0 : stats.minWords) + ' (' + stats.minWordsRoute + ')');
}
process.exit(fails.length ? 1 : 0);
