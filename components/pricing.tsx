"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Starter",
    price: "$1,500",
    billing: "one-time",
    tagline: "Perfect for small businesses ready to get online.",
    popular: false,
    cta: "Get Started",
    features: [
      "Up to 5 pages",
      "Mobile-responsive design",
      "On-page SEO setup",
      "Contact form",
      "Google Analytics integration",
      "2 rounds of revisions",
      "14-day delivery",
    ],
  },
  {
    name: "Growth",
    price: "$2,800",
    billing: "one-time",
    tagline: "For businesses serious about standing out and converting.",
    popular: true,
    cta: "Get Started",
    features: [
      "Up to 10 pages",
      "Premium custom design",
      "Full local SEO package",
      "Blog or portfolio section",
      "Speed & Core Web Vitals optimization",
      "Google Business Profile setup",
      "Unlimited revisions (30 days)",
      "30-day post-launch support",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.05 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden"
      aria-labelledby="pricing-heading"
    >
      {/* Ambient glow — centered blue */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full bg-[#3b82f6]/[0.06] blur-[130px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#93c5fd] text-xs font-medium tracking-wide uppercase mb-5">
            Pricing
          </span>
          <h2
            id="pricing-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
          >
            Transparent pricing,
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #ffffff 0%, #93c5fd 40%, #3b82f6 100%)",
              }}
            >
              no surprises.
            </span>
          </h2>
          <p className="max-w-lg mx-auto text-white/50 text-lg leading-relaxed">
            Flat-rate projects with everything included. No hourly billing, no
            scope creep.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={cardAnim}
              className={`relative flex flex-col rounded-2xl p-8 border transition-colors duration-300 ${
                plan.popular
                  ? "border-[#3b82f6]/50 bg-[#3b82f6]/[0.05]"
                  : "border-white/[0.07] bg-white/[0.025]"
              }`}
            >
              {/* Popular glow halo */}
              {plan.popular && (
                <>
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      boxShadow:
                        "0 0 60px rgba(59,130,246,0.18), inset 0 0 40px rgba(59,130,246,0.06)",
                    }}
                    aria-hidden="true"
                  />
                  {/* Top highlight line */}
                  <div
                    className="absolute top-0 inset-x-8 h-px rounded-full bg-gradient-to-r from-transparent via-[#3b82f6]/60 to-transparent pointer-events-none"
                    aria-hidden="true"
                  />
                </>
              )}

              {/* Plan header */}
              <div className="relative flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                {plan.popular && (
                  <Badge
                    variant="default"
                    className="bg-[#3b82f6] text-white border-0 text-[0.65rem] font-semibold tracking-wide uppercase px-2.5 py-0.5"
                  >
                    Most Popular
                  </Badge>
                )}
              </div>

              {/* Price */}
              <div className="relative mb-4">
                <div className="flex items-end gap-2 mb-1">
                  <span className="text-5xl font-bold text-white tabular-nums leading-none">
                    {plan.price}
                  </span>
                </div>
                <p className="text-sm text-white/35 capitalize">{plan.billing}</p>
              </div>

              {/* Tagline */}
              <p className="relative text-sm text-white/50 leading-relaxed mb-8 pb-8 border-b border-white/[0.07]">
                {plan.tagline}
              </p>

              {/* Feature list */}
              <ul
                className="relative flex flex-col gap-3 mb-10 flex-1"
                aria-label={`${plan.name} plan features`}
              >
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <CheckCircle2
                      className="w-4 h-4 text-[#3b82f6] shrink-0 mt-[1px]"
                      aria-hidden="true"
                    />
                    <span className="text-white/65">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`relative group inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a] ${
                  plan.popular
                    ? "bg-[#3b82f6] hover:bg-[#2563eb] active:bg-[#1d4ed8] text-white shadow-[0_0_32px_rgba(59,130,246,0.35)] hover:shadow-[0_0_48px_rgba(59,130,246,0.5)]"
                    : "border border-white/[0.12] hover:border-white/25 bg-white/[0.03] hover:bg-white/[0.06] text-white/80 hover:text-white"
                }`}
              >
                {plan.cta}
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-white/30 mt-8"
        >
          Need something custom?{" "}
          <a
            href="#contact"
            className="text-[#93c5fd] hover:text-[#3b82f6] underline underline-offset-2 transition-colors duration-150"
          >
            Let&apos;s talk.
          </a>
        </motion.p>
      </div>
    </section>
  );
}
