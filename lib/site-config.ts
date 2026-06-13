/**
 * Central site configuration.
 *
 * Every canonical URL, sitemap entry, robots rule, structured-data block,
 * Open Graph tag, llms.txt line and contact link derives from this file.
 * Set NEXT_PUBLIC_SITE_URL in your environment to switch domains in one place.
 */
export const siteConfig = {
  name: "7edge Apps",
  shortName: "7edge",
  tagline: "Building useful digital products for everyday life.",
  description:
    "7edge Apps is an independent software studio established in 2022, building practical Android applications, modern websites, and thoughtfully designed digital experiences.",
  foundingYear: 2022,
  email: "7edgetechnologies@gmail.com",
  /** Subject pre-filled on the "Send an Email" buttons. */
  emailSubject: "Project inquiry for 7edge Apps",
  /** Public Google Play developer profile. */
  playStoreDeveloperUrl:
    "https://play.google.com/store/apps/dev?id=7291930717928398074",
  /** Final production domain. Override with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://sevenedge.pages.dev").replace(
    /\/$/,
    "",
  ),
} as const;

export type SiteConfig = typeof siteConfig;

/** Build an absolute URL from a site-relative path. */
export function absoluteUrl(path = "/"): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}

/** Pre-filled mailto link used by the "Send an Email" call-to-action. */
export const mailtoLink = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  siteConfig.emailSubject,
)}`;
