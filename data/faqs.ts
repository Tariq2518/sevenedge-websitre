/**
 * Frequently asked questions, grouped by topic.
 * Every answer is drawn from the app listings, data/apps.ts or the Privacy
 * Policy. Keep them factual: no prices, timelines or figures that are not
 * published elsewhere on the site.
 * Feeds the /faq page, its FAQPage structured data and llms-full.txt.
 */
export interface Faq {
  q: string;
  a: string;
}

export interface FaqGroup {
  id: string;
  title: string;
  items: Faq[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: "apps",
    title: "Using the apps",
    items: [
      {
        q: "Are 7edge Apps free to download?",
        a: "Yes. Every 7edge app is free to download from Google Play. Some apps show ads to keep them free; the Google Play listing of each app says whether it contains ads.",
      },
      {
        q: "Which devices do the apps work on?",
        a: "The apps are built for Android phones and are published on Google Play. There are no iPhone (iOS) versions at the moment.",
      },
      {
        q: "Where can I download the apps?",
        a: "All apps are on Google Play under the developer name 7edge Apps. Each app page on this website links straight to its Google Play listing.",
      },
      {
        q: "Do the apps work without the internet?",
        a: "The core features run on your phone. Voice Changer, for example, works fully offline, and the recovery and document apps scan and open files stored on the device. Ads, if an app shows them, need a connection.",
      },
      {
        q: "Do I need to root my phone to recover deleted files?",
        a: "No. Deleted Photo Video Recovery scans the storage your phone allows apps to read, and a standard scan does not need root access. What can be recovered depends on whether the file has already been overwritten.",
      },
      {
        q: "Why can't the recovery app find a file I deleted?",
        a: "Once new data is written over the space a deleted file used, it can no longer be restored. Run a deep scan as soon as possible after deleting something, and avoid saving new photos or files in the meantime.",
      },
      {
        q: "Which languages are the apps available in?",
        a: "All apps are available in English. Voice Changer also supports Spanish, French, Portuguese, Hindi, Arabic, Urdu and Indonesian. Each app's Google Play listing shows its current languages.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy and data",
    items: [
      {
        q: "Do the apps upload my photos, files or recordings?",
        a: "No. Your photos, videos, documents and recordings are processed on your phone and are not collected by 7edge Apps. Third-party services such as Google AdMob and Firebase may receive limited technical data, as described in the Privacy Policy.",
      },
      {
        q: "Do I need an account to use the apps?",
        a: "No. The apps work without signing up or creating an account.",
      },
      {
        q: "Where can I read each app's privacy policy?",
        a: "Every app has its own privacy policy, linked from its page on this website and from its Google Play listing. The general Privacy Policy on this site covers all apps and the website.",
      },
      {
        q: "How do I ask for my data to be deleted?",
        a: "Email 7edgetechnologies@gmail.com with the app name and your request.",
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    items: [
      {
        q: "How do I report a bug or suggest a feature?",
        a: "Email 7edgetechnologies@gmail.com with the app name, your phone model and Android version, and what happened. You can also leave a review on the app's Google Play page.",
      },
    ],
  },
  {
    id: "projects",
    title: "Client projects",
    items: [
      {
        q: "Can 7edge Apps build an app or website for my business?",
        a: "Yes. Alongside its own apps, 7edge Apps takes on client work in mobile app development, web app development and UI design.",
      },
      {
        q: "How do I start a project?",
        a: "Send a short description of what you want to build through the contact form on the home page, or email 7edgetechnologies@gmail.com. Include your goal, the platforms you need and any deadline.",
      },
      {
        q: "Who builds the projects?",
        a: "7edge Apps is an independent studio established in 2022. The same person who builds and maintains the studio's own Android apps plans, designs and develops each client project.",
      },
    ],
  },
];

export const allFaqs: Faq[] = faqGroups.flatMap((g) => g.items);
