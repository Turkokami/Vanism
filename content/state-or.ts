import type { StateContent } from "./states";

export const STATE_OR: StateContent = {
  code: "or",
  name: "Oregon",
  answer: "Oregon is roughly half federal public land, and the Cascade crest splits it into two different states to ride. West of the crest is dense, heavily roaded national forest tangled with checkerboard BLM O&C timber, where dispersed camping exists but is thin and hemmed in by private land. East of the crest is high-desert BLM by the millions of acres -- Steens, the Alvord, the Owyhee -- where dispersed camping is abundant, remote, and governed by heat, mud, and distance rather than crowds. The 14-day rule holds on most BLM and Forest Service ground, but the pressured corridors around Bend and the fire-season closures are where the general answer stops being reliable.",
  blocks: [
    { kind: "key", text: "Dispersed camping in Oregon is legal and free on most BLM and national forest land for up to 14 days, and the state is close to half public. The real ground is the east: high desert BLM around Steens Mountain, the Alvord Desert, and the Owyhee Canyonlands, some of the most open, remote dispersed camping in the West. The west side is greener but far tighter -- O&C checkerboard and private timber cut the legal ground into a puzzle, and the coast is nearly all developed state parks with dispersed camping effectively off the table." },

    { kind: "p", text: "Oregon is one of the better public-land states in the country and one of the most misread. About 53 percent is federal -- roughly 32 million of its 62 million acres -- split almost evenly between the Bureau of Land Management and the US Forest Service, and the two agencies sit on opposite sides of the Cascade Range doing different jobs. Plan an Oregon run as one place and you will get it wrong: the wet, forested west and the dry, open east are separate problems with separate rules, seasons, and hazards." },

    { kind: "h2", text: "The public-land split: one state, two halves" },

    { kind: "p", text: "The Cascade crest is the dividing line. West of it, precipitation is high and the land is a mosaic of national forest, private timber, and BLM O&C parcels in a checkerboard. East of it, the rain shadow takes over: sagebrush steppe, juniper, and fault-block desert managed overwhelmingly by BLM in blocks large enough to disappear into for a week." },

    { kind: "table", caption: "Public land managers in Oregon and what camping looks like on each", head: ["Manager", "Footprint", "Dispersed camping", "Check first"], rows: [
      ["Bureau of Land Management", "~16M acres, mostly SE and central", "Open, 14 days in 28; abundant in the high desert", "District office; O&C parcel status"],
      ["US Forest Service", "~15-16M acres, 11 national forests", "Open outside developed sites; pressured corridors reduced", "Motor Vehicle Use Map + alerts"],
      ["National Park Service", "Crater Lake NP, John Day, Oregon Caves", "Roadside prohibited; backcountry by permit", "Park backcountry office -- assume no"],
      ["Oregon Dept of Forestry", "Tillamook, Clatsop, Santiam state forests", "Designated campgrounds only", "ODF district; day-use and fire rules"],
      ["Dept of State Lands + State Parks", "~1.5M trust acres; OPRD parks", "Trust land not for camping; parks developed/reserved", "OPRD reservations"],
    ]},

    { kind: "p", text: "The headline: BLM is the east, Forest Service the mountains and west. National park land is small and closed to the roadside camping riders rely on, and state land is not a dispersed resource here -- trust parcels are scattered and leased, and state forests and parks route you into developed sites." },

    { kind: "h2", text: "Where the camping is strong and where it is thin" },

    { kind: "p", text: "The best dispersed ground is the southeast and central high desert, where BLM holds land in blocks and the population thins to nearly nothing. The worst is the coast and Willamette Valley, where private ownership funnels camping into developed parks." },

    { kind: "table", caption: "Dispersed camping by region", head: ["Region", "Manager", "Strength", "Reality"], rows: [
      ["SE high desert (Steens, Alvord, Owyhee)", "BLM", "Strong", "Vast, remote, minimal services; the signature ground"],
      ["Central Cascades / Bend (Deschutes)", "Forest Service", "Good but pressured", "Enforced; reduced stay limits and closures near Bend"],
      ["Blue Mtns / Wallowas / Hells Canyon", "Forest Service + BLM", "Strong", "High, remote, snow-gated; opens late"],
      ["SW Oregon (Rogue-Siskiyou, Klamath)", "Forest Service + O&C BLM", "Moderate", "Checkerboard and steep roads complicate access"],
      ["Coast Range + coastline", "Siuslaw NF, ODF, private", "Thin", "Mostly private timber and developed parks"],
      ["Willamette Valley + Portland metro", "Mostly private", "Very thin", "Little public land; pass through, do not camp"],
    ]},

    { kind: "note", text: "The Oregon Dunes and much of the coast draw riders expecting open camping and deliver the opposite: fee state parks, private land behind every fence, and OHV areas with their own rules. Visit the coast from a developed site; do not plan to disperse camp there." },

    { kind: "h2", text: "The terrain riders come to hunt" },

    { kind: "ul", items: [
      "Fault-block desert: Steens Mountain rises to roughly 9,700 feet straight off the Alvord playa via the Steens Loop Road -- a signature vertical contrast.",
      "The Alvord Desert: a dry lakebed you can camp on when dry, and a hazard when wet.",
      "The Owyhee Canyonlands: rhyolite canyons in the far southeast, some of the most remote country in the lower 48.",
      "The high Cascades: volcanoes, alpine lakes, and lava from Mount Hood south past the Three Sisters, Newberry, and Crater Lake.",
      "The Wallowas and Hells Canyon: granite peaks in the northeast and the deepest river gorge in North America.",
      "The coast and Coast Range: Highway 101, the Oregon Dunes, and rainforest -- spectacular to move through, hard to camp in.",
    ]},

    { kind: "h2", text: "The season by region and elevation" },

    { kind: "p", text: "Oregon has no single season. The high desert and the high mountains run on opposite calendars; timing a run means choosing which one you are chasing." },

    { kind: "table", caption: "When the ground is in season", head: ["Zone", "Prime window", "Shoulder", "Closed / avoid"], rows: [
      ["SE high desert floor (Alvord, Owyhee)", "Late Apr-mid Jun, mid Sep-late Oct", "Early spring, late fall", "Jul-Aug heat 95-105F; wet spring on clay"],
      ["Steens summit / Loop Road", "Jul-mid Oct (upper road opens ~mid-Jul)", "Late Jun, late Oct", "Snow-gated Nov-Jun"],
      ["Central Cascades (Deschutes, lakes)", "Jul-Sep", "Jun (mosquitoes), Oct", "Snow, closed roads Nov-May"],
      ["Wallowas / Blue Mountains", "Jul-Sep", "Late Jun, Oct", "Snow-locked into Jun-Jul"],
      ["Coast / Coast Range", "Jun-Sep (driest)", "May, Oct", "Wet and gray otherwise"],
      ["West-side low forest", "May-Oct", "Apr, Nov", "Rain-soaked winter; washouts"],
    ]},

    { kind: "p", text: "The pattern: the desert is a spring-and-fall run, the mountains a mid-to-late-summer run, overlapping only briefly. August is the trap month -- it looks perfect on paper and is the heart of fire season statewide." },

    { kind: "h2", text: "The hazards that put riders in trouble" },

    { kind: "ul", items: [
      "Fire and smoke: peak is August into September -- public-use restrictions, closures, and region-wide smoke are routine, and the 2020 Labor Day fires shut down large parts of the west-side Cascades. Check restrictions before any late-summer run.",
      "Desert heat: the Alvord and Owyhee run over 100F in midsummer with no shade and no water -- a spring-fall proposition, not a July one.",
      "Mud season: high-desert clay and the Alvord playa turn to a trap when wet. Do not drive the playa or unimproved desert roads after rain -- riders sink rigs there every year.",
      "Snow and pass timing: Cascade and Wallowa roads open late and close early, and the Steens summit road is snow-gated most of the year. A June date does not mean a road is open.",
      "Remoteness: Harney and Malheur counties are among the emptiest in the lower 48. Fuel, water, and cell signal can be 60-100+ miles apart -- where road intel matters most.",
      "Flash flood and insects: desert canyons like the Owyhee flash hard; watch the sky upstream. Cascade snowmelt brings brutal mosquitoes in June and July.",
    ]},

    { kind: "h2", text: "The legal picture: stay limits and state-land reality" },

    { kind: "p", text: "The national defaults mostly hold, with real exceptions in the pressured zones and one quirk unique to the west side." },

    { kind: "ul", items: [
      "The 14-day rule: 14 days in a 28-day period, standard on BLM and Forest Service land. Some districts count it against a whole area, not a single site, and require real distance to reset.",
      "Deschutes NF around Bend is the main exception: reduced stay limits, designated-dispersed corridors, and seasonal closures. Read the current forest alerts -- the most-regulated dispersed ground in the state.",
      "O&C checkerboard: in western Oregon, BLM O&C parcels alternate with private timber in a square-mile grid. A square that looks public may be private, and access across it is not guaranteed. Verify parcel status; do not eyeball it.",
      "State forests and parks: ODF state forests and Oregon Parks allow camping only in designated, often reservable sites -- neither is a dispersed resource.",
      "State trust land: Dept of State Lands parcels are scattered and largely leased, with no Arizona-style permit scheme for casual camping.",
      "Fire rules: watch for public-use and regulated-use closures in summer. Campfire legality flips with the fire-danger level, not the calendar.",
    ]},

    { kind: "h2", text: "Where the general rule stops -- check the district" },

    { kind: "p", text: "The last mile is set locally, and three things move faster than any page: the Bend-area stay limits on the Deschutes, fire and smoke restrictions in August and September, and whether a road is open, snowed shut, or a mud trap that week. For the east, the authority is the BLM field office for your district -- Burns, Vale, Lakeview, or Prineville among them. For the mountains and west, it is the national forest's ranger district and its Motor Vehicle Use Map. Pull the current alert before you commit a day of driving. The road is earned, and in Oregon it is earned one district at a time." },
  ],
  faq: [
    { q: "Is dispersed camping allowed on BLM land in Oregon", a: "Yes. Most BLM land in Oregon is open to free dispersed camping for up to 14 days in a 28-day period. The strongest ground is the southeast high desert -- Steens Mountain, the Alvord Desert, and the Owyhee Canyonlands -- where BLM holds land in large, remote blocks." },
    { q: "Where is the best dispersed camping in Oregon", a: "The southeast and central high desert. BLM land around Steens Mountain and the Alvord, the Owyhee Canyonlands, and the national forest around Bend and in the Blue Mountains and Wallowas offer the most open ground. The coast and Willamette Valley are thin, dominated by private land and developed parks." },
    { q: "When is the best time to camp in Oregon", a: "It depends on elevation. The high desert floor is best in late spring and fall, since midsummer runs over 100F. The Cascades and Wallowas are a July-through-September run because their roads are snow-locked into early summer. Avoid August-September when fire and smoke peak." },
    { q: "Can you camp on the Alvord Desert", a: "Yes, the Alvord playa is BLM land and camping on it is a signature Oregon experience -- but only when it is dry. The lakebed turns to a mud trap when wet, and vehicles get stuck there every year. Carry your own water; there is none out there." },
    { q: "What is the stay limit for dispersed camping in Oregon", a: "The standard is 14 days in a 28-day period on both BLM and Forest Service land. The main exception is the Deschutes National Forest around Bend, where heavy use has produced reduced stay limits, designated-dispersed corridors, and seasonal closures. Check the current forest alerts there." },
    { q: "Can you dispersed camp on Oregon state land", a: "Generally no. State forests allow camping only in designated campgrounds, state parks are developed and often reserved, and Dept of State Lands trust parcels are scattered and largely leased, with no recreational-camping permit scheme. Plan around federal BLM and Forest Service land instead." },
  ],
};
