"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { contact } from "@/content/site";
import { cn } from "@/lib/utils";

export const enquiries = [
  { value: "general", label: "General enquiry" },
  { value: "investor", label: "Investor relations" },
  { value: "partnership", label: "Partnership & supply" },
  { value: "minerals", label: "Mineral specification" },
  { value: "agriculture", label: "Agriculture" },
  { value: "demo", label: "Platform demo" },
  { value: "interest", label: "Register interest in a platform" },
  { value: "pilot", label: "GreenGrid pilot list" },
  { value: "media", label: "Media" },
  { value: "careers", label: "Careers" },
  { value: "artisan", label: "Artisans & cooperatives" },
] as const;

type Enquiry = (typeof enquiries)[number]["value"];
type FieldErrors = Partial<
  Record<"name" | "email" | "phone" | "enquiry" | "message" | "consent", string>
>;
type Status = "idle" | "sending" | "sent" | "error";

const isEnquiry = (v: string | null): v is Enquiry => enquiries.some((e) => e.value === v);

/**
 * Contact form. Pre-selects the enquiry type from `?enquiry=` (links on other pages
 * use it). The prerendered HTML shows the same form with "General enquiry".
 */
export function ContactFormSection() {
  return (
    <Suspense fallback={<ContactForm initialEnquiry="general" />}>
      <ContactFormFromQuery />
    </Suspense>
  );
}

function ContactFormFromQuery() {
  const q = useSearchParams().get("enquiry");
  return <ContactForm initialEnquiry={isEnquiry(q) ? q : "general"} />;
}

function validate(form: FormData): FieldErrors {
  const errors: FieldErrors = {};
  const get = (k: string) => String(form.get(k) ?? "").trim();
  if (get("name").length < 2) errors.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(get("email")))
    errors.email = "Please enter a valid email address.";
  if (get("phone") && !/^[0-9+()\-.\s]{6,40}$/.test(get("phone")))
    errors.phone = "Please enter a valid phone number.";
  if (get("message").length < 10)
    errors.message = "Please tell us a little more (at least 10 characters).";
  if (!form.get("consent")) errors.consent = "Please confirm we may use your details to reply.";
  return errors;
}

