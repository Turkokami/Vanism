## What phase does this belong to

<!-- Phase number and ticket ID from the build plan, e.g. "Phase 3, ticket 3.4" -->

## Gate checklist

- [ ] `npm run doctrine` exits 0
- [ ] `npm run typecheck` clean
- [ ] `npm run build` succeeds
- [ ] No JSON-LD outside `lib/schema.tsx`
- [ ] No registry placeholder values introduced
- [ ] Every new indexable page has a canonical, an answer block, breadcrumbs and a CTA
- [ ] Any retired URL has a 301 in `next.config.ts`

## If this touches rider data

- [ ] `node scripts/privacy-test.mjs` passes
- [ ] Private riders return 404, not 403
- [ ] No private trailname reachable via sitemap or build manifest

## If this touches pricing or progression

- [ ] No paid tier row implies purchasable rank, Dragon or standing (Law I)
- [ ] `assertSellable()` still passes at build
