import type { Metadata } from "next";
import type { SVGProps } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CaseStudyHero from "@/components/CaseStudyHero";
import MetricCard from "@/components/MetricCard";
import SkillTag from "@/components/SkillTag";
import AccessibleTable from "@/components/AccessibleTable";
import DataFlowStep from "@/components/DataFlowStep";
import SyntheticDashboard from "@/components/SyntheticDashboard";
import PrevNextNav from "@/components/PrevNextNav";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Reporting Automation & Data Pipeline",
  description:
    "Designed and implemented a scalable workflow for ingesting raw compatibility performance logs from external testing vendors, centralizing results in a queryable dataset, and automating recurring reporting.",
  alternates: { canonical: "/work/reporting-automation" },
};

/**
 * Small local icons for this page only (not added to components/icons.tsx,
 * since that file is shared with sibling case-study pages being built in
 * parallel). Styled to match the shared icon set: 24x24, stroke-based,
 * decorative by default (aria-hidden) since a visible text label always
 * carries the meaning.
 */
function DatabaseIcon(props: SVGProps<SVGSVGElement>) {
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
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  );
}

function RefreshCwIcon(props: SVGProps<SVGSVGElement>) {
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
      <path d="M21 12a9 9 0 0 1-15.3 6.4L3 15.5" />
      <path d="M3 12a9 9 0 0 1 15.3-6.4L21 8.5" />
      <path d="M3 3v5.5h5.5" />
      <path d="M21 21v-5.5h-5.5" />
    </svg>
  );
}

function ClockIcon(props: SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  );
}

const roleBullets = [
  "Authored the product requirements and defined the pipeline's problem statement, scope, users, and success criteria",
  "Documented the existing vendor-to-report workflow and identified manual processing and data-integrity risks",
  "Built a structured decision framework covering seven potential ingestion approaches",
  "Coordinated requirements across QA, external vendors, data engineering, and infrastructure partners",
  "Selected vendor-managed cloud storage as the preferred ingestion model",
  "Defined the strategy for retaining complete raw logs rather than extracting only selected columns",
  "Established the test-request identifier as the primary anchor connecting uploaded files to test-cycle context",
  "Designed the phased ingestion, validation, data-modeling, and reporting workflow",
  "Established standardized storage and access conventions for vendor-provided test artifacts",
  "Enabled data-warehouse access and automated daily pulls for recurring reporting",
  "Created operational setup guidance and documentation for vendors and internal users",
  "Replaced recurring manual report compilation with automated reporting workflows",
];

const manualSteps = [
  "1. Vendor completes a performance test",
  "2. Vendor sends raw log files",
  "3. Selected sections are manually copied",
  "4. Data is reformatted into a simplified CSV",
  "5. Results are pasted into a spreadsheet",
  "6. A static report is created for one build",
  "7. Historical analysis requires manual reconciliation",
];

const manualIssues = [
  "Formatting inconsistencies",
  "Human transcription errors",
  "Lost source context",
  "Separate reports for every build",
  "Limited historical querying",
  "Repeated analyst effort",
];

const automatedSteps = [
  "1. Vendor completes a performance test",
  "2. Raw logs are uploaded to vendor-managed cloud storage",
  "3. The pipeline retrieves files on a scheduled cadence",
  "4. Source files are preserved in a raw landing layer",
  "5. Records are validated and standardized",
  "6. Structured data becomes available for querying",
  "7. Reports refresh from the centralized dataset",
  "8. Historical trends can be analyzed across test cycles",
];

const automatedImprovements = [
  "Complete source data retained",
  "Standardized schema",
  "Repeatable ingestion",
  "Centralized history",
  "Automated reporting inputs",
  "Scalable cross-device and cross-build analysis",
];

