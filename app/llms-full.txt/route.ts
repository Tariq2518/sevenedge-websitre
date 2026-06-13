import { siteConfig, absoluteUrl } from "@/lib/site-config";
import { services } from "@/data/services";
import { publishedApps } from "@/data/apps";

export const dynamic = "force-static";

// Expanded, still-concise public summary for AI assistants.
export function GET() {
  const lines: string[] = [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `${siteConfig.name} is an independent (solo) software studio established in ${siteConfig.foundingYear}.`,
    "Every product receives direct attention across planning, design, development,",
    "testing, release, and continuous improvement.",
    "",
    "## Services",
    "",
  ];

  for (const s of services) {
    lines.push(`### ${s.title}`, "", s.description, "", "Capabilities:");
    lines.push(...s.capabilities.map((c) => `- ${c}`), "");
  }

  lines.push("## Development process", "");
  lines.push(
    "1. Understand — clarify goals, audience, requirements, constraints.",
    "2. Design — define experience, interface structure, and visual system.",
    "3. Build — maintainable, scalable, performance-conscious implementation.",
    "4. Improve — test, release, measure, maintain, and improve.",
    "",
  );

  lines.push("## Applications", "");
  for (const a of publishedApps) {
    lines.push(
      `### ${a.name}`,
      "",
      `- Category: ${a.category}`,
      `- ${a.longDescription ?? a.shortDescription}`,
      `- Page: ${absoluteUrl(`/apps/${a.id}`)}`,
      `- Google Play: ${a.playStoreUrl}`,
      "",
    );
  }

  lines.push(
    "## Links",
    "",
    `- Website: ${siteConfig.url}`,
    `- Privacy Policy: ${absoluteUrl("/privacy")}`,
    `- Google Play developer profile: ${siteConfig.playStoreDeveloperUrl}`,
    `- Sitemap: ${absoluteUrl("/sitemap.xml")}`,
    "",
    "## Contact",
    "",
    siteConfig.email,
    "",
  );

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
