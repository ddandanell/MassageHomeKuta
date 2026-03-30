# SEO Weekly Report: 2026-03-31

## A. Executive Summary
- The highest-risk issue is still live deployment accuracy: on March 31, 2026, `https://www.homemassagekuta.com/` was still serving Ubud-focused title, canonical, robots, and sitemap signals on the live domain. That is the top blocker because it can override otherwise-correct on-page work and continue attracting wrong-location queries.
- Search Console shows a mixed pattern. The last 84 days gained visibility versus the prior 84 days, but CTR and average position weakened as impressions broadened into weaker-intent clusters. The last 28 days fell sharply in clicks and impressions versus the prior 28 days, with persistent Ubud query leakage. The last 7 days showed early movement on Pererenan, Kerobokan, Petitenget, Uluwatu, lymphatic drainage, and hot stone.
- This week's implementation focused on controlled, reversible fixes tied to that evidence:
  - removed wrong-location and dead-route leakage from active booking and specialty pages
  - expanded template/schema coverage to match actual serviced Bali areas
  - strengthened internal links to opportunity areas already surfacing in GSC
  - improved `/services` and key service pages for CTR, relevance, and booking intent
  - noindexed one clearly off-strategy Ubud/hiking page rather than force-fitting it into the Kuta cluster

## B. Metrics Summary

### Search Console Snapshot

| Window | Current Period | Previous Period | Clicks | Impressions | CTR | Avg Position |
| --- | --- | --- | ---: | ---: | ---: | ---: |
| 7 days | 2026-03-22 to 2026-03-28 | 2026-03-15 to 2026-03-21 | 1 vs 0 | 51 vs 42 | 2.0% vs 0.0% | 10.4 vs 10.7 |
| 28 days | 2026-03-01 to 2026-03-28 | 2026-02-01 to 2026-02-28 | 8 vs 29 | 234 vs 1,200 | 3.4% vs 2.4% | 9.1 vs 9.4 |
| 84 days | 2026-01-04 to 2026-03-28 | 2025-10-12 to 2026-01-03 | 80 vs 66 | 3,445 vs 1,860 | 2.3% vs 3.5% | 11.4 vs 9.1 |

### Property Baseline
- Search Console overview on March 31, 2026 showed `94` clicks, `3,820` impressions, `2.5%` CTR, and average position `11` for the rolling three-month view.

### Key Page Movements
- `/areas/pererenan`: strongest recent mover. `1` click and `19` impressions in the last 7 days vs `0` / `4` prior; `2` clicks and `33` impressions in the last 28 days vs `0` / `21` prior.
- `/areas/uluwatu`: stable qualified visibility. `5` impressions vs `3` in the last 7 days; `2` clicks and `21` impressions in the last 28 days vs `2` / `23` prior.
- `/areas/ungasan`: held clicks in the last 28 days, `2` clicks and `6` impressions vs `2` / `8`.
- `/services`: still a core opportunity. `93` impressions and `0` clicks in the last 28 days vs `224` impressions and `3` clicks prior.
- `/services/four-hands-massage`: retained demand with `2` clicks in the last 28 days, though impressions fell to `11` from `31`.
- `/services/lymphatic-drainage-massage`: early growth signal, `4` impressions in the last 7 days vs `1` prior.
- `/services/hot-stone-massage`: also improving, `4` impressions in the last 7 days vs `2` prior.
- `/packages`: impressions appeared in the last 28 days (`10`) but clicks did not materialize.

### Key Query Movements
- Wrong-intent leakage persists:
  - `home massage ubud`: `11` impressions in current 28 days vs `16` prior
  - `ubud home massage`: `4` vs `13`
  - `home service massage ubud`: `3` vs `1`
- Emerging correct-intent/local-intent signals:
  - `massage pererenan`: `3` impressions current 28 days vs `0` prior
- Commercial head terms still show low CTR despite impressions:
  - `home massage`
  - `massage home service`
  - `massage home`
  - `home service massage`