const ingestionOptions = [
  {
    approach: "1. Vendor-Managed S3",
    description: "Vendors maintain their own storage, internal pipeline retrieves approved files.",
    strengths: "Scalable, automatable, reduces internal manual uploads.",
    constraints: "Requires vendor AWS knowledge and permissions coordination.",
    decision: "Selected",
    highlight: true,
  },
  {
    approach: "2. Direct Tool API",
    description: "Retrieve data directly from performance-testing tool.",
    strengths: "Streamlined ingestion.",
    constraints: "Required API capability was unavailable.",
    decision: "Not feasible",
  },
  {
    approach: "3. Scripted Location Pull",
    description: "Vendors place files in a shared location for scheduled retrieval.",
    strengths: "Supports vendors without AWS workflows.",
    constraints: "Requires monitoring, permissions, and scripting.",
    decision: "Viable alternative",
  },
  {
    approach: "4. Managed SFTP Gateway",
    description: "Upload files through an SFTP service connected to cloud storage.",
    strengths: "Familiar file-transfer, highly scalable.",
    constraints: "Infrastructure-heavy, key management required.",
    decision: "Future option",
  },
  {
    approach: "5. Internal Manual Upload",
    description: "Vendors send files to an internal user who uploads to storage.",
    strengths: "Fast to begin.",
    constraints: "Maintains manual effort and does not scale.",
    decision: "Interim only",
  },
  {
    approach: "6. Cross-Account Write",
    description: "Controlled permissions to write directly to internal destination.",
    strengths: "Highly automated.",
    constraints: "Ongoing permission maintenance, AWS dependencies.",
    decision: "Viable (Stable)",
  },
  {
    approach: "7. Email Attachment",
    description: "Logs are emailed to an automated parser.",
    strengths: "Familiar vendor workflow.",
    constraints: "Error-prone, difficult to monitor or scale.",
    decision: "Rejected",
  },
];

const discardedApproach = [
  "Smaller initial dataset",
  "Simpler first query",
  "Discards unused source fields",
  "New metrics require revisiting past files",
  "Preserves the limitations of manual process",
];

const selectedApproach = [
  "Retains the original source record",
  "Supports future metric development",
  "Allows transformations to evolve independently",
  "Requires stronger schema and query design",
  "Creates a reusable historical data foundation",
];

const anchorPathNodes = [
  { title: "Test Request", subtitle: "Synthetic identifier (e.g. REQ-4821)" },
  { title: "Vendor Upload Folder", subtitle: "Standardized naming convention" },
  { title: "Raw Performance Log", subtitle: "Unmodified original payload" },
  { title: "Structured Test Run", subtitle: "Validated schema records" },
  { title: "Reporting Context", subtitle: "Title, build, device, vendor dashboards", emphasis: true },
];

const vendorPipelineNodes = [
  { title: "External Testing Vendor", subtitle: "Performs build compatibility and captures logs" },
  { title: "Vendor-Managed Amazon S3", subtitle: "Secure external file holding location" },
  { title: "Controlled Scheduled Retrieval", subtitle: "Daily secure fetch job triggered internally" },
  { title: "Raw Landing Layer", subtitle: "Preserved original source logs stored securely" },
  { title: "Validation & Standardization", subtitle: "Identifies format types and structural schema" },
  { title: "Queryable Dataset & Reports", subtitle: "Cleaned operational structures refreshed daily", emphasis: true },
];

const entityRowOne = [
  { name: "TEST REQUEST", fields: "Request ID (PK) · Title · Milestone · Requested Date" },
  { name: "BUILD", fields: "Build ID (PK) · Version · Platform · Test Date" },
  { name: "DEVICE", fields: "Device ID (PK) · Model · OS Version · Hardware Tier" },
  { name: "VENDOR", fields: "Vendor ID (PK) · Vendor Alias · Submission Source" },
];

const entityRowTwo = [
  {
    name: "TEST RUN",
    fields: "Test Run ID (PK) · Request ID (FK) · Build ID (FK) · Device ID (FK) · Vendor ID (FK)",
    emphasis: true,
  },
  { name: "SOURCE FILE", fields: "File ID (PK) · Test Run ID (FK) · Original Filename · Upload Timestamp" },
  { name: "PERFORMANCE SAMPLE", fields: "Sample ID (PK) · Test Run ID (FK) · Framerate & CPU/Memory · Heat/Temp metrics" },
];

