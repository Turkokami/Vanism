import Link from "next/link";
import { HOUSE_URL, DOCTRINE_URL, LINEAGE_URL } from "@/lib/site";

/**
 * PHASE 1.7 -- persistent, every page. The doctrine lived on a Shopify blog
 * behind a merch store while the product that embodies it never mentioned it.
 * This block is the fix, and it runs in both directions (see the lokes.one
 * side of the routing table).
 *
 * Prohibition 10 / 11: legal links resolve to this domain only. No placeholder
 * URLs, and no gateway subdomain anywhere in the footer.
 */
export function DoctrineFooter() {
  return (
    <footer className="mt-24 border-t border-ink-raised bg-ink-deep">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="eyebrow">The path</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate">
            Vanism is built by LOKES ONE. The path is{" "}
            <a
              href={DOCTRINE_URL}
              className="text-bone underline decoration-brass underline-offset-4"
            >
              Via Draconis
            </a>
            . Dragon is earned. It is never sold for real money, and it is never
            included in a subscription.
          </p>
          <a
            href={LINEAGE_URL}
            className="data mt-4 inline-block text-[0.6875rem] uppercase tracking-[0.14em] text-brass"
          >
            Dragon Style, est. 2015
          </a>
        </div>

        <div>
          <p className="eyebrow">Estates</p>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            <li><Link href="/ground" className="hover:text-bone">The Ground</Link></li>
            <li><Link href="/runs" className="hover:text-bone">The Runs</Link></li>
            <li><Link href="/codex" className="hover:text-bone">The Codex</Link></li>
            <li><Link href="/village" className="hover:text-bone">The Village</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Company</p>
          <ul className="mt-3 space-y-2 text-sm text-slate">
            <li><Link href="/pricing" className="hover:text-bone">Pricing</Link></li>
            <li><Link href="/support" className="hover:text-bone">Support</Link></li>
            <li><Link href="/legal/privacy" className="hover:text-bone">Privacy</Link></li>
            <li><Link href="/legal/terms" className="hover:text-bone">Terms</Link></li>
            <li><a href={HOUSE_URL} className="hover:text-bone">LOKES ONE</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-raised">
        <p className="data mx-auto max-w-6xl px-5 py-5 text-[0.6875rem] text-slate">
          &copy; {new Date().getFullYear()} LOKES ONE LIMITED CO
        </p>
      </div>
    </footer>
  );
}
