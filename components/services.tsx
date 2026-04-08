"use client";

import { motion } from "framer-motion";
import { Globe, TrendingUp, LifeBuoy, ArrowUpRight } from "lucide-react";

/* ── Data ──────────────────────────────────────────────────────────── */

const services = [
  {
    icon: Globe,
    label: "01",
    title: "Web Design & Development",
    description:
      "Custom-built websites engineered to reflect your brand and turn visitors into paying clients. Fast, responsive, built to impress.",
    features: [
      "Mobile-first responsive design",
      "Lightning-fast load times",
      "Modern, premium aesthetics",
    ],
  },
  {
    icon: TrendingUp,
    label: "02",
    title: "SEO & Google Rankings",
    description:
      "Every site ships with Google in mind. Technical SEO, local Calgary keyword strategy, and on-page optimisation from day one.",
    features: [
      "Calgary local SEO",
      "Technical on-page optimisation",
      "Google Business integration",
    ],
  },
  {
    icon: LifeBuoy,
    label: "03",
    title: "Ongoing Support & Growth",
    description:
      "Your website is a living asset. Maintenance, content updates, and performance monitoring so it keeps growing with your business.",
    features: [
      "Monthly maintenance plans",
      "Performance monitoring",
      "Content & feature updates",
    ],
  },
];

/* ── Animation ─────────────────────────────────────────────────────── */

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};

const card = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

/* ── Component ─────────────────────────────────────────────────────── */

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 bg-black overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Ambient glow — very subtle */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(59,130,246,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">

        {/* ── Section header ─────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-20"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40 text-[0.68rem] tracking-[0.22em] uppercase font-medium mb-6">
            <span className="w-1 h-1 rounded-full bg-[#3b82f6]" aria-hidden="true" />
            What We Do
          </span>

          <div className="flex flex-col lg:flex-row lg:items-end gap-6 lg:gap-20">
            <h2
              id="services-heading"
              className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-[-0.03em] text-white max-w-xl"
            >
              Everything you need to{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #93c5fd 0%, #3b82f6 55%, #1d4ed8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                dominate online.
              </span>
            </h2>

            <p className="max-w-xs text-white/35 text-sm leading-relaxed lg:mb-1 font-light">
              We don&apos;t just build pretty websites — we build growth engines
              for Calgary businesses.
            </p>
          </div>
        </motion.div>

        {/* ── Cards ─────────────────────────────────────────────── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                variants={card}
                whileHover="hover"
                className="group relative flex flex-col gap-8 p-7 rounded-2xl bg-white/[0.025] border border-white/[0.07] overflow-hidden cursor-default transition-colors duration-300 hover:bg-white/[0.04]"
                style={{ willChange: "transform" }}
              >
                {/* 1-px electric-blue border glow on hover */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    boxShadow:
                      "inset 0 0 0 1px rgba(59,130,246,0.55), 0 0 32px rgba(59,130,246,0.06)",
                  }}
                />

                {/* Top row: number + icon */}
                <div className="flex items-start justify-between">
                  <span className="text-[0.65rem] text-white/20 tracking-[0.2em] font-medium">
                    {service.label}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-[#3b82f6]/[0.08] border border-[#3b82f6]/[0.15] flex items-center justify-center group-hover:bg-[#3b82f6]/[0.14] group-hover:border-[#3b82f6]/[0.3] transition-colors duration-300">
                    <Icon className="w-4.5 h-4.5 text-[#3b82f6]" aria-hidden="true" />
                  </div>
                </div>

                {/* Title + description */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-display font-bold text-white text-lg leading-tight tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-[0.82rem] text-white/38 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Feature list */}
                <ul
                  className="mt-auto flex flex-col gap-2.5"
                  aria-label={`${service.title} features`}
                >
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2.5 text-[0.75rem] text-white/28 tracking-wide"
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-[#3b82f6]/60 shrink-0"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover arrow */}
                <ArrowUpRight
                  className="absolute bottom-6 right-6 w-4 h-4 text-[#3b82f6] opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
