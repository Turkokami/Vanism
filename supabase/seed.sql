-- ===========================================================================
-- FIXTURE DATA
-- Twelve objectives across four states, three runs, four riders. Enough for
-- the Ground and Runs estates to render, the gate to demonstrably withhold
-- rows, and the Law IV privacy suite to have a real private rider to probe.
--
-- This is FIXTURE data. It is not rider-verified ground and must not ship to
-- production. Load it into preview environments only.
-- ===========================================================================

insert into riders (trailname, opt_in_public, opted_in_at) values
  ('switchback',   true,  now()),
  ('dryCreek',     true,  now()),
  ('nightshift',   true,  now()),
  ('quiet-mile',   false, null)          -- <-- probe this one with privacy-test
on conflict (trailname) do nothing;

insert into objectives (slug, state, name, summary, body, lat, lng, access_status, last_verified_at) values
  ('alvord-playa-east', 'or', 'Alvord Playa, east edge',
   'Hard-packed playa with unlimited flat ground and no shade. Enter only when the surface is dry.',
   'The east edge is the usable side. The approach track leaves the county road and firms up within a few hundred metres, and beyond that the playa takes any vehicle as long as it has not rained. It has no shade at all, which matters more than the distance from anywhere.

Riders consistently report the surface as the whole decision. Wet playa is not a marginal call; it is a recovery. Check the last confirmation date on this page before committing, and if it has rained in the week prior, treat the whole area as closed regardless of what the status says.

Water is the constraint here rather than space. Nearest reliable refill is a long way out and there is nothing on the playa itself.',
   42.5300, -118.5400, 'open', now() - interval '3 months'),

  ('steens-loop-north', 'or', 'Steens loop, north pullouts',
   'High-elevation pullouts along the loop road, seasonally gated and worth the timing.',
   'The loop road is gated for much of the year and the opening date moves with snowpack, so the seasonal status here is real rather than nominal. Riders who arrive in the first fortnight after opening report the best conditions and the fewest vehicles.

Pullouts along the north section are established and compacted. Several take a long wheelbase; the ones further up do not, and the difference is not obvious until you are committed.

Overnight temperatures at elevation drop hard even in midsummer.',
   42.7300, -118.5800, 'seasonal', now() - interval '5 months'),

  ('owyhee-canyon-rim', 'or', 'Owyhee canyon rim',
   'Rim sites above the canyon with high clearance required on the final approach.',
   'The last two miles are the whole question. The track is rutted and off-camber in two places, and riders consistently report that clearance rather than traction is the limiting factor.

Once up, the rim sites are spaced far apart and quiet. There is no water and no shade, and the surface is loose enough that setting up away from the edge is worth doing deliberately.

This is a site where the access status is doing real work. Confirm the date before planning around it.',
   42.9400, -117.2200, 'open', now() - interval '7 months'),

  ('sawtooth-nf-redfish', 'id', 'Sawtooth NF, Redfish approach',
   'Forest road dispersed sites near the Redfish approach, busy on weekends and quiet midweek.',
   'These are established sites on a maintained forest road, which makes them accessible to almost anything and consequently popular. Midweek they are quiet; from Friday afternoon they fill from the bottom of the road upward.

Water is available seasonally at the developed area nearby, but riders report the spigot off well before the posted closing date most years, so carry as if it is not there.

Stay limits are actively enforced in this district and are shorter than the fourteen-day default.',
   44.1300, -114.9200, 'open', now() - interval '2 months'),

  ('lost-river-flats', 'id', 'Lost River flats',
   'Open flats with long sightlines, wind exposure, and no shelter of any kind.',
   'Flat, open and easy to reach, which is the appeal and also the problem. There is no wind shelter anywhere on the flats and riders report that this is the deciding factor far more often than the surface or the access.

The ground takes any vehicle. Sites are not defined, so use the compacted ground that already exists rather than making new.

Nearest water is in town and should be treated as the planning constraint.',
   43.8500, -113.4500, 'open', now() - interval '4 months'),

  ('craters-backcountry', 'id', 'Craters backcountry access',
   'Permit-required backcountry access with a hard limit on vehicle numbers.',
   'This one requires a permit issued locally and the number available is genuinely limited, so it does not work as a fallback plan. Riders report the permit process as straightforward if done in advance and impossible on the day in season.

The surface is sharp volcanic rock and is unkind to tyres. Several reports mention this specifically.

There is no water. There is also no shade, and the rock holds heat well past sunset.',
   43.4600, -113.5600, 'permit', now() - interval '6 months'),

  ('escalante-hole-in-rock', 'ut', 'Hole-in-the-Rock road, mid-section',
   'Long washboard road with established pullouts, passable in a passenger vehicle when dry.',
   'The road is graded and long. The mid-section pullouts are established and well spaced, and riders consistently report that the washboard rather than any technical section is what determines how far in you want to go.

Rain changes this road completely and quickly. Several reports note becoming committed further in than intended when conditions turned.

No water anywhere along it. Plan the carry for the full duration.',
   37.4700, -111.1500, 'open', now() - interval '1 month'),

  ('san-rafael-swell-north', 'ut', 'San Rafael Swell, north approach',
   'Slickrock and sand sites with clearance requirements that vary sharply by approach.',
   'The north approach is the more forgiving of the two, but riders still report sand sections that catch out two-wheel drive vehicles, particularly late in the day when the surface is loose and hot.

Sites are on slickrock and are excellent. They are also fully exposed.

Water is a long way out in every direction.',
   38.9600, -110.7000, 'open', now() - interval '3 months'),

  ('cedar-mesa-rim', 'ut', 'Cedar Mesa rim sites',
   'Rim sites with seasonal fire restriction and a strong local expectation about ground use.',
   'Cedar Mesa carries active fire restrictions for much of the year and riders report them being enforced. The status here reflects that.

The sites themselves are established, spaced and quiet. Local expectation about staying on existing ground is high and well founded, given how much archaeology is in the area.

Carry water. There is none on the mesa.',
   37.5200, -109.8800, 'seasonal', now() - interval '8 months'),

  ('sierra-buttes-north', 'ca', 'Sierra Buttes, north forest roads',
   'Forest road sites at elevation, seasonally gated and snow-limited well into spring.',
   'Elevation makes the season short. The gate date moves and riders report it opening later than published in most years.

Sites are established along the forest road and several take a long wheelbase. Beyond the third junction the road narrows and turning becomes difficult.

Seasonal water at the nearby developed site is unreliable; treat it as absent.',
   39.6000, -120.6500, 'seasonal', now() - interval '9 months'),

  ('mojave-cima-dome', 'ca', 'Cima Dome, established pullouts',
   'Desert pullouts with easy access and extreme summer heat.',
   'Access is easy and the ground is forgiving. What makes or breaks this site is the season: riders report summer daytime conditions as genuinely dangerous rather than merely uncomfortable.

Sites are established and the expectation about using existing ground is strong, given how slowly this landscape recovers.

There is no water and no shade.',
   35.2600, -115.5200, 'open', now() - interval '2 months'),

  ('lassen-nf-east', 'ca', 'Lassen NF, east side roads',
   'Awaiting verification -- insufficient confirmed visits to publish.',
   'Short record. This objective exists in the database and is reachable by link, but it has not accumulated enough confirmed visits to enter the index.',
   40.4900, -121.1000, 'unknown', null)
