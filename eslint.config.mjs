import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

// Flat ESLint config (ESLint 9 / Next.js 16). Uses eslint-config-next's native
// flat "core-web-vitals" config — the same rule set the previous
// `.eslintrc.json` extended — and scopes linting to source while ignoring
// build output.
const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "out/**", "build/**", "next-env.d.ts"] },
  ...nextCoreWebVitals,
];

export default eslintConfig;
