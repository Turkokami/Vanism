import type { StateContent } from "./states";

export const STATE_MT: StateContent = {
  code: "mt",
  name: "Montana",
  answer:
    "Montana runs on national forest, not the wide-open BLM of the desert Southwest -- roughly 17 million acres of Forest Service ground carry most of the dispersed camping, concentrated in the western and southwestern ranges. Free dispersed sites are abundant along forest roads and legal for up to 16 days in a 30-day window; the eastern two-thirds of the state is mostly private with scattered BLM and a checkerboard of state trust sections that need a paid license to camp on. The good high ground comes into season late -- many passes and spur roads hold snow into late June or July -- and grizzly country, fire smoke, and gumbo mud all shape when and where a run works.",
  blocks: [
    {
      kind: "key",
      text: "Montana is a national-forest state. The Forest Service manages the majority of the campable public land, and it sits in the western and southwestern mountains where dispersed camping is abundant, free, and capped near 16 days. BLM is real but scattered across the central and eastern high plains, and state trust land -- a vast checkerboard -- requires a paid recreational license and holds a tight camping limit. Plan around a late melt-out, active grizzly country, and a fire season that can smoke out the western valleys.",
    },
    {
      kind: "p",
      text: "Montana rewards riders who read the land agency before they read the map. The state holds roughly 30 million acres of public land, but the mix is lopsided by region, and the rules that let you camp for free shift as you cross from a national forest boundary onto a BLM section or a state trust parcel. Getting a site here is a hunt -- one you win by knowing which agency owns the ground under your tires.",
    },
    {
      kind: "p",
      text: "The short version: the mountains earn you easy dispersed camping, the plains make you work for it, and the season is shorter at elevation than newcomers expect.",
    },
    { kind: "h2", text: "The public-land mix" },
    {
      kind: "p",
      text: "Montana's public land is dominated by national forest. Ten forests -- among them the Custer Gallatin, Flathead, Lolo, Kootenai, Bitterroot, Beaverhead-Deerlodge, and Helena-Lewis and Clark -- cover on the order of 17 million acres, almost all of it in the western half and the central island ranges. BLM manages roughly 8 million acres, but unlike Nevada or Utah it is not one continuous block: it is scattered across central and eastern Montana in parcels like the Missouri River Breaks. State trust land, run by the DNRC, adds around 5 million acres in a checkerboard of school-section squares. National parks -- Glacier in the northwest and the Montana rim of Yellowstone -- are not dispersed-camping ground at all; they are permit-and-campground country.",
    },
    {
      kind: "table",
      caption: "Public-land agencies in Montana and how dispersed camping works on each",
      head: ["Agency", "Where it dominates", "Dispersed camping", "Typical stay limit"],
      rows: [
        [
          "USFS (national forest)",
          "Western + SW ranges, central island ranges",
          "Abundant, free along forest roads (check the MVUM)",
          "16 days / 30 days (varies by district)",
        ],
        [
          "BLM",
          "Central + eastern high plains, Missouri Breaks",
          "Legal but scattered; parcels often landlocked by private",
          "14 days / 28 days (varies)",
        ],
        [
          "State trust (DNRC)",
          "Checkerboard statewide",
          "Allowed with a paid license; tight limit",
          "About 2 nights per site",
        ],
        [
          "National park (NPS)",
          "Glacier NW; Yellowstone rim S",
          "Not permitted -- designated sites only",
          "Per permit",
        ],
      ],
    },
    { kind: "h2", text: "Where dispersed camping is strong -- and where it is thin" },
    {
      kind: "p",
      text: "The strong ground is the western and southwestern national forest. Ranges like the Bitterroot, Big Hole, Pioneer, Gallatin, Madison, and the forests around Flathead Lake are laced with forest roads and spur two-tracks where dispersed camping is legal, free, and easy to find once the snow is off. The central island ranges -- the Little Belts, the Big and Little Snowies, the Crazies -- offer quieter camping with less traffic.",
    },
    {
      kind: "p",
      text: "It gets thin fast east of the mountains. The eastern two-thirds of Montana is mostly private ranchland; public land there is BLM and state trust scattered in a checkerboard, and many of those squares are legally landlocked -- surrounded by private with no legal access short of a corner crossing, which remains contested. A rider crossing eastern Montana should plan on long gaps between legal free sites and lean on BLM parcels near the Missouri Breaks, the badlands units, and the occasional state fishing-access site.",
    },
    { kind: "h2", text: "The terrain and what riders hunt" },
    {
      kind: "p",
      text: "Montana is two states of terrain. The west is the Northern Rockies -- glaciated peaks, deep timber, blue-ribbon trout rivers, and wilderness on a scale few states match, anchored by the Bob Marshall Wilderness Complex and the Absaroka-Beartooth. The east is high plains, breaks, and badlands: open, wind-scoured, and empty. Riders come for different hunts.",
    },
    {
      kind: "ul",
      items: [
        "Alpine and pass country: the Beartooth Plateau and the Beartooth Highway (US 212), which tops out above 10,000 feet and holds the highest sustained paved ground in the state.",
        "Wilderness gateways: trailhead camping on the edges of the Bob Marshall, Scapegoat, Anaconda-Pintler, and Cabinet Mountains for long backcountry runs.",
        "Rivers and valleys: dispersed sites near the Madison, Big Hole, Bitterroot, and Yellowstone for trout and long, low soaks.",
        "Badlands and breaks: Makoshika, the Terry Badlands, and the Missouri River Breaks for open, remote, low-elevation runs that open early in the season.",
      ],
    },
    { kind: "h2", text: "Season and timing" },
    {
      kind: "p",
      text: "Elevation, not the calendar, decides when a run is in season. Eastern plains and low western valleys open in April and May; high-country forest roads and passes can hold snow and mud into late June or July. Fall is a strong window -- cool, dry, fewer bugs -- but it overlaps hunting season, which changes traffic and access on both public and private ground. Winter shuts the high country entirely, and iconic routes like the Beartooth Highway typically run only from late May to mid-October.",
    },
    {
      kind: "table",
      caption: "When the ground comes into season by region and elevation",
      head: ["Region / elevation", "In season", "Watch for"],
      rows: [
        [
          "Eastern plains + badlands (2,000-3,500 ft)",
          "Apr-Jun, Sep-Oct",
          "Summer heat, gumbo mud when wet, remoteness",
        ],
        [
          "Western valleys (3,000-4,500 ft)",
          "May-Oct",
          "Fire smoke Jul-Sep, mosquitoes in early summer",
        ],
        [
          "Mid-elevation forest (4,500-7,000 ft)",
          "Jun-Sep",
          "Late mud, downed timber on spur roads",
        ],
        [
          "High country + passes (7,000-11,000 ft)",
          "Late Jun-Sep",
          "Snow-blocked roads, afternoon lightning, early frost",
        ],
      ],
    },
    { kind: "h2", text: "Signature hazards" },
    {
      kind: "p",
      text: "Montana's hazards are the kind that turn a good run bad if you ignore the local read.",
    },
    {
      kind: "ul",
      items: [
        "Grizzly country: the northwest, the Bob Marshall complex, and the Glacier and greater Yellowstone fringes are all occupied grizzly range. Hard-sided food storage and bear spray are not optional, and some districts mandate bear-resistant storage.",
        "Fire and smoke: July through September, wildfire closes roads and drainages and can hold smoke in the western valleys for weeks. Confirm current fire restrictions and closures before committing to a run.",
        "Gumbo mud: central and eastern Montana clay turns to grease when wet. A dry two-track can become impassable in an hour of rain -- and strand you until it dries.",
        "Snow and pass timing: high passes open late and close early. A June plan for the high country is a gamble; carry a bailout to lower ground.",
        "Remoteness: eastern Montana runs long miles between fuel, water, and cell coverage. This is road intel you gather before you leave pavement, not after.",
        "Insects and ticks: mosquitoes near water in early summer; Rocky Mountain wood ticks in spring grasslands carry real disease risk.",
      ],
    },
    { kind: "h2", text: "Legal notes specific to Montana" },
    {
      kind: "p",
      text: "The free-camping rules are federal and consistent; the state trust rules are where riders get caught.",
    },
    {
      kind: "ul",
      items: [
        "National forest: dispersed camping is free and legal off most forest roads, generally capped at 16 days in a 30-day period, though some districts set 14. Follow the Motor Vehicle Use Map -- camping off a road not open to your vehicle is a violation.",
        "BLM: similar free dispersed camping, commonly 14 days in a 28-day window, but confirm the specific field office; limits and access vary.",
        "State trust land (DNRC): recreation requires a State Land Recreational Use License, which is bundled with a Montana hunting or fishing license. Camping is allowed but limited -- generally near two nights at a site -- and many parcels are legally accessible only where they touch other public land or a public road.",
        "Access and corner crossing: checkerboarded public sections landlocked by private land are a live legal issue in Montana. Do not assume a public square on the map is legally reachable.",
      ],
    },
    {
      kind: "note",
      text: "A license that covers hunting or fishing in Montana also covers general recreation on state trust land -- but it does not lift the camping limit or unlock a landlocked parcel. Verify legal access, not just ownership.",
    },
    { kind: "h2", text: "Where the rules stop -- check the local office" },
    {
      kind: "p",
      text: "Every rule here holds until a district changes it, and in Montana they change it often -- for fire, for wildlife, for washouts, for seasonal closures that protect elk calving or grizzly range. The stay limit, the open-road status on the MVUM, the fire-restriction level, and whether a spur is melted out or blown down are all local and current. Confirm them against the managing office before you commit a run: the national forest ranger district, the BLM field office, or Montana DNRC for trust land. The map earns you a plan; the local office and current conditions earn you the site.",
    },
  ],
  faq: [
    {
      q: "Is dispersed camping free in Montana",
      a: "Yes, on national forest and BLM land. Off most forest and BLM roads you can camp for free, generally up to 16 days in 30 on forest land and 14 in 28 on BLM. State trust land is not free -- it requires a paid recreational use license.",
    },
    {
      q: "Where is the best dispersed camping in Montana",
      a: "The western and southwestern national forests. The Bitterroot, Big Hole, Pioneer, Gallatin, and Flathead ranges are laced with legal, free forest-road sites, and the central island ranges are quieter. Eastern Montana is mostly private and thin on legal public sites.",
    },
    {
      q: "When does the high country open in Montana",
      a: "Later than most expect. Low valleys and eastern plains open in April and May, but high forest roads and passes can hold snow and mud into late June or July. The Beartooth Highway typically runs only from late May to mid-October.",
    },
    {
      q: "Do I need a permit to camp on Montana state trust land",
      a: "Yes. Recreation on DNRC trust land requires a State Land Recreational Use License, which is included with a Montana hunting or fishing license. Camping is limited -- generally near two nights at a site -- and many parcels are only legally reachable where they touch other public land or a road.",
    },
    {
      q: "Is Montana grizzly country",
      a: "Much of the west is. The northwest, the Bob Marshall complex, and the Glacier and greater Yellowstone fringes are occupied grizzly range. Carry bear spray, store food in hard-sided containers, and follow any district storage order.",
    },
    {
      q: "What are the main hazards for van travel in Montana",
      a: "Late-melting snow on high roads, wildfire and smoke from July to September, bentonite gumbo mud that strands vehicles when wet, grizzlies in the west, and long remote stretches in the east with no fuel or signal. Check current conditions with the local office before each run.",
    },
  ],
};
