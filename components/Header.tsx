import Link from "next/link";

const NAV = [
  { href: "/ground", label: "Ground" },
  { href: "/runs", label: "Runs" },
  { href: "/features", label: "Features" },
  { href: "/dispatch", label: "Dispatch" },
  { href: "/codex", label: "Codex" },
  { href: "/pricing", label: "Pricing" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-brass/25 bg-ink/80 backdrop-blur supports-[backdrop-filter]:bg-ink/55">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4"
      >
        <div className="flex items-center gap-3">
          <Link href="/" className="display text-xl text-bone">
            Vanism
          </Link>
          <span className="hidden items-center gap-1.5 sm:inline-flex" aria-hidden="true">
            <span className="pulse" />
            <span className="data text-[0.6rem] uppercase tracking-[0.2em] text-slate">
              Field link
            </span>
          </span>
        </div>

        <ul className="flex flex-wrap items-center gap-5">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="data text-xs uppercase tracking-[0.14em] text-slate transition-colors hover:text-brass"
              >
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
