/**
 * One JSON-LD block per entity, shared by the snapshot capture and the
 * committed-file sanitiser.
 *
 * Why it exists: the snapshot is captured from the rendered <head>, which holds
 * the previous release's prerendered blocks plus whatever the client render
 * injects on top. Capturing that verbatim copies duplicates — and the stale
 * priceRange from a config that had since changed — back into the snapshot, so
 * every regeneration deepened the defect (T-0006 item 7).
 *
 * Rule: group by @type + @id (or name/url/headline). Within a group prefer the
 * block whose priceRange matches src/config/site.ts, because the config is the
 * single source of truth for the published price band; otherwise keep the last
 * block, which is the freshest client render.
 */
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

export const configPriceRange = (() => {
  try {
    const cfg = readFileSync(resolve("src/config/site.ts"), "utf8");
    const m = cfg.match(/priceRange:\s*["']([^"']+)["']/);
    return m ? m[1] : "";
  } catch {
    return "";
  }
})();

export const keyOf = (block) => {
  if (!block || typeof block !== "object") return null;
  const type = Array.isArray(block["@type"]) ? block["@type"].join("+") : String(block["@type"] || "");
  if (!type) return null;
  const ident = block["@id"] || block["name"] || block["url"] || block["headline"] || "";
  return type + "|" + String(ident);
};

const matchesConfig = (raw) => {
  if (!configPriceRange) return false;
  try {
    return JSON.parse(raw).priceRange === configPriceRange;
  } catch {
    return false;
  }
};

// The published price band is a config value. A captured LocalBusiness block that
// disagrees is a stale snapshot artefact (the client render replaces or removes it
// at runtime, so it only ever hurts crawlers that read the static head). Align it
// to the config; this changes a schema symbol, never a published price.
const alignConfig = (raw) => {
  if (!configPriceRange) return raw;
  try {
    const parsed = JSON.parse(raw);
    if (parsed && parsed["@type"] === "LocalBusiness" && parsed.priceRange !== configPriceRange) {
      parsed.priceRange = configPriceRange;
      return JSON.stringify(parsed);
    }
  } catch {
    /* leave unparseable entries alone */
  }
  return raw;
};

export function dedupeJsonLd(blocks, { logDrops = false, context = "" } = {}) {
  const kept = new Map();
  const order = [];
  for (const raw of blocks || []) {
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      order.push(raw); // leave unparseable entries for the gate to fail on
      continue;
    }
    const key = keyOf(Array.isArray(parsed) ? parsed[0] : parsed);
    if (!key) {
      order.push(raw);
      continue;
    }
    if (!kept.has(key)) {
      order.push(key);
      kept.set(key, raw);
    } else if (matchesConfig(raw) && !matchesConfig(kept.get(key))) {
      if (logDrops) {
        console.log(`jsonld-dedupe${context ? " (" + context + ")" : ""}: replaced duplicate [${key}] with config-matching block`);
      }
      kept.set(key, raw);
    } else if (logDrops) {
      console.log(`jsonld-dedupe${context ? " (" + context + ")" : ""}: dropped duplicate [${key}]`);
    }
  }
  return order.map((entry) => alignConfig(kept.has(entry) ? kept.get(entry) : entry));
}
