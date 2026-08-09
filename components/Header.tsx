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
    <header className="border-b border-ink-raised">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4"
      >
        <Link href="/" className="display text-xl text-bone">
          Vanism
        </Link>

        <ul className="flex flex-wrap items-center gap-5">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="data text-xs uppercase tracking-[0.14em] text-slate hover:text-bone"
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
