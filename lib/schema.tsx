import { ORG, FOUNDER, FOUNDER_NAME, APP, SITE_URL, HOUSE_URL, DOCTRINE_URL } from "./site";

/**
 * THE ONLY JSON-LD SOURCE IN THE TREE (Prohibition 1, Law III).
 * No page writes structured data inline. Every node resolves by @id so that
 * one named human accumulates authority across two domains instead of
 * splitting it in half.
 */

type Node = Record<string, unknown>;

/**
 * The only wrapper permitted to emit an @context. Pages compose nodes; they
 * never author a graph literal (Prohibition 1, enforced by doctrine-lint).
 */
export function graph(...nodes: Node[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/** Prohibition 10 -- a placeholder Person must never reach production. */
function personNode(): Node | null {
  if (!FOUNDER_NAME) {
    // Fatal on a real production deploy, a warning everywhere else -- matches
    // the doctrine-lint gate (VERCEL_ENV), so the tree still builds locally.
    // next build always sets NODE_ENV=production, so gating on that blocked
    // every local build; VERCEL_ENV is the codebase's production signal.
    if (process.env.VERCEL_ENV === "production") {
      throw new Error(
        "REGISTRY #1 BLOCKING: FOUNDER_NAME is unset. The entity graph cannot " +
          "ship without a confirmed legal name. See lib/site.ts."
      );
    }
    return null;
  }
  return {
    "@type": "Person",
    "@id": FOUNDER.id,
    name: FOUNDER_NAME,
    url: FOUNDER.url,
    jobTitle: FOUNDER.jobTitle,
    worksFor: { "@id": ORG.id },
    knowsAbout: [...FOUNDER.knowsAbout],
  };
}

/**
 * Prohibition 2 -- live App Store data or the property is omitted. A rating we
 * cannot source is a rating we do not claim.
 */
export type Rating = { value: number; count: number } | null;

export async function fetchAggregateRating(): Promise<Rating> {
  const id = process.env.APPSTORE_APP_ID;
  if (!id) return null;
  try {
    const res = await fetch(`https://itunes.apple.com/lookup?id=${id}`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return null;
    const json = (await res.json()) as {
      results?: { averageUserRating?: number; userRatingCount?: number }[];
    };
    const r = json.results?.[0];
    if (!r?.averageUserRating || !r.userRatingCount) return null;
    return { value: Number(r.averageUserRating.toFixed(1)), count: r.userRatingCount };
  } catch {
    return null;
  }
}

export function organizationNode(): Node {
  return {
    "@type": "Organization",
    "@id": ORG.id,
    name: ORG.legalName,
    url: ORG.url,
    owns: [{ "@id": APP.id }],
  };
}

export function appNode(rating: Rating, offers?: Node[]): Node {
  const node: Node = {
    "@type": "SoftwareApplication",
    "@id": APP.id,
    name: APP.name,
    url: SITE_URL,
    applicationCategory: APP.category,
    operatingSystem: APP.os,
    publisher: { "@id": ORG.id },
    isPartOf: { "@id": ORG.id },
  };
  if (FOUNDER_NAME) node.creator = { "@id": FOUNDER.id };
  if (rating) {
    node.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: rating.value,
      ratingCount: rating.count,
    };
  }
  if (offers?.length) node.offers = offers;
  return node;
}

/** The root graph. Rendered once, in the root layout. */
export async function rootGraph() {
  const rating = await fetchAggregateRating();
  const person = personNode();
  return {
    "@context": "https://schema.org",
    "@graph": [
      organizationNode(),
      ...(person ? [person] : []),
      appNode(rating),
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: APP.name,
        publisher: { "@id": ORG.id },
      },
    ],
  };
}

/** Ground objective -- Place, with verification expressed as a real property. */
export function objectiveGraph(o: {
  slug: string;
  state: string;
  name: string;
  lat: number;
  lng: number;
  verifiedCheckins: number;
  lastVerified: string;
  summary: string;
}) {
  const url = `${SITE_URL}/ground/${o.state}/${o.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Place",
        "@id": `${url}#place`,
        name: o.name,
        description: o.summary,
        url,
        geo: { "@type": "GeoCoordinates", latitude: o.lat, longitude: o.lng },
        isAccessibleForFree: true,
        additionalProperty: {
          "@type": "PropertyValue",
          name: "Rider-verified check-ins",
          value: o.verifiedCheckins,
          valueReference: o.lastVerified,
        },
      },
      breadcrumb([
        ["Ground", `${SITE_URL}/ground`],
        [o.state.toUpperCase(), `${SITE_URL}/ground/${o.state}`],
        [o.name, url],
      ]),
    ],
  };
}

/** Codex entry -- every entry carries the same Person @id as author. */
export function codexGraph(e: { slug: string; title: string; published: string; summary: string }) {
  const url = `${SITE_URL}/codex/${e.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: e.title,
        description: e.summary,
        url,
        datePublished: e.published,
        publisher: { "@id": ORG.id },
        ...(FOUNDER_NAME ? { author: { "@id": FOUNDER.id } } : {}),
        about: { "@id": `${DOCTRINE_URL}/#doctrine` },
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
    ],
  };
}

/** Dispatch posts. Same Person @id as the Codex -- one author, one graph. */
export function articleNode(a: {
  url: string;
  headline: string;
  description: string;
  published: string;
}): Node {
  return {
    "@type": "Article",
    "@id": `${a.url}#article`,
    headline: a.headline,
    description: a.description,
    url: a.url,
    datePublished: a.published,
    publisher: { "@id": ORG.id },
    ...(FOUNDER_NAME ? { author: { "@id": FOUNDER.id } } : {}),
    isPartOf: { "@id": `${SITE_URL}/#website` },
  };
}

export function offerNode(o: {
  id: string;
  name: string;
  price: number;
  currency: string;
  period: "P1M" | "P1Y";
  validUntil: string;
}): Node {
  return {
    "@type": "Offer",
    "@id": `${SITE_URL}/pricing#${o.id}`,
    name: o.name,
    price: o.price,
    priceCurrency: o.currency,
    priceValidUntil: o.validUntil,
    availability: "https://schema.org/InStock",
    category: "subscription",
    eligibleDuration: { "@type": "QuantitativeValue", value: o.period },
  };
}

export function faqNode(items: { q: string; a: string }[], pageUrl: string): Node {
  return {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: items.map((i) => ({
      "@type": "Question",
      name: i.q,
      acceptedAnswer: { "@type": "Answer", text: i.a },
    })),
  };
}

export function breadcrumb(trail: [string, string][]): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map(([name, item], i) => ({
      "@type": "ListItem",
      position: i + 1,
      name,
      item,
    })),
  };
}

export { HOUSE_URL };
