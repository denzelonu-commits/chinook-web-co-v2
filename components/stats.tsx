"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ── Count-up hook ───────────────────────────────────────────── */

function useCountUp(target: number, duration = 1600, start = false) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let raf: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
      else setValue(target);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, start]);

  return value;
}

/* ── Stat items ──────────────────────────────────────────────── */

const stats = [
  {
    countTo: 81,
    suffix: "%",
    prefix: "",
    label: "of consumers research online before buying locally",
    source: "BrightLocal, 2024",
  },
  {
    countTo: 5,
    suffix: " weeks",
    prefix: "3–",
    label: "average time to a fully live, optimised website",
    source: "Chinook average project timeline",
    skipCount: true, // render as static "3–5 weeks"
  },
  {
    countTo: 18000,
    suffix: "+",
    prefix: "$",
    label: "average annual revenue lift from a high-converting site",
    source: "Clutch SMB Report, 2023",
  },
];

/* ── Single stat ─────────────────────────────────────────────── */

function StatItem({
  stat,
  index,
  trigger,
}: {
  stat: (typeof stats)[number];
  index: number;
  trigger: boolean;
}) {
  const count = useCountUp(stat.countTo, 1400 + index * 100, trigger);

  const display = stat.skipCount
    ? `3–5 weeks`
    : `${stat.prefix}${count.toLocaleString()}${stat.suffix}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.65,
        ease: "easeOut",
        delay: index * 0.12,
      }}
      className="relative flex flex-col items-center text-center gap-4 px-6 py-8 rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-sm"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 inset-x-8 h-px rounded-full bg-gradient-to-r from-transparent via-[#3b82f6]/40 to-transparent"
        aria-hidden="true"
      />

      {/* Number */}
      <span
        className="text-5xl sm:text-6xl font-bold tabular-nums bg-clip-text text-transparent leading-none"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #ffffff 0%, #93c5fd 50%, #3b82f6 100%)",
        }}
        aria-label={display}
      >
        {display}
      </span>

      {/* Label */}
      <p className="text-sm text-white/50 leading-relaxed max-w-[16rem]">
        {stat.label}
      </p>

      {/* Source */}
      <span className="text-[0.7rem] text-white/20 tracking-wide">
        {stat.source}
      </span>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────────── */

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stats"
      ref={ref}
      className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-[#3b82f6]/[0.05] blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#3b82f6]/30 bg-[#3b82f6]/10 text-[#93c5fd] text-xs font-medium tracking-wide uppercase mb-5">
            By the Numbers
          </span>
          <h2
            id="stats-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 leading-tight"
          >
            The numbers don&apos;t lie —
            <br />
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #ffffff 0%, #93c5fd 40%, #3b82f6 100%)",
              }}
            >
              your website matters.
            </span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} trigger={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
