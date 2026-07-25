import type { Metadata } from "next";
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
import { BarChartIcon, BriefcaseIcon, CheckIcon, GraduationCapIcon, UsersIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Requirements Governance Dashboard",
  description:
    "Turning Jira data into a governance decision system: the first centralized analytics system for evaluating newly established game requirements.",
  alternates: { canonical: "/work/requirements-governance" },
};

const violationsByCategory = [
  { category: "POL-1.1", count: 38, max: 38 },
  { category: "POL-2.3", count: 29, max: 38 },
  { category: "POL-3.1", count: 18, max: 38 },
  { category: "POL-4.2", count: 8, max: 38 },
];

const exceptionRows = [
  { requirement: "POL-1.1 (Security)", requests: "15", approved: "4", rate: "26.6%" },
  { requirement: "POL-2.3 (Privacy)", requests: "12", approved: "12", rate: "100.0%", highlight: true },
  { requirement: "POL-3.1 (Telemetry)", requests: "8", approved: "5", rate: "62.5%" },
];

const skills = [
  "SQL",
  "Trino/Presto",
  "Jira",
  "Data Modeling",
  "Preset",
  "Dashboard Design",
  "Metric Definition",
  "Stakeholder Discovery",
  "Governance",
  "Documentation",
  "Data Quality Management",
];

