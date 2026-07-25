import Link from "next/link";
import { ArrowRightIcon } from "./icons";

type NextProjectProps = {
  variant: "next";
  title: string;
  status: string;
  description: string;
  href: string;
};

type FinalProps = {
  variant: "final";
  previousTitle: string;
  previousStatus: string;
};

export default function PrevNextNav(props: NextProjectProps | FinalProps) {
  if (props.variant === "next") {
    return (
      <nav aria-label="Next project" className="w-full bg-section px-4 py-10 sm:px-6 lg:px-16 lg:py-16">
        <p className="mb-6 text-xs font-bold uppercase tracking-wide text-muted">Up Next</p>
        <Link
          href={props.href}
          className="group flex w-full items-center justify-between gap-6 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal"
        >
          <div className="flex flex-col gap-2">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-[28px]">
              {props.title} — <span className="text-teal">{props.status}</span>
            </h2>
            <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{props.description}</p>
          </div>
          <span
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <ArrowRightIcon className="size-5" />
          </span>
        </Link>
      </nav>
    );
  }

  return (
    <nav
      aria-label="Project navigation"
      className="flex w-full flex-col gap-6 bg-section px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-16 lg:py-16"
    >
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted">Previous Project</p>
        <p className="font-display text-lg font-semibold text-ink sm:text-xl">
          {props.previousTitle} — <span className="text-teal">{props.previousStatus}</span>
        </p>
      </div>
      <Link
        href="/#work"
        className="inline-flex min-h-11 w-fit items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-ink-soft"
      >
        Back to Featured Work
      </Link>
    </nav>
  );
}
