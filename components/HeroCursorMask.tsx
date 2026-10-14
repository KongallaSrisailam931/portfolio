"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowDown, Sparkles, Code2, Layers, CheckCircle2, ArrowUpRight, Trophy, Zap, ShieldCheck } from "lucide-react";

export default function HeroCursorMask() {
  const containerRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [coords, setCoords] = useState({ x: 50, y: 45 });

  useEffect(() => {
    const portrait = portraitRef.current;
    if (!portrait) return;

    let rafId: number | null = null;
    let targetX = 50;
    let targetY = 45;
    let currentX = 50;
    let currentY = 45;

    const updateMaskPosition = () => {
      currentX += (targetX - currentX) * 0.14;
      currentY += (targetY - currentY) * 0.14;

      portrait.style.setProperty("--reveal-x", `${currentX}%`);
      portrait.style.setProperty("--reveal-y", `${currentY}%`);
      setCoords({ x: Math.round(currentX), y: Math.round(currentY) });

      rafId = requestAnimationFrame(updateMaskPosition);
    };

    rafId = requestAnimationFrame(updateMaskPosition);

    const handlePointerMove = (e: PointerEvent) => {
      setHasInteracted(true);
      const rect = portrait.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      targetX = Math.max(0, Math.min(100, x));
      targetY = Math.max(0, Math.min(100, y));
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        setHasInteracted(true);
        const touch = e.touches[0];
        const rect = portrait.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 100;
        const y = ((touch.clientY - rect.top) / rect.height) * 100;
        targetX = Math.max(0, Math.min(100, x));
        targetY = Math.max(0, Math.min(100, y));
      }
    };

    portrait.addEventListener("pointermove", handlePointerMove);
    portrait.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      portrait.removeEventListener("pointermove", handlePointerMove);
      portrait.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <section
      id="sec-hero"
      ref={containerRef}
      className="relative min-h-[96vh] w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#02040a] via-[#070e24] to-[#040816] text-white tech-grid-linear pt-36 pb-20 selection:bg-blue-600 selection:text-white"
    >
      {/* Background Glowing Ambient Light Blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[42rem] h-[42rem] bg-gradient-to-br from-blue-600/25 via-cyan-500/15 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-1/4 w-[40rem] h-[40rem] bg-gradient-to-tl from-indigo-600/20 via-purple-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-400/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl w-full mx-auto px-6 sm:px-8 lg:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Typography, Bio & CTA buttons */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-7 lg:pr-6 z-20">
          
          {/* Status Pill Badge with linear gradient */}
          <div className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-gradient-to-r from-blue-950/80 via-slate-900/90 to-blue-950/80 border border-cyan-500/30 text-white font-mono text-xs font-semibold tracking-wide shadow-lg shadow-cyan-950/40">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
            </span>
            <span className="text-white font-bold tracking-wider">00 / FULL STACK ARCHITECT</span>
            <span className="text-slate-500">•</span>
            <span className="text-cyan-400 font-bold">GREEN GOLD ANIMATION</span>
          </div>

          {/* Clamped Headline with Animated Linear Gradient */}
          <h1 className="text-[clamp(2.8rem,7vw,5.6rem)] font-extrabold tracking-tight leading-[1.04] text-white">
            <span className="block text-white font-black">Building Beyond</span>
            <span className="text-gradient-animated block font-black">
              Possible.
            </span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg text-slate-300 font-medium max-w-xl leading-relaxed">
            I engineer high-throughput web applications, custom enterprise CMS platforms, and scalable backend ecosystems. Built the official Chhota Bheem web presence and maintain 10+ live production platforms.
          </p>

          {/* Core Capabilities Pills */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-blue-500/30 text-blue-300 font-mono text-xs font-semibold shadow-sm">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
              <span>3+ Years Enterprise SDLC</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-slate-700 text-slate-200 font-mono text-xs font-semibold shadow-sm">
              <Layers className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>10+ Production Sites</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 border border-emerald-500/30 text-emerald-300 font-mono text-xs font-semibold shadow-sm">
              <Code2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>PHP • Laravel • React • MySQL</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-3">
            <a
              href="#sec-showcase"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-bold text-sm hover:shadow-[0_0_35px_rgba(0,140,255,0.7)] hover:scale-105 transition-all duration-300 flex items-center gap-2.5 group shadow-xl shadow-blue-600/30"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>

            <a
              href="#sec-cta-footer"
              className="px-8 py-4 rounded-full bg-slate-900/90 border border-white/20 text-white font-bold text-sm hover:border-cyan-400/80 hover:shadow-[0_0_20px_rgba(56,189,248,0.25)] hover:scale-105 transition-all duration-300 flex items-center gap-2 group backdrop-blur-md"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Interactive Helper Indicator */}
          <div className="pt-2 flex items-center gap-2.5 text-xs text-slate-400 font-mono">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span className="text-slate-300">
              {hasInteracted
                ? `Liquid Reveal Stream: [X: ${coords.x}%, Y: ${coords.y}%]`
                : "Hover cursor or drag touch over portrait to trigger liquid color reveal"}
            </span>
          </div>
        </div>

        {/* Right Column: Luxury Holographic Bezel & Dual-Layer Portrait */}
        <div className="lg:col-span-5 flex justify-center relative">
          
          {/* Levitating Floating Badge 1 (Top Left) */}
          <div className="hidden sm:flex absolute -top-4 -left-6 z-30 px-4 py-2 rounded-2xl bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-slate-950/95 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold shadow-2xl backdrop-blur-xl animate-float-1 items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-cyan-400 fill-cyan-400/30" />
            <span>Green Gold Animation</span>
          </div>

          {/* Levitating Floating Badge 2 (Bottom Right) */}
          <div className="hidden sm:flex absolute -bottom-5 -right-6 z-30 px-4 py-2 rounded-2xl bg-gradient-to-r from-slate-950/95 via-slate-900/95 to-slate-950/95 border border-amber-500/40 text-amber-300 text-xs font-mono font-bold shadow-2xl backdrop-blur-xl animate-float-2 items-center gap-2">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Chhota Bheem CMS Lead</span>
          </div>

          {/* Main Portrait Card with Seamless Studio Dark Vignette */}
          <div
            ref={portraitRef}
            className="relative aspect-[4/5] w-full max-w-[440px] rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.9)] border-2 border-white/20 bg-[#050814] select-none group cursor-crosshair ring-1 ring-cyan-500/20"
            style={{
              ["--reveal-radius" as string]: "240px",
              ["--reveal-x" as string]: "50%",
              ["--reveal-y" as string]: "45%",
            }}
          >
            {/* Layer 1 (Underneath): Dark Sleek Monochrome Developer Portrait */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/images/Base_image_desktop.png"
                alt="Kongalla Srisailam - Base Monochrome Developer Portrait"
                fill
                priority
                className="object-cover object-center filter brightness-95 contrast-110"
                sizes="(max-width: 768px) 100vw, 440px"
              />
              {/* Subtle blue depth grading */}
              <div className="absolute inset-0 bg-blue-950/30 mix-blend-overlay pointer-events-none" />
            </div>

            {/* Layer 2 (Top): Vibrant Color Portrait revealed by CSS radial-gradient mask */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-200 mask-radial"
              style={{
                WebkitMaskImage:
                  "radial-gradient(circle var(--reveal-radius) at var(--reveal-x) var(--reveal-y), black 100%, transparent 100%)",
                maskImage:
                  "radial-gradient(circle var(--reveal-radius) at var(--reveal-x) var(--reveal-y), black 100%, transparent 100%)",
              }}
            >
              <Image
                src="/images/Reveal_image_desktop.png"
                alt="Kongalla Srisailam - Vibrant Color Reveal Portrait"
                fill
                priority
                className="object-cover object-center filter saturate-115 brightness-105"
                sizes="(max-width: 768px) 100vw, 440px"
              />
            </div>

            {/* Glowing Caustic Ring Tracker at Cursor Position */}
            <div
              className="absolute w-44 h-44 rounded-full border-2 border-cyan-400 pointer-events-none -translate-x-1/2 -translate-y-1/2 shadow-[0_0_40px_rgba(0,240,255,0.8)] mix-blend-screen transition-opacity duration-300"
              style={{
                left: `${coords.x}%`,
                top: `${coords.y}%`,
                opacity: hasInteracted ? 0.95 : 0.5,
              }}
            />

            {/* Floating Live Badge Overlay on Portrait */}
            <div className="absolute bottom-5 left-5 right-5 z-20 pointer-events-none">
              <div className="px-5 py-3.5 rounded-2xl bg-gradient-to-r from-black/90 via-slate-950/90 to-black/90 backdrop-blur-2xl border border-white/20 text-white flex items-center justify-between shadow-2xl">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    Full Stack Lead
                  </span>
                  <span className="text-sm font-bold text-white tracking-tight">
                    Kongalla Srisailam
                  </span>
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[11px] font-semibold border border-emerald-500/40 flex items-center gap-1.5 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Production
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* Bottom Linear Section Divider Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
}
