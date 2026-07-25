export default function ImpactCard({ value, description }: { value: string; description: string }) {
  return (
    <div className="flex flex-1 flex-col gap-2.5 rounded-card border border-border bg-white p-5 min-w-[45%] lg:min-w-0">
      <p className="font-display text-2xl font-bold text-teal sm:text-[28px]">{value}</p>
      <p className="text-sm leading-relaxed text-ink">{description}</p>
    </div>
  );
}
