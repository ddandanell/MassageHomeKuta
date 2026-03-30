# SEO Weekly Report - 2026-03-30

## Executive Summary
Week 1 focused on the highest-confidence issue affecting search relevance and local intent: `homemassagekuta.com` was surfacing Ubud identity signals on a Kuta brand. Live checks showed Ubud-focused title tags, canonical tags, author tags, robots sitemap references, and sitemap URLs on the Kuta domain. Search Console also showed weak site-wide scale with only 9 indexed pages and 28 not indexed pages.

This week shipped a low-risk foundation fix on branch `codex/week1-kuta-seo-foundation`: remove Ubud leakage from the core crawl path, tighten Kuta/villa/hotel metadata on the homepage and commercial pages, and improve internal linking toward area pages already showing demand in Search Console.

## 1. Snapshot

### Search Console
- Last 84 days: `94` clicks, `3,820` impressions, `2.5%` CTR, average position `11`
- Last 28 days vs previous 28 days: `8` vs `29` clicks, `234` vs `1,200` impressions, `3.4%` vs `2.4%` CTR, average position `9.1` vs `9.4`
- Last 7 days vs previous 7 days: `1` vs `0` clicks, `51` vs `42` impressions, `2.0%` vs `0%` CTR, average position `10.4` vs `10.7`

### Key Page Movements
- `/` remained the main landing page: `55` clicks / `2,699` impressions over 3 months
- `/areas/uluwatu`: `6` clicks / `64` impressions over 3 months
- `/areas/pererenan`: `5` clicks / `75` impressions over 3 months
- `/services/four-hands-massage`: `5` clicks / `57` impressions over 3 months
- `/services`: `4` clicks / `450` impressions over 3 months, but dropped to `0` clicks / `93` impressions in the latest 28 days
- `/services/lymphatic-drainage-massage`: `1` click / `107` impressions over 3 months

### Key Query Movements
- `home massage`: `3` clicks / `206` impressions
- `massage home service`: `1` click / `209` impressions
- `massage home`: `1` click / `109` impressions
- `home massage kuta`: `1` click / `2` impressions
- `mobile massage ubud`: `1` click / `4` impressions

### Engagement And Conversion Signals
- Google Analytics access for `homemassagekuta.com` was not available in the current logged-in Analytics session.
- No GA booking or proxy-conversion data was available for this cycle.
- Current measurement must rely on Search Console, live-site inspection, and code-level conversion review until GA access is restored.

## 2. Findings

### Top Opportunities
- Fix the Kuta/Ubud identity mismatch across title tags, canonicals, robots, sitemap references, and shared modules.
- Improve CTR on pages already showing demand, especially `/services`, the homepage, and service/area pages already ranking inside positions 4 to 20.
- Increase internal authority toward `/areas/uluwatu`, `/areas/pererenan`, `/areas/ungasan`, and `/areas/legian`.
- Remove invalid or misleading internal links from the sitemap page so crawl signals point only to valid Kuta pages.

### Top Risks
- The deployed site appears to rely on SPA metadata, so crawlers may still see mostly the default `index.html` head unless route prerendering or SSR is introduced later.
- GA property access is missing, so conversion-side prioritization is weaker than it should be.
- Search Console shows only `9` indexed pages and `28` not indexed pages, which suggests crawl/indexing inefficiency beyond metadata alone.

### Anomalies
- The live Kuta domain returned an Ubud homepage title and Ubud canonical.
- `robots.txt` on the live domain referenced an Ubud sitemap.
- `sitemap.xml` on the live domain contained Ubud URLs rather than Kuta-aligned coverage URLs.
- Several different Kuta URLs returned the same Ubud-focused HTML head.

### Technical Issues
- Default canonical inconsistency: static HTML used non-`www`, while the site config uses `https://www.homemassagekuta.com`.
- Shared modules still contained Ubud cross-links and labels even on the Kuta branch.
- The HTML sitemap page linked to invalid or mismatched landing pages.
- The static XML sitemaps still contained `/areas/ubud`.

### Local-Intent Mismatches
- Ubud references were still present in shared homepage modules, area routing, service template grids, and the sitemap page.
- Service/pricing modules on the homepage still used service titles with `Ubud` suffixes.
- Search Console already showed an Ubud query impression despite the Kuta brand objective, reinforcing the mismatch risk.

## 3. Top 20 Opportunities

