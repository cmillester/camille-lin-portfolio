export default function SkillTag({ label }: { label: string }) {
  return (
    <span className="inline-flex shrink-0 items-center rounded px-3 py-1.5 text-xs font-medium text-ink bg-section">
      {label}
    </span>
  );
}
