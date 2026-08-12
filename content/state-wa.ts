import type { StateContent } from "./states";

export const STATE_WA: StateContent = {
  code: "wa",
  name: "Washington",
  answer: "Washington runs on national forest, not BLM -- five forests east and west of the Cascade crest carry nearly all the free dispersed camping, on a standard 14-day limit. State trust and wildlife land add a second, permit-gated layer: a Discover Pass and, usually, designated sites only. The season is short at elevation and the west side is wet; the good ground is a hunt against snowmelt, fire, and pass timing, not a year-round given.",
  blocks: [
    { kind: "key", text: "Free dispersed camping in Washington lives almost entirely on national forest -- Okanogan-Wenatchee, Gifford Pinchot, Colville, Mt. Baker-Snoqualmie, and Olympic -- on the standard 14-day-per-30 Region 6 limit. BLM is a thin eastern scatter, not the backbone it is in Nevada. State land is separate and permit-gated: DNR forests and WDFW wildlife areas need a Discover Pass and usually restrict you to designated sites, and the national parks allow no roadside dispersed camping. At elevation the season is roughly July through October." },

    { kind: "p", text: "Washington is two states divided by the Cascade crest, and that divide governs where you can sleep. West is maritime -- dense timber, heavy rain, gated private industrial forest between you and the public parcels. East is drier: ponderosa, shrub-steppe, and the open forest roads where dispersed camping works. Treat it as one landscape and you end up on gated timber ground in the rain." },

    { kind: "p", text: "This is national-forest country, not BLM country. Southwest free-camping habits still apply on the forests, but the state layer here is larger, stricter, and costs money. Read the ownership before the map app -- the rule set changes at boundaries you cannot see." },

    { kind: "h2", text: "The land mix and what it means for a rider" },

    { kind: "p", text: "Federal forest is the workhorse. Five forests cover the mountains -- Okanogan-Wenatchee on the dry east slope, Gifford Pinchot around the southern volcanoes, Colville in the northeast, Mt. Baker-Snoqualmie along the west-central crest, Olympic on the peninsula -- and together they hold the vast majority of legal dispersed sites. BLM is a small eastern footprint from the Spokane District: scattered parcels and one dune wilderness near the Tri-Cities. Hunting free ground means hunting forest roads." },

    { kind: "p", text: "The state layer catches riders. Washington DNR manages roughly two million acres of trust land and state forest, and WDFW runs a network of wildlife areas -- both need a Discover Pass, and DNR camping is frequently limited to designated sites, not open spurs. The west-side wildcard: large lowland and peninsula blocks are private industrial timberland, often gated, some open only through a paid company permit. Not public, not free." },

    { kind: "table", caption: "Land agencies in Washington and their camping rules", head: ["Agency / layer", "Presence in WA", "Dispersed camping", "Pass or permit"], rows: [
      ["National forest (5 forests)", "Backbone; most mountains", "Open, 14-day/30; MVUM governs roads", "None to camp"],
      ["BLM (Spokane District)", "Thin, scattered, eastern", "Open, 14-day default", "None"],
      ["DNR trust / state forest", "~2M acres, both sides", "Often designated sites only", "Discover Pass"],
      ["WDFW wildlife areas", "Scattered statewide", "Limited; many disallow it", "Discover Pass or access pass"],
      ["National parks (Rainier, Olympic, N. Cascades)", "Large, iconic", "None roadside; backcountry by permit", "Entrance + wilderness permit"],
      ["Private industrial timberland", "Large west-side blocks", "No, except company permit programs", "Paid company permit where offered"],
    ]},

    { kind: "h2", text: "Where dispersed is strong, and where it is thin" },

    { kind: "p", text: "The strong ground is the dry east slope and the northeast. Okanogan-Wenatchee is the deepest well -- the Teanaway, the Chelan and Methow country, Blewett Pass -- open ponderosa laced with roads and pullouts. Gifford Pinchot in the south, around Mount Adams and Mount St. Helens, is nearly as good. Colville is quieter, lower, and opens earlier than the crest." },

    { kind: "p", text: "The thin ground is the populated west. The Puget Sound corridor is private and developed. The Olympic Peninsula looks like wilderness but is a hard patchwork -- Olympic National Park in the center (no dispersed), Olympic National Forest ringing it (limited), gated timber blocks filling the rest. The Columbia Basin is mostly private agriculture. There the honest move is often a designated DNR site or a developed campground." },

    { kind: "note", text: "The west-side trap is the private inholding at scale: a clearing that looks perfect is often perfect because a timber company grades it. On the peninsula and in the lowlands, assume a promising unmarked road is private and gated until an ownership overlay proves otherwise." },

    { kind: "h2", text: "The terrain riders come to hunt" },

    { kind: "p", text: "Washington's signature is volcanoes and glaciated alpine. The crest carries five major volcanoes -- Rainier, Adams, St. Helens, Baker, Glacier Peak -- and the North Cascades, the most heavily glaciated range in the lower 48, jagged enough to earn the tag American Alps. Riders work the volcano flanks, the Alpine Lakes high country, and the Enchantments granite, plus peninsula rainforest and coast and eastern shrub-steppe." },

    { kind: "p", text: "The run most worth timing is larch season. In late September and early October the alpine larch across the North Cascades and eastern crest turn gold before dropping their needles -- a two-week window that draws riders specifically, overlapping the last high-country roads open before snow. The best ground and the best timing are narrow, earned by being in position when it opens." },

    { kind: "h2", text: "Timing the season by elevation and region" },

    { kind: "p", text: "Elevation runs the calendar. High Cascade roads and passes clear in June or July and close in October; a heavy winter holds the highest ground under snow into July. Mid-elevation east-slope forest opens in May and June. The low eastern desert is a spring-and-fall proposition, punishing at midsummer. The wet west side has no real dispersed season, just drier windows from July into September." },

    { kind: "table", caption: "Season by region and elevation", head: ["Region / band", "In season", "Marginal", "Closed or brutal"], rows: [
      ["High Cascades (passes, alpine)", "Jul-early Oct", "Jun, mid-Oct snow risk", "Nov-May, snowbound"],
      ["East-slope forest (mid-elevation)", "Late May-Oct", "May mud, late Oct", "Deep winter"],
      ["Northeast (Colville, low forest)", "May-Oct", "Apr, Nov", "Midwinter snow"],
      ["Low eastern desert / canyons", "Apr-Jun, Sep-Oct", "Jul heat, Nov", "Midsummer heat, deep cold"],
      ["West side / peninsula", "Jul-Sep drier window", "Jun, Oct", "Oct-May, persistent rain"],
    ]},

    { kind: "note", text: "The North Cascades Highway (SR 20) over Rainy and Washington passes closes for winter, typically November into April or May, and Chinook Pass (SR 410) closes too. A shoulder-season run across the crest can be halved by a gate -- confirm pass status before you depend on one." },

    { kind: "h2", text: "The hazards that define the state" },

    { kind: "p", text: "Washington's hazards split by side of the crest and stack through the season. Know which you face before you park:" },

    { kind: "ul", items: [
      "Fire and smoke -- the east-side hazard from August into September; fires close roads and smoke fouls air quality for weeks.",
      "Snow and pass timing -- the high country holds snow late and sheds it early, and a closed pass reroutes a whole run.",
      "West-side rain -- wet and cool much of the year; the risk is cold-soaked gear, not drama.",
      "Mud season -- spring softens unpaved forest roads, and the damage you leave gets sites closed.",
      "Heat -- the low eastern desert runs hot and exposed at midsummer, little shade, long water gaps.",
      "Insects -- mosquitoes explode at snowmelt in the high lakes, worst just after the road opens.",
      "Remoteness -- the Pasayten and deep east-slope drainages have no signal and long recovery distances.",
    ]},

    { kind: "h2", text: "Legal notes specific to Washington" },

    { kind: "p", text: "Two rules do most of the work. On national forest, the dispersed limit is the Region 6 standard -- 14 days within any 30-day period -- and roads are governed by each forest's Motor Vehicle Use Map. On state-managed land -- DNR, State Parks, WDFW -- a Discover Pass is required for vehicle access, roughly 30 dollars a year or 10 for a day. It is the most-missed cost for riders from BLM-heavy states." },

    { kind: "ul", items: [
      "DNR camping is often designated-site only, with per-site limits around three consecutive nights -- check the block.",
      "The Discover Pass covers DNR, State Parks, and WDFW; WDFW also accepts a vehicle access pass tied to a hunting or fishing license.",
      "Fire bans run through the dry months, sometimes stove-only, and appear fast in fire season.",
      "Winter access to plowed lots needs a Sno-Park permit; the Discover Pass does not cover it.",
      "Private timber blocks are not public however open the road looks; some allow access only by paid company permit.",
    ]},

    { kind: "h2", text: "Where the general rule stops -- check the district" },

    { kind: "p", text: "Everything above is the reliable frame; where it stops being reliable is the specific district and the current week. Each national forest sets its own MVUM, road closures, and fire order, and a corridor open in July can close for fire in August. DNR rules vary parcel to parcel, and pass-closure dates move with the snowpack." },

    { kind: "p", text: "Before you commit a run, pull the road intel from the authoritative source: the national forest's district ranger office and its current MVUM and alerts, the Washington DNR recreation pages, and WSDOT mountain pass reports. When a crowdsourced pin and the district's current order disagree, the order wins. Confirm the rule for the exact ground you are aiming at -- season, fire order, and gate are all local." },
  ],
  faq: [
    { q: "Is there free dispersed camping in Washington", a: "Yes, mostly on the five national forests -- Okanogan-Wenatchee, Gifford Pinchot, Colville, Mt. Baker-Snoqualmie, and Olympic -- on a 14-day limit within any 30-day period. BLM exists but is a thin eastern scatter, not the backbone it is farther south." },
    { q: "Do I need a Discover Pass to camp", a: "You need one to park or camp on state-managed land -- DNR forests, State Parks, and WDFW wildlife areas -- at about 30 dollars a year or 10 dollars a day. You do not need it to camp free on national forest, which is the more common dispersed ground." },
    { q: "When does the high country open", a: "Roughly July through October at Cascade elevation, with the highest ground sometimes snowbound into July after a heavy winter. Mid-elevation east-slope forest opens in May and June; the low eastern desert is a spring-and-fall run to avoid midsummer heat." },
    { q: "Can I disperse camp in the national parks", a: "No roadside dispersed camping in Rainier, Olympic, or North Cascades. Backcountry camping there is by wilderness permit only, and vehicle camping is confined to developed campgrounds." },
    { q: "Where is dispersed camping hardest to find", a: "The populated west -- the Puget Sound corridor, the Columbia Basin, and much of the Olympic Peninsula, where the land is a patchwork of national park, limited national forest, and large gated private timber. A DNR designated site or a developed campground is often the honest option there." },
    { q: "What is the biggest seasonal hazard", a: "Fire and smoke on the east side from August into September, which close roads and campgrounds and flatten air quality for weeks. Pair that with pass timing -- SR 20 and other high passes close for winter -- and you plan the run around both." },
  ],
};
