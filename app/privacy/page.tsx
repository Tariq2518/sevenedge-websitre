import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, mailtoLink } from "@/lib/site-config";
import { publishedApps } from "@/data/apps";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name} — covering this website and all 7edge Apps Android applications.`,
  alternates: { canonical: "/privacy" },
};

// Effective date is fixed (not auto-updated) so the legal document stays stable.
const EFFECTIVE_DATE = "June 13, 2026";

// Third-party services used across the 7edge Apps applications, taken from the
// individual app privacy policies. Each app's own policy lists the exact set it
// uses (see the per-app links at the bottom of this page).
const thirdParties: { name: string; href: string }[] = [
  { name: "Google Play Services", href: "https://policies.google.com/privacy" },
  { name: "Google AdMob", href: "https://policies.google.com/technologies/ads" },
  {
    name: "Google Analytics for Firebase",
    href: "https://firebase.google.com/support/privacy",
  },
  {
    name: "Firebase Crashlytics",
    href: "https://firebase.google.com/support/privacy",
  },
  { name: "Meta / Facebook (Audience Network)", href: "https://www.facebook.com/about/privacy" },
  { name: "AppLovin", href: "https://www.applovin.com/privacy/" },
];

export default function PrivacyPage() {
  return (
    <div className="container-page max-w-3xl py-28 lg:py-32">
      <nav aria-label="Breadcrumb" className="mb-8 text-sm text-content-secondary">
        <Link href="/" className="hover:text-brand">
          Home
        </Link>
        <span className="mx-2" aria-hidden="true">
          /
        </span>
        <span className="text-content-primary">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl font-semibold sm:text-4xl">Privacy Policy</h1>
      <p className="mt-3 text-sm text-content-secondary">
        Effective date: {EFFECTIVE_DATE}
      </p>

      <div className="mt-10 flex flex-col gap-9 leading-relaxed text-content-secondary">
        <section>
          <p>
            This Privacy Policy explains how {siteConfig.name} (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, &ldquo;our&rdquo;) handles information in connection with the{" "}
            {siteConfig.name} website and the Android applications we publish on Google
            Play (together, the &ldquo;Services&rdquo;). It is a general policy that
            applies across our developer account. Each application also has its own
            privacy policy with details specific to that app; those are linked at the end
            of this page, and they take precedence where they are more specific.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-content-primary">
            Information we collect
          </h2>
          <p className="mt-3">
            <strong className="text-content-primary">Data processed on your device.</strong>{" "}
            Our apps are utilities that, for their core functions, generally work with
            content <em>on your device</em> (for example scanning storage, saving media,
            reading documents, or casting to a display). That content is processed on the
            device and is not collected by us.
          </p>
          <p className="mt-3">
            <strong className="text-content-primary">
              Information collected automatically.
            </strong>{" "}
            Like most apps and websites, the Services and the third-party tools they use
            may collect limited technical &ldquo;log&rdquo; and diagnostic data, such as
            your device IP address, device name, operating system version, app
            configuration, the date and time the Service is used, the pages or screens
            viewed, and similar usage statistics. The apps do not collect precise device
            location.
          </p>
          <p className="mt-3">
            <strong className="text-content-primary">Information you provide.</strong> If
            you contact us through the website form or by email, we receive what you choose
            to send—such as your name, email address, selected service, and message—and use
            it to respond to you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-content-primary">
            Cookies and similar technologies
          </h2>
          <p className="mt-3">
            The Services and certain third-party libraries may use cookies, SDKs, pixels,
            and similar technologies to support functionality, analytics, advertising, and
            service delivery. Where consent is legally required for non-essential tracking,
            it is requested. You can refuse or reset these through your browser or device
            settings, though some features may then work differently.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-content-primary">
            Third-party services
          </h2>
          <p className="mt-3">
            We rely on established third-party services to operate, analyze, secure, and
            (in some apps) monetize the Services through advertising. These providers may
            collect or receive information—such as device identifiers and the diagnostic
            data above—in line with their own privacy policies. Depending on the app, these
            may include:
          </p>
          <ul className="mt-4 list-disc space-y-1.5 pl-5">
            {thirdParties.map((p) => (
              <li key={p.name}>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-content-primary hover:text-brand hover:underline"
                >
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-3">
            The exact set of services for a given app is described in that app&rsquo;s own
            privacy policy and in its Google Play &ldquo;Data safety&rdquo; section.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-content-primary">
            How we use information
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>To provide, maintain, and improve the Services.</li>
            <li>To deliver and measure advertising in apps that show ads.</li>
            <li>To analyze usage and diagnose crashes and errors.</li>
            <li>To respond to enquiries and send important notices.</li>
            <li>To comply with legal obligations and protect rights and safety.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-content-primary">
            How information is shared
          </h2>
          <p className="mt-3">
            We do not sell your personal information. We share information with the
            third-party service providers listed above so they can perform their functions;
            they are expected to use it only for those purposes. We may share aggregated or
            anonymized data with external services to improve the Services, and we may
            disclose information when required by law or to protect rights, safety, and
            security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-content-primary">Data retention</h2>
          <p className="mt-3">
            We keep information only as long as needed for the purposes described here.
            Across our apps, typical retention is: information you provide is kept for up to
            12 months after you stop using the relevant Service; automatically collected
            diagnostic data for up to 24 months; and aggregated or anonymized data may be
            kept indefinitely. Contact-enquiry information is kept while we handle your
            request and for reasonable follow-up. You can ask us to delete information you
            have sent by emailing us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-content-primary">Security</h2>
          <p className="mt-3">
            We use reasonable physical, electronic, and procedural safeguards to protect
            information. However, no method of transmission over the internet or method of
            electronic storage is completely secure, so we cannot guarantee absolute
            security. Where required by law, we will notify affected users of a data
            breach.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-content-primary">
            Children&rsquo;s privacy
          </h2>
          <p className="mt-3">
            The Services are not directed to children under 13 (and, for some applications,
            under 16), and we do not knowingly collect personal information from them. If we
            learn that a child has provided us personal information, we delete it. If you
            believe a child has provided us information, please contact us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-content-primary">Your choices</h2>
          <p className="mt-3">
            You can manage app permissions and reset or limit ad personalization in your
            device settings, manage cookies in your browser, and contact us about
            information you have sent us. Depending on your location, you may have
            additional rights under applicable privacy laws.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-content-primary">
            App-specific privacy policies
          </h2>
          <p className="mt-3">
            Each application has its own privacy policy with details specific to that app:
          </p>
          <ul className="mt-4 list-disc space-y-1.5 pl-5">
            {publishedApps.map((app) => (
              <li key={app.id}>
                {app.privacyPolicyUrl ? (
                  <a
                    href={app.privacyPolicyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-content-primary hover:text-brand hover:underline"
                  >
                    {app.name}
                  </a>
                ) : (
                  <span className="text-content-primary">{app.name}</span>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-content-primary">
            Changes to this policy
          </h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. Material changes will be
            reflected by updating the effective date above.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-content-primary">Contact</h2>
          <p className="mt-3">
            For any questions about this Privacy Policy or our data practices, email{" "}
            <a href={mailtoLink} className="font-medium text-brand hover:underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
