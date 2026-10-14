"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Server, Layout, Database, Network, Sparkles, Cpu } from "lucide-react";

const floatingBadges = [
  { name: "Laravel", color: "border-red-500/50 text-red-300 bg-gradient-to-r from-red-950/80 to-slate-900/80", pos: "top-8 left-6", anim: "animate-float-1" },
  { name: "React.js", color: "border-cyan-400/50 text-cyan-200 bg-gradient-to-r from-cyan-950/80 to-slate-900/80", pos: "top-12 right-6", anim: "animate-float-2" },
  { name: "PHP 8+", color: "border-indigo-400/50 text-indigo-200 bg-gradient-to-r from-indigo-950/80 to-slate-900/80", pos: "bottom-24 left-8", anim: "animate-float-3" },
  { name: "MySQL", color: "border-amber-400/50 text-amber-200 bg-gradient-to-r from-amber-950/80 to-slate-900/80", pos: "bottom-16 right-8", anim: "animate-float-1" },
  { name: "TypeScript", color: "border-blue-400/50 text-blue-200 bg-gradient-to-r from-blue-950/80 to-slate-900/80", pos: "top-1/2 left-2", anim: "animate-float-2" },
  { name: "REST APIs", color: "border-emerald-400/50 text-emerald-200 bg-gradient-to-r from-emerald-950/80 to-slate-900/80", pos: "top-1/2 right-2", anim: "animate-float-3" },
];

