"use client";

import {
  Code2,
  Database,
  Globe,
  Layers,
  Server,
  Zap,
  Cpu,
  ShieldCheck,
  Smartphone,
  CreditCard,
  Cloud,
  FileCode,
  Sparkles,
} from "lucide-react";

const row1 = [
  { name: "Laravel 11 / 10", icon: Server, color: "text-red-400 border-red-500/30 bg-gradient-to-r from-red-950/40 to-slate-900/60" },
  { name: "React.js & Next.js 14", icon: Globe, color: "text-cyan-400 border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 to-slate-900/60" },
  { name: "PHP 8.3 OOP & MVC", icon: Code2, color: "text-indigo-400 border-indigo-500/30 bg-gradient-to-r from-indigo-950/40 to-slate-900/60" },
  { name: "MySQL & PostgreSQL", icon: Database, color: "text-amber-400 border-amber-500/30 bg-gradient-to-r from-amber-950/40 to-slate-900/60" },
  { name: "TypeScript & JavaScript", icon: FileCode, color: "text-blue-400 border-blue-500/30 bg-gradient-to-r from-blue-950/40 to-slate-900/60" },
  { name: "Tailwind CSS & GSAP", icon: Layers, color: "text-emerald-400 border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 to-slate-900/60" },
  { name: "CodeIgniter & Yii2", icon: Cpu, color: "text-orange-400 border-orange-500/30 bg-gradient-to-r from-orange-950/40 to-slate-900/60" },
  { name: "RESTful JSON APIs", icon: Zap, color: "text-pink-400 border-pink-500/30 bg-gradient-to-r from-pink-950/40 to-slate-900/60" },
];

const row2 = [
  { name: "Official Chhota Bheem Platform", icon: Globe, color: "text-amber-400 border-amber-500/30 bg-gradient-to-r from-amber-950/40 to-slate-900/60" },
  { name: "Green Gold Corporate Studio", icon: Layers, color: "text-blue-400 border-blue-500/30 bg-gradient-to-r from-blue-950/40 to-slate-900/60" },
  { name: "Custom Enterprise CMS Architecture", icon: Server, color: "text-cyan-400 border-cyan-500/30 bg-gradient-to-r from-cyan-950/40 to-slate-900/60" },
  { name: "Twilio 2FA OTP Verification", icon: Smartphone, color: "text-red-400 border-red-500/30 bg-gradient-to-r from-red-950/40 to-slate-900/60" },
  { name: "Firebase Realtime Push & FCM", icon: Cloud, color: "text-amber-300 border-amber-500/30 bg-gradient-to-r from-amber-950/40 to-slate-900/60" },
  { name: "Razorpay Gateway Integration", icon: CreditCard, color: "text-emerald-400 border-emerald-500/30 bg-gradient-to-r from-emerald-950/40 to-slate-900/60" },
  { name: "SQL Query Tuning & Indexing", icon: Database, color: "text-purple-400 border-purple-500/30 bg-gradient-to-r from-purple-950/40 to-slate-900/60" },
  { name: "Odoo ERP & E-Commerce", icon: ShieldCheck, color: "text-teal-400 border-teal-500/30 bg-gradient-to-r from-teal-950/40 to-slate-900/60" },
];

export default function InfiniteMarquee() {
  return (
    <section className="py-14 bg-gradient-to-r from-[#030712] via-[#091128] to-[#030712] border-y border-white/10 relative overflow-hidden select-none">
      
      {/* Background glowing linear accents */}
      <div className="absolute top-0 left-1/4 w-96 h-24 bg-gradient-to-r from-blue-600/20 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-24 bg-gradient-to-l from-indigo-600/20 to-transparent blur-3xl pointer-events-none" />

      {/* Edge Linear Gradient Fades */}
      <div className="absolute top-0 left-0 bottom-0 w-28 sm:w-48 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 bottom-0 w-28 sm:w-48 bg-gradient-to-l from-[#030712] via-[#030712]/90 to-transparent z-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-7 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
          <span className="font-mono text-xs uppercase tracking-widest text-slate-300 font-bold flex items-center gap-2">
            <span>Enterprise Ecosystem</span>
            <span className="text-slate-500">•</span>
            <span className="text-gradient-animated">Continuous Live Marquee</span>
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-slate-400">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>[ Auto-Scroll Active • Hover to Pause ]</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Row 1: Scrolling Left */}
        <div className="marquee-container flex overflow-hidden w-full">
          <div className="marquee-content flex gap-4 shrink-0 animate-marquee-left">
            {[...row1, ...row1, ...row1].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full border backdrop-blur-xl font-mono text-xs font-bold whitespace-nowrap shadow-lg hover:scale-105 hover:border-cyan-400/60 transition-all cursor-default ${item.color}`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="marquee-container flex overflow-hidden w-full">
          <div className="marquee-content flex gap-4 shrink-0 animate-marquee-right">
            {[...row2, ...row2, ...row2].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-2.5 px-6 py-3 rounded-full border backdrop-blur-xl font-mono text-xs font-bold whitespace-nowrap shadow-lg hover:scale-105 hover:border-cyan-400/60 transition-all cursor-default ${item.color}`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}
