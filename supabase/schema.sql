-- ===========================================================================
-- VANISM SMART SITE -- DATA LAYER
-- Six tables, two materialized views.
--
-- LAW IV IS ENFORCED HERE, NOT IN THE UI. riders.opt_in_public defaults false
-- and mv_village_standing filters on it inside the view definition, so a
-- forgotten WHERE clause in application code cannot publish a private rider.
-- ===========================================================================

create table if not exists riders (
  id                uuid primary key default gen_random_uuid(),
  trailname         text unique not null,
  created_at        timestamptz not null default now(),
  -- LAW IV. Do not change this default. Ever.
  opt_in_public     boolean not null default false,
  opted_in_at       timestamptz
);

create table if not exists objectives (
  id                uuid primary key default gen_random_uuid(),
  slug              text not null,
  state             text not null,
  name              text not null,
  summary           text not null default '',
  body              text not null default '',
  lat               double precision,
  lng               double precision,
  access_status     text,                    -- open | seasonal | permit | closed | unknown
  last_verified_at  timestamptz,
  created_at        timestamptz not null default now(),
  unique (state, slug)
);

create table if not exists runs (
  id                uuid primary key default gen_random_uuid(),
  slug              text unique not null,
  name              text not null,
  summary           text not null default '',
  updated_at        timestamptz not null default now()
);

create table if not exists run_objectives (
  run_id            uuid not null references runs(id) on delete cascade,
  objective_id      uuid not null references objectives(id) on delete cascade,
  position          int  not null,
  primary key (run_id, objective_id)
);

create table if not exists check_ins (
  id                uuid primary key default gen_random_uuid(),
  rider_id          uuid not null references riders(id) on delete cascade,
  objective_id      uuid not null references objectives(id) on delete cascade,
  verified          boolean not null default false,   -- GPS fix inside geofence
  occurred_at       timestamptz not null default now()
);

-- LAW I. Append-only. No row may originate from a purchase event; the check
-- constraint makes that a database rule rather than a policy document.
create table if not exists rank_ledger (
  id                uuid primary key default gen_random_uuid(),
  rider_id          uuid not null references riders(id) on delete cascade,
  delta             int not null,
  reason            text not null,
  source            text not null default 'checkin',
  occurred_at       timestamptz not null default now(),
  constraint rank_never_purchased check (source in ('checkin','run_completion','correction'))
);

-- ---------------------------------------------------------------------------
-- MATERIALIZED VIEWS
-- Ground and Village pages never run aggregates at request time. At 1,500 ISR
-- routes that is the difference between a build that scales and one that melts.
-- ---------------------------------------------------------------------------

create materialized view if not exists mv_ground_stats as
select
  o.slug,
  o.state,
  o.name,
  o.summary,
  o.body,
  o.lat,
  o.lng,
  o.access_status,
  o.last_verified_at,
  coalesce(count(c.id) filter (where c.verified), 0)::int as verified_checkins,
  array_length(regexp_split_to_array(coalesce(o.body,''), '\s+'), 1) as body_words
from objectives o
left join check_ins c on c.objective_id = o.id
group by o.id;

create unique index if not exists mv_ground_stats_key
  on mv_ground_stats (state, slug);

-- LAW IV. The opt_in_public filter lives HERE. Application code reads this
-- view and never the riders table.
create materialized view if not exists mv_village_standing as
select
  r.trailname,
  coalesce(count(c.id) filter (where c.verified), 0)::int          as verified_checkins,
  count(distinct c.objective_id)::int                              as objectives_reached,
  count(distinct ro.run_id)::int                                   as runs_completed,
  count(distinct o.state)::int                                     as states_touched,
  max(c.occurred_at)                                               as last_checkin_at
from riders r
left join check_ins c      on c.rider_id = r.id
left join objectives o     on o.id = c.objective_id
left join run_objectives ro on ro.objective_id = o.id
where r.opt_in_public = true          -- <<< LAW IV. DO NOT MOVE TO THE QUERY.
group by r.trailname;

create unique index if not exists mv_village_standing_key
  on mv_village_standing (trailname);

-- ---------------------------------------------------------------------------
-- RLS
-- ---------------------------------------------------------------------------
alter table riders     enable row level security;
alter table check_ins  enable row level security;
alter table rank_ledger enable row level security;

-- No anon policy on riders at all. The anon role reaches rider data only
-- through mv_village_standing.
create policy objectives_public_read on objectives for select to anon using (true);
create policy runs_public_read       on runs       for select to anon using (true);
