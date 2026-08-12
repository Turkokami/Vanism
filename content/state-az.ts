import type { StateContent } from "./states";

export const STATE_AZ: StateContent = {
  code: "az",
  name: "Arizona",
  answer:
    "Arizona is one of the strongest dispersed-camping states in the country, built on vast BLM ground across the western and southern deserts and big national forests along the Mogollon Rim and the mountains. The general rule on BLM and Forest Service land is 14 days of free dispersed camping in a 28-day window, then you move on. The catch is elevation and heat: the low desert is a winter run and a summer death trap, the high country is a summer run gated by snow and monsoon, and the state trust land patchwork in between is off-limits without a permit.",
  blocks: [
    {
      kind: "key",
      text:
        "Dispersed camping in Arizona is abundant and legal on federal land, thin to hostile everywhere else. BLM deserts around Quartzsite and the western valleys carry the winter season; the forests along the Mogollon Rim carry the summer. Standard limit is 14 days in any 28-day period on both BLM and Forest Service ground. State trust land looks open on the map but needs a paid permit, and the national parks allow no roadside dispersed camping at all.",
    },
    {
      kind: "p",
      text:
        "Arizona is a two-season state stacked on itself. The rider chasing shade at 1,500 feet near the Colorado River in January is chasing it again at 7,000 feet on the Rim in July -- the run between them is a vertical mile of climate. Get the elevation right and Arizona gives you more free, legal, spectacular ground than almost anywhere in the West. Roughly 38 percent of the state is federal land you can generally camp on, and reaching it is a hunt through a mosaic of BLM, forest, state, park, and tribal ownership.",
    },
    {
      kind: "h2",
      text: "The public-land landscape",
    },
    {
      kind: "p",
      text:
        "Arizona is majority public and tribal land -- private ground is the minority. The federal piece splits into two worlds. West and south of the mountains, the BLM runs enormous low-desert tracts -- Quartzsite, the Sonoran Desert National Monument, the Arizona Strip -- and this is classic open-desert dispersed camping: big, flat, dry, and free. East and north, the land rises into a broad band of national forest along the Mogollon Rim: the Coconino around Flagstaff, the Kaibab flanking the Grand Canyon, the Tonto below the Rim, the Apache-Sitgreaves in the White Mountains. That is pine-and-aspen camping, a different animal entirely.",
    },
    {
      kind: "p",
      text:
        "Two categories will burn you if you assume they are open. State trust land is scattered across the map in section-sized parcels; it is not public recreation land, and entering or camping requires an Arizona State Land Department permit. Tribal land -- Navajo, Hopi, San Carlos and White Mountain Apache, Tohono O'odham, and others -- is sovereign; camping there is not a right and is often permitted only or closed. National parks and monuments allow no dispersed roadside camping: developed sites and backcountry permits only.",
    },
    {
      kind: "table",
      caption: "Land agencies in Arizona and what dispersed camping looks like on each",
      head: ["Agency / land type", "Where it dominates", "Dispersed camping rule of thumb"],
      rows: [
        [
          "BLM",
          "Western / southern low desert -- Quartzsite, La Paz, Sonoran, Arizona Strip",
          "Open dispersed, 14 days per 28; LTVAs for long winter stays",
        ],
        [
          "National forest",
          "Mogollon Rim, Flagstaff, White Mountains, Kaibab",
          "Open dispersed, generally 14 per 28; designated-site zones near hubs",
        ],
        [
          "State trust land",
          "Scattered section parcels statewide",
          "Permit required to enter or camp; not public recreation land",
        ],
        [
          "National park / monument",
          "Grand Canyon, Saguaro, Petrified Forest, Organ Pipe",
          "No roadside dispersed camping; developed or backcountry only",
        ],
        [
          "Tribal land",
          "Navajo, Hopi, Apache, Tohono O'odham -- much of the NE and south",
          "Sovereign; permit or permission required, often closed entirely",
        ],
      ],
    },
    {
      kind: "h2",
      text: "Where dispersed camping is strong -- and where it is thin",
    },
    {
      kind: "p",
      text:
        "The strong ground is concentrated. The BLM desert around Quartzsite and the lower Colorado River is one of the densest winter dispersed-camping regions in North America. Up high, the Coconino around Flagstaff, the Mogollon Rim roads out of Payson, and the White Mountains near Alpine are the summer strongholds.",
    },
    {
      kind: "ul",
      items: [
        "Strong: Quartzsite / La Paz BLM desert -- the winter capital, with formal Long-Term Visitor Areas.",
        "Strong: Sonoran Desert and lower Colorado River BLM -- open, warm, and vast.",
        "Strong: Coconino and Kaibab forests plus the Mogollon Rim -- the summer high country.",
        "Thin: the Phoenix and Tucson metros -- private land, state trust parcels, and closures dominate.",
        "Thin: the northeast quarter -- Navajo and Hopi land is sovereign, not open ground.",
        "Effectively closed: the national parks and Sedona, where designated-site-only rules control overuse.",
      ],
    },
    {
      kind: "note",
      text:
        "Sedona is the classic trap. The red-rock country draws riders expecting dispersed camping, but the Forest Service has closed most of the corridor and posts designated-site-only zones with active patrols. Assume the popular scenic areas near hubs are the most restricted ground in the state, not the most open.",
    },
    {
      kind: "h2",
      text: "The adventure character of the state",
    },
    {
      kind: "p",
      text:
        "Arizona is terrain built for the hunt. The signature ground is the Colorado Plateau in the north -- the Grand Canyon and its lesser-known rims, the slot canyons and mesas, the volcanic fields around Flagstaff and the San Francisco Peaks at 12,600 feet. South and west it is Sonoran Desert: saguaro forest, sky-island ranges rising out of the flats, and long remote runs. Riders come for winter desert warmth when the rest of the West is frozen, for red-rock and canyon photography, and for remote overland runs across the Strip.",
    },
    {
      kind: "p",
      text:
        "The sky islands -- the Santa Catalinas, Chiricahuas, Huachucas -- are a distinctive draw: you climb from desert into pine forest in a single afternoon's drive, and the camping follows the gradient.",
    },
    {
      kind: "h2",
      text: "Seasons and timing",
    },
    {
      kind: "p",
      text:
        "The rule is simple to state and unforgiving to ignore: chase elevation against the calendar. Low desert is a mid-fall through mid-spring run; by midsummer it can hit 115-plus degrees, which is not a camping temperature but a survival problem. The high country reverses -- forest roads on the Rim and in the White Mountains stay snowed in or muddy into late spring, open for a glorious summer, and shoulder into a short fall. The two overlap in a narrow window when the mid-elevations around 4,000 to 5,500 feet are perfect.",
    },
    {
      kind: "table",
      caption: "When the ground is in season by region and elevation",
      head: ["Region", "Rough elevation", "Prime season", "What to watch"],
      rows: [
        [
          "Low desert -- Quartzsite, lower Colorado, Sonoran",
          "500 - 2,500 ft",
          "November - March",
          "Lethal summer heat; leave before May",
        ],
        [
          "Mid desert / foothills",
          "2,500 - 5,000 ft",
          "October - April; spring, fall best",
          "Hot early and late; monsoon flash floods",
        ],
        [
          "Mogollon Rim / Flagstaff",
          "6,000 - 7,500 ft",
          "Late May - October",
          "Snow and mud into spring; fire closures",
        ],
        [
          "White Mountains / Alpine",
          "7,500 - 9,000+ ft",
          "June - September",
          "Late snowmelt, short season, cold nights",
        ],
      ],
    },
    {
      kind: "p",
      text:
        "The signature hazards are specific. Heat is the killer in the desert -- rider deaths happen every year from underestimating it. The North American monsoon, roughly July into September, turns dry washes into flash floods within minutes; never camp in a wash. Fire season runs late spring into the monsoon, and Stage 1 and Stage 2 restrictions -- or outright closures -- can shut down the high country and fill valleys with smoke. Across the western deserts and the Strip, remoteness itself is the hazard: no signal, no water, long distances between fuel.",
    },
    {
      kind: "h2",
      text: "Legal notes specific to Arizona",
    },
    {
      kind: "p",
      text:
        "The core rule on both BLM and Forest Service land is 14 days of camping within any 28-day period, after which you must move a set distance -- often 25 miles -- and not return for the balance of the window.",
    },
    {
      kind: "ul",
      items: [
        "State trust land requires an Arizona State Land Department recreational permit to enter or camp -- cheap and annual, but going without it is trespassing.",
        "Long-Term Visitor Areas (LTVAs) on BLM desert near Quartzsite and Yuma allow all-winter stays for a seasonal fee -- the legal exception to the 14-day limit.",
        "National parks and most monuments prohibit roadside dispersed camping entirely; plan on developed sites or a backcountry permit.",
        "Tribal land is sovereign -- the Navajo Nation and others require their own permits, and much of it is closed regardless.",
        "Fire restrictions are layered (Stage 1, Stage 2, full closure); campfires and even generators can be banned district by district in a dry year.",
      ],
    },
    {
      kind: "h2",
      text: "Where the rules stop -- check the local office",
    },
    {
      kind: "p",
      text:
        "The 14-day limit and the elevation-versus-calendar logic get you most of the way, but the details are set locally and change fast. Districts post their own designated-site-only zones, motorized-use restrictions, and road closures -- the rule near Sedona is not the rule 40 miles out. Fire restrictions and closures are declared week to week in a dry summer, and monsoon road conditions are same-day calls. When the general rule and the district office disagree, the district office wins.",
    },
    {
      kind: "p",
      text:
        "For any specific run, the authoritative sources are the managing BLM field office (Lake Havasu, Yuma, Kingman, Phoenix, Tucson, Arizona Strip) or the ranger district (Coconino, Kaibab, Tonto, Apache-Sitgreaves, Prescott, Coronado) that owns the ground -- their current Motor Vehicle Use Map, fire order, and closure notices override everything general. Go to the Arizona State Land Department for state trust permits. Confirm fire stage and road conditions the day you roll, and weigh it against fresh road intel from riders who were there this season.",
    },
  ],
  faq: [
    {
      q: "Can you camp for free on BLM land in Arizona",
      a: "Yes. Dispersed camping is free on most BLM desert land, with a standard 14-day limit in any 28-day period. The country around Quartzsite and the lower Colorado River is the busiest free winter camping in the state.",
    },
    {
      q: "What is the dispersed camping limit in Arizona",
      a: "The general rule on both BLM and national forest land is 14 days of camping within a 28-day window, after which you must move on -- often at least 25 miles -- and not return until the window resets. LTVAs near Quartzsite and Yuma are the exception for full-winter stays.",
    },
    {
      q: "When is the best time to camp in the Arizona desert",
      a: "November through March. The low desert is warm and pleasant in winter and genuinely dangerous in summer, when temperatures can top 115 degrees with no shade or water. Leave the low country by May and climb to the forests for the summer season.",
    },
    {
      q: "Can you dispersed camp on Arizona state trust land",
      a: "Not for free. State trust land requires an Arizona State Land Department recreational permit to even enter, let alone camp. It looks open on the map but it is not general public recreation land, and going without the permit is trespassing.",
    },
    {
      q: "Is dispersed camping allowed near Sedona and the Grand Canyon",
      a: "Mostly no. The Forest Service has closed most of the Sedona corridor to dispersed camping with designated-site-only zones and active patrols, and the national parks including the Grand Canyon prohibit roadside dispersed camping entirely -- developed sites or backcountry permits only.",
    },
    {
      q: "What are the main hazards camping in Arizona",
      a: "Extreme desert heat, monsoon flash flooding in dry washes from July into September, seasonal fire restrictions and forest closures, late snow and mud on high forest roads, and sheer remoteness with no signal or water across the western deserts and the Arizona Strip.",
    },
  ],
};
