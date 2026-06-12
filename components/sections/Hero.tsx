"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

function RightVisual() {
  return (
    <div className="absolute right-0 top-0 bottom-0 w-[60%] hidden lg:block">
      {/* Left-edge fade: blends the visual into the dark background */}
      <div className="absolute left-0 top-0 bottom-0 w-56 z-20 pointer-events-none"
        style={{ background: "linear-gradient(to right, #050810 0%, #050810 10%, transparent 100%)" }} />

      {/* Dark tech visual panel */}
      <div className="absolute inset-0 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #060c18 0%, #091525 50%, #040c1a 100%)" }}>

        {/* Background grid */}
        <div className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,212,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,212,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "55px 55px",
          }} />

        {/* Ambient glow orbs */}
        <div className="absolute top-[15%] left-[35%] w-[480px] h-[480px] rounded-full opacity-20 animate-float-slow"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.8) 0%, rgba(0,212,255,0) 65%)" }} />
        <div className="absolute bottom-[5%] right-[8%] w-[380px] h-[380px] rounded-full opacity-15 animate-float-slow"
          style={{ animationDelay: "3s", background: "radial-gradient(circle, rgba(255,215,0,0.7) 0%, rgba(255,215,0,0) 65%)" }} />
        <div className="absolute top-[55%] left-[15%] w-[260px] h-[260px] rounded-full opacity-12 animate-float-slow"
          style={{ animationDelay: "5s", background: "radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(139,92,246,0) 65%)" }} />

        {/* Floating card — AI accuracy */}
        <div
          className="absolute top-[18%] left-[18%] rounded-2xl p-5 w-56 animate-float-slow"
          style={{
            animationDelay: "1s",
            background: "rgba(5,8,16,0.75)",
            border: "1px solid rgba(0,212,255,0.18)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 0 30px rgba(0,212,255,0.08)",
          }}
        >
          <p className="text-xs text-arctic-cyan/60 uppercase tracking-widest mb-2">Model Accuracy</p>
          <p className="text-4xl font-black text-arctic-white">98.4%</p>
          <div className="mt-3 h-1 rounded-full bg-white/10">
            <div className="h-full rounded-full" style={{ width: "98%", background: "linear-gradient(90deg, #00D4FF, #00a3c4)" }} />
          </div>
        </div>

        {/* Floating card — active users */}
        <div
          className="absolute top-[42%] right-[12%] rounded-2xl p-5 w-52 animate-float-slow"
          style={{
            animationDelay: "2.5s",
            background: "rgba(5,8,16,0.75)",
            border: "1px solid rgba(255,215,0,0.18)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 0 30px rgba(255,215,0,0.07)",
          }}
        >
          <p className="text-xs text-arctic-gold/60 uppercase tracking-widest mb-2">Active Users</p>
          <p className="text-4xl font-black text-arctic-white">124k</p>
          <p className="text-xs text-arctic-muted mt-1.5">↑ 42% this month</p>
        </div>

        {/* Floating card — tech stack */}
        <div
          className="absolute bottom-[24%] left-[20%] rounded-2xl px-5 py-4 w-60 animate-float-slow"
          style={{
            animationDelay: "0.8s",
            background: "rgba(5,8,16,0.75)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px)",
          }}
        >
          <p className="text-xs text-arctic-muted/60 uppercase tracking-widest mb-3">Built with</p>
          <div className="flex flex-wrap gap-1.5">
            {["Next.js", "Python", "LLMs", "PostgreSQL", "React Native"].map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-0.5 rounded-full"
                style={{
                  color: "rgba(0,212,255,0.85)",
                  background: "rgba(0,212,255,0.08)",
                  border: "1px solid rgba(0,212,255,0.2)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Floating card — projects shipped */}
        <div
          className="absolute top-[68%] right-[28%] rounded-2xl p-4 w-44 animate-float-slow"
          style={{
            animationDelay: "4s",
            background: "rgba(5,8,16,0.75)",
            border: "1px solid rgba(139,92,246,0.18)",
            backdropFilter: "blur(16px)",
            boxShadow: "0 0 25px rgba(139,92,246,0.07)",
          }}
        >
          <p className="text-xs text-purple-400/60 uppercase tracking-widest mb-1">Products Shipped</p>
          <p className="text-3xl font-black text-arctic-white">5+</p>
        </div>

        {/* Central deep glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,1) 0%, transparent 70%)" }}
        />
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex overflow-hidden" style={{ background: "#050810" }}>

      {/* Right visual panel */}
      <RightVisual />

      {/* LEFT COLUMN — content */}
      <div className="relative z-10 flex flex-col justify-center w-full lg:w-[46%] px-8 sm:px-12 lg:px-16 xl:px-24 py-32 lg:py-0">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 rounded-full border border-arctic-cyan/30 bg-arctic-cyan/10 px-4 py-1.5 mb-8 text-xs font-semibold text-arctic-cyan tracking-widest uppercase w-fit">
          <span className="w-1.5 h-1.5 rounded-full bg-arctic-cyan animate-pulse" />
          AI-Native Product Studio
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl xl:text-[5.5rem] font-extrabold tracking-tight leading-[1.05] mb-6">
          <span className="text-arctic-white">We build</span>
          <br />
          <span className="text-arctic-white">what&apos;s </span>
          <span className="text-arctic-cyan">next.</span>
        </h1>

        {/* Body */}
        <p className="text-base sm:text-lg text-arctic-muted/90 max-w-md mb-10 leading-relaxed">
          Engineers and designers crafting AI-native digital products —
          fusing cutting-edge tech with thoughtful UX to create platforms
          people love.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button
            size="lg"
            onClick={() => scrollTo("#projects")}
            className="group"
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
          >
            Get in Touch
          </Button>
        </div>
      </div>

      {/* Mobile background glow (shown only on small screens where right panel is hidden) */}
      <div className="absolute inset-0 -z-10 lg:hidden">
        <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] rounded-full opacity-15 animate-float-slow"
          style={{ background: "radial-gradient(circle, rgba(0,212,255,0.6) 0%, rgba(0,212,255,0) 70%)" }} />
        <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] rounded-full opacity-10 animate-float-slow"
          style={{ animationDelay: "2s", background: "radial-gradient(circle, rgba(255,215,0,0.5) 0%, rgba(255,215,0,0) 70%)" }} />
      </div>

    </section>
  );
}
