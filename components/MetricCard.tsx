import type { ComponentType, SVGProps } from "react";

type MetricCardProps = {
  label: string;
  value: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
};

export default function MetricCard({ label, value, icon: Icon }: MetricCardProps) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-lg border border-border bg-white p-5 sm:p-6 min-w-[45%] lg:min-w-0">
      <div className="flex w-full items-center justify-between gap-2">
        <p className="flex-1 text-[13px] font-semibold uppercase tracking-wide text-teal">{label}</p>
        {Icon ? <Icon className="size-5 shrink-0 text-teal" /> : null}
      </div>
      <p className="font-display text-lg font-semibold leading-snug text-ink sm:text-xl">{value}</p>
    </div>
  );
}
