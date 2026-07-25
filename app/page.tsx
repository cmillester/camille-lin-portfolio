import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import TimelineEntry from "@/components/TimelineEntry";
import ImpactCard from "@/components/ImpactCard";
import CredentialTag from "@/components/CredentialTag";
import MiniDashboardPreview from "@/components/MiniDashboardPreview";
import MiniPipelinePreview from "@/components/MiniPipelinePreview";

export const metadata: Metadata = {
  title: "Camille Lin — Technical Program Manager | Data & Product Operations",
  description:
    "I build data systems, operational tools, and programs that help teams make clearer decisions. Portfolio of governance dashboards, operational data platforms, accessibility enablement, and reporting automation.",
  alternates: { canonical: "/" },
};

const capabilities = [
  "Data Products",
  "Analytics",
  "Automation",
  "Program Management",
  "Operational Systems",
  "Applied AI",
];

const timeline = [
  {
    range: "2025 - Present",
    title: "Senior QA Analyst, QA PMO, Netflix Games",
    description:
      "Leads program, data, and operations initiatives spanning governance dashboards, automated reporting, operational data platforms, self-service tools, enablement programs, and AI-powered knowledge systems.",
  },
  {
    range: "2024 - 2025",
    title: "Senior QA Analyst, Compliance QA, Netflix Games",
    description:
      "Expanded into operational systems, governance dashboards, vendor reporting, centralized datasets, and reporting automation.",
  },
  {
    range: "2022 - 2024",
    title: "QA Analyst, Compliance & Compatibility, Netflix Games",
    description:
      "Owned release readiness, compatibility, launch support, defect triage, reporting standards, and cross-functional issue resolution.",
  },
  {
    range: "2021 - 2022",
    title: "QA Engineer II, The LEGO Group",
    description:
      "Combined QA engineering with Scrum Master responsibilities, facilitating planning, refinement, retrospectives, and delivery coordination. Improved regression cycle time by 40%.",
  },
  {
    range: "2021 - 2022",
    title: "QA Engineer, iTrustCapital",
    description: "Led mobile, backend, and API automation initiatives. Reduced regression execution time by 35%.",
  },
  {
    range: "2018 - 2021",
    title: "Business Analyst to QA Analyst, Mint Mobile",
    description:
      "Coordinated mobile feature validation, requirements, and release readiness across Product and Engineering. Improved testing cycle time by 20%.",
  },
];

const impact = [
  { value: "40%", description: "faster regression cycles — The LEGO Group" },
  { value: "35%", description: "faster regression execution — iTrustCapital" },
  { value: "20%", description: "faster testing cycles — Mint Mobile" },
];

