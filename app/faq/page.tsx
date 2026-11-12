import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { faqGroups, allFaqs } from "@/data/faqs";
import { siteConfig, absoluteUrl, mailtoLink } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "FAQ: Apps, Privacy and Client Projects",
  description:
    "Answers about 7edge Apps: free Android apps, offline use, file recovery without root, privacy and data, support, and building an app or website with the studio.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: `FAQ — ${siteConfig.name}`,
    description:
      "Answers about 7edge Apps: free Android apps, privacy, support and client projects.",
    url: absoluteUrl("/faq"),
    images: [{ url: "/og.png", width: 1200, height: 630, alt: siteConfig.name }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      "@id": `${absoluteUrl("/faq")}#faq`,
      url: absoluteUrl("/faq"),
      mainEntity: allFaqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "FAQ", item: absoluteUrl("/faq") },
      ],
    },
  ],
};

export default function FaqPage() {
  return (
    <div className="container-page py-28 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav aria-label="Breadcrumb" className="text-sm text-content-secondary">
        <Link href="/" className="hover:text-brand">
          Home
        </Link>
        <span className="mx-2" aria-hidden="true">
          /
        </span>
        <span className="text-content-primary">FAQ</span>
      </nav>

      <div className="mt-8 grid gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Intro + topic links */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <h1 className="font-sans text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-content-secondary">
              About the {siteConfig.name} Android apps, your privacy, getting help, and
              working with the studio on your own project.
            </p>

            <ul className="mt-8 hidden flex-col gap-1 lg:flex">
              {faqGroups.map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className="inline-flex min-h-[40px] items-center text-sm font-medium text-content-secondary transition-colors hover:text-brand"
                  >
                    {g.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Questions */}
        <div className="flex flex-col gap-14 lg:col-span-8">
          {faqGroups.map((group) => (
            <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`}>
              <h2
                id={`${group.id}-title`}
                className="font-sans text-sm font-semibold uppercase tracking-[0.08em] text-content-secondary"
              >
                {group.title}
              </h2>
              <div className="mt-4 border-t border-line">
                {group.items.map((item) => (
                  <details key={item.q} className="group border-b border-line">
                    <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-[1.05rem] font-medium text-content-primary transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
                      {item.q}
                      <Plus
                        className="h-5 w-5 flex-none text-content-secondary transition-transform duration-200 group-open:rotate-45"
                        aria-hidden="true"
                      />
                    </summary>
                    <p className="max-w-[65ch] pb-5 pr-10 leading-relaxed text-content-secondary">
                      {item.a}
                    </p>
                  </details>
                ))}
              </div>
            </section>
          ))}

          {/* Still have a question */}
          <div className="card flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div>
              <h2 className="font-sans text-xl font-semibold">Still have a question?</h2>
              <p className="mt-1.5 text-content-secondary">
                Email {siteConfig.email} and include the app name.
              </p>
            </div>
            <a href={mailtoLink} className="btn-primary group flex-none">
              Email the studio
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
