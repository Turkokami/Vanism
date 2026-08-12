import type { Block } from "./blocks";

/** saved-runs -- Vanism feature, expanded. */
export const FEATURE_SAVED_RUNS: Block[] = [
  {
    kind: "key",
    text: "A run is a named sequence of objectives you assemble yourself at the desk, save to your account, and work through at your own pace. The free tier saves three; paid tiers are unlimited. Legs are marked complete by checking in on the ground with a verified GPS fix, never by ticking a box. Because the record lives on the account and not on a trip, a run you start in spring is still open, exactly where you left it, in autumn.",
  },
  {
    kind: "p",
    text: "The published runs on Vanism are a starting point, not the catalogue. They show what a good sequence looks like and give a rider ground to build from. Most riders outgrow them fast, because the interesting run is the one nobody else has drawn -- ground you hunted down yourself, ground another rider passed to you as road intel, and legs lifted from published runs you liked.",
  },
  {
    kind: "p",
    text: "Saved runs let you draw it. You join objectives into an ordered sequence, name it, and it becomes a fixture on your account. From there it does two jobs at once: it is the plan you carry into the field, and the record of what you did once you got there -- the same object seen before and after the ground was covered.",
  },

  {
    kind: "h2",
    text: "What a run actually is",
  },
  {
    kind: "p",
    text: "A run is an ordered list of objectives with a name attached, stored against your account. Ordering is yours to set: geographic sequence, difficulty, the order you intend to reach them, or no logic beyond wanting these places together. The app does not impose a route between legs, because the ground between two objectives is frequently the point and rarely a straight line.",
  },
  {
    kind: "p",
    text: "Every objective in a run is a real, published site record -- coordinates, access status, and the rider check-ins that put it in the index. A run is a view over those records, not a copy of them. When an objective's access status changes because a rider reported a washout or a fire closure last week, the leg in your run reflects it. You are not carrying a snapshot that quietly goes stale; you are carrying a pointer to a record other riders keep current. A dropped pin is frozen at the moment you dropped it. A leg in a run is alive, because the objective under it is alive.",
  },

  {
    kind: "h2",
    text: "Plan and record in one object",
  },
  {
    kind: "p",
    text: "Build a run and you have a plan: a named sequence you can open at the desk, study, reorder, and carry into the field offline. Work the run and the same object becomes a record. As you check in at each leg it fills in behind you, so the run always shows how far you got and which ground remains.",
  },
  {
    kind: "p",
    text: "That dual nature is why the run doubles as the honest answer to a simple question: what did you actually do last season? Not what you meant to do, not what you filed a plan for -- what you stood on. A completed run is a sequence of confirmed positions with dates; a half-worked run is the same thing, paused. In both cases the object tells the truth, because the truth is written by the ground, not by intent.",
  },
  {
    kind: "table",
    caption: "The two faces of one saved run",
    head: ["Aspect", "As a plan", "As a record"],
    rows: [
      ["Written by", "The rider, at the desk", "Verified check-ins on the ground"],
      ["Legs read as", "Intended sequence", "Confirmed positions with dates"],
      ["Changes when", "You reorder or add objectives", "You reach a leg and check in"],
      ["Answers", "Where am I going", "Where have I been"],
      ["Editable by hand", "Yes -- it is your plan", "No -- legs close only by check-in"],
    ],
  },

  {
    kind: "h2",
    text: "Legs close on the ground, not by a checkbox",
  },
  {
    kind: "p",
    text: "A leg cannot be marked complete manually. There is no override, no long-press to tick it off, no way to tell the app you were somewhere you were not. A leg closes when, and only when, you check in inside the objective's geofence and the device reports a GPS fix. That is the same rule that governs check-ins, rank, and every count shown on a site page, and it does not relax because the check-in sits inside a run you built.",
  },
  {
    kind: "p",
    text: "This is deliberate and load-bearing. If a rider could close legs by hand, a completed run would record intention, and intention is free. Because legs close only on the ground, a finished run is a chain of confirmed positions -- it carries the weight of the check-ins under it.",
  },
  {
    kind: "note",
    text: "A leg closed while you were offline still counts. The fix is recorded on device and syncs when you reconnect, keeping the timestamp of the moment you were there, not the moment it uploaded.",
  },
  {
    kind: "p",
    text: "A run is therefore not a scrapbook you decorate after the fact. You cannot backfill it with places you visited before you built it. It is a live ledger of ground covered under verification.",
  },

  {
    kind: "h2",
    text: "One record across the season",
  },
  {
    kind: "p",
    text: "Most planning tools treat a route as a document. You make it, take it, file it, and the next trip starts from nothing. That model suits a holiday and is wrong for a way of travelling, because it throws away everything the moment the trip ends.",
  },
  {
    kind: "p",
    text: "Saved runs are built on the season, not the trip. A run does not belong to a departure and a return; it belongs to your account. Start a run in April, cover three of its seven legs, and come back to it in July or October with those three still closed and the remaining four still waiting. Nothing expires it or files it away. The half-worked run in spring is the same run, unchanged, in autumn.",
  },
  {
    kind: "p",
    text: "Because the run rides on the account, it follows you across devices. Build it at the desk, carry it into the field on another device, replace a phone mid-season -- the run and its closed legs come with the account, not the hardware. Continuity is not a sync convenience bolted on top; it is the substrate the whole capability stands on.",
  },
  {
    kind: "table",
    caption: "Trip-shaped tools versus a season-shaped run",
    head: ["Behaviour", "Trip-as-document tool", "Vanism saved run"],
    rows: [
      ["Lifespan", "Ends when the trip ends", "Open until you close it"],
      ["Unit of time", "The trip", "The season"],
      ["Progress persistence", "Reset per trip", "Carries across weeks and seasons"],
      ["Device change", "Re-export or lose it", "Follows the account"],
      ["Completion", "Marked by hand", "Closed by check-in on the ground"],
      ["What it records", "What you planned", "What you confirmed"],
    ],
  },

  {
    kind: "h2",
    text: "Tiers, limits, and what a subscription buys",
  },
  {
    kind: "p",
    text: "The free tier saves three runs. Paid tiers are unlimited. That is the whole of the pricing story here, and it is worth being exact about what the paid tier buys and what it does not.",
  },
  {
    kind: "p",
    text: "A subscription buys capacity and reach: unlimited saved runs, offline access to the ground under them, and the recent rider intel attached to each objective. It does not buy completion. No tier lets you close a leg without standing on it, and no tier accelerates the pace at which a run fills in. The record inside a run is written by the ground regardless of what you pay.",
  },
  {
    kind: "ul",
    items: [
      "Free tier: three saved runs, full site records, coordinates, and access status.",
      "Paid tiers: unlimited saved runs, offline download of the objectives, recent condition reports at each leg.",
      "No tier: manual completion, backdated legs, or any faster path to closing a run.",
    ],
  },
  {
    kind: "p",
    text: "Drop from a paid tier back to free and the runs you built and the legs you closed do not vanish. Continuity across devices and offline access are the paid parts; the confirmed ground under a run is not something a lapsed subscription can take back. The record you earned is yours.",
  },

  {
    kind: "h2",
    text: "Sharing a run without exposing your record",
  },
  {
    kind: "p",
    text: "You can share a run you built. A shared run passes along the sequence of objectives -- the route, the ground, the order -- so another rider can adopt it, adapt it, or lift a leg into a run of their own. It is how good sequences travel between riders without becoming a published catalogue entry.",
  },
  {
    kind: "p",
    text: "Sharing a route does not expose your record. Your profile and check-in history are separate settings, both off by default. A rider who receives your run sees the objectives you strung together -- not which you have closed, not when you stood there, not your standing. The route is a plan you chose to pass on; your record stays yours until you decide otherwise in the Village.",
  },
  {
    kind: "note",
    text: "A shared run is the plan, not the record -- the recipient inherits your sequence of objectives, never your closed legs or the dates behind them.",
  },

  {
    kind: "h2",
    text: "Edge cases riders hit",
  },
  {
    kind: "h3",
    text: "An objective in your run goes to closed or permit-required",
  },
  {
    kind: "p",
    text: "Because a leg points at the live site record, an access status change shows up in your run. A washed-out road or a fresh fire closure reads as closed on the leg, dated to the rider report that changed it. The leg stays in your run -- you decide whether to wait out a seasonal window, route around it, or drop it. The app will not silently rewrite your plan; it tells you the ground changed and leaves the call to you.",
  },
  {
    kind: "h3",
    text: "You abandon a run partway",
  },
  {
    kind: "p",
    text: "A run you stop working is not a problem the system tries to solve for you. Closed legs stay closed, open legs stay open, and nothing expires the run or marks it failed. Leave it dormant across a season and pick it up later, or close it out and start fresh. The choice is a rider's, because the season is a rider's to spend.",
  },
  {
    kind: "h3",
    text: "You hit the free limit of three",
  },
  {
    kind: "p",
    text: "Building a fourth run on the free tier means freeing a slot or moving to a paid tier. Removing a run clears the plan; it does not erase the check-ins under its closed legs, which live on your record independently of any run.",
  },

  {
    kind: "h2",
    text: "How saved runs sit in the doctrine",
  },
  {
    kind: "p",
    text: "Saved runs are a continuity capability, and continuity is the quiet half of Via Draconis. Verification proves you were somewhere; continuity carries that proof forward, so a season reads as one connected record instead of a stack of unrelated receipts. A run is where those two ideas meet: an ordered set of confirmed positions that persists until you finish it.",
  },
  {
    kind: "p",
    text: "The rules follow from that, not from convenience. Legs close on the ground because the record is not allowed to lie about where a rider stood. The run rides the account because the season, not the trip, is the unit that matters. The paid tier buys capacity and reach but never completion, because the road is something you earn and the hunt for it does not go faster for money. Work a run across the season and what you are left with is not a plan you filed -- it is proof of ground you covered.",
  },
];
