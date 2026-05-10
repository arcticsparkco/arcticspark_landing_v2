"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, ChevronRight } from "lucide-react";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-arctic-bg" />

        {/* Radial orbs — cyan */}
        <div
          className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full opacity-20 animate-float-slow"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.6) 0%, rgba(0,212,255,0) 70%)",
          }}
        />
        {/* Radial orbs — gold spark */}
        <div
          className="absolute bottom-[-10%] right-[5%] w-[500px] h-[500px] rounded-full opacity-15 animate-float-slow"
          style={{
            animationDelay: "2s",
            background:
              "radial-gradient(circle, rgba(255,215,0,0.5) 0%, rgba(255,215,0,0) 70%)",
          }}
        />
        {/* Radial orbs — violet */}
        <div
          className="absolute top-[40%] right-[20%] w-[350px] h-[350px] rounded-full opacity-15 animate-float-slow"
          style={{
            animationDelay: "4s",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.5) 0%, rgba(139,92,246,0) 70%)",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-arctic-bg/40 via-transparent to-arctic-bg/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Eyebrow tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-arctic-cyan/30 bg-arctic-cyan/10 px-4 py-1.5 mb-8 text-xs font-semibold text-arctic-cyan tracking-widest uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-arctic-cyan animate-pulse" />
          Hong Kong · Software Studio
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-none mb-4">
          <span className="text-arctic-white">Arctic </span>
          <span
            className="bg-gradient-to-r from-arctic-cyan via-arctic-white to-arctic-gold bg-clip-text text-transparent"
            style={{ backgroundSize: "200% 200%", animation: "gradient-shift 6s ease infinite" }}
          >
            Spark
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl md:text-2xl text-arctic-muted font-light italic mb-6 tracking-wide">
          &ldquo;Endeavor into new territories.&rdquo;
        </p>

        {/* Body */}
        <p className="text-base sm:text-lg text-arctic-muted/90 max-w-2xl mx-auto mb-10 leading-relaxed">
          We are a team of engineers and designers who build thoughtful digital
          products — from community platforms to data-driven experiences.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={() => scrollTo("#projects")}
            className="w-full sm:w-auto group"
          >
            View Our Work
            <ChevronRight
              size={16}
              className="ml-1 group-hover:translate-x-0.5 transition-transform"
            />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto"
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("#projects")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-arctic-muted/60 hover:text-arctic-cyan transition-colors duration-200 group"
        aria-label="Scroll to projects"
      >
        <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