const credentials = [
  "Certified ScrumMaster",
  "Certified Scrum Product Owner",
  "IBM Business Intelligence Analyst",
  "AI: Business Strategies & Applications — UC Berkeley",
  "UX Research & Prototyping — UC San Diego",
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="border-b border-border px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
          <div className="mx-auto flex w-full max-w-content flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <p className="text-xs font-bold uppercase tracking-wide text-teal sm:text-[12px]">
                  Technical Program Management &amp; Product Operations
                </p>
              </div>
              <h1 className="max-w-4xl font-display text-[28px] font-semibold leading-tight text-ink sm:text-4xl lg:text-[48px]">
                I build data systems, operational tools, and programs that help teams make clearer decisions.
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-lg">
                Technical program and data operations leader with experience building internal platforms,
                automated reporting pipelines, governance dashboards, self-service tools, and AI-powered
                knowledge systems.
              </p>
            </div>
            <div className="hidden items-center gap-4 sm:flex" aria-hidden="true">
              <span className="h-px w-12 bg-border-soft" />
              <p className="whitespace-nowrap text-[11px] uppercase tracking-wide text-muted">
                Data-Informed Governance &amp; Execution
              </p>
              <span className="h-px flex-1 bg-border-soft" />
            </div>
          </div>
        </section>

        {/* Featured Work */}
        <section id="work" className="px-4 py-16 sm:px-6 lg:px-16 lg:py-20">
          <div className="mx-auto flex w-full max-w-content flex-col gap-10">
            <div className="flex items-end justify-between gap-4">
              <SectionHeading eyebrow="Selected Work" title="Featured Systems" />
              <p className="hidden text-sm font-semibold text-teal sm:block">Showing 4 Case Studies</p>
            </div>
            <p className="-mt-6 text-sm font-semibold text-teal sm:hidden">Showing 4 Case Studies</p>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              <ProjectCard
                href="/work/requirements-governance"
                title="Requirements Governance Dashboard"
                description="Built the first centralized analytics system for evaluating newly established game requirements, transforming Jira activity into governance-level insights."
                tags={["SQL", "Data Modeling", "Preset", "Dashboard Design", "Metric Definition", "Stakeholder Alignment"]}
                status="Read Case Study"
                visual={<MiniDashboardPreview />}
              />
              <ProjectCard
                href="/work/qa-data-platform"
                title="QA Data Platform"
                description="Designed a QA-owned operational data platform connecting reporting, vendor data, and pipeline infrastructure across PMO, Compliance, Compatibility, and Tech QA."
                tags={["Data Architecture", "Automation", "Cross-Team Ops", "Pipeline Design"]}
                status="In Progress"
                visual={
                  <MiniPipelinePreview
                    label="QA Data Platform"
                    status="LIVE"
                    sourceLetters={["J", "V", "D"]}
                    outputLetters={["R", "S", "A"]}
                    caption="Sources → Platform → Reporting & Analytics"
                  />
                }
              />
              <ProjectCard
                href="/work/accessibility-enablement"
                title="Accessibility Enablement System"
                description="Created an accessibility enablement system combining practical testing guidance, interactive training, and an AI-powered assistant to help teams recognize barriers and apply accessibility standards throughout development."
                tags={["Accessibility", "Applied AI", "Interactive Learning", "Content Strategy", "Program Design", "Enablement"]}
                status="Built & Launched"
                visual={
                  <MiniPipelinePreview
                    label="A11Y Enable"
                    status="LIVE"
                    sourceLetters={["P", "C", "A"]}
                    outputLetters={["L", "G", "T"]}
                    caption="Testing Playbook → Interactive Challenge → AI Assistant"
                  />
                }
              />
              <ProjectCard
                href="/work/reporting-automation"
                title="Reporting Automation & Data Pipeline"
                description="Built an automated pipeline that transformed vendor-submitted compatibility performance logs into centralized, queryable data and decision-ready reporting."
                tags={["AWS S3", "Data Pipelines", "Automation", "Data Modeling", "SQL", "Vendor Operations"]}
                status="Built & Implemented"
                visual={
                  <MiniPipelinePreview
                    label="Data Pipe"
                    status="LIVE"
                    sourceLetters={["S3", "S3", "L"]}
                    outputLetters={["R", "D", "T"]}
                    caption="Vendor Logs → Cloud Storage → Data Pipeline → Reporting Dataset"
                  />
                }
              />
            </div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-16 lg:py-20">
          <div className="mx-auto flex w-full max-w-content flex-col gap-8">
            <SectionHeading eyebrow="What I Do" title="Core Capabilities" />
            <ul className="flex flex-wrap gap-3 sm:gap-4">
              {capabilities.map((c) => (
                <li
                  key={c}
                  className="rounded-lg border border-border bg-white px-4 py-3 font-display text-sm font-semibold text-ink sm:px-6 sm:py-4 sm:text-base"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-16 lg:py-20">
          <div className="mx-auto flex w-full max-w-content flex-col gap-8">
            <SectionHeading eyebrow="Experience" title="Career Timeline" />
            <div className="flex flex-col">
              {timeline.map((entry, i) => (
                <TimelineEntry key={entry.title} {...entry} bordered={i < timeline.length - 1} />
              ))}
            </div>
          </div>
        </section>

        {/* Earlier Impact */}
        <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-16 lg:py-20">
          <div className="mx-auto flex w-full max-w-content flex-col gap-6">
            <SectionHeading eyebrow="Earlier Impact" title="Earlier efficiency wins" />
            <div className="flex flex-wrap gap-4">
              {impact.map((item) => (
                <ImpactCard key={item.value + item.description} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Certifications & Education */}
        <section className="border-t border-border px-4 py-16 sm:px-6 lg:px-16 lg:py-20">
          <div className="mx-auto flex w-full max-w-content flex-col gap-6">
            <SectionHeading eyebrow="Credentials" title="Certifications & education" />
            <ul className="flex flex-wrap gap-4">
              {credentials.map((c) => (
                <li key={c}>
                  <CredentialTag label={c} />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* About / Philosophy */}
        <section id="about" className="bg-section px-4 py-16 sm:px-6 lg:px-16 lg:py-20">
          <div className="mx-auto flex w-full max-w-content flex-col gap-6">
            <p className="text-xs font-bold uppercase tracking-wide text-teal">Philosophy</p>
            <h2 className="font-display text-2xl font-semibold text-ink sm:text-3xl">
              Turning ambiguity into systems
            </h2>
            <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              I thrive at the intersection of data, operations, and product, turning ambiguous problems into
              structured systems that scale. I&apos;m drawn to roles where I can build something from zero,
              define metrics that matter, and ship tools that teams actually use.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
