/**
 * Single source of truth for the 7edge Apps portfolio.
 *
 * To add a new app:
 *   1. Add an object to the `apps` array below.
 *   2. Drop its icon at  public/apps/<slug>/icon.png  (512x512 recommended).
 *   3. (Optional) Add screenshots at public/apps/<slug>/screenshot-1.png … and
 *      list them in `screenshots`.
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

export const apps: PlayStoreApp[] = [
  {
    id: "deleted-photo-video-recovery",
    name: "Deleted Photo Video Recovery",
    packageId: "edgerecoveryapp.recoverdata.datarecoveryapp",
    category: "Tools",
    shortDescription:
      "Scan supported device storage to find and restore photos and videos that were removed.",
    longDescription:
      "Deleted Photo Video Recovery helps you look through supported storage locations on your device for image and video files that are no longer visible in your gallery. It presents recoverable items in a simple list so you can preview and restore the files you still need.",
    icon: "/apps/deleted-photo-video-recovery/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=edgerecoveryapp.recoverdata.datarecoveryapp",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2023/08/data-recovery-privacy-policy.html",
    screenshots: [
      "/apps/deleted-photo-video-recovery/screenshot-1.png",
      "/apps/deleted-photo-video-recovery/screenshot-2.png",
      "/apps/deleted-photo-video-recovery/screenshot-3.png",
      "/apps/deleted-photo-video-recovery/screenshot-4.png",
      "/apps/deleted-photo-video-recovery/screenshot-5.png",
      "/apps/deleted-photo-video-recovery/screenshot-6.png",
      "/apps/deleted-photo-video-recovery/screenshot-7.png",
    ],
    features: [
      "Scan supported storage for removed photos and videos",
      "Preview recoverable items before restoring",
      "Restore selected files to your device",
      "Clear, uncluttered interface",
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
      "View, save and re-share supported photo and video statuses from your device.",
    longDescription:
      "Status Saver WA helps you view supported photo and video statuses and keep a copy of the ones you like. Saved items are organised so you can revisit, re-share, or remove them whenever you want, all from a straightforward interface.",
    icon: "/apps/status-saver-wa/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=sevenedge.edgestatussaver.whatsappstatussaver",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2022/09/status-saver-privacy-policy.html",
    screenshots: [
      "/apps/status-saver-wa/screenshot-1.png",
      "/apps/status-saver-wa/screenshot-2.png",
      "/apps/status-saver-wa/screenshot-3.png",
      "/apps/status-saver-wa/screenshot-4.png",
      "/apps/status-saver-wa/screenshot-5.png",
      "/apps/status-saver-wa/screenshot-6.png",
      "/apps/status-saver-wa/screenshot-7.png",
      "/apps/status-saver-wa/screenshot-8.png",
    ],
    features: [
      "Preview supported photo and video statuses",
      "Save items to your device with one tap",
      "Re-share saved statuses",
      "Simple gallery for saved media",
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
      "Manage and play downloadable videos from supported sources in one place.",
    longDescription:
      "Video Downloader and Player helps you organise downloadable videos from supported sources and play them back with a built-in player. Files are kept together in a tidy library so they are easy to find and watch offline.",
    icon: "/apps/video-downloader-player/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=sevenedge.videosaver.videodownloaderapp",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2022/08/edge-video-downloader-privacy-policy.html",
    screenshots: [
      "/apps/video-downloader-player/screenshot-1.png",
      "/apps/video-downloader-player/screenshot-2.png",
      "/apps/video-downloader-player/screenshot-3.png",
      "/apps/video-downloader-player/screenshot-4.png",
    ],
    features: [
      "Manage downloadable videos from supported sources",
      "Built-in video player",
      "Organised local library",
      "Offline playback of saved files",
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
      "Mirror or cast a compatible phone to a TV on the same network.",
    longDescription:
      "Screen Mirroring & Cast to TV helps you connect a compatible mobile device to a television over the same network so you can show photos, videos and other on-screen content on a larger display. Setup is guided and kept as simple as possible.",
    icon: "/apps/screen-mirroring-cast-to-tv/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=miracast.screenmirroring.screencasting",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2022/02/privacy-policy-7edgetechnologies-built.html",
    screenshots: [
      "/apps/screen-mirroring-cast-to-tv/screenshot-1.png",
      "/apps/screen-mirroring-cast-to-tv/screenshot-2.png",
      "/apps/screen-mirroring-cast-to-tv/screenshot-3.png",
      "/apps/screen-mirroring-cast-to-tv/screenshot-4.png",
      "/apps/screen-mirroring-cast-to-tv/screenshot-5.png",
      "/apps/screen-mirroring-cast-to-tv/screenshot-6.png",
      "/apps/screen-mirroring-cast-to-tv/screenshot-7.png",
      "/apps/screen-mirroring-cast-to-tv/screenshot-8.png",
    ],
    features: [
      "Mirror a compatible device to a TV",
      "Cast photos and videos to a larger screen",
      "Works over the same local network",
      "Guided connection steps",
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
      "Open, read and organise PDF files, with document scanning tools.",
    longDescription:
      "PDF Reader: Editor & Scanner lets you open and read PDF documents and keep them organised on your device. It includes document-scanning tools so you can capture pages and work with them alongside your existing files.",
    icon: "/apps/pdf-reader-editor-scanner/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.sevenedge.pdfreader.docscanner.fileconverter",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2026/06/pdf-reader-editor-scanner-app.html",
    screenshots: [
      "/apps/pdf-reader-editor-scanner/screenshot-1.png",
      "/apps/pdf-reader-editor-scanner/screenshot-2.png",
      "/apps/pdf-reader-editor-scanner/screenshot-3.png",
      "/apps/pdf-reader-editor-scanner/screenshot-4.png",
      "/apps/pdf-reader-editor-scanner/screenshot-5.png",
      "/apps/pdf-reader-editor-scanner/screenshot-6.png",
      "/apps/pdf-reader-editor-scanner/screenshot-7.png",
      "/apps/pdf-reader-editor-scanner/screenshot-8.png",
      "/apps/pdf-reader-editor-scanner/screenshot-9.png",
    ],
    features: [
      "Open and read PDF documents",
      "Scan pages into documents",
      "Organise files on your device",
      "Clean, readable layout",
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
      "Open, read and manage PDF and other supported document formats.",
    longDescription:
      "PDF Reader: Document Viewer is a lightweight reader for opening PDF and other supported document formats. It focuses on comfortable reading and easy file management without unnecessary extras.",
    icon: "/apps/pdf-reader-document-viewer/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.sevenedge.all.documentreader.and.pdfviewer.documents.app.filereader",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2024/06/all-document-reader-privacy-policy.html",
    screenshots: [
      "/apps/pdf-reader-document-viewer/screenshot-1.png",
      "/apps/pdf-reader-document-viewer/screenshot-2.png",
      "/apps/pdf-reader-document-viewer/screenshot-3.png",
      "/apps/pdf-reader-document-viewer/screenshot-4.png",
      "/apps/pdf-reader-document-viewer/screenshot-5.png",
      "/apps/pdf-reader-document-viewer/screenshot-6.png",
      "/apps/pdf-reader-document-viewer/screenshot-7.png",
    ],
    features: [
      "Open PDF and other supported documents",
      "Comfortable reading view",
      "Manage documents on your device",
      "Lightweight and focused",
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
      "Scan for deleted photos, videos and files, then keep sensitive items in a locked private vault.",
    longDescription:
      "File Recovery: Data Restore scans supported device storage for deleted photos, videos, audio and documents so you can preview and restore what you still need. It also includes an encrypted vault for hiding sensitive files and an app lock for protecting other apps on your device.",
    icon: "/apps/file-recovery-data-restore/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.sevenedge.easyrecovery.datarecovery.recoverfiles",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2026/06/easy-recovery-recover-files.html",
    screenshots: [
      "/apps/file-recovery-data-restore/screenshot-1.png",
      "/apps/file-recovery-data-restore/screenshot-2.png",
      "/apps/file-recovery-data-restore/screenshot-3.png",
      "/apps/file-recovery-data-restore/screenshot-4.png",
      "/apps/file-recovery-data-restore/screenshot-5.png",
      "/apps/file-recovery-data-restore/screenshot-6.png",
    ],
    features: [
      "Scan device storage for deleted photos, videos, audio and documents",
      "Preview recoverable files before restoring",
      "Encrypted private vault for sensitive photos and videos",
      "App lock to protect chosen apps with a PIN or pattern",
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
      "Real animal sounds for ringtones and alarms, plus HD animal wallpapers for your phone.",
    longDescription:
      "Animal Ringtones & Wallpapers offers a library of real animal sounds you can set as a ringtone, notification tone or alarm, alongside HD wallpapers organised by category for your home and lock screen.",
    icon: "/apps/animal-ringtones-wallpapers/icon.png",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.sevenedge.animalringtone.wallpaper.animalsounds",
    privacyPolicyUrl:
      "https://7edgetechnologies.blogspot.com/2026/06/animal-ringtone-wallpaper-app.html",
    screenshots: [
      "/apps/animal-ringtones-wallpapers/screenshot-1.png",
      "/apps/animal-ringtones-wallpapers/screenshot-2.png",
      "/apps/animal-ringtones-wallpapers/screenshot-3.png",
      "/apps/animal-ringtones-wallpapers/screenshot-4.png",
      "/apps/animal-ringtones-wallpapers/screenshot-5.png",
      "/apps/animal-ringtones-wallpapers/screenshot-6.png",
      "/apps/animal-ringtones-wallpapers/screenshot-7.png",
    ],
    features: [
      "Real animal sounds for ringtones, notifications and alarms",
      "HD wallpapers organised into animal categories",
      "Preview sounds and wallpapers before applying",
      "Favorites and search for quick access",
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
