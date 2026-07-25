type CaseStudyHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
};

export default function CaseStudyHero({ eyebrow, title, summary }: CaseStudyHeroProps) {
  return (
    <div className="flex w-full flex-col items-start gap-4 border-b border-border px-4 pb-10 pt-10 sm:px-6 sm:pb-14 sm:pt-16 lg:gap-6 lg:px-16 lg:pb-16 lg:pt-20">
      <p className="text-xs font-bold uppercase tracking-wide text-teal">{eyebrow}</p>
      <h1 className="max-w-4xl font-display text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-[40px]">
        {title}
      </h1>
      <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">{summary}</p>
    </div>
  );
}
