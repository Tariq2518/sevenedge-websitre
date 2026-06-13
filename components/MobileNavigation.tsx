"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { navItems } from "@/data/navigation";
import { mailtoLink } from "@/lib/site-config";

interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
  /** id used by the toggle button's aria-controls. */
  id: string;
}

export default function MobileNavigation({ open, onClose, id }: MobileNavigationProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);

  // Close on Escape and lock body scroll while open.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    // Move focus into the panel for keyboard users.
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  return (
    <div
      id={id}
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      hidden={!open}
      className="md:hidden"
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close navigation"
        onClick={onClose}
        className="fixed inset-0 top-16 z-40 bg-content-primary/20 backdrop-blur-sm"
      />
      <div className="fixed inset-x-0 top-16 z-50 origin-top border-b border-line bg-surface/95 backdrop-blur">
        <nav className="container-page flex flex-col gap-1 py-4">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation"
              className="btn-secondary -mt-2 mb-1 h-10 min-h-0 w-10 !px-0"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="flex min-h-[44px] items-center rounded-xl px-3 text-base font-medium text-content-primary hover:bg-brand-soft hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
          <a href={mailtoLink} onClick={onClose} className="btn-primary mt-3 w-full">
            Start a Project
          </a>
        </nav>
      </div>
    </div>
  );
}
