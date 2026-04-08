"use client";

import { motion, Variants } from "framer-motion";
import { MessageSquare, PenTool, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description:
      "We start with a free 30-minute call to understand your business, goals, and what's missing from your current online presence.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design & Build",
    description:
      "We design and develop your custom website — built for speed, SEO, and conversions. You'll see progress every step of the way.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Grow",
    description:
      "We launch your site, submit it to Google, and hand you everything you need. Ongoing support available if you want to keep growing.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const stepVariant = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" },
  },
};

const lineVariant: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.3 },
  },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden"
      aria-labelledby="hiw-heading"
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-[#3b82f6]/[0.05] blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#93c5fd] text-xs font-medium tracking-wide uppercase mb-5">
            The Process
          </span>
          <h2
            id="hiw-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
          >
            From idea to live site
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #ffffff 0%, #93c5fd 40%, #3b82f6 100%)",
              }}
            >
              in as little as 2 weeks.
            </span>
          </h2>
          <p className="max-w-lg mx-auto text-white/50 text-lg leading-relaxed">
            A streamlined process built for busy business owners — no jargon,
            no delays.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div
            className="hidden md:block absolute top-[2.6rem] left-0 right-0 px-[calc(16.66%+1.5rem)] pointer-events-none"
            aria-hidden="true"
          >
            <motion.div
              variants={lineVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="h-px bg-gradient-to-r from-[#3b82f6]/40 via-[#3b82f6]/20 to-[#3b82f6]/40 origin-left"
            />
          </div>

          <motion.ol
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.number}
                  variants={stepVariant}
                  className="relative flex flex-col items-center md:items-start text-center md:text-left gap-5"
                >
                  {/* Number + icon stack */}
                  <div className="relative shrink-0">
                    {/* Outer ring */}
                    <div className="w-[4.5rem] h-[4.5rem] rounded-2xl border border-[#3b82f6]/25 bg-[#3b82f6]/[0.07] backdrop-blur-sm flex items-center justify-center relative">
                      {/* Glow dot */}
                      <div
                        className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#3b82f6] border-2 border-[#0a0a0a]"
                        aria-hidden="true"
                      />
                      <Icon
                        className="w-6 h-6 text-[#3b82f6]"
                        aria-hidden="true"
                      />
                    </div>

                    {/* Step number — positioned bottom-left */}
                    <span
                      className="absolute -bottom-2.5 -left-2.5 text-[0.65rem] font-bold text-[#3b82f6]/60 tracking-widest tabular-nums"
                      aria-hidden="true"
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2.5">
                    <h3 className="text-lg font-semibold text-white leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/45 leading-relaxed max-w-xs mx-auto md:mx-0">
                      {step.description}
                    </p>
                  </div>

                  {/* Mobile connector arrow (between steps, not after last) */}
                  {index < steps.length - 1 && (
                    <div
                      className="md:hidden flex justify-center w-full mt-2"
                      aria-hidden="true"
                    >
                      <div className="w-px h-8 bg-gradient-to-b from-[#3b82f6]/40 to-transparent" />
                    </div>
                  )}
                </motion.li>
              );
            })}
          </motion.ol>
        </div>

        {/* CTA nudge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#3b82f6] hover:bg-[#2563eb] active:bg-[#1d4ed8] text-white font-semibold rounded-xl text-base transition-all duration-200 shadow-[0_0_32px_rgba(59,130,246,0.3)] hover:shadow-[0_0_48px_rgba(59,130,246,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          >
            Book Your Free Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
