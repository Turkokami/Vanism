/**
 * LONG-FORM BLOCK SYSTEM
 * ---------------------------------------------------------------------------
 * Pillar content needs real document structure -- an H2/H3 hierarchy an answer
 * engine can parse, tables it can lift, and a table of contents that generates
 * from the headings rather than being maintained by hand.
 *
 * Flat paragraph arrays cannot express any of that. Posts may still use the
 * legacy `body: string[]` shape; the renderer handles both.
 */

export type Block =
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "note"; text: string }
  | { kind: "key"; text: string }
  | {
      kind: "table";
      caption: string;
      head: string[];
      rows: string[][];
    };

/** Stable heading ids for the TOC and for deep links from other pages. */
export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

export function tableOfContents(blocks: Block[]) {
  return blocks
    .filter((b): b is { kind: "h2"; text: string } => b.kind === "h2")
    .map((b) => ({ text: b.text, id: slugifyHeading(b.text) }));
}

/** Word count drives the reading-time estimate and the thin-content check. */
export function wordCount(blocks: Block[]): number {
  return blocks.reduce((n, b) => {
    if (b.kind === "table") {
      return n + b.rows.flat().join(" ").split(/\s+/).length + b.head.join(" ").split(/\s+/).length;
    }
    if (b.kind === "ul" || b.kind === "ol") {
      return n + b.items.join(" ").split(/\s+/).length;
    }
    return n + b.text.split(/\s+/).length;
  }, 0);
}

export function readingMinutes(blocks: Block[]): number {
  return Math.max(1, Math.round(wordCount(blocks) / 230));
}
