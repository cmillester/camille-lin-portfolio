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
import { BarChartIcon, CheckIcon, GraduationCapIcon, LinkIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Accessibility Enablement System",
  description:
    "Designed and launched a three-part accessibility enablement system combining a testing best-practices guide, an interactive learning experience, and an AI-powered knowledge assistant.",
  alternates: { canonical: "/work/accessibility-enablement" },
};

/** Small reusable card for pillar / lab / design-decision style tiles defined locally for this page only. */
function InfoCard({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-lg border border-border bg-white p-5 sm:p-6">
      {eyebrow && (
        <p className="text-[11px] font-bold uppercase tracking-wide text-teal">{eyebrow}</p>
      )}
      <p className="font-display text-base font-semibold text-ink sm:text-lg">{title}</p>
      <p className="text-[13px] leading-relaxed text-muted sm:text-sm">{description}</p>
    </div>
  );
}

/** "Spot the Bug" scenario card: a fictional testing scenario + reflection question. */
function ScenarioCard({
  title,
  scenario,
  question,
}: {
  title: string;
  scenario: string;
  question: string;
}) {
  return (
    <div className="flex flex-1 flex-col gap-3 rounded-lg border border-border bg-white p-5">
      <p className="font-display text-sm font-semibold text-teal">{title}</p>
      <p className="text-[13px] leading-relaxed text-muted">
        <span className="font-semibold text-ink">Scenario: </span>
        {scenario}
      </p>
      <p className="text-[13px] leading-relaxed text-ink">
        <span className="font-semibold text-ink">Question: </span>
        {question}
      </p>
    </div>
  );
}

const rolePoints = [
  "Defined a connected enablement strategy spanning standards, experiential learning, and on-demand support",
  "Authored the Accessibility Testing Best Practices guide for QA analysts, vendors, and cross-functional partners",
  "Translated accessibility standards into practical testing questions, preparation guidance, and issue-recognition patterns",
  "Designed and created the Accessibility Challenge as an interactive learning experience",
  "Developed simulation-based mini-games covering low vision, color vision deficiency, motor tremor, and switch access",
  'Created the "Spot the Bug" scenario-based accessibility quiz',
  "Added a shared leaderboard using completion times and quiz scores to encourage participation",
  "Built and launched an AI-powered accessibility knowledge assistant",
  "Structured the assistant to provide context-aware guidance based on platform, development stage, and user need",
  "Created the shared channel, response behavior, plain-language format, and supporting knowledge configuration",
  "Connected all three resources into a self-service accessibility learning and support system",
];

const pillars = [
  {
    eyebrow: "Pillar 1: Shared Standards",
    title: "Accessibility Testing Best Practices",
    description: "Establish a common testing foundation and practical methodology",
  },
  {
    eyebrow: "Pillar 2: Experiential Practice",
    title: "Accessibility Challenge",
    description: "Help teams recognize barriers through interactive exercises and realistic testing scenarios",
  },
  {
    eyebrow: "Pillar 3: Moment-of-Need Support",
    title: "Accessibility Knowledge Assistant",
    description: "Provide self-service guidance during planning, development, and testing",
  },
];

const outcomeFlow = ["Earlier Recognition", "Better Testing Questions", "Clearer Findings", "More Accessible Player Experiences"];

const backgroundPoints = [
  "What game accessibility means",
  "Why accessibility matters",
  "How baseline requirements and broader accessibility considerations work",
  "Why early QA involvement improves the ability to influence outcomes",
];

const inPracticePoints = [
  "How to prepare before testing",
  "How genre, platform, and player experience affect coverage",
  "How to recognize friction during existing functional testing",
  "What questions to ask when reviewing subtitles, text, controls, color, audio, navigation, and safety",
];

const resourcePoints = ["Testing tools", "Training resources", "Accessibility references", "Paths for additional guidance"];

const contextFactors = [
  "Game Genre",
  "Platform",
  "Core Mechanics",
  "Player Motivations",
  "Input Model",
  "Audio and Visual Dependence",
];

const contextCoverageRows = [
  { context: "Narrative Game", focus: "Subtitles, captions, audio description, text readability, screen narration" },
  { context: "Mobile Action Game", focus: "Touch-target size, one-handed play, timing requirements, color dependence" },
  { context: "TV or Cloud Game", focus: "Viewing distance, controller navigation, focus order, text scale" },
];

