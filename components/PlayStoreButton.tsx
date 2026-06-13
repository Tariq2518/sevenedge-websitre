import { ExternalLink } from "lucide-react";

interface PlayStoreButtonProps {
  href: string;
  /** Accessible label, e.g. the app name. */
  appName: string;
  variant?: "primary" | "secondary";
  className?: string;
}

/**
 * Link to a Google Play listing. Opens in a new tab with safe rel attributes.
 */
export default function PlayStoreButton({
  href,
  appName,
  variant = "primary",
  className = "",
}: PlayStoreButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${appName} on Google Play (opens in a new tab)`}
      className={`${variant === "primary" ? "btn-primary" : "btn-secondary"} group ${className}`}
    >
      View on Google Play
      <ExternalLink
        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );
}
