/**
 * Helper for downloading approved Google Play assets into public/apps/<slug>/.
 *
 * Google Play markup changes often and automated scraping is unreliable, so app
 * metadata is maintained by hand in `data/apps.ts`. This script only fetches the
 * binary assets (icon + screenshots) for a single app you have already added to
 * the MANIFEST below, then you reference them from `data/apps.ts`.
 *
 * Usage:
 *   npx tsx scripts/update-play-store-apps.ts <slug>
 *   npx tsx scripts/update-play-store-apps.ts --all
 *
 * Fill in the icon URL and screenshot URLs from the listing (the
 * play-lh.googleusercontent.com links). Append "=s512" to icons and "=w720" to
 * screenshots to control resolution.
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

interface AssetManifest {
  slug: string;
  iconUrl: string;
  screenshotUrls: string[];
}

// Add an entry here when onboarding a new app, then run the script.
const MANIFEST: AssetManifest[] = [
  // {
  //   slug: "my-new-app",
  //   iconUrl: "https://play-lh.googleusercontent.com/XXXX=s512",
  //   screenshotUrls: [
  //     "https://play-lh.googleusercontent.com/AAAA=w720",
  //     "https://play-lh.googleusercontent.com/BBBB=w720",
  //   ],
  // },
];

async function download(url: string, dest: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${res.status} for ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  console.log(`  saved ${dest}`);
}

async function processApp(entry: AssetManifest) {
  const dir = path.join(process.cwd(), "public", "apps", entry.slug);
  await mkdir(dir, { recursive: true });
  console.log(`\n${entry.slug}`);
  await download(entry.iconUrl, path.join(dir, "icon.png"));
  for (let i = 0; i < entry.screenshotUrls.length; i++) {
    await download(entry.screenshotUrls[i], path.join(dir, `screenshot-${i + 1}.png`));
  }
}

async function main() {
  const arg = process.argv[2];
  if (!arg) {
    console.error("Provide a slug or --all. See file header for usage.");
    process.exit(1);
  }
  const targets =
    arg === "--all" ? MANIFEST : MANIFEST.filter((e) => e.slug === arg);
  if (targets.length === 0) {
    console.error(`No manifest entry for "${arg}". Add it to MANIFEST first.`);
    process.exit(1);
  }
  for (const entry of targets) await processApp(entry);
  console.log("\nDone. Remember to update data/apps.ts and ASSET_SOURCES.md.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
