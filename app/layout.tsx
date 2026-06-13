import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig, absoluteUrl } from "@/lib/site-config";
import { services } from "@/data/services";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "7edge Apps — Mobile Apps, Web Development and UI Design",
    template: "%s — 7edge Apps",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "7edge Apps",
    "mobile app development",
    "Android apps",
    "web development",
    "UI design",
    "independent software studio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: "7edge Apps — Mobile Apps, Web Development and UI Design",
    description: siteConfig.description,
    url: siteConfig.url,
    locale: "en_US",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "7edge Apps — independent software studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "7edge Apps — Mobile Apps, Web Development and UI Design",
    description: siteConfig.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

// Organization structured data — only verified fields, no fabricated metrics.
const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: absoluteUrl("/icon.svg"),
  image: absoluteUrl("/icon.svg"),
  description: siteConfig.description,
  foundingDate: String(siteConfig.foundingYear),
  email: siteConfig.email,
  sameAs: [siteConfig.playStoreDeveloperUrl],
  knowsAbout: services.map((s) => s.title),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
