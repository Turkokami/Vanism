import type { StateContent } from "./states";

export const STATE_CA: StateContent = {
  code: "ca",
  name: "California",
  answer:
    "California is federal-heavy and state-thin: roughly 46 percent of the state is public land, and nearly all of the dispersed camping sits on BLM desert and national-forest road systems, not in the state parks. The strong ground is the Eastern Sierra, the Mojave and far-desert BLM, and the remote northeast plateau; the coast, the cities, and the state-park system are effectively closed to it. The standard limit is 14 days, a free California Campfire Permit is required for any open flame outside a developed site, and the district office is the only source that beats a bad fire year.",
  blocks: [
    {
      kind: "key",
      text:
        "Dispersed camping in California is legal and abundant on BLM and national-forest land -- 14 days is the working stay limit -- but it is not evenly spread. It concentrates in the Eastern Sierra, the southeastern deserts, and the empty northeast, and is effectively absent along the coast, near the cities, and inside the state parks. Two California rules govern almost every night out: a free California Campfire Permit is required for any flame outside a developed site, and fire closures can shut whole forests with little notice. Check the managing district before you commit a day of driving.",
    },
    {
      kind: "p",
      text:
        "California is the most geographically varied state a rider will work, and its public land reflects that -- roughly 46 percent is federal, split across some of the most permissive and most restrictive agencies in the country. The dispersed ground is excellent and hard to reach at once, because the good parcels sit hundreds of miles apart across private valley, coastline, and city that offer a rider nothing.",
    },
    { kind: "h2", text: "Who owns the ground" },
    {
      kind: "p",
      text:
        "California runs to about 100 million acres, and close to half is federal. That is why the state works for a rider at all -- but the mix inside that federal share matters more than the total, because the agencies behave very differently.",
    },
    {
      kind: "table",
      caption: "Public-land agencies in California and what they mean for a rider",
      head: ["Agency", "Rough scale in CA", "Dispersed camping", "What to check first"],
      rows: [
        ["US Forest Service", "~20M acres, 18 forests", "Permitted on forest roads outside developed sites", "Motor Vehicle Use Map and current fire order"],
        ["Bureau of Land Management", "~15M acres, mostly desert", "Permitted; most abundant open ground in the state", "Field office page for area restrictions"],
        ["National Park Service", "~8M acres, 9 parks", "Almost never roadside; Death Valley and Mojave excepted", "Park backcountry office -- assume no"],
        ["California State Parks", "~1.6M acres", "Developed, reservation-based only", "ReserveCalifornia -- no dispersed here"],
        ["State trust / school land", "Minimal", "Not a practical option for riders", "No AZ-style state-land permit exists"],
      ],
    },
    {
      kind: "note",
      text:
        "The state-land line surprises riders from the interior West. California has almost none of the state trust land Arizona and New Mexico open to camping with a cheap annual permit -- its own land is developed parks or day-use wildlife areas. Public overnight ground here means federal ground.",
    },

    { kind: "h2", text: "Where the dispersed ground actually is" },
    {
      kind: "p",
      text:
        "The strong ground clusters in three zones. A rider who learns them stops fighting the state.",
    },
    {
      kind: "ul",
      items: [
        "The Eastern Sierra -- the US-395 corridor from the Owens Valley north through Bishop and Mono. Inyo National Forest roads and BLM parcels like the Alabama Hills below Mount Whitney make this the densest dispersed camping in the state, though demand has pushed some toward designated sites.",
        "The southeastern deserts -- vast BLM holdings across the Mojave and Colorado Desert, plus the two agency outliers that permit roadside dispersed camping: Death Valley on dirt roads set back from pavement, and Mojave National Preserve at previously used sites. Winter and shoulder ground.",
        "The remote northeast -- the Modoc Plateau, the Warner Mountains, and the country around Lassen. Big open BLM and national forest, almost no competition, at the cost of long gaps between services.",
      ],
    },
    {
      kind: "p",
      text:
        "The thin ground matters just as much. The coast is a near-total blank -- private, state park, or city, with overnight stays funneled into paid campgrounds -- and the Bay Area, Los Angeles basin, and Central Valley offer effectively nothing on public land. Several southern forests carry heavy fire-season closures for months at a time. A run that treats California as uniformly open will fail; the hunt is for the corridors above.",
    },

    { kind: "h2", text: "What riders come to hunt" },
    {
      kind: "p",
      text:
        "California is a state you earn in vertical feet. Its signature is range -- the lowest point on the continent and the highest peak outside Alaska within sight of each other across the Owens Valley.",
    },
    {
      kind: "ul",
      items: [
        "High granite -- the Sierra Nevada crest, alpine passes, and the trailheads feeding the John Muir and Pacific Crest trails. Riders base out of Eastern Sierra sites for long walks and cold nights at altitude.",
        "Deep desert -- Death Valley's below-sea-level basins and dunes, the Mojave's Joshua tree flats and volcanic country, and the superbloom years on the Carrizo Plain. Dark-sky, wide-horizon travel.",
        "Big trees and wet forest -- the redwood coast and Klamath-Trinity country in the far northwest, dense rain-fed forest and steep river canyons.",
        "Overland road systems -- long dirt runs across the Mojave and northeast plateau that reward high clearance and self-recovery gear over any destination.",
      ],
    },

    { kind: "h2", text: "Season and elevation" },
    {
      kind: "p",
      text:
        "California has no single season -- it runs a desert calendar and a mountain calendar in opposition, and the skill is chasing elevation as the year turns.",
    },
    {
      kind: "table",
      caption: "When the good ground is in season by region",
      head: ["Region", "Prime season", "Avoid", "Governing factor"],
      rows: [
        ["Mojave / Death Valley / Colorado Desert", "Nov to Mar", "Jun to Sep, heat over 110F", "Heat and summer flash flood"],
        ["Eastern Sierra low country (Owens Valley)", "Apr to Nov", "Deep winter cold and wind", "Elevation and pass access"],
        ["Sierra high country and passes", "Jul to Oct", "Nov to Jun, snowbound", "Tioga and Sonora passes close in winter"],
        ["Northeast plateau (Modoc, Lassen)", "Jun to Oct", "Winter snow, remoteness", "Elevation and long service gaps"],
        ["Central and southern forests", "Spring and fall", "Peak summer fire closures", "Fire restrictions and heat"],
        ["North coast / Klamath-Trinity", "Late spring to early fall", "Wet winters, late smoke", "Rain, then fire and smoke"],
      ],
    },
    {
      kind: "note",
      text:
        "The Sierra passes are the timing hinge of the whole state. Tioga Pass (SR 120) and Sonora Pass (SR 108) typically close with the first heavy snow around November and do not reopen until late May or June. A spring Sierra crossing is a route that does not exist yet.",
    },

    { kind: "h2", text: "The hazards that define a California run" },
    {
      kind: "p",
      text: "California's hazards are seasonal and, in a bad year, decisive. None is optional to plan around:",
    },
    {
      kind: "ul",
      items: [
        "Heat. The southeast deserts are dangerous from late spring through early fall; Death Valley posts some of the highest air temperatures on Earth. Desert camping is a cold-months activity.",
        "Fire and smoke. The dominant California hazard. Fire season runs roughly June through November, forests issue restrictions and closures with little notice, and smoke can blanket the Sierra and north for weeks even where nothing burns nearby.",
        "Snow and pass timing. The Sierra crest is snowbound over half the year, and the high passes gate north-south travel across the range.",
        "Flash flood. The southeast catches the summer monsoon fringe; desert washes flood fast, and wet playa and clay roads in Death Valley turn impassable.",
        "Remoteness. The northeast and deep desert have long gaps between fuel, water, and cell coverage. Carry recovery gear and treat road intel from other riders as the difference between a good site and a two-day mistake.",
      ],
    },

    { kind: "h2", text: "Legal notes specific to California" },
    {
      kind: "p",
      text:
        "The 14-day limit in a rolling window is standard on BLM and Forest Service ground, counted against an area rather than a site. On top of that baseline, California adds rules that catch out-of-state riders.",
    },
    {
      kind: "ol",
      items: [
        "California Campfire Permit. Free, and required to operate any open flame -- including a backpacking stove or lantern -- on federal land outside a developed campground. A short online course, and rangers do check.",
        "Adventure Pass. Four southern forests (Angeles, San Bernardino, Cleveland, and parts of Los Padres) require a paid parking pass at many sites -- a parking fee, not a camping fee, but it applies where a rider parks.",
        "Eastern Sierra tightening. The most-used areas, including the Alabama Hills National Scenic Area, have moved toward designated sites, permits, and disturbed-ground-only rules. Do not assume the old free-for-all applies.",
        "Park exceptions run both ways. Most national parks ban roadside dispersed camping, but Death Valley allows it on dirt roads set back a mile or more from pavement, and Mojave National Preserve allows it at previously used sites -- both unusual for the Park Service, both fenced with conditions.",
        "State parks are not an option. California State Parks are developed, reservation-based campgrounds -- no dispersed camping in the system.",
      ],
    },

    { kind: "h2", text: "Where the general rule stops -- check the district" },
    {
      kind: "p",
      text:
        "Every figure here is a reliable default and nothing more. In California the exceptions are unusually active: fire orders rewrite access week to week, the Eastern Sierra is mid-transition to designated sites, and desert roads change with a single storm. Before a run, pull the current fire order and Motor Vehicle Use Map from the specific national forest, or the field office page from the specific BLM office, that manages your target. The managing district's word beats any national number, including the ones here.",
    },
  ],
  faq: [
    {
      q: "Can you camp for free on public land in California",
      a: "Yes, on most BLM and national-forest land outside developed campgrounds, at no fee and with no reservation. The strong free ground is the Eastern Sierra, the southeastern deserts, and the northeast plateau. The coast, the cities, and the state parks are not free dispersed ground.",
    },
    {
      q: "How long can you stay at a dispersed site in California",
      a: "The standard is 14 days within a rolling 28-day period on both BLM and Forest Service land, counted against a management area rather than a single spot. Individual districts set shorter limits in high-pressure areas, so confirm the local figure.",
    },
    {
      q: "Do you need a permit for a campfire or stove in California",
      a: "Yes. A free California Campfire Permit is required to run any open flame -- including a camp stove or lantern -- on federal land outside a developed campground. It is a short online course, and in fire season the underlying forest may still ban all flame regardless of the permit.",
    },
    {
      q: "Does California have state trust land you can camp on like Arizona",
      a: "No. California has effectively no state trust land open to recreational camping the way Arizona and New Mexico do. State land here is developed parks or day-use wildlife areas, so public overnight camping in California means federal land.",
    },
    {
      q: "When is the best time to camp in the California desert",
      a: "November through March. The Mojave, Death Valley, and the Colorado Desert are winter and shoulder-season ground; summer heat regularly exceeds 110F and is genuinely dangerous, and the late-summer monsoon can flash-flood desert washes.",
    },
    {
      q: "Can you sleep in your van in a national park in California",
      a: "Almost never on the roadside. Most parks require developed campgrounds. The exceptions are Death Valley, which permits dispersed camping on dirt roads set back from pavement, and Mojave National Preserve, which permits it at previously used roadside sites -- both with their own conditions.",
    },
  ],
};
