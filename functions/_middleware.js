/**
 * Canonical-host middleware (Cloudflare Pages Function).
 *
 * - www.sevenedge.app and sevenedge.pages.dev 301-redirect to https://sevenedge.app,
 *   so search engines only ever index one copy of the site.
 * - Preview/branch deploys (*.sevenedge.pages.dev) stay reachable but are marked
 *   noindex so they never compete with the real domain.
 */
const CANONICAL_HOST = "sevenedge.app";
const REDIRECT_HOSTS = new Set(["www.sevenedge.app", "sevenedge.pages.dev"]);

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    url.port = "";
    return Response.redirect(url.toString(), 301);
  }

  const response = await context.next();

  if (url.hostname.endsWith(".pages.dev")) {
    const res = new Response(response.body, response);
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }

  return response;
}
