"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle, MapPin, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Status = "idle" | "submitting" | "success" | "error";

const FORMSPREE_ID = "xnjoleaz";

/* ── Field wrapper ───────────────────────────────────────────── */

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-white/70">
        {label}
        {required && (
          <span className="text-[#3b82f6] ml-0.5" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1.5 text-xs text-red-400" role="alert">
          <AlertCircle className="w-3 h-3 shrink-0" aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  );
}

/* ── Contact section ─────────────────────────────────────────── */

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) errs.name = "Your name is required.";
    if (!email) errs.email = "Your email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email address.";
    if (!message) errs.message = "A message is required.";
    else if (message.length < 10)
      errs.message = "Message must be at least 10 characters.";

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const errs = validate(data);
    if (Object.keys(errs).length) {
      setErrors(errs);
      // Focus first invalid field
      const firstKey = Object.keys(errs)[0];
      (form.elements.namedItem(firstKey) as HTMLElement | null)?.focus();
      return;
    }

    setErrors({});
    setStatus("submitting");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#3b82f6]/[0.06] blur-[130px]" />
      </div>

      {/* Top divider */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#93c5fd] text-xs font-medium tracking-wide uppercase mb-5">
            Get in Touch
          </span>
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
          >
            Ready for a website that
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #ffffff 0%, #93c5fd 40%, #3b82f6 100%)",
              }}
            >
              actually works for you?
            </span>
          </h2>
          <p className="max-w-lg mx-auto text-white/50 text-lg leading-relaxed">
            Tell us about your project and we&apos;ll get back to you within one
            business day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8"
        >
          {/* Left — contact info */}
          <div className="flex flex-col gap-6 lg:pt-1">
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#3b82f6]" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-white/80">Location</span>
                  <span className="text-sm text-white/40">Calgary, Alberta</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#3b82f6]/10 border border-[#3b82f6]/20 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#3b82f6]" aria-hidden="true" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-medium text-white/80">Email</span>
                  <a
                    href="mailto:hello@chinookwebco.com"
                    className="text-sm text-white/40 hover:text-[#93c5fd] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3b82f6] rounded"
                  >
                    hello@chinookwebco.com
                  </a>
                </div>
              </div>
            </div>

            <div className="hidden lg:block h-px bg-white/[0.06]" aria-hidden="true" />

            <p className="hidden lg:block text-xs text-white/25 leading-relaxed">
              We typically respond within a few hours during Calgary business
              hours (Mon–Fri, 9 am–5 pm MT).
            </p>
          </div>

          {/* Right — form */}
          <div className="relative rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-sm p-7 sm:p-8">
            {/* Top highlight */}
            <div
              className="absolute top-0 inset-x-8 h-px rounded-full bg-gradient-to-r from-transparent via-[#3b82f6]/30 to-transparent"
              aria-hidden="true"
            />

            {/* Success state */}
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                role="status"
                aria-live="polite"
              >
                <div className="w-14 h-14 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/30 flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7 text-[#3b82f6]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-white mb-1">
                    Message sent!
                  </p>
                  <p className="text-sm text-white/45">
                    We&apos;ll be in touch within one business day.
                  </p>
                </div>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 text-sm text-[#93c5fd] hover:text-[#3b82f6] underline underline-offset-2 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#3b82f6] rounded"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Contact form"
                className="flex flex-col gap-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Field label="Name" required error={errors.name}>
                    <Input
                      name="name"
                      type="text"
                      placeholder="Jane Smith"
                      autoComplete="name"
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      className="h-11 bg-white/[0.04] border-white/[0.09] text-white placeholder:text-white/25 focus-visible:border-[#3b82f6]/60 focus-visible:ring-[#3b82f6]/20"
                    />
                  </Field>

                  <Field label="Email" required error={errors.email}>
                    <Input
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      autoComplete="email"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      className="h-11 bg-white/[0.04] border-white/[0.09] text-white placeholder:text-white/25 focus-visible:border-[#3b82f6]/60 focus-visible:ring-[#3b82f6]/20"
                    />
                  </Field>
                </div>

                <Field label="Business / Website (optional)">
                  <Input
                    name="business"
                    type="text"
                    placeholder="My Business Ltd."
                    autoComplete="organization"
                    className="h-11 bg-white/[0.04] border-white/[0.09] text-white placeholder:text-white/25 focus-visible:border-[#3b82f6]/60 focus-visible:ring-[#3b82f6]/20"
                  />
                </Field>

                <Field label="Message" required error={errors.message}>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project — what you do, what you need, and any timeline or budget in mind."
                    rows={5}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    className="bg-white/[0.04] border-white/[0.09] text-white placeholder:text-white/25 focus-visible:border-[#3b82f6]/60 focus-visible:ring-[#3b82f6]/20 resize-none min-h-[120px]"
                  />
                </Field>

                {status === "error" && (
                  <p
                    className="flex items-center gap-2 text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-3"
                    role="alert"
                    aria-live="assertive"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" aria-hidden="true" />
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group inline-flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#3b82f6] hover:bg-[#2563eb] active:bg-[#1d4ed8] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold rounded-xl text-sm transition-all duration-200 shadow-[0_0_28px_rgba(59,130,246,0.3)] hover:shadow-[0_0_40px_rgba(59,130,246,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                >
                  {status === "submitting" ? (
                    <>
                      <svg
                        className="w-4 h-4 animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="3"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-white/25">
                  We&apos;ll never share your information with anyone.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
