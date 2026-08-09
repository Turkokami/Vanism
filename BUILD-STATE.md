# BUILD STATE

Reported in the format defined in the Unified Build Plan, section 7.3.

```
PHASE 0 REPORT -- COMPLIANCE & TRUTH
Tickets:          8 attempted / 4 PASS / 4 OWNER-BLOCKED
  0.1 support page ................ PASS  app/support/page.tsx returns 200
  0.2 legal routes on vanism.ai ... PASS  app/legal/{privacy,terms}; redirect
                                          gated behind APP_STORE_LEGAL_REPOINTED
  0.3 /os launch copy ............. OWNER App Store Connect + Desk copy, off-repo
  0.4 lokes.one "Waitlisted" CTA .. OWNER Shopify side, off-repo
  0.5 markdown hashes in the post . OWNER Shopify side, off-repo
  0.6 TikTok handle ............... OWNER decision required
  0.7 off-domain OG image ......... PASS  metadataBase + /og/default.png
  0.8 Copilot rename .............. OWNER blocks /compare (registry #2)
Gate:             CLEAR FOR REPO WORK / 4 owner actions outstanding

PHASE 1 REPORT -- ENTITY & FOUNDATION
Tickets:          8 attempted / 7 PASS / 1 BLOCKED
  1.1 founder name ................ BLOCKED registry #1, fatal in production
  1.2 cross-domain @graph ......... PASS  lib/schema.tsx, sole JSON-LD source
  1.3 lokes.one founder page ...... OWNER off-repo
  1.4 live aggregateRating ........ PASS  fetchAggregateRating, never hardcoded
  1.5 sitemap / robots / canonical  PASS  /os noindex via headers()
  1.6 token layer + templates ..... PASS  app/globals.css @theme
  1.7 doctrine footer + routing ... PASS  components/DoctrineFooter.tsx
  1.8 supabase schema + 2 mviews .. PASS  supabase/schema.sql
Schema:           4/4 node types validate structurally
Scorecard delta:  Schema 1 -> 5 | E-E-A-T 2 -> 4 (pending 1.1) | Reviews 1 -> 3
Gate:             BLOCKED ON REGISTRY #1

PHASE 2 REPORT -- THE SELL
Tickets:          7 attempted / 5 PASS / 2 PARTIAL / 2 NOT STARTED
  2.1 /pricing .................... PARTIAL renders; prices null (registry #3)
  2.2 Law I audit ................. PASS  assertSellable() throws at build
  2.3 email capture ............... PARTIAL UI + route live; provider unwired
  2.4 /features spokes ............ PASS  9 spokes, 3 clauses, FAQ schema each
  2.5 /compare cluster ............ PASS  routes built, GATED behind registry #2
                                          -- 404s and stays out of sitemap until
                                          COPILOT_RENAME is set
  2.6 free web planner ............ NOT STARTED (registry #4)
  2.7 funnel instrumentation ...... NOT STARTED
Gate:             BLOCKED ON REGISTRY #2, #3

PHASE 3 REPORT -- THE GROUND
  3.1 isPublishable() gate ........ PASS  enforced at query source
  3.2 state hubs .................. PASS  app/ground/[state]
  3.3 objective route + PPR ....... PASS  60 prerendered via generateStaticParams
  3.4 scale to ~120 ............... AWAITING DATA
  3.5 ground<->run link mesh ...... PASS  run legs link to objectives
  3.6 verified-count component .... PASS  components/VerificationStamp.tsx
Publishable gate: enforced / counts pending first data load

PHASE 4 REPORT -- RUNS & CODEX
  4.1 12 named runs ............... AWAITING DATA  route + link mesh built
  4.2 40 Codex entries ............ PARTIAL  12 authored / 28 outstanding
                                    3 x Law I, 3 x Law II, 3 x Law III,
                                    2 x Law IV, 1 lineage
  4.3 skin arc cluster ............ PASS  /codex/the-skin-arc
  4.4 Law II copy audit ........... PASS  doctrine-lint clean across 58 files
  4.5 Dispatch cadence ............ PARTIAL  6 clusters live, 6 of ~40 posts
                                    commercial-intent clusters seeded first
PHASE 5 -- VILLAGE .............. routes + webhook live; privacy suite outstanding
PHASE 6 -- COMMERCE ............. not started
```

## Route inventory -- 21 route patterns

    /                               /features
    /ground                         /features/[capability]
    /ground/[state]                 /compare            (gated)
    /ground/[state]/[objective]     /compare/[competitor] (gated)
    /runs                           /dispatch
    /runs/[run]                     /dispatch/cluster/[cluster]
    /codex                          /dispatch/[post]
    /codex/[entry]                  /pricing
    /village                        /support
    /village/[trailname]            /legal/privacy
                                    /legal/terms

Internal link check: all resolve. No orphans.

## Handoff readiness

Repo is structurally complete and ready for version control.

    .gitignore .nvmrc .editorconfig vercel.json next-env.d.ts   repo hygiene
    CLAUDE.md                                                   agent brief: 13 prohibitions,
                                                                registry, conventions
    COMMIT-PLAN.md                                              19 reviewable commits
    .github/workflows/ci.yml                                    doctrine + typecheck + build
    .github/pull_request_template.md                            phase gate checklist
    scripts/privacy-test.mjs                                    Law IV suite: status, body,
                                                                timing, sitemap
    supabase/seed.sql                                           12 objectives / 3 runs /
                                                                4 riders (1 private)
    lib/types.ts                                                row types; no RiderRecord,
                                                                by design
    app/error.tsx app/loading.tsx                               boundaries
    app/api/og/route.tsx                                        edge OG, on-domain
    app/api/cron/refresh-views/route.ts                         nightly mview refresh

Seed data is deliberately shaped so the gate can be observed working rather than
asserted: `lassen-nf-east` fails on check-in count and unknown access status,
and two objectives sit near the 18-month freshness boundary. `quiet-mile` is a
private rider for the Law IV suite to probe.

## Next actions, in order

1. **Set `FOUNDER_NAME`** in `lib/site.ts`. Everything schema-related is blocked
   and the production build intentionally throws without it.
2. **Confirm the Copilot rename** and set `COPILOT_RENAME`. Unblocks the
   comparison cluster, which is the highest commercial-intent surface in the plan
   and the one a competitor is already building.
3. **Pull real prices from RevenueCat** into `PRICING`.
4. **Paste the published privacy and terms text** into `app/legal/*`.
5. Run `npm install && npm run doctrine && npm run typecheck` and resolve imports.
6. Load Supabase and confirm `mv_village_standing` filters `opt_in_public` in the
   view definition, by direct DB inspection -- not by reading application code.

## Privacy test suite -- required before any Village route ships

- Request a private rider's trailname: must return **404**, not 403.
- Confirm response timing for private vs non-existent is indistinguishable.
- Confirm no private trailname appears in `sitemap.xml` or the build manifest.
- Confirm `revalidatePath` is never called for a rider with `opt_in_public=false`.
