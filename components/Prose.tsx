import type { Block } from "@/content/blocks";
import { slugifyHeading } from "@/content/blocks";

/**
 * Renders a block document. Headings carry stable ids so the TOC and any
 * cross-page deep link resolve, and tables are real HTML tables rather than
 * images -- Prohibition 8, and the only form an answer engine can read.
 */
export function Prose({ blocks }: { blocks: Block[] }) {
  return (
    <div className="mt-10 space-y-6">
      {blocks.map((b, i) => {
        switch (b.kind) {
          case "h2":
            return (
              <h2
                key={i}
                id={slugifyHeading(b.text)}
                className="display scroll-mt-24 pt-8 text-[1.75rem] leading-tight text-bone"
              >
                {b.text}
              </h2>
            );

          case "h3":
            return (
              <h3
                key={i}
                id={slugifyHeading(b.text)}
                className="scroll-mt-24 pt-4 text-[1.0625rem] font-semibold text-bone"
              >
                {b.text}
              </h3>
            );

          case "p":
            return (
              <p key={i} className="text-[1rem] leading-[1.72] text-bone/85">
                {b.text}
              </p>
            );

          case "ul":
            return (
              <ul key={i} className="space-y-2.5 pl-1">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[0.975rem] leading-[1.65] text-bone/85">
                    <span aria-hidden="true" className="mt-[0.55em] h-px w-3 shrink-0 bg-brass" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "ol":
            return (
              <ol key={i} className="space-y-2.5">
                {b.items.map((item, j) => (
                  <li key={j} className="flex gap-3 text-[0.975rem] leading-[1.65] text-bone/85">
                    <span className="data shrink-0 text-brass">{String(j + 1).padStart(2, "0")}</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );

          case "note":
            return (
              <p
                key={i}
                className="border-l-2 border-ink-raised py-1 pl-5 text-[0.925rem] leading-[1.65] text-slate"
              >
                {b.text}
              </p>
            );

          /** The one thing on the page a reader should take away if they take one thing. */
          case "key":
            return (
              <p
                key={i}
                className="border-l-2 border-brass bg-ink-deep px-6 py-4 text-[1rem] leading-[1.65] text-bone"
              >
                {b.text}
              </p>
            );

          case "table":
            return (
              <div key={i} className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <caption className="eyebrow pb-3 text-left">{b.caption}</caption>
                  <thead>
                    <tr className="border-b border-ink-raised">
                      {b.head.map((h) => (
                        <th key={h} scope="col" className="eyebrow py-3 pr-4 text-left">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r} className="border-b border-ink-raised align-top">
                        {row.map((cell, c) => (
                          <td
                            key={c}
                            className={`py-3.5 pr-4 ${c === 0 ? "font-semibold text-bone" : "text-slate"}`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
