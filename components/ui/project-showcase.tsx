"use client";
import React from "react";
import { useShaderBackground } from "@/components/ui/animated-shader-hero";

const ProjectShowcase: React.FC = () => {
  const canvasRef = useShaderBackground();

  return (
    <div className="relative w-full h-full overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover touch-none"
        style={{ background: "black" }}
      />

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white">
        <div className="text-center space-y-4 max-w-5xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-tighter">
            <span className="block text-white">Experience Modern</span>
            <span className="block text-blue-600">Web Excellence</span>
          </h1>
          <p className="text-base md:text-lg text-cyan-400/80 font-light">
            Boutique digital solutions for Calgary&apos;s finest.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-sky-300 animate-pulse" />
          <span className="text-sky-300/60 text-xs tracking-widest uppercase font-medium">
            Crafted in Calgary
          </span>
          <div className="w-2 h-2 rounded-full bg-sky-300 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