function ContactForm({ initialEnquiry }: { initialEnquiry: Enquiry }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState("");
  // Time since the form appeared; the server ignores submissions under 3 s (bots).
  // Timed from mount rather than first focus so autofill-and-submit still counts.
  const startedAt = useRef<number | null>(null);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length) {
      setStatus("idle");
      formRef.current?.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          organisation: form.get("organisation"),
          phone: form.get("phone"),
          enquiry: form.get("enquiry"),
          message: form.get("message"),
          consent: form.get("consent") === "on",
          website: form.get("website"),
          elapsed: startedAt.current ? Date.now() - startedAt.current : 0,
        }),
      });
      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        fields?: FieldErrors;
      } | null;
      if (res.ok && data?.ok) {
        setStatus("sent");
        formRef.current?.reset();
        return;
      }
      if (data?.fields) setErrors(data.fields);
      setMessage(data?.error ?? "We couldn't send your message right now.");
      setStatus("error");
    } catch {
      setMessage("We couldn't reach our server.");
      setStatus("error");
    }
  }

  const field =
    "mt-2 block w-full rounded-xl border-0 bg-stone-50 px-4 py-3 text-navy ring-1 ring-navy/10 transition placeholder:text-stone-500/70 focus:bg-white focus:ring-2 focus:ring-azure focus:outline-none";
  const errorRing = "ring-2 ring-red-600/70";
  const describedBy = (name: keyof FieldErrors) => (errors[name] ? `${name}-error` : undefined);
  const errorText = (name: keyof FieldErrors) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1.5 text-sm text-red-700">
        {errors[name]}
      </p>
    ) : null;

  return (
    <div className="relative">
      <AnimatePresence mode="wait" initial={false}>
        {status === "sent" ? (
          <motion.div
            key="sent"
            role="status"
            className="flex min-h-[32rem] flex-col items-start justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <span className="grid size-14 place-items-center rounded-full bg-emerald-50 text-emerald-700">
              <svg aria-hidden viewBox="0 0 12 12" className="size-6">
                <path d="M2.5 6.5 5 9l4.5-6" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
            <h3 className="font-display mt-6 text-3xl font-semibold tracking-tight">
              Thank you. Message received.
            </h3>
            <p className="mt-3 max-w-md leading-relaxed text-stone-500">
              Our team will get back to you shortly at the email address you provided.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-sm font-semibold text-azure-700 underline-offset-4 hover:underline"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            ref={formRef}
            noValidate
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-5 sm:grid-cols-2"
            aria-describedby={status === "error" ? "form-error" : undefined}
          >
            <label className="block text-sm font-semibold">
              Full name <span className="text-red-700">*</span>
              <input
                name="name"
                autoComplete="name"
                required
                aria-invalid={Boolean(errors.name)}
                aria-describedby={describedBy("name")}
                className={cn(field, errors.name && errorRing)}
              />
              {errorText("name")}
            </label>
            <label className="block text-sm font-semibold">
              Email <span className="text-red-700">*</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={Boolean(errors.email)}
                aria-describedby={describedBy("email")}
                className={cn(field, errors.email && errorRing)}
              />
              {errorText("email")}
            </label>
            <label className="block text-sm font-semibold">
              Organisation
              <input name="organisation" autoComplete="organization" className={field} />
            </label>
            <label className="block text-sm font-semibold">
              Phone
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={describedBy("phone")}
                className={cn(field, errors.phone && errorRing)}
              />
              {errorText("phone")}
            </label>
            <label className="block text-sm font-semibold sm:col-span-2">
              What is your enquiry about? <span className="text-red-700">*</span>
              <select
                name="enquiry"
                defaultValue={initialEnquiry}
                className={cn(
                  field,
                  "appearance-none bg-[length:12px] bg-[right_1rem_center] bg-no-repeat",
                )}
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12'%3E%3Cpath d='M2.5 4.5 6 8l3.5-3.5' fill='none' stroke='%231d2545' stroke-width='1.5'/%3E%3C/svg%3E\")",
                }}
              >
                {enquiries.map((e) => (
                  <option key={e.value} value={e.value}>
                    {e.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm font-semibold sm:col-span-2">
              Message <span className="text-red-700">*</span>
              <textarea
                name="message"
                rows={6}
                required
                aria-invalid={Boolean(errors.message)}
                aria-describedby={describedBy("message")}
                className={cn(field, "resize-y", errors.message && errorRing)}
              />
              {errorText("message")}
            </label>

            {/* Honeypot: hidden from people and assistive tech; bots tend to fill it. */}
            <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
              <label>
                Website
                <input name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 text-sm leading-relaxed text-stone-500">
                <input
                  name="consent"
                  type="checkbox"
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={describedBy("consent")}
                  className="mt-1 size-4 shrink-0 rounded accent-navy"
                />
                <span>
                  I agree that NordRock may use these details to respond to my enquiry, as described
                  in our{" "}
                  <Link
                    href="/privacy/"
                    className="font-semibold text-azure-700 underline-offset-4 hover:underline"
                  >
                    privacy policy
                  </Link>
                  .
                </span>
              </label>
              {errorText("consent")}
            </div>

            {status === "error" && (
              <p
                id="form-error"
                role="alert"
                className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-800 sm:col-span-2"
              >
                {message} You can also email us at{" "}
                <a href={`mailto:${contact.email}`} className="font-semibold underline">
                  {contact.email}
                </a>
                .
              </p>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-azure disabled:cursor-wait disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send message"}
                <svg
                  aria-hidden
                  viewBox="0 0 16 16"
                  className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path
                    d="M1 8h13M9 3l5 5-5 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
