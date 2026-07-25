// Builds a standalone, self-contained print HTML document from the shared
// resume data (resume-data.json), for the WeasyPrint PDF renderer to consume.
// This document has no site header/footer/nav/download button — print-only.
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { join, dirname } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const data = JSON.parse(readFileSync(join(here, "resume-data.json"), "utf8"));

function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderRole(role) {
  const focus = role.functionalFocus
    ? `<p class="focus">${esc(role.functionalFocus)}</p>`
    : "";
  const bullets = role.bullets
    .map((b) => `<li>${esc(b)}</li>`)
    .join("\n        ");
  return `
    <div class="role">
      <h3>${esc(role.title)}</h3>
      <p class="dates">${esc(role.dateRange)}</p>
      ${focus}
      <ul class="bullets">
        ${bullets}
      </ul>
    </div>`;
}

function renderGroup(g) {
  return `
      <div>
        <dt>${esc(g.label)}:</dt>
        <dd> ${esc(g.detail)}</dd>
      </div>`;
}

const html = `<!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="utf-8" />
<title>${esc(data.name)} — Resume</title>
<meta name="author" content="${esc(data.name)}" />
<link rel="stylesheet" href="print.css" />
</head>
<body>
  <header class="header-block">
    <h1>${esc(data.name)}</h1>
    <p class="contact">
      ${esc(data.location)} ·
      <a href="mailto:${esc(data.email)}">${esc(data.email)}</a> ·
      <a href="${esc(data.linkedin)}">LinkedIn</a>
    </p>
  </header>

  <section aria-label="Summary">
    <h2>Summary</h2>
    <p class="summary">${esc(data.summary)}</p>
  </section>

  <section aria-label="Experience">
    <h2>Experience</h2>
    ${data.roles.map(renderRole).join("\n")}
  </section>

  <section aria-label="Skills">
    <h2>Skills</h2>
    <dl class="group">${data.skillGroups.map(renderGroup).join("")}
    </dl>
  </section>

  <section aria-label="Certifications">
    <h2>Certifications</h2>
    <dl class="group">${data.certificationGroups.map(renderGroup).join("")}
    </dl>
  </section>

  <section aria-label="Education">
    <h2>Education</h2>
    <dl class="group">${data.educationEntries.map((e) => `
      <div>
        <dt>${esc(e.label)}</dt>
        <dd> ${esc(e.detail)}</dd>
      </div>`).join("")}
    </dl>
  </section>
</body>
</html>
`;

writeFileSync(join(here, "resume-print.html"), html);
console.log("resume-print.html written");