const categories = [
  {
    id: "backend",
    title: "Backend & Systems",
    icon: Server,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    skills: [
      { name: "PHP (8.x / 7.x)", level: 95, desc: "Object-oriented programming, modern PSR standards, performance tuning" },
      { name: "Laravel", level: 92, desc: "Eloquent ORM, Artisan, Blade, Queue workers, API routing & Sanctum" },
      { name: "CodeIgniter", level: 90, desc: "Lightweight MVC architecture, high-efficiency data modeling" },
      { name: "Yii2", level: 85, desc: "Enterprise component-driven backend applications and services" },
      { name: "RESTful APIs", level: 95, desc: "Strict JSON payload contracts, rate-limiting, and OAuth/JWT tokens" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Layout,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
    skills: [
      { name: "React.js & Next.js", level: 88, desc: "Component composition, state management, SSR, dynamic hydration" },
      { name: "JavaScript & TypeScript", level: 90, desc: "ES6+, async/await concurrency, DOM manipulation, static typing" },
      { name: "Tailwind CSS & Bootstrap", level: 96, desc: "Pixel-accurate responsive layouts, utility design systems" },
      { name: "AJAX & jQuery", level: 92, desc: "Asynchronous data polling, client-side caching, dynamic DOM updates" },
      { name: "HTML5 & Modern CSS3", level: 95, desc: "Semantic markup, CSS Grid/Flexbox, smooth keyframe transitions" },
    ],
  },
  {
    id: "database",
    title: "Database & Optimization",
    icon: Database,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    skills: [
      { name: "MySQL Architecture", level: 94, desc: "Relational schema design, normalization, multi-table joins" },
      { name: "PostgreSQL", level: 86, desc: "ACID transactions, JSONB querying, indexing for high concurrency" },
      { name: "SQL Query Tuning", level: 92, desc: "EXPLAIN execution plan analysis, slow-query elimination, indexing" },
      { name: "Database Migrations", level: 90, desc: "Zero-downtime schema migrations and automated seeder scripts" },
    ],
  },
  {
    id: "integrations",
    title: "Integrations & Automation",
    icon: Network,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    skills: [
      { name: "Twilio OTP Verification", level: 92, desc: "Automated SMS 2FA authentication and transactional messaging" },
      { name: "Firebase Cloud Messaging", level: 90, desc: "Real-time push notifications, pub/sub updates, cloud data sync" },
      { name: "Razorpay Gateway", level: 92, desc: "Encrypted payment order pipelines, webhook verification, reconciliation" },
      { name: "Custom CMS Engines", level: 95, desc: "Enterprise content modeling, media libraries, RBAC permission roles" },
      { name: "E-Commerce Platforms", level: 85, desc: "Odoo ERP modules, OpenCart, Shopify customization" },
    ],
  },
];

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState("backend");

  return (
    <section id="sec-skills" className="py-28 bg-gradient-to-b from-[#050916] via-[#091228] to-[#040814] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gradient-to-l from-indigo-600/15 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full linear-pill text-cyan-400 font-mono text-xs font-bold tracking-wider uppercase shadow-md">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>03 / TECH STACK & ECOSYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Battle-Tested Stack.{" "}
            <span className="text-gradient-animated">
              Enterprise Resilience.
            </span>
          </h2>
          <p className="text-slate-300 max-w-3xl text-base sm:text-lg">
            High-performance web frameworks, relational database engines, and third-party integration pipelines honed across 3+ years of live production engineering.
          </p>
        </div>

        {/* 2-Column Blueprint Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Illustration Box */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative min-h-[460px] sm:min-h-[540px] h-full w-full rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-900/90 border-2 border-white/15 p-8 flex flex-col items-center justify-center overflow-hidden tech-grid-linear shadow-2xl">
              
              {/* Inner Holographic Glow Circles */}
              <div className="absolute w-80 h-80 rounded-full bg-blue-600/20 blur-[90px] pointer-events-none animate-pulse-slow" />
              <div className="absolute w-56 h-56 rounded-full bg-cyan-500/20 blur-[70px] pointer-events-none" />

              {/* Center Developer Character Illustration */}
              <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                <Image
                  src="/images/tech-developer-illustration-transparent.png"
                  alt="Kongalla Srisailam Full-Stack Developer Architecture Pod"
                  fill
                  className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,85,255,0.45)] hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 280px, 340px"
                />
              </div>

              {/* 6 Levitating Floating Tech Badges with infinite CSS float keyframe loops */}
              {floatingBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className={`absolute ${badge.pos} ${badge.anim} z-20 px-4 py-2 rounded-full border backdrop-blur-xl shadow-xl font-mono text-xs font-bold tracking-wide select-none ${badge.color} hover:scale-110 transition-transform`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
                    {badge.name}
                  </span>
                </div>
              ))}

              {/* Bottom Holographic HUD Label */}
              <div className="absolute bottom-5 left-6 right-6 z-20 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-white/10 pt-3">
                <span className="text-cyan-400 flex items-center gap-2 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  SYSTEM ACTIVE
                </span>
                <span className="text-slate-300">ENTERPRISE FULL-STACK</span>
              </div>
            </div>
          </div>

          {/* Right Column: Categorized Technology Checklists & Animated Meters */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Category Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex flex-col gap-2.5 ${
                      isSelected
                        ? "bg-gradient-to-r from-blue-600/30 to-cyan-500/20 border-cyan-400 shadow-lg ring-1 ring-cyan-400/40 text-white scale-102"
                        : "linear-card text-slate-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${cat.color}`}>
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold leading-tight">
                      {cat.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Skills Checklist with Animated Meters */}
            {categories.map((cat) => {
              if (cat.id !== selectedCategory) return null;
              return (
                <div
                  key={cat.id}
                  className="linear-card rounded-3xl p-8 shadow-2xl flex-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl border ${cat.color}`}>
                          <cat.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">
                            {cat.title}
                          </h3>
                          <span className="text-xs font-mono text-slate-400">
                            Verified Production Capabilities
                          </span>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full linear-pill text-cyan-400 font-mono text-xs font-semibold">
                        {cat.skills.length} Core Modules
                      </span>
                    </div>

                    <div className="space-y-4">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.08] transition-all duration-200 space-y-2 group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                              <span className="font-bold text-sm text-white font-mono">
                                {skill.name}
                              </span>
                            </div>
                            <span className="font-mono text-xs text-cyan-400 font-bold">
                              {skill.level}%
                            </span>
                          </div>

                          {/* Animated Linear Proficiency Bar */}
                          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 rounded-full transition-all duration-700 ease-out shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>

                          <div className="text-xs text-slate-300 leading-relaxed pt-0.5">
                            {skill.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      Continuous Integration & Deployment
                    </span>
                    <span className="text-cyan-400 font-semibold">100% Production Tested</span>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
