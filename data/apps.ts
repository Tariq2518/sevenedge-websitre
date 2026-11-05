/**
 * Single source of truth for the 7edge Apps portfolio.
 *
 * To add a new app:
 *   1. Add an object to the `apps` array below.
 *   2. Drop its icon at  public/apps/<slug>/icon.png  (512x512 recommended).
 *   3. (Optional) Add portrait screenshots at public/apps/<slug>/screenshot-1.png …
 *      and set `screenshots: shots("<slug>", <count>)`.
 *   4. Record the source URL in ASSET_SOURCES.md.
 * Nothing else needs to change — cards, the featured panel, detail pages,
 * the sitemap and llms.txt all read from this array.
 */
export interface PlayStoreApp {
  /** Stable id / URL slug used for /apps/<slug>. */
  id: string;
  name: string;
  /** Android package id on Google Play. */
  packageId: string;
  shortDescription: string;
  longDescription?: string;
  /** Path under /public, e.g. /apps/<slug>/icon.png */
  icon: string;
  playStoreUrl: string;
  /** The app's own published privacy policy (on Google Play). */
  privacyPolicyUrl?: string;
  /** App type / Google Play category. */
  category: string;
  /** Local screenshot paths under /public. Optional. */
  screenshots?: string[];
  /** Concise, listing-derived feature highlights. */
  features?: string[];
  featured?: boolean;
  status?: "published" | "coming-soon";
}

