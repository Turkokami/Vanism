# Vanism Smart Site

Greenfield rebuild of vanism.ai on Next.js 15 App Router, TypeScript, Tailwind v4,
Supabase and Vercel. **This replaces the existing site. Nothing is migrated from
it except NAP-equivalent facts, legal text and imagery** -- the old site is a data
source, not a starting point.

Built to the *Vanism Unified Smart Site Build Plan* (August 2026). Scored against
the Sasquatch Smart Site Scorecard: eight dimensions, 1-5, averaged to two decimals.
Baseline 1.63, target 4.50.

> This is a **structure scaffold**, authored offline. It has not been
> `npm install`-ed or type-checked. Expect to resolve imports and install
> dependencies on first run.

## Getting started

```bash
cp .env.example .env.local     # fill in Supabase + App Store id
npm install
psql "$SUPABASE_DB_URL" -f supabase/schema.sql
npm run doctrine               # Law II / Law III build gate
npm run dev
```

## Ship order -- do not reorder

1. `app/support/page.tsx` -- closes the live 404. Apple requires this URL.
2. Point App Store Connect Privacy/Terms at vanism.ai, then set
   `APP_STORE_LEGAL_REPOINTED=true` to enable the gateway redirect.
3. Rewrite `/os` launch-state copy (App Store, not TestFlight).
4. `app/sitemap.ts` + `app/robots.ts` + canonicals.
5. Everything else.

## The four estates

| Route | Estate | Render | Revalidate |
|---|---|---|---|
| `/ground/[state]` | THE GROUND | SSG hub | build |
| `/ground/[state]/[objective]` | THE GROUND | ISR + PPR, 60 prerendered | 1800s |
| `/runs/[run]` | THE RUNS | ISR | 3600s |
| `/codex/[entry]` | THE CODEX | SSG from `content/codex.ts` | build |
| `/village/[trailname]` | THE VILLAGE | ISR, opt-in only | 300s + webhook |

## The doctrine is enforced, not decorative

| Law | Enforced at |
|---|---|
| I -- Earned, never given | `assertSellable()` throws at build if a paid tier implies standing. `rank_ledger` has a check constraint forbidding purchase sources. |
| II -- Transmute, don't escape | `scripts/doctrine-lint.mjs` fails the build on escape vocabulary in body copy. `generateMetadata` is exempt. |
| III -- Discipline is architecture | `lib/schema.tsx` is the only JSON-LD source; the lint script fails any other file emitting a graph. |
| IV -- Silence has weight | `riders.opt_in_public DEFAULT FALSE`; `mv_village_standing` filters inside the view; private riders 404, never 403. |

## Open blockers

| # | Item | Blocks | Set at |
|---|---|---|---|
| 1 | Founder legal name | Entity graph | `lib/site.ts :: FOUNDER_NAME` |
| 2 | In-app AI rename (Sekr "Copilot" collision) | `/compare` cluster | `lib/site.ts :: COPILOT_RENAME` |
| 3 | Real subscription prices | `/pricing` | `lib/site.ts :: PRICING` |
| 4 | Free-tier boundary | `/pricing` copy | product decision |
| 5 | Published privacy + terms text | Legal routes | `app/legal/*` |

`npm run doctrine` reports all of these. They are warnings locally and **fatal
when `VERCEL_ENV=production`** -- the build will not ship with a placeholder
Person in the entity graph.

## Design tokens

Dark ground, one accent, uppercase display -- the established identity.
The accent is survey-marker brass: a benchmark disc is set into rock by someone
who walked there, never handed out, and it records a verified position. That is
Law I as a colour. `--color-verify` is a *state*, used only where a claim is
backed by GPS-verified check-ins.

Type: Archivo (display, condensed, uppercase, used sparingly), Inter (body),
JetBrains Mono (anything a rider could verify -- coordinates, counts, dates).

The signature element is `components/VerificationStamp.tsx`.
