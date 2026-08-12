import type { StateContent } from "./states";

export const STATE_ID: StateContent = {
  code: "id",
  name: "Idaho",
  answer: "Idaho is roughly two-thirds federal public land, and the dominant landlord is the US Forest Service -- more than twenty million acres of national forest, including the largest wilderness in the lower 48. Dispersed camping is legal and abundant on Forest Service and BLM ground under the usual 14-day rule, strongest in the central mountains and the southern desert and thinner in the wetter, timber-checkerboarded Panhandle. The catch is not access, it is season and remoteness: high passes hold snow into July, the southern clay turns to gumbo when wet, and the central backcountry puts you fifty miles from pavement with no signal.",
  blocks: [
    { kind: "key", text: "Idaho is about 62 percent federal land, and unlike the Great Basin states that share is mostly national forest rather than BLM. Dispersed camping is legal without permit or fee on the vast majority of it, for up to 14 days, in places already used. What decides an Idaho run is not whether you can camp but when the ground is open and how far you are from help when a road goes bad." },

    { kind: "p", text: "Idaho holds around 32 to 34 million acres of federal land, near the top of the lower 48 as a share of the state. That changes the character of a season: you are rarely searching for legal ground, you are timing and reaching it. The road to a site is earned in gravel miles and pass dates, not in permits." },

    { kind: "h2", text: "The public-land landscape" },

    { kind: "p", text: "The headline fact is that national forest, not BLM, is the backbone. The Forest Service manages north of 20 million acres -- Salmon-Challis (the largest in the lower 48), Boise, Payette, Sawtooth, Nez Perce-Clearwater, Caribou-Targhee and the Panhandle forests. BLM runs a smaller estate, roughly 11 to 12 million acres, concentrated in the south: the Snake River Plain and the high desert canyonlands of the southwest. National Park Service land is almost nonexistent -- a roadless sliver of Yellowstone clips the far east, the rest is monuments. That is rider-friendly: Idaho has little of the park-style roadside camping ban that traps people in Wyoming or Utah." },

    { kind: "table", caption: "Land agencies in Idaho and how they treat dispersed camping", head: ["Agency", "Presence", "Dispersed camping", "Check first"], rows: [
      ["US Forest Service", "Dominant -- 20M+ acres, statewide", "Permitted outside developed sites, 14-day default", "Motor Vehicle Use Map for the forest"],
      ["Bureau of Land Management", "Large, in the south and southwest", "Permitted, 14 days in a 28-day period", "Field office -- Boise, Twin Falls, Idaho Falls"],
      ["Idaho Dept. of Lands (endowment)", "~2.4M acres, scattered", "Restricted, inconsistent -- not a reliable resource", "IDL; many parcels leased or closed"],
      ["National Park Service", "Minimal -- Yellowstone sliver, monuments", "Roadside prohibited; permit-only where it exists", "The unit's backcountry office"],
      ["US Fish and Wildlife Service", "Refuges on the Snake, southeast", "Rarely permitted -- most refuges day-use", "Refuge regulations"],
    ]},

    { kind: "p", text: "The practical read: treat Idaho as a Forest Service state with a BLM south. In the central mountains you camp within reach of a forest road and the operative document is the MVUM; in the southern desert you shift onto open BLM ground where water and services vanish." },

    { kind: "h2", text: "Where dispersed camping is strong -- and where it thins" },

    { kind: "p", text: "Idaho's best ground is not evenly spread. Three broad zones carry most of it, and the Panhandle will frustrate a rider expecting the same abundance everywhere." },

    { kind: "ul", items: [
      "Central mountains (strong) -- the Salmon-Challis, Sawtooth, Boise and Payette country. Endless forest-road corridors, hot spring pullouts, and the fringe of the Frank Church-River of No Return, the largest contiguous wilderness in the lower 48.",
      "Southwest desert (strong, seasonal) -- the Owyhee Canyonlands, deep rhyolite canyons cut into open BLM sagebrush. Vast, remote, empty of services. Prime in spring and fall, impassable when the clay is wet.",
      "South-central and east (good) -- the Sawtooth NRA near Stanley, the Lost River Range, City of Rocks, and the Island Park caldera and Teton Valley. Higher, cooler, shorter season.",
      "The Panhandle (thin) -- wetter forests heavily checkerboarded with private timber inholdings and short on the wide-open BLM the south enjoys. Legal sites exist but you hunt harder between private blocks, and a land-ownership overlay is not optional here.",
    ]},

    { kind: "h2", text: "The terrain riders come to hunt" },

    { kind: "p", text: "Idaho's signature is remoteness and water -- more roadless backcountry than any state in the lower 48 and more soakable wild hot springs than anywhere in the country. Riders come for the combination: deep gravel runs into country with no cell coverage and no crowd." },

    { kind: "ul", items: [
      "Whitewater and river canyons -- the Salmon (the River of No Return), its Middle Fork, the Selway and the Lochsa. The road corridors paralleling them hold some of the best camping in the state.",
      "Alpine granite -- the Sawtooths and the Boulder-White Clouds, jagged peaks and high lake basins reached from Stanley and Ketchum.",
      "The high desert -- the Owyhee canyonlands and the Bruneau and St. Anthony dunes, a different planet and season from the mountains.",
      "Historic overland runs -- the Magruder Corridor and the Lolo Motorway across the Bitterroot backcountry, objectives in themselves.",
      "Peak-bagging -- Borah Peak in the Lost River Range, at 12,662 feet the state high point.",
    ]},

    { kind: "h2", text: "Season and elevation" },

    { kind: "p", text: "Idaho's season is governed by elevation more than latitude. The southern desert is a spring-and-fall proposition; the high mountains are July to September; the Panhandle runs on moisture. The common mistake is arriving at a Sawtooth trailhead in June and finding the pass still gated by snow." },

    { kind: "table", caption: "When the ground is in season by region and elevation", head: ["Region", "Elevation", "Prime window", "What closes it"], rows: [
      ["Owyhee / SW desert", "2,500-5,000 ft", "Apr-May, Sep-Oct", "Summer heat; gumbo mud after rain"],
      ["Snake River Plain", "3,000-5,000 ft", "May-Jun, Sep-Oct", "Midsummer heat, wind, smoke"],
      ["Central forests (mid)", "5,000-7,000 ft", "Jun-Oct", "Late-summer wildfire and smoke"],
      ["Sawtooth / Lost River", "7,000-10,000+ ft", "Jul-mid Sep", "Snow on passes into July; autumn storms"],
      ["Eastern plateau / Island Park", "5,000-7,000 ft", "Jun-Sep", "Cold nights, early mosquitoes, snow shoulder"],
      ["Panhandle north", "2,000-6,000 ft", "Jun-Sep", "Spring mud season; smoke; wet into June"],
    ]},

    { kind: "h2", text: "The hazards that define an Idaho season" },

    { kind: "p", text: "The general rules are the easy part in Idaho. The hazards shape a run, remoteness above all." },

    { kind: "ul", items: [
      "Remoteness -- central Idaho can put you fifty miles from pavement with no cell signal, no fuel and no traffic. Carry a satellite messenger, plan fuel to the tank rather than the town, and weight recent road intel over any map.",
      "Wildfire and smoke -- Idaho burns hard in August and September. Fires close forests and roads on short notice, and smoke can sit in the valleys for weeks even when the fire is a state away.",
      "Snow and pass timing -- high passes and gated forest roads open on the mountain's schedule, not the calendar's. Early July is normal for the high country; a heavy winter pushes it later.",
      "Gumbo mud -- the clay of the Owyhee and southern desert is firm when dry and turns to vehicle-swallowing muck within an hour of rain. A dry forecast is part of the route.",
      "Flash flooding -- desert canyons drain fast, and a storm miles upstream can fill a dry wash. Do not camp in a slot bottom.",
      "Bears -- black bears are statewide; grizzly range touches the eastern edge near Island Park and Yellowstone and the far northern Selkirk and Cabinet mountains. Store food accordingly there.",
      "Insects -- mosquitoes are heavy near lakes and river bottoms in early summer, and ticks work the lower canyons in spring.",
    ]},

    { kind: "h2", text: "Legal notes specific to Idaho" },

    { kind: "p", text: "The federal defaults hold in Idaho, but a few specifics are worth carrying." },

    { kind: "ul", items: [
      "The 14-day rule applies on both Forest Service and BLM ground, counted across an area rather than a single site, with the usual district-level variation. High-pressure corridors near Stanley, Ketchum and the Sawtooth NRA can run shorter.",
      "Fire restrictions are seasonal and common from midsummer on. Campfire permits are not generally required on federal land in Idaho, but stage-one and stage-two bans appear most years -- verify before you strike a match.",
      "State endowment land is the trap. Idaho's roughly 2.4 million acres of state trust land are managed by the Department of Lands to earn revenue, not for recreation, and overnight use is restricted or closed on leased parcels.",
      "The Sawtooth NRA and the wilderness cores carry their own overlay -- designated sites, permits and setbacks that override the general forest default.",
    ]},

    { kind: "note", text: "Treat Idaho state trust land as closed to overnight camping unless the Department of Lands says otherwise for a specific parcel. A land-ownership overlay that flags it in a distinct color is the fastest way to avoid parking on it by mistake." },

    { kind: "h2", text: "Where the general rule stops -- check the managing office" },

    { kind: "p", text: "Everything here is the reliable eighty percent. The remaining twenty is set locally and changes with the season: a district that shortened its stay limit, a forest road still gated in July, a fire perimeter that closed a drainage last week. None of that shows on a national map." },

    { kind: "p", text: "The authoritative source is the office managing the ground you want -- the national forest ranger district for its MVUM and closures, the BLM field office (Boise, Twin Falls or Idaho Falls) for the southern desert, the Idaho Department of Lands for any state parcel, and the active fire-restriction notices for the region. When the map and a recent report disagree, the report wins." },
  ],
  faq: [
    { q: "Is Idaho mostly BLM or national forest for dispersed camping", a: "National forest by a wide margin -- over 20 million acres of it, far more than the state's roughly 11 to 12 million BLM acres. BLM ground dominates only in the southern desert and the southwest canyonlands, so plan on Forest Service roads and MVUMs for most of a central or northern Idaho season." },
    { q: "How long can you dispersed camp in Idaho", a: "The federal default of 14 days in a 28-day period applies on both Forest Service and BLM land, counted across an area rather than a single site. High-use corridors near the Sawtooths can set shorter limits, so check the specific district." },
    { q: "Can you camp on Idaho state trust land", a: "Generally no, or only under restricted and inconsistent terms. Idaho endowment land is managed by the Department of Lands to earn revenue, not for recreation, and many parcels are leased or closed to overnight use -- treat it as closed unless IDL confirms otherwise for that parcel." },
    { q: "When does the high country in Idaho open up", a: "Roughly July through mid-September for the Sawtooths and the Lost River Range above 7,000 feet, because passes and gated forest roads hold snow into early July. The southern desert runs the opposite schedule -- spring and fall are prime and midsummer is too hot and dry." },
    { q: "What is the biggest risk camping in central Idaho", a: "Remoteness. You can be fifty miles from pavement with no cell signal, no fuel and no traffic, so carry a satellite messenger, plan fuel to the tank rather than the next town, and weight recent road intel over any map." },
    { q: "Does Idaho have grizzly bears", a: "Yes, on the edges -- grizzly range touches the eastern border near Island Park and Yellowstone and the far northern Selkirk and Cabinet mountains, while black bears are statewide. Store food in a hard-sided vehicle or bear canister in those zones." },
  ],
};
