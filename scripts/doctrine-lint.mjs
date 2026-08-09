#!/usr/bin/env node
/**
 * LAW II AND LAW III, ENFORCED AT BUILD TIME.
 *
 * A doctrine that only appears in the manifesto is decoration. One that fails
 * a build is a rule. This runs before `next build` (see package.json).
 *
 * Checks:
 *   1. No escape vocabulary in rendered body copy. generateMetadata is exempt
 *      -- doctrine governs voice, not targeting.
 *   2. No JSON-LD written outside lib/schema.tsx (Prohibition 1).
 *   3. No *.vercel.app in any legal or App Store facing string (Prohibition 11).
 *   4. No hardcoded aggregateRating (Prohibition 2).
 *   5. Registry blockers reported, and fatal when building for production.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname, relative, sep } from "node:path";

const ROOT = process.cwd();
const SKIP = new Set(["node_modules", ".next", ".git", "scripts"]);

const BANNED = [
  "escape the 9-5", "escape the 9 to 5", "escape the rat race",
  "live free", "the open road is calling", "wanderlust",
  "quit your job", "leave it all behind", "find yourself",
];

const failures = [];
const warnings = [];

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP.has(entry)) continue;
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p);
    else if ([".ts", ".tsx", ".mdx", ".css"].includes(extname(p))) check(p);
  }
}

function stripMetadata(src) {
  // Crude but effective: drop generateMetadata bodies and metadata objects so
  // category keywords there do not trip Law II.
  return src
    .replace(/export const metadata[\s\S]*?^};/gm, "")
    .replace(/export async function generateMetadata[\s\S]*?^}/gm, "");
}

function check(path) {
  // Normalise to POSIX separators so path comparisons below (e.g. the
  // lib/schema.tsx exemption) hold on Windows as well as CI's Linux.
  const rel = relative(ROOT, path).split(sep).join("/");
  const src = readFileSync(path, "utf8");
  if (src.includes("doctrine-lint-ignore-file")) return;
  const body = stripMetadata(src).toLowerCase();

  for (const phrase of BANNED) {
    if (body.includes(phrase)) {
      failures.push(`LAW II  ${rel} -- escape vocabulary: "${phrase}"`);
    }
  }

  if (rel !== "lib/schema.tsx" && /"@context"\s*:\s*"https:\/\/schema\.org"/.test(src)) {
    failures.push(`LAW III ${rel} -- JSON-LD outside lib/schema.tsx (Prohibition 1)`);
  }

  if (/aggregateRating[\s\S]{0,120}ratingValue\s*:\s*[\d.]/.test(src) && rel !== "lib/schema.tsx") {
    failures.push(`PROHIB 2 ${rel} -- hardcoded aggregateRating`);
  }

  if (/vercel\.app/.test(src) && !rel.startsWith("next.config")) {
    failures.push(`PROHIB 11 ${rel} -- *.vercel.app reference`);
  }
}

walk(ROOT);

// Registry blockers.
const site = readFileSync(join(ROOT, "lib/site.ts"), "utf8");
if (/export const FOUNDER_NAME: string \| null = null/.test(site)) {
  warnings.push("REGISTRY #1 -- FOUNDER_NAME unset. Entity graph ships without a Person node.");
}
if (/export const COPILOT_RENAME: string \| null = null/.test(site)) {
  warnings.push("REGISTRY #2 -- COPILOT_RENAME unset. /compare cluster is blocked.");
}
if (/monthly: null/.test(site) || /yearly: null/.test(site)) {
  warnings.push("REGISTRY #3 -- subscription prices unset. /pricing renders PRICE PENDING.");
}

const prod = process.env.VERCEL_ENV === "production";

for (const w of warnings) console.warn(`  warn  ${w}`);
for (const f of failures) console.error(`  FAIL  ${f}`);

if (failures.length || (prod && warnings.length)) {
  console.error(
    `\ndoctrine-lint: ${failures.length} failure(s), ${warnings.length} warning(s).` +
      (prod ? " Registry blockers are fatal in production." : "")
  );
  process.exit(1);
}

console.log(`doctrine-lint: clean (${warnings.length} open registry item(s)).`);
