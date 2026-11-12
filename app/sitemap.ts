import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site-config";
import { publishedApps } from "@/data/apps";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "monthly", priority: 1 },
    {
      url: absoluteUrl("/privacy"),
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: absoluteUrl("/llms.txt"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.2,
    },
  ];

  const appRoutes: MetadataRoute.Sitemap = publishedApps.map((app) => ({
    url: absoluteUrl(`/apps/${app.id}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    images: [absoluteUrl(app.icon), ...(app.screenshots ?? []).map((src) => absoluteUrl(src))],
  }));

  return [...staticRoutes, ...appRoutes];
}
