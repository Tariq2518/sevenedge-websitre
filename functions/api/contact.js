/**
 * Cloudflare Pages Function — handles POST /api/contact for the static site.
 *
 * Deployed automatically by Cloudflare Pages from the /functions directory.
 * Sends the contact message via Resend when configured; otherwise returns 503
 * so the front-end falls back to the "Send an Email" (mailto) button.
 *
 * Configure these in the Cloudflare Pages dashboard → Settings → Environment
 * variables (Production & Preview):
 *   RESEND_API_KEY      (secret)
 *   CONTACT_FROM_EMAIL  e.g. hello@your-verified-domain.com
 *   CONTACT_TO_EMAIL    7edgetechnologies@gmail.com
 */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SITE_NAME = "7edge Apps";
const DEFAULT_TO = "7edgetechnologies@gmail.com";

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function onRequestPost({ request, env }) {
  let data;
  try {
    data = await request.json();
  } catch {
    return json({ ok: false, message: "Invalid request." }, 400);
  }

  // Honeypot — accept silently without sending.
  if (data.company && String(data.company).trim() !== "") {
    return json({ ok: true });
  }

  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();
  const service = String(data.service ?? "Not specified").trim();

  const errors = {};
  if (name.length < 2) errors.name = "Name is required.";
  if (!EMAIL_RE.test(email)) errors.email = "A valid email is required.";
  if (message.length < 10) errors.message = "Message is too short.";
  if (Object.keys(errors).length > 0) return json({ ok: false, errors }, 422);

  const apiKey = env.RESEND_API_KEY;
  const fromEmail = env.CONTACT_FROM_EMAIL;
  const toEmail = env.CONTACT_TO_EMAIL || DEFAULT_TO;

  // Not configured → tell the client to use the mailto fallback.
  if (!apiKey || !fromEmail) {
    return json({ ok: false, reason: "not_configured" }, 503);
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${SITE_NAME} <${fromEmail}>`,
        to: [toEmail],
        reply_to: email,
        subject: `New project inquiry — ${service}`,
        text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`,
      }),
    });

    if (!res.ok) {
      return json({ ok: false, message: "Email service error." }, 502);
    }
    return json({ ok: true });
  } catch {
    return json({ ok: false, message: "Unexpected error sending message." }, 500);
  }
}
