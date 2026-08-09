/**
 * Row shapes for the Supabase tables and views. Kept hand-written rather than
 * generated so the Law IV boundary is visible in the type system: there is no
 * exported type for the riders table, because application code must not read it.
 */

export type AccessStatus = "open" | "seasonal" | "permit" | "closed" | "unknown";

export type ObjectiveRecord = {
  slug: string;
  state: string;
  name: string;
  summary: string;
  body: string;
  lat: number | null;
  lng: number | null;
  access_status: AccessStatus | null;
  last_verified_at: string | null;
  verified_checkins: number;
  body_words: number;
};

export type RunRecord = {
  slug: string;
  name: string;
  summary: string;
  updated_at: string;
};

export type RunLeg = {
  position: number;
  objectives: Pick<ObjectiveRecord, "slug" | "state" | "name">;
};

/**
 * The ONLY rider shape application code may hold. Sourced from
 * mv_village_standing, which filters opt_in_public inside its own definition.
 * There is deliberately no RiderRecord type. Needing one means you are about
 * to read the riders table, which is the mistake this omission prevents.
 */
export type PublicRiderStanding = {
  trailname: string;
  verified_checkins: number;
  objectives_reached: number;
  runs_completed: number;
  states_touched: number;
  last_checkin_at: string | null;
};
