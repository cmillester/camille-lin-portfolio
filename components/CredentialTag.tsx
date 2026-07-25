export default function CredentialTag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-border bg-white px-5 py-3 font-display text-sm font-semibold text-ink sm:text-base">
      {label}
    </span>
  );
}
