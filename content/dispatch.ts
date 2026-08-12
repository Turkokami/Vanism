/**
 * DISPATCH -- PHASE 4.5.
 *
 * The topical layer. Six clusters, ordered by funnel position: commercial
 * intent first, then volume, then differentiation. Codex is doctrine;
 * Dispatch is the practical writing that ranks for what riders actually search.
 *
 * LAW II applies to body copy here as everywhere. Category terms belong in
 * the title and description, which the linter exempts.
 */

import type { Block } from "./blocks";
import { DISPERSED_RULES } from "./pillar-dispersed-rules";
import { PILLAR_CHOOSING_AND_BUYING_A_VAN } from "./pillar-choosing-and-buying-a-van";
import { PILLAR_TIRES_TRACTION_AND_SELF_RECOVERY } from "./pillar-tires-traction-and-self-recovery";
import { PILLAR_TRAVELING_WITH_A_DOG_ON_PUBLIC_LAND } from "./pillar-traveling-with-a-dog-on-public-land";
import { PILLAR_WORKING_REMOTELY_FROM_THE_ROAD } from "./pillar-working-remotely-from-the-road";
import { PILLAR_CARRYING_BIKES_BOATS_AND_ADVENTURE_GEAR } from "./pillar-carrying-bikes-boats-and-adventure-gear";
import { PILLAR_SKIING_AND_WINTER_SPORTS_FROM_THE_VAN } from "./pillar-skiing-and-winter-sports-from-the-van";
import { PILLAR_PHOTOGRAPHY_AND_THE_HONEST_RECORD } from "./pillar-photography-and-the-honest-record";
import { PILLAR_HEALTH_FITNESS_AND_A_LONG_SEASON } from "./pillar-health-fitness-and-a-long-season";
import { PILLAR_OVERNIGHT_PARKING_OFF_PUBLIC_LAND } from "./pillar-overnight-parking-off-public-land";
import { PILLAR_LONG_TERM_VISITOR_AREAS_AND_SNOWBIRD_CAMPING } from "./pillar-long-term-visitor-areas-and-snowbird-camping";
import { PILLAR_TOILET_AND_WASTE_SYSTEMS_ON_THE_ROAD } from "./pillar-toilet-and-waste-systems-on-the-road";
import { PILLAR_COOKING_AND_EATING_WELL_ON_THE_ROAD } from "./pillar-cooking-and-eating-well-on-the-road";
import { PILLAR_STAYING_CLEAN_WATER_SHOWERS_AND_HYGIENE } from "./pillar-staying-clean-water-showers-and-hygiene";
import { PILLAR_DESERT_CAMPING_IN_SUMMER_HEAT } from "./pillar-desert-camping-in-summer-heat";
import { PILLAR_WHY_VERIFICATION_BEATS_CROWDSOURCED_REVIEWS } from "./pillar-why-verification-beats-crowdsourced-reviews";
import { PILLAR_LEAVE_NO_TRACE_AND_KEEPING_ACCESS_OPEN } from "./pillar-leave-no-trace-and-keeping-access-open";
import { PILLAR_BACKCOUNTRY_NAVIGATION_WITHOUT_A_SIGNAL } from "./pillar-backcountry-navigation-without-a-signal";
import { PILLAR_READING_MOUNTAIN_WEATHER_AND_LIGHTNING } from "./pillar-reading-mountain-weather-and-lightning";
import { PILLAR_FINDING_AND_TREATING_WATER_IN_THE_BACKCOUNTRY } from "./pillar-finding-and-treating-water-in-the-backcountry";
import { PILLAR_BEAR_COUNTRY_AND_FOOD_STORAGE } from "./pillar-bear-country-and-food-storage";
import { PILLAR_WILDERNESS_PERMITS_AND_TRAILHEAD_RULES } from "./pillar-wilderness-permits-and-trailhead-rules";
import { PILLAR_FIRE_RESTRICTIONS_AND_CAMPFIRE_RULES } from "./pillar-fire-restrictions-and-campfire-rules";
import { PILLAR_EMERGENCY_COMMUNICATION_AND_SELF_RESCUE } from "./pillar-emergency-communication-and-self-rescue";
import { PILLAR_TIMING_A_ROUTE_BY_SEASON_AND_ELEVATION } from "./pillar-timing-a-route-by-season-and-elevation";
import { PILLAR_WHAT_A_SEASON_ON_THE_ROAD_COSTS } from "./pillar-what-a-season-on-the-road-costs";
import { PILLAR_READING_A_FOREST_SERVICE_MAP } from "./pillar-reading-a-forest-service-map";
import { PILLAR_HOW_TO_FIND_DISPERSED_CAMPING } from "./pillar-how-to-find-dispersed-camping";
import { PILLAR_POWER_SYSTEMS_FOR_LIFE_ON_THE_ROAD } from "./pillar-power-systems-for-life-on-the-road";
import { PILLAR_STAYING_WARM_ON_PUBLIC_LAND_IN_WINTER } from "./pillar-staying-warm-on-public-land-in-winter";
import { PILLAR_INTERNET_AND_CELL_SIGNAL_OFF_GRID } from "./pillar-internet-and-cell-signal-off-grid";
import { PILLAR_CAMPING_NEAR_TRAILHEADS_AND_HIKING_ACCESS } from "./pillar-camping-near-trailheads-and-hiking-access";
import { PILLAR_WHAT_IT_COSTS_TO_BUILD_A_VAN } from "./pillar-what-it-costs-to-build-a-van";

export type ClusterId =
  | "legality"
  | "finding-ground"
  | "systems"
  | "seasons"
  | "cost"
  | "the-record";

export type Cluster = {
  id: ClusterId;
  name: string;
  intent: "commercial" | "volume" | "differentiation";
  blurb: string;
};

export const CLUSTERS: Cluster[] = [
  {
    id: "legality",
    name: "Where you can legally stop",
    intent: "commercial",
    blurb:
      "Public land rules, stay limits, permits and the difference between a legal boundary and a passable road.",
  },
  {
    id: "cost",
    name: "What it costs",
    intent: "commercial",
    blurb:
      "Real numbers on fuel, fees, repair and the apps people pay for, with the arithmetic shown.",
  },
  {
    id: "finding-ground",
    name: "Finding ground",
    intent: "volume",
    blurb:
      "How to locate dispersed sites, read a forest map, and tell a good pullout from one you will regret.",
  },
  {
    id: "systems",
    name: "Systems that hold",
    intent: "volume",
    blurb: "Water, power, waste and the boring infrastructure a long season depends on.",
  },
  {
    id: "seasons",
    name: "Seasons and weather",
    intent: "differentiation",
    blurb: "Timing a route, reading a closure window, and what changes when the ground freezes.",
  },
  {
    id: "the-record",
    name: "The record",
    intent: "differentiation",
    blurb: "Verification, rank, and what it means to keep an honest account of where you have been.",
  },
];

export type Post = {
  slug: string;
  cluster: ClusterId;
  title: string;
  description: string;
  published: string;
  answer: string;
  /** Legacy flat prose. Use `blocks` for pillar-length pieces. */
  body?: string[];
  /** Long-form structured document -- gives real H2/H3 hierarchy and a TOC. */
  blocks?: Block[];
  /** Pillar pieces anchor a cluster and are linked from every sibling. */
  pillar?: boolean;
  faq: { q: string; a: string }[];
};