| Opportunity | Traffic | Ranking | CTR | Conversion | Ease | Confidence | Priority |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Fix deployed Kuta/Ubud metadata identity mismatch | 10 | 10 | 9 | 8 | 8 | 10 | 9.2 |
| Remove Ubud from robots, sitemap, and crawl-path references | 9 | 9 | 8 | 7 | 8 | 10 | 8.5 |
| Standardize default canonical and OG URL to `www` | 8 | 8 | 7 | 6 | 9 | 9 | 7.8 |
| Rewrite homepage default title/meta for Kuta villa and hotel intent | 8 | 7 | 9 | 7 | 8 | 9 | 8.0 |
| Rewrite `/services` title/meta for high-impression CTR recovery | 8 | 8 | 9 | 7 | 8 | 9 | 8.2 |
| Rewrite `/packages` title/meta for couples and villa-package intent | 6 | 6 | 8 | 8 | 8 | 8 | 7.3 |
| Rewrite `/areas` title/meta and hero copy to remove Ubud confusion | 6 | 7 | 7 | 6 | 8 | 9 | 7.2 |
| Remove broken sitemap-page links | 5 | 7 | 6 | 4 | 9 | 9 | 6.7 |
| Replace Ubud cross-promo with internal links to live opportunity areas | 6 | 7 | 6 | 7 | 8 | 8 | 7.0 |
| Replace footer Ubud link with internal opportunity-area links | 5 | 6 | 5 | 6 | 8 | 8 | 6.3 |
| Remove `/areas/ubud` from active route set | 6 | 7 | 5 | 5 | 8 | 8 | 6.5 |
| Replace Ubud references in service template area grids | 5 | 6 | 5 | 5 | 8 | 8 | 6.2 |
| Remove Ubud labels from homepage services and pricing modules | 5 | 5 | 5 | 6 | 9 | 9 | 6.5 |
| Improve internal links to `/areas/uluwatu` | 6 | 7 | 5 | 6 | 7 | 8 | 6.5 |
| Improve internal links to `/areas/pererenan` | 6 | 7 | 5 | 6 | 7 | 8 | 6.5 |
| Improve internal links to `/areas/ungasan` | 5 | 6 | 4 | 6 | 7 | 7 | 5.8 |
| Improve `/services/lymphatic-drainage-massage` CTR and snippet alignment | 5 | 6 | 8 | 5 | 6 | 7 | 6.2 |
| Improve `/services/four-hands-massage` CTR and internal support links | 5 | 6 | 7 | 7 | 6 | 7 | 6.3 |
| Restore GA property access and define booking proxy conversions | 7 | 3 | 2 | 10 | 4 | 6 | 5.3 |
| Evaluate prerender/SSR for key money pages | 8 | 8 | 7 | 6 | 3 | 6 | 6.3 |

Scoring formula used: `(traffic upside + ranking upside + CTR upside + conversion upside + ease + confidence) / 6`

## 4. Actions Chosen

| Page / Template | Change | Evidence | Expected Outcome | Reversible |
| --- | --- | --- | --- | --- |
| `index.html` | Updated default title, description, canonical, OG/Twitter tags to Kuta-focused, `www` canonical, local OG image, removed builder Twitter handle | Live site was returning Ubud-focused head tags; crawlers may be seeing default SPA shell | Cleaner default snippet and canonical baseline for crawlers | Yes |
| `src/config/site.ts` | Tightened global title, description, and keyword defaults around Kuta, villas, hotels, and treatment intent | Global site config powers shared meta defaults | Better fallback metadata consistency | Yes |
| `src/pages/Index.tsx` | Rewrote homepage title/meta for `home massage kuta` and villa/hotel booking intent | Homepage is top Search Console landing page | CTR and topic clarity improvement | Yes |
| `src/pages/Services.tsx` | Rewrote title/meta/H1 and swapped bottom internal links to opportunity area pages | `/services` had strong impressions but weak recent clicks | CTR and internal relevance improvement | Yes |
| `src/pages/Packages.tsx` | Rewrote package metadata and hero copy toward couples/villa/package intent | Package page is a commercial page with booking intent | Better commercial query match and booking intent | Yes |
| `src/components/CrossLocationPromo.tsx` | Replaced external Ubud promo with internal links to Legian, Pererenan, Uluwatu, and Ungasan | Shared homepage module was leaking Ubud identity; GSC already shows traction on those area pages | More internal authority to pages already showing demand | Yes |
| `src/components/Footer.tsx` | Replaced Ubud location link with internal opportunity-area links; updated year | Shared footer was leaking external Ubud identity | Reduced mixed-brand signals and better cluster linking | Yes |
| `src/pages/RecommendedServices.tsx` | Replaced external Ubud service card with internal couples villa massage page | Shared content still promoted Ubud brand | Better internal support for a money page | Yes |
| `src/App.tsx` | Removed active `/areas/ubud` route from route config and explicit routes | Active route was reinforcing wrong-location crawl paths | Lower chance of index confusion and cannibalization | Yes |
| `src/pages/Sitemap.tsx` | Removed Ubud and invalid landing-page links; made counts align to valid pages | HTML sitemap page contained bad internal links | Better crawl hygiene and cleaner internal linking | Yes |
| `src/pages/ServiceAreas.tsx` | Removed Ubud area from the active list and rewrote copy toward Kuta, Pererenan, and Uluwatu | Service areas page was explicitly listing Ubud | Reduced location confusion and tighter page-topic accuracy | Yes |
| `src/templates/MassageTypeLandingPage.tsx` | Replaced Ubud area link with Pererenan | Shared service template still linked to Ubud | Better support for an existing GSC opportunity page | Yes |
| `src/components/Services.tsx` and `src/components/PricingDetails.tsx` | Removed `Ubud` from homepage service labels | Homepage content still surfaced Ubud in service names | Cleaner brand alignment for users and crawlers | Yes |
| `public/sitemap.xml` and `sitemap.xml` | Removed `/areas/ubud` from static XML sitemap files | Static sitemaps still contained Ubud URLs | Cleaner crawl and indexing signals | Yes |
| `src/pages/BlogPost2Booking.tsx` | Fixed a raw `>` JSX parse issue to restore lint success | Verification was blocked by a pre-existing parse error | Clean lint run with warnings only | Yes |

