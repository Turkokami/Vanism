import type { Block } from "./blocks";

/** offline-maps -- Vanism feature, expanded. */
export const FEATURE_OFFLINE_MAPS: Block[] = [
  {
    kind: "key",
    text: "Offline maps in Vanism pull the ground onto your device before you lose service -- map tiles, objective coordinates, access status, and the most recent rider notes for any region you select. Offline data is a paid capability. The decision you make at the gate, out of coverage, is made against the same confirmed record you built at the desk. And a check-in you record while offline keeps the timestamp of the moment you were there, so nothing you earned on the ground is lost to a dead signal.",
  },
  {
    kind: "p",
    text: "The places worth reaching are the places without coverage. That is not a slogan -- it is the operating condition. A cell that still has three bars is a cell somebody already built a campground on. The ground you hunt for is past the last tower, and any planning tool that needs a connection at the moment of the decision has failed at the only moment that counted.",
  },
  {
    kind: "p",
    text: "Offline maps close that gap. They are not a convenience bolted onto a connected app -- they are what lets one continuous record, the record you carry across the season, stay usable in the exact places where the season is spent.",
  },

  {
    kind: "h2",
    text: "What comes down when you download a region",
  },
  {
    kind: "p",
    text: "You select a region on the map. Vanism packages everything it contains and writes it to the device as a single unit. There is no state where you have the tiles but not the coordinates, or the pin but not the clearance note. That completeness is deliberate: a half-downloaded region tells you where a site is without telling you whether you can get in, which is worse than no download at all.",
  },
  {
    kind: "p",
    text: "Every element below travels together, so the record on the device out of service is the same one you read at the desk with a connection.",
  },
  {
    kind: "table",
    caption: "What a downloaded region contains",
    head: ["Element", "What it is", "Why it has to be offline"],
    rows: [
      [
        "Map tiles",
        "The base terrain and road geometry at the zoom depth you chose",
        "The map is useless past the last tower if it streams from a server",
      ],
      [
        "Objective coordinates",
        "The exact position of every verified site in the region",
        "A pin you cannot load is a place you cannot reach",
      ],
      [
        "Access status",
        "Open, seasonal, permit-required or closed, with the date it was last confirmed",
        "A legal boundary mistaken for a passable road is a mistake made at the gate, out of service",
      ],
      [
        "Rider notes",
        "The most recent field notes -- surface, clearance, water, the gate detail",
        "The note you need is the one you cannot fetch when you arrive",
      ],
    ],
  },
  {
    kind: "note",
    text: "Access status and rider notes are dated on the device the same way they are dated on the page. An offline note does not become fresher by being downloaded -- an eighteen-month-old note reads as an eighteen-month-old note in the field, exactly as it does at the desk.",
  },

  {
    kind: "h2",
    text: "Why this is a continuity capability, not a mapping feature",
  },
  {
    kind: "p",
    text: "Plenty of apps cache a map. That is not what this is. Offline maps sit in the continuity group because their job is to protect one thing: a single, continuous record that holds across the whole season, on whatever device you carry.",
  },
  {
    kind: "p",
    text: "A run you started in spring is still open in autumn. The ground you confirmed in April is still confirmed in October. Offline data keeps that record intact through the weeks it lives out of coverage. Without it, every trip past the last tower is a gap -- a stretch flying blind against ground you already earned the right to know. What you built at the desk comes with you, and what you do on the ground reconciles into it when you return.",
  },
  {
    kind: "p",
    text: "Offline maps and season continuity are two sides of one idea. Continuity says the record is one thing across the season. Offline maps make that true in the places where the season is spent.",
  },

  {
    kind: "h2",
    text: "Check-ins keep working while you are out",
  },
  {
    kind: "p",
    text: "The record does not just travel out with you -- it keeps being written while you are gone. A Vanism check-in is verified by the GPS fix inside the objective's geofence, not by the network. The moment you stand on the ground is the moment that gets recorded, with or without a bar of signal.",
  },
  {
    kind: "p",
    text: "Offline check-ins queue on the device, carrying the timestamp of the moment you were there. When you come back into service they reconcile against your record with that original timestamp, not the moment they uploaded. The check-in is a claim about where you were and when, and both halves have to survive the trip home.",
  },
  {
    kind: "ul",
    items: [
      "The GPS fix is what verifies the check-in -- the connection only carries it, later, unchanged.",
      "The timestamp is the moment you were on the ground, never the moment of upload.",
      "Offline check-ins count toward rank the same as any other, because rank is earned by covered ground, not by the strength of a signal.",
      "A run leg is marked complete by that offline check-in, so the run fills in behind you even in a region with no coverage.",
    ],
  },
  {
    kind: "note",
    text: "This is the same rule that runs through every part of Vanism: the record reflects where you were. Being out of service does not create a manual-entry path, and it does not weaken the check-in. It just delays the sync.",
  },

  {
    kind: "h2",
    text: "Storage, selection, and what you control",
  },
  {
    kind: "p",
    text: "A region's size depends on the area you draw and the zoom depth you choose. A wide region at deep zoom holds more tile detail and takes more space; a tight region at shallow zoom takes very little. The app shows the size before the download starts, so the trade is yours to make with the number in front of you.",
  },
  {
    kind: "p",
    text: "Regions are managed individually. You remove one without touching the others, so a device that filled up on last season's runs is cleared one region at a time rather than wiped and rebuilt. The table below lays out the trade you make when you draw a region.",
  },
  {
    kind: "table",
    caption: "How region choices trade size against detail",
    head: ["Choice", "Effect on storage", "When it fits the run"],
    rows: [
      [
        "Wide area, deep zoom",
        "Largest footprint on device",
        "A long run through unknown ground where you want fine terrain detail everywhere",
      ],
      [
        "Wide area, shallow zoom",
        "Moderate footprint",
        "A route you know at the road level but want the whole corridor available",
      ],
      [
        "Tight area, deep zoom",
        "Small footprint, high detail",
        "A single objective cluster you are working carefully -- the last miles into a hard site",
      ],
      [
        "Tight area, shallow zoom",
        "Smallest footprint",
        "A quick reach into a region you already know, where you want the pins and notes but little map",
      ],
    ],
  },
  {
    kind: "p",
    text: "The right move is usually to download narrow and deep for the ground you are hunting, and wide and shallow for the corridor around it. You are not mirroring the world onto a phone. You are carrying the specific ground the run needs.",
  },

  {
    kind: "h2",
    text: "Edge cases riders actually hit",
  },
  {
    kind: "h3",
    text: "The data on the device is a snapshot, and it is dated",
  },
  {
    kind: "p",
    text: "A downloaded region is the record as it stood when you pulled it. If a district posts a fire closure the day after you leave the desk, your device will not know until you sync again. This is why the download carries the confirmation date on every status and note -- so you can read the snapshot for what it is. The discipline is simple: pull the region as late as you can before you lose service, and read the dates in the field.",
  },
  {
    kind: "h3",
    text: "A region you have not downloaded is not there",
  },
  {
    kind: "p",
    text: "Offline coverage is exactly the ground you chose. Drive out of a downloaded region and the tiles, pins and notes stop at the edge you drew; the app does not silently stream the gap. It never shows you a map it cannot stand behind -- which makes drawing the right region the desk work that matters most.",
  },
  {
    kind: "h3",
    text: "Sync is reconciliation, not a race",
  },
  {
    kind: "p",
    text: "When you return to service, the queued check-ins reconcile against your account. There is no penalty for a long gap. A week out of coverage and a month out of coverage sync the same way, each check-in landing with the timestamp it was born with. Nothing expires the record while you are gone.",
  },

  {
    kind: "h2",
    text: "Where offline maps sit against the alternatives",
  },
  {
    kind: "p",
    text: "The comparison that matters is not against other offline map apps. It is against the two habits most riders arrive with: a general mapping app that caches tiles, and screenshots taken before the drive. Both fail in the same place -- they carry the picture but not the record.",
  },
  {
    kind: "table",
    caption: "Carrying the ground offline -- three approaches",
    head: [
      "Capability",
      "General offline map",
      "Screenshots before you go",
      "Vanism offline region",
    ],
    rows: [
      ["Base map tiles", "Yes", "Only the frames you captured", "Yes"],
      ["Objective coordinates", "Manual pins if you added them", "No", "Yes, every verified site"],
      ["Access status, dated", "No", "Whatever was on screen, undated", "Yes, with confirmation date"],
      ["Recent rider notes", "No", "No", "Yes, the most recent, dated"],
      ["Records a verified check-in offline", "No", "No", "Yes, GPS-verified, original timestamp"],
      ["Reconciles into one season record", "No", "No", "Yes"],
    ],
  },
  {
    kind: "p",
    text: "The last two rows are the whole difference. A cached map lets you see where you are. An offline region lets you keep building the record of where you have been -- the thing the season is made of.",
  },

  {
    kind: "h2",
    text: "How to work it: a rider's sequence",
  },
  {
    kind: "ol",
    items: [
      "At the desk, open the run and identify the regions it crosses that will lose service.",
      "Draw each region to the ground the run needs -- narrow and deep for the hard reaches, wide and shallow for the corridor.",
      "Check the size the app shows, and clear old regions to make room.",
      "Pull the regions as close to departure as you can, so the status and notes are as fresh as the record allows.",
      "On the ground, read the dates on every status and note before you commit at the gate.",
      "Check in; the GPS fix records it offline with the correct timestamp.",
      "Back in service, let the queue reconcile -- the run fills in behind you and the season record absorbs it.",
    ],
  },

  {
    kind: "h2",
    text: "Back to the doctrine",
  },
  {
    kind: "p",
    text: "Via Draconis holds that the road is something you earn, and that a record is only worth what stands behind it. Offline maps serve both. They carry the confirmed ground -- verified by riders who stood there, dated so you can weigh it -- into the places past coverage where the hunt happens, and they let you keep earning out there, because a GPS-verified check-in does not need a network to be true.",
  },
  {
    kind: "p",
    text: "This is a continuity capability in the exact sense the doctrine means it: one record, held across the whole season, on whatever device you carry, in service and out of it. What you confirm this week is still on your record next season. The download is how that record follows you past the last tower and comes home intact.",
  },
];
