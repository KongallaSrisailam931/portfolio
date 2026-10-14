"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight, Terminal, Sparkles } from "lucide-react";

const navLinks = [
  { name: "01 / Identity", href: "#sec-identity" },
  { name: "02 / Work", href: "#sec-showcase" },
  { name: "03 / Tech Stack", href: "#sec-skills" },
  { name: "04 / Services", href: "#sec-services" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Glass Linear Pill Header (Desktop) */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto flex items-center justify-between gap-6 px-6 py-3 rounded-full bg-gradient-to-r from-slate-950/85 via-slate-900/90 to-slate-950/85 border border-white/15 backdrop-blur-2xl max-w-5xl w-full shadow-2xl shadow-black/50">
          
          {/* Logo / Monogram */}
          <a
            href="#sec-hero"
            className="flex items-center gap-2.5 tracking-tight group"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-mono text-xs font-bold transition-transform group-hover:scale-105 shadow-md shadow-blue-500/30">
              SK
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-bold tracking-tight leading-none text-white group-hover:text-cyan-400 transition-colors">
                Srisailam Kongalla
              </span>
              <span className="text-[10px] font-mono text-cyan-400 font-semibold tracking-wider uppercase leading-none mt-1">
                Full-Stack Lead
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with animated hover */}
          <nav className="hidden md:flex items-center gap-1 font-mono text-xs font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-all duration-200 relative group"
              >
                <span>{link.name}</span>
                <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </nav>

          {/* Right Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href="#sec-cta-footer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white text-xs font-bold hover:shadow-[0_0_20px_rgba(0,140,255,0.6)] hover:scale-105 transition-all duration-300 group"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full text-slate-300 hover:bg-white/10 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Hydration-Safe Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-gradient-to-b from-black/95 via-slate-950/95 to-black/95 backdrop-blur-2xl md:hidden transition-all duration-300 flex flex-col justify-between p-8 pt-28 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider mb-2">
            <Terminal className="w-4 h-4" />
            <span>Navigation Index</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="font-mono text-xl font-bold text-white hover:text-cyan-400 transition-colors py-2 border-b border-slate-800 flex items-center justify-between"
            >
              <span>{link.name}</span>
              <ArrowUpRight className="w-4 h-4 text-slate-500" />
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <a
            href="mailto:kongallasrisailam931@gmail.com"
            onClick={() => setIsOpen(false)}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold text-center text-sm tracking-wide transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
          >
            <span>kongallasrisailam931@gmail.com</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <p className="text-center text-xs text-slate-400 font-mono">
            +91 9381695637 • Hyderabad, India
          </p>
        </div>
      </div>
    </>
  );
}
