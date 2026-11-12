import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Figtree } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig, absoluteUrl } from "@/lib/site-config";
import { services } from "@/data/services";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-sans",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-display",
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
    "Android app developer",
    "app development studio",
    "data recovery app",
    "PDF reader app",
    "screen mirroring app",
    "video downloader app",
    "status saver app",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "technology",
  formatDetection: { email: false, telephone: false, address: false },
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
    types: { "text/plain": [{ url: "/llms.txt", title: "LLM-readable summary" }] },
  },
};

export const viewport: Viewport = {
  themeColor: "#6c45e6",
  width: "device-width",
  initialScale: 1,
};

// Site-wide structured data — only verified fields, no fabricated metrics.
const orgId = `${siteConfig.url}/#organization`;
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": orgId,
      name: siteConfig.name,
      alternateName: ["7edge", "Seven Edge Apps", "7edge Technologies"],
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/logo.png"),
        width: 512,
        height: 512,
      },
      image: absoluteUrl("/og.png"),
      description: siteConfig.description,
      foundingDate: String(siteConfig.foundingYear),
      email: siteConfig.email,
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.email,
        availableLanguage: ["English"],
      },
      sameAs: [siteConfig.playStoreDeveloperUrl],
      knowsAbout: services.map((s) => s.title),
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      name: siteConfig.name,
      alternateName: "7edge",
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": orgId },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${figtree.variable} ${bricolage.variable}`}>
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
