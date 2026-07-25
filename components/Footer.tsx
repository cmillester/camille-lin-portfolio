import Link from "next/link";
import { site } from "@/lib/site";
import { DownloadIcon, LinkIcon, MailIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-cream">
      <div className="mx-auto flex w-full max-w-content flex-col gap-6 px-4 py-10 sm:px-6 lg:px-16 lg:py-12">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <p className="font-display text-lg font-semibold text-ink">
            Let&apos;s build structured solutions together.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={site.resumePagePath}
              className="flex min-h-11 items-center gap-2 rounded-md bg-ink px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-ink-soft"
            >
              <DownloadIcon className="size-3.5" />
              Resume
            </Link>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center gap-2 rounded-md border border-ink px-4 py-2.5 text-[13px] font-semibold text-ink hover:bg-section"
            >
              <LinkIcon className="size-3.5" />
              LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex min-h-11 items-center gap-2 rounded-md border border-ink px-4 py-2.5 text-[13px] font-semibold text-ink hover:bg-section"
            >
              <MailIcon className="size-3.5" />
              Email
            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-2 text-muted sm:flex-row sm:items-center">
          <p className="text-xs">© 2026 Camille Lin. Built with clean code and structured data.</p>
          <p className="text-[11px] uppercase tracking-wide">TPM &amp; Data Ops Portfolio</p>
        </div>
      </div>
    </footer>
  );
}
