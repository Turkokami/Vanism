import type { StateContent } from "./states";

export const STATE_NM: StateContent = {
  code: "nm",
  name: "New Mexico",
  answer:
    "New Mexico runs on national forest and BLM, not state land. Five national forests -- Gila, Carson, Santa Fe, Cibola, and Lincoln -- plus BLM ground in the west and south carry nearly all of the state's dispersed camping under standard 14-day limits. State trust land is a trap: it demands a paid recreational access permit and generally bars camping, so it does not fill the gaps. The eastern plains are mostly private and thin; the good ground is west and up.",
  blocks: [
    {
      kind: "key",
      text: "Dispersed camping in New Mexico is a national-forest and BLM game. You get free 14-day stays across the Gila, Carson, Santa Fe, Cibola, and Lincoln national forests and on BLM ground in the western and southern deserts, but the eastern third of the state is private ranchland with almost nothing open. Do not count on state trust land -- it needs a paid permit and rarely allows camping. Time your run by elevation: desert in the cool months, high country from late spring through fall.",
    },
    {
      kind: "p",
      text: "New Mexico is federal-land country stacked against a private-land east. Roughly a third of the state is public, and the split that matters to a rider is simple: national forest and BLM carry the camping, state trust land does not, and the further east you go the thinner it gets.",
    },
    {
      kind: "p",
      text: "The reward is range. Few states put Chihuahuan Desert basin and 13,000-foot alpine tundra within a half-day's drive, which means the season here is really several seasons stacked by elevation. Read the country before you commit a run.",
    },
    { kind: "h2", text: "The public-land mix" },
    {
      kind: "p",
      text: "About 34 percent of New Mexico is public land. The federal share is dominated by five national forests -- Gila, Carson, Santa Fe, Cibola, and Lincoln -- covering roughly 9.4 million acres, and by BLM holdings of around 13.5 million surface acres concentrated in the northwest San Juan Basin and across the southern desert. National parks are small in footprint here: White Sands and Carlsbad Caverns are destinations, not camping bases. The wildcard is state trust land -- about 9 million surface acres managed for revenue, not recreation.",
    },
    {
      kind: "table",
      caption: "Land agencies in New Mexico and what they allow",
      head: ["Agency", "Rough footprint", "Dispersed camping", "Stay limit"],
      rows: [
        ["National Forest (5 forests)", "~9.4M acres", "Yes, widely", "14 days / 30-day period"],
        ["BLM", "~13.5M acres surface", "Yes, west and south", "14 days / 28-day period"],
        ["State Trust Land", "~9M acres surface", "Rarely; permit required to enter", "Not a camping resource"],
        ["National Park / Monument", "Small footprint", "No dispersed; designated only", "Per-site"],
        ["Private / tribal", "Most of the east; large reservations", "No public access", "N/A"],
      ],
    },
    { kind: "h2", text: "Where dispersed camping is strong -- and where it is thin" },
    {
      kind: "p",
      text: "The hunt for free ground follows the forests and the BLM desert. Ownership does most of the work of deciding where a run is even possible.",
    },
    {
      kind: "ul",
      items: [
        "Strong: the Gila in the southwest -- the largest forest in the state and home to the first designated wilderness in the world -- plus the Carson and Santa Fe forests in the northern Sangre de Cristo high country.",
        "Strong: BLM ground around Taos (Rio Grande del Norte National Monument), the Organ Mountains-Desert Peaks country near Las Cruces, and the badlands of the northwest San Juan Basin.",
        "Moderate: Cibola forest units -- Sandia, Manzano, Mount Taylor -- and the Lincoln in the south-central mountains, both close to towns and more heavily used.",
        "Thin to none: the eastern plains and the Llano Estacado. This is private ranchland with only scattered national grassland fragments. Do not plan a run through the east on public ground.",
      ],
    },
    { kind: "h2", text: "The terrain riders come to hunt" },
    {
      kind: "p",
      text: "New Mexico's signature is contrast. In the south and west you get Chihuahuan Desert basin-and-range -- creosote flats, volcanic malpais, and isolated sky-island ranges that climb from desert to conifer in a single grade. The Gila delivers deep wilderness, hot springs, and canyon country with no cell coverage for days. North of Santa Fe the southern Rockies take over: Wheeler Peak tops out at 13,161 feet, and the alpine here is real high country with the weather to match. Between them sit mesa-and-canyon high desert, the Rio Grande gorge, and badlands like the Bisti. Riders come for that vertical range and the emptiness that still surrounds most of it.",
    },
    { kind: "h2", text: "Seasons, elevation, and timing" },
    {
      kind: "p",
      text: "There is no single New Mexico season. The desert floor sits near 3,000 feet and the high peaks pass 13,000, so the good ground moves up and down the calendar with elevation. The North American Monsoon -- roughly early July into mid-September -- reshapes the whole state every summer, and you earn the high country only after the snow clears.",
    },
    {
      kind: "table",
      caption: "When each region is in season",
      head: ["Region / elevation", "Best window", "Avoid", "Note"],
      rows: [
        ["Southern desert (3,000-5,000 ft)", "Oct-Apr", "Jun-Aug heat", "100F-plus common; shade is scarce"],
        ["High desert / mesa (5,000-7,000 ft)", "Apr-Jun, Sep-Oct", "Deep winter cold", "Spring wind and dust are brutal"],
        ["Northern mountains (7,000-10,000 ft)", "Jun-Oct", "Nov-May snow", "Passes and forest roads close with snow"],
        ["Alpine (10,000 ft+)", "Jul-Sep", "Rest of year", "Afternoon lightning is the killer"],
      ],
    },
    { kind: "h2", text: "The hazards that actually bite" },
    {
      kind: "ul",
      items: [
        "Monsoon and flash flood: from July, afternoon storms fill arroyos and slot canyons from rain that fell miles away. Never camp in a wash. Clay and caliche roads turn to grease and strand rigs for a day or more.",
        "Heat: the southern Chihuahuan Desert runs past 100F through summer, with little shade and long gaps between water.",
        "Fire and smoke: the dangerous stretch is the dry, windy pre-monsoon -- roughly May into June. The 2022 Hermits Peak-Calf Canyon fire, the largest in state history, closed much of the Santa Fe forest. Stage 1 and Stage 2 restrictions and full closures are routine; check before you count on a fire.",
        "Wind and dust: March through May brings sustained wind and blowing dust across the open country -- a real factor for a high-profile rig.",
        "Snow and pass timing: northern forest roads and passes hold snow into May; a warm-weather rig has no business at 10,000 feet before then.",
        "Remoteness: the Gila and the northwest basins put you hours from pavement and days from cell signal. Carry water, recovery gear, and a way to call out.",
      ],
    },
    {
      kind: "note",
      text: "Flash flood is the hazard most likely to kill a rider here who did everything else right. If the sky is building in the afternoon, get out of the low ground before it hits -- the water arrives from a storm you may never see.",
    },
    { kind: "h2", text: "Legal notes and the state trust land trap" },
    {
      kind: "p",
      text: "The rules are standard until they are not, and the one that catches out-of-state riders is state land.",
    },
    {
      kind: "ul",
      items: [
        "National forest: 14 days within any 30-day period is the common limit; some districts run shorter or post specific corridors. Districts set their own motor-vehicle-use maps -- camp only where the MVUM allows.",
        "BLM: 14 days within a 28-day period, then move a set distance. Rio Grande del Norte and some high-use areas use designated sites rather than open dispersed camping.",
        "State trust land is the trap. The State Land Office manages this ground for revenue, not recreation. Legal entry requires a paid recreational access permit, and camping is generally not allowed. Do not treat a green state-land parcel on a map like BLM.",
      ],
    },
    {
      kind: "note",
      text: "Tribal land is sovereign and closed to public dispersed camping without tribal permission. Large reservations cover significant ground here -- read your map's ownership layer, not just the terrain.",
    },
    { kind: "h2", text: "Check the district before you commit" },
    {
      kind: "p",
      text: "These are the general rules, and the general rules stop at the district line. Fire restrictions, road closures, monsoon damage, and seasonal gates change week to week here, and no statewide summary can track them. Before a run, pull current conditions from the specific ranger district -- Gila, Carson, Santa Fe, Cibola, or Lincoln -- or the BLM field office that holds the ground, whether Taos, Farmington, Las Cruces, Socorro, or Rio Puerco. For state trust land, the New Mexico State Land Office issues the permit and sets the terms. Treat verified rider road intel as the fast read and the managing office as the final word.",
    },
  ],
  faq: [
    {
      q: "Can you camp for free on public land in New Mexico",
      a: "Yes, on national forest and BLM ground -- both allow free dispersed camping with a 14-day stay limit. State trust land does not count: it needs a paid permit and generally bars camping.",
    },
    {
      q: "Do you need a permit for New Mexico state trust land",
      a: "Yes. The State Land Office requires a paid recreational access permit just to enter state trust land for recreation, and camping is generally not allowed even with one. Plan your run around forest and BLM ground instead.",
    },
    {
      q: "When is monsoon season in New Mexico",
      a: "Roughly early July into mid-September. Expect daily afternoon thunderstorms, flash floods in arroyos and canyons, and clay roads that turn impassable when wet. Never camp in a wash during monsoon.",
    },
    {
      q: "Where is the best dispersed camping in New Mexico",
      a: "The Gila in the southwest and the Carson and Santa Fe forests in the northern high country carry the strongest free camping, along with BLM ground near Taos and Las Cruces. The eastern plains are private and thin.",
    },
    {
      q: "Is New Mexico too hot to camp in summer",
      a: "The southern desert is -- it runs past 100F with little shade from June through August. In summer you earn your altitude: the northern mountains above 7,000 feet stay comfortable while the desert bakes.",
    },
    {
      q: "When do the mountain roads open in New Mexico",
      a: "High northern forest roads and passes often hold snow into May and reopen for a June-through-October window. A warm-weather rig has no business at 10,000 feet before the snow clears.",
    },
  ],
};
