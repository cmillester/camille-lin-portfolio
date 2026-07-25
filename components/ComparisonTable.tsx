export type ComparisonRow = {
  columns: string[];
  emphasis?: number; // index of column to visually emphasize (e.g. the metric column)
};

/**
 * A 3(+)-column comparison table (e.g. Governance Question / Metric / Use).
 * Renders as a real <table> at lg+ and as stacked, labeled cards below lg —
 * only one is present in the accessibility tree at a time (display:none via
 * `hidden`), so nothing is announced twice.
 */
export default function ComparisonTable({
  caption,
  headers,
  rows,
}: {
  caption: string;
  headers: string[];
  rows: ComparisonRow[];
}) {
  return (
    <div className="w-full">
      {/* Desktop table */}
      <table className="hidden w-full border-collapse overflow-hidden rounded-lg border border-border text-sm lg:table">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-section text-left text-[13px] font-bold text-ink">
            {headers.map((h) => (
              <th key={h} scope="col" className="p-4 align-top">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border">
              {row.columns.map((cell, ci) => (
                <td
                  key={ci}
                  className={`p-4 align-top text-sm ${
                    row.emphasis === ci ? "font-semibold text-teal" : ci === 0 ? "text-ink" : "text-muted"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile cards */}
      <ul className="flex flex-col gap-3 lg:hidden">
        {rows.map((row, i) => (
          <li key={i} className="rounded-md bg-[#f5f5f5] p-4">
            {row.columns.map((cell, ci) => (
              <p
                key={ci}
                className={`text-[13px] leading-relaxed ${
                  ci === 0 ? "font-medium text-ink" : "mt-1 text-muted"
                } ${row.emphasis === ci ? "font-semibold text-teal" : ""}`}
              >
                {ci === 0 ? cell : `${headers[ci]}: ${cell}`}
              </p>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
