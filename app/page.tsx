import Link from "next/link";
import { ArrowRight, Mail, Sparkles } from "lucide-react";
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import AppCard from "@/components/AppCard";
import FeaturedApp from "@/components/FeaturedApp";
import ProcessStep from "@/components/ProcessStep";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import { services } from "@/data/services";
import { publishedApps, featuredApp } from "@/data/apps";
import { siteConfig, mailtoLink } from "@/lib/site-config";

const aboutValues = [
  "Practical by design",
  "Built with care",
  "Focused on quality",
  "Continuously improving",
];

const processSteps = [
  {
    title: "Understand",
    description:
      "Clarify the product goal, target audience, requirements, and technical constraints.",
  },
  {
    title: "Design",
    description:
      "Define the experience, interface structure, visual system, and interaction flow.",
  },
  {
    title: "Build",
    description:
      "Develop the product using maintainable, scalable, and performance-conscious implementation.",
  },
  {
    title: "Improve",
    description:
      "Test, release, measure, maintain, and continuously improve the product.",
  },
];

export default function HomePage() {
  const gridApps = publishedApps.filter((app) => app.id !== featuredApp.id);

  return (
    <>
      <Hero />

      {/* Services */}
      <section id="services" data-anchor className="py-20 lg:py-28">
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            eyebrow="Services"
            title="Focused services for digital products"
            description="End-to-end digital product development focused on performance, usability, and maintainable implementation."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={i * 80}>
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apps */}
      <section
        id="apps"
        data-anchor
        className="border-y border-line bg-surface-muted py-20 lg:py-28"
      >
        <div className="container-page flex flex-col gap-12">
          <SectionHeading
            eyebrow="Apps by 7edge"
            title="Explore our Android apps"
            description="A growing portfolio of utilities and productivity applications available through Google Play."
          />

          <Reveal>
            <FeaturedApp app={featuredApp} />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gridApps.map((app, i) => (
              <Reveal key={app.id} delay={(i % 3) * 80}>
                <AppCard app={app} />
              </Reveal>
            ))}

            {/* Future apps */}
            <Reveal delay={(gridApps.length % 3) * 80}>
              <div className="card flex h-full flex-col items-start justify-center gap-3 border-dashed bg-brand-soft/40 p-6">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-surface text-brand">
                  <Sparkles className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-content-primary">
                  More apps are on the way
                </h3>
                <p className="text-sm leading-relaxed text-content-secondary">
                  7edge Apps continues to build and improve practical digital products.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="flex justify-center">
            <a
              href={siteConfig.playStoreDeveloperUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary group"
            >
              View all on Google Play
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" data-anchor className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            align="left"
            eyebrow="Independent studio · Established 2022"
            title="Independent by structure. Focused by design."
            description="Established in 2022, 7edge Apps is a solo development studio focused on building useful mobile applications and modern web experiences. Direct ownership across design, development, testing, and improvement keeps every product consistent and carefully considered."
          />

          <Reveal className="flex flex-col gap-5">
            <p className="text-sm leading-relaxed text-content-secondary">
              As a solo development studio, every product receives direct attention
              across planning, design, development, testing, release, and continuous
              improvement. The goal is to create useful, reliable, and accessible
              software that solves real problems without unnecessary complexity.
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {aboutValues.map((value) => (
                <li
                  key={value}
                  className="card flex items-center gap-2.5 px-4 py-3 text-sm font-medium text-content-primary"
                >
                  <span className="h-2 w-2 flex-none rounded-full bg-brand" aria-hidden="true" />
                  {value}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-line bg-surface-muted py-20 lg:py-28">
        <div className="container-page flex flex-col gap-14">
          <SectionHeading
            eyebrow="How it works"
            title="From idea to release"
            description="A clear, repeatable path from first conversation to a maintained, released product."
          />
          <div className="relative grid gap-8 md:grid-cols-4 md:gap-6">
            {/* Connecting line on desktop */}
            <div
              aria-hidden="true"
              className="absolute left-0 right-0 top-5 hidden h-px bg-line md:block"
            />
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <ProcessStep index={i + 1} title={step.title} description={step.description} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" data-anchor className="py-20 lg:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="flex flex-col gap-6">
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Let's build something useful"
              description="Share your product idea, development requirements, or design needs to begin a practical conversation."
            />
            <Reveal className="card flex flex-col gap-4 p-6">
              <p className="text-sm text-content-secondary">
                Have a product idea? Get in touch to discuss mobile app development, web
                development, product improvements, or UI design.
              </p>
              <a href={mailtoLink} className="btn-primary group w-fit">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Send an Email
              </a>
              <p className="text-sm text-content-secondary">
                Or email directly:{" "}
                <a href={mailtoLink} className="font-medium text-brand hover:underline">
                  {siteConfig.email}
                </a>
              </p>
            </Reveal>
          </div>
          <Reveal>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
