"use client";

import { Mail, Phone, ArrowUpRight, Github, Linkedin, Terminal, Sparkles, MapPin } from "lucide-react";

export default function CinematicFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="sec-cta-footer" className="bg-gradient-to-b from-[#030610] via-[#020308] to-[#000000] text-white pt-28 pb-12 relative overflow-hidden border-t border-white/10">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[45rem] h-[22rem] bg-gradient-to-r from-blue-600/20 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[35rem] h-[18rem] bg-gradient-to-l from-indigo-600/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Massive Call To Action Banner */}
        <div className="p-10 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-black/95 border-2 border-white/15 backdrop-blur-2xl mb-24 shadow-[0_20px_70px_rgba(0,0,0,0.9)] relative overflow-hidden group">
          
          {/* Subtle grid in banner */}
          <div className="absolute inset-0 tech-grid-linear opacity-40 pointer-events-none" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full linear-pill text-cyan-400 font-mono text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START A DIRECT COLLABORATION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Ready to engineer your next{" "}
              <span className="text-gradient-animated">
                high-scale platform?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Whether you need to architect a custom enterprise CMS, optimize high-volume database queries, or build full-stack web applications from the ground up, let’s build together.
            </p>

            {/* Direct Contact Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="mailto:kongallasrisailam931@gmail.com"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:shadow-[0_0_30px_rgba(0,140,255,0.6)] hover:scale-105 text-white font-bold text-sm tracking-wide transition-all duration-300 shadow-xl shadow-blue-600/30 flex items-center gap-2.5 group/btn"
              >
                <Mail className="w-4 h-4" />
                <span>kongallasrisailam931@gmail.com</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>

              <a
                href="tel:+919381695637"
                className="px-7 py-4 rounded-full linear-card hover:bg-white/10 text-slate-200 border border-white/20 font-mono text-xs font-bold transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+91 9381695637</span>
              </a>
            </div>

            {/* Official Brand SVG Pills */}
            <div className="pt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/in/srisailam-kongalla-0b0938394/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full linear-card hover:border-cyan-400 text-slate-300 hover:text-white font-mono text-xs transition-colors shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <a
                href="https://github.com/kongallasrisailam"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full linear-card hover:border-white/40 text-slate-300 hover:text-white font-mono text-xs transition-colors shadow-sm"
              >
                <Github className="w-4 h-4 text-slate-200" />
                <span>GitHub Repositories</span>
                <ArrowUpRight className="w-3 h-3 text-slate-500" />
              </a>

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full linear-card text-slate-400 font-mono text-xs">
                <MapPin className="w-3.5 h-3.5 text-red-400" />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

          </div>
        </div>

        {/* 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10 text-sm">
          
          {/* Column 1: Bio & Status */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 font-bold tracking-tight text-white">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-mono text-xs font-bold shadow-md shadow-blue-500/30">
                SK
              </div>
              <span className="font-bold text-base">Kongalla Srisailam</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Results-driven Full Stack Developer with 3+ years experience delivering enterprise web applications, custom CMS platforms, and high-traffic production websites.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Full-Time & Contract Ready</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
              Navigation Index
            </h4>
            <ul className="space-y-2 font-mono text-xs text-slate-400">
              <li>
                <a href="#sec-hero" className="hover:text-cyan-400 transition-colors">
                  00 // Hero & Liquid Reveal
                </a>
              </li>
              <li>
                <a href="#sec-identity" className="hover:text-cyan-400 transition-colors">
                  01 // Identity & Philosophy
                </a>
              </li>
              <li>
                <a href="#sec-showcase" className="hover:text-cyan-400 transition-colors">
                  02 // Selected Work Showcase
                </a>
              </li>
              <li>
                <a href="#sec-skills" className="hover:text-cyan-400 transition-colors">
                  03 // Tech Stack & Ecosystem
                </a>
              </li>
              <li>
                <a href="#sec-services" className="hover:text-cyan-400 transition-colors">
                  04 // Services Offered
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Systems */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
              Flagship Deliverables
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="hover:text-slate-200 transition-colors">
                • Official Chhota Bheem Website & Custom CMS
              </li>
              <li className="hover:text-slate-200 transition-colors">
                • Green Gold Corporate Studio Infrastructure
              </li>
              <li className="hover:text-slate-200 transition-colors">
                • Enterprise Helpdesk & Workflow Engine
              </li>
              <li className="hover:text-slate-200 transition-colors">
                • AI-Powered Resume Parsing Engine
              </li>
              <li className="hover:text-slate-200 transition-colors">
                • Real Estate Property Listing Platform
              </li>
            </ul>
          </div>

          {/* Column 4: System Architecture & Stack */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
              Engineering Specs
            </h4>
            <div className="p-4 rounded-2xl linear-card text-xs font-mono text-slate-400 space-y-1.5">
              <div className="flex justify-between">
                <span>Framework:</span>
                <span className="text-white">Next.js 14 App Router</span>
              </div>
              <div className="flex justify-between">
                <span>Styling:</span>
                <span className="text-white">Tailwind CSS Linear</span>
              </div>
              <div className="flex justify-between">
                <span>Motion:</span>
                <span className="text-white">GSAP + Lenis + ScrollTrigger</span>
              </div>
              <div className="flex justify-between">
                <span>Type Safety:</span>
                <span className="text-white">TypeScript Strict</span>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright and Bottom Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © {currentYear} Kongalla Srisailam. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Designed & Engineered with Next.js 14 + GSAP + Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