const barrierLab = [
  {
    title: "LOW VISION",
    description:
      "A short mini-game that introduces reduced visual clarity and challenges involving text, targets, and environmental information.",
  },
  {
    title: "COLOR VISION DEFICIENCY",
    description:
      "A mini-game that demonstrates how color-only communication can make critical information difficult to distinguish.",
  },
  {
    title: "MOTOR TREMOR",
    description:
      "A mini-game using unstable pointer movement to illustrate challenges involving precision targets and timing.",
  },
  {
    title: "SWITCH ACCESS",
    description:
      "A mini-game using sequential focus and limited inputs to demonstrate the importance of navigation order and single-action controls.",
  },
];

const spotTheBug = [
  {
    title: "SUBTITLES",
    scenario: "Subtitles technically meet contrast requirements, while a visually busy background makes them difficult to read.",
    question: "What should the tester investigate?",
  },
  {
    title: "COLOR-ONLY INFORMATION",
    scenario: "A combat indicator communicates danger using red and green without an additional symbol or label.",
    question: "What accessibility barrier is present?",
  },
  {
    title: "TOUCH TARGETS",
    scenario: "Critical mobile controls are positioned closely together and require precise taps.",
    question: "Which players may experience difficulty?",
  },
  {
    title: "INPUT COMPLEXITY",
    scenario: "A required action uses simultaneous button presses with no remapping option.",
    question: "What should be documented?",
  },
];

const leaderboardRows = [
  { alias: "SlayerQA", time: "1m 45s", quiz: "100%", combined: "980", date: "Jan 12, 2026" },
  { alias: "PixelFixer", time: "2m 10s", quiz: "90%", combined: "890", date: "Jan 12, 2026" },
  { alias: "DataCore", time: "1m 58s", quiz: "90%", combined: "870", date: "Jan 11, 2026" },
  { alias: "AuditLead", time: "2m 30s", quiz: "100%", combined: "840", date: "Jan 10, 2026" },
  { alias: "SprintZero", time: "2m 15s", quiz: "80%", combined: "790", date: "Jan 09, 2026" },
];

const audience = [
  { title: "QA ANALYSTS", description: "Recognize accessibility barriers and improve testing coverage" },
  { title: "DEVELOPERS", description: "Understand implementation considerations earlier" },
  { title: "PRODUCERS", description: "Identify accessibility risks during planning and prioritization" },
  { title: "PARTNERS", description: "Access consistent guidance without waiting for an individual specialist" },
];

const designDecisions = [
  {
    title: "PRACTICAL OVER THEORETICAL",
    description: "Translate standards into questions and behaviors people can use during real work.",
  },
  {
    title: "MULTIPLE LEARNING MODES",
    description: "Support reading, interaction, scenarios, and conversational guidance.",
  },
  {
    title: "CONTEXT-AWARE GUIDANCE",
    description: "Adapt recommendations according to platform, game type, and development stage.",
  },
  {
    title: "SELF-SERVICE ACCESS",
    description: "Make routine information available without waiting for a live training session or individual specialist.",
  },
  {
    title: "LIVING KNOWLEDGE",
    description: "Allow guidance and resources to evolve as accessibility practices change.",
  },
];

const outcomes = [
  "Established a shared accessibility testing foundation for the QA organization",
  "Created practical guidance for preparing, testing, and recognizing player-facing barriers",
  "Expanded accessibility education through interactive simulations and scenario-based learning",
  "Introduced a repeatable self-service training experience with scores and a shared leaderboard",
  "Made routine accessibility guidance available through an organization-wide AI assistant",
  "Reduced reliance on individual subject-matter experts for common questions",
  "Created an enablement model that supports QA analysts, developers, producers, vendors, and partners",
  "Provided a connected path from learning accessibility concepts to applying them during active work",
];

const skills = [
  "Accessibility Strategy",
  "Program Design",
  "Technical Writing",
  "Content Strategy",
  "Interactive Learning",
  "Game-Based Learning",
  "Applied AI",
  "Prompt Design",
  "Knowledge Systems",
  "Slack",
  "UX Design",
  "Accessibility Testing",
  "Training Development",
  "Stakeholder Enablement",
  "Change Management",
  "Product Launch",
  "Documentation",
];

