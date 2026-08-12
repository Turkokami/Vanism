import type { StateContent } from "./states";

export const STATE_NV: StateContent = {
  code: "nv",
  name: "Nevada",
  answer: "Nevada is the most federal state in the country -- roughly 80 percent of it is public land, and the largest share by far is BLM, which makes dispersed camping legal and abundant across the basin-and-range country. The standard rule is 14 nights in a 28-day window on already-disturbed ground, then move on. State trust land barely exists here, so the permit patchwork that snarls Arizona and New Mexico is not the problem in Nevada -- heat, water, and raw distance are.",
  blocks: [
    { kind: "key", text: "Nevada is roughly 80 percent federal land and BLM runs most of it, so open, no-fee dispersed camping is the default across the wide valleys and desert ranges. The rule is 14 nights in any 28-day window, on ground already used, then relocate. What you earn here is not access -- access is everywhere -- it is the judgment to read heat, elevation, and remoteness before committing a day of driving to a place." },

    { kind: "p", text: "Nevada is the emptiest state in the lower 48 by the measure that matters to a rider: how much ground is open and how few people are on it. About 85 percent is public land and close to 80 percent is federal -- the highest federal share in the country. The question is rarely whether you may stop -- it is whether you can reach the ground, survive it, and get back out." },

    { kind: "h2", text: "Who owns Nevada" },

    { kind: "p", text: "Four managers account for nearly all of it, lopsided toward BLM in a way few states match. The Bureau of Land Management holds roughly 48 million acres -- about two-thirds of the state, more than any state except Alaska. The Humboldt-Toiyabe National Forest, the largest in the lower 48, sits scattered across the ranges as high islands. The Park Service footprint is small and concentrated. And the state trust land that dominates planning elsewhere is a non-factor here." },

    { kind: "table", caption: "Land managers in Nevada and how they camp", head: ["Manager", "Presence", "Dispersed camping", "Stay limit"], rows: [
      ["Bureau of Land Management", "~48M acres, two-thirds of the state", "Legal, abundant across most holdings", "14 nights / 28 days"],
      ["Humboldt-Toiyabe National Forest", "~6.3M acres across the high ranges", "Legal outside developed sites", "14 nights, some shorter"],
      ["National Park Service (Great Basin, Lake Mead)", "Small footprint, high enforcement", "Backcountry permit only; no roadside", "Permit-defined"],
      ["Nevada state parks / trust land", "Tiny; trust land nearly nonexistent", "Fee campgrounds only; no dispersed", "Park-defined"],
    ]},

    { kind: "note", text: "Nevada sold off almost all of its school trust land after statehood, so the state-land checkerboard that requires a recreation permit in Arizona and New Mexico effectively does not exist here. If a parcel is public in Nevada, it is almost certainly federal, and the federal rule set applies. Do not go hunting a state trust permit you do not need." },

    { kind: "h2", text: "Where dispersed camping is strong -- and where it thins" },

    { kind: "p", text: "The strength is the valleys and the low ranges. Basin-and-range Nevada is a series of parallel north-south ranges separated by wide sagebrush valleys, and the BLM ground between them is some of the most open dispersed country in the West. Off a maintained route across central and northern Nevada you can camp almost anywhere reasonable without seeing another rig for days. Where it thins is predictable:" },

    { kind: "ul", items: [
      "The Las Vegas corridor. Red Rock Canyon NCA and the developed Lake Mead NRA shoreline are heavily managed and fee-based; open BLM starts well outside the metro.",
      "Great Basin National Park. Park rules replace BLM rules at the boundary -- developed campgrounds and permitted backcountry only. The free camping is on the surrounding BLM and forest ground.",
      "The high ranges in deep winter -- Rubies, Spring Mountains, Jarbidge -- superb in season and snowed shut out of it.",
      "The Black Rock playa when wet. A premier surface bone-dry, an impassable trap the moment it takes water, as thousands re-learned in 2023.",
    ]},

    { kind: "h2", text: "The terrain riders come to hunt" },

    { kind: "p", text: "Nevada's signature is space and vertical relief in one frame -- a 13,000-foot range rising straight off a 5,000-foot valley floor with nothing built between. Riders come to hunt solitude and the high desert ranges, not the crowded marquee terrain next door. The runs that define the state:" },

    { kind: "ul", items: [
      "The Ruby Mountains outside Elko -- alpine lakes, granite, and glacier-cut cirques that earn the name Nevada's Alps.",
      "The Black Rock Desert-High Rock Canyon NCA -- a vast alkali playa and canyon country with almost no vertical reference at all.",
      "Great Basin National Park -- Wheeler Peak at 13,065 feet, ancient bristlecone pines, and the Lehman Caves beneath.",
      "The central ranges along US-50, the self-styled Loneliest Road -- the Toiyabe, Toquima, and Monitor across the middle of the state.",
      "The Spring Mountains and Mount Charleston above Las Vegas -- pine and snow a short drive from the Mojave floor.",
      "Valley of Fire and Red Rock sandstone near Vegas for color, and Lake Tahoe's Nevada shore in the far west.",
    ]},

    { kind: "h2", text: "Seasons and elevation" },

    { kind: "p", text: "Nevada is not one climate. It is a low hot south and a high cold interior across a huge elevation spread -- 470 feet on the Colorado River to 13,147 feet at Boundary Peak -- and the season is set almost entirely by that elevation. The Mojave south is winter and shoulder-season ground; the Great Basin interior runs late spring through fall; the alpine opens last and closes first." },

    { kind: "table", caption: "When the ground is in season by region", head: ["Region", "Elevation", "Prime season", "What closes it"], rows: [
      ["Southern Mojave (Las Vegas, Laughlin, Lake Mead)", "500-3,000 ft", "October through April", "Heat past 110F"],
      ["Central Great Basin valleys (US-50 corridor)", "5,000-6,500 ft", "Late April through October", "Cold, snow, spring mud"],
      ["High ranges (Rubies, Jarbidge, Spring Mtns)", "8,000-11,000 ft", "July through September", "Snowpack; drifts into July"],
      ["Great Basin NP high country / Wheeler Peak", "up to 13,065 ft", "Mid-July to late September", "Snow; drive closes seasonally"],
    ]},

    { kind: "h2", text: "The hazards that actually hurt you" },

    { kind: "p", text: "The state kills people through exposure and distance, not through complicated terrain. In order of how often they cause real trouble:" },

    { kind: "ul", items: [
      "Heat. The Mojave south runs 105-115F in summer with almost no shade; dehydration comes fast. Treat June through August in the south as off-season.",
      "Water scarcity. Springs are far apart and many are seasonal. Never plan a run around a source you have not confirmed.",
      "Monsoon and flash flood. July into September brings hard, localized storms; washes and slot canyons flood from rain you cannot see, and the playa turns to mud.",
      "Fire and smoke. Invasive cheatgrass carries fast, wind-driven rangeland fires across the low country in summer, and smoke can blanket a run for days.",
      "Snow and passes. High forest roads and alpine drives stay snowbound into summer; check pass status, do not assume a map line is open.",
      "Remoteness -- the big one. Fuel, signal, and help are genuinely far apart on US-50 and the back roads off it. A breakdown 60 miles from pavement is a survival problem, not an inconvenience.",
    ]},

    { kind: "note", text: "Remoteness is the multiplier on every other hazard. The overheating, flat tire, or wrong turn that is a nuisance near a town is a serious event in central Nevada, where the nearest vehicle may be a day away. Carry recovery gear, water beyond your plan, and a way to call for help without cell signal. Treat your road intel as perishable and confirm conditions before you commit." },

    { kind: "h2", text: "The legal picture" },

    { kind: "p", text: "The rules are refreshingly uniform because federal ground dominates. The points worth knowing:" },

    { kind: "ul", items: [
      "Stay limit. The BLM standard is 14 nights in any 28-day period, after which you move a meaningful distance -- often stated as roughly 25 miles -- and do not return within the window. Forest Service runs the same 14-day baseline, some districts shorter.",
      "No Long-Term Visitor Areas. The BLM LTVAs that let snowbirds park a whole season for a low fee are in Arizona and southern California, not Nevada. There isn't one here.",
      "Monuments and NCAs. Basin and Range, Gold Butte, and the Black Rock-High Rock and Red Rock NCAs carry their own overlays on the BLM rule -- read the unit before relying on the general one.",
      "State parks. Nevada state parks are fee campgrounds with their own rules and no dispersed use -- a service stop, not free ground.",
      "Special-event ground. The Black Rock playa faces closures and permit systems around large events; the rule you can camp there is not always true on the calendar.",
    ]},

    { kind: "h2", text: "Where the general rule stops -- check the district" },

    { kind: "p", text: "Everything above is reliable most of the time and wrong exactly where it matters most. The 14-day limit, the open-BLM assumption, and the season windows are set or overridden at the district level, and they shift with fire restrictions, drought, cultural-site closures, and event permits no summary can track. The authority is the manager of the specific parcel: the local BLM field office, the Humboldt-Toiyabe ranger district for a given range, or the park office for Great Basin and Lake Mead. Confirm current fire and road status the week you go. When a check-in on the ground and a general rule disagree, the ground wins." },
  ],
  faq: [
    { q: "Is dispersed camping legal on BLM land in Nevada", a: "Yes. BLM manages roughly two-thirds of the state and dispersed camping is the default across most of it, with no permit or fee. The standard limit is 14 nights in any 28-day period on already-used ground, then you move on." },
    { q: "Do I need a state trust land permit to camp in Nevada", a: "No. Nevada sold off nearly all its school trust land, so the state-land permit systems that matter in Arizona and New Mexico effectively do not exist here. Almost all public ground in Nevada is federal, and the federal rules apply." },
    { q: "When is the best season to camp in Nevada", a: "It depends entirely on elevation. The low Mojave south around Las Vegas is best October through April and brutal in summer, while the high Great Basin interior and the alpine ranges are late-spring-through-fall ground that closes under snow." },
    { q: "Can you camp in Great Basin National Park like you would on BLM land", a: "No. Park rules replace BLM rules at the boundary: developed campgrounds and permitted backcountry only, with no pull-off roadside camping. The free dispersed ground is on the surrounding BLM and national forest land." },
    { q: "What are the biggest dangers camping in Nevada", a: "Heat, water scarcity, and remoteness, in that order. Summer highs in the south run past 110F, springs are far apart and often dry, and fuel and help can be a day away on routes like US-50 -- so a breakdown far from pavement becomes a survival problem." },
    { q: "Are there Long-Term Visitor Areas for snowbirds in Nevada", a: "No. The BLM Long-Term Visitor Areas that allow a full-season stay for a low fee are in Arizona and southern California, not Nevada. In Nevada you are held to the standard 14-day dispersed limit." },
  ],
};
