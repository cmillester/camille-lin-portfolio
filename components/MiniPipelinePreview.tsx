/** Small illustrative source -> platform -> output preview used on homepage project cards. */
export default function MiniPipelinePreview({
  label,
  status,
  sourceLetters,
  outputLetters,
  caption,
}: {
  label: string;
  status: string;
  sourceLetters: string[];
  outputLetters: string[];
  caption: string;
}) {
  return (
    <div className="flex w-full max-w-[280px] flex-col gap-3" aria-hidden="true">
      <div className="flex items-center justify-between">
        <p className="text-[11px] text-muted">{label}</p>
        <span className="rounded bg-teal-tint px-2 py-1 text-[10px] font-bold text-teal">{status}</span>
      </div>
      <div className="flex flex-col items-center gap-2.5">
        <div className="flex gap-2.5">
          {sourceLetters.map((l, i) => (
            <span
              key={i}
              className="flex size-6 items-center justify-center rounded-full border border-teal bg-teal-tint text-[10px] font-bold text-teal"
            >
              {l}
            </span>
          ))}
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <span className="flex size-14 flex-col items-center justify-center rounded-xl bg-teal text-center text-white">
            {label
              .split(" ")
              .slice(0, 2)
              .map((word, i) => (
                <span key={i} className={i === 0 ? "text-xs font-bold" : "text-[10px]"}>
                  {word.toUpperCase()}
                </span>
              ))}
          </span>
        </div>
        <div className="flex gap-2.5">
          {outputLetters.map((l, i) => (
            <span
              key={i}
              className="flex size-6 items-center justify-center rounded-full border border-teal bg-teal-tint text-[10px] font-bold text-teal"
            >
              {l}
            </span>
          ))}
        </div>
      </div>
      <p className="text-center text-[11px] text-muted">{caption}</p>
      <p className="text-center text-[9px] font-medium uppercase leading-tight tracking-wide text-muted">
        Synthetic portfolio data
      </p>
    </div>
  );
}
