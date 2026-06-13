import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Star } from "lucide-react";
import type { PlayStoreApp } from "@/data/apps";
import PlayStoreButton from "./PlayStoreButton";

/**
 * Large horizontal presentation for the featured app. If approved screenshots
 * are supplied in the app data they are shown; otherwise a clean, brand-tinted
 * highlights panel is rendered (we never fabricate screenshots).
 */
export default function FeaturedApp({ app }: { app: PlayStoreApp }) {
  const hasShots = (app.screenshots?.length ?? 0) > 0;

  return (
    <article className="card overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-2">
        {/* Details */}
        <div className="flex flex-col gap-5 p-6 sm:p-8 lg:p-10">
          <span className="eyebrow w-fit">
            <Star className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            Featured app
          </span>

          <div className="flex items-center gap-4">
            <Image
              src={app.icon}
              alt={`${app.name} app icon`}
              width={80}
              height={80}
              className="h-16 w-16 flex-none rounded-2xl border border-line sm:h-20 sm:w-20"
            />
            <div>
              <h3 className="text-xl font-semibold text-content-primary sm:text-2xl">
                {app.name}
              </h3>
              <span className="mt-1 inline-block rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-medium text-brand">
                {app.category}
              </span>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-content-secondary sm:text-base">
            {app.longDescription ?? app.shortDescription}
          </p>

          {app.features && (
            <ul className="grid gap-2.5 sm:grid-cols-2">
              {app.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-content-secondary"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 flex-none text-brand"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}

          <div className="mt-1 flex flex-col gap-3 sm:flex-row">
            <PlayStoreButton href={app.playStoreUrl} appName={app.name} />
            <Link href={`/apps/${app.id}`} className="btn-secondary group">
              View details
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Visual */}
        <div className="relative flex items-center justify-center overflow-hidden border-t border-line bg-brand-soft p-8 lg:border-l lg:border-t-0">
          <div aria-hidden="true" className="absolute inset-0 bg-dot-grid opacity-50" />
          {hasShots ? (
            <div className="relative z-10 flex gap-4">
              {app.screenshots!.slice(0, 2).map((src, i) => (
                <Image
                  key={src}
                  src={src}
                  alt={`${app.name} screenshot ${i + 1}`}
                  width={220}
                  height={460}
                  loading="lazy"
                  className="w-32 rounded-2xl border border-line shadow-soft sm:w-40"
                />
              ))}
            </div>
          ) : (
            <div className="relative z-10 flex flex-col items-center gap-4 text-center">
              <Image
                src={app.icon}
                alt={`${app.name} app icon`}
                width={144}
                height={144}
                className="h-28 w-28 rounded-[1.75rem] border border-line shadow-lift sm:h-32 sm:w-32"
              />
              <p className="max-w-xs text-sm text-content-secondary">
                Available now on Google Play.
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
