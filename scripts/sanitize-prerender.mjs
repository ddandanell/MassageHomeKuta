import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// snapshot capture (prerender-snapshot.mjs) and the committed-file sanitiser
// both use this one implementation.
import { dedupeJsonLd } from "./lib/jsonld-dedupe.mjs";

const file = resolve(process.argv[2] || "seo/prerender.json");
const doc = JSON.parse(readFileSync(file, "utf8"));
let before = 0;
let after = 0;
for (const page of doc.pages || []) {
  const blocks = page.jsonLd || [];
  before += blocks.length;
  page.jsonLd = dedupeJsonLd(blocks);
  after += page.jsonLd.length;
}
writeFileSync(file, JSON.stringify(doc, null, 1));
console.log(`sanitize-prerender: ${file} — jsonLd blocks ${before} -> ${after}`);
