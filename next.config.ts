import type { NextConfig } from "next";

/**
 * PHASE 0.2 — App Store legal URLs must resolve to vanism.ai, never to the
 * C3I gateway subdomain. Enable the redirect ONLY after App Store Connect
 * has been repointed; enabling it first breaks the live review links.
 */
const GATEWAY_REPOINTED = process.env.APP_STORE_LEGAL_REPOINTED === "true";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,

  // Ground objectives render as ISR (revalidate) with a <Suspense>-wrapped
  // verification block. Partial Prerendering (experimental.ppr) is canary-only
  // and was removed when this project pinned stable Next 15.x.

  async headers() {
    return [
      {
        // PHASE 1.5 — The Desk is an authenticated surface. It is out of
        // scope for this build and must never enter the index.
        source: "/os/:path*",
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },

  async redirects() {
    const legal = GATEWAY_REPOINTED
      ? [
          { source: "/privacy", destination: "/legal/privacy", permanent: true },
          { source: "/terms", destination: "/legal/terms", permanent: true },
          { source: "/privacy-policy", destination: "/legal/privacy", permanent: true },
        ]
      : [];

    return [
      ...legal,
      // PROHIBITION 9 — no published URL changes without a 301. Log every
      // legacy path here as routes are retired from the old site.
      { source: "/app", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
