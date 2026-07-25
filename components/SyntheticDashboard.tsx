import type { ReactNode } from "react";

/**
 * Wraps any illustrative dashboard/report/chart visual and attaches the
 * required "Synthetic portfolio data" disclosure exactly once per component.
 * All numbers, identifiers, and labels inside are fictional and for
 * portfolio illustration only.
 */
export default function SyntheticDashboard({
  title,
  subtitle,
  children,
}: {
  title?: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <div className="w-full rounded-lg border border-border bg-white p-4 sm:p-6">
      {(title || subtitle) && (
        <div className="mb-4 flex flex-col gap-1">
          {title && <p className="font-display text-sm font-semibold text-ink">{title}</p>}
          {subtitle && <p className="text-xs text-muted">{subtitle}</p>}
        </div>
      )}
      {children}
      <p className="mt-4 text-[11px] font-medium uppercase tracking-wide text-muted">
        Synthetic portfolio data
      </p>
    </div>
  );
}
