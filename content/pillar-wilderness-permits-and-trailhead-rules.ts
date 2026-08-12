import type { Block } from "./blocks";

/** Wilderness permits and trailhead rules -- Vanism pillar. */
export const PILLAR_WILDERNESS_PERMITS_AND_TRAILHEAD_RULES: Block[] = [
  { kind: "key", text: "Most hiking on public land needs no permit, but three things change that: crossing into designated Wilderness, entering National Park backcountry, and hitting a trailhead that runs a quota. Designated Wilderness bans vehicles and bikes, caps group size, and often requires a permit; day-use permits are usually free and self-issued at the trailhead, while overnight and quota permits can require a reservation booked weeks to six months ahead. The trailhead itself may need a parking pass and may or may not allow you to sleep in the lot -- and those rules are set by different authorities than the trail." },

  { kind: "p", text: "A hike that is legal to walk can still involve three separate permissions stacked together: one for setting foot on the trail, one for staying overnight, and one for leaving the vehicle at the trailhead while you do. Each is set by a different rule-maker with its own lead time, and the failure mode is the same -- a rider plans the walk carefully and gets stopped by the paperwork or the parking." },

  { kind: "p", text: "The confusion is structural. \"Public land\" is not one legal category. A national forest, a designated Wilderness inside that same forest, a National Park, and the trailhead lot at the edge of all of it can be four jurisdictions with four rule sets within a mile of each other. The word on the sign matters: \"Wilderness\" with a capital W is a specific legal designation, not a description of remote country." },

  { kind: "p", text: "This page separates the layers -- what changes in designated Wilderness, how day-use and overnight permits differ, how quota and lottery systems work and how far ahead to plan them, the rules for parking and sleeping at a trailhead, and how National Park backcountry differs again. It states the general rule in each case and says where it stops being reliable." },

  { kind: "h2", text: "Designated Wilderness, and what the capital W changes" },

  { kind: "p", text: "Designated Wilderness is land Congress has placed under the Wilderness Act of 1964. It sits inside land already managed by the Forest Service, BLM, National Park Service, or Fish and Wildlife Service, and overlays a stricter rule set on top of whatever that agency normally does. When you cross the boundary -- usually a routed wooden sign at the trailhead or at the line itself -- the rules change immediately and predictably." },

  { kind: "p", text: "Four changes are near-universal across every Wilderness in the system, regardless of which agency administers it." },

  { kind: "ul", items: [
    "No motorized or mechanized travel. That means no vehicles, no e-bikes, and no ordinary bicycles -- a bike is mechanized transport under the Act even though it has no motor. Wheelbarrows, game carts, and drones are out for the same reason. You are on foot or on a pack animal.",
    "Group-size limits. Most Wilderness areas cap party size, commonly at 12 people, sometimes lower, and often set a combined limit on people plus stock (for example, 12 heartbeats total, or 8 people and 10 animals). Splitting a large group across two trailheads to skirt the limit is itself a violation in many areas.",
    "Camp and campfire setbacks. Camping and fires are typically banned within 100 to 200 feet of lakes, streams, and trails, and specific high-use lakes or meadows are often closed to camping entirely. Campfires are frequently banned above a stated elevation or prohibited in the whole area during fire season.",
    "Permit requirements on many, not all. A large share of Wilderness areas require a permit for entry, for overnight stays, or for both. Many do not require anything. Which is which is set locally, and it is the single fact you must confirm before you go.",
  ]},

  { kind: "p", text: "The mechanized-travel rule catches people because it applies to how you travel, not just what you drive. A gravel road may run right to the boundary and stop dead at it, and your bike ride ends at that sign whether or not the tread continues. Plan the wheels to end at the line and the feet to begin there." },

  { kind: "note", text: "The boundary is a legal line, not a fence, and it does not always follow the obvious terrain feature. On popular trails it is signed; on lightly used ones it may be marked only on the map. If a route brushes a Wilderness edge, know where the line falls before you ride a bike or bring stock anywhere near it." },

  { kind: "h2", text: "Day-use versus overnight: two different permits" },

  { kind: "p", text: "The most useful distinction in this whole subject is between a day-use permit and an overnight permit. They are governed separately, priced separately, and planned on completely different timelines. A trail can require one, both, or neither, and requiring a day permit tells you nothing about whether it also requires an overnight one." },

  { kind: "h3", text: "Day-use permits" },

  { kind: "p", text: "A day-use permit covers walking in and out the same day. Where required, it is most often free and self-issued at the trailhead. A few high-demand day hikes instead run a day-use quota with a reservation or lottery, but that is the exception. For the large majority of trails, day use requires nothing beyond legal parking." },

  { kind: "h3", text: "Overnight permits" },

  { kind: "p", text: "An overnight or backcountry permit covers sleeping out. This is where quotas, fees, and reservation windows concentrate, because overnight use is what agencies meter to protect campsites and water. An overnight permit almost always covers day use too, so you do not need both -- but the reverse is never true: a day permit does not let you stay the night." },

  { kind: "table", caption: "Day-use versus overnight permits", head: ["Dimension", "Day-use permit", "Overnight / backcountry permit"], rows: [
    ["What it covers", "Entry and exit the same day", "One or more nights in the backcountry"],
    ["Where required", "Some Wilderness and high-use day hikes", "Most Wilderness and all NPS backcountry"],
    ["How obtained", "Usually self-issue at trailhead; free", "Reservation, lottery, or ranger-station issue"],
    ["Typical cost", "Free, or a small day-use fee", "Per-person or per-permit fee, often plus a reservation fee"],
    ["Lead time", "None; get it the morning of", "Days to six months, depending on the quota"],
    ["Quota risk", "Low except on marquee day hikes", "High on popular trails in season"],
  ]},

  { kind: "h2", text: "Quotas and lotteries, and how far ahead to plan" },

  { kind: "p", text: "A quota is a cap on how many permits are issued for a trailhead or zone per day. When demand exceeds that cap in season, the agency rations access, and the rationing method determines how far ahead you must commit. There are four common systems, and knowing which one a trail uses is the difference between a planned trip and a wasted drive." },

  { kind: "table", caption: "Permit rationing systems and lead time", head: ["System", "How it works", "When to act", "Failure mode"], rows: [
    ["First-come reservation", "Permits released on a rolling date, taken until gone", "The instant the window opens, often 6 months out", "Popular dates sell out in minutes"],
    ["Advance lottery", "Apply in a window; winners drawn by random draw", "During the application window, weeks to months ahead", "Miss the window and there is no second chance"],
    ["Daily/walk-up lottery", "Next-day permits drawn each afternoon", "In person or online 1-2 days before", "Low odds on peak weekends; needs flexibility"],
    ["Walk-up / self-issue", "Unreserved permits at the trailhead or ranger station", "The morning of, early", "Gone by mid-morning at busy trailheads"],
  ]},

  { kind: "p", text: "The planning rule follows from the table. For a marquee trail on a summer weekend -- a named National Park loop, a Wilderness with a hard quota -- assume the reservation or lottery window is the binding constraint and work backward from it. Six months is the common release horizon for the most contested permits; some open on a fixed calendar date and are gone the same morning." },

  { kind: "p", text: "Most trails are not that. For the majority of Wilderness and forest trails, a walk-up self-issue permit obtained the morning of the hike is all you need, and arriving early is the whole strategy. The mistake is treating a marquee trail like an ordinary one -- that is the expensive direction to get it wrong." },

  { kind: "note", text: "Many quota systems hold back a portion of each day's permits for walk-up issue the day before or the morning of, even when advance permits are gone. If you missed the reservation, the walk-up pool is the fallback -- but it rewards being physically at the ranger station early, not refreshing a website." },

  { kind: "p", text: "Most federal advance permits now flow through a single reservation platform, but the rules behind it -- group size, number of nights, which campsites or zones -- are still set by the local unit. Read the permit's own conditions, not just the booking screen." },

  { kind: "h2", text: "Self-issue permits at the trailhead" },

  { kind: "p", text: "A self-issue or self-registration permit is the workhorse of the Wilderness system: a kiosk at the trailhead with a pad of two-part forms and a drop box. Where a trail requires a permit but runs no quota, this is how it is issued. It is free, it takes two minutes, and skipping it is a citable violation even though nobody is watching you fill it out." },

  { kind: "ol", items: [
    "Fill out the tag completely -- party size, entry and planned exit dates, destination or route, and vehicle plate if asked.",
    "Tear the form along the perforation. One half goes in the drop box; the other you carry, usually attached to a pack strap where a ranger can read it.",
    "Take one permit per group, not per person, unless the form says otherwise.",
    "If a fee is posted, use the envelope provided and follow the payment instructions exactly -- some stations take cash only.",
    "Note any conditions printed on the tag: fire status, group-size cap, food-storage requirement. The permit and the current rules are often printed on the same sheet.",
  ]},

  { kind: "h2", text: "Parking and overnight rules at the trailhead" },

  { kind: "p", text: "The trailhead lot is governed separately from the trail, and it carries two questions that trip riders up more than the permit itself: whether you need a pass to park, and whether you are allowed to sleep there overnight before or after the hike. Neither answer follows from the trail's permit status." },

  { kind: "h3", text: "Parking passes" },

  { kind: "p", text: "Many Forest Service trailheads in developed recreation areas require a parking pass -- a regional day pass, an annual forest pass, or the federal interagency annual pass. Others are free. The requirement is posted, and an unpaid vehicle at a fee site collects a notice regardless of whether you knew. National Park trailheads sit inside the park entrance fee; you have already paid to be there." },

  { kind: "h3", text: "Sleeping at the trailhead" },

  { kind: "p", text: "Whether you can spend the night in the lot -- arriving late to start at dawn, or sleeping off the descent before driving -- depends entirely on the managing agency and the specific site, and it is the rule most often assumed rather than checked." },

  { kind: "table", caption: "Overnight-at-trailhead, by managing authority", head: ["Managing authority", "Overnight in the lot", "What to check"], rows: [
    ["National Forest trailhead", "Often allowed; some post a limit or prohibit it", "Posted signs; whether a pass or fee applies to overnight"],
    ["BLM trailhead", "Frequently allowed, subject to the area stay limit", "Field office rules; dispersed-use signage"],
    ["National Park trailhead", "Almost never; roadside and lot sleeping is prohibited", "Park backcountry office -- assume no"],
    ["State park trailhead", "Usually prohibited outside a designated campground", "State park regulations; day-use-only postings"],
    ["Popular / permit-quota trailhead", "Often restricted or banned to control crowding", "The permit conditions and posted lot rules"],
  ]},

  { kind: "p", text: "The reliable default: on Forest Service and BLM trailheads, overnight in the vehicle is frequently tolerated, subject to the distinction that governs all public-land overnighting -- parking is tolerated, camping is not. Stay inside the vehicle, put nothing outside it, and the question rarely arises. On National Park and most state park trailheads, assume it is prohibited unless a sign says otherwise, and plan to sleep outside the boundary." },

  { kind: "note", text: "\"No overnight parking\" and \"no camping\" are different postings with different intents. The first bans leaving the vehicle at all overnight, often to keep a lot clear for dawn day-users or to deter break-ins. The second allows sleeping in the vehicle but bans setting up outside it. Read which one is posted." },

  { kind: "h2", text: "How National Park backcountry differs again" },

  { kind: "p", text: "National Park Service backcountry is its own system and the strictest of the lot. The governing assumption inverts: on Forest Service and BLM land you may camp unless told otherwise, while in a National Park you may not camp in the backcountry unless a permit specifically authorizes it. Nearly every park requires a permit for any overnight off the front-country campgrounds, and many meter it tightly." },

  { kind: "p", text: "Three features distinguish Park backcountry from Wilderness on forest or BLM land." },

  { kind: "ul", items: [
    "Designated sites or zones. Many parks assign you to a specific campsite or a specific zone for each night, rather than letting you camp anywhere legal. Your permit names where you sleep, and camping elsewhere is a violation even if the ground looks identical.",
    "Food storage is mandatory and specified. Approved bear canisters or provided food-storage lockers are required in most park backcountry, not merely recommended. Rangers check for them at permit issue and in the field, and an improperly stored food violation is among the most commonly cited.",
    "Itinerary lock. The permit ties you to dates and often to a route. Changing your plan mid-trip is limited, and the permit is checked against where you actually are.",
  ]},

  { kind: "p", text: "Many parks also contain designated Wilderness, so the two rule sets stack: capital-W restrictions on mechanized travel and group size, plus the Park's permit, site-assignment, and food-storage regime on top. When both apply, the stricter rule wins on every point." },

  { kind: "table", caption: "Backcountry rules by land type", head: ["Land type", "Default for overnight", "Permit", "Where you camp"], rows: [
    ["National Forest (non-Wilderness)", "Allowed unless posted", "Often none", "Dispersed, within the rules"],
    ["Forest or BLM Wilderness", "Allowed; permit common", "Self-issue or quota", "Dispersed, with setbacks from water and trail"],
    ["BLM (non-Wilderness)", "Allowed unless posted", "Usually none", "Dispersed, within stay limits"],
    ["National Park backcountry", "Prohibited unless permitted", "Required, often quota", "Assigned site or zone"],
    ["National Park front country", "Developed campgrounds only", "Reservation", "Numbered campsite"],
  ]},

  { kind: "h2", text: "Campfires, camping distance, and stock" },

  { kind: "p", text: "Beyond the permit, three on-the-ground rules recur across nearly every Wilderness and backcountry unit -- the ones that turn a legal permit into a legal camp. They are set locally, but consistent enough in shape to plan around." },

  { kind: "h3", text: "Campfire rules" },

  { kind: "p", text: "Campfires in Wilderness are the most restricted form of fire on public land. Beyond the seasonal fire-restriction stages that apply everywhere, Wilderness areas commonly ban fires above a stated elevation -- often between 9,000 and 10,400 feet -- because wood at altitude does not regenerate. Specific drainages and lakes are frequently closed to fire year-round. A stove with a shutoff valve survives all of this; a route built around campfires is fragile in exactly the high country people most want them." },

  { kind: "h3", text: "Camping-distance setbacks" },

  { kind: "p", text: "The setback rule -- camp at least 100 to 200 feet from lakes, streams, and the trail itself -- protects water quality, wildlife access, and the experience of the next party. High-use lakes often have a larger setback or a total camping ban within a quarter-mile, with camping pushed to designated sites away from the shoreline. Confirm the specific figure for the area; the 100-to-200-foot range is the working assumption, not a guarantee." },

  { kind: "h3", text: "Stock and pack animals" },

  { kind: "p", text: "Where horses and pack stock are allowed, they carry their own layer: stock counts against the group-size limit, is often barred from fragile meadows, and is subject to certified weed-free feed rules that keep invasive plants out. That rule set is separate from the hiker permit and must be confirmed on its own." },

  { kind: "h2", text: "Fees, and what the money covers" },

  { kind: "p", text: "Permit costs are small relative to the trip but confusing in structure, because a single trailhead can involve two or three separate charges that go to different places. Separating them prevents surprise at the kiosk." },

  { kind: "table", caption: "Common fees at a permitted trailhead", head: ["Charge", "What it is", "Typical range", "Notes"], rows: [
    ["Self-issue permit", "Wilderness day or overnight registration", "Free", "Most self-issue permits carry no fee"],
    ["Reservation fee", "Booking charge on the platform", "A few dollars per permit", "Non-refundable even if plans change"],
    ["Per-person permit fee", "Backcountry use fee, often per night", "Small per person per night", "Concentrated in high-demand parks and Wilderness"],
    ["Trailhead parking", "Day pass or annual forest pass", "Day pass small; annual pass moderate", "Interagency annual pass covers most sites"],
    ["Park entrance", "Access to a National Park", "Per-vehicle, valid several days", "Covers the trailhead; backcountry permit is separate"],
  ]},

  { kind: "p", text: "For a rider running a full season, the federal interagency annual pass usually pays for itself quickly, because it covers standard amenity and day-use parking fees across the federal agencies. It does not cover backcountry permit fees, reservation fees, or state land -- those are always separate." },

  { kind: "h2", text: "Planning the permit before the route" },

  { kind: "p", text: "For any trip where a permit might bind, check the permit first, not last, because it is the constraint with the longest lead time and the least flexibility. The route can adapt to the permit; the permit rarely adapts to the route. This is the sequence that keeps a trip from failing on paperwork." },

  { kind: "ol", items: [
    "Identify every jurisdiction the route crosses -- forest, Wilderness, park, state land -- and the specific managing unit for each. A single day hike can cross more than one.",
    "For each unit, confirm whether a day-use permit, an overnight permit, or neither is required, and whether a quota applies.",
    "If a quota applies, find the rationing system and its window -- reservation date, lottery application dates, or walk-up only -- and put that date on the calendar first.",
    "Confirm group-size limits before you finalize the party, and split or trim the group to fit rather than planning to skirt it.",
    "Check the trailhead parking requirement and whether overnight in the lot is allowed, separately from the trail permit.",
    "Confirm current fire restrictions and any campfire-elevation or area closures, which change within a season and are set at the district level.",
    "Confirm current conditions -- snowpack, water availability, road access to the trailhead -- from someone recently on the ground, because none of it appears in the permit.",
  ]},

  { kind: "p", text: "The first six steps come from the official record, which the managing unit publishes authoritatively. The seventh is the one the record does not cover. An agency will tell you a permit is available for a date; it will not tell you the approach road is still gated by snow, the creek crossing is running high, or the water source the route depends on has gone dry." },

  { kind: "key", text: "This is the seam Vanism was built for. The permit tells you a trip is legal; it does not tell you it is currently passable. Every objective carries an access status and the date a rider last confirmed it on the ground, and anything not confirmed recently drops out of the record rather than being shown with a caveat. A permit is permission; a dated check-in is evidence the road, the gate, and the water were there last week." },

  { kind: "h2", text: "Common ways a legal hike goes wrong" },

  { kind: "p", text: "The permit system fails predictably, and the failures cluster into a short list -- each avoidable with one check made in advance." },

  { kind: "ul", items: [
    "Booking the trail but not the trailhead. The permit is in hand and the lot is full or fee-required and unpaid. Parking is a separate rule; confirm it separately.",
    "Assuming a day permit covers the night. It never does. If plans might extend to an overnight, get the overnight permit up front.",
    "Bringing a bike or a game cart to a Wilderness boundary. Mechanized travel stops at the line. Plan the wheels to end there.",
    "Oversizing the group. A party of 15 at a trailhead with a 12-person cap cannot legally enter as one group. Confirm the cap before inviting people.",
    "Missing the lottery window. Advance lotteries have no second chance; the application dates are the hardest deadline on the trip.",
  ]},

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is the general framework, and the general framework is set nationally while the binding rules are set locally. Group-size caps, campfire elevations, camping setbacks, quota sizes, parking fees, and overnight-in-the-lot rules are all decided by the specific district office, park, or field office that manages the ground -- and any one can differ from the national default without notice." },

  { kind: "p", text: "The managing unit is the authority: the ranger district office for a Wilderness, the park's backcountry permit office for a National Park, the BLM field office for BLM ground. It is a phone call, usually answered by someone who issues these permits daily, and it is the one source that reflects the quota that applies this year, the fire restriction issued this week, and whether the road to the trailhead is open. Confirm the permit, the parking, and the current conditions there before you commit the drive." },
];
