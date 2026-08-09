import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!url || !anon) {
  throw new Error("Supabase env missing. Copy .env.example to .env.local.");
}

/**
 * Read client for public surfaces. RLS is the boundary, not this file.
 * Nothing here may query the riders table directly -- public rider data comes
 * from mv_village_standing, which filters opt_in_public inside the view
 * definition so a forgotten WHERE clause cannot publish a private rider.
 */
export const db = createClient(url, anon, {
  auth: { persistSession: false },
});
