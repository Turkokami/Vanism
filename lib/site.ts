/**
 * Single source of truth for entity constants. Nothing in this file may be
 * duplicated as a string literal elsewhere in the build.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://vanism.ai";
export const HOUSE_URL = "https://lokes.one";

export const ORG = {
  id: `${HOUSE_URL}/#organization`,
  legalName: "LOKES ONE LIMITED CO",
  url: HOUSE_URL,
} as const;

/**
 * REGISTRY #1 -- BLOCKING.
 * The founder is published on lokes.one but named on neither site. The build
 * fails loudly rather than shipping a placeholder Person into the entity graph.
 * Set FOUNDER_NAME once the legal name is confirmed in writing.
 */
export const FOUNDER_NAME: string | null = null;

export const FOUNDER = {
  id: `${HOUSE_URL}/#founder`,
  url: `${HOUSE_URL}/pages/founder`,
  jobTitle: "Founder",
  knowsAbout: [
    "van life",
    "overlanding",
    "splitboarding",
    "skateboarding",
    "backcountry travel",
    "board sports",
  ],
} as const;

export const APP = {
  id: `${SITE_URL}/#app`,
  name: "Vanism",
  category: "TravelApplication",
  os: "iOS",
} as const;

export const DOCTRINE_URL = `${HOUSE_URL}/pages/via-draconis`;
export const LINEAGE_URL = `${HOUSE_URL}/pages/dragon-style`;

/**
 * REGISTRY #2 -- BLOCKING on the /compare cluster.
 * Sekr ships an AI feature called Copilot. Naming ours the same reinforces a
 * competitor trademark on every comparison page. No comparison route renders
 * until this is set.
 */
export const COPILOT_RENAME: string | null = null;

/** REGISTRY #3 -- confirm against RevenueCat, not from memory. */
export const PRICING = {
  monthly: null as number | null,
  yearly: null as number | null,
  currency: "USD",
  /** Category average, cited on /pricing with this retrieval date. */
  categoryAverage: 59.99,
  categoryRange: "29.99-65.00",
  categorySourcedOn: "2026-07-30",
} as const;
