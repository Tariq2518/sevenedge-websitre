import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export → deploys to Cloudflare Pages (sevenedge.pages.dev) as plain
  // static files. The contact form is handled by a Cloudflare Pages Function at
  // functions/api/contact.js. To run full SSR on Vercel instead, remove this
  // `output` line and restore an app/api/contact route.
  output: "export",
  // Pin the tracing root to this project (a stray lockfile exists in $HOME).
  outputFileTracingRoot: __dirname,
  images: {
    // No image-optimization server in a static export — serve images as-is.
    unoptimized: true,
  },
};

export default nextConfig;