const ingestionValidationNodes = [
  { title: "1. File Discovery", subtitle: "Detects new vendor files" },
  { title: "2. Source Capture", subtitle: "Preserves original payload" },
  { title: "3. Identifier Validation", subtitle: "Confirms test-request ID" },
  { title: "4. File Validation", subtitle: "Checks format and structure" },
  { title: "5. Standardization", subtitle: "Normalizes into shared schema" },
  { title: "6. Relationship Mapping", subtitle: "Links build, device, vendor" },
  { title: "7. Dataset Load", subtitle: "Writes to queryable dataset" },
  { title: "8. Report Refresh", subtitle: "Updates recurring reports", emphasis: true },
];

const frameRateByTier = [
  { label: "Tier 3 (High-end)", value: "59.2 fps", pct: 100 },
  { label: "Tier 2 (Mid-range)", value: "45.1 fps", pct: 76 },
  { label: "Tier 1 (Low-end)", value: "29.8 fps", pct: 50 },
];

const memoryByBuild = [
  { label: "Build 1084 (Prod)", value: "1,420 MB", pct: 86 },
  { label: "Build 1092 (Dev)", value: "1,650 MB", pct: 100 },
  { label: "Build 1104 (Beta)", value: "1,510 MB", pct: 91 },
];

const vendorRows = [
  { vendor: "Vendor Alpha", runs: "42 runs", duration: "1h 15m", status: "Active — Daily Refresh" },
  { vendor: "Vendor Beta", runs: "31 runs", duration: "1h 22m", status: "Active — Daily Refresh" },
  { vendor: "Vendor Gamma", runs: "15 runs", duration: "2h 05m", status: "Warning — Validation Alert" },
];

const reportingExperienceCards = [
  {
    title: "Test-Cycle Summary",
    bullets: [
      "Build identification metadata",
      "Completed test counts",
      "Vendor submission timestamps",
      "File processing status labels",
      "Key performance anomaly indicators",
    ],
  },
  {
    title: "Device Comparison",
    bullets: [
      "Device hardware tier matrix",
      "Average frame rate trends",
      "CPU/memory resource utilization",
      "Temperature and thermal throttling",
      "Exclusion logic rulesets",
    ],
  },
  {
    title: "Historical Trend",
    bullets: [
      "Build-over-build stability trends",
      "Device-level performance changes",
      "Vendor submission frequency mapping",
      "Data-quality assurance status",
      "Exportable custom criteria reports",
    ],
  },
];

const tradeoffs = [
  {
    title: "Vendor Ownership",
    text: "Use vendor-managed storage for source submission. Trade-off: higher setup coordination in exchange for reduced recurring internal handling.",
  },
  {
    title: "Raw Data Retention",
    text: "Preserve complete source logs. Trade-off: larger storage and more complex querying in exchange for future analytical flexibility.",
  },
  {
    title: "Identifier Anchor",
    text: "Use the test-request ID to associate files. Trade-off: requires consistent naming and behavior in exchange for reliable relationships.",
  },
  {
    title: "Batch Ingestion",
    text: "Use scheduled daily pulls for the delivered workflow. Trade-off: predictable, maintainable processing with a defined daily refresh cadence.",
  },
];

const riskRows = [
  {
    risk: "Missing or invalid test-request identifier",
    control: "Validate before processing and route the file for manual review",
  },
  {
    risk: "Duplicate file submission",
    control: "Compare source metadata and ingestion history before loading",
  },
  {
    risk: "Unexpected file structure",
    control: "Preserve the raw file payload and flag schema exceptions for inspection",
  },
  {
    risk: "Late or missing vendor submission",
    control: "Track expected file delivery and surface incomplete test cycles",
  },
  {
    risk: "Vendor permission or access issue",
    control: "Document setup requirements and verify connectivity during onboarding",
  },
  {
    risk: "Source-format changes",
    control: "Separate the raw ingestion layer from downstream reporting transformations",
  },
];

