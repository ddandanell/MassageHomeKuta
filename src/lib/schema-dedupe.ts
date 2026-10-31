import { SITE_CONFIG } from "@/config/site";

/**
 * One JSON-LD block per entity, in the DOM Google actually indexes.
 *
 * The prerendered HTML already ships the page's structured data, and the client
 * render (react-helmet in StructuredData plus a few page-level <script> tags)
 * injects the same entities again on mount — so a page finished with two
 * LocalBusiness nodes, two BreadcrumbLists, sometimes with conflicting
 * priceRange values ("$" left over from a prerender built before the config
 * moved to "$$").
 *
 * Independent QA Reviewer filed this as T-0006 item 7 on 31 Oct; render-audit
 * measured 83 routes with a duplicate @type and 81 with a conflicting
 * priceRange before this module existed.
 *
 * Rule: group blocks by @type plus @id (or name/url/headline). Within a group,
 * prefer the block whose priceRange matches SITE_CONFIG.priceRange — the single
 * source of truth for the published band — otherwise keep the last block, which
 * is the freshest client render. Two entities of the same type with different
 * ids are both kept, because the key differs.
 */
const LD_SELECTOR = 'script[type="application/ld+json"]';

const keyOf = (block: unknown): string | null => {
  if (!block || typeof block !== "object") return null;
  const b = block as Record<string, unknown>;
  const type = Array.isArray(b["@type"]) ? (b["@type"] as unknown[]).join("+") : String(b["@type"] || "");
  if (!type) return null;
  return type + "|" + String(b["@id"] || b["name"] || b["url"] || b["headline"] || "");
};

const matchesConfig = (block: Record<string, unknown>) =>
  Boolean(SITE_CONFIG.priceRange) && block.priceRange === SITE_CONFIG.priceRange;

const dedupe = () => {
  const scripts = Array.from(document.querySelectorAll<HTMLScriptElement>(LD_SELECTOR));
  const kept = new Map<string, { script: HTMLScriptElement; block: Record<string, unknown> }>();
  const drop: HTMLScriptElement[] = [];
  for (const script of scripts) {
    let parsed: unknown;
    try {
      parsed = JSON.parse(script.textContent || "");
    } catch {
      continue; // invalid JSON-LD is a build-time defect, not this module's job
    }
    const block = (Array.isArray(parsed) ? parsed[0] : parsed) as Record<string, unknown>;
    const key = keyOf(block);
    if (!key) continue;
    const previous = kept.get(key);
    if (!previous) {
      kept.set(key, { script, block });
      continue;
    }
    if (matchesConfig(block) && !matchesConfig(previous.block)) {
      drop.push(previous.script);
      kept.set(key, { script, block });
    } else {
      drop.push(script);
    }
  }
  for (const script of drop) script.parentNode?.removeChild(script);
};

export const installSchemaDedupe = () => {
  if (typeof document === "undefined") return;
  dedupe();
  const observer = new MutationObserver(() => dedupe());
  observer.observe(document.head, { childList: true });
  window.setTimeout(dedupe, 1500);
};
