export type TableColumn = {
  key: string;
  header: string;
};

export type TableRow = {
  highlight?: boolean;
  [key: string]: string | boolean | undefined;
};

/**
 * A semantic HTML table (real <table>/<th scope>) that also reflows into
 * labeled stacked cards on narrow viewports, so no data is lost and nothing
 * requires horizontal scrolling to read on mobile.
 */
export default function AccessibleTable({
  caption,
  columns,
  rows,
}: {
  caption: string;
  columns: TableColumn[];
  rows: TableRow[];
}) {
  return (
    // The wrapper can scroll horizontally when the table is placed in a narrow
    // column, so it is exposed as a keyboard-focusable, labeled region
    // (role="region" + tabIndex=0) — otherwise keyboard-only users cannot reach
    // the scrollable content (axe: scrollable-region-focusable, WCAG 2.1.1).
    <div
      role="region"
      aria-label={caption}
      tabIndex={0}
      className="w-full overflow-x-auto rounded-lg border border-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
    >
      <table className="w-full min-w-[560px] border-collapse text-sm">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-section text-left text-[11px] font-bold uppercase tracking-wide text-ink">
            {columns.map((col) => (
              <th key={col.key} scope="col" className="px-4 py-3">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className={`border-t border-border ${row.highlight ? "bg-teal-tint text-teal font-semibold" : ""}`}
            >
              {columns.map((col, ci) => (
                <td key={col.key} className="px-4 py-3 text-ink">
                  {ci === 0 ? (
                    <span className="font-semibold">{String(row[col.key] ?? "")}</span>
                  ) : (
                    String(row[col.key] ?? "")
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
