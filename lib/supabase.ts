import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * BUILD-SAFE. We do NOT throw when the env is missing. This module is imported
 * transitively by build-time paths (generateStaticParams, sitemap.ts), so a
 * throw here takes down the entire deploy -- including /support and /pricing,
 * which never touch Supabase. Instead we warn loudly and fall back to an
 * unreachable placeholder; every read then degrades to empty via the fail-soft
 * layer in queries.ts. Set the real values in .env.local / the Vercel project
 * to serve live data. (This is the same coupling fix as queries.ts, one level up.)
 */
if (!url || !anon) {
  console.warn(
    "[supabase] NEXT_PUBLIC_SUPABASE_URL / _ANON_KEY missing -- reads degrade to " +
      "empty. Set them in .env.local or the Vercel project to serve live data."
  );
}

/**
 * Read client for public surfaces. RLS is the boundary, not this file.
 * Nothing here may query the riders table directly -- public rider data comes
 * from mv_village_standing, which filters opt_in_public inside the view
 * definition so a forgotten WHERE clause cannot publish a private rider.
 */
export const db = createClient(
  url ?? "https://placeholder.supabase.co",
  anon ?? "placeholder-anon-key",
  { auth: { persistSession: false } }
);
