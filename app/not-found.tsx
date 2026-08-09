import Link from "next/link";

/**
 * LAW IV. This page is also what a private rider profile returns. It must give
 * away nothing about whether the requested thing exists -- same body, same
 * status, same timing as any other miss.
 */
export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-32">
      <p className="eyebrow">404</p>
      <h1 className="display mt-4 text-4xl text-bone">Nothing at this position</h1>
      <p className="mt-4 text-slate">
        The route may have moved, or it was never public. Start from the ground
        and work out.
      </p>
      <Link
        href="/ground"
        className="display mt-8 inline-block border border-brass px-6 py-3 text-sm text-brass hover:bg-brass hover:text-ink"
      >
        Open the ground
      </Link>
    </div>
  );
}