const phases = [
  {
    phase: "PHASE 1",
    title: "Setup & Vendor Alignment",
    bullets: [
      "Define requirements and success criteria",
      "Establish project tracking",
      "Align with engineering partners",
      "Document vendor ingestion guidelines",
      "Guide vendors through initial setup",
    ],
  },
  {
    phase: "PHASE 2",
    title: "Initial Ingestion",
    bullets: [
      "Begin receiving test file streams",
      "Validate scheduled retrieval reliability",
      "Inspect raw source-file structures",
      "Identify standard transformation rules",
      "Confirm relational mapping integrity",
    ],
  },
  {
    phase: "PHASE 3",
    title: "Automation & Modeling",
    bullets: [
      "Define shared reporting schema model",
      "Standardize metadata field typings",
      "Build recurring batch fetch workflows",
      "Connect datasets to reporting layer",
      "Automate compatibility outputs",
    ],
  },
];

const currentProgress = [
  "Authored the compatibility data-pipeline PRD and requirements",
  "Evaluated seven vendor-ingestion approaches through a structured decision framework",
  "Selected and operationalized a vendor-managed cloud-storage model",
  "Established standardized storage and access conventions for compatibility artifacts",
  "Enabled ingestion of external vendor logs into the internal data environment",
  "Built automated daily data pulls for recurring compatibility reporting",
  "Connected performance data with request and test-cycle context",
  "Replaced recurring manual report compilation with automated reporting workflows",
  "Centralized compatibility data for querying and historical analysis",
  "Documented vendor setup, operational dependencies, and maintenance procedures",
];

const measurableImpact = [
  "Reduced recurring manual handling of vendor performance data",
  "Removed repetitive cut-and-paste report compilation",
  "Preserved complete source logs for future analysis",
  "Improved consistency across vendor submissions and test runs",
  "Created a centralized historical dataset across builds and devices",
  "Enabled recurring reports to refresh from structured data",
  "Supported cross-device, cross-build, and vendor-level trend analysis",
  "Delivered measurable analyst time savings recognized in leadership feedback",
];

const skills = [
  "Technical Program Management",
  "PRD Development",
  "Workflow Mapping",
  "Decision Frameworks",
  "AWS S3",
  "Cloud Data Ingestion",
  "Data Pipelines",
  "Automation",
  "Pipeline Automation",
  "Data Modeling",
  "SQL",
  "Trino",
  "Vendor Operations",
  "Cross-Functional Delivery",
  "Data Quality",
  "Reporting Automation",
  "Requirements Definition",
  "Risk Management",
  "Operational Documentation",
  "Stakeholder Alignment",
];