### Analytics Status
- Google Analytics access for `homemassagekuta.com` was still blocked in the current account/session on March 31, 2026.
- The visible GA property in-session was unrelated and showed no accessible `homemassagekuta.com` results in property search.
- CRO analysis therefore remains limited to on-site funnel review and proxy conversion heuristics until GA access is fixed.

## C. Findings

### Top Risks
- Live production still returns Ubud-oriented title/canonical/robots/sitemap output on the Kuta domain.
- Wrong-location Ubud query clusters remain visible in GSC despite Kuta targeting.
- A cluster of specialty pages was internally linking to dead short routes like `/ubud` and `/${slug}` instead of active `/areas/...` routes.
- One active page, `/post-hike-recovery-massage-bali/`, is explicitly Ubud/Amed/Sidemen oriented and off-strategy for the Kuta domain.

### Top Opportunities
- `/services` needs stronger CTR and internal-link support because it still collects impressions without current clicks.
- `/areas/pererenan`, `/areas/uluwatu`, `/areas/ungasan`, and `/areas/legian` deserve more internal authority because they are already attracting real impressions and some clicks.
- `/services/lymphatic-drainage-massage`, `/services/hot-stone-massage`, and `/services/four-hands-massage` are good candidates for incremental CTR and intent gains.
- Template/schema coverage was narrower than the actual service footprint, which likely weakened relevance for opportunity pages outside the old Kuta-only cluster.

### Technical Accuracy Audit
- Live domain check on March 31, 2026:
  - homepage title returned Ubud-focused copy
  - canonical returned `https://homemassageubud.com`
  - `robots.txt` referenced the Ubud sitemap
  - `sitemap.xml` returned Ubud URLs
- Repo/state check:
  - local `index.html`, `public/robots.txt`, and `public/sitemap.xml` are Kuta-aligned
  - the live mismatch therefore appears to be a deployment/base-source problem, not just a missing local code change
- Code audit:
  - active specialty pages still had wrong short-route area links
  - active booking and commercial pages still referenced Ubud in service-area arrays and FAQs
  - shared schema used hardcoded `City` typing and an under-declared service area list

## D. Top 20 Opportunities

