"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";
import { navItems } from "@/data/navigation";

const MENU_ID = "mobile-navigation";

/**
 * Sticky, lightweight header. Gains a subtle border + background blur after a
 * small scroll. Anchor links rely on CSS scroll-margin so they land below the
 * header.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-background/0"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo markOnly />

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-[40px] items-center rounded-full px-3.5 text-sm font-medium text-content-secondary transition-colors hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/#contact" className="btn-primary hidden md:inline-flex">
            Start a Project
          </Link>
          <button
            type="button"
            className="btn-secondary h-11 min-h-0 w-11 !px-0 md:hidden"
            aria-label="Open navigation"
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            onClick={() => setMenuOpen(true)}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileNavigation id={MENU_ID} open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
