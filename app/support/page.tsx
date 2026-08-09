import type { Metadata } from "next";
import { FaqBlock } from "@/components/FaqBlock";
import { JsonLd } from "@/components/JsonLd";
import { faqNode, graph } from "@/lib/schema";
import { SITE_URL } from "@/lib/site";

/**
 * PHASE 0.1 -- TICKET 1, BLOCKING.
 * This URL is a 404 on the live site. Apple requires a reachable support URL
 * for App Review. Nothing else in the build ships before this returns 200.
 */

export const metadata: Metadata = {
  title: "Support",
  description:
    "Contact Vanism support, report a bad site record, request account deletion, or ask about a subscription.",
  alternates: { canonical: "/support" },
};

const FAQ = [
  {
    q: "How do I report a site record that is wrong",
    a: "Open the objective in the app and use Report. Tell us what changed -- gate locked, road washed out, fee added. Reports from riders with recent check-ins at that objective are actioned first.",
  },
  {
    q: "How do I delete my account and my data",
    a: "Write to support from the address on the account and ask for deletion. Your check-in history, rank ledger and profile are removed. Deletion is permanent and rank cannot be restored afterwards.",
  },
  {
    q: "Is my location visible to other riders",
    a: "No, unless you turn it on. Public profiles are off by default. Until you opt in, no page on this site can show your position, your history or your rank.",
  },
  {
    q: "How do I cancel a subscription",
    a: "Subscriptions are billed by Apple. Cancel in Settings, then Apple ID, then Subscriptions. Cancelling stops billing at the end of the paid period and does not remove rank you already earned.",
  },
  {
    q: "I bought a subscription and my rank did not change",
    a: "That is correct and it is not a fault. Rank is earned by reaching objectives. It is never included in a subscription and it is never sold.",
  },
];

export default function Support() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <JsonLd data={graph(faqNode(FAQ, `${SITE_URL}/support`))} />

      <p className="eyebrow">Support</p>
      <h1 className="display mt-4 text-5xl text-bone">Get it sorted</h1>
      <p className="mt-5 text-slate">
        Write to <a className="text-bone underline decoration-brass underline-offset-4" href="mailto:support@vanism.ai">support@vanism.ai</a>.
        Include your trailname and, if it is about a site record, the objective name.
      </p>

      <FaqBlock items={FAQ} />
    </div>
  );
}
