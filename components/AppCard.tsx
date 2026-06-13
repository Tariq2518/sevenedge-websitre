import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PlayStoreApp } from "@/data/apps";
import PlayStoreButton from "./PlayStoreButton";

export default function AppCard({ app }: { app: PlayStoreApp }) {
  return (
    <article className="card group relative flex h-full flex-col p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lift sm:p-6">
      <div className="flex items-start gap-4">
        <Image
          src={app.icon}
          alt={`${app.name} app icon`}
          width={72}
          height={72}
          className="h-16 w-16 flex-none rounded-2xl border border-line"
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-snug text-content-primary">
            <Link
              href={`/apps/${app.id}`}
              className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
            >
              {app.name}
            </Link>
          </h3>
          <span className="mt-1.5 inline-block rounded-full bg-brand-soft px-2.5 py-0.5 text-xs font-medium text-brand">
            {app.category}
          </span>
        </div>
        <ArrowUpRight
          className="h-5 w-5 flex-none text-content-secondary transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand"
          aria-hidden="true"
        />
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-content-secondary">
        {app.shortDescription}
      </p>

      <div className="relative z-10 mt-5">
        <PlayStoreButton
          href={app.playStoreUrl}
          appName={app.name}
          variant="secondary"
          className="w-full"
        />
      </div>
    </article>
  );
}
