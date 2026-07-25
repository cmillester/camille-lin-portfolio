export default function TimelineEntry({
  range,
  title,
  description,
  bordered = true,
}: {
  range: string;
  title: string;
  description: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={`flex w-full flex-col gap-2 py-5 lg:flex-row lg:gap-10 lg:py-6 ${
        bordered ? "border-b border-border-soft" : ""
      }`}
    >
      <p className="shrink-0 font-body text-sm font-bold text-teal lg:w-40">{range}</p>
      <div className="flex flex-col gap-1.5">
        <p className="font-display text-base font-semibold text-ink-soft sm:text-lg">{title}</p>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
      </div>
    </div>
  );
}
