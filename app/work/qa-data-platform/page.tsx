import type { Metadata } from "next";
import type { SVGProps } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/CaseStudyHero";
import MetricCard from "@/components/MetricCard";
import SkillTag from "@/components/SkillTag";
import ComparisonTable from "@/components/ComparisonTable";
import DataFlowStep from "@/components/DataFlowStep";
import SyntheticDashboard from "@/components/SyntheticDashboard";
import AccessibleTable from "@/components/AccessibleTable";
import PrevNextNav from "@/components/PrevNextNav";
import { CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "QA Data Platform",
  description:
    "Building a QA-owned operational data platform that connects fragmented reporting, vendor, and risk data into a structured, self-service data layer. In progress.",
  alternates: { canonical: "/work/qa-data-platform" },
};

// ---------------------------------------------------------------------------
// Local, page-only decorative icons (kept out of components/ per project rules).
// All follow the same outline style as components/icons.tsx and are
// aria-hidden by default since the adjacent text label carries the meaning.
// ---------------------------------------------------------------------------
function IconBase({ children, ...props }: SVGProps<SVGSVGElement> & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

function LoaderIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3v3" />
      <path d="M12 18v3" />
      <path d="m5.6 5.6 2.1 2.1" />
      <path d="m16.3 16.3 2.1 2.1" />
      <path d="M3 12h3" />
      <path d="M18 12h3" />
      <path d="m5.6 18.4 2.1-2.1" />
      <path d="m16.3 7.7 2.1-2.1" />
    </IconBase>
  );
}

function DatabaseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </IconBase>
  );
}

function RefreshCwIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </IconBase>
  );
}

function UserCheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="9" cy="8" r="3.25" />
      <path d="M2.5 19a6.5 6.5 0 0 1 13 0" />
      <path d="m16 11 2 2 4-4" />
    </IconBase>
  );
}

// ---------------------------------------------------------------------------
// Content
// ---------------------------------------------------------------------------

const principles = [
  {
    title: "1. Team-Owned Data",
    description: "Operational data should live in a structured space the QA organization can maintain.",
  },
  {
    title: "2. Self-Service Access",
    description: "Users should be able to view, submit, and update records without writing SQL.",
  },
  {
    title: "3. Connect, Don't Replace",
    description: "The platform should work alongside established systems of record.",
  },
  {
    title: "4. Data Foundation First",
    description: "Reliable structured data should precede expanded dashboards and predictive analysis.",
  },
  {
    title: "5. Start With One Workflow",
    description: "Vendor utilization provides the first focused end-to-end use case.",
  },
];

const roleBullets = [
  "Defined the platform problem, product scope, phased roadmap, and success criteria",
  "Designed the QA-owned schema and relationships between operational data sources",
  "Authored requirements for the data layer, automated ingestion, and self-service interface",
  "Evaluated implementation options against security, longevity, data connectivity, and team ownership",
  "Designed workflows for viewing, filtering, submitting, editing, validating, and resolving duplicate records",
  "Selected vendor utilization as the first end-to-end operational workflow",
  "Replaced manually maintained SQL mappings with structured reference tables and an automated daily pipeline",
  "Documented the schema, data definitions, dependencies, constraints, and future reporting layer",
];

const recordRows = [
  { title: "Project Alpha", vendor: "Globex QA", hours: "140 hrs" },
  { title: "Project Omega", vendor: "Initech", hours: "95 hrs" },
];

const roadmapPhases = [
  {
    phase: "PHASE 1 · PLANNED",
    title: "Data Foundation",
    items: [
      "Establish the QA-owned schema",
      "Integrate cleaned operational source data",
      "Create shared reference tables",
      "Configure automated refreshes",
      "Validate data quality and ownership",
    ],
  },
  {
    phase: "PHASE 2 · PLANNED",
    title: "Self-Service Operations",
    items: [
      "Build record browsing and filtering",
      "Add guided submission and editing",
      "Launch vendor utilization workflow",
      "Add duplicate detection and resolution",
      "Introduce permissions after core workflows stabilize",
    ],
  },
];

