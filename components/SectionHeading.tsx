type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  as?: "h2" | "h3";
  id?: string;
};

export default function SectionHeading({ eyebrow, title, as = "h2", id }: SectionHeadingProps) {
  const Heading = as;
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-bold uppercase tracking-wide text-muted">{eyebrow}</p>
      <Heading id={id} className="font-display text-2xl font-semibold text-ink sm:text-3xl">
        {title}
      </Heading>
    </div>
  );
}