| Opportunity | Evidence | Traffic | Rank | CTR | Conv | Ease | Confidence | Priority |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| Deploy Kuta head/canonical/robots/sitemap fixes to production | Live site still serves Ubud shell on March 31, 2026 | 10 | 10 | 9 | 8 | 5 | 10 | 8.7 |
| Fix broken `/${slug}` area links on specialty pages | Confirmed in active tourist pages before this run | 7 | 8 | 6 | 7 | 9 | 10 | 7.8 |
| Remove Ubud leakage from active commercial pages | GSC still shows Ubud query clusters in current 28-day data | 7 | 8 | 7 | 7 | 8 | 9 | 7.7 |
| Improve `/services` CTR and intent matching | 93 impressions, 0 clicks in current 28 days | 9 | 8 | 9 | 7 | 8 | 8 | 8.2 |
| Expand schema/service coverage to real serviced areas | Shared schema under-declared service footprint | 6 | 8 | 5 | 5 | 8 | 8 | 6.7 |
| Strengthen links to `/areas/pererenan` | 33 impressions, 2 clicks current 28 days | 7 | 8 | 5 | 6 | 8 | 9 | 7.2 |
| Strengthen links to `/areas/uluwatu` | 21 impressions, 2 clicks current 28 days | 7 | 7 | 5 | 6 | 8 | 9 | 7.0 |
| Strengthen links to `/areas/ungasan` | 2 clicks, persistent impressions current 28 days | 6 | 7 | 5 | 6 | 8 | 8 | 6.7 |
| Strengthen support to `/areas/legian` | Impressions halved month over month, still core/local | 6 | 7 | 6 | 7 | 8 | 8 | 7.0 |
| Improve `/services/lymphatic-drainage-massage` for travel-recovery intent | 4 impressions vs 1 in last 7 days | 6 | 7 | 6 | 7 | 8 | 9 | 7.2 |
| Improve `/services/hot-stone-massage` for villa/luxury intent | 4 impressions vs 2 in last 7 days | 5 | 6 | 6 | 7 | 8 | 8 | 6.7 |
| Improve `/services/four-hands-massage` for special-occasion intent | 2 clicks current 28 days, impressions still meaningful | 6 | 6 | 6 | 8 | 8 | 8 | 7.0 |
| Improve `/packages` page for pricing/package intent | 10 impressions current 28 days, 0 clicks | 5 | 6 | 7 | 7 | 8 | 8 | 6.8 |
| Contain off-strategy Ubud hiking content | `/post-hike-recovery-massage-bali/` misaligned with Kuta cluster | 5 | 7 | 4 | 4 | 8 | 9 | 6.2 |
| Clean unsupported trust claims in shared templates | Existing broad claims reduce credibility risk tolerance | 4 | 4 | 5 | 6 | 8 | 8 | 5.8 |
| Restore GA access for CRO analysis | No accessible `homemassagekuta.com` GA property in current session | 7 | 6 | 5 | 10 | 3 | 4 | 5.8 |
| Add/verify WhatsApp proxy conversion tracking | CRO blocked without usable conversion data | 6 | 5 | 4 | 10 | 4 | 5 | 5.7 |
| Review duplicate route declarations in `src/App.tsx` | Route config is duplicated below mapped routes | 4 | 6 | 3 | 4 | 6 | 6 | 4.8 |
| Recheck live head tags and request GSC validation after deploy | Production mismatch can hide local fixes | 6 | 7 | 7 | 5 | 8 | 9 | 7.0 |
| Audit remaining non-core tourist pages for location mismatch | Repository still contains Ubud-oriented data/content not in weekly batch | 5 | 6 | 4 | 4 | 6 | 7 | 5.3 |

## E. Actions Chosen This Week

### 1. Technical Accuracy and Wrong-Location Cleanup
- Fixed active specialty-page area links from `/${slug}` to `/areas/${slug}`.
- Removed Ubud from active booking flow area selection.
- Replaced Ubud references on active commercial/specialty pages with currently served, indexed, or rising areas like Legian, Pererenan, and Ungasan.
- Noindexed `/post-hike-recovery-massage-bali/` because it is explicitly Ubud/Amed/Sidemen-led and off-strategy for the Kuta domain.

Why:
- Supported by live wrong-location leakage plus GSC Ubud query persistence.

Expected metric:
- lower Ubud query share
- cleaner crawl paths
- more internal authority flowing to active `/areas/...` pages

### 2. Shared Template and Schema Corrections
- Expanded declared service coverage in `SITE_CONFIG`.
- Switched structured-data `areaServed` typing from hardcoded `City` to more flexible `Place`.
- Updated the massage-type template to declare broader real coverage instead of a Kuta-only hardcoded set.
- Added opportunity-area internal links from service templates.
- Added nearby-area links from area templates while filtering out the inactive Ubud route.

Why:
- Supported by real impressions on Uluwatu, Pererenan, Ungasan, and other areas not fully represented in shared schema.

Expected metric:
- improved relevance and internal-link understanding for area/service relationships

### 3. `/services` and High-Intent Page Improvements
- Reworked `/services` metadata and above-the-fold copy for clearer villa/hotel and same-day intent.
- Added service-hub links to high-opportunity pages:
  - `/services/lymphatic-drainage-massage`
  - `/services/hot-stone-massage`
  - `/services/four-hands-massage`
  - `/areas/legian`
  - `/areas/pererenan`
  - `/areas/uluwatu`
  - `/areas/ungasan`
- Refined lymphatic, hot stone, and four hands metadata and intros around the real demand patterns seen in GSC.

Why:
- Supported by `/services` impression volume and early service-page movement.

