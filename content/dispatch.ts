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
