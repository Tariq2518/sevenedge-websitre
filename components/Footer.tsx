import Link from "next/link";
import Logo from "./Logo";
import { navItems } from "@/data/navigation";
import { siteConfig, mailtoLink } from "@/lib/site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-12 md:grid-cols-[1.4fr_1fr_1fr] lg:py-16">
        <div className="flex max-w-sm flex-col gap-4">
          <Logo />
          <p className="text-sm leading-relaxed text-content-secondary">
            Independent digital products, built with care since {siteConfig.foundingYear}.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-content-primary">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-content-secondary transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-content-primary">Connect</h2>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href={mailtoLink}
                className="text-sm text-content-secondary transition-colors hover:text-brand"
              >
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.playStoreDeveloperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-content-secondary transition-colors hover:text-brand"
              >
                Google Play developer profile
              </a>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-sm text-content-secondary transition-colors hover:text-brand"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-xs text-content-secondary sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p>Independent software studio · Established {siteConfig.foundingYear}</p>
        </div>
      </div>
    </footer>
  );
}
