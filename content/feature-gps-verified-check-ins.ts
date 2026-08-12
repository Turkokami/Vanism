import type { Block } from "./blocks";

/** gps-verified-check-ins -- Vanism feature, expanded. */
export const FEATURE_GPS_VERIFIED_CHECK_INS: Block[] = [
  {
    kind: "key",
    text: "A Vanism check-in is written only when the device reports a GPS fix inside an objective's geofence. It cannot be posted from home, backdated, or reconstructed from a photo. Every count on a site page is the number of riders confirmed on the ground, and every objective carries the date of the most recent confirmation. That is what makes a Vanism record mean the same thing every time you read it.",
  },
  {
    kind: "p",
    text: "Most travel data is opinion wearing the clothes of fact. A review can be written from a couch. A rating can come from someone who drove past a turnoff and never took it. A listing can be copied forward for years after the road behind it washed out. The record cannot tell presence from hearsay, so the rider reading it cannot either.",
  },
  {
    kind: "p",
    text: "GPS-verified check-ins are Vanism's answer, and the foundation the rest of the site stands on. Before a run is a run, before road intel is worth carrying, before rank means anything, there has to be a claim only a rider on the ground could have made. A check-in is that claim. What follows is how it is captured, why it cannot be faked, how dating keeps it honest across a season, and where it ties back to the doctrine.",
  },

  { kind: "h2", text: "What a check-in actually is" },
  {
    kind: "p",
    text: "A check-in is a single confirmed fact: a specific rider held a specific position, inside the usable area of a specific objective, on a specific date. It is not a review, not a rating, not a like; it carries no opinion. It asserts one thing in a form a database can verify -- a position fix taken by the device and written against the rider's record.",
  },
  {
    kind: "p",
    text: "The distinction matters because opinion and presence answer different questions. Opinion tells you whether someone liked a place. Presence tells you whether it is real, reachable, and still there. A hunt for ground you can put a van on needs the second answer first, before any opinion is worth weighing.",
  },
  {
    kind: "note",
    text: "There is no manual entry path for a check-in and no way to add one after the fact. This is a design constraint, not a missing feature. The absence of a back door is the whole value.",
  },

  { kind: "h2", text: "How the fix is captured" },
  {
    kind: "p",
    text: "Every objective is drawn with a geofence -- a boundary around the usable area of the site, not a dot on the nearest road. When a rider is inside it, the app takes a position fix from the device and writes the check-in against their record, timestamped to that moment. There is no form to fill, no place to type coordinates, no photo to upload in lieu of being there.",
  },
  {
    kind: "p",
    text: "The geofence is drawn to the ground you would stand on, not the road you would pass on. A site half a mile up a spur is fenced to the spur, not the highway below it. This is what stops a drive-by from registering as an arrival. Reaching the objective means entering the area a rider actually uses -- the pullout, the clearing, the water -- and the fix is only accepted there.",
  },

  { kind: "h3", text: "Off the grid, still counted" },
  {
    kind: "p",
    text: "The places worth the hunt are usually the places without a signal. A verification system that needed a connection at the moment of arrival would fail at the one moment that mattered. It does not. The fix comes from the device's own positioning, not the network, so a check-in deep out of coverage is as valid as one taken in a parking lot with full bars.",
  },
  {
    kind: "p",
    text: "The record is written on device and queued. When the rider next has a connection, it syncs -- keeping the timestamp of the moment they were there, not the moment it uploaded. A check-in taken Tuesday deep in a canyon and synced the following Saturday in town is dated Tuesday, because that is when the rider stood on the ground.",
  },
  {
    kind: "table",
    caption: "What a check-in can and cannot be",
    head: ["Claim", "Accepted", "Why"],
    rows: [
      ["GPS fix inside the geofence", "Yes", "The only valid source of a check-in."],
      ["Fix taken offline, synced later", "Yes", "Verified by position, not network; keeps its date."],
      ["Typed-in coordinates", "No", "There is no manual entry path."],
      ["A photo of the site", "No", "An image proves nothing about when or where the device was."],
      ["A drive-by on the road below", "No", "The geofence is drawn to the usable area, not the road."],
      ["A backdated or edited timestamp", "No", "The date is the moment of the fix and cannot be rewritten."],
    ],
  },

  { kind: "h2", text: "Why it cannot be faked" },
  {
    kind: "p",
    text: "Every system in this category eventually feels pressure to add a shortcut -- let a rider mark a place visited, import a trip, claim a site from a saved photo. Each is small. Together they turn a record of presence back into a record of intention, and intention is exactly what the site refuses to trade in.",
  },
  {
    kind: "p",
    text: "Vanism closes those doors below the interface. A check-in must originate from a position fix inside a geofence. There is no code path that writes one from a text box, and none that edits the date after the fix is taken. A rider cannot post from home, cannot backdate, and cannot manufacture a check-in from an image, because none of those inputs is ever accepted as a source. The rule is enforced where the record is written, not merely stated where it is shown.",
  },
  {
    kind: "ul",
    items: [
      "No post-from-home: the fix must fall inside the geofence, and home is not inside it.",
      "No backdating: the timestamp is the moment of the fix and is never editable.",
      "No photo-to-check-in: an image is not a position and is never treated as one.",
      "No drive-by credit: the fence is the usable ground, so a pass-by lands outside it.",
    ],
  },

  { kind: "h2", text: "The date is part of the fact" },
  {
    kind: "p",
    text: "A confirmation with no date is barely a confirmation. Conditions change -- a road opens, a gate locks, a creek runs dry -- and a check-in that cannot tell you when it happened cannot tell you whether it still holds. Dating is not metadata bolted onto the record. It is half of what the record is.",
  },
  {
    kind: "p",
    text: "Every objective carries the date of its most recent verified check-in, on the page. A rider can weigh a confirmation from last week against one from two summers back and decide how much to trust it. The site never hides the age of a fact behind a confident present tense. It shows how old the newest confirmation is and lets you judge accordingly.",
  },
  {
    kind: "note",
    text: "Dating is why a Vanism page ages honestly. A stale confirmation still appears -- it just appears stamped with its true age, so a rider is never fooled by a fact that quietly stopped being true.",
  },

  { kind: "h2", text: "The three-check-in gate" },
  {
    kind: "p",
    text: "One rider's confirmation is a fact. It is not yet a published objective. A site does not enter search until three independent riders have each recorded a verified check-in on the ground. Below that, the page still exists and answers if you follow a direct link, but it does not compete for a search result it has not earned.",
  },
  {
    kind: "p",
    text: "The road is something you earn, and so is a place's standing in the index. Three independent confirmations are harder to fake than one, and far harder to fake by accident. The gate keeps single-source pins and one-off mistakes out of the results a rider leans on planning a run at the desk. What surfaces has been stood on by more than one person.",
  },
  {
    kind: "table",
    caption: "How verification counts across the objective's life",
    head: ["Verified check-ins", "State in the index", "What a rider sees"],
    rows: [
      ["0", "Unpublished", "No page competes; the objective is a candidate only."],
      ["1-2", "Held back", "Page exists and answers via direct link, but stays out of search."],
      ["3 or more", "In the index", "Objective competes in search, carrying the date of its newest check-in."],
      ["In the index, aging", "Watched", "Dated confirmations keep showing their true age so trust tracks reality."],
    ],
  },

  { kind: "h2", text: "What it means for a rider" },
  {
    kind: "p",
    text: "For the rider doing the hunt, verification changes what the numbers on a page are worth. A count of check-ins is not a popularity score. It is a tally of people whose position was confirmed there. When a page says a site has been reached, that is not the site's claim about itself -- it is a claim riders made with their own positions, reported back.",
  },
  {
    kind: "p",
    text: "That reliability compounds. Road intel from the Village is worth carrying only because the check-in beneath it is real; a note attaches to a confirmed presence, not to the air. A run built at the desk is trustworthy only because its legs are objectives people reached. Strip out verification and the whole structure reverts to guesswork.",
  },

  { kind: "h3", text: "Your presence, kept private" },
  {
    kind: "p",
    text: "Confirmed does not mean exposed. A rider's check-ins are private by default. Nothing about a rider's position or history appears anywhere on the site unless they turn their profile on, and profiles are off until they choose otherwise. Verification is between the rider and the record; making any of it public is a separate, deliberate act.",
  },

  { kind: "h2", text: "Edge cases riders ask about" },
  {
    kind: "p",
    text: "A few situations come up often enough to answer directly -- each is where a weaker system would quietly break.",
  },
  {
    kind: "ul",
    items: [
      "No service at the site: the fix is captured on device and syncs later, keeping its original date. Coverage is never required to be confirmed.",
      "Passing on the road without stopping: the geofence is the usable ground, so a pass-by lands outside it and nothing is recorded.",
      "Arriving before an objective has three check-ins: yours still counts and moves the objective toward the gate; the page just does not compete in search yet.",
      "Wanting the visit but not the exposure: a check-in reveals nothing to other riders; your history stays private unless you turn your profile on.",
      "Late sync after a long run off-grid: the timestamp is when you were there, not when it uploaded, so a week in the backcountry dates every check-in correctly.",
    ],
  },

  { kind: "h2", text: "How it ties back to the doctrine" },
  {
    kind: "p",
    text: "Via Draconis holds that the road is earned, not declared, and a check-in is the smallest unit of that doctrine -- the moment a rider stops claiming to have gone and proves it with a position. Everything Vanism promises -- that a count means the same thing every time, that a date tells the truth about a fact's age, that standing reflects ground covered -- rests on the confirmation captured at the geofence.",
  },
  {
    kind: "p",
    text: "This is why check-ins sit in the verification clause and answer only one question: who confirmed this, and when. Get that answer right and the rest of the site can be trusted. Get it wrong -- accept one photo, allow one backdate, let one drive-by through -- and every number downstream becomes a rumor. The GPS-verified check-in is where a rider's word becomes a record, and Vanism is built on refusing to let that happen any other way.",
  },
];