/** Builds the local screenshot paths /apps/<slug>/screenshot-1.png … -<count>.png. */
function shots(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/apps/${slug}/screenshot-${i + 1}.png`);
}

export const apps: PlayStoreApp[] = [
  {
    id: "deleted-photo-video-recovery",
    name: "Deleted Photo Video Recovery",
    packageId: "edgerecoveryapp.recoverdata.datarecoveryapp",
    category: "Tools",
    shortDescription:
      "Scan your phone for deleted photos, videos, audio and documents, preview them, and restore what you need.",
    longDescription:
      "Deleted Photo Video Recovery searches supported storage on your device for photos, videos, audio files and documents that were removed. Choose a quick scan or a deeper full scan, browse the results grouped by type and date, and restore the items you want in a single step. Everything runs on your device, and no root access is needed for a standard scan.",
    icon: "/apps/deleted-photo-video-recovery/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=edgerecoveryapp.recoverdata.datarecoveryapp",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2023/08/data-recovery-privacy-policy.html",
    screenshots: shots("deleted-photo-video-recovery", 6),
    features: [
      "Quick scan and deep scan modes",
      "Recover photos, videos, audio and documents",
      "Preview, filter and sort results before restoring",
      "Batch restore to a folder of your choice",
    ],
    featured: true,
    status: "published",
  },
  {
    id: "status-saver-wa",
    name: "Status Saver WA: Video Save",
    packageId: "sevenedge.edgestatussaver.whatsappstatussaver",
    category: "Tools",
    shortDescription:
      "Save photo and video statuses you've viewed, then re-share or manage them in one gallery.",
    longDescription:
      "Status Saver WA keeps a copy of the photo and video statuses you've already viewed on your device. Browse statuses by day, save the ones you like in full quality, and find them later in a tidy saved gallery where you can re-share or delete them. It works offline with no account, and includes light and dark themes and several languages.",
    icon: "/apps/status-saver-wa/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=sevenedge.edgestatussaver.whatsappstatussaver",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2022/09/status-saver-privacy-policy.html",
    screenshots: shots("status-saver-wa", 8),
    features: [
      "Save image and video statuses in one tap",
      "Organised gallery for saved media",
      "Re-share saved items to other apps",
      "Works offline, with light/dark themes and multiple languages",
    ],
    featured: false,
    status: "published",
  },
  {
    id: "video-downloader-player",
    name: "Video Downloader and Player",
    packageId: "sevenedge.videosaver.videodownloaderapp",
    category: "Video Players & Editors",
    shortDescription:
      "Save videos from supported sites with a built-in browser, then watch them offline in the app's player.",
    longDescription:
      "Video Downloader and Player includes a built-in browser that detects downloadable videos on supported pages. Pick the quality you want, track downloads in a manager that can pause, resume and retry, and watch saved files offline in the integrated player. Files stay on your device and no sign-in is required. Please only download content you own or have permission to save.",
    icon: "/apps/video-downloader-player/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=sevenedge.videosaver.videodownloaderapp",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2022/08/edge-video-downloader-privacy-policy.html",
    screenshots: shots("video-downloader-player", 7),
    features: [
      "Built-in browser that detects downloadable videos",
      "Choose resolution before downloading",
      "Download manager with pause, resume and retry",
      "Built-in player for offline viewing",
    ],
    featured: false,
    status: "published",
  },
  {
    id: "screen-mirroring-cast-to-tv",
    name: "Screen Mirroring Cast To TV",
    packageId: "miracast.screenmirroring.screencasting",
    category: "Tools",
    shortDescription:
      "Mirror your phone screen or cast photos, videos and music to a smart TV on the same network.",
    longDescription:
      "Screen Mirroring Cast To TV connects your phone to a compatible smart TV, streaming stick or DLNA device on the same Wi-Fi network. Mirror your whole screen in real time, or cast individual photos, videos and music to the bigger display. A guided setup helps you pick the right connection method for your TV.",
    icon: "/apps/screen-mirroring-cast-to-tv/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=miracast.screenmirroring.screencasting",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2022/02/privacy-policy-7edgetechnologies-built.html",
    screenshots: shots("screen-mirroring-cast-to-tv", 7),
    features: [
      "Real-time screen mirroring to compatible TVs",
      "Cast photos, videos and music",
      "DLNA and Miracast-compatible devices supported",
      "Guided connection on the same Wi-Fi network",
    ],
    featured: false,
    status: "published",
  },
  {
    id: "pdf-reader-editor-scanner",
    name: "PDF Reader: Edit & Scan",
    packageId: "com.sevenedge.pdfreader.docscanner.fileconverter",
    category: "Productivity",
    shortDescription:
      "Read, edit, scan, convert and organise PDFs and office documents in one app.",
    longDescription:
      "PDF Reader: Edit & Scan brings reading, editing, scanning and conversion into a single app. Annotate PDFs with text, highlights, drawings and signatures, scan paper documents with your camera, convert images and office files to PDF, and use tools to merge, split, compress or password-protect files. It also opens Word, Excel, PowerPoint and text files, and all processing happens offline on your device.",
    icon: "/apps/pdf-reader-editor-scanner/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.sevenedge.pdfreader.docscanner.fileconverter",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2026/06/pdf-reader-editor-scanner-app.html",
    screenshots: shots("pdf-reader-editor-scanner", 8),
    features: [
      "Read and annotate PDFs: highlight, draw, sign",
      "Scan paper documents to PDF with filters",
      "Convert images and office files to PDF",
      "Merge, split, compress and password-protect PDFs",
    ],
    featured: false,
    status: "published",
  },
  {
    id: "pdf-reader-document-viewer",
    name: "PDF Reader: Document Viewer",
    packageId:
      "com.sevenedge.all.documentreader.and.pdfviewer.documents.app.filereader",
    category: "Productivity",
    shortDescription:
      "Open PDF, Word, Excel, PowerPoint and other documents offline, all in one place.",
    longDescription:
      "PDF Reader: Document Viewer finds the documents on your device and gathers them in one place so you can search and open them quickly. It reads PDF, Word, Excel, PowerPoint, text and other common formats without an internet connection, with a reading mode, highlighting and text search for PDFs. Files are processed locally and never uploaded.",
    icon: "/apps/pdf-reader-document-viewer/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.sevenedge.all.documentreader.and.pdfviewer.documents.app.filereader",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2024/06/all-document-reader-privacy-policy.html",
    screenshots: shots("pdf-reader-document-viewer", 7),
    features: [
      "Opens PDF, Word, Excel, PowerPoint, TXT and more",
      "Works fully offline",
      "Automatic document discovery, search and favorites",
      "Reading mode, highlighting and text search for PDFs",
    ],
    featured: false,
    status: "published",
  },
  {
    id: "file-recovery-data-restore",
    name: "File Recovery: Data Restore",
    packageId: "com.sevenedge.easyrecovery.datarecovery.recoverfiles",
    category: "Tools",
    shortDescription:
      "Recover deleted photos, videos, audio and documents, then lock private files in an encrypted vault.",
    longDescription:
      "File Recovery: Data Restore deep-scans supported device storage for deleted photos, videos, audio and documents so you can preview and restore what you still need, with no computer or root required. It also includes an encrypted private vault for hiding sensitive files, an app lock to protect chosen apps, and a storage cleaner. Everything stays on your device.",
    icon: "/apps/file-recovery-data-restore/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.sevenedge.easyrecovery.datarecovery.recoverfiles",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2026/06/easy-recovery-recover-files.html",
    screenshots: shots("file-recovery-data-restore", 6),
    features: [
      "Deep scan for deleted photos, videos, audio and documents",
      "Preview recoverable files before restoring",
      "Encrypted private vault for sensitive files",
      "App lock with PIN or pattern",
    ],
    featured: false,
    status: "published",
  },
  {
    id: "animal-ringtones-wallpapers",
    name: "Animal Ringtones & Wallpapers",
    packageId: "com.sevenedge.animalringtone.wallpaper.animalsounds",
    category: "Entertainment",
    shortDescription:
      "Real animal sounds for ringtones, notifications and alarms, plus HD animal wallpapers.",
    longDescription:
      "Animal Ringtones & Wallpapers gives you a library of real animal sounds to set as your ringtone, notification tone or alarm, along with HD wallpapers for your home and lock screen. Content is organised into nine categories, from pets and farm animals to birds, insects and sea life, with search, favorites and previews.",
    icon: "/apps/animal-ringtones-wallpapers/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.sevenedge.animalringtone.wallpaper.animalsounds",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2026/06/animal-ringtone-wallpaper-app.html",
    screenshots: shots("animal-ringtones-wallpapers", 6),
    features: [
      "Real animal sounds for ringtones, notifications and alarms",
      "HD wallpapers for home and lock screen",
      "Nine animal categories",
      "Search, favorites and preview before applying",
    ],
    featured: false,
    status: "published",
  },
];

/** All apps that should appear in listings, sitemap and structured data. */
export const publishedApps = apps.filter((app) => app.status !== "coming-soon");

/** The single featured app (falls back to the first app if none is flagged). */
export const featuredApp = apps.find((app) => app.featured) ?? apps[0];

/** Look up an app by its slug. */
export function getAppBySlug(slug: string): PlayStoreApp | undefined {
  return apps.find((app) => app.id === slug);
}
