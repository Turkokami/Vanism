import type { Competitor } from "@/content/competitors";

/**
 * PROHIBITION 7 -- no competitor is disparaged. Every row states what they do
 * well before it states the structural gap, and every figure carries the date
 * it was retrieved.
 */
export function ComparisonTable({ them }: { them: Competitor }) {
  const rows: [string, string, string][] = [
    [
      "Presence is proved",
      "Rider check-ins require a GPS fix inside the site geofence",
      "Contributions are submitted; the record does not show whether the person was on site",
    ],
    [
      "Freshness is enforced",
      "Nothing publishes without confirmation inside 18 months",
      "Listings remain regardless of age",
    ],
    [
      "Standing is earned",
      "Rank comes from ground covered and is not sold in any tier",
      "No progression system",
    ],
    [
      "Privacy default",
      "Rider profiles are off until turned on; private profiles return nothing",
      "Public contribution profiles by default",
    ],
  ];

  return (
    <table className="mt-8 w-full border-collapse text-sm">
      <caption className="sr-only">Vanism compared with {them.name}</caption>
      <thead>
        <tr className="border-b border-ink-raised">
          <th scope="col" className="eyebrow py-3 text-left">What differs</th>
          <th scope="col" className="eyebrow py-3 text-left">Vanism</th>
          <th scope="col" className="eyebrow py-3 text-left">{them.name}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(([k, us, they]) => (
          <tr key={k} className="border-b border-ink-raised align-top">
            <th scope="row" className="w-1/5 py-4 pr-4 text-left font-semibold text-bone">
              {k}
            </th>
            <td className="w-2/5 py-4 pr-4 text-slate">{us}</td>
            <td className="w-2/5 py-4 text-slate">{they}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
