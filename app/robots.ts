import type { MetadataRoute } from "next";
import { siteConfig, absoluteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

// Search engines and AI assistants that are explicitly welcomed, so the site
// can appear in Google, Bing, Apple, DuckDuckGo, Yandex, ChatGPT, Claude,
// Perplexity and Gemini answers.
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "Google-Extended",
  "Googlebot",
  "Bingbot",
  "Applebot",
  "Applebot-Extended",
  "PerplexityBot",
  "Perplexity-User",
  "DuckDuckBot",
  "YandexBot",
  "CCBot",
  "Meta-ExternalAgent",
];

const disallow = [
  "/api/",
  "/admin/",
  "/dashboard/",
  "/private/",
  "/preview/",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...aiCrawlers.map((userAgent) => ({ userAgent, allow: "/", disallow })),
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
