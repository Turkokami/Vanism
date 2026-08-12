import type { Block } from "./blocks";

/** Internet and cell signal off the grid -- systems pillar. */
export const PILLAR_INTERNET_AND_CELL_SIGNAL_OFF_GRID: Block[] = [
  { kind: "key", text: "You can work remotely from public land, but not from anywhere on it. A phone on one carrier plus a second carrier on a different network covers most improved dispersed ground; a booster helps only where a weak signal already exists; and Starlink Roam fills the rest at a real cost of 40 to 60 watts and a clear view of sky. The reliable method is to plan the route around known coverage rather than to carry gear and hope." },

  { kind: "p", text: "Staying connected off the grid is a coverage problem before it is a hardware problem. The single largest determinant of whether a video call holds at a given site is which cellular network reaches that site, and that is set by tower placement and terrain, neither of which any device you carry can change. Gear extends a signal that exists. It does not manufacture one where none arrives." },

  { kind: "p", text: "This page is written for riders who have to be reachable on someone else's schedule -- a standup at nine, a client who expects a reply within the hour, a deploy that cannot wait for the next town. Someone posting photos in the evening can tolerate a dead afternoon; someone on payroll cannot. The difference between the two is planning, redundancy, and honesty about where the working day simply cannot happen. What follows covers the cellular reality first, then boosters, then satellite, then how to route around coverage rather than react to its absence." },

  { kind: "h2", text: "The cellular reality, stated plainly" },

  { kind: "p", text: "Most dispersed camping within a reasonable drive of a paved highway has usable cellular signal from at least one carrier. The signal thins with distance from the road corridor and with terrain -- a canyon, a north slope, timber between you and the tower -- and it fails first for data and last for a plain voice call. A bar that carries a phone call will frequently not carry a video meeting, and that gap is where most working riders get caught." },

  { kind: "p", text: "The honest general rule: a site chosen for a view is often a site chosen against signal, because the terrain that makes a view also blocks towers. An open bench with a clear line back toward the valley and its infrastructure outperforms a dramatic canyon site by a wide margin, and the working rider reads the canyon as a workweek liability." },

  { kind: "h3", text: "The three national networks behave differently" },

  { kind: "p", text: "In the United States three networks matter off pavement, and they are not interchangeable. Their differences on remote ground are larger than their marketing suggests and matter more than the price gap between them." },

  { kind: "table", caption: "Carrier character on remote public land", head: ["Network", "Rural low-band coverage", "Typical off-grid strength", "Where it disappoints"], rows: [
    ["Verizon", "Broadest low-band footprint in the rural West", "The default first carrier for most riders", "Congestion near popular trailheads and in valleys behind ridgelines"],
    ["AT&T", "Strong low-band, different tower siting from Verizon", "The best complement to a Verizon line -- covers different holes", "Patchier in the interior Mountain West than its map implies"],
    ["T-Mobile", "Improved but still weakest low-band reach in remote terrain", "Excellent speed where present, often near highways and towns", "Falls off fastest with distance from a corridor; weakest third carrier"],
  ]},

  { kind: "p", text: "The word doing the work above is low-band. High-band and mid-band spectrum carry fast data but travel poorly and penetrate terrain badly; low-band travels far and bends around obstacles, and it is what reaches you twenty miles down a forest road. A network's rural reach is essentially its low-band reach, which is why a carrier that feels fast in a city can be the one that drops you in the backcountry." },

  { kind: "note", text: "Coverage maps are the carrier's own modelled prediction, not measured truth, and optimistic at the edges by design. Treat the map as the outer boundary of where signal might exist, never a promise that it does. Crowd-sourced measured-coverage tools are closer to reality: they show where a real phone actually registered a signal." },

  { kind: "h2", text: "Why a second carrier is the cheapest redundancy you can buy" },

  { kind: "p", text: "If you take one decision from this page, take this one: a second cellular line on a different network is the highest-value connectivity purchase a working rider makes, and it costs less than almost any piece of hardware. Two carriers with different tower siting cover each other's holes -- where Verizon dies behind a ridge, AT&T frequently lives, because the two companies did not build their towers in the same places." },

  { kind: "p", text: "The math is favourable. A prepaid or data-only second line runs a fraction of a primary plan. A booster amplifies only a signal already arriving. A Starlink dish plus its roaming service costs far more up front and every month after. Ranked by dollars spent against holes closed, the second carrier wins decisively, and it should be bought before any antenna or dish." },

  { kind: "table", caption: "Connectivity spend ranked by value on remote ground", head: ["Option", "Rough up-front cost", "Rough monthly cost", "What it actually buys"], rows: [
    ["Second carrier (data line)", "Cost of a device or hotspot", "20 to 45 USD", "Coverage where your first network has none -- the single biggest gain"],
    ["Cell booster + antenna", "300 to 550 USD", "None", "Turns a marginal existing signal into a usable one; nothing where signal is zero"],
    ["Starlink Roam (standard dish)", "300 to 500 USD", "50 to 165 USD depending on plan and pause use", "Service where no cellular reaches, given sky view and power"],
    ["High-gain external antenna alone", "50 to 200 USD", "None", "Better reception than the phone's internal antenna in fringe areas"],
  ]},

  { kind: "p", text: "Two lines can live in one phone with dual eSIM, but a working rider is better served putting the second line in a dedicated hotspot or a second phone, so a dead primary network does not also take out the device running the meeting." },

  { kind: "h2", text: "Boosters and external antennas: what they can and cannot do" },

  { kind: "p", text: "A cellular booster is widely misunderstood, and the misunderstanding costs riders money. It receives the existing outside signal on an external antenna, amplifies it, and rebroadcasts it inside the vehicle. Every word of that depends on the first step: there must be an outside signal to receive. A booster cannot create signal and cannot help at all where the outside reading is a true zero." },

  { kind: "p", text: "What a booster does well is convert marginal into usable. If standing outside with the phone held high yields one flickering bar, a booster with a roof-mounted antenna can often turn that into a stable connection at the desk inside. What it will never do is turn nothing into something, and any booster sold on that promise is sold dishonestly." },

  { kind: "table", caption: "What a booster changes and what it does not", head: ["Outside signal at the site", "With a booster", "Verdict"], rows: [
    ["Strong (several bars)", "Marginally faster, rarely necessary", "Booster adds little; you already have signal"],
    ["Marginal (one flickering bar)", "Often becomes stable and usable", "This is exactly the case a booster is for"],
    ["Very weak (signal only outside, held high)", "Sometimes recoverable to a working call", "Best case for a high-gain directional antenna feeding the booster"],
    ["None (true zero, no registration)", "Still nothing", "No booster helps; this is a satellite or relocation problem"],
  ]},

  { kind: "h3", text: "Antennas matter more than the booster brand" },

  { kind: "p", text: "The antenna does most of the real work. An omnidirectional antenna receives from every direction and needs no aiming, which suits a rider who moves often and does not know where the tower is. A directional antenna -- a panel or yagi -- must be pointed at the tower but delivers substantially more gain once it is, and in deep fringe that can be the difference between a working day and a drive to town. The trade is convenience against reach." },

  { kind: "ul", items: [
    "An omnidirectional roof antenna is the sensible default: no aiming, works while driving, gives up some gain for that convenience.",
    "A directional panel antenna, mounted on a telescoping pole and aimed by trial, extracts the most from a fringe site but must be re-aimed each time you move.",
    "Aim a directional antenna by the phone's dBm reading, not the bar icon -- bars are too coarse to aim by. Closer to zero is stronger; -95 dBm beats -115 dBm.",
    "Cable length and quality cost you signal. Every extra foot of thin coax between antenna and booster is loss; keep the run short and use the specified cable.",
  ]},

  { kind: "note", text: "Read the signal in dBm, not in bars; on most phones it is in a diagnostics or status menu. A reading between -50 and -90 dBm is strong, -90 to -105 is workable, -105 to -115 is fringe where a booster earns its price, and below about -120 the connection is effectively unusable no matter what you attach to it." },

  { kind: "h2", text: "Satellite internet: Starlink Roam in honest terms" },

  { kind: "p", text: "Starlink Roam is the reason working from genuinely remote ground became possible at all. It delivers real broadband -- routinely 40 to 150 Mbps down -- from a dish that talks to low-orbit satellites, in places where no cellular tower reaches for fifty miles. For a rider whose income depends on a connection, it is often the difference between a site being usable and not. It is also power-hungry, sky-dependent, weather-sensitive, and not cheap -- each of which deserves an honest paragraph." },

  { kind: "h3", text: "Power draw is the constraint that surprises people" },

  { kind: "p", text: "The standard Starlink dish draws meaningfully more power than any other item in a typical van's electrical system except an air conditioner. In steady use it pulls roughly 40 to 60 watts, spiking higher during boot, self-orient, and when it runs its dish heater in the cold. Over a working day that is a continuous load on the house battery, and the single figure most riders underestimate before they buy." },

  { kind: "table", caption: "Typical connectivity power draw (12V house system)", head: ["Device", "Idle / standby", "Active use", "Notes"], rows: [
    ["Phone (cellular data)", "1 to 2 W", "3 to 7 W charging under load", "Negligible against the battery bank"],
    ["Mobile hotspot / second line", "1 to 3 W", "4 to 8 W", "Small; leave it on all day without concern"],
    ["Cell booster", "2 to 5 W idle", "8 to 15 W transmitting hard", "Modest; runs continuously"],
    ["Starlink Roam (standard dish)", "20 W partial sleep", "40 to 60 W steady", "The dominant load; spikes on boot and self-orient"],
    ["Starlink dish heater (snow/ice)", "n/a", "up to 75 W added while heating", "Cold-weather surprise; can double the effective draw"],
  ]},

  { kind: "p", text: "In amp-hours the steady figure lands near 4 to 5 amps at 12 volts, so an eight-hour working day on Starlink alone consumes 35 to 45 amp-hours before anything else in the van draws a watt. A modest 100-amp-hour lithium bank cannot both run that and carry a laptop, a fridge and lights through the night without solar keeping pace. The practical entry point for full-time Starlink work is roughly 200 amp-hours of lithium and 200 or more watts of solar, and more in winter when the panels underperform and the heater runs." },

  { kind: "h3", text: "Obstruction and tree cover decide whether it works at all" },

  { kind: "p", text: "Starlink needs a clear view of the sky and is genuinely unforgiving about obstruction. The dish talks to satellites moving across a wide arc, and anything between it and that arc -- a branch, a canopy edge, a ridgeline -- causes a brief dropout each time a satellite passes behind the obstacle. A single overhanging tree that seems minor to the eye can produce a dropout every few minutes, which is survivable for email and fatal for a video call." },

  { kind: "p", text: "This collides directly with where riders want to camp. The shaded canyon and the spot under a pine -- pleasant in summer heat -- are frequently the places Starlink cannot hold a stable link. The rider who needs the dish learns to choose the open site, the meadow edge, the exposed bench, and to accept the sun and wind that come with a clear sky. The dish's app has an obstruction check that maps the sky view; run it before setting up, not after a call drops." },

  { kind: "note", text: "The clear-sky requirement often points at the same terrain as a good cellular site -- open, elevated, wide horizon. But it points opposite to a shady, comfortable camp, and during the workweek the sky wins." },

  { kind: "h2", text: "Winter and heat behaviour" },

  { kind: "p", text: "The dish handles cold but pays for it in power. Its built-in heater melts snow and ice off the face automatically, which keeps it working through a storm but adds up to 75 watts on top of the normal draw for as long as it runs -- a heavy tax on a winter battery bank that is already short on solar. Snow accumulation faster than the heater clears it will still interrupt service, so a dish mounted where snow slides off beats one mounted flat." },

  { kind: "p", text: "Heat is the quieter problem. The dish and its router can thermally throttle or shut down in sustained high temperatures and direct sun, particularly the router inside a hot vehicle. In desert summer the failure is overheating, not obstruction, and the fix is airflow and shade for the router even while the dish stays in the open sun it needs." },

  { kind: "h3", text: "What it costs" },

  { kind: "p", text: "Starlink Roam is a dish purchase plus a monthly service charge that depends on the plan tier and how much data moves. The hardware runs a few hundred dollars. The roaming service has been priced from around 50 dollars for a limited-data regional tier up to 165 dollars for larger or unlimited mobile use, with the option to pause it in months you do not travel, which materially lowers the annual cost for a seasonal rider. Prices and plan names change; confirm the current figure at purchase and budget it as a fixed monthly line, not a one-time buy." },

  { kind: "h2", text: "Bandwidth reality: what each option carries" },

  { kind: "p", text: "Different work needs different amounts of connection, and matching the two prevents both overbuying and underbuying. A rider who only sends email and pushes code does not need Starlink for that alone; a rider on video calls all day cannot do the job on a single fringe bar." },

  { kind: "table", caption: "What each connection reliably carries", head: ["Task", "Bandwidth needed", "Marginal cellular (1 bar)", "Good cellular / Starlink"], rows: [
    ["Email, chat, code push", "Under 1 Mbps", "Usually fine", "Fine"],
    ["Voice / VoIP call", "Under 1 Mbps, low latency", "Often works, sometimes drops", "Reliable"],
    ["One-to-one video call", "1.5 to 3 Mbps steady", "Frequently fails or freezes", "Reliable with clear sky or good signal"],
    ["Group video / screen share", "3 to 6 Mbps steady", "Rarely holds", "Reliable"],
    ["Large uploads, backups, video editing", "10+ Mbps sustained", "No", "Starlink or strong cellular only"],
  ]},

  { kind: "p", text: "The number that decides a video call is not raw speed but stability -- steady bandwidth and low, consistent latency. A connection that averages 20 Mbps but drops for four seconds every two minutes fails a meeting that a steady 3 Mbps connection carries without a stutter. This is why a marginal bar disappoints on video even when a speed test reads acceptable: the average is fine and the consistency is not." },

  { kind: "h2", text: "Planning a route around coverage instead of hoping" },

  { kind: "p", text: "The riders who work reliably from public land do not carry more gear than everyone else; they plan differently. They treat coverage as a property of a site to be verified before arrival, the same way they verify road passability or water -- not something to discover on the spot with a deadline approaching. Hoping is a plan that fails on the day of the important call." },

  { kind: "ol", items: [
    "Check measured-coverage data for the specific site, not the region, and for the specific carriers you actually hold.",
    "Identify a known-good fallback within a short drive before you settle in -- a spot you have confirmed carries a call, so a dead site on a deadline day is a twenty-minute move and not a crisis.",
    "Arrive a day before anything critical. Test the connection on real work -- a genuine video call, not a speed test -- while there is still time to relocate.",
    "Match the harder days to the better sites. Keep the meeting-heavy days near confirmed coverage and save the deep, thin-signal ground for days of solo focused work.",
    "Run the Starlink obstruction check and the dBm reading at setup, not after a call drops. Both take two minutes and both are predictive.",
  ]},

  { kind: "p", text: "The structural point is that connectivity, water and power are the same kind of constraint: each caps how long a site works, and the lowest ceiling wins. A rider can carry a week of water and a battery bank to match and still have to leave on Tuesday because the connection cannot hold the Wednesday call. Planning means knowing which ceiling is lowest before committing the drive." },

  { kind: "h2", text: "Where coverage tends to live" },

  { kind: "ul", items: [
    "Open benches and plateaus with a clear line back toward the nearest town or highway corridor -- the infrastructure you can see is the infrastructure that reaches you.",
    "High ground generally, because elevation clears the terrain that blocks low-band signal; a climb of a few hundred feet can restore a dead connection.",
    "Sites within a few miles of an interstate or major highway, where towers are dense to serve the traffic and spill coverage onto nearby public land.",
    "Desert and high-desert open country, which tends to carry cellular far better than forested or deeply incised terrain because nothing blocks the signal.",
  ]},

  { kind: "h2", text: "The honest limits of truly remote ground" },

  { kind: "p", text: "There is public land where none of this works, and pretending otherwise serves no one. At the bottom of a canyon, under continuous timber, thirty miles past the last tower -- there are sites where cellular is a true zero no booster can touch and the canopy denies Starlink the sky it needs. On that ground the honest answer is that it is not working ground, and the right plan treats it as a place to go on days off, not a place to take a deadline." },

  { kind: "p", text: "The failure mode worth naming is the rider who assumes gear substitutes for planning -- who buys the booster and the dish and drives deep into timber expecting the equipment to conjure a connection the terrain forbids. It cannot. A booster amplifies zero to zero. A dish under canopy drops every call. The equipment is a multiplier on a signal or a sky that must first exist, and where neither exists the only fix is to move -- better decided from the map than from a dead site on the morning of the call." },

  { kind: "p", text: "The workable practice for people who both need income and want the deep ground is to separate the two explicitly: anchor the working days at confirmed-coverage sites and treat the remote interior as weekend country, reached on a Friday and left before Monday. The mistake is trying to have both in the same hour and finding at nine on Monday that the site chosen for its silence is silent in every sense." },

  { kind: "note", text: "One honest test settles most of it. Before you rely on a site for work, hold a real video call from it -- talk to someone, share a screen, watch whether it holds for ten minutes. A speed test lies by averaging; a real call tells the truth. If it does not hold, you have learned that a day early instead of an hour late." },

  { kind: "h2", text: "What this page cannot tell you" },

  { kind: "p", text: "Everything above is the general framework, and the framework is only ever a starting estimate for a specific site on a specific day. Coverage maps are modelled and optimistic. A carrier that is strong across a region has a dead pocket behind one particular ridge, and the only way to know is to have been there or to ask someone who was. Published data describes where signal should be; it does not confirm that a call held there last week." },

  { kind: "p", text: "That last gap -- what a connection actually did at a named site recently -- is the one no carrier map covers. This is the gap Vanism records: each site carries whether a rider confirmed working signal there and the date they did it, so a connectivity note is evidence with a timestamp rather than a prediction, and anything not confirmed recently drops out rather than being shown as a stale promise." },

  { kind: "p", text: "For the authoritative current picture, the sources are the carrier's own coverage tool for the outer boundary, a crowd-sourced measured-coverage map for something closer to truth, the Starlink app's obstruction check for a specific setup, and the district or field office for whether the road even reaches the site. Verify the specific place before you route a working week around it, and keep a confirmed fallback within a short drive for the day the estimate turns out wrong." },
];
