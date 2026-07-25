/**
 * Single source of truth for resume content.
 *
 * Consumed by:
 *  - app/resume/page.tsx (the accessible HTML resume)
 *  - scripts/resume-pdf/build-resume-data.mjs (the downloadable PDF resume)
 *
 * Editing wording here updates both the web page and the next PDF rebuild.
 * Contact details (email, LinkedIn) live in lib/site.ts, the site-wide source
 * of truth used across every page, and are not duplicated here.
 */

export type ResumeRole = {
  title: string;
  dateRange: string;
  functionalFocus?: string;
  bullets: string[];
};

export type ResumeLabeledGroup = {
  label: string;
  detail: string;
};

export const resumeContent = {
  name: "C. LIN",
  location: "San Jose, CA",

  summary:
    "Senior program and operations professional leading cross-functional initiatives across QA, " +
    "Production, Engineering, Data, and external vendors. Experienced in program delivery, operational " +
    "governance, data platforms, executive reporting, process automation, and self-service tooling " +
    "within a large-scale technology environment. Agile practitioner with CSM and CSPO certifications " +
    "and hands-on experience with SQL, Jira, Airtable, Confluence, Tableau, and Superset.",

  roles: [
    {
      title: "Senior QA Analyst, QA PMO, Netflix Games",
      dateRange: "2025 – Present",
      functionalFocus: "Technical Program Management, QA Data & Operations",
      bullets: [
        "Drive cross-functional PMO initiatives across QA, Production, Engineering, Data, and external vendors, from scoping through delivery, aligning stakeholders on plans and release-readiness decisions.",
        "Authored PRDs for the data platform, ingestion pipeline, and stakeholder-facing data UI, defining user requirements, workflows, dependencies, and acceptance criteria before development.",
        "Built and launched an AI-powered Slack assistant giving developers, producers, and QA self-serve access to accessibility requirements, and authored the supporting accessibility testing best practices, reducing dependence on individual SMEs.",
        "Authored an org-wide knowledge-sharing program and ran data training and office hours, teaching teams to find, validate, and interpret operational data for self-service dashboards and leadership reporting.",
      ],
    },
    {
      title: "Senior QA Analyst, Compliance QA, Netflix Games",
      dateRange: "2024 – 2025",
      bullets: [
        "Built governance and operational triage dashboards unifying release-readiness exceptions, violations, waivers, and aging issues across products, and migrated the reporting stack from Preset to Tableau, giving leadership clearer visibility into risk and decision points on a supported platform.",
        "Built a self-service operations data platform and team-owned schema, including a vendor-performance pipeline that ingested external logs from Amazon S3 into internal systems, enabling non-technical users to manage readiness, risk, and vendor-effort data without SQL.",
        "Led reporting automation and operating standards (SOPs, decision logs, documentation guides) and coordinated a tools initiative spanning intake design, evaluation, and rollout.",
      ],
    },
    {
      title: "QA Analyst, Compliance & Compatibility, Netflix Games",
      dateRange: "2022 – 2024",
      bullets: [
        "Owned release readiness, platform and device compatibility, and launch support across multiple game titles in a large-scale consumer platform, coordinating Product, Engineering, and QA toward aligned launch decisions.",
        "Led defect triage, root-cause analysis, and cross-functional issue resolution, reducing investigation timelines and improving delivery predictability.",
        "Facilitated stakeholder communication, escalation, and operational coordination throughout release cycles under shifting priorities.",
      ],
    },
    {
      title: "QA Engineer II, The LEGO Group",
      dateRange: "January 2021 – December 2022",
      bullets: [
        "Performed Scrum Master duties for a cross-functional engineering team, facilitating sprint planning, backlog refinement, retrospectives, and delivery planning.",
        "Partnered with Product Owners to identify delivery risks, remove blockers, and improve sprint predictability.",
        "Improved regression cycle time by 40% through workflow and process improvements.",
      ],
    },
    {
      title: "QA Engineer, iTrustCapital",
      dateRange: "January 2021 – December 2022",
      bullets: [
        "Led automation initiatives across mobile, backend, and API validation, reducing regression execution time by 35% and improving release quality and deployment confidence.",
      ],
    },
    {
      title: "Business Analyst to QA Analyst, Mint Mobile",
      dateRange: "May 2018 – January 2021",
      bullets: [
        "Coordinated feature validation and release readiness across iOS and Android in an Agile environment, partnering with Product Managers and Engineering to refine requirements and track milestones.",
        "Reduced testing cycle time by 20% through process improvements.",
      ],
    },
  ] satisfies ResumeRole[],

  skillGroups: [
    {
      label: "Program & Operations",
      detail:
        "Program Management, PMO Operations, Cross-Functional Delivery, Stakeholder Management, Risk & Dependency Management, Executive Reporting, Agile/Scrum, Process Improvement",
    },
    {
      label: "Data & Platforms",
      detail: "SQL, Tableau, Superset, Airtable, Google Sheets, Data Operations, Dashboard Development",
    },
    {
      label: "Tools",
      detail: "Jira, Confluence, Lucidchart, Miro, ChatGPT, Claude",
    },
  ] satisfies ResumeLabeledGroup[],

  certificationGroups: [
    {
      label: "Certifications",
      detail: "Certified ScrumMaster (CSM) · Certified Scrum Product Owner (CSPO) · IBM Business Intelligence Analyst",
    },
    {
      label: "Professional Development",
      detail: "AI: Business Strategies & Applications, UC Berkeley · UX Research & Prototyping, UC San Diego",
    },
  ] satisfies ResumeLabeledGroup[],

  educationEntries: [
    {
      label: "B.S., Psychology —",
      detail: "St. Joseph’s College of Quezon City",
    },
    {
      label: "Graduate coursework: MBA and M.A. Counseling Psychology —",
      detail: "California State University, Long Beach & Ateneo de Manila University",
    },
  ] satisfies ResumeLabeledGroup[],
} as const;
