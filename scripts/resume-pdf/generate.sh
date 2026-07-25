#!/usr/bin/env bash
# Regenerates public/resume/camille-lin-resume.pdf from the shared resume
# content (lib/content/resume.ts) and the dedicated print stylesheet
# (scripts/resume-pdf/print.css).
#
# Requires:
#   - Node.js (for esbuild-based data/HTML generation, run via npx if esbuild
#     isn't already installed as a project devDependency)
#   - WeasyPrint (Python): pip install weasyprint
#
# Usage:
#   bash scripts/resume-pdf/generate.sh
set -euo pipefail
cd "$(dirname "$0")/../.."

echo "1/3 Extracting resume content..."
node scripts/resume-pdf/build-resume-data.mjs

echo "2/3 Building print HTML..."
node scripts/resume-pdf/build-print-html.mjs

echo "3/3 Rendering PDF (tagged, PDF/UA-1, embedded fonts)..."
weasyprint scripts/resume-pdf/resume-print.html public/resume/camille-lin-resume.pdf \
  --pdf-tags --pdf-variant pdf/ua-1

# Clean up intermediate files (not shipped, regenerated each run).
rm -f scripts/resume-pdf/resume-data.json scripts/resume-pdf/resume-print.html

echo "Done: public/resume/camille-lin-resume.pdf"
