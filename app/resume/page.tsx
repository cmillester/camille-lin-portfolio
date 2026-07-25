import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { resumeContent } from "@/lib/content/resume";
import { DownloadIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "C. LIN — Technical Program Manager, Data & Product Operations. Accessible HTML resume with a downloadable PDF version.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  const { name, location, summary, roles, skillGroups, certificationGroups, educationEntries } = resumeContent;

  return (
    <>
      <Header />
      <main id="main-content">
        <div className="mx-auto flex w-full max-w-content flex-col gap-10 px-4 py-12 sm:px-6 lg:px-16 lg:py-16">
          <div className="flex flex-col gap-4 border-b border-border pb-8">
            <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">{name}</h1>
            <p className="text-base text-muted">
              {location}{" "}
              <a href={`mailto:${site.email}`} className="font-semibold text-teal hover:underline">
                Email Camille
              </a>{" "}
              ·{" "}
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-teal hover:underline"
              >
                View LinkedIn profile
              </a>
            </p>
            <a
              href={site.resumePath}
              download
              className="inline-flex min-h-11 w-fit items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white hover:bg-ink-soft"
            >
              <DownloadIcon className="size-4" />
              Download PDF Resume
            </a>
          </div>

          <section aria-labelledby="summary-heading" className="flex flex-col gap-3">
            <h2 id="summary-heading" className="font-display text-2xl font-semibold text-teal">
              Summary
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-ink">{summary}</p>
          </section>

          <section aria-labelledby="experience-heading" className="flex flex-col gap-8">
            <h2 id="experience-heading" className="font-display text-2xl font-semibold text-teal">
              Experience
            </h2>
            {roles.map((role) => (
              <div
                key={role.title + role.dateRange}
                className="flex flex-col gap-2 border-t border-border pt-6 first:border-t-0 first:pt-0"
              >
                <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{role.title}</h3>
                <p className="text-sm font-medium text-muted">{role.dateRange}</p>
                {role.functionalFocus && <p className="text-sm italic text-teal">{role.functionalFocus}</p>}
                <ul className="mt-1 flex flex-col gap-2">
                  {role.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-relaxed text-ink sm:text-[15px]">
                      <span className="mt-0.5 text-teal" aria-hidden="true">
                        –
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section aria-labelledby="skills-heading" className="flex flex-col gap-3">
            <h2 id="skills-heading" className="font-display text-2xl font-semibold text-teal">
              Skills
            </h2>
            <dl className="flex flex-col gap-2 text-sm leading-relaxed text-ink sm:text-[15px]">
              {skillGroups.map((g) => (
                <div key={g.label}>
                  <dt className="inline font-semibold">{g.label}: </dt>
                  <dd className="inline">{g.detail}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="certifications-heading" className="flex flex-col gap-3">
            <h2 id="certifications-heading" className="font-display text-2xl font-semibold text-teal">
              Certifications
            </h2>
            <dl className="flex flex-col gap-2 text-sm leading-relaxed text-ink sm:text-[15px]">
              {certificationGroups.map((g) => (
                <div key={g.label}>
                  <dt className="inline font-semibold">{g.label}: </dt>
                  <dd className="inline">{g.detail}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section aria-labelledby="education-heading" className="flex flex-col gap-3">
            <h2 id="education-heading" className="font-display text-2xl font-semibold text-teal">
              Education
            </h2>
            <dl className="flex flex-col gap-2 text-sm leading-relaxed text-ink sm:text-[15px]">
              {educationEntries.map((e) => (
                <div key={e.label}>
                  <dt className="inline font-semibold">{e.label} </dt>
                  <dd className="inline">{e.detail}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
