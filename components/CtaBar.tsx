import Link from "next/link";
import { EmailCapture } from "./EmailCapture";

/**
 * PHASE 2 GATE: a visitor on any device, on any route, has a next action.
 * iOS gets the install path. Everyone else gets capture -- not a dead end.
 */
export function CtaBar({ context }: { context: string }) {
  return (
    <section className="mt-20 grid gap-6 border border-ink-raised p-6 md:grid-cols-2 md:p-8">
      <div>
        <h2 className="display text-2xl text-bone">Stand there yourself</h2>
        <p className="mt-3 text-sm leading-relaxed text-slate">
          Check in on the ground and the position is recorded against your name.
          Rank comes from where you have actually been. It cannot be bought, and
          the subscription does not include it.
        </p>
        <Link
          href="/pricing"
          className="display mt-5 inline-block border border-brass px-6 py-3 text-sm text-brass hover:bg-brass hover:text-ink"
        >
          See what it costs
        </Link>
      </div>
      <EmailCapture context={context} />
    </section>
  );
}
