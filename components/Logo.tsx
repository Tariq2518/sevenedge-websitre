import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

interface LogoProps {
  /** Wrap in a link to the homepage. */
  href?: string;
  className?: string;
  /** Hide the wordmark text, showing only the mark. */
  markOnly?: boolean;
}

/**
 * The 7edge Apps brand lockup: the logo mark plus the studio name.
 * The SVG preserves the logo's original proportions.
 */
export default function Logo({ href = "/", className = "", markOnly = false }: LogoProps) {
  const content = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/logo.svg"
        alt="7edge Apps logo"
        width={84}
        height={30}
        priority
        className="h-7 w-auto"
      />
      {!markOnly && (
        <span className="text-base font-semibold tracking-tight text-content-primary">
          {siteConfig.name}
        </span>
      )}
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} aria-label={`${siteConfig.name} — home`} className="rounded-md">
      {content}
    </Link>
  );
}