function BarRow({ label, value, pct, color }: { label: string; value: string; pct: number; color: string }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="text-muted">{label}</span>
        <span className="font-semibold text-ink">{value}</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded bg-section">
        <div className="h-full rounded" style={{ width: `${pct}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

function EntityCard({
  name,
  fields,
  emphasis,
}: {
  name: string;
  fields: string;
  emphasis?: boolean;
}) {
  return (
    <div
      className={`flex w-full flex-col gap-1.5 rounded-md border p-3 text-left lg:w-auto lg:flex-1 ${
        emphasis ? "border-teal bg-teal-tint" : "border-border bg-cream"
      }`}
    >
      <p className="font-display text-[13px] font-semibold text-teal">{name}</p>
      <p className="text-[11px] leading-relaxed text-muted">{fields}</p>
    </div>
  );
}

function EntityArrow() {
  return (
    <div className="flex items-center justify-center py-1 text-muted lg:px-1 lg:py-0" aria-hidden="true">
      <span className="lg:hidden">↓</span>
      <ArrowRightIcon className="hidden size-4 lg:block" />
    </div>
  );
}

export default function ReportingAutomationPage() {
  return (
    <>
      <Header breadcrumbLabel="Reporting Automation" />
      <main id="main-content">
        <CaseStudyHero
          eyebrow="Case Study · Data Pipelines · Automation · Vendor Operations"
          title="Automating Compatibility Performance Logs into Decision-Ready Reporting"
          summary="Designed and implemented a scalable workflow for ingesting raw performance logs from external testing vendors, centralizing the results in a queryable dataset, and automating recurring compatibility reporting."
        />

        <section className="px-4 py-8 sm:px-6 lg:px-16 lg:py-12">
          <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            <MetricCard label="Status" value="Built & Implemented" icon={CheckIcon} />
            <MetricCard label="Ingestion" value="Vendor-Managed Cloud Storage" icon={DatabaseIcon} />
            <MetricCard label="Automation" value="Daily Data Pulls" icon={RefreshCwIcon} />
            <MetricCard label="Impact" value="Measurable Analyst Time Savings" icon={ClockIcon} />
          </div>
        </section>

        <div className="mx-auto flex w-full max-w-content flex-col gap-16 px-4 pb-16 sm:px-6 lg:gap-20 lg:px-16 lg:pb-24">
          {/* Challenge + Role */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                The Challenge: Fragmented Operational Data &amp; Manual Formatting
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                External testing vendors produced detailed performance logs across game builds, devices, and
                test cycles. To make the files easier to read, analysts manually extracted selected sections,
                reformatted the data, and pasted the results into static spreadsheets.
              </p>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                This workflow created formatting inconsistencies, removed potentially valuable context, and
                left each build&apos;s results isolated in a separate report. Historical comparisons required
                manual reconciliation, and the process became increasingly difficult to scale as the number of
                vendors, devices, builds, and test runs grew.
              </p>
              <div className="rounded-lg border border-border bg-section p-5">
                <h3 className="font-display text-sm font-semibold text-ink">Scope Clarification</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-muted">
                  The compatibility performance logs used in this pipeline describe device and platform
                  compatibility test runs — for example frame rate, memory, and stability measurements captured
                  during scripted test passes submitted by external vendors. This project did not evaluate
                  vendor employees, vendor companies, or vendor business performance in any way.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
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

          {/* Manual before / automated after */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              From Manual Reports to Automated Pipeline
            </h2>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex flex-col gap-4 rounded-lg border border-border bg-white p-6">
                <h3 className="font-display text-base font-semibold text-[#9f3804]">
                  Before: Manual Reporting
                </h3>
                <ul className="flex flex-col gap-2 text-[13px] leading-relaxed text-muted">
                  {manualSteps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <hr className="border-border" />
                <div className="flex flex-col gap-1.5 text-[13px]">
                  <p className="font-semibold text-ink">Common Issues:</p>
                  {manualIssues.map((i) => (
                    <p key={i} className="text-muted">
                      • {i}
                    </p>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-4 rounded-lg border-[1.5px] border-teal bg-white p-6">
                <h3 className="font-display text-base font-semibold text-teal">After: Automated Data Pipeline</h3>
                <ul className="flex flex-col gap-2 text-[13px] leading-relaxed text-ink">
                  {automatedSteps.map((s) => (
                    <li key={s}>✓ {s}</li>
                  ))}
                </ul>
                <hr className="border-border" />
                <div className="flex flex-col gap-1.5 text-[13px] text-ink">
                  <p className="font-semibold">Key Improvements:</p>
                  {automatedImprovements.map((i) => (
                    <p key={i}>• {i}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ingestion decision framework */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Choosing a Secure and Scalable Vendor Ingestion Model
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                The central architecture question was how external vendors could submit raw logs for automated
                ingestion while maintaining appropriate security, scalability, and ownership. I evaluated seven
                approaches and documented the trade-offs before selecting the preferred model.
              </p>
            </div>
            <AccessibleTable
              caption="Seven candidate vendor-ingestion approaches, evaluated by description, strengths, constraints, and final decision"
              columns={[
                { key: "approach", header: "Approach" },
                { key: "description", header: "Description" },
                { key: "strengths", header: "Strengths" },
                { key: "constraints", header: "Constraints" },
                { key: "decision", header: "Decision" },
              ]}
              rows={ingestionOptions}
            />
            <div className="rounded-lg border border-teal bg-teal-tint p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-teal sm:text-xl">
                Key Architecture Decision
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink sm:text-[15px]">
                Vendor-managed cloud storage provided the strongest balance of reduced internal handling,
                scalable automation, security controls, and long-term vendor ownership.
              </p>
              <p className="mt-2 text-[13px] leading-relaxed text-muted">
                The approach required more coordination during setup, while creating a cleaner operational
                boundary: vendors controlled file submission, and the internal data pipeline controlled
                ingestion, validation, storage, and reporting.
              </p>
            </div>
          </div>

          {/* Preserving complete raw logs */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Preserving Complete Raw Logs
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                The previous workflow extracted only the fields considered useful for the current report. I
                chose to retain complete raw logs so future analyses could use data points that had not yet been
                identified as reporting requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <div className="flex flex-col gap-3 rounded-lg border border-border bg-white p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-muted">
                  Selected-Field Extraction (Discarded)
                </h3>
                <ul className="flex flex-col gap-1.5 text-[13px] leading-relaxed text-muted">
                  {discardedApproach.map((line) => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 rounded-lg border-[1.5px] border-teal bg-white p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-teal">
                  Complete Raw Ingestion (Selected)
                </h3>
                <ul className="flex flex-col gap-1.5 text-[13px] leading-relaxed text-ink">
                  {selectedApproach.map((line) => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="rounded-lg bg-section p-5 text-sm font-medium leading-relaxed text-ink">
              Key Principle: Preserve source data first. Transform it for specific reporting needs downstream.
            </p>
          </div>

          {/* Connecting every file to the correct test cycle */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Connecting Every File to the Correct Test Cycle
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                Raw performance logs did not contain a dependable native relationship to the request that
                initiated the work. I selected the test-request identifier as the primary anchor for connecting
                each file to the correct title, build, device, vendor, and reporting context.
              </p>
            </div>
            <DataFlowStep nodes={anchorPathNodes} />
          </div>

          {/* Vendor pipeline data flow */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Vendor Pipeline Data Flow</h2>
            <DataFlowStep nodes={vendorPipelineNodes} />
          </div>

          {/* Structured entity relationships */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              Structured Operational Entity Relationships
            </h2>
            <SyntheticDashboard>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
                  {entityRowOne.map((e, i) => (
                    <div key={e.name} className="flex flex-col items-stretch gap-2 lg:contents">
                      <EntityCard name={e.name} fields={e.fields} />
                      {i < entityRowOne.length - 1 && <EntityArrow />}
                    </div>
                  ))}
                </div>
                <hr className="border-border" />
                <div className="flex flex-col items-stretch gap-2 lg:flex-row lg:items-center">
                  {entityRowTwo.map((e, i) => (
                    <div key={e.name} className="flex flex-col items-stretch gap-2 lg:contents">
                      <EntityCard name={e.name} fields={e.fields} emphasis={e.emphasis} />
                      {i < entityRowTwo.length - 1 && <EntityArrow />}
                    </div>
                  ))}
                </div>
              </div>
            </SyntheticDashboard>
          </div>

          {/* Ingestion and validation flow */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Ingestion and Validation Flow
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                Standardized sequence designed to secure incoming records, detect duplication issues, map
                metadata relationships, and dynamically refresh reports.
              </p>
            </div>
            <DataFlowStep nodes={ingestionValidationNodes} />
          </div>

          {/* Daily data pulls to recurring reports */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                From Daily Data Pulls to Recurring Reports
              </h2>
              <p className="text-sm text-muted">
                Understated operational UI mockup representing structured analytics compiled directly from
                centralized database pipelines.
              </p>
            </div>
            <SyntheticDashboard>
              <div className="mb-5 flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-base font-semibold text-ink">Project Performance Overview</p>
                  <p className="text-xs text-muted">
                    Active Titles: Project Aurora · Project Harbor · Project Juniper
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded border border-border px-3 py-1.5 text-ink">Filters: All builds</span>
                  <span className="rounded bg-teal px-3 py-1.5 font-semibold text-white">Export Report</span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-md bg-section p-4">
                  <p className="mb-3 font-display text-sm font-semibold text-teal">
                    Average Frame Rate by Device Tier
                  </p>
                  <div className="flex flex-col gap-3">
                    {frameRateByTier.map((row) => (
                      <BarRow key={row.label} label={row.label} value={row.value} pct={row.pct} color="#3a7373" />
                    ))}
                  </div>
                </div>
                <div className="rounded-md bg-section p-4">
                  <p className="mb-3 font-display text-sm font-semibold text-[#9f3804]">
                    Memory Usage by Build (MB)
                  </p>
                  <div className="flex flex-col gap-3">
                    {memoryByBuild.map((row) => (
                      <BarRow key={row.label} label={row.label} value={row.value} pct={row.pct} color="#9f3804" />
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <AccessibleTable
                  caption="Vendor ingestion status showing total runs, average duration, and current ingestion status"
                  columns={[
                    { key: "vendor", header: "Vendor Alias" },
                    { key: "runs", header: "Total Runs" },
                    { key: "duration", header: "Avg Duration" },
                    { key: "status", header: "Ingestion Status" },
                  ]}
                  rows={vendorRows}
                />
              </div>
            </SyntheticDashboard>
          </div>

          {/* Reporting experiences */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              Consistent Reporting Experience
            </h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reportingExperienceCards.map((card) => (
                <div key={card.title} className="flex flex-col gap-3 rounded-lg border border-border bg-white p-5">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-teal">
                    {card.title}
                  </h3>
                  <ul className="flex flex-col gap-1.5 text-[13px] leading-relaxed text-muted">
                    {card.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Decisions and trade-offs */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Decisions &amp; Trade-Offs</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {tradeoffs.map((t) => (
                <div key={t.title} className="flex flex-col gap-2 rounded-lg border border-border bg-white p-5">
                  <h3 className="font-display text-[13px] font-semibold uppercase tracking-wide text-teal">
                    {t.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed text-muted">{t.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Operational risks and controls */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              Operational Risks and Controls
            </h2>
            <AccessibleTable
              caption="Operational risks and their corresponding controls in the ingestion pipeline"
              columns={[
                { key: "risk", header: "Risk" },
                { key: "control", header: "Control" },
              ]}
              rows={riskRows}
            />
            <p className="text-xs text-muted">Note: These are operational pipeline design considerations.</p>
          </div>

          {/* Phased delivery */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Phased Delivery Roadmap</h2>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {phases.map((p) => (
                <div key={p.phase} className="flex flex-col gap-3 rounded-lg border border-border bg-white p-6">
                  <p className="text-[11px] font-bold uppercase tracking-wide text-teal">{p.phase}</p>
                  <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                  <ul className="flex flex-col gap-1.5 text-sm leading-relaxed text-muted">
                    {p.bullets.map((b) => (
                      <li key={b}>• {b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Current progress */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Current Progress</h2>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {currentProgress.map((line) => (
                <li key={line} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-teal" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* Measurable impact */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Measurable Impact</h2>
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {measurableImpact.map((line) => (
                <li key={line} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-teal" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="rounded-lg bg-teal-tint p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-teal sm:text-xl">Key Outcome</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink sm:text-[15px]">
                The pipeline transformed compatibility reporting from a series of isolated, manually assembled
                reports into a reusable data workflow that preserved source information, standardized test
                results, and supported recurring analysis.
              </p>
            </div>
          </div>

          {/* Responsible scope decisions */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              Responsible Scope Decisions
            </h2>
            <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
              The first version prioritizes a stable data layer and one complete operational workflow. Expanded
              dashboards, predictive modeling, and additional testing-system integrations remain future phases.
              Permissions are introduced after the core record workflows are stable, allowing the team to
              validate the product foundation before adding further complexity.
            </p>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Skills &amp; Technologies</h2>
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
          variant="final"
          previousTitle="Accessibility Enablement System"
          previousStatus="Built & Launched"
        />
      </main>
      <Footer />
    </>
  );
}
