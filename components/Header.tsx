"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { MenuIcon, CloseIcon } from "./icons";

type HeaderProps = {
  /** When set, replaces "Featured Work" with a "Work / <label>" breadcrumb (case study pages). */
  breadcrumbLabel?: string;
};

export default function Header({ breadcrumbLabel }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-cream/95 backdrop-blur supports-[backdrop-filter]:bg-cream/80">
      <div className="mx-auto flex w-full max-w-content items-center justify-between px-4 py-4 sm:px-6 lg:px-16 lg:py-6">
        <Link href="/" className="flex items-center gap-2 rounded-sm" aria-label={`${site.name} — home`}>
          <span className="size-2 shrink-0 rounded-sm bg-teal" aria-hidden="true" />
          <span className="font-display text-base font-bold text-ink">{site.name}</span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm lg:flex">
          {breadcrumbLabel ? (
            <p className="text-muted">
              <Link href="/#work" className="hover:text-teal">
                Work
              </Link>
              {"  /  "}
              <span className="font-semibold text-teal">{breadcrumbLabel}</span>
            </p>
          ) : (
            <Link href="/#work" className="font-semibold text-teal hover:underline">
              Featured Work
            </Link>
          )}
          <Link href="/#about" className="font-medium text-ink hover:text-teal">
            About
          </Link>
          <Link href={site.resumePagePath} className="font-medium text-ink hover:text-teal">
            Resume
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex size-11 items-center justify-center rounded-md border border-border text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {/* Mobile nav panel */}
      {open && (
        <nav
          id="mobile-nav-panel"
          aria-label="Primary"
          className="border-t border-border bg-cream px-4 pb-4 pt-2 lg:hidden"
        >
          <ul className="flex flex-col gap-1 text-sm">
            <li>
              <Link
                href="/#work"
                onClick={() => setOpen(false)}
                className="block min-h-11 rounded-md px-2 py-3 font-semibold text-teal"
              >
                Featured Work
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                onClick={() => setOpen(false)}
                className="block min-h-11 rounded-md px-2 py-3 font-medium text-ink"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={site.resumePagePath}
                onClick={() => setOpen(false)}
                className="block min-h-11 rounded-md px-2 py-3 font-medium text-ink"
              >
                Resume
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
