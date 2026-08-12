import type { StateContent } from "./states";

export const STATE_TX: StateContent = {
  code: "tx",
  name: "Texas",
  answer:
    "Texas is a hard state for free dispersed camping, and every rider needs to understand why: roughly 95 percent of it is privately owned, and under 2 percent is federal land. There is no vast BLM backyard the way Arizona and Utah have -- Texas kept its own lands at annexation, so the western-state model of open desert you can pull off and sleep on simply does not apply. The real free dispersed ground is narrow and specific: the East Texas national forests and grasslands, and the open beach on the Gulf, above all Padre Island National Seashore. Everything else is paid permits, state parks, or trespassing.",
  blocks: [
    {
      kind: "key",
      text:
        "Free dispersed camping in Texas is scarce and concentrated, not abundant. The dependable ground is three things: the four East Texas national forests (Sam Houston, Davy Crockett, Angelina, Sabine) and the national grasslands, which allow dispersed camping on the 14-day pattern; and the open Gulf beach, where Padre Island National Seashore lets you drive on and camp for free. The famous West Texas country -- Big Bend, the Chisos, the Davis and Guadalupe Mountains -- is almost all private ranchland, national park, or state park, so it runs on permits and fees, not open dispersed. Assume private until proven public.",
    },
    {
      kind: "p",
      text:
        "Texas breaks the western playbook. In Arizona or Nevada the map is mostly federal and the hunt is for the best of a lot of legal ground. In Texas the map is mostly private -- roughly 95 percent -- and the hunt is for the few slivers where free dispersed camping is actually legal. A rider who rolls in expecting to pull off a ranch road at dusk and sleep for free is going to be woken up, ticketed, or worse. The ground you earn here you earn by knowing exactly which agency owns which acre.",
    },
    {
      kind: "h2",
      text: "The public-land landscape",
    },
    {
      kind: "p",
      text:
        "Because Texas entered the Union as an independent republic, it kept its public domain instead of ceding it to the federal government. That single fact shapes everything. There is almost no BLM land -- a negligible scatter of tracts statewide, nothing like the open desert the Bureau runs next door in New Mexico. Federal ownership overall sits under 2 percent, and it is lopsided: national forest in the east, two national parks and a national seashore, and Army Corps reservoir margins here and there.",
    },
    {
      kind: "p",
      text:
        "The national forest is the real dispersed-camping asset. Four forests -- Sam Houston north of Houston, Davy Crockett, Angelina, and Sabine -- plus the LBJ, Caddo, and Panhandle national grasslands run under Forest Service rules that generally permit dispersed camping. Everything else labeled public is a managed unit: state parks and natural areas under Texas Parks and Wildlife, the two national parks, and the seashore. Texas also holds Permanent School Fund land through the General Land Office, but that is leased for grazing and minerals -- not camping ground.",
    },
    {
      kind: "table",
      caption: "Land agencies in Texas and what dispersed camping looks like on each",
      head: ["Agency / land type", "Where it dominates", "Dispersed camping rule of thumb"],
      rows: [
        [
          "National Forest / Grassland (USFS)",
          "East Texas Piney Woods; North Texas and Panhandle grasslands",
          "Dispersed camping generally free, roughly 14-day pattern; the state's best free ground",
        ],
        [
          "National Park Service",
          "Big Bend, Guadalupe Mountains, Padre Island Seashore",
          "No open dispersed; permitted backcountry sites -- except Padre beach, where free camping is allowed",
        ],
        [
          "State Parks / Natural Areas (TPWD)",
          "Statewide, incl. Big Bend Ranch, Palo Duro, Caprock",
          "Reserved and metered -- sites by fee and permit, not dispersed",
        ],
        [
          "BLM",
          "A negligible scatter of small tracts",
          "Not a camping resource in Texas; do not plan around it",
        ],
        [
          "State (Permanent School Fund / GLO)",
          "Section parcels statewide",
          "Leased for grazing and minerals -- no public camping",
        ],
        [
          "Open beach (Gulf Coast)",
          "Padre, Matagorda, Bolivar, other barrier shores",
          "Beach camping widely allowed under the Open Beaches Act; some towns require a paid permit",
        ],
      ],
    },
    {
      kind: "h2",
      text: "Where dispersed camping is strong and where it is thin",
    },
    {
      kind: "p",
      text:
        "Strong is a short list. The East Texas national forests carry the free-dispersed season -- pine and hardwood you pull into off a forest road, close enough to the eastern cities to be a genuine base. The Gulf beach is the other pillar: Padre Island National Seashore lets you drive south down the sand and camp for free, and stretches of Matagorda, Bolivar, and other open beaches allow it too. That is close to the whole legal free menu.",
    },
    {
      kind: "p",
      text:
        "Thin is most of the state. West Texas looks like the emptiest, most campable country in America and is almost entirely closed to you -- private ranchland, fenced and posted, to the horizon. The Hill Country is the same: beautiful, full of rivers, nearly all private. In the Big Bend region the only public ground is the national park and Big Bend Ranch State Park, and both run on permits. Empty does not mean open. If you cannot name the agency that owns a spot, treat it as private and keep moving.",
    },
    {
      kind: "h2",
      text: "The terrain and what riders hunt",
    },
    {
      kind: "p",
      text:
        "Texas is four or five landscapes stacked into one state. The West Texas desert is the prize country -- Chihuahuan Desert basins ringed by island mountains: the Chisos rising out of Big Bend, the Davis Mountains, and the Guadalupes, which hold Guadalupe Peak at 8,751 feet, the high point of the state. This is where riders come to hunt remoteness, dark skies, and desert-mountain runs with no signal and no crowds. The Panhandle hides Palo Duro Canyon, the second-largest canyon in the country, and Caprock Canyons -- red-rock cuts you do not expect on the High Plains.",
    },
    {
      kind: "p",
      text:
        "East of the I-35 corridor the state turns green: the Piney Woods of East Texas, humid pine forest that is the free-camping heartland, and the limestone-and-cypress Hill Country in the center. The Gulf Coast is the fifth face -- barrier islands and open beach where the run is measured in miles of drivable sand. Match terrain to calendar and Texas gives you desert, canyon, forest, and coast in one season.",
    },
    {
      kind: "h2",
      text: "Seasons and timing",
    },
    {
      kind: "p",
      text:
        "Heat governs the calendar. Summer across Texas is punishing, and in the West Texas desert it is a hazard, not an inconvenience. The West Texas and Big Bend season is the cool half of the year -- roughly October through April, with spring and fall the sweet spot. East Texas and the coast run nearly year-round but are best in the shoulders; deep summer is hot, humid, and heavy with insects. The Panhandle is a spring-through-fall run with real winter cold and wind.",
    },
    {
      kind: "table",
      caption: "Region-by-season timing across Texas",
      head: ["Region", "Prime season", "Off / hazard season", "Note"],
      rows: [
        [
          "Big Bend / West Texas desert",
          "Oct - Apr, spring and fall best",
          "Jun - Aug dangerous heat",
          "Remote; park and state-park permits; carry water and fuel",
        ],
        [
          "Guadalupe / Davis Mountains",
          "Spring and fall",
          "Winter cold and extreme wind",
          "Guadalupe ridgeline sees the state's highest sustained winds",
        ],
        [
          "Hill Country (central)",
          "Oct - May",
          "Summer heat; flash-flood season anytime rains stack up",
          "Flash Flood Alley -- do not camp in a low river bottom",
        ],
        [
          "East Texas Piney Woods",
          "Oct - May, spring and fall best",
          "Hot, humid summers; ticks, chiggers, mosquitoes",
          "The free national-forest dispersed season",
        ],
        [
          "Gulf Coast / Padre",
          "Late fall through spring",
          "Hurricane season Jun - Nov; brutal summer humidity",
          "Beach camping; watch tide, soft sand, and storm forecasts",
        ],
        [
          "Panhandle canyons",
          "Apr - Oct",
          "Cold, windy winters; summer thunderstorms",
          "Blue northers can drop temperatures fast",
        ],
      ],
    },
    {
      kind: "h2",
      text: "Signature hazards",
    },
    {
      kind: "ul",
      items: [
        "Heat -- statewide summer heat is severe, and West Texas desert summer is genuinely dangerous with little shade or water; a run to skip, not tough out.",
        "Flash floods -- the Hill Country is Flash Flood Alley; rivers and dry washes rise fast, so never camp in a low bottom when rain is forecast upstream.",
        "Fire and burn bans -- county commissioners declare burn bans routinely in dry stretches, covering open flame and sometimes generators; check the county before any fire.",
        "Wind and blue northers -- Panhandle and high West Texas winds are relentless, and a norther can drop temperatures 30 to 40 degrees in hours.",
        "Hurricanes -- the Gulf Coast is exposed June through November; a beach run can turn into an evacuation with a day's notice.",
        "Insects and remoteness -- East Texas brings ticks, chiggers, mosquitoes, and fire ants; West Texas brings distance, where fuel, water, or help can be an hour of empty road away.",
      ],
    },
    {
      kind: "h2",
      text: "Legal notes specific to Texas",
    },
    {
      kind: "ul",
      items: [
        "National forest dispersed camping is free and generally follows a 14-day-in-a-window pattern, but individual districts post designated-site-only zones and seasonal closures -- confirm with the ranger district.",
        "Big Bend National Park allows no open dispersed camping: you need a backcountry or roadside-primitive permit with a fee, and the good sites fill in the cool season.",
        "Big Bend Ranch State Park allows remote primitive camping by permit, but many of its roads demand high clearance or 4WD and a real self-recovery plan.",
        "Padre Island National Seashore permits free primitive beach camping; some stretches require 4WD, and the developed area has its own rules and limits.",
        "Beach camping under the Open Beaches Act is broadly legal, but coastal municipalities often require a paid beach parking permit or sticker -- check the specific beach.",
        "State Permanent School Fund land shown on ownership maps is leased, not public recreation ground; camping on it is trespassing. And there is effectively no BLM free-desert option in Texas -- do not plan a West Texas stay around federal dispersed ground that does not exist.",
      ],
    },
    {
      kind: "note",
      text:
        "The most expensive mistake in Texas is assuming the western-state rules travel here. They do not. Open, empty, unfenced-looking country is almost always private. Verify ownership before you commit to a spot.",
    },
    {
      kind: "h2",
      text: "Where the rules stop -- check the local source",
    },
    {
      kind: "p",
      text:
        "The general picture -- forests free, parks paid, beach open, private everywhere else -- gets you oriented, but the details are set locally and change fast. Ranger districts post their own dispersed rules, designated zones, and fire closures. County burn bans flip on and off with the drought. Beach permit requirements vary town to town. And in Big Bend country, road and water conditions are same-day calls the map cannot make for you.",
    },
    {
      kind: "p",
      text:
        "For any specific run, go to the agency that owns the ground: the National Forests and Grasslands in Texas ranger district for the eastern forests, the National Park Service for Big Bend, Guadalupe Mountains, and Padre Island, and Texas Parks and Wildlife for state parks and natural areas including Big Bend Ranch. Check the county for an active burn ban, confirm the beach permit with the local municipality, and weigh it against fresh road intel from riders who earned that ground this season. When the general rule and the district office disagree, the district office wins.",
    },
  ],
  faq: [
    {
      q: "Can you dispersed camp for free in Texas",
      a: "Yes, but only in a few places. The East Texas national forests and grasslands allow free dispersed camping, and Padre Island National Seashore lets you camp free on the beach. Most of Texas is private land where free dispersed camping is illegal, so the free options are narrow and specific.",
    },
    {
      q: "Why is there so little public land in Texas",
      a: "Texas joined the Union as an independent republic and kept its own public domain rather than ceding it to the federal government. As a result under 2 percent of the state is federal land, there is almost no BLM ground, and roughly 95 percent is privately owned -- the opposite of most western states.",
    },
    {
      q: "Can you dispersed camp in Big Bend",
      a: "Not in the open way you can on BLM land out west. Big Bend National Park requires a backcountry or roadside-primitive permit with a fee, and Big Bend Ranch State Park requires a state permit for its remote primitive sites. The surrounding country is private ranchland, so plan on permits, not free dispersed.",
    },
    {
      q: "Is beach camping legal in Texas",
      a: "Largely yes. Under the Open Beaches Act the open Gulf beach is public, and camping is allowed along much of it, including Padre Island National Seashore. Some coastal towns require a paid beach parking permit, and you should watch tides, soft sand, and hurricane forecasts from June through November.",
    },
    {
      q: "When is the best time to camp in West Texas",
      a: "October through April, with spring and fall the sweet spot. Summer in the Chihuahuan Desert around Big Bend is dangerously hot with little shade or water. The high country in the Guadalupe and Davis Mountains is cooler but exposed to hard wind and winter cold.",
    },
    {
      q: "What are the main hazards camping in Texas",
      a: "Severe summer heat, especially in the West Texas desert; flash flooding in the Hill Country, known as Flash Flood Alley; county burn bans in dry stretches; high wind and sudden northers in the Panhandle and west; hurricanes on the Gulf Coast; and ticks, chiggers, and mosquitoes in the humid east.",
    },
  ],
};
