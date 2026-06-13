import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ChevronRight } from "lucide-react";
import { apps, publishedApps, getAppBySlug } from "@/data/apps";
import { siteConfig, absoluteUrl } from "@/lib/site-config";
import PlayStoreButton from "@/components/PlayStoreButton";
import AppCard from "@/components/AppCard";

export function generateStaticParams() {
  return publishedApps.map((app) => ({ slug: app.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app) return {};

  return {
    title: app.name,
    description: app.shortDescription,
    alternates: { canonical: `/apps/${app.id}` },
    openGraph: {
      title: `${app.name} — ${siteConfig.name}`,
      description: app.shortDescription,
      url: absoluteUrl(`/apps/${app.id}`),
      type: "website",
    },
  };
}

export default async function AppDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getAppBySlug(slug);
  if (!app || app.status === "coming-soon") notFound();

  const related = apps.filter((a) => a.id !== app.id && a.status !== "coming-soon").slice(0, 3);

  // SoftwareApplication structured data — only listing-derived fields.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: app.name,
    description: app.shortDescription,
    applicationCategory: "MobileApplication",
    operatingSystem: "Android",
    url: absoluteUrl(`/apps/${app.id}`),
    image: absoluteUrl(app.icon),
    downloadUrl: app.playStoreUrl,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <div className="container-page py-28 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-sm text-content-secondary"
      >
        <Link href="/" className="hover:text-brand">
          Home
        </Link>
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
        <Link href="/#apps" className="hover:text-brand">
          Apps
        </Link>
        <ChevronRight className="h-4 w-4" aria-hidden="true" />
        <span className="text-content-primary">{app.name}</span>
      </nav>

      {/* Header */}
      <header className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
        <Image
          src={app.icon}
          alt={`${app.name} app icon`}
          width={112}
          height={112}
          priority
          className="h-24 w-24 flex-none rounded-3xl border border-line"
        />
        <div className="flex flex-col gap-3">
          <span className="inline-block w-fit rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-medium text-brand">
            {app.category}
          </span>
          <h1 className="text-3xl font-semibold sm:text-4xl">{app.name}</h1>
          <p className="max-w-2xl text-base text-content-secondary">
            {app.shortDescription}
          </p>
          <div className="mt-1 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PlayStoreButton href={app.playStoreUrl} appName={app.name} />
            {app.privacyPolicyUrl && (
              <a
                href={app.privacyPolicyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-content-secondary hover:text-brand hover:underline"
              >
                App privacy policy
              </a>
            )}
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
        <div className="flex flex-col gap-8">
          <section>
            <h2 className="text-xl font-semibold">About this app</h2>
            <p className="mt-3 leading-relaxed text-content-secondary">
              {app.longDescription ?? app.shortDescription}
            </p>
          </section>

          {app.features && (
            <section>
              <h2 className="text-xl font-semibold">Highlights</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {app.features.map((feature) => (
                  <li
                    key={feature}
                    className="card flex items-start gap-2.5 p-4 text-sm text-content-secondary"
                  >
                    <Check className="mt-0.5 h-4 w-4 flex-none text-brand" aria-hidden="true" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {/* Screenshots */}
        {app.screenshots && app.screenshots.length > 0 && (
          <section aria-label="Screenshots">
            <h2 className="text-xl font-semibold">Screenshots</h2>
            <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
              {app.screenshots.map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${app.name} screenshot ${i + 1}`}
                  width={300}
                  height={533}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="h-auto w-40 flex-none rounded-2xl border border-line sm:w-44"
                />
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mt-20" aria-label="Related applications">
          <h2 className="text-xl font-semibold">More apps by 7edge</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <AppCard key={r.id} app={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