Expected metric:
- CTR lift on `/services`
- stronger page-query alignment for specialty services

## F. Implementation Summary

### Branch
- `codex/week2-kuta-seo-cycle-2026-03-31`

### Files Changed
- Shared SEO and routing logic:
  - `src/config/site.ts`
  - `src/components/seo/StructuredData.tsx`
  - `src/components/EnhancedBookingDialog.tsx`
  - `src/templates/MassageTypeLandingPage.tsx`
  - `src/templates/ServiceAreaLandingPage.tsx`
- Core content hub and service intent:
  - `src/pages/Services.tsx`
  - `src/data/massageTypes.ts`
- Commercial and specialty-page cleanup:
  - `src/pages/CouplesMassageKuta.tsx`
  - `src/pages/SpaNearMeKuta.tsx`
  - `src/pages/MassageTherapistKutaBali.tsx`
  - `src/pages/PregnancyMassageBali.tsx`
  - `src/pages/MobileSpaDayPackageBali.tsx`
  - `src/pages/PostYogaRecoveryMassage.tsx`
  - `src/pages/CouplesVillaMassageBali.tsx`
  - `src/pages/GroupSpaDayBali.tsx`
  - `src/pages/DetoxWellnessMassageBali.tsx`
  - `src/pages/LuxuryVillaWellnessBali.tsx`
  - `src/pages/HoneymoonSpaBali.tsx`
  - `src/pages/UluwatuSurfMassage.tsx`
  - `src/pages/PostHikeRecoveryMassageBali.tsx`

### Verification
- `npm run build`: passed
- `npm run lint`: passed with existing warning-only Fast Refresh notices; no new lint errors were introduced

### Blockers
- Google Analytics property access for `homemassagekuta.com` is still unavailable in the current session.
- Live production still serves Ubud shell output, so deployment verification remains the top unresolved blocker outside this branch.

## G. PR Draft

### PR Title
`Week 2 SEO: fix wrong-location leakage, strengthen service-area links, and improve service intent pages`

### PR Description
```
## Summary
- remove wrong-location and dead-route leakage from active commercial and specialty pages
- expand shared schema/service coverage to match real Bali service areas
- strengthen internal links from service templates and /services to rising area pages
- improve /services plus key specialty service metadata and intent alignment
- noindex the off-strategy Ubud hiking recovery page to reduce mixed local signals

## Why
Search Console still shows Ubud-oriented query leakage on the Kuta domain, while current opportunity pages are Pererenan, Uluwatu, Ungasan, Legian, and several specialty services. The live site also still serves Ubud head/canonical/robots/sitemap output, so this PR focuses on the code-controlled side of the problem: cleaner internal signals, broader accurate schema, and stronger support for existing pages already attracting impressions.

## Validation
- npm run build
- npm run lint (warning-only, no errors)

## Follow-up after deploy
- verify live homepage/services/robots/sitemap head output on homemassagekuta.com
- request revalidation in Search Console if the deployment source is corrected
- monitor /services, /areas/pererenan, /areas/uluwatu, /areas/ungasan, /areas/legian, /services/lymphatic-drainage-massage, /services/hot-stone-massage, and /services/four-hands-massage
```

## H. Next-Week Priorities
- Fix the live deployment/source issue so the Kuta domain stops outputting Ubud title, canonical, robots, and sitemap signals.
- Recheck GSC query share for `home massage ubud`, `ubud home massage`, and related mismatch terms after this code ships.
- Watch CTR and impressions for `/services`, `/services/lymphatic-drainage-massage`, `/services/hot-stone-massage`, and `/services/four-hands-massage`.
- Watch page movement for `/areas/pererenan`, `/areas/uluwatu`, `/areas/ungasan`, and `/areas/legian`.
- Restore GA access and define WhatsApp proxy conversions if the property remains inaccessible.
- Review remaining non-core tourist pages for consolidation, noindex, or reorientation if they continue to pull wrong-location traffic.