export default function RequirementsGovernancePage() {
  return (
    <>
      <Header breadcrumbLabel="Jira Governance" />
      <main id="main-content">
        <CaseStudyHero
          eyebrow="Case Study • Technical Program Manager | Data & Product Operations"
          title="Turning Jira Data into a Governance Decision System"
          summary="Built the first analytics system for evaluating newly established game requirements, giving senior leaders an evidence-based way to identify frequently violated requirements, recurring exception requests, and waiver-approval patterns."
        />

        <section className="px-4 py-8 sm:px-6 lg:px-16 lg:py-12">
          <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            <MetricCard label="System Scope" value="First Centralized Requirements Analytics System" icon={BarChartIcon} />
            <MetricCard label="System Viewers" value="20 Documented Viewers" icon={UsersIcon} />
            <MetricCard label="Executive Use" value="7+ Senior Leadership Users" icon={BriefcaseIcon} />
            <MetricCard label="Adoption Level" value="Included in Compliance QA Onboarding" icon={GraduationCapIcon} />
          </div>
        </section>

        <div className="mx-auto flex w-full max-w-content flex-col gap-16 px-4 pb-16 sm:px-6 lg:gap-20 lg:px-16 lg:pb-24">
          {/* Challenge + Role */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">The Challenge</h2>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                The game requirements were newly established, and the Governance Board had no centralized
                system for evaluating how effectively they worked in practice. There was no structured way to
                determine which requirements were frequently violated, misunderstood, repeatedly waived, or
                candidates for clarification, revision, or removal. Governance discussions relied largely on
                anecdotal observations.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">My Role</h2>
              <ul className="flex flex-col gap-2">
                {[
                  "Partnered with the Governance Board to define the three primary governance questions",
                  "Queried violation and waiver records from two Jira environments through the data warehouse",
                  "Built the unified reporting dataset and metric definitions",
                  "Created the interactive Preset dashboard, filters, conditional formatting, and source-record links",
                  "Documented measurement assumptions, data constraints, user guidance, and the future roadmap",
                ].map((line) => (
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

          {/* Governance questions to metrics */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              From Governance Questions to Metrics
            </h2>
            <ComparisonTable
              caption="Governance questions mapped to their defined metric and use"
              headers={["Governance Question", "Metric Defined", "Use"]}
              rows={[
                {
                  columns: [
                    "Which requirements are most frequently violated?",
                    "Violation count by requirement",
                    "Identifies requirements appearing most often in compliance activity",
                  ],
                  emphasis: 1,
                },
                {
                  columns: [
                    "Which violations generate waiver requests most frequently?",
                    "Waiver requests divided by violations",
                    "Identifies requirements frequently requiring exceptions",
                  ],
                  emphasis: 1,
                },
                {
                  columns: [
                    "Which waiver requests have the highest approval rates?",
                    "Approved waivers divided by waiver requests",
                    "Identifies requirements that may warrant clarification, revision, or reevaluation",
                  ],
                  emphasis: 1,
                },
              ]}
            />
          </div>

          {/* System and data flow */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">System and Data Flow</h2>
            <DataFlowStep
              nodes={[
                { title: "Two Jira Environments", subtitle: "Source Compliance Data" },
                { title: "Data Warehouse", subtitle: "Centralized Storage" },
                { title: "Unified Reporting Dataset", subtitle: "Combined Compliance View", emphasis: true },
                { title: "Interactive Dashboard", subtitle: "Self-Service Analytics" },
                { title: "Governance Board Decisions", subtitle: "Evidence-Based Review" },
              ]}
            />
          </div>

          {/* Dashboard experience */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Dashboard Experience</h2>
              <p className="text-sm text-muted">
                Interactive dashboard used by the compliance board for evidence-based requirements evaluation.
              </p>
            </div>
            <SyntheticDashboard>
              <div className="mb-5 flex flex-wrap gap-2 border-b border-border pb-4 text-xs">
                <span className="font-semibold text-muted">FILTERS:</span>
                {["Q3 2024", "All Categories", "Core Studio Teams"].map((f) => (
                  <span key={f} className="rounded border border-border px-3 py-1.5 text-ink">
                    {f}
                  </span>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <div className="rounded-md bg-section p-4">
                  <p className="mb-3 font-display text-sm font-semibold text-ink">Violations by category</p>
                  <div className="flex flex-col gap-3">
                    {violationsByCategory.map((v) => (
                      <div key={v.category}>
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span className="text-muted">{v.category}</span>
                          <span className="font-semibold text-ink">{v.count}</span>
                        </div>
                        <div className="h-2 w-full overflow-hidden rounded bg-[rgba(234,220,197,0.35)]">
                          <div
                            className="h-full rounded bg-teal"
                            style={{ width: `${(v.count / v.max) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 font-display text-sm font-semibold text-ink">Active Exception Requests</p>
                  <AccessibleTable
                    caption="Active exception requests by requirement, showing requests, approvals, and approval rate"
                    columns={[
                      { key: "requirement", header: "Requirement" },
                      { key: "requests", header: "Requests" },
                      { key: "approved", header: "Approved" },
                      { key: "rate", header: "Approval Rate" },
                    ]}
                    rows={exceptionRows}
                  />
                </div>
              </div>
            </SyntheticDashboard>
          </div>

          {/* Key finding */}
          <div className="rounded-lg bg-teal-tint p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-teal sm:text-xl">
              Key Finding: 100% Waiver Approval Rates
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink sm:text-[15px]">
              The dashboard highlighted requirements with 100% waiver approval rates, creating a clear signal
              for the Board to examine whether those requirements remained useful, enforceable, or needed
              clearer wording.
            </p>
          </div>

          {/* Adoption + Data constraints */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">Adoption &amp; Impact</h2>
              <ul className="flex flex-col gap-2">
                {[
                  "Established the first centralized source for evaluating requirement effectiveness.",
                  "Reached 20 documented viewers",
                  "Used by at least seven senior leaders",
                  "Referenced by the entire Compliance QA team",
                  "Included in Compliance QA onboarding",
                ].map((line) => (
                  <li key={line} className="flex gap-2 text-sm leading-relaxed text-muted">
                    <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-teal" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">
                Data Constraints &amp; Decisions
              </h2>
              <p className="text-sm leading-relaxed text-muted">
                The structured requirement field was unavailable through the data warehouse, so requirement
                identifiers were derived from Jira ticket summaries. The reporting logic documented known
                constraints involving tickets that referenced multiple requirements, manually maintained
                requirement descriptions, archived records, and changing workflow statuses. These limitations
                were surfaced directly in the documentation and roadmap.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">Skills Demonstrated</h2>
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
          title="QA Data Platform"
          status="In Progress"
          description="Designing a QA-owned operational data platform connecting reporting, vendor data, and pipeline infrastructure across PMO, Compliance, Compatibility, and Tech QA."
          href="/work/qa-data-platform"
        />
      </main>
      <Footer />
    </>
  );
}
