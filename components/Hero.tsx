import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { apps, featuredApp } from "@/data/apps";

const labels = ["Mobile Apps", "Web Development", "UI Design"];

// A few real portfolio icons to float around the featured card.
const floatingIcons = apps.filter((app) => app.id !== featuredApp.id).slice(0, 4);

export default function Hero() {
  return (
    <section
      id="home"
      data-anchor
      className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Soft decorative brand shapes + dot grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full brand-glow" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full brand-glow" />
        <div className="absolute inset-x-0 top-0 h-[480px] bg-dot-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>

      <div className="container-page grid items-center gap-12 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24">
        {/* Copy */}
        <div className="flex flex-col items-start gap-6">
          <Reveal>
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
              Independent software studio · Since 2022
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="text-4xl font-semibold leading-[1.08] text-content-primary sm:text-5xl lg:text-[3.4rem]">
              Digital products built to be{" "}
              <span className="text-gradient">useful, clear, and dependable.</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="max-w-xl text-base leading-relaxed text-content-secondary sm:text-lg">
              7edge Apps creates practical mobile applications, modern websites, and
              thoughtfully designed user experiences—from initial concept to production
              release.
            </p>
          </Reveal>

          <Reveal delay={180} className="w-full">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/#apps" className="btn-primary group w-full sm:w-auto">
                Explore Our Apps
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link href="/#contact" className="btn-secondary w-full sm:w-auto">
                Discuss a Project
              </Link>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <ul className="flex flex-wrap gap-2 pt-2">
              {labels.map((label) => (
                <li
                  key={label}
                  className="rounded-full bg-brand-soft px-3 py-1 text-xs font-medium text-brand"
                >
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* Visual composition built from real app icons */}
        <Reveal delay={160} className="relative">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            {/* Featured card, centered */}
            <div className="absolute left-1/2 top-1/2 z-20 w-56 -translate-x-1/2 -translate-y-1/2 sm:w-64">
              <div className="card flex flex-col items-center gap-4 p-6 shadow-lift">
                <Image
                  src={featuredApp.icon}
                  alt={`${featuredApp.name} app icon`}
                  width={96}
                  height={96}
                  priority
                  className="h-20 w-20 rounded-2xl border border-line sm:h-24 sm:w-24"
                />
                <div className="text-center">
                  <p className="text-sm font-semibold text-content-primary">
                    {featuredApp.name}
                  </p>
                  <p className="mt-1 text-xs text-content-secondary">
                    {featuredApp.category}
                  </p>
                </div>
              </div>
            </div>

            {/* Floating real icons */}
            {floatingIcons.map((app, i) => {
              const positions = [
                "left-0 top-6",
                "right-0 top-16",
                "bottom-10 left-2",
                "bottom-0 right-6",
              ];
              return (
                <div
                  key={app.id}
                  className={`absolute z-10 ${positions[i]} animate-float`}
                  style={{ animationDelay: `${i * 0.8}s` }}
                >
                  <Image
                    src={app.icon}
                    alt={`${app.name} app icon`}
                    width={64}
                    height={64}
                    className="h-12 w-12 rounded-xl border border-line bg-surface shadow-soft sm:h-14 sm:w-14"
                  />
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
