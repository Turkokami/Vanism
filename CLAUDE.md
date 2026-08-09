# Working in this repository

Read this before the first commit. It is the short form of the *Vanism Unified
Smart Site Build Plan*; where the two disagree, the plan wins.

## What this is

Greenfield rebuild of vanism.ai. **The existing site is not being edited and no
code is migrated from it.** It is a data source only: legal text, imagery,
NAP-equivalent facts. Do not port components, routes or copy from it.

Next.js 15 App Router · TypeScript · Tailwind v4 · Supabase · Vercel.

## The one rule that explains the other twelve

The four Via Draconis laws are enforced by machines, not stated on an about
page. If you find yourself writing a comment that says "remember not to…",
you are writing the wrong thing — find the check that makes it impossible and
extend that instead.

| Law | Enforced by |
|---|---|
| I — Earned, never given | `assertSellable()` in `lib/doctrine.ts`; `rank_never_purchased` constraint in `supabase/schema.sql` |
| II — Transmute, don't escape | `scripts/doctrine-lint.mjs` banned-phrase scan of body copy |
| III — Discipline is architecture | `lib/schema.tsx` is the sole JSON-LD source; lint fails any other emitter |
| IV — Silence has weight | `riders.opt_in_public DEFAULT FALSE`; filter inside `mv_village_standing`; `scripts/privacy-test.mjs` |

## Hard prohibitions

1. No JSON-LD outside `lib/schema.tsx`. Compose nodes, pass through `graph()`.
2. No hardcoded `aggregateRating`. Live App Store data or omit the property.
3. Nothing failing `isPublishable()` enters the sitemap.
4. Rank, Dragon and standing are never offered as a purchasable benefit.
5. No escape vocabulary in body copy. `generateMetadata` is exempt — doctrine
   governs voice, not targeting.
6. No rider surface without affirmative opt-in. 404, never 403.
7. No competitor disparaged. Every competitor figure carries a retrieval date.
8. No text baked into images or meaning-carrying SVG.
9. No published URL changed without a 301 in `next.config.ts`.
10. No placeholder Person, brand name or legal URL in production.
11. No App Store legal URL on a `*.vercel.app` subdomain.
12. No `/compare` content before `COPILOT_RENAME` is set.
13. No performance regression past LCP 2.5s mobile — launch-blocking.

## Registry — do not invent values for these

Four items block their phase and are **fatal when `VERCEL_ENV=production`**.
They are warnings locally so the tree still runs.

| # | Constant | File |
|---|---|---|
| 1 | `FOUNDER_NAME` | `lib/site.ts` |
| 2 | `COPILOT_RENAME` | `lib/site.ts` |
| 3 | `PRICING.monthly` / `PRICING.yearly` | `lib/site.ts` |
| 4 | Published privacy + terms text | `app/legal/*` |

If asked to "just put something in for now", refuse and surface the registry
item. A placeholder Person in the entity graph teaches the index a wrong fact
that then has to be un-taught.

## Conventions

- **Content lives in `content/*.ts`**, typed, not in JSX. Routes render content;
  they do not contain it.
- **Structured data**: build nodes with the helpers in `lib/schema.tsx`, wrap in
  `graph()`, render through `<JsonLd>`.
- **Every indexable page** carries: a canonical, an `AnswerBox`, breadcrumbs, and
  a `CtaBar`. Pages without a next action are not shipped.
- **Data access** goes through `lib/queries.ts`. Never query Supabase from a
  route. Never read the `riders` table — use `mv_village_standing`.
- **Type face use**: `.display` for page-level headings only, `.data` for
  anything a rider could verify (coordinates, counts, dates), body default
  otherwise. `.eyebrow` for kickers.
- **Colour**: `--color-brass` is for earned states and primary actions only.
  `--color-verify` is a *state*, used solely where a claim is backed by
  verified check-ins. Neither is decoration.

## Before every commit

```bash
npm run doctrine     # Law II / III gate — must exit 0
npm run typecheck
npm run build
```

Before any Village route ships, additionally:

```bash
node scripts/privacy-test.mjs   # Law IV gate
```

## Phase report

After completing a phase, append a report to `BUILD-STATE.md` in the format at
the bottom of that file. Do not roll forward without it.