export const POSTS: Post[] = [
  {
    slug: "choosing-and-buying-a-van",
    cluster: "cost",
    pillar: true,
    title: "Choosing and Buying a Van for the Road",
    description: "A field manual for picking a van platform and buying a sound one: Transit vs Sprinter vs ProMaster, diesel vs gas, wheelbase and roof height, new vs used, and a used-van inspection checklist.",
    published: "2026-08-11",
    answer: "The van is the first decision and every later choice sits on top of it, so start with wheelbase and roof height -- the two dimensions that shape the whole build -- then match a platform to the terrain you actually intend to hunt. A cargo van is a used-truck purchase first: mileage and verified service records matter more than model year, and rust on a unibody is the one defect that ends the conversation. A sound high-mileage van bought on its records beats a tired expensive one, so the money is better spent on a platform-specific inspection than on a nicer badge. Buy the drivetrain and the history; the interior is yours to build afterward.",
    blocks: PILLAR_CHOOSING_AND_BUYING_A_VAN,
    faq: [
      { q: "Which van platform is best for a first build", a: "For most riders the Ford Transit is the right default: it is the cheapest of the three full-size vans to buy and service, parts are at every Ford dealer, and it is the only one offering factory all-wheel drive on a gas engine at a reasonable price. Choose a Sprinter only if you genuinely need its clearance and 4x4, and a ProMaster if your season stays on pavement and graded gravel." },
      { q: "Is diesel or gas better for a road van", a: "Diesel earns its price premium only at high annual mileage or with sustained loaded climbing, where better fuel economy and torque pay back the higher purchase and repair costs. Below roughly fifteen thousand miles a year, or on a tight budget, gas is the correct answer -- it is cheaper to buy, far cheaper to repair, serviceable anywhere, and untroubled by cold starts and emissions hardware." },
      { q: "How many miles is too many on a used cargo van", a: "There is no fixed ceiling -- a documented 150,000-mile van with every service interval stamped is a better buy than an undocumented 80,000-mile one. Buy the highest-mileage van whose history you can fully verify rather than the lowest-mileage van you cannot, because the records tell you whether those miles were kind ones." },
      { q: "What should I inspect before buying a used van", a: "Cold-start the engine yourself and listen for knocks and smoke, scan for stored fault codes, and check the rockers, wheel arches, and floor for structural rust that ends a unibody van. Verify the service records against the odometer, test the transmission on a full drive, and pay 150 to 250 dollars for a pre-purchase inspection at a shop that knows the platform. Treat a refused inspection as a defect in the van." },
      { q: "What roof height and wheelbase should I choose", a: "Choose a high roof if you want to stand up and live inside, a low roof if stealth and height-restricted parking matter more. For wheelbase, the practical breakpoint is whether an adult sleeps crosswise -- a rider over roughly five foot ten needs a long wheelbase for a sideways bed, at the cost of a wider turning circle and harder access on narrow roads." },
      { q: "Is a fleet van a bad buy", a: "Not necessarily -- fleet history is a question, not a disqualifier. A fleet van driven mostly on the highway and serviced on a strict schedule can be an excellent buy, while one run hard and serviced only when it broke is a poor one. The service records and the interior wear pattern tell you which." },
      { q: "Do I need a 4x4 van", a: "Most riders who buy 4x4 use it a handful of days a year and pay for it every day in purchase price, fuel, and drivetrain complexity. Match the platform to the terrain you genuinely intend to run: an AWD Transit reaches the graded and light-rough roads most objectives sit on, and only sustained backcountry, sand, snow, and steep two-track justify a full 4x4." },
    ],
  },
  {
    slug: "tires-traction-and-self-recovery",
    cluster: "systems",
    pillar: true,
    title: "Tires, traction, and getting yourself unstuck",
    description: "How to stay mobile on sand, mud, snow and washboard, and recover when you cannot -- tire choice, airing down, the minimum self-recovery kit, technique, and when to turn around.",
    published: "2026-08-11",
    answer: "The right tire at the right pressure prevents most recovery situations, so the kit -- traction boards, a shovel, a rated strap with rated points, and a compressor -- is the backstop, not the plan. Read every soft or rough surface on foot before you commit to it, air down for flotation and reinflate before pavement, and never spin a stuck wheel. The discipline that keeps a season running is turning around while you can still back out: a stuck van on a remote road is a several-hundred-dollar tow at best.",
    blocks: PILLAR_TIRES_TRACTION_AND_SELF_RECOVERY,
    faq: [
      { q: "What tire should I run on a van for dispersed camping and forest roads", a: "An all-terrain tire in the correct load range handles the gravel, washboard, packed dirt and occasional sand a van actually meets without punishing you on the highway miles between them. Match the load range to your loaded, per-axle weight measured at a truck scale -- load range E is the common choice for a fully built heavy van." },
      { q: "How far should I air down for sand", a: "On a heavy van with load range E tires, 15 to 20 psi is a sensible starting point for soft sand, dropped before you enter it rather than after you are stuck. Going much below 15 psi on a standard bead risks rolling the tire off in a hard turn, so stop there unless you are running beadlocks." },
      { q: "What is the minimum self-recovery kit for a van", a: "Traction boards, a full-size shovel, a rated recovery strap with rated attachment points, and a compressor with an accurate gauge cover the large majority of situations a van meets on soft or rough ground. Everything in it should be rated for recovery loads, in reach, and something you have used before the day you need it." },
      { q: "Why can't I use a tow chain or ratchet strap for recovery", a: "A recovery strap is engineered to stretch and absorb a shock load; a tow chain and a ratchet strap are not, and either can fail explosively under a kinetic pull. A strap that tears an anchor loose can turn steel into a projectile that kills a bystander, so use only rated straps, rated shackles, and rated recovery points, and keep everyone clear of the line." },
      { q: "What should I do the moment my van gets stuck", a: "Stop applying throttle immediately -- a spinning tire only digs deeper. Get out and look at which wheels are bogged and what the vehicle rests on, air down if you have not, clear the ground ahead of the drive wheels, wedge traction boards hard against the tires, and drive out on the lightest throttle that keeps you moving until you reach firm ground." },
      { q: "How do I know when to turn around instead of pushing on", a: "Turn around when the road narrows past your ability to reverse it and you cannot see the far end, when a surface you walked is softer than it looked with no way around, or when weather will make the exit worse than the entrance. The only bad reason to continue is that you have already come a long way -- that is a sunk cost, not a plan." },
      { q: "Do I still need a spare tire if I carry a plug kit", a: "Yes. A plug kit seals tread punctures like nails and screws without removing the wheel, but sidewall cuts and blown beads do not plug, and that is what a full-size spare covers. Carry the plug kit, compressor and spare as one system, and check the spare's pressure at the desk before a run." },
    ],
  },
  {
    slug: "traveling-with-a-dog-on-public-land",
    cluster: "legality",
    pillar: true,
    title: "Traveling With a Dog on Public Land",
    description: "Where dogs are allowed on public land and where they are not, plus leash rules, predator country, hot-van danger, water, and trail hazards for riders.",
    published: "2026-08-11",
    answer: "Dogs are generally welcome on BLM and national forest land, often off-leash where no local order says otherwise, and generally banned from the trails inside national parks; designated Wilderness is a case-by-case patchwork set by the managing agency. Two rules carry everywhere. In predator country a dog under real control stays alive and keeps the ground open, while a loose one is the fastest route to a closure or a dead dog. And a dog is never left in a parked van in heat, where the interior passes lethal in minutes. Confirm the specific district's leash orders and closures before you drive, because the general rule is overridden somewhere in every state.",
    blocks: PILLAR_TRAVELING_WITH_A_DOG_ON_PUBLIC_LAND,
    faq: [
      { q: "Can I bring my dog on national park trails", a: "Almost never. The National Park Service confines dogs to developed areas such as roads, parking lots, campgrounds, and picnic areas, and bans them from trails and backcountry across the great majority of parks. A few parks name specific dog-legal trails on their pet page, so assume a park trail is closed to dogs unless the park has told you in writing otherwise." },
      { q: "Are dogs allowed off-leash on national forest and BLM land", a: "Usually yes on the open trail, which is why the West is the most dog-friendly ground there is. The exceptions are developed recreation sites -- campgrounds, trailheads, day-use areas -- where a six-foot leash is standard and enforced, and local leash orders that appear in high-use or wildlife-sensitive areas. Check the field office or ranger district page for the current order before assuming off-leash." },
      { q: "Why does the leash rule matter so much in predator country", a: "A loose dog that ranges ahead can find a bear, mountain lion, moose, or den before you do, and its instinct is often to harass the animal and then run back to you with it following. Coyotes deliberately lure single dogs toward the group, and moose will stomp a dog that harasses them. Under real control the dog is an early-warning asset; out of control it delivers a threat it cannot manage straight to you." },
      { q: "How dangerous is it to leave a dog in a parked van", a: "Lethal, and fast. On a mild 70-degree day a parked vehicle's interior reaches about 113 degrees, and at 90 degrees outside it becomes lethal to a dog within 10 to 15 minutes. Cracking the windows changes the outcome not at all, and shade only helps while it holds still, so there is no safe version of leaving a dog in a hot van." },
      { q: "How much water does a dog need on the trail", a: "Roughly an ounce per pound of body weight per day in warm weather, and considerably more when it is hot and the terrain is hard -- a fifty-pound dog can move through half a gallon on a long day. Carry the dog's water as a separate figure added to your own, offer it every twenty to thirty minutes rather than waiting, and use a collapsible bowl because most dogs drink poorly from a squeeze bottle." },
      { q: "What are foxtails and why are they dangerous to dogs", a: "Foxtails are barbed grass seeds, worst in dry grasses in mid to late summer across the West, that burrow into a dog's paws, ears, nose, and eyes and then migrate inward. Caught between the toes before they burrow they are a two-second removal; left to migrate they can require surgery. A hand check of the toes and ears after every outing is what catches them." },
      { q: "How do I keep my dog from getting dogs banned from a trail", a: "Pack out all waste, yield the trail and leash up for other hikers and horses, recall the dog off wildlife every time or keep it leashed, and respect every seasonal closure and leash order exactly. Every trail closed to dogs was closed because of dogs, and the only argument against the next closure is a long run of dogs that were well managed." },
    ],
  },
  {
    slug: "working-remotely-from-the-road",
    cluster: "cost",
    pillar: true,
    title: "Working Remotely From the Road",
    description: "Earning a full-time living on the road: the connectivity stack, power to run a desk all day, building a route around coverage, and the domicile and tax questions to settle.",
    published: "2026-08-11",
    answer: "You can earn a full-time living from the road, but only by building the run around the work rather than fitting the work into the run. That means a connectivity stack you have tested -- two carriers, a booster, satellite as backup -- enough stored power to run a desk all day, and a route planned around coverage and time zones instead of hoped through them. It also means a domicile, mail, and tax setup settled on paper before the first paycheck. Get those right and the rest is scheduling.",
    blocks: PILLAR_WORKING_REMOTELY_FROM_THE_ROAD,
    faq: [
      { q: "Can you really work a full-time job from a van", a: "Yes, if the work is genuinely remote and you build the route around it rather than the reverse. The riders who last treat connectivity, power, workspace, and admin as engineered systems, not things they hope will work out." },
      { q: "What connectivity setup do you need to work reliably from the road", a: "A three-layer stack: cellular data on two different carriers as the primary, a signal booster or external antenna as the multiplier on weak signal, and low-earth-orbit satellite as the backup for ground with no cellular at all. Running two carriers is the single highest-value decision, because two networks rarely fail in the same place." },
      { q: "How much battery and solar do you need to run a work setup all day", a: "Most working rigs settle on a 200 to 400 amp-hour lithium bank, roof solar, and a DC-to-DC charger that tops the bank from the alternator while driving. Size it for the whole desk running a full day with no engine and no sun -- overcast, parked, deadline -- because solar alone will not carry a work load through a run of grey days." },
      { q: "How do you plan a route around remote work instead of hoping it works out", a: "Plan the run by where the work can happen, confirming reliable coverage for each work block before committing, and treat scenery as the reward. Use east-west position deliberately too: running west of a fixed-time team shifts your working hours earlier in local time and frees the afternoon." },
      { q: "Where should a full-time van worker be domiciled for taxes", a: "South Dakota, Texas, and Florida dominate the decision because none has a state income tax and all have mail services and vehicle rules a rarely-present person can satisfy. None is correct in the abstract -- the right one depends on your ties, health and vehicle insurance, and how often you can actually be present." },
      { q: "Do you still owe state income tax if you live on the road", a: "Choosing a no-income-tax domicile does not automatically clear you. A taxing state can claim you as a resident based on days present and where your life is actually rooted, so a rider who claims a no-tax domicile but parks seven months a year near family in a taxing state can still be billed. Where real money is involved, take it to a professional, not a forum." },
      { q: "How do you receive mail with no fixed address", a: "Use a mail-forwarding service that gives you a real street address, not a PO box, scans each piece on arrival so you can triage it, and forwards, holds, or shreds on request. Have time-sensitive items forwarded to a spot you will hold for several days, and go paperless everywhere it is offered to shrink the problem." },
    ],
  },
  {
    slug: "carrying-bikes-boats-and-adventure-gear",
    cluster: "systems",
    pillar: true,
    title: "Carrying Bikes, Boats, and Adventure Gear",
    description: "How to haul bikes, watercraft, skis, and climbing gear on a van without wrecking payload, center of gravity, or mileage -- and how to secure it for washboard roads.",
    published: "2026-08-11",
    answer: "Carry the gear that earns the basecamp, but carry it inside the weight budget the rig already has. Bikes ride cleanest on a hitch rack or in a dedicated garage; packrafts and inflatable kayaks beat hard boats for anyone without a fixed put-in; skis and climbing gear want a sealed, sharp-and-heavy home low in the vehicle. Every pound on the roof costs mileage and center of gravity, and every load bound for washboard must be secured as if it will be shaken loose, because on those roads it will be.",
    blocks: PILLAR_CARRYING_BIKES_BOATS_AND_ADVENTURE_GEAR,
    faq: [
      { q: "Hitch rack, inside the van, or a garage build for bikes", a: "A hitch rack is simplest but leaves bikes in road spray and easy to steal. Carrying them inside protects and hides them but costs interior volume and drags mud into the living space. A garage under a raised bed is the trailhead rig's answer -- protected, hidden, and isolated -- at the cost of a lower bed and usually wheels-off to fit two." },
      { q: "Are packrafts or hard kayaks the better choice for a van", a: "For a rider who hunts put-ins -- different water each week, some down rough roads -- packrafts and inflatable kayaks win: they weigh 5 to 35 pounds, pack inside low, and inflate in minutes. A hard boat is faster on flatwater and worth the roof only when paddling from a fixed put-in is the point of the trip." },
      { q: "What does carrying a hard boat on the roof actually cost", a: "Three standing costs paid the whole trip: it raises vehicle height into the zone where drive-throughs and canopy become hazards, it adds windage that pushes the van around in a crosswind, and it drags 2 to 4 mpg the entire distance. The costs are paid whether or not the boat touches water that day." },
      { q: "How do you keep gear secured on washboard roads", a: "Secure every load with a mechanism, not gravity, and use two independent points on anything heavy. Torque the rack and hitch bolts before the trip and recheck them after the first rough stretch, pad every point where a strap crosses an edge, and latch drawers positively. Stop and walk the load after the first few miles -- it is the cheapest insurance you have." },
      { q: "How much weight can a converted van actually carry", a: "Less than most riders assume. Payload is the gross vehicle weight rating minus what the van already weighs built out, often only a few hundred pounds once the build, water, fuel, and two people are counted. A pair of bikes, a rack, and a boat can run 120 to 200 pounds, so weigh the van loaded at a scale before deciding what it can carry." },
      { q: "Where should skis, crampons, and climbing gear be stored", a: "In a fixed, hard-edged home low in the vehicle where nothing sharp can move or face the living space. Skis go in a padded bag or edge guards in a long locker; crampons and ice tools want a hard case or point protectors; the rope goes in a rope bag off the floor, away from anything that can leak on it. Loose skis in the cabin are the common mistake." },
      { q: "How do you dry wet gear in a small van", a: "Keep the water out of the living space in the first place: wring and shake outside, rig a line under the awning, and carry a wet locker or dry bags so wet gear does not touch everything else. Ventilate with a roof fan to move humidity out, and dry ropes, skins, and boot liners first, since those are what a wet night actually costs you." },
    ],
  },
  {
    slug: "skiing-and-winter-sports-from-the-van",
    cluster: "seasons",
    pillar: true,
    title: "Skiing and Winter Sports from the Van",
    description: "How to use a van as a winter basecamp for resort laps and backcountry touring -- where to sleep, drying wet gear, avalanche safety, and timing storms over passes.",
    published: "2026-08-11",
    answer: "A van makes a workable winter basecamp for resort laps and backcountry touring on two conditions. The rig has to be a real cold-weather build -- a vented fuel-fired heater, a plan for the water wet gear dumps into the air, and a battery that will not fold in the cold. And leaving a resort boundary or touring the backcountry puts you in avalanche terrain, where staying alive is training, a partner, and the day's forecast -- not a gear list and not a strong skier's instinct.",
    blocks: PILLAR_SKIING_AND_WINTER_SPORTS_FROM_THE_VAN,
    faq: [
      { q: "Can you sleep in a ski resort parking lot overnight", a: "It depends entirely on the resort. Some run sanctioned overnight or RV lots, some tolerate it in an outer lot if you arrive late, park far out, and are gone by the morning rush, and many post against it because the lot must be plowed before dawn. When the signage is silent, call guest services and accept the answer without negotiating." },
      { q: "Is a propane buddy heater safe to run overnight in a van in winter", a: "No. An unvented buddy heater dumps carbon monoxide and more than a liter of water per pound of gas straight into the cabin. It belongs to short daytime use with a window cracked and a carbon-monoxide alarm running, never a closed van overnight. Use a vented fuel-fired air heater, which exhausts combustion outside and adds no water to the air." },
      { q: "What do I need before touring outside a resort boundary", a: "Training, a partner, and the day's forecast -- in that order, before any gear. Take a recognized avalanche course such as an AIARE Level 1 or equivalent, travel with a trained partner who carries a beacon, shovel, and probe, and read your regional avalanche center's forecast for that zone the morning you go. Equipment lets a partner dig you out; it does not keep you out of the slide." },
      { q: "How do you dry ski boots and skins overnight in a van", a: "Pull the liners out of the boot shells every night so both dry, and never start a day in frozen or damp liners, which is a fast route to cold-injured feet. Dry skins at room temperature rather than pressed against a heater, which can wreck the adhesive. What actually dries gear is warm air moving past it and out a cracked vent, not heat alone." },
      { q: "At what avalanche danger level do most fatalities happen", a: "The largest share occur at Moderate (level 2) and Considerable (level 3), not at High or Extreme. High and Extreme days keep people home, while Moderate and Considerable days look skiable and fool experienced riders into terrain the day did not actually permit. A green-looking morning is not a safe one." },
      { q: "How do I time a winter route over a mountain pass", a: "Treat the pass, not the destination, as the constraint that sets your schedule. Cross while the weather is good and the road is confirmed open on the state DOT road line, checked the morning you cross rather than the night before, and wait out storms on the low side. Carry chains that fit your tires and know the state's chain-law levels, since enforcement turns vehicles back at the bottom of the grade." },
      { q: "Are winter trailheads plowed for overnight parking", a: "Often not. A Forest Service or BLM trailhead open for overnight parking in summer may be unplowed and under several feet of snow in winter, with the last accessible spot wherever the county or resort stops clearing the road. Check the specific access point rather than assuming the summer rule holds, and note that a Sno-Park or plowed pass pullout may require a state winter-recreation permit in the window." },
    ],
  },
  {
    slug: "photography-and-the-honest-record",
    cluster: "the-record",
    pillar: true,
    title: "Photography and Keeping an Honest Record",
    description: "How to document the road so a photograph informs rather than misleads: why a dated, located image is evidence and a beautiful undated one is decoration.",
    published: "2026-08-11",
    answer: "A photograph proves only that a place looked a certain way to one camera at one instant; it says nothing about whether the site is legal, open, empty, or reachable today. A beautiful undated image is worth less than a plain one carrying a date and a confirmed location, because almost every question a rider asks is a question about time, and only the date answers it. For the record, an image is evidence when it is tied to when and where it was taken; without that, it is decoration. Keep the precise pin in your field notes, write down what the light hides, and confirm the fast-decaying facts -- legality, conditions, crowds -- from a current source rather than the frame.",
    blocks: PILLAR_PHOTOGRAPHY_AND_THE_HONEST_RECORD,
    faq: [
      { q: "What does a photograph actually prove about a campsite", a: "It proves the ground existed and had a certain shape at the instant the shutter fired, and that it held whatever was inside the frame then. It does not prove the site is legal, open, free, passable, or empty on any other day -- those are facts the image cannot contain." },
      { q: "Why is a dated photo worth more than a beautiful undated one", a: "Almost every question a rider asks of an image is about time: is the road passable now, is the creek running, is the gate open, is the site worn out. Only the date answers those, so a plain dated snapshot is evidence you can weigh while a stunning undated frame is only a mood." },
      { q: "Should I geotag and share the exact location of a spot I found", a: "Keep the precise coordinates in your own field notes and any access-controlled record, but give a public audience only the region. A precise pin broadcast to a large following is the mechanism by which quiet, lightly-used, legal places become crowded, damaged, and then closed." },
      { q: "What should a field note capture that the photograph cannot", a: "Occupancy over time, legality and fees, the approach and clearance the frame starts after, the wind or noise the light flattered, and what sits just outside the edges. Write it while you can still see the thing, because memory flatters as reliably as light does." },
      { q: "Is editing a photo dishonest for a record", a: "Correcting exposure, straightening, or cropping is fine because it changes the look, not the facts. Replacing a sky, removing a crowd, or erasing a fee sign changes a fact a rider would act on, and an image edited to change decisions is no longer a record." },
      { q: "How quickly does a photograph go out of date", a: "It depends on the fact. General terrain holds for years and surface for a season or two, but vegetation is good for weeks, water for days, crowds for hours, and legal status can change overnight. The fastest-decaying facts are exactly the ones people most often ask a photo to prove." },
      { q: "Can I rely on an image to decide whether to drive somewhere", a: "Use it only to decide a place is worth checking. Confirm legality with the managing district, passability and conditions from a recent dated report, and current occupancy some other way, because an image supports those claims for the shortest time or not at all." },
    ],
  },
  {
    slug: "health-fitness-and-a-long-season",
    cluster: "systems",
    pillar: true,
    title: "Health, fitness, and a long season",
    description: "How riders stay physically and mentally well over months on the road -- movement, food, sleep, hydration, sun, isolation, and healthcare access, treated as daily upkeep.",
    published: "2026-08-11",
    answer: "You keep a body working over a long season the way you keep the vehicle working -- upkeep is a daily task, not a rescue. The ground is your gym, your storage sets your diet, level ground and darkness set your sleep, and water is the input you plan first. Carry real first-aid, hold a national-network insurance plan with telehealth, and know where the nearest urgent care sits before you need it. The season rewards the rider who does the small maintenance every day and punishes the one who waits for something to break.",
    blocks: PILLAR_HEALTH_FITNESS_AND_A_LONG_SEASON,
    faq: [
      { q: "How do you stay fit on the road without a gym", a: "Use terrain and bodyweight: hiking is the base, and air squats, push-ups, hangs, and loaded carries cover the rest with no equipment. The highest-value habit is not sitting in a seat all day -- break up long drives and choose the harder version of ordinary tasks." },
      { q: "How much water do you need at altitude and in heat", a: "Baseline is roughly 2.5 to 3.5 liters a day, rising to 4 to 6 liters on a hot day with effort and higher still with hard exertion in heat. Above 8,000 feet add about a liter over baseline even at rest, and carry electrolytes once you are sweating hard, because the severe failure is lack of salt, not water." },
      { q: "What healthcare options work when you have no fixed address", a: "Four routes cover almost everything: your own first-aid kit for minor injuries, telehealth for prescriptions and advice from anywhere with signal, urgent care in small towns for same-day non-emergencies, and emergency rooms for genuine emergencies only. The backstop is an insurance plan built on a national provider network rather than a local one." },
      { q: "How do you sleep well in a different place every night", a: "Control the four inputs on arrival: level the sleeping surface to within a couple of degrees, manage temperature with ventilation and a bag rated to the night, block dawn with full window covers, and carry earplugs for noise. Level ground is the most common self-inflicted bad night and a two-minute fix." },
      { q: "What is the difference between solitude and loneliness on the road", a: "Solitude is chosen and it restores you; loneliness is solitude gone past its useful length, and the difference is whether you still feel connected to people who matter when you are alone. Learn where your own line sits and act before you cross it, using scheduled contact home and telehealth mental-health support as upkeep, not weakness." },
      { q: "What should a real first-aid kit for a long season include", a: "Build it in tiers: a trail kit on you with a pressure dressing, tape, blister care, painkillers, and personal meds; a fuller vehicle kit with wound care, splint material, burn dressings, and irrigation; and current medications for allergies, illness, and pain. The highest-value addition is a day of wilderness first-aid training, because gear you cannot use is just weight." },
      { q: "How do you eat well with a small cooler and limited water", a: "Anchor protein at every meal, carry produce that holds without cold like onions, carrots, cabbage, and citrus, and favor one-pot meals that cut water, fuel, and washing-up at once. Resupply on a schedule rather than on empty, since running the cooler to zero is what forces the drift to junk." },
    ],
  },
  {
    slug: "overnight-parking-off-public-land",
    cluster: "finding-ground",
    pillar: true,
    title: "Overnight Parking When You Are Not on Public Land",
    description: "Where to legally sleep in transit or in a city -- rest areas, truck stops, business lots, casinos, and streets -- with the etiquette that keeps each option open.",
    published: "2026-08-11",
    answer: "When dispersed ground is not an option, the reliable overnight stops are interstate rest areas in states that permit them, truck stops parked in the car section, casino lots that welcome travelers, and business lots where a manager has said yes to your face. The discipline that keeps them open is the same everywhere: arrive late, stay level and undramatic, deploy nothing outside the vehicle, and leave early. Parking is usually tolerated; camping usually is not, and the line between them is whether anything is on the pavement.",
    blocks: PILLAR_OVERNIGHT_PARKING_OFF_PUBLIC_LAND,
    faq: [
      { q: "Can you sleep overnight at interstate rest areas", a: "It depends entirely on the state -- there is no federal rule. Many western and plains states permit or tolerate an overnight stop, while a number of eastern and southeastern states post firm time limits of three or four hours. The sign at the entrance is the operative rule." },
      { q: "Is it still safe to assume big retail chains allow overnight parking", a: "No. The old blanket-permission assumption is gone; permission was always at store discretion, and a growing number of individual locations no longer allow it because of city ordinances or leased lots. Ask a manager inside early in the evening and accept the answer without negotiating." },
      { q: "Where should you park at a truck stop overnight", a: "In the car or RV section, never in a numbered truck slot. Those spaces exist for drivers who are legally required to rest, and taking one in a passenger vehicle costs a working driver a legal place to sleep. Park in the car area, buy something, and keep the space clean." },
      { q: "What is the difference between parking and camping for enforcement", a: "Parking is a vehicle at rest with its occupants inside; camping is anything deployed outside -- a chair, an awning, leveling ramps, or a running generator. Most ordinances prohibit camping and say nothing enforceable about a parked, occupied vehicle, so the moment gear touches the pavement you lose the protection." },
      { q: "Is it legal to sleep in your vehicle on a city street", a: "It varies by municipality and is the highest-risk option. Many cities prohibit sleeping or living in a vehicle outright, and many more restrict overnight parking through posted hours or permit zones. Read the posted signs, favor commercial or industrial edges over residential blocks, and treat it as a last resort." },
      { q: "Do casinos really allow overnight parking", a: "Casinos in a number of states actively welcome it, on the theory that a parked traveler may spend money inside. Many have a designated RV or overnight area, and some offer hookups for a nominal fee. Going inside as a patron honors the arrangement, though it is rarely required." },
      { q: "What is the etiquette that keeps a lot tolerant", a: "Arrive late, stay level and closed up, deploy nothing outside the vehicle, and leave early. Buy something where you can, keep the space cleaner than you found it, and never idle a generator overnight. Every lot that closes did so because someone treated a parking space like a campsite." },
    ],
  },
  {
    slug: "long-term-visitor-areas-and-snowbird-camping",
    cluster: "legality",
    pillar: true,
    title: "Long-Term Visitor Areas (LTVAs) and Snowbird Camping",
    description: "How to winter legally and cheaply on public land in the desert Southwest: BLM Long-Term Visitor Area permits, the free 14-day dispersed alternative, the snowbird season, solar, and services.",
    published: "2026-08-11",
    answer: "A BLM Long-Term Visitor Area (LTVA) lets you camp on public land in the desert Southwest for the whole winter season -- roughly September 15 to April 15 -- for a flat permit near $180, with dump stations, potable water, and trash service included. The free 14-day dispersed areas beside them cost nothing but cap you at 14 days and carry no services. The lower Colorado River country fills November to March because it is the only large block of public land both legal and comfortable to camp all winter; heat closes it in summer, and in winter the real constraint is water and services, not temperature. Permit fees and season dates are set by BLM -- confirm them with the Yuma or El Centro field office before you commit the drive.",
    blocks: PILLAR_LONG_TERM_VISITOR_AREAS_AND_SNOWBIRD_CAMPING,
    faq: [
      { q: "How much does a BLM Long-Term Visitor Area permit cost", a: "The long-term permit runs about $180 for the full season and the short-visit permit about $40 for up to 14 days, with both covering all seven LTVAs and including dump stations, potable water, and trash service. Fees are set by BLM and change between seasons, so confirm the current figure with the Yuma or El Centro field office." },
      { q: "How long can you stay in an LTVA", a: "A long-term permit lets you stay the entire long-term season, roughly September 15 to April 15, and move freely between all seven LTVAs. The free 14-day dispersed areas nearby, by contrast, cap you at 14 days in a 28-day period." },
      { q: "What is the difference between an LTVA and free 14-day dispersed camping", a: "An LTVA charges a permit but bundles a full-season stay with dump stations, water fills, and trash service; the free dispersed areas cost nothing but limit you to 14 days and provide no services at all. The permit usually wins for a settled winter, while the free ground wins for stays under two weeks." },
      { q: "Where are the BLM Long-Term Visitor Areas located", a: "All seven sit in the low desert of southwestern Arizona and southeastern California along the lower Colorado River: La Posa at Quartzsite, Imperial Dam and Pilot Knob near Yuma, Tamarisk and Hot Spring near Holtville, and Mule Mountain and Midland toward Blythe. The Arizona LTVAs are run by the Yuma Field Office and the California ones by El Centro." },
      { q: "Why do snowbirds camp in the desert from November to March", a: "The low desert is the only large block of legal public camping in the country that is comfortable through winter, when almost everything at usable elevation elsewhere is under snow or hard freeze. The season peaks in January around the Quartzsite shows and empties by the April 15 close as summer heat returns." },
      { q: "Is heat a problem when winter camping in the desert Southwest", a: "No -- winter daytime highs in Yuma and Quartzsite typically run in the mid-60s to low-70s Fahrenheit, which is the reason the migration exists. The real constraints are hauling water and dumping tanks, plus overnight lows that can drop to freezing, not heat." },
      { q: "Does solar work well in the desert in winter", a: "Yes on clear-sky reliability -- Yuma sees close to 90 percent of possible sunshine -- but winter days are short at about ten hours and the sun sits low, cutting the output of a flat-mounted panel. Tilting panels toward the south at 45 to 50 degrees recovers much of the loss." },
    ],
  },
  {
    slug: "toilet-and-waste-systems-on-the-road",
    cluster: "systems",
    pillar: true,
    title: "Toilet and waste systems that do not fail you",
    description: "The four road and trail waste systems compared -- cassette, composting, bucket-and-bag, and the backcountry cathole -- with legal dumping rules, grey water, wag-bag zones, and honest maintenance.",
    published: "2026-08-11",
    answer: "There are four practical systems: a cassette toilet, a composting or dry-separating toilet, a bucket-and-bag, and the backcountry cathole. A cassette is cheapest but ties you to a dump station every three to five days; a dry-separating toilet runs for weeks and smells least when kept dry; a bucket-and-bag never smells and never needs a dump station but runs on bags; and on foot the standard is a cathole six to eight inches deep and 200 feet from water, or a wag bag where one is required. Cassette waste goes to a sanctioned dump station only -- never into the ground, a pit privy, or a vault toilet.",
    blocks: PILLAR_TOILET_AND_WASTE_SYSTEMS_ON_THE_ROAD,
    faq: [
      { q: "Where do I legally empty a cassette or black tank", a: "Only at a sanctioned RV dump station, which routes to a septic or treatment system. Never pour it on the ground, down a storm drain, or into a vault toilet or pit privy -- a vault toilet is a pumped holding tank, not a treatment system, and cassette waste overloads it." },
      { q: "Do composting toilets actually smell", a: "Kept dry they are the least smelly of the four systems. The name is misleading -- nothing composts in the days you own the material; the unit separates urine from solids, and that separation is what removes the odour. The smell only returns if moisture reaches the solids chamber or the vent fan stops." },
      { q: "How deep should a cathole be and how far from water", a: "Six to eight inches deep, into the biologically active topsoil layer, and 200 feet -- about 70 adult paces -- from any water, camp, or trail. Dig in soil rather than under a rock, and fill and disguise the hole afterward." },
      { q: "Can I bury toilet paper in a cathole", a: "No -- pack it out in a doubled, opaque zip bag. Buried paper persists for years in dry or cold country and animals dig it up, and in many jurisdictions packing it out is the written rule, not a courtesy." },
      { q: "How often does each toilet system need emptying", a: "A cassette runs three to five days per five-gallon tank for one rider; a dry-separating toilet needs its urine bottle emptied daily but its solids chamber only every three to six weeks; a bucket-and-bag is swapped per bag. The interval, not the technology, is what shapes a route." },
      { q: "What do I do with grey water on public land", a: "Strain the food solids into the trash first, then scatter the water broadly at least 200 feet from any source, or empty it at a dump station grey inlet. Never pour it into a stream or lake or down a storm drain, which usually runs untreated to a creek." },
      { q: "Where are wag bags required instead of a cathole", a: "Above treeline and in alpine zones, on high-use trails and popular basins, in river corridors under permit, and on snow or glacier -- anywhere soil is thin, frozen, or overwhelmed by traffic. The trend is toward more pack-out every season, so assume the stricter standard where you are unsure." },
    ],
  },
  {
    slug: "cooking-and-eating-well-on-the-road",
    cluster: "systems",
    pillar: true,
    title: "Cooking and Eating Well on the Road: Stoves, Storage, and Resupply",
    description: "Feeding yourself for a season without a full kitchen: stoves and fuel compared, the small-fridge reality, storing food against heat and rough roads, resupply rhythm, and eating cheap without junk.",
    published: "2026-08-11",
    answer: "Feeding yourself for a long season without a full kitchen comes down to two constraints -- power and water -- and every other decision follows from them. Match the stove to your fuel supply and fire-restriction risk, treat cold storage as a small buffer rather than a pantry, provision most of your calories from shelf-stable food, and refresh fresh items on a short rhythm in the towns you pass. Do that and you eat well on roughly the grocery budget you kept at home; ignore it and you drift onto packaged junk within a fortnight.",
    blocks: PILLAR_COOKING_AND_EATING_WELL_ON_THE_ROAD,
    faq: [
      { q: "What stove should I choose for cooking on the road", a: "Match it to your fuel access and fire-restriction risk. A propane two-burner off a refillable tank is the cheapest and most capable for real cooking and survives every fire stage short of a total open-flame ban; a single-burner canister stove is the best compact backup; induction only works with a large battery and solar." },
      { q: "Do I need a fridge to eat well in a van", a: "No. A van fridge is a small buffer for a few days of perishables, not a pantry, and it costs power every hour. Riders running no fridge eat well on shelf-stable staples plus fresh food that survives days unrefrigerated -- hard vegetables, eggs, cured meat, and hard cheese." },
      { q: "How do I keep food from spoiling in a hot van", a: "Store food low and shaded rather than in sunlit upper cabinets, which run 20 to 40F hotter than outside air. Keep chocolate, butter, and oils in the coolest locker you have, and discard any can that bulges, leaks, or is badly rusted at the seam." },
      { q: "How often should I resupply on a long trip", a: "Run two loops: a deep shelf-stable shop every two to three weeks at a real supermarket in a larger town, and a short fresh top-up every three to five days at whatever small-town store you pass. Water, not food, usually sets how far apart the loops fall." },
      { q: "How do I cook with limited water", a: "Cook in one pot you eat straight from, wipe it dry with paper or bread before washing, and reuse rinse water as wash water down a hierarchy. A tight lidded pot cooks grain in far less water than the package assumes." },
      { q: "How do I store food safely when cooking in bear country", a: "Cook and eat away from where you sleep, seal all food and scented items inside the closed hard-sided vehicle overnight, and pack out every scrap of waste. Where a bear canister or locker is required, a closed vehicle does not count as storage -- use the canister." },
      { q: "Is cooking on the road cheaper than eating packaged food", a: "Yes, if you build calories from bulk staples -- rice, beans, lentils, oats, pasta -- and spend the small money on a spice kit rather than convenience food. Done that way it costs roughly a careful home grocery budget, sometimes less; freeze-dried and gas-station food are the expensive end." },
    ],
  },
  {
    slug: "staying-clean-water-showers-and-hygiene",
    cluster: "systems",
    pillar: true,
    title: "Staying Clean Off-Grid: Showers, Water, and Hygiene",
    description: "A field guide to staying clean without hookups -- solar showers, basin baths, the paid shower network, heating water, legal grey water, laundry, and a water-lean daily routine.",
    published: "2026-08-11",
    answer: "Staying clean off-grid is a routine, not a piece of equipment. Most riders run a hierarchy: wipes and a basin on water-lean days, a one-to-two-gallon solar or pump-sprayer rinse when there is water and sun, and a paid hot shower at a truck stop, gym, or rec center every three to seven days to reset. The rule that never bends is grey water -- soapy water never goes on bare ground or within 200 feet of a stream, spring, or lake. Everything else is a preference you tune to your tank and your season.",
    blocks: PILLAR_STAYING_CLEAN_WATER_SHOWERS_AND_HYGIENE,
    faq: [
      { q: "How much water do you need to stay clean off-grid", a: "A deliberate rider stays genuinely clean on about three gallons a day, covering a basin sponge bath, hand-washing, dishes, and a couple of rinsed socks. A basin bath alone runs half a gallon to a gallon; wipes cost almost nothing on water-lean days. Run those habits and a 25-gallon-a-week tank covers washing, cooking, and drinking." },
      { q: "Is a built-in shower worth the space in a van", a: "For full-timers who will use it daily and can dump grey water legally, yes; for part-timers it usually ends up storing gear while they shower at the gym. It costs 12 to 20 square feet of floor, a grey tank to dump, and daily drying to prevent mold. Skip it if your van is under 20 feet or you are out only weeks at a time, and put the space into water, power, or sleeping length." },
      { q: "Where can you shower on the road for cheap", a: "The paid network covers almost every town: truck-stop showers run $15 to $18, national gym memberships give near-daily access for $20 to $60 a month, and city or county rec centers often charge just $5 to $15 for a drop-in that includes a pool. Rec centers are usually the best value, and a national gym plan is cheapest per shower for anyone on the road most of the year." },
      { q: "How do you heat water for a shower without hookups", a: "The simplest reliable method is heating a quart on a propane or butane stove and pouring it into a basin or pump sprayer -- trivial fuel, works in any weather, no plumbing. A solar bag reaches 90 to 110F in three to five hours on a clear day but fails in cold or cloud. Full-timers who want endless hot flow add an instant propane heater, which needs ventilation and winter freeze protection." },
      { q: "How do you legally dispose of grey water while camping", a: "Never pour soapy water on bare ground, down a storm drain, or within 200 feet of any stream, lake, spring, or stock tank. Carry it in a sealed 3-to-5-gallon jug to a legal dump -- RV dump stations, many campgrounds, and some gas stations take grey water. Even biodegradable soap only breaks down in soil over time, so keep it out of every water source." },
      { q: "How do you do laundry living in a van", a: "Lean on wool and synthetic clothing that wears far longer than cotton, hand-wash the high-turnover items -- socks, underwear, a shirt -- in a basin as you go, and hit a laundromat every ten days to two weeks for the bulk reset. The sink-and-line method uses one to three gallons per session; hand-wash grey water follows the same disposal rules as any other." },
      { q: "How do you stay healthy over a long season on the road", a: "The small stuff cuts seasons short more than the dramatic risks: wash your hands before food every time, keep feet dry and rotate socks, and wash the four hot spots -- groin, feet, underarms, skin folds -- daily even when you skip a full wash. Treat cuts the day you get them, keep fresh and grey water systems clearly separated, and ventilate the van after every wash to keep mold down." },
    ],
  },
  {
    slug: "desert-camping-in-summer-heat",
    cluster: "seasons",
    pillar: true,
    title: "Desert Camping When the Heat Is the Hazard",
    description: "A field manual for the summer desert: water per person per day, timing the day around the sun, using elevation to drop the heat, and reading heat illness in yourself.",
    published: "2026-08-11",
    answer: "In the summer desert, heat is the hazard that kills, and it does it in hours, not days. Carry and drink real water on a schedule -- one to two gallons per person per day, more when you move -- and hold a reserve you never spend. Do everything strenuous at dawn and dusk, shelter in shade through the midday, and climb: every thousand feet of elevation drops the air roughly three to five degrees. The general framework holds across the deserts; the temperature at your elevation this week comes from the local forecast and the district office.",
    blocks: PILLAR_DESERT_CAMPING_IN_SUMMER_HEAT,
    faq: [
      { q: "How much drinking water do you need per person per day in real desert heat", a: "Plan on one gallon per person per day at rest in shade and two gallons or more when you are active in the sun. Above 105 degrees, hard activity in the sun costs three gallons a day and more. That is drinking water alone -- cooking, washing, and the dog are on top of it." },
      { q: "How fast can desert heat actually become dangerous", a: "A dehydrated rider walking in 110-degree sun with no shade can move from mild heat stress to heat stroke in well under two hours. Heat stroke -- a core temperature above roughly 104 degrees with a failure of the body's cooling -- is a medical emergency with a real fatality rate even when treated." },
      { q: "Why is elevation the best defense against desert heat", a: "Air cools roughly three to five degrees Fahrenheit for every thousand feet you climb. A valley floor running 110 can have a mountain flank thirty road miles away sitting near 80, often with shade the floor lacks. Plan a summer desert route in the vertical, not just the horizontal." },
      { q: "When should you hike or drive in the summer desert", a: "Do everything strenuous at dawn and dusk -- from first light to about three hours after sunrise, and from three hours before sunset into dark -- when the air is coolest and the ground has not loaded up with heat. From late morning to mid-afternoon, hold still in shade, drink on schedule, and wait the heat out." },
      { q: "What is the water reserve rule and why does it matter", a: "Split your water into working water, which the day's plan spends, and a fixed reserve -- often two gallons per person -- that you treat as if it were empty. Desert plans fail on the resupply, not the consumption: a dry spring or a washed-out road turns a comfortable margin into the reserve. When the working water is gone, the day is over and you leave." },
      { q: "How do you keep a van, fridge, and batteries from overheating in the desert", a: "Park in natural shade, add external reflective window shades, and run a powered roof vent fan on exhaust to pull heat out. Ventilate the fridge compressor and keep the house battery bank out of direct sun -- a hot lithium battery can refuse to charge above roughly 113-131 degrees, exactly when your solar is producing most." },
      { q: "What are the warning signs of heat illness to watch for in yourself", a: "Dark urine, headache, and tiredness signal early dehydration -- drink and get in shade now. Heavy sweat with weakness, nausea, and dizziness is heat exhaustion; stop the activity entirely and cool down. Confusion, or a rider who stops sweating or acts out of character, means heat stroke -- cool aggressively and get emergency help." },
    ],
  },
  {
    slug: "why-verification-beats-crowdsourced-reviews",
    cluster: "the-record",
    pillar: true,
    title: "Why a Confirmed Record Beats a Crowdsourced Review",
    description: "Why crowdsourced campsite pins and reviews rot, how a dated GPS-confirmed record differs in kind from an undated opinion, and why verifiable ground beats asserted ground.",
    published: "2026-08-11",
    answer: "A crowdsourced pin is an opinion left behind: undated, unlocated to the meter, and unverifiable after the fact. A confirmed record is different in kind -- a specific rider stood on that ground, fixed the position by GPS, on a known date, and the record carries that date so you can weigh how old it is. When the question is whether a place is still open, still passable, and still legal this week, a record you can verify beats ground someone asserted, every time. Reviews still settle taste; they cannot answer whether a place is open, legal, or reachable.",
    blocks: PILLAR_WHY_VERIFICATION_BEATS_CROWDSOURCED_REVIEWS,
    faq: [
      { q: "What is the difference between a review and a confirmed record", a: "A review reports how a place made someone feel and cannot be checked. A confirmed record reports what a place was at a stated GPS position on a stated date, so another rider can weight it by age and reconfirm it before committing the drive." },
      { q: "Why do crowdsourced campsite pins go out of date", a: "The ground changes and the pin does not. A site pinned three years ago may be washed out, gated by a seasonal closure, occupied, inside a new fire perimeter, closed by the district for overuse, or never legal in the first place -- and none of that is visible in the pin, which looks as fresh as the day it was posted." },
      { q: "Why does the date on a record matter so much", a: "The date is the load-bearing field, because it converts a claim into evidence you can weigh. A confirmation under two weeks old is strong, three to twelve months is a lead worth rechecking, and over two years should be treated as unconfirmed and rebuilt from the authoritative source." },
      { q: "How do anonymous pin dumps damage the places they point at", a: "A pin has no capacity limit and no sense of fragility, so it routes unlimited traffic onto a single fragile site. The ground compacts, vegetation dies, and the district eventually closes it -- and the pin keeps sending riders to a spot that is now signed and citable." },
      { q: "When is a crowdsourced review or pin actually useful", a: "Reviews are fine for taste as a last step -- deciding which of two legal, reachable sites is quieter or has better light. Fresh, dated, first-hand road intel is also valuable, because no agency publishes whether a road washed out last week or whether the gate has opened." },
      { q: "What makes a claim about a campsite verifiable", a: "A verifiable claim carries a precise position, a date of observation, an identified source, an access status, a stated method, and a retirement rule. A typical crowdsourced pin fails most of these, so it can only be believed, not checked." },
      { q: "Does a confirmed record replace calling the district office", a: "No. A record is a strong starting point for current conditions, but the district office or managing agency remains the authority on legality, stay limits, fire restrictions, and closures. Verify what you can, confirm the rest at the source, and carry a fallback." },
    ],
  },
  {
    slug: "leave-no-trace-and-keeping-access-open",
    cluster: "the-record",
    pillar: true,
    title: "Leave No Trace and Keeping the Ground Open",
    description: "How the seven Leave No Trace principles applied to van life keep dispersed camping legal, why worn ground gets closed parcel by parcel, and why access is a shared permission.",
    published: "2026-08-11",
    answer: "Dispersed camping on public land is a collective permission, not a right, and it is priced by the worst behavior on the ground rather than the average. Agencies close areas parcel by parcel when a place shows wear -- fire rings, braided roads, human waste -- and closed ground rarely reopens. The seven Leave No Trace principles, applied to a vehicle, are the operating manual for keeping a site invisible enough that no land manager has cause to close it. Leaving a place as you found it is the other half of keeping an honest record of where you have been.",
    blocks: PILLAR_LEAVE_NO_TRACE_AND_KEEPING_ACCESS_OPEN,
    faq: [
      { q: "Why does leaving no trace matter if enforcement in an area is thin", a: "The stronger reason is structural, not the citation. Agencies close areas on documented impact -- worn ground, complaints, cleanup cost -- and each closure pushes more riders onto the remaining open ground, accelerating impact there. Compliance is mainly about the ground still being open in five years, not about a ranger catching you." },
      { q: "What are the three Leave No Trace principles that matter most for keeping ground open", a: "Durable surfaces, waste, and fire -- the three that leave visible, lasting, complaint-generating damage. A rider can do the other four principles well, but leaving human waste or building fire rings on fresh ground is what land managers cite when they close an area." },
      { q: "Why is it a problem to widen a pullout or drive a short spur off the road", a: "Both permanently enlarge a site's footprint, and neither feels like anyone's fault. One rider parks at the edge, the next uses those tracks as the new edge, and within a season the pullout doubles. A braided web of user-created spurs is one of the most-cited reasons the Forest Service closes an area to vehicles entirely." },
      { q: "How should riders handle human waste when dispersed camping in a van", a: "A cassette or composting toilet dumped at a station removes the question entirely and is why many long-season riders carry one. Where an area mandates pack-out, use waste bags; where burial is still allowed, dig a proper cathole six to eight inches deep and 200 feet from water, camp, and trail. Paper always leaves with you regardless of local rules." },
      { q: "Does behaving well personally protect my own access to public land", a: "Not on its own. Access is a shared permission priced by the worst behavior on the ground, and a land manager sees the trash, not the good camper who left the day before. The parcel closes for everyone or stays open for everyone, which is why carrying out other people's litter is self-interest rather than charity." },
      { q: "Why do closed dispersed camping areas rarely reopen", a: "Reopening requires an agency to spend staff time, rehabilitate the ground, and accept the liability of inviting people back to a place that already failed once, and there is rarely budget or appetite for it. A closure is cheap to issue and expensive to reverse, so the realistic planning assumption is that ground closed today stays closed." },
      { q: "What does the official record not tell you about a dispersed site", a: "Maps and district rules tell you where camping is permitted and how the ground should be treated, but not what a specific site looks like this season -- whether a pullout has been widened, whether someone left a mess, whether the drainage is holding up. That current condition only comes from a rider who was recently on the ground and brought the intel back." },
    ],
  },
  {
    slug: "backcountry-navigation-without-a-signal",
    cluster: "finding-ground",
    pillar: true,
    title: "Backcountry navigation without a signal",
    description: "How to find your way when the phone has no bars and the battery is a liability -- offline maps, contour reading, map and compass, and recovering when you lose position.",
    published: "2026-08-11",
    answer: "Download the offline map for the whole area before you leave signal, and carry a paper topo and a baseplate compass you know how to use -- the phone and GPS unit are fast but run on batteries and firmware, while the map and compass are the system that never dies. Read contour spacing for slope, set declination once, and use handrails, catching features, and aiming off to make a bearing forgiving. Mark the van and the trailhead the moment you arrive. When you are unsure of your position, stop moving and back-track to the last point you can positively identify rather than pushing on to guess.",
    blocks: PILLAR_BACKCOUNTRY_NAVIGATION_WITHOUT_A_SIGNAL,
    faq: [
      { q: "How do I get maps for an area with no cell signal", a: "Download the offline topo and satellite layers for the whole area while you still have signal, ideally at home before the run rather than in the last parking lot. Draw the download box wider than your route so a bail-out down the wrong drainage does not leave you off the map. A downloaded map still needs the phone alive to show it, so carry a paper topo as the backup." },
      { q: "What does close contour spacing mean on a topographic map", a: "Lines close together mean steep ground, lines far apart mean gentle ground, and lines merged into a single dark band mean a cliff. The vertical distance between lines is the contour interval printed in the margin -- commonly 40 feet on a 1:24,000 US topo -- so counting the lines you cross tells you how much you climbed." },
      { q: "Why does declination matter for a compass bearing", a: "The needle points to magnetic north and the map grid points to true north, and the angle between them varies from about 15 degrees east in the Pacific Northwest to 15 degrees west in Maine. Set declination once on a compass with an adjustable scale and every bearing then reads true north automatically; ignore it and a bearing held over a few miles walks you a long way off." },
      { q: "What is aiming off in navigation", a: "Aiming off means deliberately steering to one side of a target that sits on a line, such as a van parked along a road. Aim straight at it and drift and you reach the line not knowing whether to turn left or right; aim off by several degrees and you know exactly which way to turn. A deliberate, known error beats an accidental, unknown one." },
      { q: "What should I do if I get lost in the backcountry", a: "Stop moving the moment you are unsure, because every step from an unknown position makes the position more unknown. Work the STOP drill -- Stop, Think, Observe, Plan -- and if you cannot positively fix your position on the map, back-track to the last point you identified with certainty rather than pushing on downhill hoping water leads out." },
      { q: "How do I make my phone battery last for GPS navigation", a: "Put the phone in airplane mode, since GPS still works because it only receives, and keep it warm against your body because cold can halve a lithium battery or shut it off. Keep the screen off between checks, and treat a power bank as finite -- a 10,000 mAh bank is roughly two to three charges, less in the cold." },
      { q: "Is a GPS unit or a phone better for backcountry navigation", a: "A dedicated GPS unit tolerates cold far better, runs on swappable AA batteries, and survives being dropped on rock, which suits long trips where you carry spares. A phone is more capable but more fragile, so treat it as a fast tool rather than the whole system, and keep a paper map and compass underneath both as the layer that never dies." },
    ],
  },
  {
    slug: "reading-mountain-weather-and-lightning",
    cluster: "seasons",
    pillar: true,
    title: "Reading Mountain Weather and Lightning",
    description: "How to read mountain weather before it turns: the afternoon-thunderstorm pattern, the noon rule, lightning position and 30/30, hypothermia and wind chill, and when to turn around.",
    published: "2026-08-11",
    answer: "Mountain weather turns fast because the terrain builds its own storms, so in monsoon country you plan to be below treeline by noon and off summits and ridgelines before the cumulus stack. The two killers are lightning and hypothermia; both are survivable if you read the building sky early, get low and off exposed ground under the 30/30 rule, and layer against wind and rain even in summer. Turning around is the strong decision, not the weak one -- the mountain holds the same position next season, and you have to be there to hunt it.",
    blocks: PILLAR_READING_MOUNTAIN_WEATHER_AND_LIGHTNING,
    faq: [
      { q: "What time should I be below treeline in the mountains", a: "In monsoon country -- roughly July into September across the interior West -- plan to be below treeline by noon, because storms build in the late morning and break in the early afternoon on a reliable schedule. In a strong surge storms can fire by ten, so start the exposed section at dawn and shift the turnaround earlier if the sky is already building." },
      { q: "What is the 30/30 rule for lightning", a: "The first thirty: if the gap between a lightning flash and its thunder is thirty seconds or less, the storm is within about six miles and close enough to strike you, so take shelter. The second thirty: wait a full thirty minutes after the last thunder before returning to exposed ground, because the back edge of a storm throws lightning as readily as the front." },
      { q: "What should I do if lightning is close and I am caught in the open", a: "Get off summits and ridgelines, away from lone trees, water, and metal, and take the lightning position: crouch on the balls of your feet with your feet together, arms around your knees, head tucked, on an insulating pad if you have one. Do not lie flat -- that maximizes your contact with ground current, which causes most casualties." },
      { q: "Can you get hypothermia in summer", a: "Yes -- hypothermia kills more backcountry travelers than lightning and often strikes in summer, above freezing, when nobody expected cold. It only needs you to be wet and in wind without enough insulation; a 45-degree day with rain and a stiff breeze is a more efficient hypothermia machine than a dry night at 20." },
      { q: "How do I tell a fair-weather cloud from a storm building", a: "Fair-weather cumulus is flat-bottomed and wider than tall, signaling mild lift. Watch for vertical growth: when those puffs stack upward into sharp-edged cauliflower towers taller than they are wide, and especially when the top spreads into a flat anvil blowing downwind, the cloud is an organized thunderstorm already throwing lightning." },
      { q: "Is turning around a sign of a weak hiker", a: "No -- turning around is the strong decision and the competence the sport actually rewards. The mountain is a fixed objective that holds the same position next season, so a rider who turns around has not lost it, only deferred it under conditions they read correctly. The trap is the sunk-cost climb, which is why you set a hard turnaround time before you start and honor it." },
      { q: "How far away is lightning if I count 15 seconds between the flash and the thunder", a: "About three miles, since sound travels roughly a mile every five seconds. That is well within striking range -- lightning routinely jumps six miles from its cloud -- so at fifteen seconds or less you should already be off exposed ground and taking shelter, not watching." },
    ],
  },
  {
    slug: "finding-and-treating-water-in-the-backcountry",
    cluster: "systems",
    pillar: true,
    title: "Finding and Treating Water in the Backcountry",
    description: "How much water a hiker needs, how to find it from map clues and confirm it is running, and how to treat it safely with filters, chemicals, UV, or boiling.",
    published: "2026-08-11",
    answer: "A hiker needs roughly half a liter to a liter per hour of moving effort -- two to four liters over a normal day, six or more in heat or at altitude. Find water by reading a topo map for springs and perennial streams, then confirm the source is actually running before you rely on it. Treat all of it, because clear cold water still carries giardia, cryptosporidium and bacteria: a filter handles protozoa and bacteria, while chlorine dioxide or boiling also kills viruses. In freezing conditions, keep a used filter from freezing or it cracks and passes everything invisibly.",
    blocks: PILLAR_FINDING_AND_TREATING_WATER_IN_THE_BACKCOUNTRY,
    faq: [
      { q: "How much water does a hiker actually need per day", a: "Plan by rate, not a fixed total: about half a liter per hour in mild conditions and closer to a liter per hour when it is hot or the climbing is hard. That lands most people between two and four liters on an average day and five to seven on a hot, exposed one. Add a liter or two above 8,000 feet, where dry air and hard breathing raise loss even when it feels cold." },
      { q: "Is clear, cold, moving mountain water safe to drink untreated", a: "No. Appearance is not a reliable signal; water can look and taste perfect and still carry giardia, cryptosporidium and bacteria you cannot see, taste or smell. Even an alpine stream over granite drains a basin holding elk, marmots, cattle and every hiker upstream, so treat all backcountry water." },
      { q: "What is the difference between a filter and chemical treatment", a: "A hollow-fiber filter physically removes protozoa and bacteria and works instantly, but its pores are too large to stop viruses. Chlorine dioxide kills protozoa, bacteria and viruses and cannot freeze or break, but it needs about 30 minutes and up to four hours against cryptosporidium. Carrying both covers each one's weakness." },
      { q: "Why do water filters fail in cold weather", a: "Water trapped in the hollow fibers expands about nine percent when it freezes and splits them, opening holes far larger than a giardia cyst. A frozen-then-thawed filter flows and looks normal but passes unfiltered water, and there is no field test for it. Once a filter has been used, keep it from freezing -- sleep with it in your bag on cold nights." },
      { q: "How do I know whether a mapped spring will actually have water", a: "A source on a map is a lead, not a fact, and a spring that ran for a decade can be dry the summer you walk to it. Confirm it with current-season information: call the managing office, read dated trip reports, check the region's snowpack, and ask riders who were recently on that ground. Never plan a stretch where one unconfirmed source is all that stands between you and running dry." },
      { q: "Does boiling make backcountry water safe", a: "Yes -- boiling kills every biological pathogen. Bringing water to a rolling boil is sufficient at any elevation a hiker reaches, since pathogens die well before boiling point; holding it a minute is a conservative margin. It does nothing about chemical contamination and costs fuel and time, which makes it best as the fallback when a filter freezes or fails." },
      { q: "What treatment reliably kills cryptosporidium", a: "Cryptosporidium's hard-shelled oocyst resists chlorine and iodine at field doses, so tablets are slow or ineffective against it. A physical filter removes it, boiling kills it, and UV light works on clear water. If you rely on chlorine dioxide, allow the extended contact time -- up to four hours -- rather than the standard 30 minutes." },
    ],
  },
  {
    slug: "bear-country-and-food-storage",
    cluster: "systems",
    pillar: true,
    title: "Bear Country and Food Storage",
    description: "How to keep food from bears and bears from trouble: where storage is required, which methods work, black bear versus grizzly response, and van storage at a trailhead.",
    published: "2026-08-11",
    answer: "In bear country, store every scent -- food, trash, toothpaste, cookware -- in an approved canister, a provided bear locker, or a hard-sided vehicle, never in your tent. Where a food storage order is in effect, an approved container is a requirement you can be cited for ignoring, not a suggestion. The reason is not your safety alone: a bear that gets a human meal loses its fear and is usually killed, so you store food to protect the animal as much as yourself.",
    blocks: PILLAR_BEAR_COUNTRY_AND_FOOD_STORAGE,
    faq: [
      { q: "Where is bear-proof food storage legally required", a: "In most national parks in bear country a food storage order is in effect, and many national forests and designated wilderness areas require an approved canister or hard-sided storage where posted. The requirement is set by the managing unit, so confirm the specific order for that park or ranger district before you go. Some wilderness units also publish an approved-canister list and reject models not on it." },
      { q: "What counts as a scent that has to be stored", a: "Everything with an odor, not just food. That includes trash and packaging, used cookware and stoves, toiletries like toothpaste, sunscreen and soap, pet food and bowls, and clothes you splattered food on. The working rule is that if a person can smell it, a bear can smell it from far greater distance." },
      { q: "Why do hung food bags often fail", a: "A working hang has to be at least 12 feet off the ground, 6 feet out from the trunk, and 6 feet below the branch, and much of the terrain riders camp in has no tree that meets that standard. Most hangs people rig are reachable by a determined bear. In grizzly country and many parks hangs are no longer accepted at all because bears have learned to defeat them." },
      { q: "Is playing dead the right response to any bear attack", a: "No, it depends on the species. In a defensive grizzly attack, play dead until the bear breaks off; with a black bear, playing dead invites it to treat you as food, so you fight back and focus on the face. Never run from either, and carry bear spray where you can reach it in seconds." },
      { q: "Can I just keep my food in the van at a trailhead", a: "In most black bear country a hard-sided vehicle with food out of sight is enough, but a fabric pop-top does not count and food must go in the hard cab or a canister. In the most habituated parks and forests bears break into cars, and the storage order there requires a locker or canister even with the van present. A cooler visible on a seat is what draws a break-in." },
      { q: "Why is food storage described as protecting the bear", a: "A bear that gets a human meal loses its fear, moves into campgrounds and trailheads, and is usually relocated or destroyed once it becomes a danger. Relocation rarely works, so the animal typically pays for the mistake. Storing food keeps the bear from ever getting that first reward, which is what keeps it wild and alive." },
      { q: "How far apart should cooking, sleeping and food storage be", a: "The backcountry standard is a triangle with cooking, storage and sleeping each at a separate corner, ideally around 100 yards apart, with the sleeping area upwind if the wind is steady. The non-negotiable part is that the place you sleep carries no food smell, ever." },
    ],
  },
  {
    slug: "wilderness-permits-and-trailhead-rules",
    cluster: "legality",
    pillar: true,
    title: "Wilderness Permits and Trailhead Rules",
    description: "How permits work when you hike off public land: designated Wilderness rules, day-use versus overnight permits, quotas and lotteries, self-issue stations, and trailhead parking and overnight rules by agency.",
    published: "2026-08-11",
    answer: "Most public-land hiking needs no permit, but three things change that: crossing into designated Wilderness, entering National Park backcountry, and hitting a trailhead that runs a quota. Designated Wilderness bans vehicles and bikes, caps group size, and often requires a permit; day-use permits are usually free and self-issued, while overnight and quota permits can need a reservation booked weeks to six months out. The trailhead is governed separately again -- it may require a parking pass and may or may not allow you to sleep in the lot. Confirm the permit, the parking, and current conditions with the managing district office before you commit the drive.",
    blocks: PILLAR_WILDERNESS_PERMITS_AND_TRAILHEAD_RULES,
    faq: [
      { q: "Do you need a permit to hike on public land", a: "Most trails need no permit at all beyond legal parking. That changes in designated Wilderness, in National Park backcountry, and at any trailhead that runs a quota, where a day-use or overnight permit may be required." },
      { q: "What is the difference between a day-use and an overnight permit", a: "A day-use permit covers walking in and out the same day and is usually free and self-issued at the trailhead. An overnight permit covers sleeping out and is where quotas, fees, and reservation windows concentrate; it also covers day use, but a day permit never covers the night." },
      { q: "Can you ride a mountain bike in a designated Wilderness", a: "No. The Wilderness Act bans all mechanized travel, and a bicycle counts as mechanized even without a motor. Bikes, e-bikes, game carts, and drones all stop at the boundary, whether or not the tread continues past it." },
      { q: "How far ahead do you need to book a wilderness permit", a: "For marquee trails on summer weekends, assume the reservation or lottery window is the binding constraint; six months is the common release horizon for the most contested permits, and some sell out the morning they open. Most trails need only a walk-up self-issue permit the morning of the hike." },
      { q: "Can you sleep in your vehicle at a trailhead overnight", a: "On Forest Service and BLM trailheads it is frequently tolerated, provided you stay inside the vehicle and put nothing outside it. On National Park and most state park trailheads, assume it is prohibited unless a sign says otherwise, and plan to sleep outside the boundary." },
      { q: "How is National Park backcountry different from national forest", a: "The default inverts: in a National Park you may not camp in the backcountry unless a permit specifically authorizes it, often at an assigned site or zone, with mandatory bear-canister food storage. On forest and BLM land you may generally camp unless told otherwise." },
      { q: "What is a self-issue trailhead permit", a: "It is a free two-part paper tag filled out at a trailhead kiosk where a permit is required but no quota applies. One half goes in the drop box and you carry the other; skipping it is a citable violation even though no one is watching you register." },
    ],
  },
  {
    slug: "fire-restrictions-and-campfire-rules",
    cluster: "legality",
    pillar: true,
    title: "Fire Restrictions and Campfire Rules",
    description: "How the Stage 1, Stage 2, and full-closure fire restriction system works on public land, what each stage bans, where fire is legal, and how to check the current stage.",
    published: "2026-08-11",
    answer: "Fire on public land is governed by a stage system set at district level. With no restriction you may build a campfire in an existing ring, on bare mineral soil clear of vegetation, never on peat or duff, and put it dead cold before leaving. Stage 1 bans open fire and restricts smoking; Stage 2 also bans stoves without a shutoff valve and often chainsaws and off-road driving; a full closure bans entry entirely. A stove with a shutoff valve survives most restrictions, a route built on campfires does not, and the signed order for your specific district on the day is the only stage that governs.",
    blocks: PILLAR_FIRE_RESTRICTIONS_AND_CAMPFIRE_RULES,
    faq: [
      { q: "What is the difference between Stage 1 and Stage 2 fire restrictions", a: "Stage 1 bans campfires, charcoal, and open flame outside developed agency rings, and restricts smoking to inside a vehicle or a cleared area, while stoves with a shutoff valve stay legal. Stage 2 goes further -- it bans all open flame including in developed rings in most districts, commonly bans chainsaws, generators, and off-road driving, and in some districts restricts or bans shutoff stoves too." },
      { q: "Can I use a camp stove during a fire ban", a: "Usually yes, if it has a shutoff valve. Petrol, propane, canister, and liquid-fuel stoves are written into the Stage 1 exception and survive Stage 2 in most districts because a valve gives instant control. A wood-burning or twig stove is not a shutoff stove and is banned as open flame at Stage 1 in most orders, so carry a valved stove as your primary." },
      { q: "How do I check the current fire restriction stage for an area", a: "Identify the exact managing unit -- the specific national forest ranger district or BLM field office -- and read the signed fire order posted on that unit's own page, checking the stove line and the effective date. Confirm again close to arrival, because a restriction announced with a few days notice will not have reached most third-party apps yet, and a national aggregator map lags the source by exactly that window." },
      { q: "Where can I legally build a campfire when no restriction is in force", a: "Use an existing established fire ring, on bare mineral soil, rock, or gravel with at least 5 feet cleared around it and no branches within about 15 feet overhead, well clear of grass, brush, and logs. Never build a fire on peat, duff, or root mats, because they carry fire underground where it smolders for days and reignites well away from the ring." },
      { q: "What does dead-and-down firewood mean", a: "It means wood that is already dead and already lying on the ground, which you may collect where gathering is permitted. You may not cut standing trees, alive or dead, and may not break limbs from anything still standing, since standing dead snags are wildlife habitat. Many high-use and alpine areas ban gathering entirely, so check the district rule and bring your own wood bought within about 50 miles." },
      { q: "How do I put a campfire out completely", a: "A fire is out only when it is cold to the touch, not when the flames are gone. Drown it with far more water than seems necessary, stir the coals and ash as you pour so water reaches the material underneath, and repeat until the hissing stops entirely. Then hold the back of your hand near the ash -- if you feel any warmth, it is not out." },
      { q: "What happens if my campfire escapes and starts a wildfire", a: "You can be held liable for suppression costs running into the hundreds of thousands or millions of dollars, plus property and resource damage, none of it capped at what you can pay. A fire started in violation of a restriction is also a criminal matter, misdemeanor or felony depending on outcome, and negligence alone is enough -- restitution has followed people for the rest of their lives, and escaped campfires kill firefighters and residents." },
    ],
  },
  {
    slug: "emergency-communication-and-self-rescue",
    cluster: "systems",
    pillar: true,
    title: "Emergency Communication and Self-Rescue",
    description: "How to call for help where there is no cell signal -- satellite messengers, locator beacons, the free trip plan that starts a search, and the self-rescue habits that prevent most rescues.",
    published: "2026-08-11",
    answer: "Off the grid, a satellite messenger sends two-way texts on a paid subscription while a personal locator beacon sends a subscription-free SOS on a government network; serious parties often carry one of each. But the highest-value item costs nothing -- a written trip plan left with one reliable person, carrying your route and a hard check-in time, which starts a search on the day it matters. Most incidents are handled without a rescue at all, by a rider who knows their limits, turns around early, and treats small problems before they compound.",
    blocks: PILLAR_EMERGENCY_COMMUNICATION_AND_SELF_RESCUE,
    faq: [
      { q: "What is the difference between a satellite messenger and a personal locator beacon", a: "A satellite messenger sends two-way text, tracking, and SOS over a commercial network (Iridium or Globalstar) and requires a paid subscription. A personal locator beacon sends an SOS-only distress signal on the government Cospas-Sarsat network with no subscription, but it cannot receive a reply or report that you are safe." },
      { q: "Do personal locator beacons require a monthly subscription", a: "No. A PLB has no subscription and no monthly fee, and registration is free and takes about ten minutes. It works the moment it is registered and stays live for the life of its non-rechargeable cell, typically rated five to seven years of standby." },
      { q: "What actually happens when you press the SOS button", a: "A PLB signal routes through the Cospas-Sarsat satellites to a government rescue coordination centre, which confirms your registration, checks your emergency contacts, and tasks local search and rescue. A messenger's SOS goes to a private 24/7 monitoring centre that can text you back to confirm the emergency and, critically, let you cancel a launch you no longer need." },
      { q: "Why is a written trip plan the highest-value safety item", a: "A trip plan left with one reliable person -- carrying your route, vehicle, and a hard check-in time -- turns a missed check-in into a search that starts the same day. It costs nothing and does what no beacon can: it starts the response even when you are unconscious, out of battery, or unable to reach a device." },
      { q: "What should a basic wilderness first-aid kit contain", a: "Dressings and gauze for wounds, an elastic wrap for sprains, blister care, wound-cleaning supplies, splinting material, your own medications plus an antihistamine and pain tablets, and gloves, tape, shears, and an emergency blanket. The goal is to stabilize a rider enough to self-rescue, and the skill to use the kit matters more than its contents." },
      { q: "How does cold affect emergency device batteries", a: "Lithium-ion capacity and voltage drop sharply below freezing, so a messenger or phone can read empty when it is not, and a cold-soaked device can be dead by morning. Keep any emergency device against your body, sleep with it in your bag, and carry a charged power bank kept warm too." },
      { q: "Can a phone's built-in satellite SOS replace a dedicated messenger or beacon", a: "No. Phone satellite SOS is a useful supplement, but it drains the one battery you most need to preserve, needs a clear patch of sky and a steady hold for a fix, and its coverage and terms are still uneven. Treat it as a bonus, not the reason to skip a dedicated device." },
    ],
  },
  {
    slug: "timing-a-route-by-season-and-elevation",
    cluster: "seasons",
    pillar: true,
    title: "Timing a Route by Season and Elevation",
    description: "How elevation works as a second calendar, the four western hazard seasons, reading a snowpack and closure window, and matching a run to conditions rather than a fixed itinerary.",
    published: "2026-08-11",
    answer: "Elevation is a second calendar: snow lingers high into July while the low desert is already lethal, so you climb as the season warms and drop as it cools. Time a run by elevation band and by the regional hazard windows -- monsoon and flash flood in the Southwest, fire and smoke in the mountain West, mud and gated roads in spring, snow and pass timing in the high country. The framework gets you to the right month and band; the current snowpack, closure, and conditions for a specific district beat every general figure, including these.",
    blocks: PILLAR_TIMING_A_ROUTE_BY_SEASON_AND_ELEVATION,
    faq: [
      { q: "How does elevation change when a route is in season", a: "Temperature drops roughly 3 to 5 degrees Fahrenheit per thousand feet, which sets the seasonal calendar back by weeks for every few thousand feet you climb. A site at 10,000 feet runs two to three months behind the valley below it, so high ground is a warm-season objective while low desert is a cool-season one." },
      { q: "What are the main hazard seasons for a western route", a: "Four dominate: the Southwest monsoon and flash flood roughly July to September, mountain-West fire and smoke from June or July into October, spring mud season and road closures April to June, and high-country snow that gates passes late in spring and closes them early in autumn. Each can close ground the temperature says is fine." },
      { q: "How do I read a snowpack report for route timing", a: "In the western United States the metric is snow water equivalent (SWE), reported as a percent of the long-term normal and published daily from SNOTEL stations. A basin under 70 percent on April 1 signals an early opening; over 130 percent means passes open weeks late, some not until mid-July. It tells you whether the year runs early or late, not the exact date." },
      { q: "Why are the shoulder seasons worth planning around", a: "The best conditions on public land are almost never in the peak weeks. They fall in the window just after a band opens and just before it closes, when the weather has settled but the crowds and hazards have not fully arrived. The fortnight after a montane gate opens is consistently the best conditions and fewest vehicles of the year." },
      { q: "Should I plan a long route north-to-south or by elevation", a: "Plan by elevation. Riders who run north-to-south hit weather because the south warms before the north thaws and the timing never lines up. Following the usable band -- climbing with the melt in spring and dropping ahead of the freeze in autumn -- keeps a run in season the whole way, and the map barely changes while the elevation profile does the work." },
      { q: "How much can I trust a published gate opening date", a: "Treat it as the earliest plausible date and add slack. Crews open a road when the ground is ready and the roadbed is stable, not when the calendar says, so published openings run optimistic, especially after a heavy winter. The first passable date and the first comfortable date can be a fortnight apart, and only someone recently on the road knows which one today is." },
      { q: "What does a fixed itinerary get wrong about timing a route", a: "An itinerary is a hypothesis about a normal year; the conditions are the fact, and when they disagree the conditions win. Build the skeleton by band and month, overlay the hazard windows, read this year's snowpack against normal, and keep slack at the transitions plus an alternate region for the fire-season legs when smoke can arrive with a day of notice." },
    ],
  },
  {
    slug: "how-to-find-dispersed-camping",
    cluster: "finding-ground",
    pillar: true,
    title: "How to Actually Find Dispersed Camping",
    description: "The practical, ordered method for finding a legal, level dispersed campsite: confirm the land layer, scout existing clearings from satellite, arrive in daylight, and read the pullout before you commit.",
    published: "2026-08-11",
    answer: "Finding dispersed camping is a sequence, not a search. Confirm which public-land layer you are on and what its rule is, scout satellite imagery for an existing clearing you can reuse without cutting new ground, and arrive with two hours of daylight to read the pullout for level ground, drainage, fire scars, overuse and signal. If a site fails any of those, you drive on to the next -- that discipline, not the map app, is what puts you on good ground.",
    blocks: PILLAR_HOW_TO_FIND_DISPERSED_CAMPING,
    faq: [
      { q: "How do I know if land is legal for dispersed camping", a: "Check the ownership layer first with a land-ownership overlay. BLM and national forest are usually open, national parks almost never allow roadside camping, and state trust land and private inholdings either vary by state or are closed outright. The parcel underneath decides the rule, and it is invisible on a standard road map." },
      { q: "Can I use satellite imagery to find dispersed campsites", a: "Yes. Aerial imagery shows existing clearings, spurs and compacted pullouts as small bare tan or grey patches hanging off a road, often with a fire ring as a dark dot at the center. Scout only for sites that already exist and reuse them; never use imagery to pioneer new ground, which is how areas get closed." },
      { q: "Are crowdsourced camping app pins reliable", a: "Only as a rough lead that someone once stopped nearby. Pins carry no ownership check, no date, and no current conditions, so a meaningful share sit on private land or mark sites that have since been gated, closed for damage, or built over. Confirm the governing rule rather than trusting the pin." },
      { q: "How far from water and the road can I camp", a: "Camp within the district's maximum distance from an open road, often 150 to 300 feet, and at least 100 to 200 feet from any stream, lake, spring or stock tank. Road distance is a ceiling you must stay under, since anything farther is prohibited cross-country travel; water distance is a floor you must stay beyond." },
      { q: "How much daylight should I leave to find a site", a: "Aim to have your wheels stopped at least 90 minutes before sunset, with two hours as the target. That margin lets you read a site, reject it, and still reach a scouted second option with light to read it -- which is the thing that makes driving on from a bad site actually possible." },
      { q: "What are the red flags that mean I should keep driving", a: "Fresh tire tracks into undisturbed vegetation, a site sitting in the low line of a wash, scattered fire scars and trash, a private inholding shown under the site, no signal when you need to be reachable, or every flat spot already occupied. Any one of these is a reason to move on rather than settle." },
      { q: "Why check cell signal before parking", a: "Because signal is a siting decision, not an after-dark discovery. Terrain decides it, so a ridge between you and the tower can kill a bar that open ground half a mile away would hold. Confirm it standing at the exact spot you would park, while you still have daylight and a second option to reach." },
    ],
  },
  {
    slug: "power-systems-for-life-on-the-road",
    cluster: "systems",
    pillar: true,
    title: "Power systems that hold for a long season",
    description: "How to build a van house electrical system that survives a full season: battery chemistry, amp-hour sizing, solar, DC-DC and shore charging, inverters, and winter derating.",
    published: "2026-08-11",
    answer: "A house system that lasts a season is sized from usable amp-hours against a measured daily load, not from headline capacity. For most riders that means 200 to 400 amp-hours of LiFePO4, a 300 to 600 watt solar array, and a 20 to 40 amp DC-DC charger fed by the alternator. Size the battery to at least two days of real draw and the charging so a normal day runs a surplus. The case that actually governs the design is winter, when solar collapses to a quarter of its summer yield and the alternator becomes the primary source.",
    blocks: PILLAR_POWER_SYSTEMS_FOR_LIFE_ON_THE_ROAD,
    faq: [
      { q: "LiFePO4 or AGM for a van house battery", a: "LiFePO4 gives you 80 to 100 percent usable capacity and several thousand cycles, where AGM gives about 50 percent usable and a few hundred to a thousand cycles. It costs more upfront and far less per usable kilowatt-hour over its life. The one caveat is cold: LiFePO4 must not be charged below freezing without a cell heater." },
      { q: "How many amp-hours of battery do I actually need", a: "Size from a measured daily load, then carry at least two days of it. A working rider drawing about 90 amp-hours a day lands at 200 to 250 rated amp-hours of LiFePO4; riders running Starlink hard or cooking electrically land at 300 to 400." },
      { q: "How much power does a 12V fridge use per day", a: "A typical compressor fridge draws roughly 28 amp-hours a day in mild conditions and up to 45 on a hot afternoon, because its duty cycle climbs with ambient temperature and how often you open it. It is usually the single largest load in a non-working build." },
      { q: "Do I even need an inverter in my van", a: "Often not. A fridge, lights, pump, and USB device charging all run natively on 12 volts, so if those are your only loads you can skip the inverter and its idle drain entirely. You need one only for a genuine mains-only load such as an induction hob, power tools, or a laptop with no USB-C charging." },
      { q: "How much solar do I really get in winter", a: "Plan on a quarter to a third of the summer figure. A 400-watt array that makes 1,200 to 2,000 watt-hours on a clear summer day may make only 200 to 500 on a short, overcast winter day, and nothing at all when snow covers the panels." },
      { q: "What a DC-DC charger does and why it matters", a: "A DC-DC (battery-to-battery) charger sits between the alternator and the house battery, protecting the alternator from high current, delivering a correct charge profile, and isolating the two banks so a drained house battery still starts the engine. It returns about 30 amp-hours per hour of driving on a 30-amp unit, and in winter it becomes the primary charging source." },
    ],
  },
  {
    slug: "staying-warm-on-public-land-in-winter",
    cluster: "seasons",
    pillar: true,
    title: "Staying Warm on Public Land in Winter",
    description: "How to keep a rig habitable when the ground freezes: heaters compared, the carbon-monoxide risk, condensation control, water and battery protection, and the strategic move of dropping elevation.",
    published: "2026-08-11",
    answer: "The workhorse for keeping a rig habitable below freezing is a fuel-fired diesel or gasoline air heater, because it vents combustion outside, adds no moisture to the cabin, and draws almost nothing from the battery. An unvented propane buddy heater does the opposite on all three counts and belongs to short daytime use with a window open, never a closed vehicle overnight -- and a low-temperature carbon-monoxide alarm is non-negotiable regardless of heater. The real enemy is moisture, not cold air, so ventilate on purpose and keep water out of the insulation. When the cold turns genuinely dangerous, dropping 2,000 to 3,000 feet of elevation is often cheaper and safer than fighting it.",
    blocks: PILLAR_STAYING_WARM_ON_PUBLIC_LAND_IN_WINTER,
    faq: [
      { q: "What is the best heater for winter van life on public land", a: "A diesel or gasoline fuel-fired air heater. It vents its combustion outside so it adds no water to the cabin, burns roughly a tenth to a quarter of a litre of fuel an hour, and draws only a few watts once past its startup glow cycle." },
      { q: "Is it safe to run a propane buddy heater overnight in a closed van", a: "No. A buddy heater is unvented, so it dumps water vapour and carbon monoxide straight into the air you breathe. Use it only while you are awake with a window cracked, and never in a sealed vehicle while you sleep." },
      { q: "Do I still need a carbon-monoxide alarm if I only run a vented heater", a: "Yes. A vented air heater can still leak exhaust through a cracked pipe or corroded gasket, and the cooktop and engine produce CO as well. A low-temperature-rated CO alarm mounted near your head is the only thing that catches the failure before it catches you." },
      { q: "What actually causes condensation inside a van in winter", a: "Mostly breath and cooking. Two sleeping adults exhale roughly one to one and a half litres of water a night, which condenses on the coldest interior surfaces. Cross-ventilation, venting hard while cooking, and using only a dry vented heater are the main controls." },
      { q: "How do I stop my van water system from freezing", a: "Keep tanks and lines inside the heated cabin and run the heater overnight, which protects most systems on its own. Exposed underslung tanks and exterior lines need insulation and thermostatic 12V heat tape, or should be drained before a hard freeze." },
      { q: "Can I charge a lithium battery in freezing temperatures", a: "No. Charging a LiFePO4 bank below 32F plates the cells and permanently damages them. Quality batteries have a low-temperature cutoff that refuses the charge; cold-climate builds either heat the battery or wait until midday warms the cells." },
      { q: "How much warmer does it get if I drop in elevation", a: "Air warms roughly 3.5 to 5 degrees Fahrenheit for every 1,000 feet you descend, so dropping 2,000 to 3,000 feet is worth about 10 to 15 degrees of overnight low. A cold-air inversion can reverse this in valley bottoms, so a bench above the valley floor often beats both the ridge and the bottom." },
    ],
  },
  {
    slug: "internet-and-cell-signal-off-grid",
    cluster: "systems",
    pillar: true,
    title: "Internet and Cell Signal Off the Grid",
    description: "How riders who work remotely stay connected on public land: carrier coverage and second-carrier redundancy, cell boosters and antennas, Starlink Roam power and limits, and routing around coverage.",
    published: "2026-08-11",
    answer: "You can work remotely from public land, but not from anywhere on it. Two carriers on different networks cover most improved dispersed ground, a booster only helps where a weak signal already exists, and Starlink Roam fills the rest at a real cost of 40 to 60 watts and a clear view of sky. The reliable method is to plan the route around known coverage rather than carry gear and hope; genuinely remote interior ground under canopy or deep in a canyon is often not working ground at all.",
    blocks: PILLAR_INTERNET_AND_CELL_SIGNAL_OFF_GRID,
    faq: [
      { q: "Can you get reliable internet for remote work on public land", a: "Yes on much of the improved dispersed ground within a reasonable drive of a paved highway, given two carriers and often a booster. Genuinely remote interior sites under canopy or deep in canyons frequently have neither usable cellular nor a clear enough sky for Starlink, and are better treated as days-off ground than as a place to take a deadline." },
      { q: "Why carry a second cell carrier instead of a booster or Starlink", a: "A second line on a different network is the cheapest redundancy there is and closes coverage holes a booster cannot, because a booster only amplifies a signal that already arrives. Carriers place their towers differently, so where one network dies behind a ridge the other frequently lives." },
      { q: "How much power does Starlink Roam actually draw", a: "The standard dish pulls roughly 40 to 60 watts in steady use, near 4 to 5 amps at 12 volts, so an eight-hour working day consumes 35 to 45 amp-hours before anything else in the van draws a watt. The built-in snow-and-ice heater can add up to 75 watts more in the cold, which is a heavy tax on a winter battery bank." },
      { q: "Will a cell booster work where there is no signal", a: "No. A booster receives an existing outside signal on an external antenna, amplifies it, and rebroadcasts it inside, so where the outside reading is a true zero it has nothing to work with. It reliably turns a marginal one-bar signal into a usable one, but it never turns nothing into something." },
      { q: "Why does Starlink drop calls under trees", a: "The dish needs a clear view of a wide arc of moving satellites, so any branch, canopy edge, or ridgeline causes a brief dropout each time a satellite it was using passes behind the obstacle. A single overhanging tree that looks minor can produce a dropout every few minutes -- survivable for email, fatal for a video call." },
      { q: "How do you plan a route so you can keep working", a: "Treat coverage as a property of a site to verify before arrival, check measured-coverage data for the specific carriers you hold, and keep a confirmed fallback within a short drive. Arrive a day early and test on a real video call rather than a speed test, and match meeting-heavy days to known-good sites while saving thin-signal ground for solo focused work." },
      { q: "Which carrier is best for off-grid coverage in the West", a: "Verizon generally has the broadest rural low-band footprint and is the common first choice, with AT&T the strongest complement because its towers sit in different places and cover different holes. T-Mobile is fast where present but has the weakest low-band reach in remote terrain, which makes it the weakest third line." },
    ],
  },
  {
    slug: "camping-near-trailheads-and-hiking-access",
    cluster: "finding-ground",
    pillar: true,
    title: "Camping Near Trailheads and Hiking Access",
    description: "How to use dispersed camping as a hiking basecamp: which agencies allow overnight at trailheads, staging a camp near a trail, parking safely, water, and altitude.",
    published: "2026-08-11",
    answer: "You can usually stage a dispersed camp within a few miles of a trailhead on Forest Service and BLM land, and many trailheads tolerate an overnight in the lot itself, but a posted sign, a wilderness boundary or a permit area overrides that instantly, and national park trailheads almost never allow it. Keep the camp and the objective as two decisions: camp low enough to sleep and drive to the trail rather than sleeping high for proximity. Treat the parked van as the weak point in the plan -- secure valuables, store scented items to the area's bear rule, and tell a named person your route and a hard check-in time before you walk away.",
    blocks: PILLAR_CAMPING_NEAR_TRAILHEADS_AND_HIKING_ACCESS,
    faq: [
      { q: "Can you sleep overnight at a trailhead", a: "Often yes on Forest Service and BLM land, especially at remote access points, but only where no sign prohibits it. A trailhead is a developed site, so overnight parking (everyone inside, nothing set out) is usually tolerated while setting up a camp in the lot usually is not. National park trailheads are day-use and almost never allow sleeping in the lot." },
      { q: "Do national park trailheads allow overnight parking or camping", a: "Almost never. Parking inside national parks is day-use only, roadside sleeping is prohibited nearly everywhere in the system, and backcountry camping is permit-only and staged away from roads. Plan to sleep outside the park boundary and drive in, or hold a backcountry permit." },
      { q: "How close should a dispersed basecamp be to the trailhead", a: "Close enough that the approach drive does not eat your early start, measured in drive time rather than map distance. For an alpine dawn start, stage within about fifteen minutes of driving; for a casual day hike, forty-five minutes is fine. Prioritise a level, established site over raw proximity, because sleep quality beats ten saved minutes the night before a hard day." },
      { q: "Is there water available at most trailheads", a: "Assume there is none. Dispersed trailheads on forest and BLM roads generally have no water, developed-campground spigots may be seasonal and shut off, and natural sources near a trailhead are unreliable and often dry by late summer. Carry the whole stay plus the hike plus a margin, roughly a gallon per person per day and more in heat or at altitude." },
      { q: "How do you store food safely at a trailhead in bear country", a: "Keep all food and scented items -- including toiletries and trash -- sealed and out of sight with the windows up, because scent alone draws bears. In designated bear areas and many parks the vehicle does not count as adequate storage and a bear box or certified canister is required, so use the provided locker. Grizzly-country storage rules are mandatory and actively enforced." },
      { q: "Should you camp high near the trailhead or low for acclimatisation", a: "Camp low and hike high where you can, because the body adapts to the altitude it sleeps at, not the altitude it visits. Above about 8,000 feet, gain no more than roughly 1,600 feet of sleeping elevation per night, and spend a night at a high camp before taking a big objective rather than arriving and summiting. If altitude symptoms appear, the fix is to descend and sleep lower -- an option a van always gives you." },
      { q: "What is the difference between overnight parking and camping at a trailhead", a: "It is whether anything is outside the vehicle. A van parked with everyone inside, nothing set out, arriving late and leaving early reads as overnight parking, which is widely tolerated. The same van with an awning, chairs and a stove reads as camping, which at a developed site is widely prohibited -- so the reliable move is to camp on dispersed ground down the road and use the lot only for parking." },
    ],
  },
  {
    slug: "what-it-costs-to-build-a-van",
    cluster: "cost",
    pillar: true,
    title: "What It Costs to Build Out a Van",
    description: "A line-item van build budget with the arithmetic shown: van tiers, electrical, insulation, water, ventilation, and heat, plus DIY versus shop costs and the hidden costs of tools and time.",
    published: "2026-08-11",
    answer: "A livable DIY van build costs roughly 4,000 to 12,000 dollars on top of the van, and the van itself runs 8,000 dollars high-mileage to 55,000 low-mileage. Electrical is almost always the largest single line, a roof fan is the highest-value cheap upgrade, and a turnkey professional conversion starts near 80,000 dollars. Split the total by line item rather than chasing one number, and remember that a good cheap build beats an expensive bad one, reliably.",
    blocks: PILLAR_WHAT_IT_COSTS_TO_BUILD_A_VAN,
    faq: [
      { q: "How much does it cost to build out a van", a: "A livable DIY build runs roughly 4,000 to 12,000 dollars on top of the van, and the van itself is 8,000 to 55,000 depending on mileage. A turnkey professional conversion starts around 80,000 dollars and climbs from there." },
      { q: "What is the most expensive system in a van build", a: "Electrical, almost always. Batteries, solar, a charger, and an inverter typically take 30 to 45 percent of the interior budget, and the battery cost scales directly with how many amp-hours you decide to carry." },
      { q: "What is the single best cheap upgrade for a van build", a: "A powered roof fan, at 200 to 350 dollars plus a few hours to install. It manages heat and condensation better than components costing ten times as much, and it is the one place this budget argues for spending money." },
      { q: "Is it cheaper to build a van yourself or pay a shop", a: "Far cheaper to build it yourself, because labor is most of what a finished build costs. A full interior is 6,000 to 14,000 dollars in DIY parts versus 45,000 to 90,000 at a shop, and the gap is hundreds of hours of skilled labor." },
      { q: "What hidden costs do people forget in a van build", a: "Tools, mistakes, and time. A first build often adds 300 to 800 dollars in tools and a few hundred in wasted material, and takes 200 to 400 hours, none of which appears on a parts list." },
      { q: "How much should I spend on the van versus the build", a: "Keep them as two separate numbers. The van is a used-vehicle decision driven by mileage and rust; the interior is a construction decision. Buy the van right with a 150 to 250 dollar pre-purchase inspection, because a bad van is the one mistake that is expensive to fix later." },
      { q: "Do I need an expensive diesel heater for a van build", a: "Not necessarily. A budget diesel air heater from around 130 dollars vents outside and runs overnight safely, though name-brand Webasto or Espar units cost more and fail far less. A portable propane heater is cheaper still but must never run while you sleep." },
    ],
  },
  {
    slug: "dispersed-camping-rules-public-land",
    cluster: "legality",
    pillar: true,
    title: "Dispersed camping on public land: the complete rules",
    description:
      "Which agency governs what, how the 14-day limit is actually counted, reading a Motor Vehicle Use Map, fire restriction stages, and how to verify a specific site before you drive to it.",
    published: "2026-08-05",
    answer:
      "Dispersed camping is legal on most BLM and national forest land without a permit or fee, for a limited number of nights, in places that have already been used. Stay limits are commonly 14 days in a 28-day period with a 25-mile reset distance, but districts set their own and the district office rule overrides any national figure.",
    blocks: DISPERSED_RULES,
    faq: [
      {
        q: "Do you need a permit for dispersed camping",
        a: "Generally no on BLM and national forest land. National parks are the exception -- backcountry camping there requires a permit and roadside camping is prohibited nearly everywhere in the system.",
      },
      {
        q: "How long can you stay in one spot",
        a: "Commonly 14 days within a 28-day period, then you must move a set distance away, often 25 miles. Districts set their own limits and some are shorter, so check the field office rather than assuming the default.",
      },
      {
        q: "Does moving down the road reset the stay limit",
        a: "No. The limit generally applies to an area rather than a site, so relocating within the same district continues the same stay. The reset requires the full distance specified by that district.",
      },
      {
        q: "What is a Motor Vehicle Use Map",
        a: "The legally operative statement of which forest roads are open, to which vehicles, during which months. It is issued per forest, updated annually, free, and it overrides every navigation app and general forest map.",
      },
      {
        q: "Can you have a campfire while dispersed camping",
        a: "It depends entirely on current fire restrictions, which are issued at district level and change with a few days notice. A stove with a shutoff valve survives Stage 1 and often Stage 2 restrictions; a route built around campfires does not.",
      },
      {
        q: "How far from water do you have to camp",
        a: "Nearly every district requires at least 100 to 200 feet from any water source. It is among the more actively enforced rules because the damage is visible and immediate.",
      },
    ],
  },
  {
    slug: "how-long-can-you-stay-on-public-land",
    cluster: "legality",
    title: "How long you can stay in one spot on public land",
    description:
      "Stay limits on BLM and national forest land, how they are counted, and what moving on actually requires.",
    published: "2026-08-05",
    answer:
      "On most BLM and national forest land the dispersed stay limit is 14 days within a 28-day period, after which you must move a set distance -- commonly 25 miles -- away from the previous site. Districts set their own limits and some are shorter, so the posted rule at the district office governs over any general figure.",
    body: [
      "The fourteen-day figure is the one everybody quotes and it is usually right, but it is a default rather than a law. Individual BLM field offices and forest districts set their own limits, and in high-pressure areas they are shorter. Checking the district rather than assuming the default is the whole of the compliance work.",
      "How the clock is counted matters more than the number. The limit is generally per area, not per site, so moving half a mile down the same road does not reset anything. The reset distance is typically twenty-five miles, and it is measured from the site you left.",
      "Enforcement varies enormously and that is not an argument for ignoring it. Stay limits exist because dispersed camping is fragile as a permission -- it is withdrawn area by area when the ground gets worn, and the areas that lose it do not usually get it back.",
    ],
    faq: [
      {
        q: "Does moving to a different site nearby reset the clock",
        a: "Usually not. The limit is generally applied per area, with a reset distance of around twenty-five miles from the previous site.",
      },
      {
        q: "How do I find the limit for a specific area",
        a: "The district office is the authority. Objectives on Vanism carry the reported access status and any stay limit riders have confirmed on the ground.",
      },
    ],
  },
  {
    slug: "legal-boundary-vs-passable-road",
    cluster: "legality",
    title: "A legal boundary is not a passable road",
    description:
      "Why public land data tells you where you may camp and nothing at all about whether you can get there.",
    published: "2026-08-05",
    answer:
      "Public land layers show where dispersed camping is permitted. They do not show washouts, locked gates, seasonal closures, clearance requirements or fire restrictions, all of which determine whether a legal site is reachable. Those are conditions, and conditions only come from people who were recently on the road.",
    body: [
      "The boundary data is genuinely good and genuinely free. Anyone can put a public land layer on a map, which is why most apps in this category have one and why having one is not a differentiator.",
      "What the layer cannot tell you is the last two miles. A cell can be perfectly legal and end at a washout, a gate that opens in June, or a grade that wants clearance you do not have. Every one of those is invisible to the data and obvious to anyone who drove it last week.",
      "This is the reason the site record here carries an access status with a date attached, and the reason an objective with an unknown status does not publish at all. A confident page about a road nobody has confirmed is worse than no page.",
    ],
    faq: [
      {
        q: "Why does an objective show as unpublished",
        a: "It failed one of the four gate tests: fewer than three confirmed visits, missing coordinates, unknown access status, or no confirmation in the last eighteen months.",
      },
    ],
  },
  {
    slug: "what-a-season-on-the-road-costs",
    cluster: "cost",
    pillar: true,
    title: "What a season on the road actually costs",
    description:
      "A real six-month van life budget: fuel by the mile, dispersed versus paid camping, food, insurance, a repair reserve, tyres, and depreciation, with frugal to comfortable monthly ranges.",
    published: "2026-08-11",
    answer:
      "Six months of van life runs most riders from about 6,000 dollars frugal to 25,000 comfortable, and the number that decides where you land is miles driven, not months. Fuel is the largest variable cost -- miles divided by mpg, times pump price -- so two riders out the same season differ by a factor of three mostly on distance. The lines people omit, a maintenance reserve and depreciation, are among the largest; count them monthly so neither arrives as a surprise.",
    blocks: PILLAR_WHAT_A_SEASON_ON_THE_ROAD_COSTS,
    faq: [
      { q: "How much does six months of van life cost", a: "A frugal season runs about 6,000 dollars, a middle one around 14,000, and a comfortable one up to 25,000. The spread is driven mostly by miles driven and camping choices, not by the number of months out." },
      { q: "Why do two riders spend so differently in the same season", a: "Fuel is the largest variable cost and it scales with miles, not time. A rider covering 18,000 miles burns three times the fuel of one covering 6,000 in the same van, which is the main reason otherwise-similar seasons differ by a factor of three." },
      { q: "How do I calculate my fuel cost", a: "Divide the miles you expect to drive by your van's miles per gallon, then multiply by the price per gallon. At 18 mpg, 1,000 miles a month, and 3.75 dollars a gallon, that is about 208 dollars a month." },
      { q: "What budget line do most people leave off", a: "The maintenance-and-repair reserve and depreciation. Skipping them makes a budget look 250 to 1,000 dollars a month cheaper than the season actually costs, and the gap comes due all at once when something breaks or when you sell the van." },
      { q: "How much should I set aside for repairs", a: "Accrue 100 to 300 dollars a month whether or not anything breaks, toward the top of that range for an older, higher-mileage van. A single tow off a forest road can run several hundred to over a thousand dollars before any part is replaced." },
      { q: "Can I really camp for free", a: "Yes. Dispersed camping on BLM and national forest land carries no fee, so a rider staying mostly on public land can hold camping near zero. The main limits are geography, since the West has far more free ground than the East, and the occasional paid night for a shower or dump station." },
      { q: "How much is insurance on the road", a: "Vehicle coverage runs 90 to 180 dollars a month, more for a full-timer policy that covers the build-out and contents. Health insurance ranges from near zero on a subsidized plan to 650 dollars or more, and travelers need a national network to avoid out-of-network bills across state lines." },
    ],
  },
  {
    slug: "reading-a-forest-service-map",
    cluster: "finding-ground",
    pillar: true,
    title: "Reading a forest service map for dispersed sites",
    description:
      "How to read a national forest's Motor Vehicle Use Map -- the free, binding record of which roads are open, to which vehicles, in which months -- and why it beats every app.",
    published: "2026-08-11",
    answer:
      "On national forest land the Motor Vehicle Use Map, or MVUM, is the only document that legally states which roads are open, to which class of vehicle, and in which months. It is free, issued per forest, and it overrides every navigation app, paper atlas, and the general Forest Visitor Map -- apps routinely show roads that are closed, gated, or were never built. Read the MVUM first and use an app only to follow a route you have already confirmed is legal. The map governs the rules; current conditions like gates and washouts still have to be confirmed on the ground.",
    blocks: PILLAR_READING_A_FOREST_SERVICE_MAP,
    faq: [
      { q: "What the MVUM is and why it overrides navigation apps", a: "The Motor Vehicle Use Map is the free, per-forest document that legally states which roads are open, to which vehicle class, and in which months. It overrides every app, GPS unit, and paper map: if a road is not on the MVUM as open to your vehicle, driving it is a violation no matter what an app shows." },
      { q: "The difference between the MVUM and the Forest Visitor Map", a: "The Visitor Map is a general orientation map that shows terrain and most roads regardless of legal status. The MVUM is the binding legal list of roads open to motor vehicles. The Visitor Map tells you a road exists; the MVUM tells you whether you may drive it." },
      { q: "What a forest road number tells you about the road", a: "Numbering is a hierarchy: short two- or three-digit numbers are maintained arterials, four-digit numbers are branches, and a lettered suffix like FR 2440A is usually a primitive spur. The length is a strong hint about surface and maintenance, though renumbered systems break the pattern." },
      { q: "What road maintenance levels mean for the vehicle you need", a: "Maintenance level runs 1 to 5. ML 3 and above are maintained for passenger cars; ML 2 is maintained for high-clearance vehicles and expects ruts and rock; ML 1 is closed to the public. The ML 2 to ML 3 line is the one that matters most for a long-wheelbase van." },
      { q: "How to tell if a forest road is open only part of the year", a: "The MVUM marks seasonal roads with open dates, and a road outside its window is closed and usually gated. The printed date is the earliest it is legal, not a promise the gate is unlocked -- in a heavy-snow year the crew opens it weeks later." },
      { q: "How dispersed-camping corridors are shown on the MVUM", a: "Most forests allow camping within a set distance of an open road, commonly 150 or 300 feet, and the corridor exists only along open roads. A road closed on the MVUM has no camping corridor, no matter how established the pullout beside it looks." },
      { q: "Where to download an MVUM for free", a: "Every forest posts its current-edition MVUM as free geospatial PDF quadrants on the Forest Service website, and the agency's official offline app carries the same road designations as a downloadable layer. Load a georeferenced PDF into a mapping app and your GPS position shows on the legal map with no signal." },
    ],
  },
  {
    slug: "water-planning-for-long-stays",
    cluster: "systems",
    title: "Water planning for long stays",
    description:
      "How much to carry, where refills actually are, and why the carry interval sets your maximum stay.",
    published: "2026-08-05",
    answer:
      "Water is the constraint that sets maximum stay length for most riders, because it is heavy, bulky and the only consumable with no substitute. Plan the refill interval first and the route second: a site is only usable for as long as your carry lasts, regardless of how good it is.",
    body: [
      "Everything else can be stretched. Power can be rationed, food can get boring, waste can be managed. Water sets a hard number and then the rest of the plan has to fit inside it.",
      "Which means the sequencing runs backwards from how most people plan. You establish the carry interval, then you build the route so refills land inside it, and only then do you choose between the sites that survive that filter.",
      "Refill points decay from the record faster than almost anything else. A spigot that was on in May is off in September and closed for the season in November, which is why water availability is a dated field on objectives here rather than a static attribute.",
    ],
    faq: [
      {
        q: "How much water per person per day",
        a: "Plan on more than you think for anything beyond drinking, and treat the number as a route constraint rather than a packing detail.",
      },
    ],
  },
  {
    slug: "why-we-date-everything",
    cluster: "the-record",
    title: "Why every number on this site carries a date",
    description:
      "Freshness gates, withheld pages, and the argument for showing nothing rather than showing an estimate.",
    published: "2026-08-05",
    answer:
      "Every figure on Vanism carries the date it was confirmed, and anything not confirmed within eighteen months drops out of search entirely. A site record without a date is an assertion; with a date it is evidence you can weigh yourself.",
    body: [
      "Listing age is invisible in most of this category. A site confirmed in 2019 renders identically to one confirmed last week, which quietly transfers all of the risk to the person driving.",
      "Putting the date on the page moves that judgement back where it belongs. An eighteen-month-old note is still useful; it is just useful as an eighteen-month-old note.",
      "The freshness gate is the harder half of the same idea. Past the window, a record does not get a caveat -- it leaves the index. We would rather have a smaller site that means something.",
    ],
    faq: [
      {
        q: "What happens to a site that goes stale",
        a: "It stays reachable at its URL and stops appearing in search until someone confirms it again.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return POSTS.find((p) => p.slug === slug);
}

export function postsByCluster(cluster: ClusterId) {
  return POSTS.filter((p) => p.cluster === cluster);
}

export function getCluster(id: string) {
  return CLUSTERS.find((c) => c.id === id);
}
