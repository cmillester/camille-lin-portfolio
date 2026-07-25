// Extracts the shared resume content (lib/content/resume.ts) and site contact
// info (lib/site.ts) into plain JSON, so the PDF generator uses the exact
// same source of truth as the /resume page without duplicating wording.
import { build } from "esbuild";
import { writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("../..", import.meta.url));
const outDir = mkdtempSync(join(tmpdir(), "resume-data-"));
const outFile = join(outDir, "bundle.mjs");

await build({
  entryPoints: [join(root, "scripts/resume-pdf/data-entry.ts")],
  bundle: true,
  format: "esm",
  platform: "node",
  outfile: outFile,
  // NEXT_PUBLIC_SITE_URL is irrelevant for resume text content; force a
  // deterministic value so this script never depends on env/network state.
  define: { "process.env.NODE_ENV": '"production"' },
});

const mod = await import(pathToFileURL(outFile).href);
writeFileSync(
  join(root, "scripts/resume-pdf/resume-data.json"),
  JSON.stringify(mod.resumeData, null, 2)
);
console.log("resume-data.json written");
