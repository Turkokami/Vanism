#!/usr/bin/env node
/**
 * LAW IV GATE -- required before any Village route ships.
 *
 * A private rider must be indistinguishable from one who does not exist. That
 * is not a UI property; it has to hold at the status code, the response body,
 * the timing, and the sitemap. This checks all four.
 *
 *   BASE=https://vanism.ai PRIVATE_TRAILNAME=someone node scripts/privacy-test.mjs
 */

const BASE = process.env.BASE ?? "http://localhost:3000";
const PRIVATE = process.env.PRIVATE_TRAILNAME;
const NONEXISTENT = `zzz-not-a-rider-${Date.now()}`;

const results = [];
function record(name, pass, detail = "") {
  results.push({ name, pass, detail });
  console.log(`${pass ? "  PASS" : "  FAIL"}  ${name}${detail ? ` -- ${detail}` : ""}`);
}

async function timed(path) {
  const t0 = performance.now();
  const res = await fetch(`${BASE}${path}`, { redirect: "manual" });
  const body = await res.text();
  return { status: res.status, ms: performance.now() - t0, body };
}

async function main() {
  if (!PRIVATE) {
    console.error(
      "PRIVATE_TRAILNAME is required. Set it to a real rider with opt_in_public=false."
    );
    process.exit(2);
  }

  console.log(`Law IV suite against ${BASE}\n`);

  const priv = await timed(`/village/${PRIVATE}`);
  const none = await timed(`/village/${NONEXISTENT}`);

  // 1. Status code. 403 would confirm the account exists.
  record("private rider returns 404, not 403", priv.status === 404, `got ${priv.status}`);

  // 2. Same status as a name nobody registered.
  record(
    "private and non-existent return the same status",
    priv.status === none.status,
    `${priv.status} vs ${none.status}`
  );

  // 3. Same body. A different body length is an oracle.
  record(
    "private and non-existent return the same body",
    priv.body.length === none.body.length,
    `${priv.body.length}b vs ${none.body.length}b`
  );

  // 4. Timing. A large gap lets an attacker enumerate accounts.
  const gap = Math.abs(priv.ms - none.ms);
  record(
    "response timing is not an oracle",
    gap < 150,
    `${gap.toFixed(0)}ms difference`
  );

  // 5. Sitemap must not list the private rider.
  const sm = await fetch(`${BASE}/sitemap.xml`).then((r) => r.text());
  record("private trailname absent from sitemap", !sm.includes(`/village/${PRIVATE}`));

  const failed = results.filter((r) => !r.pass);
  console.log(
    `\nprivacy-test: ${results.length - failed.length}/${results.length} passed.`
  );
  if (failed.length) {
    console.error("Law IV gate BLOCKED. Do not ship Village routes.");
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
