# Commit plan

Suggested sequence for taking this scaffold into version control. Each commit is
independently reviewable and leaves the tree in a coherent state. Run
`npm run doctrine` before each.

| # | Commit message | Files |
|---|---|---|
| 1 | `chore: scaffold Next.js 15 app router project` | `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `next-env.d.ts`, `.gitignore`, `.nvmrc`, `.editorconfig`, `vercel.json`, `.env.example` |
| 2 | `feat(design): token system and type scale` | `app/globals.css` |
| 3 | `feat(doctrine): four laws as build constraints` | `lib/doctrine.ts`, `scripts/doctrine-lint.mjs` |
| 4 | `feat(entity): cross-domain schema graph` | `lib/site.ts`, `lib/schema.tsx`, `components/JsonLd.tsx` |
| 5 | `feat(data): supabase schema, two materialized views` | `supabase/schema.sql`, `supabase/seed.sql`, `lib/supabase.ts`, `lib/types.ts`, `lib/queries.ts`, `lib/publishable.ts` |
| 6 | `feat(ui): shared components` | `components/*.tsx` |
| 7 | `feat(app): root layout, home, error boundaries` | `app/layout.tsx`, `app/page.tsx`, `app/not-found.tsx`, `app/error.tsx`, `app/loading.tsx` |
| 8 | `fix(compliance): support and legal routes` — **Phase 0.1/0.2** | `app/support/*`, `app/legal/**` |
| 9 | `feat(seo): sitemap, robots, OG image route` | `app/sitemap.ts`, `app/robots.ts`, `app/api/og/route.tsx` |
| 10 | `feat(funnel): pricing with Offer schema` | `app/pricing/*`, `app/api/subscribe/*` |
| 11 | `feat(ground): state hubs and objective routes` | `app/ground/**` |
| 12 | `feat(runs): named route estate` | `app/runs/**` |
| 13 | `feat(codex): doctrine estate, 12 entries` | `content/codex.ts`, `app/codex/**` |
| 14 | `feat(features): nine capability spokes` | `content/features.ts`, `app/features/**` |
| 15 | `feat(compare): comparison cluster, gated on registry #2` | `content/competitors.ts`, `components/ComparisonTable.tsx`, `app/compare/**` |
| 16 | `feat(dispatch): six clusters, six posts` | `content/dispatch.ts`, `app/dispatch/**` |
| 17 | `feat(village): opt-in profiles, 404 not 403` | `app/village/**`, `app/api/revalidate/*`, `scripts/privacy-test.mjs` |
| 18 | `ci: doctrine gate, typecheck, build` | `.github/**` |
| 19 | `docs: build plan, state, agent brief` | `README.md`, `CLAUDE.md`, `BUILD-STATE.md`, `COMMIT-PLAN.md` |

## After the last commit

1. `npm install` — nothing here has been installed or type-checked; it was
   authored offline. Expect import resolution work.
2. Create the Vercel project, add env vars from `.env.example`.
3. `psql "$SUPABASE_DB_URL" -f supabase/schema.sql`
4. `psql "$SUPABASE_DB_URL" -f supabase/seed.sql` (optional — fixture data so
   the Ground estate renders before real data exists)
5. Set the four registry values. The production build fails without them, by
   design.
