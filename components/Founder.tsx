import Image from "next/image";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";
import Reveal from "./Reveal";
import { siteConfig } from "@/lib/site-config";

/** Figures as published on the founder's portfolio site. */
const stats = [
  { value: "5+ yrs", label: "Android & iOS" },
  { value: "20+", label: "apps shipped" },
  { value: "10M+", label: "downloads" },
  { value: "11", label: "developers led" },
];

const skills = [
  "Kotlin",
  "Jetpack Compose",
  "Swift",
  "SwiftUI",
  "Firebase",
  "AdMob",
  "Play Billing",
  "MVVM",
];

export default function Founder() {
  const f = siteConfig.founder;

  return (
    <section id="about" data-anchor className="py-20 lg:py-28">
      <div className="container-page">
        <Reveal>
          <div className="card grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
            {/* Who */}
            <div className="flex flex-col lg:col-span-7">
              <span className="eyebrow w-fit">About the studio</span>

              <div className="mt-6 flex items-center gap-4">
                <Image
                  src={f.image}
                  alt={f.name}
                  width={128}
                  height={128}
                  className="h-20 w-20 flex-none rounded-full border border-line object-cover sm:h-24 sm:w-24"
                />
                <div>
                  <h2 className="font-sans text-2xl font-semibold tracking-[-0.02em] text-content-primary sm:text-3xl">
                    {f.name}
                  </h2>
                  <p className="mt-1 text-content-secondary">{f.role}</p>
                </div>
              </div>

              <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-content-secondary sm:text-lg">
                Tariq started {siteConfig.name} in {siteConfig.foundingYear} and builds every
                app in the catalogue. A software engineer with more than five years of native
                Android and iOS work, Tariq has led a team of 11 developers and shipped apps
                with over 10 million downloads, with ads, subscriptions and performance set
                up properly from the first release.
              </p>

              <p className="mt-4 max-w-[58ch] text-base leading-relaxed text-content-secondary sm:text-lg">
                {siteConfig.name} is a one-person studio: the same developer plans, designs,
                builds and maintains every app, and every client project.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-line px-3 py-1 text-xs font-medium text-content-secondary"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={f.portfolio}
                  target="_blank"
                  rel="noopener me"
                  className="btn-primary group"
                >
                  See Tariq&rsquo;s portfolio
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
                <div className="flex gap-2">
                  <a
                    href={f.linkedin}
                    target="_blank"
                    rel="noopener me"
                    aria-label={`${f.name} on LinkedIn`}
                    className="btn-secondary h-11 min-h-0 w-11 !px-0"
                  >
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <a
                    href={f.github}
                    target="_blank"
                    rel="noopener me"
                    aria-label={`${f.name} on GitHub`}
                    className="btn-secondary h-11 min-h-0 w-11 !px-0"
                  >
                    <Github className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Numbers */}
            <dl className="grid grid-cols-2 gap-px self-start overflow-hidden rounded-2xl border border-line bg-line lg:col-span-5">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface p-6">
                  <dd className="text-3xl font-semibold tracking-[-0.03em] text-content-primary sm:text-4xl">
                    {s.value}
                  </dd>
                  <dt className="mt-1 text-sm text-content-secondary">{s.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
