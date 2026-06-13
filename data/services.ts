import type { LucideIcon } from "lucide-react";
import { Smartphone, Globe, PenTool } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  capabilities: string[];
}

/**
 * Studio services. Edit this array to change the Services section — the cards
 * render directly from it.
 */
export const services: Service[] = [
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "Design and development of reliable, user-friendly mobile applications with clean architecture, responsive interfaces, and production-ready implementation.",
    icon: Smartphone,
    capabilities: [
      "Android app development",
      "Application redesign and modernization",
      "Performance optimization",
      "API and backend integration",
      "App maintenance and feature development",
      "Google Play release preparation",
    ],
  },
  {
    id: "web-app-development",
    title: "Web App Development",
    description:
      "Modern websites and web applications built for speed, responsiveness, accessibility, and long-term maintainability.",
    icon: Globe,
    capabilities: [
      "Business websites",
      "Product landing pages",
      "Web applications",
      "Responsive frontend development",
      "API integration",
      "Performance and SEO foundations",
    ],
  },
  {
    id: "ui-design",
    title: "UI Design",
    description:
      "Clean and practical user-interface design focused on clarity, consistent visual systems, and smooth user journeys.",
    icon: PenTool,
    capabilities: [
      "Mobile application UI",
      "Website UI",
      "Design systems",
      "Wireframes and user flows",
      "Product redesign",
      "Developer-ready interface specifications",
    ],
  },
];
