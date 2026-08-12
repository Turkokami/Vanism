import type { StateContent } from "./states";

export const STATE_AK: StateContent = {
  code: "ak",
  name: "Alaska",
  answer:
    "Alaska is almost entirely public land -- roughly 60 percent federal, another 28 percent state -- but that abundance is trapped behind a road system so small that the real constraint is not where you can camp, it is where you can drive. Dispersed camping is broadly legal and easy on the ground you can actually reach: state land, BLM tracts along the Dalton and Denali highways, and both national forests. The season is short -- roughly June through early September on the connected road system -- and the signature hazards are remoteness, bears, glacial rivers, and mosquitoes, not heat. The trap is Native corporation land, which is private, not public, despite looking empty on the map.",
  blocks: [
    {
      kind: "key",
      text:
        "Dispersed camping in Alaska is legal and abundant in principle and gated by roads in practice. On the highway-connected Interior and Southcentral you can camp on state land, BLM ground along the Dalton and Denali highways, and Chugach and Tongass national forest with little friction. A handful of highways reach a tiny fraction of the state, and the Southeast panhandle has almost no road connection at all. Native corporation land under ANCSA is private and closed, the season runs June through early September, and the hazards are bears, glacial rivers, remoteness, and insects rather than heat.",
    },
    {
      kind: "p",
      text:
        "Alaska breaks the mental model you brought from the Lower 48. It is the least private state in the country -- roughly 99 percent public or Native corporation land -- so the question is almost never whether camping is allowed. The question is whether a road reaches it. A handful of highways cross a landmass larger than Texas, California, and Montana combined, so reaching good ground is the hunt in its purest form: the run matters more than the destination.",
    },
    {
      kind: "h2",
      text: "The public-land landscape",
    },
    {
      kind: "p",
      text:
        "The federal share is enormous and split among four agencies. The BLM holds its single largest state footprint here -- roughly 70 million acres, concentrated in the Interior and the Dalton Highway corridor. The National Park Service manages more land in Alaska than in all other states combined: Denali, Wrangell-St. Elias (the largest unit in the system), Gates of the Arctic, Katmai, Kenai Fjords. The Fish and Wildlife Service runs the country's biggest refuge system, from the Arctic National Wildlife Refuge to the Yukon Delta. The Forest Service runs two temperate rainforest giants: the Tongass in the Southeast panhandle -- the largest national forest in the nation -- and the Chugach on the Kenai and Prince William Sound.",
    },
    {
      kind: "p",
      text:
        "The State of Alaska owns roughly 100 million acres, the largest state holding in the country, and much of the accessible dispersed camping happens there. Then the category that catches newcomers: Native corporation land. Under the Alaska Native Claims Settlement Act (ANCSA), regional and village corporations own about 44 million acres of private land, much of it near communities and rivers -- not open to camping without permission, and rarely any different on the ground from the federal land beside it.",
    },
    {
      kind: "table",
      caption: "Land agencies in Alaska and what dispersed camping looks like on each",
      head: ["Agency / land type", "Where it dominates", "Dispersed camping rule of thumb"],
      rows: [
        [
          "State of Alaska (DNR)",
          "Interior and Southcentral highways",
          "Allowed on general-use state land; stay limits apply; developed rec sites charge fees",
        ],
        [
          "BLM",
          "Interior, Dalton and Denali highways",
          "Open dispersed camping, typically 14 days; developed campgrounds along both highways",
        ],
        [
          "National forest",
          "Tongass (Southeast), Chugach (Kenai)",
          "Dispersed allowed; Tongass largely roadless and ferry-only; Chugach reachable by road",
        ],
        [
          "National park / preserve",
          "Denali, Wrangell-St. Elias, Kenai Fjords",
          "No roadside dispersed camping; some preserves allow backcountry use; most have no road",
        ],
        [
          "National wildlife refuge (FWS)",
          "Arctic, Yukon Delta, Kenai, Interior",
          "Backcountry camping often allowed but mostly roadless; check the refuge",
        ],
        [
          "Native corporation land (ANCSA)",
          "Near villages and rivers, much of rural Alaska",
          "Private -- closed without permission; not public recreation ground",
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
        "Strong ground follows the roads. The Denali Highway -- a 135-mile gravel run between Paxson and Cantwell across BLM and state tundra -- is one of the best pure dispersed corridors in the state. The Dalton Highway (the haul road) north to the Arctic crosses open BLM land with a few developed campgrounds spaced along it. The Kenai Peninsula, the Glenn and Richardson corridors, the roads into Wrangell-St. Elias, and the Chugach forest roads all carry real accessible ground.",
    },
    {
      kind: "ul",
      items: [
        "Strong: the Denali Highway -- gravel, tundra pullouts on BLM and state land, a classic overland run.",
        "Strong: the Dalton Highway corridor -- open BLM camping and campgrounds up to the Brooks Range.",
        "Strong: the Kenai Peninsula, Chugach forest roads, and the Glenn/Richardson corridors.",
        "Thin: anywhere off the road system -- most of the state -- reached only by float plane, boat, or ferry.",
        "Thin: the Southeast panhandle for a van -- Juneau, Sitka, and Ketchikan are off the road grid.",
        "Effectively closed: inside the national parks and on all Native corporation land.",
      ],
    },
    {
      kind: "note",
      text:
        "The Southeast is the classic misread. On a map the Tongass looks like endless free forest camping -- but its communities are islands with no road to the mainland. A van reaches the panhandle only aboard the Alaska Marine Highway ferry, and the road mileage on any island is short. Plan the Southeast as a ferry-and-foot trip, not a drive-in dispersed run.",
    },
    {
      kind: "h2",
      text: "The adventure character of the state",
    },
    {
      kind: "p",
      text:
        "Alaska is the big-terrain endgame. The signature ground is the Alaska Range and Denali at 20,310 feet, the Wrangell and St. Elias icefields, the Brooks Range straddling the Arctic Circle, and the Chugach and Kenai mountains dropping into tidewater. Riders come to hunt tidewater glaciers, the midnight sun, salmon runs, and genuinely wild game -- grizzly and black bear, moose, caribou, Dall sheep. The Dalton to the Arctic Ocean and the Top of the World Highway into the Yukon are the trophy runs; the Denali is the connoisseur's run. What sets the state apart is scale and self-reliance: fuel stops are hundreds of miles apart and signal disappears for days at a time.",
    },
    {
      kind: "h2",
      text: "Seasons and timing",
    },
    {
      kind: "p",
      text:
        "Alaska is a one-season state on the road system. The reliable window is early June through the first week of September, bookended by long June daylight and the first hard frosts at elevation. May is break-up and mud, with soft shoulders and rivers running high on snowmelt. The Denali Highway is not maintained in winter and closes to through traffic from about October to mid-May; the Dalton stays open year-round but becomes a serious winter undertaking. Miss the window and the ground is simply gone until next year.",
    },
    {
      kind: "table",
      caption: "When the ground is in season by region",
      head: ["Region", "Prime season", "What to watch"],
      rows: [
        [
          "Southcentral -- Kenai, Chugach, Glenn/Richardson",
          "Late May - mid September",
          "Rain and glacial silt; salmon-season bears; frost heaves on the highways",
        ],
        [
          "Interior -- Fairbanks, Denali Highway, Tok",
          "June - early September",
          "Wildfire and smoke; peak mosquitoes; Denali Highway closed in winter",
        ],
        [
          "Arctic -- Dalton Highway, Brooks Range, North Slope",
          "Mid June - late August",
          "Snow possible any month; extreme remoteness; gravel damage to tires and glass",
        ],
        [
          "Southeast panhandle -- Tongass",
          "May - September (ferry access)",
          "Rainforest -- persistent rain; no road connection; short island road mileage",
        ],
      ],
    },
    {
      kind: "p",
      text:
        "None of the signature hazards is heat. Bears are a daily reality -- food storage discipline is mandatory. Glacial rivers rise through the day as ice melts and can turn a morning ford into an afternoon trap. The Interior burns hard in dry summers, and smoke fills valleys for weeks. Mosquitoes and biting flies are a genuine health factor, worst in the Interior in June and July. Remoteness compounds it all: the Dalton and Denali run long stretches with no fuel, no signal, and gravel that shreds tires and glass. Carry recovery gear, a satellite communicator, and spare fuel.",
    },
    {
      kind: "h2",
      text: "Legal notes specific to Alaska",
    },
    {
      kind: "p",
      text:
        "The general rule is generous -- dispersed camping is broadly allowed on general-use state land, BLM ground, and both national forests -- but specifics are set locally and stay limits vary.",
    },
    {
      kind: "ul",
      items: [
        "State land is managed by the Alaska Department of Natural Resources; general-use land is broadly open, but stay limits apply and some areas are closed or leased -- confirm the parcel with DNR.",
        "BLM ground follows a typical 14-day limit; developed BLM campgrounds along the Dalton and Denali may charge a fee and post their own limits.",
        "Developed Alaska State Parks rec sites charge fees -- do not confuse a state rec site with open state land.",
        "National parks prohibit roadside dispersed camping; some preserves and refuges allow backcountry use, but most units have no road at all.",
        "Native corporation land under ANCSA is private -- camping requires the corporation's permission, and trespass is a real issue near villages and rivers.",
        "The Dalton Highway has its own corridor rules and limited pullout access -- treat it as a managed industrial road, not an open byway.",
      ],
    },
    {
      kind: "h2",
      text: "Where the general rules stop",
    },
    {
      kind: "p",
      text:
        "The \"it is basically all public\" instinct gets you in trouble fast, because the two things that govern a run -- road access and ownership at your exact pullout -- are both invisible on a highway map. State land, BLM, refuge, park, and Native corporation ground can share a fenceline with no sign, and the difference is legal camping versus trespass. Stay limits, closures, and road status change by district and by year: Denali Highway open dates, Dalton pullout rules, and Interior fire closures are current-conditions calls. Confirm ownership with the managing agency, check current road and fire status, and weigh it against fresh road intel. When the general rule and the district office disagree, the district office wins.",
    },
    {
      kind: "h2",
      text: "The authoritative local source",
    },
    {
      kind: "p",
      text:
        "For any specific run, go to the agency that owns the exact ground: the Alaska Department of Natural Resources for state land and State Parks sites, the managing BLM field office (Central Yukon, Eastern Interior) for Interior and Dalton/Denali corridor ground, and the Forest Service ranger district for the Chugach or Tongass. For the Dalton and Denali, check the state DOT road-condition service before you commit, and confirm which corporation owns any parcel near a village or river. Weigh it against current road intel from riders who earned that ground this season -- a report from last week beats any map printed last year.",
    },
  ],
  faq: [
    {
      q: "Is dispersed camping legal in Alaska",
      a: "Yes, broadly. Camping is a generally allowed use on state general-use land and BLM ground, and both national forests permit it. The real limit is not permission, it is road access -- most of Alaska cannot be reached by vehicle at all.",
    },
    {
      q: "Where can you dispersed camp along the Alaska road system",
      a: "The strongest corridors are the Denali Highway (gravel, BLM and state tundra), the Dalton Highway to the Arctic, the Kenai Peninsula, and the Chugach forest roads. Pullouts, gravel bars, and cutlines are the norm on state and BLM ground away from developed sites.",
    },
    {
      q: "Can you drive a van to Southeast Alaska",
      a: "Not directly. Juneau, Sitka, and Ketchikan are not connected to the North American road grid. Reaching the Tongass panhandle means putting your vehicle on the Alaska Marine Highway ferry, and once there the road mileage on each island is short.",
    },
    {
      q: "What is the best time of year to camp in Alaska",
      a: "Roughly early June through the first week of September on the road system. May is mud and break-up, and by late September frost and snow shut the high country and the gravel highways down. It is a one-season state, not a shoulder-season game.",
    },
    {
      q: "What is Native corporation land and can you camp on it",
      a: "Under the Alaska Native Claims Settlement Act, regional and village corporations own about 44 million acres of private land, much of it near communities and rivers. It is not public, it looks no different from the ground next to it, and camping requires the corporation's permission.",
    },
    {
      q: "What are the main hazards camping in Alaska",
      a: "Bears as a daily reality, rising glacial rivers, extreme remoteness with no fuel or signal for hundreds of miles, wildfire smoke in the Interior, and brutal mosquitoes in June and July. Gravel roads like the Dalton also shred tires and windshields -- carry recovery gear and a satellite communicator.",
    },
  ],
};
