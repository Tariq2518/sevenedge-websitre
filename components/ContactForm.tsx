"use client";

import { useState, type FormEvent } from "react";
import { Loader2, CheckCircle2, AlertCircle, Mail } from "lucide-react";
import { services } from "@/data/services";
import { siteConfig, mailtoLink } from "@/lib/site-config";

type Status = "idle" | "submitting" | "success" | "error";

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverMessage, setServerMessage] = useState<string>("");

  function validate(data: {
    name: string;
    email: string;
    message: string;
  }): FieldErrors {
    const next: FieldErrors = {};
    if (data.name.trim().length < 2) next.name = "Please enter your name.";
    if (!EMAIL_RE.test(data.email)) next.email = "Please enter a valid email address.";
    if (data.message.trim().length < 10)
      next.message = "Please add a little more detail (at least 10 characters).";
    return next;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      // Honeypot — must stay empty.
      company: String(formData.get("company") ?? ""),
    };

    const fieldErrors = validate(payload);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    setStatus("submitting");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        reason?: string;
        message?: string;
      };

      if (res.ok && result.ok) {
        setStatus("success");
        form.reset();
        return;
      }

      // Email delivery not configured — guide the visitor to the mailto button.
      setStatus("error");
      setServerMessage(
        result.reason === "not_configured"
          ? "Online delivery isn't set up yet. Please use the “Send an Email” button below and your message will open in your email app."
          : result.message ||
              "Something went wrong sending your message. Please use the email button below.",
      );
    } catch {
      setStatus("error");
      setServerMessage(
        "We couldn't reach the server. Please use the “Send an Email” button below.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="card flex flex-col items-center gap-3 p-8 text-center"
      >
        <CheckCircle2 className="h-10 w-10 text-brand" aria-hidden="true" />
        <h3 className="text-lg font-semibold text-content-primary">Message sent</h3>
        <p className="max-w-sm text-sm text-content-secondary">
          Thanks for reaching out. Your message has been received and you&apos;ll get a
          reply at the email address you provided.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="btn-secondary mt-2"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card flex flex-col gap-5 p-6 sm:p-8">
      {/* Honeypot: hidden from users, catches bots. */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company">Company (leave this empty)</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          error={errors.name}
        />
        <Field
          label="Email"
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          error={errors.email}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="service" className="text-sm font-medium text-content-primary">
          Service
        </label>
        <select
          id="service"
          name="service"
          defaultValue={services[0].title}
          className="min-h-[44px] rounded-xl border border-line bg-surface px-3.5 text-sm text-content-primary focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
        >
          {services.map((service) => (
            <option key={service.id} value={service.title}>
              {service.title}
            </option>
          ))}
          <option value="Other">Something else</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-sm font-medium text-content-primary">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="rounded-xl border border-line bg-surface px-3.5 py-3 text-sm text-content-primary focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
          placeholder="A few sentences about what you'd like to build or improve."
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      {status === "error" && serverMessage && (
        <p
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 flex-none" aria-hidden="true" />
          <span>{serverMessage}</span>
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            "Send message"
          )}
        </button>
        <a href={mailtoLink} className="btn-secondary w-full sm:w-auto">
          <Mail className="h-4 w-4" aria-hidden="true" />
          Send an Email
        </a>
      </div>

      <p className="text-xs text-content-secondary">
        Prefer email? Write to{" "}
        <a href={mailtoLink} className="font-medium text-brand hover:underline">
          {siteConfig.email}
        </a>
        .
      </p>
    </form>
  );
}

interface FieldProps {
  label: string;
  id: string;
  name: string;
  type: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
}

function Field({ label, id, error, ...props }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-content-primary">
        {label}
      </label>
      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="min-h-[44px] rounded-xl border border-line bg-surface px-3.5 text-sm text-content-primary focus-visible:border-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/30"
        {...props}
      />
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
