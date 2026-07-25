// Central place for public-facing contact + profile links.

/**
 * Resolves the site's public production URL without ever hardcoding an
 * unconfirmed domain and without letting "localhost" leak into production
 * metadata (canonical URLs, sitemap, Open Graph, structured data).
 *
 * Resolution order:
 * 1. `NEXT_PUBLIC_SITE_URL` — set this in your Vercel project's Environment
 *    Variables once you know your real production URL (your `*.vercel.app`
 *    URL, or a custom domain if you add one later). This is the value you
 *    should update after your first deployment — see README.md.
 * 2. `VERCEL_URL` — Vercel automatically sets this on every deployment
 *    (production and preview) to the correct `<project>-<hash>.vercel.app`
 *    address, so builds on Vercel are always correct even before step 1 is
 *    configured.
 * 3. `http://localhost:3000` — used only in local development
 *    (`NODE_ENV !== "production"`), never in a production build.
 * 4. `https://example.com` — a last-resort placeholder for a production
 *    build run somewhere that provides neither variable above. `example.com`
 *    is the IANA-reserved placeholder domain, so this can never be mistaken
 *    for a real, owned domain (unlike a fabricated custom domain).
 */
function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NODE_ENV !== "production") {
    return "http://localhost:3000";
  }
  return "https://example.com";
}

export const site = {
  name: "Camille Lin",
  title: "Technical Program Manager | Data & Product Operations",
  description:
    "I build data systems, operational tools, and programs that help teams make clearer decisions.",
  url: resolveSiteUrl(),
  email: "camonzy95@gmail.com",
  linkedin: "https://www.linkedin.com/in/camillemonzonlin/",
  resumePath: "/resume/camille-lin-resume.pdf",
  resumePagePath: "/resume",
} as const;

export const navLinks = [
  { label: "Featured Work", href: "/#work" },
  { label: "About", href: "/#about" },
  { label: "Resume", href: "/resume", external: false },
] as const;
