import type { StateContent } from "./states";

export const STATE_CO: StateContent = {
  code: "co",
  name: "Colorado",
  answer:
    "Colorado is national-forest country first, western BLM desert second, and a locked state-trust patchwork you route around. Dispersed camping is legal and abundant on most national forest and BLM ground -- typically a 14-day limit, motorized travel confined to designated routes -- but nearly all of it sits between 8,000 and 11,000 feet, so the season is short and elevation, not the calendar, tells you when the ground is open. The hunt is real: the easy corridors near Denver, Buena Vista, and Crested Butte are heavily restricted to designated sites, while the honest dispersed ground is farther out and higher up.",
  blocks: [
    {
      kind: "key",
      text:
        "Dispersed camping in Colorado is strong and free on national forest and BLM land, which cover most of the state's high country and western desert. The default rule is a 14-day stay limit with motorized travel restricted to routes on the Motor Vehicle Use Map. The catch is elevation and the state-trust patchwork: most good ground is above 8,000 feet and snowbound past October, and roughly three million acres of state trust land is closed unless specifically leased. Route by the land manager and the snowpack, not the green shading.",
    },
    {
      kind: "p",
      text:
        "About a third of Colorado is public land, unevenly spread. The eastern third is plains -- private agricultural ground with two thin strips of national grassland. The western two-thirds is where you earn the season: eleven national forests stacked across the spine of the Rockies, a broad band of BLM desert down the Western Slope and into the San Luis Valley, four national parks, and a scatter of monuments and conservation areas.",
    },
    {
      kind: "h2",
      text: "The public-land landscape",
    },
    {
      kind: "p",
      text:
        "The U.S. Forest Service is the dominant manager for anyone living out of a rig -- roughly 14 million acres across forests like the White River, San Juan, GMUG (Grand Mesa, Uncompahgre, and Gunnison), Pike-San Isabel, Rio Grande, Routt, and Arapaho-Roosevelt. This is the high country of aspen, spruce-fir, and alpine tundra, and it is where most legal dispersed camping happens.",
    },
    {
      kind: "p",
      text:
        "BLM manages roughly 8 million acres, concentrated on the Western Slope and the south-central valleys: the Grand Junction and Uncompahgre field offices, McInnis Canyons and Dominguez-Escalante, the Gunnison country, and the San Luis Valley floor. This is the lower, warmer, red-rock and sage ground -- the shoulder-season answer when the mountains are still under snow.",
    },
    {
      kind: "p",
      text:
        "State trust land -- around three million acres held by the Colorado State Land Board -- is the trap. It belongs to the state but is managed to earn revenue for schools, not for recreation, so most parcels are closed to entry and camping outright. A subset opens seasonally under a lease run with Colorado Parks and Wildlife, usually tied to hunting and fishing access, and even then camping is often prohibited. Treat unmarked state trust land as no-go unless you have confirmed a lease lets you in.",
    },
    {
      kind: "table",
      caption: "Land managers present in Colorado and their camping reality",
      head: ["Manager", "Presence", "Dispersed camping", "Typical stay limit"],
      rows: [
        [
          "U.S. Forest Service",
          "Dominant across the mountains (~14M acres)",
          "Yes on most districts; some corridors designated-only",
          "14 days / 30-day period, then relocate",
        ],
        [
          "BLM",
          "Heavy on the Western Slope and San Luis Valley (~8M acres)",
          "Yes, widely; dispersed clusters near Fruita and Salida",
          "14 days / 28-day window, then move miles",
        ],
        [
          "National Park Service",
          "Rocky Mountain, Great Sand Dunes, Mesa Verde, Black Canyon",
          "No dispersed; campgrounds and permitted backcountry only",
          "Per-reservation",
        ],
        [
          "State Land Board (trust)",
          "~3M acres, scattered statewide",
          "No -- closed unless a recreation lease opens the parcel",
          "Mostly no entry",
        ],
        [
          "Colorado Parks and Wildlife",
          "43 state parks plus wildlife areas",
          "No dispersed; reserved, fee-based sites only",
          "Per-reservation",
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
        "The strong ground is the mountain national forests and the Western Slope BLM: the Sawatch and San Juan ranges, the Gunnison and Grand Mesa country, the North Fruita Desert, Rabbit Valley near the Utah line, and the San Luis Valley sage flats. Out here you can still pull off a forest road into a quiet legal site the way the practice is meant to work.",
    },
    {
      kind: "p",
      text:
        "The thin ground is anything close to a Front Range city or a marquee destination. Corridors near Denver, Boulder, and Colorado Springs on the Arapaho-Roosevelt and Pike-San Isabel forests are heavily used and increasingly restricted to designated dispersed sites, with camping banned outright in some drainages. The same holds around Buena Vista and Salida, the Kebler Pass and Crested Butte area, and the Maroon Bells corridor, which now runs on reservations. The far eastern plains are effectively unavailable -- private ranch land with only the Pawnee and Comanche national grasslands offering limited, dry, hard-to-find options.",
    },
    {
      kind: "note",
      text:
        "Rule of thumb: the closer a spot is to pavement, a trailhead lot, or a photogenic name, the more likely it is now designated-only or closed. The honest ground is a longer run down a rougher road.",
    },
    {
      kind: "h2",
      text: "The character of the hunt",
    },
    {
      kind: "p",
      text:
        "Colorado's signature is vertical. Fifty-eight peaks clear 14,000 feet, and the terrain riders hunt is alpine: high passes, tundra basins, and the old mining roads of the San Juans -- the Alpine Loop, Engineer and Cinnamon passes, Imogene, Black Bear, and Ophir. This is serious four-wheel-drive country where the reward is a camp at 11,000 feet with a fourteener out the back doors.",
    },
    {
      kind: "p",
      text:
        "Beyond the peaks the range is wide. Great Sand Dunes throws North America's tallest dunes against the Sangre de Cristo wall. The Western Slope holds red-rock desert -- Colorado National Monument, Rattlesnake Canyon's arches in McInnis Canyons, and the mountain-bike ground around Fruita. Black Canyon of the Gunnison drops sheer. Add skiing and splitboarding, climbing, and aspen color peaking in late September, and the run sheet fills the season.",
    },
    {
      kind: "h2",
      text: "Seasons and timing",
    },
    {
      kind: "p",
      text:
        "Colorado's season is dictated by elevation, not the calendar. Most dispersed ground is snowbound from roughly late October into June, and the highest 4x4 passes may not melt out until July and can close to snow again by late September. Time a mountain run for July through September and you hit the sweet spot -- but that window is also monsoon and fire season.",
    },
    {
      kind: "table",
      caption: "When the ground is in season by region and elevation",
      head: ["Region", "Rough elevation", "Prime window", "Signature hazard"],
      rows: [
        [
          "High San Juans / Sawatch passes",
          "10,000-12,000+ ft",
          "Mid-July to mid-September",
          "Late snow, afternoon lightning above treeline",
        ],
        [
          "Central mountain forests",
          "8,000-10,000 ft",
          "June to early October",
          "Monsoon storms, fire restrictions",
        ],
        [
          "Western Slope BLM desert",
          "4,500-6,500 ft",
          "April-May and September-October",
          "Summer heat, flash flood in washes",
        ],
        [
          "San Luis Valley / Great Sand Dunes",
          "~7,500 ft floor",
          "Late May-June, September",
          "Wind, flash flood, cold clear nights",
        ],
        [
          "Eastern plains / grasslands",
          "3,500-5,500 ft",
          "Spring and fall",
          "Scarcity of legal ground, dryness, wind",
        ],
      ],
    },
    {
      kind: "p",
      text:
        "The hazards are specific. Mud season -- roughly April into May -- turns high-clearance forest roads to rutted soup, and driving them wet wrecks the road and strands the rig. The North American Monsoon runs July into August, stacking daily afternoon thunderstorms; be below treeline by early afternoon, because lightning on the tundra kills people every summer, and the same cells drive flash floods through Western Slope washes. Fire restrictions land most summers -- Stage 1 and Stage 2 bans set forest by forest -- and regional smoke can foul the air for weeks. Mosquitoes bloom at snowmelt but fade fast. The through-line hazard is remoteness: signal drops when you leave a highway, and self-recovery is the baseline on any real run.",
    },
    {
      kind: "h2",
      text: "Legal notes specific to Colorado",
    },
    {
      kind: "ul",
      items: [
        "Forest Service dispersed camping generally runs a 14-day limit within a 30-day period, then you relocate -- often out of the district. Some forests add a 100-foot setback from water and roads.",
        "BLM typically allows 14 days within a 28-day window, then a move of some miles; the exact radius varies by field office, so read the local posting.",
        "Motorized travel is restricted to routes on each forest's Motor Vehicle Use Map. Driving off-route to reach a site is enforceable even where the camping is legal.",
        "State trust land is the Colorado quirk: closed to camping unless a recreation lease opens the parcel, and unmarked entry can be trespass. It is not generic public land.",
        "Popular corridors -- parts of the Front Range forests, the Buena Vista-Salida stretch, Crested Butte, and the Maroon Bells -- have gone designated-only or reservation-based.",
        "National park and state park camping is designated and fee-based -- no dispersed option inside their boundaries.",
      ],
    },
    {
      kind: "h2",
      text: "Where the general rules stop",
    },
    {
      kind: "p",
      text:
        "Everything above is the reliable backbone, and it stops being reliable at the district line. Stay limits, water and road setbacks, seasonal road-opening dates, fire-ban stages, and which corridors have gone designated-only are all set locally and change year to year. A pass that melted out by late June last season can stay closed into July after a heavy winter, and open dispersed ground can be signed shut the next.",
    },
    {
      kind: "note",
      text:
        "Before you commit a run, confirm conditions with the managing office -- the specific Forest Service ranger district or BLM field office for that ground -- plus current fire and road status. The office and the posted signs are the authority; treat rider check-ins and road intel as the on-the-ground supplement, not a substitute for the rule.",
    },
  ],
  faq: [
    {
      q: "Is dispersed camping legal in Colorado",
      a: "Yes, on most national forest and BLM land, which cover the bulk of the state's mountains and Western Slope desert. The standard rule is a 14-day stay limit with motorized travel confined to designated routes. National parks, state parks, and most state trust land are excluded.",
    },
    {
      q: "How long can I stay at a dispersed site in Colorado",
      a: "Forest Service ground generally allows 14 days in a 30-day period before you must relocate, often out of the district. BLM commonly allows 14 days in a 28-day window, then requires a move of several miles. The exact figures vary by district and field office, so check the local posting.",
    },
    {
      q: "Can I camp on Colorado state trust land",
      a: "Usually not. State trust land is managed to raise money for schools, not for recreation, and most parcels are closed to public entry. Only parcels under a specific recreation lease are open, and even those often prohibit camping. Route around it unless you have confirmed access.",
    },
    {
      q: "When is the best time for a mountain camping run in Colorado",
      a: "July through September for the high country, once the snow has melted off the passes and forest roads. That window overlaps monsoon storms and fire season, so plan to be below treeline by early afternoon and check current fire restrictions before you go.",
    },
    {
      q: "Where is dispersed camping hardest to find in Colorado",
      a: "Close to the Front Range cities and the marquee destinations. The Denver, Boulder, and Colorado Springs forest corridors, the Buena Vista-Salida stretch, Crested Butte, and the Maroon Bells have moved to designated-site or reservation systems. The far eastern plains are mostly private with only thin grassland options.",
    },
    {
      q: "Do I need a permit to camp on BLM or national forest land in Colorado",
      a: "Standard dispersed camping is free and permit-free on most BLM and Forest Service ground. Some high-demand corridors now require a reservation for designated dispersed sites, and fire bans can close camping seasonally, so confirm with the local office before you rely on a spot.",
    },
  ],
};