## 5. Implementation Summary

### Branch
- `codex/week1-kuta-seo-foundation`

### Files Changed
- `index.html`
- `public/sitemap.xml`
- `sitemap.xml`
- `src/App.tsx`
- `src/components/CrossLocationPromo.tsx`
- `src/components/Footer.tsx`
- `src/components/PricingDetails.tsx`
- `src/components/Services.tsx`
- `src/config/site.ts`
- `src/pages/BlogPost2Booking.tsx`
- `src/pages/Index.tsx`
- `src/pages/Packages.tsx`
- `src/pages/RecommendedServices.tsx`
- `src/pages/ServiceAreas.tsx`
- `src/pages/Services.tsx`
- `src/pages/Sitemap.tsx`
- `src/templates/MassageTypeLandingPage.tsx`

### Commit Summary Draft
- `seo: remove Ubud leakage and tighten Kuta metadata foundation`

### PR Title Draft
- `Week 1 SEO foundation: remove Ubud leakage and tighten Kuta metadata`

### PR Description Draft
- Fixes the highest-risk local-intent mismatch on `homemassagekuta.com`
- Removes Ubud references from the active route set, static XML sitemaps, sitemap page, shared promo/footer modules, and homepage service labels
- Rewrites homepage, services, packages, and service-areas metadata toward Kuta, villa, hotel, and booking intent
- Strengthens internal linking toward opportunity pages already showing Search Console demand: Legian, Pererenan, Uluwatu, and Ungasan
- Standardizes the default canonical and social metadata to the `www` domain
- Includes one small unrelated parse fix in `src/pages/BlogPost2Booking.tsx` so lint can complete cleanly

## 6. Next Measurement Plan

### What To Watch Next Week
- Live homepage title, canonical, robots, and sitemap output after deployment
- Search Console page metrics for:
  - `/`
  - `/services`
  - `/packages`
  - `/areas`
  - `/areas/uluwatu`
  - `/areas/pererenan`
  - `/areas/ungasan`
  - `/areas/legian`
  - `/services/four-hands-massage`
  - `/services/lymphatic-drainage-massage`
  - `/services/pregnancy-massage`
- Indexed vs not indexed count in Search Console coverage
- Query mix for `home massage kuta`, `massage services kuta`, `villa massage bali`, `hotel massage kuta`, and any remaining `ubud` terms

### Success Criteria
- Live domain no longer serves Ubud-focused title/canonical/robots/sitemap signals
- XML sitemap contains only intended Kuta-site area URLs in the active crawl path
- Homepage and `/services` CTR improve versus the prior 28-day baseline
- Opportunity area pages maintain or improve impressions after stronger internal linking
- Ubud query leakage decreases on the Kuta property

### Expand, Revise, Or Revert Rules
- Expand title/meta work if homepage and `/services` impressions hold while CTR improves
- Expand internal-link support if `/areas/uluwatu`, `/areas/pererenan`, or `/areas/ungasan` gain impressions without ranking loss
- Revise if impressions fall sharply after deployment or the live shell still serves old metadata
- Revert only if deployment introduces routing, sitemap, or canonical regressions

## Verification
- `npm run lint` passes with warnings only
- `npm run build` passes
- Remaining lint warnings are pre-existing `react-refresh/only-export-components` warnings outside this SEO change set
