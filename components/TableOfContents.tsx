import type { Block } from "@/content/blocks";
import { tableOfContents, readingMinutes } from "@/content/blocks";

/**
 * Generated from the H2s, never maintained by hand. On a 3,000-word page the
 * TOC is the difference between a document someone reads and one they bounce
 * off -- and it gives an answer engine an explicit outline of the argument.
 */
export function TableOfContents({ blocks }: { blocks: Block[] }) {
  const items = tableOfContents(blocks);
  if (items.length < 3) return null;

  return (
    <nav aria-label="On this page" className="mt-10 border border-ink-raised px-6 py-5">
      <div className="flex items-baseline justify-between gap-4">
        <p className="eyebrow">On this page</p>
        <p className="data text-[0.6875rem] text-slate">{readingMinutes(blocks)} min</p>
      </div>
      <ol className="mt-4 space-y-2">
        {items.map((i, n) => (
          <li key={i.id} className="flex gap-3">
            <span className="data shrink-0 text-[0.6875rem] text-brass">
              {String(n + 1).padStart(2, "0")}
            </span>
            <a href={`#${i.id}`} className="text-sm text-slate hover:text-bone">
              {i.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