on conflict (state, slug) do nothing;

-- Runs. Each joins four or more published objectives.
insert into runs (slug, name, summary) values
  ('the-high-desert-line', 'The High Desert Line',
   'Four objectives across southeast Oregon and central Idaho, timed for the window after the seasonal gates open and before the heat sets in.'),
  ('canyon-country-transit', 'Canyon Country Transit',
   'Utah rim and slickrock ground, run north to south, built around water carry rather than distance.'),
  ('the-cold-start', 'The Cold Start',
   'A shoulder-season run for riders who would rather have the ground to themselves than have it comfortable.')
on conflict (slug) do nothing;

insert into run_objectives (run_id, objective_id, position)
select r.id, o.id, x.position
from (values
  ('the-high-desert-line',   'alvord-playa-east',       1),
  ('the-high-desert-line',   'steens-loop-north',       2),
  ('the-high-desert-line',   'owyhee-canyon-rim',       3),
  ('the-high-desert-line',   'sawtooth-nf-redfish',     4),
  ('canyon-country-transit', 'escalante-hole-in-rock',  1),
  ('canyon-country-transit', 'cedar-mesa-rim',          2),
  ('canyon-country-transit', 'san-rafael-swell-north',  3),
  ('canyon-country-transit', 'craters-backcountry',     4),
  ('the-cold-start',         'sierra-buttes-north',     1),
  ('the-cold-start',         'lost-river-flats',        2),
  ('the-cold-start',         'mojave-cima-dome',        3),
  ('the-cold-start',         'owyhee-canyon-rim',       4)
) as x(run_slug, obj_slug, position)
join runs r on r.slug = x.run_slug
join objectives o on o.slug = x.obj_slug
on conflict do nothing;

-- Verified check-ins. Distribution is deliberate: most objectives clear the
-- three-check-in gate, lassen-nf-east does not, and cedar-mesa-rim /
-- sierra-buttes-north sit close to the 18-month freshness boundary so the
-- gate can be seen working rather than merely asserted.
insert into check_ins (rider_id, objective_id, verified, occurred_at)
select ri.id, o.id, true, o.last_verified_at - (n || ' days')::interval
from objectives o
cross join generate_series(0, 3) as n
join riders ri on ri.trailname = (array['switchback','dryCreek','nightshift','quiet-mile'])[n + 1]
where o.last_verified_at is not null
on conflict do nothing;

-- Refresh helper called by the nightly Vercel cron.
create or replace function refresh_ground_views() returns void as $$
begin
  refresh materialized view concurrently mv_ground_stats;
  refresh materialized view concurrently mv_village_standing;
end;
$$ language plpgsql security definer;

refresh materialized view mv_ground_stats;
refresh materialized view mv_village_standing;
