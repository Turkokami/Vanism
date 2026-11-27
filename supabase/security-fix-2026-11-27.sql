-- Security fix, 2026-11-27. Safe to run more than once.
--
-- Run this once in the Supabase dashboard (SQL Editor) of the project that
-- vanism.ai reads. It changes permissions only; no rows are added, changed
-- or deleted.
--
-- 1. Turns on row level security for objectives, runs and run_objectives, so
--    the public anon key can read them but can no longer edit or delete them.
-- 2. Lets only the server run refresh_ground_views().

alter table if exists objectives     enable row level security;
alter table if exists runs           enable row level security;
alter table if exists run_objectives enable row level security;

do $$
begin
  if to_regclass('public.objectives') is not null
     and not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'objectives' and policyname = 'objectives_public_read') then
    create policy objectives_public_read on objectives for select to anon using (true);
  end if;

  if to_regclass('public.runs') is not null
     and not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'runs' and policyname = 'runs_public_read') then
    create policy runs_public_read on runs for select to anon using (true);
  end if;

  if to_regclass('public.run_objectives') is not null
     and not exists (select 1 from pg_policies where schemaname = 'public' and tablename = 'run_objectives' and policyname = 'run_objectives_public_read') then
    create policy run_objectives_public_read on run_objectives for select to anon using (true);
  end if;

  if to_regprocedure('public.refresh_ground_views()') is not null then
    alter function public.refresh_ground_views() set search_path = public;
    revoke execute on function public.refresh_ground_views() from public, anon, authenticated;
    grant execute on function public.refresh_ground_views() to service_role;
  end if;
end $$;

-- Check: every row below should say true.
select c.relname as table_name, c.relrowsecurity as rls_on
from pg_class c
join pg_namespace n on n.oid = c.relnamespace
where n.nspname = 'public'
  and c.relname in ('riders', 'check_ins', 'rank_ledger', 'objectives', 'runs', 'run_objectives')
order by 1;
