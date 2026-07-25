/** Small illustrative dashboard preview used on the homepage's featured project card. */
export default function MiniDashboardPreview() {
  const bars = [42, 28, 34, 18];
  const labels = ["Approved", "Review", "Open", "Blocked"];
  return (
    <div className="w-full max-w-[280px] rounded-lg border border-border bg-white p-4" aria-hidden="true">
      <div className="mb-3 flex items-center justify-between">
        <div>
          <p className="font-display text-xs font-bold text-ink">Requirements Governance</p>
          <p className="text-[10px] text-muted">Weekly snapshot</p>
        </div>
        <span className="rounded bg-teal-tint px-2 py-1 text-[10px] font-bold text-teal">LIVE</span>
      </div>
      <div className="mb-3 flex gap-2">
        {[
          ["Compliance", "98%", "text-teal"],
          ["Waivers", "12", "text-ink"],
          ["Violations", "03", "text-ink"],
        ].map(([label, value, color]) => (
          <div key={label} className="flex-1 rounded-md border border-border bg-cream px-2 py-2">
            <p className="text-[9px] text-muted">{label}</p>
            <p className={`font-display text-sm font-bold ${color}`}>{value}</p>
          </div>
        ))}
      </div>
      <div className="flex h-10 items-end gap-1.5">
        {bars.map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-teal" style={{ height: `${h}px` }} />
        ))}
      </div>
      <div className="mt-1 flex gap-1.5 text-center text-[8px] text-muted">
        {labels.map((l) => (
          <span key={l} className="flex-1">
            {l}
          </span>
        ))}
      </div>
      <p className="mt-2 text-center text-[9px] font-medium uppercase leading-tight tracking-wide text-muted">
        Synthetic portfolio data
      </p>
    </div>
  );
}
