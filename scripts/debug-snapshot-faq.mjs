import { readFileSync } from "node:fs";
import { createRequire } from "node:module";

const doc = JSON.parse(readFileSync("seo/prerender.json", "utf8"));
const hits = doc.pages.filter((p) => p.path === "/faq");
console.log("pages with path /faq:", hits.length);
for (const h of hits) {
  console.log("  blocks:", h.jsonLd.map((j) => {
    const b = JSON.parse(j);
    return b["@type"] + ":" + (b.priceRange || "-");
  }));
}
console.log("total pages:", doc.pages.length);
const dupPaths = doc.pages.map((p) => p.path).sort().filter((p, i, a) => a.indexOf(p) !== i);
console.log("duplicate paths:", dupPaths.slice(0, 10));
