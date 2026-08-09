/**
 * THE PUBLISHABILITY GATE (Prohibition 3).
 * A thin Ground page is worse than no Ground page. Failing rows still render
 * at their URL -- riders following a link get an answer -- but they are
 * excluded from the sitemap and carry noindex,follow.
 */

export type ObjectiveRow = {
  slug: string;
  state: string;
  name: string;
  lat: number | null;
  lng: number | null;
  access_status: string | null;
  verified_checkins: number;
  body_words: number;
  last_verified_at: string | null;
};

export const GATE = {
  minCheckins: 3,
  minBodyWords: 180,
  maxVerificationAgeMonths: 18,
} as const;

export function isPublishable(o: ObjectiveRow): boolean {
  if (o.verified_checkins < GATE.minCheckins) return false;
  if (o.lat == null || o.lng == null) return false;
  if (!o.access_status || o.access_status === "unknown") return false;
  if (o.body_words < GATE.minBodyWords) return false;
  if (!o.last_verified_at) return false;

  const ageMs = Date.now() - new Date(o.last_verified_at).getTime();
  const months = ageMs / (1000 * 60 * 60 * 24 * 30.44);
  return months <= GATE.maxVerificationAgeMonths;
}

/** Reported in every phase report: passed vs withheld. */
export function gateReport(rows: ObjectiveRow[]) {
  const passed = rows.filter(isPublishable);
  return {
    passed: passed.length,
    withheld: rows.length - passed.length,
    rows: passed,
  };
}
