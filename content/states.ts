import type { Block } from "./blocks";
import { STATE_AK } from "./state-ak";
import { STATE_AZ } from "./state-az";
import { STATE_CA } from "./state-ca";
import { STATE_CO } from "./state-co";
import { STATE_ID } from "./state-id";
import { STATE_MT } from "./state-mt";
import { STATE_NM } from "./state-nm";
import { STATE_NV } from "./state-nv";
import { STATE_OR } from "./state-or";
import { STATE_SD } from "./state-sd";
import { STATE_TX } from "./state-tx";
import { STATE_UT } from "./state-ut";
import { STATE_WA } from "./state-wa";
import { STATE_WY } from "./state-wy";

/**
 * STATIC STATE HUBS -- the geo-capture layer.
 *
 * Each state carries authored overview prose so the hub is a real page whether
 * or not the database yet holds verified objectives for it. When objectives
 * exist, the route renders them beneath this content.
 */
export type StateContent = {
  code: string;
  name: string;
  answer: string;
  blocks: Block[];
  faq: { q: string; a: string }[];
};

export const STATES: Record<string, StateContent> = {
  ak: STATE_AK,
  az: STATE_AZ,
  ca: STATE_CA,
  co: STATE_CO,
  id: STATE_ID,
  mt: STATE_MT,
  nm: STATE_NM,
  nv: STATE_NV,
  or: STATE_OR,
  sd: STATE_SD,
  tx: STATE_TX,
  ut: STATE_UT,
  wa: STATE_WA,
  wy: STATE_WY,
};

export const STATE_CODES = Object.keys(STATES);

export function getState(code: string): StateContent | null {
  return STATES[code] ?? null;
}
