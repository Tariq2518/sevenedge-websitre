export interface NavItem {
  label: string;
  /** In-page anchor (homepage) or absolute route. */
  href: string;
}

/**
 * Primary navigation. Anchor links resolve to homepage sections; the Header
 * adds smooth scrolling with an offset that accounts for the sticky header.
 */
export const navItems: NavItem[] = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Apps", href: "/#apps" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
