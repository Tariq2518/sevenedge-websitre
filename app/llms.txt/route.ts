import { siteConfig, absoluteUrl } from "@/lib/site-config";
import { services } from "@/data/services";
import { publishedApps } from "@/data/apps";

export const dynamic = "force-static";

// AI-readable summary of the site, generated from the central data sources so
// it never drifts as apps are added.
export function GET() {
  const lines: string[] = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    "## Services",
    "",
    ...services.map((s) => `- ${s.title}: ${s.description}`),
    "",
    "## Applications",
    "",
    ...publishedApps.map(
      (a) => `- ${a.name} (${a.category}): ${a.shortDescription} ${absoluteUrl(`/apps/${a.id}`)}`,
    ),
    "",
    "## Official links",
    "",
    `- Website: ${siteConfig.url}`,
    `- Apps: ${absoluteUrl("/#apps")}`,
    `- About: ${absoluteUrl("/#about")}`,
    `- Contact: ${absoluteUrl("/#contact")}`,
    `- Privacy Policy: ${absoluteUrl("/privacy")}`,
    `- Google Play developer profile: ${siteConfig.playStoreDeveloperUrl}`,
    `- Sitemap: ${absoluteUrl("/sitemap.xml")}`,
    "",
    "## Contact",
    "",
    siteConfig.email,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
