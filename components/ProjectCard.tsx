import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRightIcon } from "./icons";
import SkillTag from "./SkillTag";

type ProjectCardProps = {
  href: string;
  title: string;
  description: string;
  tags: string[];
  status: string;
  visual: ReactNode;
};

export default function ProjectCard({ href, title, description, tags, status, visual }: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group flex w-full flex-col overflow-hidden rounded-card border border-border bg-white transition-shadow hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
    >
      <div className="flex h-[220px] w-full items-center justify-center bg-section p-6 sm:h-[260px]">
        {visual}
      </div>
      <div className="flex flex-1 flex-col gap-5 p-6 sm:p-8">
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-xl font-semibold text-ink sm:text-2xl">{title}</h3>
          <p className="text-sm leading-relaxed text-muted sm:text-[15px]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <SkillTag key={tag} label={tag} />
          ))}
        </div>
        <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-teal">
          {status}
          <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}
