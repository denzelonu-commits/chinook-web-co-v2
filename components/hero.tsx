"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GradientBackground } from "@/components/ui/paper-design-shader-background";
import SaaSTemplate from "@/components/ui/saa-s-template";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      {/* GradientBackground */}
      <GradientBackground />
      <div className="absolute inset-0 z-10 bg-black/40 pointer-events-none" />

      <div className="relative z-20">
        <ContainerScroll
          titleComponent={
            <div
              className="flex flex-col items-center text-center"
              style={{ fontFamily: "var(--font-geist-sans), sans-serif" }}
            >
              <p className="text-4xl font-semibold text-white opacity-90 mb-4">
                Experience the power of
              </p>
              <span className="text-9xl font-extrabold tracking-tighter leading-[0.9] text-[#3b82f6]">
                Modern Design
              </span>
            </div>
          }
        >
          <SaaSTemplate />
        </ContainerScroll>
      </div>
    </div>
  );
}
