import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { publishedApps, getAppBySlug } from "@/data/apps";
import { siteConfig } from "@/lib/site-config";

/*
 * Landing-page hero (tasteskill v2.5, kind: software, hero: centred).
 * Centred statement and actions, then a row of real Play Store screens from
 * five apps, the document reader in the middle.
 * Enters once on load; no scroll-linked motion.
 */

const NEWEST = "voice-changer-voice-effects";

const screens = [
  { slug: "status-saver-wa", shot: 1 },
  { slug: "deleted-photo-video-recovery", shot: 1 },
  { slug: "pdf-reader-editor-scanner", shot: 1 },
  { slug: NEWEST, shot: 1 },
  { slug: "screen-mirroring-cast-to-tv", shot: 1 },
];

export default function Hero() {
  const newest = getAppBySlug(NEWEST)!;

  return (
    <section
      id="home"
      data-anchor
      className="relative overflow-hidden pb-16 pt-24 text-center sm:pt-[104px] lg:pb-24"
    >
      <div className="container-page flex flex-col items-center">
        <Link
          href={`/apps/${newest.id}`}
          className="hero-in group inline-flex min-h-[40px] items-center gap-2.5 rounded-full border border-line bg-surface py-1.5 pl-2 pr-4 text-sm text-content-secondary transition-colors hover:border-brand/40"
        >
          <Image src={newest.icon} alt="" width={24} height={24} className="h-6 w-6 rounded-md" />
          <span>
            <span className="font-medium text-content-primary">New:</span> Voice Changer
            with 28 voice effects
          </span>
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </Link>

        <h1
          className="hero-in mt-6 max-w-[17ch] font-sans text-[2.6rem] font-semibold leading-[1.05] tracking-[-0.035em] text-content-primary sm:text-[3.75rem] lg:text-[4.5rem]"
          style={{ animationDelay: "60ms" }}
        >
          Android apps that make your phone more useful
        </h1>

        <p
          className="hero-in mt-5 max-w-[54ch] text-base leading-relaxed text-content-secondary sm:text-lg"
          style={{ animationDelay: "120ms" }}
        >
          Recover deleted photos, scan PDFs, cast to your TV, save statuses and change
          your voice. {publishedApps.length} free apps from {siteConfig.name}, on Google
          Play since {siteConfig.foundingYear}.
        </p>

        <div
          className="hero-in mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row"
          style={{ animationDelay: "180ms" }}
        >
          <a
            href={siteConfig.playStoreDeveloperUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn group min-h-[52px] bg-content-primary px-6 text-white transition-transform hover:bg-black active:scale-[0.98]"
          >
            <Play className="h-4 w-4 fill-current" aria-hidden="true" />
            Get the apps on Google Play
          </a>
          <Link
            href="/#contact"
            className="btn-secondary min-h-[52px] px-6 transition-transform active:scale-[0.98]"
          >
            Start a client project
          </Link>
        </div>
      </div>

      {/* Real screens, document reader in the middle */}
      <div
        className="hero-in relative mt-10 sm:mt-12"
        style={{ animationDelay: "240ms" }}
      >
        <ul className="mx-auto flex max-w-[1180px] items-start justify-center gap-3 px-4 sm:gap-5">
          {screens.map(({ slug, shot }, i) => {
            const app = getAppBySlug(slug)!;
            const centre = i === 2;
            const edge = i === 0 || i === 4;
            return (
              <li
                key={slug}
                className={`${edge ? "hidden md:block" : ""} ${
                  centre ? "w-[46%] sm:w-[230px]" : "w-[30%] sm:w-[200px] sm:pt-8"
                } flex-none`}
              >
                <Link
                  href={`/apps/${app.id}`}
                  className="group block overflow-hidden rounded-[1.6rem] shadow-[0_30px_60px_-30px_rgba(16,18,27,0.45)] ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-0.5"
                >
                  <Image
                    src={`/apps/${slug}/screenshot-${shot}.png`}
                    alt={`${app.name} on Android`}
                    width={460}
                    height={818}
                    priority
                    sizes="(min-width: 640px) 230px, 46vw"
                    className="aspect-[9/16] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