const progressItems = [
  { text: "Defined the platform strategy, architecture, scope, and success criteria", done: true },
  {
    text: "Established the foundational QA-owned data structure and reference-table approach",
    done: true,
  },
  { text: "Implemented a daily pipeline for dynamically maintained requirement metadata", done: true },
  { text: "Replaced hardcoded mappings in connected governance reporting", done: true },
  { text: "Validated the internal application and data-warehouse connection approach", done: true },
  {
    text: "Continuing development of the self-service UI and vendor-utilization workflow",
    done: false,
  },
];

const successCriteria = [
  {
    title: "Data Layer",
    items: [
      "Operational sources consolidate into the QA-owned schema",
      "Automated refreshes keep connected data current",
      "UI-submitted records appear correctly in the data layer",
    ],
  },
  {
    title: "Self-Service UI",
    items: [
      "QA leads can view, filter, submit, and edit records without SQL",
      "Vendors can submit utilization information through a guided workflow",
      "Duplicate detection surfaces likely data-entry errors",
    ],
  },
  {
    title: "Operational Value",
    items: [
      "Vendor utilization functions as a complete end-to-end workflow",
      "At least one recurring question previously requiring a custom report can be answered from the shared data layer",
      "The platform becomes a reusable foundation for additional QA workflows",
    ],
  },
];

const skills = [
  "Product Strategy",
  "PRD Development",
  "Data Architecture",
  "Schema Design",
  "SQL",
  "Trino",
  "Data Modeling",
  "Data Pipelines",
  "Reference Data",
  "CRUD Workflow Design",
  "UX Requirements",
  "Tool Evaluation",
  "Scope Management",
  "Data Governance",
  "Claude Code",
  "Posit Connect",
  "Documentation",
];

const jumpLinks = [
  { label: "Challenge", href: "#challenge" },
  { label: "Architecture", href: "#architecture" },
  { label: "Experience", href: "#experience" },
  { label: "Delivery", href: "#delivery" },
  { label: "Progress", href: "#progress" },
];

