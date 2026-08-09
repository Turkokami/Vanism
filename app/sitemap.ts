import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getPublishableObjectives, getRuns, getPublicRiderSlugs } from "@/lib/queries";
import { getEntrySlugs } from "@/content/codex";
import { FEATURES } from "@/content/features";
import { COMPETITORS, canPublishComparisons } from "@/content/competitors";
import { POSTS, CLUSTERS } from "@/content/dispatch";

/**
 * PHASE 1.5 / 3.1 -- the gate is enforced at the source. getPublishableObjectives
 * filters before returning, so a thin page cannot reach the sitemap by any
 * caller path. Village entries come only from the public view (Law IV).
 */
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [objectives, runs, riders] = await Promise.all([
    getPublishableObjectives(),
    getRuns(),
    getPublicRiderSlugs(),
  ]);

  const states = Array.from(new Set(objectives.map((o) => o.state)));

  const fixed: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, priority: 1 },
    { url: `${SITE_URL}/pricing`, priority: 0.9 },
    { url: `${SITE_URL}/ground`, priority: 0.9 },
    { url: `${SITE_URL}/runs`, priority: 0.8 },
    { url: `${SITE_URL}/codex`, priority: 0.8 },
    { url: `${SITE_URL}/features`, priority: 0.9 },
    { url: `${SITE_URL}/dispatch`, priority: 0.8 },
    { url: `${SITE_URL}/village`, priority: 0.5 },
    { url: `${SITE_URL}/support`, priority: 0.4 },
    { url: `${SITE_URL}/legal/privacy`, priority: 0.2 },
    { url: `${SITE_URL}/legal/terms`, priority: 0.2 },
  ];

  return [
    ...fixed,
    ...states.map((s) => ({ url: `${SITE_URL}/ground/${s}`, priority: 0.7 })),
    ...objectives.map((o) => ({
      url: `${SITE_URL}/ground/${o.state}/${o.slug}`,
      lastModified: o.last_verified_at ?? undefined,
      priority: 0.6,
    })),
    ...runs.map((r) => ({
      url: `${SITE_URL}/runs/${r.slug}`,
      lastModified: (r.updated_at as string) ?? undefined,
      priority: 0.7,
    })),
    ...getEntrySlugs().map((e) => ({ url: `${SITE_URL}/codex/${e}`, priority: 0.6 })),
    ...FEATURES.map((f) => ({ url: `${SITE_URL}/features/${f.slug}`, priority: 0.8 })),
    // Registry #2 -- the comparison cluster stays out of the sitemap entirely
    // until the Copilot rename lands.
    ...(canPublishComparisons()
      ? [
          { url: `${SITE_URL}/compare`, priority: 0.8 },
          ...COMPETITORS.map((c) => ({
            url: `${SITE_URL}/compare/${c.slug}`,
            priority: 0.7,
          })),
        ]
      : []),
    ...CLUSTERS.map((c) => ({ url: `${SITE_URL}/dispatch/cluster/${c.id}`, priority: 0.6 })),
    ...POSTS.map((p) => ({
      url: `${SITE_URL}/dispatch/${p.slug}`,
      lastModified: p.published,
      priority: 0.6,
    })),
    ...riders.map((t) => ({ url: `${SITE_URL}/village/${t}`, priority: 0.3 })),
  ];
}