export default function AccessibilityEnablementPage() {
  return (
    <>
      <Header breadcrumbLabel="Accessibility Enablement" />
      <main id="main-content">
        <CaseStudyHero
          eyebrow="Case Study • Accessibility, Enablement & Applied AI"
          title="Building an Accessibility Enablement System"
          summary="Designed and launched a three-part accessibility enablement system that gave QA analysts, developers, producers, and partners practical standards, experiential learning, and on-demand AI guidance."
        />

        <section className="px-4 py-8 sm:px-6 lg:px-16 lg:py-12">
          <div className="mx-auto grid w-full max-w-content grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
            <MetricCard label="Status" value="Built & Launched" icon={CheckIcon} />
            <MetricCard label="Program Model" value="Three Connected Resources" icon={BarChartIcon} />
            <MetricCard label="Interactive Training" value="Two Learning Modes" icon={GraduationCapIcon} />
            <MetricCard label="Access" value="On-Demand AI Guidance" icon={LinkIcon} />
          </div>
        </section>

        <div className="mx-auto flex w-full max-w-content flex-col gap-16 px-4 pb-16 sm:px-6 lg:gap-20 lg:px-16 lg:pb-24">
          {/* Challenge + Role */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">The Challenge</h2>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                Accessibility had not yet become a formal part of the organization&apos;s testing practices. Teams
                understood that accessibility mattered, while practical guidance on how to prepare, what barriers to
                look for, and how to report findings was distributed across policies, subject-matter experts, and
                specialized resources. A written guide could establish a shared foundation. Teams also needed
                opportunities to practice recognizing accessibility barriers and a way to access guidance while
                actively planning, developing, or testing a game.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                My Role: Program Designer, Author &amp; Builder
              </h2>
              <ul className="flex flex-col gap-2">
                {rolePoints.map((line) => (
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

          {/* Connected Enablement Model */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">Program Model</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Connected Enablement Model</h2>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p) => (
                <InfoCard key={p.title} eyebrow={p.eyebrow} title={p.title} description={p.description} />
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 rounded-md border border-border bg-white p-4 sm:gap-4">
              {outcomeFlow.map((step, i) => (
                <span key={step} className="flex items-center gap-3">
                  <span className="text-[13px] font-semibold text-teal">{step}</span>
                  {i < outcomeFlow.length - 1 && (
                    <span className="text-muted" aria-hidden="true">
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>

          {/* Pillar 1: Standards into Testing Practice */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">Pillar 1 · Shared Standards</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Turning Accessibility Standards into Testing Practice
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                I authored a practical accessibility testing guide that helped QA analysts and partners understand
                what accessibility means for games, how accessibility risks vary by genre and platform, what to
                consider before testing begins, and where barriers most commonly appear during testing.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col gap-3 rounded-lg border border-border bg-white p-5 sm:p-6">
                <h3 className="font-display text-base font-semibold text-ink">Background</h3>
                <ul className="flex flex-col gap-2">
                  {backgroundPoints.map((line) => (
                    <li key={line} className="flex gap-2 text-[13px] leading-relaxed text-muted">
                      <span className="text-teal" aria-hidden="true">
                        •
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 rounded-lg border border-border bg-white p-5 sm:p-6">
                <h3 className="font-display text-base font-semibold text-ink">In Practice</h3>
                <ul className="flex flex-col gap-2">
                  {inPracticePoints.map((line) => (
                    <li key={line} className="flex gap-2 text-[13px] leading-relaxed text-muted">
                      <span className="text-teal" aria-hidden="true">
                        •
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-3 rounded-lg border border-border bg-white p-5 sm:p-6">
                <h3 className="font-display text-base font-semibold text-ink">Resources</h3>
                <ul className="flex flex-col gap-2">
                  {resourcePoints.map((line) => (
                    <li key={line} className="flex gap-2 text-[13px] leading-relaxed text-muted">
                      <span className="text-teal" aria-hidden="true">
                        •
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="rounded-lg bg-teal-tint p-6 sm:p-8">
              <h3 className="font-display text-lg font-semibold text-teal sm:text-xl">Key Testing Mindset</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink sm:text-[15px]">
                Accessibility testing asks two connected questions: does the feature function as intended, and can
                players with different access needs use it successfully?
              </p>
            </div>
            <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
              A feature can pass its functional requirements and still create a barrier. The guide teaches testers to
              recognize friction involving readability, contrast, input complexity, timing, audio cues, navigation,
              subtitles, and other player-facing experiences.
            </p>
          </div>

          {/* Context-Based Coverage */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Context-Based Coverage</h2>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                Accessibility risks change according to game genre, platform, core mechanics, player motivations,
                input model, and audio and visual dependence.
              </p>
            </div>
            <ul className="flex flex-wrap gap-2">
              {contextFactors.map((f) => (
                <li key={f} className="rounded bg-section px-3 py-1.5 text-[13px] font-medium text-ink">
                  {f}
                </li>
              ))}
            </ul>
            <AccessibleTable
              caption="Example game contexts and their accessibility testing focus areas"
              columns={[
                { key: "context", header: "Context" },
                { key: "focus", header: "Focus Areas" },
              ]}
              rows={contextCoverageRows}
            />
          </div>

          {/* Pillar 2: Learning Through Interaction */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">Pillar 2 · Experiential Practice</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Learning Through Interaction</h2>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                I created the Accessibility Challenge to give people an engaging way to think about accessibility and
                practice recognizing testing barriers. The experience combines short interactive exercises,
                scenario-based questions, and a shared leaderboard.
              </p>
              <p className="text-xs italic leading-relaxed text-muted">
                The simulations are limited illustrations of interaction barriers. Lived disability experiences are
                broader and more complex.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-display text-lg font-semibold text-ink">Part One: Interaction Barrier Lab</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {barrierLab.map((card) => (
                  <InfoCard key={card.title} title={card.title} description={card.description} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-display text-lg font-semibold text-ink">Part Two: Spot the Bug</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {spotTheBug.map((card) => (
                  <ScenarioCard key={card.title} title={card.title} scenario={card.scenario} question={card.question} />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-display text-lg font-semibold text-ink">Shared Leaderboard</h3>
              <SyntheticDashboard>
                <AccessibleTable
                  caption="Shared Accessibility Challenge leaderboard showing fictional participant aliases, simulation time, quiz score, combined score, and completion date"
                  columns={[
                    { key: "alias", header: "Participant Alias" },
                    { key: "time", header: "Simulation Time" },
                    { key: "quiz", header: "Quiz Score" },
                    { key: "combined", header: "Combined Score" },
                    { key: "date", header: "Completion Date" },
                  ]}
                  rows={leaderboardRows}
                />
              </SyntheticDashboard>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                The shared leaderboard introduced friendly competition and gave participants a reason to replay the
                activities, improve their scores, and compare learning progress.
              </p>
              <p className="text-xs italic leading-relaxed text-muted">
                Illustrative concept — the mini-games, quiz, and leaderboard shown here are portfolio mockups and are
                not embedded or interactive on this page.
              </p>
            </div>
          </div>

          {/* Pillar 3: AI Assistant */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs font-bold uppercase tracking-wide text-teal">Pillar 3 · On-Demand Support</p>
              <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                Making Guidance Available at the Moment of Need
              </h2>
              <p className="text-sm leading-relaxed text-muted sm:text-[15px]">
                I built and launched an AI-powered assistant that gave developers, producers, QA analysts, and
                partners self-service access to accessibility guidance. The assistant translated a large body of
                standards and testing information into structured, context-aware responses.
              </p>
              <p className="text-xs italic leading-relaxed text-muted">
                The assistant is a guidance and knowledge-access tool. It surfaces relevant standards and
                documentation — it does not make compliance decisions. Testers and reviewers apply judgment and make
                the final call.
              </p>
            </div>

            <SyntheticDashboard subtitle="Illustrative assistant conversation, fictional example prompt and response">
              <div className="flex flex-col gap-4 rounded-lg border border-border bg-white p-4 sm:p-6">
                <div className="flex items-center gap-2 border-b border-border pb-3">
                  <span className="size-2.5 rounded-full bg-ink" aria-hidden="true" />
                  <p className="font-display text-[13px] font-bold text-ink"># accessibility-assistant</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded bg-teal text-sm font-semibold text-white">
                    U
                  </span>
                  <div className="flex flex-col gap-1 text-sm text-ink">
                    <p className="font-bold">User</p>
                    <p>We&apos;re preparing to test a narrative game on mobile. What accessibility areas should we prioritize?</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded border border-teal bg-teal-tint text-sm font-semibold text-teal">
                    AI
                  </span>
                  <div className="flex flex-1 flex-col gap-3 rounded-md bg-section p-3">
                    <p className="font-display text-sm font-bold text-teal">Accessibility Assistant</p>
                    <div className="flex flex-col gap-1">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-muted">Project Context</p>
                      <p className="text-[13px] text-ink">Platform: Mobile, Experience: Narrative-focused, Stage: Pre-test planning</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-muted">Priority Areas</p>
                      <p className="text-[13px] leading-relaxed text-ink">
                        Subtitle availability and readability, text size and contrast, one-handed interaction,
                        touch-target size and spacing, screen-reader and focus behavior, audio cues that require
                        visual equivalents
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-muted">Recommended Testing Questions</p>
                      <p className="text-[13px] leading-relaxed text-ink">
                        Can subtitles be enabled before gameplay begins? Does text remain readable during active
                        scenes? Can primary actions be completed without precise or simultaneous inputs? Is critical
                        information communicated through more than color alone?
                      </p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[11px] font-bold uppercase tracking-wide text-muted">Next Step</p>
                      <p className="text-[13px] leading-relaxed text-ink">
                        Review the relevant testing guidance and document any player-facing friction with platform
                        and context details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SyntheticDashboard>

            <div className="flex flex-col gap-4">
              <h3 className="font-display text-lg font-semibold text-ink">Assistant Design</h3>
              <DataFlowStep
                nodes={[
                  { title: "User Question", subtitle: "Formulates need in plain language" },
                  { title: "Structured Context Intake", subtitle: "Platform, game type, development stage, guidance needed" },
                  { title: "Curated Knowledge", subtitle: "Testing standards, practical examples, tools, approved guidance" },
                  { title: "Plain-Language Response", subtitle: "Priority areas, testing questions, suggested next actions", emphasis: true },
                ]}
              />
            </div>
          </div>

          {/* Audience */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Audience</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {audience.map((a) => (
                <InfoCard key={a.title} title={a.title} description={a.description} />
              ))}
            </div>
          </div>

          {/* Enablement comparison */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
              From Passive Information to Active Enablement
            </h2>
            <ComparisonTable
              caption="Team needs mapped to the resource that supports them and the behavior it enables"
              headers={["Need", "Resource", "Behavior Supported"]}
              rows={[
                {
                  columns: [
                    "Understand the accessibility testing standard",
                    "Accessibility Testing Best Practices",
                    "Prepare effectively and recognize likely barriers",
                  ],
                  emphasis: 1,
                },
                {
                  columns: [
                    "Practice identifying accessibility issues",
                    "Accessibility Challenge",
                    "Apply concepts through interaction and scenario-based learning",
                  ],
                  emphasis: 1,
                },
                {
                  columns: [
                    "Get guidance during active work",
                    "Accessibility Knowledge Assistant",
                    "Receive self-service, context-aware testing guidance",
                  ],
                  emphasis: 1,
                },
              ]}
            />
          </div>

          {/* Learning journey */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Learning and Support Journey</h2>
            <DataFlowStep
              nodes={[
                { title: "1. Learn the Foundation", subtitle: "Accessibility Testing Best Practices" },
                { title: "2. Experience Interaction Barriers", subtitle: "Interaction Barrier Lab" },
                { title: "3. Practice Spotting Issues", subtitle: "Spot the Bug" },
                { title: "4. Apply the Accessibility Lens During Testing", subtitle: "Active testing work" },
                { title: "5. Ask the AI Assistant for Contextual Guidance", subtitle: "Accessibility Knowledge Assistant", emphasis: true },
              ]}
            />
          </div>

          {/* Design decisions */}
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">Design Decisions</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {designDecisions.map((d) => (
                <InfoCard key={d.title} title={d.title} description={d.description} />
              ))}
            </div>
          </div>

          {/* Outcomes */}
          <div className="flex flex-col gap-4">
            <h2 className="font-display text-lg font-semibold text-ink sm:text-xl">Outcomes and Organizational Value</h2>
            <ul className="flex flex-col gap-2">
              {outcomes.map((line) => (
                <li key={line} className="flex gap-2 text-sm leading-relaxed text-muted">
                  <CheckIcon className="mt-0.5 size-3.5 shrink-0 text-teal" />
                  {line}
                </li>
              ))}
            </ul>
          </div>

          {/* Responsible design */}
          <div className="rounded-lg bg-teal-tint p-6 sm:p-8">
            <h2 className="font-display text-lg font-semibold text-teal sm:text-xl">Responsible Design</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink sm:text-[15px]">
              The simulations are educational illustrations of interaction barriers. They are designed to prompt
              testing awareness and curiosity while recognizing that no short exercise can represent the full lived
              experience of disability. The broader program combines these activities with practical standards,
              scenario-based learning, and ongoing guidance.
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
          title="Reporting Automation & Data Pipeline"
          status="Built & Implemented"
          description="Built an automated pipeline that transformed vendor-submitted compatibility performance logs into centralized, queryable data and decision-ready reporting."
          href="/work/reporting-automation"
        />
      </main>
      <Footer />
    </>
  );
}