export default function QaDataPlatformPage() {
  return (
    <>
      <Header breadcrumbLabel="QA Data Platform" />
      <main id="main-content">
        <CaseStudyHero
          eyebrow="Case Study • Data Products, Operations & Platform Design"
          title="Building a QA-Owned Operational Data Platform"
          summary="Designed a QA-owned operational data platform that brings fragmented reporting, vendor, readiness, and risk data into a structured data layer with a self-service interface for non-technical users."
        />

        <section className="px-4 py-8 sm:px-6 lg:px-16 lg:py-12">
          <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            <MetricCard label="Status" value="In Progress" icon={LoaderIcon} />
            <MetricCard label="Data Foundation" value="QA-Owned Schema" icon={DatabaseIcon} />
            <MetricCard label="Automation" value="Daily Reference-Data Pipeline" icon={RefreshCwIcon} />
            <MetricCard label="First Workflow" value="Vendor Utilization" icon={UserCheckIcon} />
          </div>
        </section>

        {/* Jump links */}
        <nav aria-label="Section links" className="border-b border-t border-border px-4 py-4 sm:px-6 lg:px-16">
          <ul className="mx-auto flex w-full max-w-content flex-wrap items-center justify-center gap-2 text-center text-xs text-muted sm:gap-3">
            {jumpLinks.map((link, i) => (
              <li key={link.href} className="flex items-center gap-2 sm:gap-3">
                <a href={link.href} className="rounded-sm py-2 hover:text-teal">
                  {link.label}
                </a>
                {i < jumpLinks.length - 1 && <span aria-hidden="true">·</span>}
              </li>
            ))}
          </ul>
        </nav>

        <div className="mx-auto flex w-full max-w-content flex-col gap-16 px-4 pb-16 sm:px-6 lg:gap-20 lg:px-16 lg:pb-24">
          {/* Challenge + Role */}
          <div id="challenge" className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">The Challenge</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Fragmented Operational Data &amp; SQL Bottlenecks
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                QA produced valuable operational data that had no structured, team-owned home. Bug data lived
                in an engineering-owned system, title and milestone information lived in a production-owned
                system, and readiness assessments, vendor effort, risk ratings, observations, and analyst
                commentary often remained in spreadsheets or static reports. Answering a new leadership
                question required someone to define the criteria, query multiple sources, reconcile
                inconsistent records, and build a one-off report. Access to operational knowledge depended on
                the availability of people with SQL and dashboard expertise.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">My Role &amp; Initiative</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                My Role: Program Lead &amp; Data Product Builder
              </h2>
              <ul className="flex flex-col gap-2">
                {roleBullets.map((line) => (
                  <li key={line} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <span className="text-teal" aria-hidden="true">
                      •
                    </span>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Principles */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">Product Vision</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Product Principles</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {principles.map((p) => (
                <div key={p.title} className="flex flex-col gap-2 rounded-lg border border-border bg-white p-5">
                  <p className="font-display text-sm font-semibold text-ink">{p.title}</p>
                  <p className="text-[13px] leading-relaxed text-muted">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* System Architecture */}
          <div id="architecture" className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">System Architecture</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">System Architecture</h2>
            </div>
            <DataFlowStep
              nodes={[
                { title: "Operational Sources", subtitle: "Jira records, title metadata, vendor submissions" },
                {
                  title: "Automated Data Pipelines",
                  subtitle: "Scheduled ingestion, transformation, & validation",
                },
                {
                  title: "QA-Owned Data Layer",
                  subtitle: "Structured tables, reference data, shared definitions",
                  emphasis: true,
                },
                {
                  title: "Self-Service Operations UI",
                  subtitle: "View, filter, submit, edit, and resolve duplicates",
                },
                {
                  title: "Reporting & Decisions",
                  subtitle: "Vendor planning, readiness, risk visibility, & dashboards",
                },
              ]}
            />
          </div>

          {/* Comparison table */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">Value Mapping</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                From Fragmented Data to a Shared Platform
              </h2>
            </div>
            <ComparisonTable
              caption="Operational problems mapped to their platform decision and expected value"
              headers={["Operational Problem", "Platform Decision", "Expected Value"]}
              rows={[
                {
                  columns: [
                    "Data spread across systems, spreadsheets, and static reports",
                    "Create a QA-owned structured data layer connected to existing sources",
                    "New questions can be answered from reusable data instead of one-off reconciliation",
                  ],
                  emphasis: 1,
                },
                {
                  columns: [
                    "Access requires SQL or dashboard-building knowledge",
                    "Provide a self-service interface for common record workflows",
                    "QA leads and vendors can manage data through guided forms and filtered views",
                  ],
                  emphasis: 1,
                },
                {
                  columns: [
                    "Reference values and exclusions require manual SQL maintenance",
                    "Move reference logic into structured tables with automated updates",
                    "Changes propagate through connected datasets without repeated SQL edits",
                  ],
                  emphasis: 1,
                },
              ]}
            />
          </div>

          {/* Entity relationships */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">Schema Design</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Structured Operational Entity Relationships
              </h2>
            </div>
            <div className="flex flex-col gap-8 rounded-card border border-border bg-white p-6 sm:p-8">
              <div className="flex flex-col gap-3">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                  Title &amp; milestone lineage
                </p>
                <DataFlowStep
                  nodes={[
                    { title: "Game Title", subtitle: "ID (PK) · Name · Status" },
                    { title: "Milestone", subtitle: "ID (PK) · Title_ID (FK) · Release_Date" },
                    { title: "QA Engagement", subtitle: "ID (PK) · Milestone_ID · Budget_Hours" },
                  ]}
                />
              </div>
              <div className="flex flex-col gap-3 border-t border-border pt-8">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-muted">
                  Vendor, utilization &amp; risk records
                </p>
                <DataFlowStep
                  nodes={[
                    { title: "Vendor", subtitle: "ID (PK) · Company_Name · Tier_Level" },
                    {
                      title: "Utilization Submission",
                      subtitle: "ID (PK) · Vendor_ID (FK) · Hours_Worked",
                      emphasis: true,
                    },
                    { title: "Readiness Assessment", subtitle: "ID (PK) · Title_ID (FK) · Risk_Score" },
                    { title: "Risk or Observation", subtitle: "ID (PK) · Source_ID · Severity_Index" },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Self-service experience design */}
          <div id="experience" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">Interface Study</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Self-Service Experience Design
              </h2>
              <p className="text-sm text-muted">
                Understated operational UI mockups optimized for viewability, submission, validation, and
                automated matching.
              </p>
            </div>
            <SyntheticDashboard>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col gap-3 rounded-md border border-border p-4">
                  <h3 className="font-display text-sm font-semibold text-ink">1. Record Explorer</h3>
                  <div className="flex flex-wrap gap-1.5 text-[11px]">
                    {["Title: All", "Vendor: All", "Period: Q3"].map((f) => (
                      <span key={f} className="rounded border border-border px-2 py-1 text-muted">
                        {f}
                      </span>
                    ))}
                  </div>
                  <AccessibleTable
                    caption="Sample utilization records shown for the title, vendor, and hours filters"
                    columns={[
                      { key: "title", header: "Title" },
                      { key: "vendor", header: "Vendor" },
                      { key: "hours", header: "Hours" },
                    ]}
                    rows={recordRows}
                  />
                </div>
                <div className="flex flex-col gap-3 rounded-md border border-border p-4">
                  <h3 className="font-display text-sm font-semibold text-ink">2. Guided Submission Form</h3>
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-muted">Target Milestone</span>
                      <span className="rounded border border-border px-2 py-1.5 text-ink">Select Milestone…</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-muted">Submitted Hours</span>
                      <span className="rounded border border-border px-2 py-1.5 text-ink">e.g. 120</span>
                    </div>
                    <p className="mt-1 rounded-md bg-teal py-2 text-center text-[13px] font-semibold text-white">
                      Validate &amp; Submit
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 rounded-md border border-border p-4">
                  <h3 className="font-display text-sm font-semibold text-ink">3. Validation Protocol</h3>
                  <div className="flex flex-col gap-2 text-xs">
                    <p className="flex items-start gap-2 rounded-md bg-teal-tint p-2 text-teal">
                      <CheckIcon className="mt-0.5 size-3 shrink-0" />
                      <span>Milestone scope matches active PMO reference table.</span>
                    </p>
                    <p className="flex items-start gap-2 rounded-md bg-section p-2 text-ink">
                      <span aria-hidden="true">⚠</span>
                      <span>Warning: hours exceed the average baseline by 45%.</span>
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 rounded-md border border-border p-4">
                  <h3 className="font-display text-sm font-semibold text-ink">4. Duplicate Resolution</h3>
                  <div className="flex items-start justify-between gap-2 rounded-md border border-border p-2 text-xs">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-ink">Possible match detected (92%)</p>
                      <p className="text-[11px] text-muted">Two submissions for same vendor &amp; date</p>
                    </div>
                    <span className="shrink-0 rounded bg-teal px-2 py-1 text-[11px] font-medium text-white">
                      Resolve
                    </span>
                  </div>
                </div>
              </div>
            </SyntheticDashboard>
          </div>

          {/* First workflow */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">Operational Pilot</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                First Workflow: Vendor Utilization
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-[15px]">
                Vendor utilization was selected as the first end-to-end workflow because it represents a
                recurring operational need with clear users, structured inputs, and immediate planning value.
                Vendors submit effort data through the interface, QA leads review and manage the records, and
                the resulting information becomes available in the shared data layer for future analysis.
              </p>
            </div>
            <DataFlowStep
              nodes={[
                { title: "1. Vendor Submission", subtitle: "Vendor uploads effort data through the interface" },
                { title: "2. Validation", subtitle: "System checks scope, hours, and possible duplicates" },
                { title: "3. QA Review", subtitle: "QA lead reviews and manages the record" },
                { title: "4. Structured Record", subtitle: "Entry becomes part of the shared data layer" },
                { title: "5. Planning & Analysis", subtitle: "Available for future planning and reporting" },
              ]}
            />
          </div>

          {/* Logic pivot */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-4">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">Metric Definition Strategy</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                From Hardcoded Logic to Reference Data
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                We migrated structural rules out of query-level filters and directly into easily maintainable
                database reference tables. This ensured consistency across pipelines.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-3 rounded-lg border border-border bg-white p-5 sm:p-6">
                <p className="font-display text-base font-semibold text-ink">Before</p>
                <ul className="flex flex-col gap-2 text-[13px] leading-relaxed text-muted">
                  <li>Requirement descriptions embedded directly in SQL</li>
                  <li>Classification rules maintained through large conditional statements</li>
                  <li>Project exclusions stored in manually updated query lists</li>
                  <li>Changes required editing multiple datasets or dashboards</li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 rounded-lg border-[1.5px] border-teal bg-white p-5 sm:p-6">
                <p className="font-display text-base font-semibold text-teal">After</p>
                <ul className="flex flex-col gap-2 text-[13px] leading-relaxed text-ink">
                  {[
                    "Requirement metadata stored in a shared reference table",
                    "Classifications joined dynamically from structured data",
                    "Project exclusions maintained as reusable reference records",
                    "Automated pipeline updates connected reporting on a daily schedule",
                  ].map((line) => (
                    <li key={line} className="flex gap-2">
                      <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-teal" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Key technical decision */}
          <div className="rounded-lg bg-teal-tint p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-teal sm:text-xl">Key Technical Decision</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink sm:text-[15px]">
              &ldquo;Operational definitions belong in maintainable data structures. Moving reference logic out
              of individual SQL queries created a reusable foundation that connected tools could share.&rdquo;
            </p>
          </div>

          {/* Roadmap */}
          <div id="delivery" className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">Execution Plan</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Phased Delivery Roadmap
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted">
                The phases below outline the planned build sequence and have not been completed yet. See{" "}
                <a href="#progress" className="font-semibold text-teal hover:underline">
                  Current Progress
                </a>{" "}
                for what is actually live today.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {roadmapPhases.map((phase) => (
                <div key={phase.title} className="flex flex-col gap-4 rounded-lg border border-border bg-white p-6 sm:p-8">
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-bold uppercase tracking-wide text-muted">{phase.phase}</p>
                    <h3 className="font-display text-lg font-semibold text-ink">{phase.title}</h3>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {phase.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                        <span className="text-teal" aria-hidden="true">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Current progress */}
          <div id="progress" className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">Status Check</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Current Progress</h2>
            </div>
            <ul className="flex flex-col gap-3">
              {progressItems.map((item) => (
                <li key={item.text} className="flex items-start gap-2 text-sm leading-relaxed">
                  {item.done ? (
                    <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-teal" />
                  ) : (
                    <span className="mt-0.5 shrink-0 rounded bg-section px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-muted">
                      In Progress
                    </span>
                  )}
                  <span className={item.done ? "text-muted" : "text-ink"}>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Success criteria */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">Performance Metrics</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Platform Success Criteria
              </h2>
              <p className="max-w-3xl text-sm leading-relaxed text-muted">
                These criteria define what a successful first release of the platform will demonstrate once the
                current build work is complete; they are not yet fully met.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {successCriteria.map((group) => (
                <div key={group.title} className="flex flex-col gap-3">
                  <h3 className="text-xs font-bold uppercase tracking-wide text-ink">{group.title}</h3>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted">
                        <span className="text-teal" aria-hidden="true">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Data constraints */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold uppercase tracking-wide text-teal">Design Constraints</p>
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              Data Constraints &amp; Scope Decisions
            </h2>
            <p className="max-w-3xl text-sm leading-relaxed text-muted sm:text-[15px]">
              The first version prioritizes a stable data layer and one complete operational workflow.
              Expanded dashboards, predictive modeling, and additional testing-system integrations remain
              future phases. Permissions are introduced after the core record workflows are stable, allowing
              the team to validate the product foundation before adding further complexity.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">Skills &amp; Technologies</h2>
            <ul className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <li key={s}>
                  <SkillTag label={s} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <PrevNextNav
          variant="next"
          title="Accessibility Enablement System"
          status="Built & Launched"
          description="Created an accessibility enablement system combining practical testing guidance, interactive training, and an AI-powered assistant to help teams recognize barriers and apply accessibility standards throughout development."
          href="/work/accessibility-enablement"
        />
      </main>
      <Footer />
    </>
  );
}
