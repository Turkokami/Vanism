import type { Block } from "./blocks";

/** How to actually find dispersed camping — Vanism pillar. */
export const PILLAR_HOW_TO_FIND_DISPERSED_CAMPING: Block[] = [
  { kind: "key", text: "Finding dispersed camping is a sequence, not a search. Confirm which public-land layer you are on and what its rule is, scout satellite imagery for an existing clearing or pullout you can reuse without cutting new ground, arrive with two hours of daylight to read it in person, and check level ground, drainage, fire scars, overuse and cell signal before you commit. If the site fails any of those, you drive on -- that discipline is the whole method." },

  { kind: "p", text: "Most riders learn dispersed camping backwards. They open a crowdsourced app, tap a pin, drive to it in the dark, and discover the site is on private land, three vehicles deep, or a rutted mudhole 200 feet past a closed gate. The method that works runs in the opposite order: you establish the rule first, the location second, and the specific pullout last, on the ground, in daylight." },

  { kind: "p", text: "This page is the practical method for locating a legal, level, decent site -- the kind you would return to. It covers how to tell which agency owns the ground, how to scout for existing clearings from a screen before you burn a tank of fuel, what to read in a pullout once you are standing in it, and the single hardest habit to build, which is leaving a wrong site behind you instead of settling for it. It is a checklist run in order, and the order matters more than any individual step." },

  { kind: "h2", text: "Start with the ownership layer, not the map app" },

  { kind: "p", text: "The first question is never \"where is a good spot.\" It is \"who owns this ground and what is their rule.\" A beautiful clearing on private land is a trespass. A perfect pullout inside a national park is a citation. The land underneath the site determines whether the site exists at all, and that ownership is invisible on a standard road map and on most camping apps." },

  { kind: "p", text: "Public land in the West is a patchwork of layers stacked against each other, often with no fence and no sign at the boundary. BLM abuts private abuts state trust abuts national forest, and the transitions are frequently invisible on the ground. The tool that shows them is a land-ownership overlay that renders the parcel boundaries in color. Learning to read it is the foundational skill, because everything after depends on knowing which rule set applies." },

  { kind: "table", caption: "Public-land layers and how to identify them", head: ["Layer", "Dispersed camping", "How it reads on an ownership map", "The trap"], rows: [
    ["BLM", "Usually open, 14-day default", "Typically yellow or tan on standard overlays", "State trust land nearby looks nearly identical"],
    ["National forest", "Usually open, governed by the MVUM", "Green, with a road network drawn in", "A road on the map may be closed on the MVUM"],
    ["State trust / state forest", "Varies by state; some open, some closed", "Blue or a distinct state color, easy to miss", "Often needs a cheap permit or is leased and closed"],
    ["National park / monument", "Roadside almost never; backcountry by permit", "A hard park boundary", "People assume it behaves like a national forest"],
    ["Private inholding", "No, without explicit permission", "White or unshaded gaps inside public land", "Frequently unfenced and unsigned mid-forest"],
  ]},

  { kind: "p", text: "The single most common error is the private inholding: a square-mile parcel of deeded land inside a national forest, unfenced, indistinguishable from the public ground around it. The clearing that looks perfect is often perfect because someone owns and maintains it. The ownership overlay is the only thing that shows the white gap -- nothing on the ground will." },

  { kind: "note", text: "State trust land is the other reliable trap. It abuts BLM constantly, looks the same through a windshield, and is governed by a state land department rather than a federal agency. In some states it is open with an inexpensive annual permit; in others it is leased to a rancher and closed to overnight use entirely. The federal rule you memorized does not apply to it." },

  { kind: "h2", text: "Scout the satellite view before you drive" },

  { kind: "p", text: "Once you know the layer is open, the next step happens on a screen, not a road. Satellite and aerial imagery show you existing clearings, established pullouts, spur roads and the compacted ground of sites other riders have already used -- exactly the ground you want, because reusing a disturbed site is both the rule and the right thing to do." },

  { kind: "p", text: "The discipline here is absolute: you are scouting for sites that already exist, never to make a new one. A dispersed site is legitimate because it sits on ground already compacted and scarred, so reusing it adds no new damage. Pioneering a fresh clearing in undisturbed vegetation is how areas get closed to everyone, permanently. The satellite pass is a search for existing bare ground, full stop." },

  { kind: "h3", text: "What existing sites look like from above" },

  { kind: "p", text: "At the zoom where individual vehicles would be visible, established sites read as small, irregular tan or grey patches hanging off a road -- bare compacted ground where vegetation has worn away. A short spur leading to a widened bare spot is the classic signature, sometimes with a fire ring visible as a dark dot at the center. Clusters of these along one forest road mark an established dispersed corridor, the strongest signal imagery can give you." },

  { kind: "ul", items: [
    "A widened, bare pullout hanging off a road shoulder -- the most common single-vehicle site.",
    "A short spur ending in a compacted clearing, often with a darker fire-ring dot at the center.",
    "A cluster of bare patches along one road, indicating an established dispersed corridor rather than a one-off.",
    "A flat bench above a drainage rather than the drainage bottom itself -- higher ground reads slightly lighter and drier.",
    "The absence of any of the above along a road, which usually means camping there is not established and may not be permitted.",
  ]},

  { kind: "p", text: "Cross-reference every promising patch against the ownership overlay before you note it down. A perfect-looking clearing on a private inholding or across a state-trust boundary is not a site, and the satellite view alone will not tell you which layer it sits on. Two windows side by side -- imagery and ownership -- is the working setup." },

  { kind: "table", caption: "Scouting tools compared", head: ["Tool", "Best for", "What it will not tell you", "Trust level"], rows: [
    ["Land-ownership overlay app", "Which agency owns the parcel and where boundaries fall", "Whether a specific pullout is level or occupied", "High for ownership; boundaries are authoritative"],
    ["Satellite / aerial imagery", "Finding existing clearings, spurs and pullouts", "Current conditions -- imagery is often 1-3 years stale", "High for terrain shape; low for what is there today"],
    ["Official MVUM (Forest Service)", "Which roads are legally open and to what vehicle", "Site quality or whether the pullout is worn out", "Authoritative -- it is the legal document"],
    ["Topographic map", "Slope, drainage, benches, distance from water", "Ownership and legality", "High for terrain; silent on rules"],
    ["Crowdsourced camping-app pins", "A rough hint that someone once stopped nearby", "Legality, current access, or whether it is still there", "Low -- treat as a lead, never as permission"],
  ]},

  { kind: "h2", text: "Confirm the road itself is legally open" },

  { kind: "p", text: "A scouted clearing on open ground is still worthless if the road to it is closed. On national forest land the governing document is the Motor Vehicle Use Map -- the MVUM -- issued per forest and updated annually. It is the legally operative statement of which roads are open, to what class of vehicle, and during which months. A road that appears on a general forest map, in a road atlas, or in a navigation app may be closed on the MVUM, and camping alongside a closed road is not permitted regardless of how established the pullout looks from the satellite pass." },

  { kind: "p", text: "This is the concrete form of a principle that runs through the whole method: when a crowdsourced hint and the governing rule disagree, the rule wins. The MVUM outranks the app, the ownership overlay outranks the pretty imagery, and the district's posted distance outranks the number you memorized. Check the road number and its seasonal dates before you count on reaching the site -- two minutes with the legal document is cheaper than driving to a locked gate." },

  { kind: "note", text: "Many forests permit dispersed camping only within a set distance of a road that is open on the MVUM. A road that is drawn on the map but not open on the current MVUM does not qualify, and neither does the ground beside it. The distinction is invisible from the pullout and explicit on the document." },

  { kind: "h2", text: "Where app pins stop being trustworthy" },

  { kind: "p", text: "Crowdsourced camping apps are useful for exactly one thing: telling you that a rider once stopped somewhere in a general area. Past that they are the least reliable source in the stack. A pin carries no ownership check, so a meaningful fraction sit on private land or across a closed boundary. It carries no date discipline, so a site gated, closed for resource damage, or bought and posted three seasons ago still shows green. And it carries no conditions, so it cannot tell you the road washed out in spring or that twelve vehicles are already there. A pin is a claim that someone stopped there once -- not that stopping there is legal now, or that the site still exists." },

  { kind: "p", text: "This is the exact seam where a pin's staleness becomes a problem an official source cannot fix either. The agency record tells you the rule -- the parcel is open, the limit is 14 days -- but it does not tell you whether the road is passable this week or whether the site is buried under vehicles. This is the one place worth naming the alternative: Vanism records carry the date a rider last confirmed the site on the ground, and anything not confirmed within a set window drops out rather than lingering as a stale green dot. A record with a confirmation date is evidence you can weigh; a pin without one is a rumor. Everywhere else in this method, the governing rule beats the crowd -- check the rule, not the pin." },

  { kind: "h2", text: "Arrive with daylight to spare" },

  { kind: "p", text: "The most avoidable mistake in dispersed camping is arriving in the dark. In daylight you can read the ground, judge the slope, spot the drainage you are about to park in, see the trash the last occupants left, and drive on if the first site is wrong. In the dark you take the first flat-ish spot and discover its problems at 3 a.m., too late to have chosen differently." },

  { kind: "p", text: "The working rule is to have your wheels stopped at least 90 minutes before sunset, with two hours as the target. That margin is not for comfort -- it is what lets you reject the first site and still reach a second with light to read it. A rider who arrives with ten minutes of light has no second option and therefore no real choice." },

  { kind: "table", caption: "Daylight margin and what it buys you", head: ["Arrival before sunset", "What you can still do", "Realistic outcome"], rows: [
    ["2+ hours", "Read the site, reject it, reach a second, level up, cook", "You choose the best of several sites"],
    ["60-90 minutes", "Read the site, maybe reach one alternative", "Workable, but the second option is your last"],
    ["30 minutes", "Park roughly, no second option, no real read", "You accept whatever you first find"],
    ["After dark", "Nothing -- you park by headlight and hope", "Problems surface overnight, too late to move"],
  ]},

  { kind: "note", text: "Sunset in a canyon or on an east-facing slope is functionally earlier than the published time, sometimes by an hour, because the ridge cuts the light before the sun is down. Build the margin against the terrain, not against the almanac." },

  { kind: "h2", text: "Read the pullout before you commit to it" },

  { kind: "p", text: "You have a legal, open parcel, an existing pullout scouted from imagery, and daylight to work in. Now you read the specific spot on foot -- a two-minute walk before you position the vehicle that decides whether you sleep level and dry or slide toward the downhill door all night." },

  { kind: "h3", text: "Level ground" },

  { kind: "p", text: "Eye the slope before you drive onto it. A vehicle you sleep in wants to be within about two degrees of level in both axes -- enough that a marble drifts slowly rather than rolls. Beyond roughly three degrees you feel it in bed and your refrigerator may complain. Find the flattest patch of existing bare ground and note which way it falls, so you can point the vehicle to correct it or plan where the leveling blocks go. Slope is the single most common reason a scouted site gets rejected in person." },

  { kind: "h3", text: "Drainage" },

  { kind: "p", text: "Read where water goes when it rains, because the flattest ground is often the bottom of a drainage -- exactly where you least want to be. Look for the low line through the site, silt or debris fans, the smoothed channel of past runoff. A desert wash is flat, bare and inviting and can run several feet deep within minutes of a storm that fell miles away and out of your sight. Camp on the bench above the drainage, never in it." },

  { kind: "h3", text: "Fire scars, trash and overuse" },

  { kind: "p", text: "The condition of a site tells you whether it is on its way to being closed. A single established fire ring is fine. Multiple scattered fire scars, blackened rocks, and a widening ring of bare ground mean the site is overused and heading toward the condition that gets an area shut. Trash, toilet paper, and fire rings full of cans are the markers land managers photograph when they build a closure case. You can camp in a worn site -- reusing disturbed ground is the point -- but a site that has crossed into damage is a signal the whole corridor is under pressure." },

  { kind: "table", caption: "Red flags that mean keep driving", head: ["What you see", "What it means", "Action"], rows: [
    ["Fresh tire tracks into undisturbed vegetation", "Someone recently pioneered new ground here", "Do not extend it; use only the older bare ground or leave"],
    ["Site sits in the low line of a wash or drainage", "Flash-flood exposure", "Move to the bench above; do not camp in it"],
    ["Multiple scattered fire scars, blackened rock", "Overused and degrading toward closure", "Usable but fragile; better options likely nearby"],
    ["Toilet paper, buried waste, scattered trash", "Poorly used site, active enforcement risk", "Leave it better or drive on"],
    ["No bar of signal and you need to work or check in", "You are committing to being unreachable", "Confirm you can live with that before you stop"],
    ["White gap on the ownership overlay under the site", "Private inholding", "Not a site -- do not stop"],
    ["Slope you can feel walking across it", "Well over two degrees; poor sleep and appliance faults", "Reject unless you can correct it with blocks"],
    ["Every flat spot already occupied", "At capacity; squeezing in creates a new site", "Drive on -- do not create overflow ground"],
  ]},

  { kind: "h2", text: "Check signal before you commit, not after" },

  { kind: "p", text: "Cell signal is a siting decision, and it belongs in the read of the pullout rather than as a discovery you make after dark. If you need to work, navigate out, check weather, or reach anyone, confirm signal while you still have daylight and a second option. Terrain is the deciding factor -- a ridge between you and the tower removes signal that flat open ground half a mile away would hold, and a site 400 feet up onto the bench may hold a bar the pullout below loses entirely." },

  { kind: "p", text: "Check signal standing at the exact spot you would park, not at the road you drove in on, because the two can differ by a full bar. Deciding you can accept no signal is a legitimate choice; discovering it at 6 a.m. with a deadline is not." },

  { kind: "note", text: "A weather check before you lose signal is the highest-value thing a bar of connection buys you at a dispersed site. If a storm is coming and you are near a drainage, that changes where you park -- and it is worthless once you are committed in the dark." },

  { kind: "h2", text: "Distance from the road and distance from water" },

  { kind: "p", text: "Two distances govern where within an open area you may legally stop, and both cut against the instinct to tuck as far back and as close to the creek as possible. They are among the more actively enforced rules, because both protect things that visibly break when ignored." },

  { kind: "p", text: "Distance from the road is a maximum, not a minimum. Forest Service districts commonly permit camping only within a set distance of an open road -- often 150 or 300 feet -- and anything beyond that is prohibited cross-country travel. Be off the road and out of the travel lane, but do not strike across open ground to a hidden spot 500 feet in. Use the existing spur that already reaches the site." },

  { kind: "p", text: "Distance from water is a minimum, and the one riders most want to break because the flattest bench is often right at the water. Nearly every district requires camping at least 100 to 200 feet from any stream, lake, spring or stock tank -- for water quality and wildlife access, since animals will not approach water a vehicle is parked on. The bench set back from the water is both the legal site and, over a season, the better one." },

  { kind: "table", caption: "Working distances for siting", head: ["From", "Typical requirement", "Direction", "Why it exists"], rows: [
    ["Open road", "Within 150-300 ft (district-set)", "Maximum -- stay within it", "Anything farther is prohibited cross-country travel"],
    ["Water source", "At least 100-200 ft", "Minimum -- stay beyond it", "Water quality and wildlife access to the water"],
    ["Developed campground / trailhead", "Often at least 1 mile", "Minimum -- stay beyond it", "Prevents using paid facilities without paying"],
    ["Existing bare ground", "Zero -- reuse it", "Use it exactly", "New ground is the damage that closes areas"],
  ]},

  { kind: "h2", text: "The discipline of driving on" },

  { kind: "p", text: "Everything above collapses into one habit, and it is the hardest to build: when a site is wrong, you drive on. You invested an afternoon, a tank of fuel and a rough forest road to reach it, and it is occupied, or on a slope, or sitting in a wash, or the ownership overlay shows a white gap under it. The sunk cost pulls hard toward settling, and the rider who settles sleeps badly, or illegally, or in the path of water." },

  { kind: "p", text: "This is exactly why the daylight margin and the scouted second option exist -- they are what make driving on possible. Scout three candidate clearings from imagery instead of one, arrive with two hours of light, and rejecting the first site costs you twenty minutes to reach the second with time to read it. Scout one pin and arrive at dusk and you have no ability to drive on, so the discipline was lost hours earlier, at the planning stage, not at the pullout. The riders who consistently sleep on good ground are not luckier. They front-loaded the choices that let them walk away." },

  { kind: "note", text: "A scouted second site and two hours of daylight are what make \"drive on\" a real option instead of a slogan. Build both into the plan and rejecting a wrong pullout costs twenty minutes. Skip them and you will accept the first flat-ish spot you find, in the dark, with all its problems still hidden." },

  { kind: "h2", text: "What this method cannot tell you" },

  { kind: "p", text: "This is the general framework, and it is wrong somewhere in every district. The distances are district-set defaults, not statutes. One forest permits camping along marked corridors only; the next does not mark them at all. An ownership overlay is authoritative on boundaries but silent on the closure a field office issued on Tuesday. Satellite imagery showing a perfect clearing may be three years old, and the clearing may now be gated, burned, or under water behind a new beaver dam." },

  { kind: "p", text: "The authoritative source for the rule is the district office or field office with jurisdiction over the specific parcel -- not the state, not the general region, the office that writes the rules for that ground. Pull the current MVUM for Forest Service land and read the specific road number and its seasonal dates. Check the district page for current fire restrictions and area closures, which change faster than anything else and appear in no app promptly. And accept that the one thing no official source publishes -- whether the road is passable this week and whether the site is empty tonight -- comes only from someone who was recently on it. The method gets you to good ground reliably. The last mile of certainty is always a phone call and a recent report." },
];
