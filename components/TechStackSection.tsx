"use client";

import { useState } from "react";
import Image from "next/image";
import { Server, Layout, Database, Wrench, ShieldCheck, Cpu, Sparkles, CheckCircle2 } from "lucide-react";

const floatingBadges = [
  { name: "PHP 8 & 7", color: "border-indigo-400/50 text-indigo-200 bg-gradient-to-r from-indigo-950/80 to-slate-900/80", pos: "top-8 left-6", anim: "animate-float-1" },
  { name: "Laravel", color: "border-red-500/50 text-red-300 bg-gradient-to-r from-red-950/80 to-slate-900/80", pos: "top-12 right-6", anim: "animate-float-2" },
  { name: "MySQL", color: "border-amber-400/50 text-amber-200 bg-gradient-to-r from-amber-950/80 to-slate-900/80", pos: "bottom-24 left-8", anim: "animate-float-3" },
  { name: "REST APIs", color: "border-emerald-400/50 text-emerald-200 bg-gradient-to-r from-emerald-950/80 to-slate-900/80", pos: "bottom-16 right-8", anim: "animate-float-1" },
  { name: "CodeIgniter", color: "border-orange-400/50 text-orange-200 bg-gradient-to-r from-orange-950/80 to-slate-900/80", pos: "top-1/2 left-2", anim: "animate-float-2" },
  { name: "React.js", color: "border-cyan-400/50 text-cyan-200 bg-gradient-to-r from-cyan-950/80 to-slate-900/80", pos: "top-1/2 right-2", anim: "animate-float-3" },
];

interface SkillItem {
  name: string;
  levelTag: "Production Core" | "Proficient" | "Working Knowledge";
  description: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: any;
  color: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
    skills: [
      {
        name: "PHP (7.x / 8.x)",
        levelTag: "Production Core",
        description: "Object-oriented PHP, modular MVC development, request handling, session management, and custom CMS logic."
      },
      {
        name: "Laravel",
        levelTag: "Production Core",
        description: "Eloquent ORM, routing, controllers, Blade templating, Artisan commands, and secure backend workflows."
      },
      {
        name: "CodeIgniter",
        levelTag: "Production Core",
        description: "Lightweight MVC architectures, controllers, database query building, and rapid dashboard modules."
      },
      {
        name: "REST API Development",
        levelTag: "Production Core",
        description: "Designing RESTful JSON endpoints with status codes, request validation, payload contracts, and error handling."
      }
    ]
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: Layout,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
    skills: [
      {
        name: "HTML5 & CSS3",
        levelTag: "Production Core",
        description: "Semantic page structure, responsive layouts, flexbox, CSS grid, and cross-browser consistency."
      },
      {
        name: "JavaScript (ES6+)",
        levelTag: "Production Core",
        description: "Modern JavaScript, async/await, fetch API, DOM manipulation, and dynamic client-side interactions."
      },
      {
        name: "Bootstrap & Responsive UI",
        levelTag: "Production Core",
        description: "Fast, mobile-friendly interface creation, admin dashboards, modal workflows, and utility styling."
      },
      {
        name: "jQuery & AJAX",
        levelTag: "Production Core",
        description: "Asynchronous backend communication, dynamic form submissions, live search filtering, and DOM updates."
      },
      {
        name: "React.js",
        levelTag: "Proficient",
        description: "Component-driven user interfaces, state hooks, props hierarchy, and dynamic frontend integrations."
      }
    ]
  },
  {
    id: "database",
    title: "Database Engineering",
    icon: Database,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
    skills: [
      {
        name: "MySQL",
        levelTag: "Production Core",
        description: "Relational database modeling, primary/foreign key constraints, and normalized table structures."
      },
      {
        name: "SQL Query Optimization",
        levelTag: "Production Core",
        description: "Writing complex queries, multi-table joins, indexing strategies to reduce latency, and data integrity."
      },
      {
        name: "Database Design & Migrations",
        levelTag: "Production Core",
        description: "Designing clean ER diagrams, handling schema updates, and managing database backup operations."
      }
    ]
  },
  {
    id: "tools",
    title: "Tools & Deployment",
    icon: Wrench,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
    skills: [
      {
        name: "Git & GitHub",
        levelTag: "Production Core",
        description: "Version control workflows, feature branching, merge conflict resolution, and repository collaboration."
      },
      {
        name: "Postman",
        levelTag: "Production Core",
        description: "API testing, header configuration, JSON payload verification, and authentication testing."
      },
      {
        name: "Deployment & Server Basics",
        levelTag: "Proficient",
        description: "Linux VPS deployment environments, web servers (Apache/Nginx configuration basics), and file permissions."
      }
    ]
  },
  {
    id: "integrations",
    title: "Integrations & Security",
    icon: ShieldCheck,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
    skills: [
      {
        name: "Razorpay Payment Gateway",
        levelTag: "Production Core",
        description: "Integrating order generation, checkout modal handling, and server-side webhook payment verification."
      },
      {
        name: "Authentication & Authorization",
        levelTag: "Production Core",
        description: "Role-Based Access Control (RBAC), password hashing, session tokens, and input sanitization."
      },
      {
        name: "Third-Party APIs & Messaging",
        levelTag: "Proficient",
        description: "SMS OTP authentication with Twilio and transactional notification alerts via Firebase FCM."
      }
    ]
  }
];

export default function TechStackSection() {
  const [selectedCategory, setSelectedCategory] = useState("backend");

  return (
    <section
      id="sec-skills"
      className="py-28 bg-gradient-to-b from-[#050916] via-[#091228] to-[#040814] text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-gradient-to-l from-indigo-600/15 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full linear-pill text-cyan-400 font-mono text-xs font-bold tracking-wider uppercase shadow-md">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>03 / TECHNICAL SKILLS & STACK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Practical Technical Stack &{" "}
            <span className="text-gradient-animated">
              Core Proficiencies.
            </span>
          </h2>
          <p className="text-slate-300 max-w-3xl text-base sm:text-lg leading-relaxed">
            Technologies and frameworks I use in production to build maintainable, dynamic, and database-driven web applications.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Visual Pod with Levitating Floating Badges */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative min-h-[460px] sm:min-h-[520px] h-full w-full rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-900/90 border-2 border-white/15 p-8 flex flex-col items-center justify-center overflow-hidden tech-grid-linear shadow-2xl">
              
              {/* Inner Holographic Glow Circles */}
              <div className="absolute w-80 h-80 rounded-full bg-blue-600/20 blur-[90px] pointer-events-none animate-pulse-slow" />
              <div className="absolute w-56 h-56 rounded-full bg-cyan-500/20 blur-[70px] pointer-events-none" />

              {/* Center Developer Workstation Illustration */}
              <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center">
                <Image
                  src="/images/tech-developer-illustration-transparent.png"
                  alt="Kongalla Srisailam - Technical Architecture Stack"
                  fill
                  className="object-contain filter drop-shadow-[0_15px_30px_rgba(0,85,255,0.45)]"
                  sizes="(max-width: 768px) 280px, 340px"
                />
              </div>

              {/* 6 Levitating Floating Tech Badges */}
              {floatingBadges.map((badge, idx) => (
                <div
                  key={idx}
                  className={`absolute ${badge.pos} ${badge.anim} z-20 px-4 py-2 rounded-full border backdrop-blur-xl shadow-xl font-mono text-xs font-bold tracking-wide select-none ${badge.color} hover:scale-105 transition-transform`}
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-current" />
                    {badge.name}
                  </span>
                </div>
              ))}

              {/* Bottom Holographic HUD Label */}
              <div className="absolute bottom-5 left-6 right-6 z-20 flex items-center justify-between font-mono text-xs text-slate-400 border-t border-white/10 pt-3">
                <span className="text-cyan-400 flex items-center gap-2 font-semibold">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  PHP & LARAVEL SPECIALIST
                </span>
                <span className="text-slate-300">INTERVIEW READY</span>
              </div>
            </div>
          </div>

          {/* Right Column: Categorized Technical Groups (No Arbitrary Percentages) */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            
            {/* Category Selector Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-2">
              {skillCategories.map((cat) => {
                const IconComponent = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`p-3 rounded-2xl border text-left transition-all duration-300 flex flex-col gap-2 ${
                      isSelected
                        ? "bg-gradient-to-r from-blue-600/30 to-cyan-500/20 border-cyan-400 shadow-lg ring-1 ring-cyan-400/40 text-white"
                        : "linear-card text-slate-400 hover:text-white hover:border-white/20"
                    }`}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${cat.color}`}>
                      <IconComponent className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-xs font-bold leading-tight">
                      {cat.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Active Category Skills List */}
            {skillCategories.map((cat) => {
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
                            Practical, Interview-Defensible Proficiencies
                          </span>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full linear-pill text-cyan-400 font-mono text-xs font-semibold">
                        {cat.skills.length} Skills
                      </span>
                    </div>

                    <div className="space-y-4">
                      {cat.skills.map((skill, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-cyan-400/50 hover:bg-white/[0.07] transition-all duration-200 space-y-1.5 group"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                              <span className="font-bold text-sm text-white font-mono">
                                {skill.name}
                              </span>
                            </div>
                            <span
                              className={`px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold uppercase tracking-wider ${
                                skill.levelTag === "Production Core"
                                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                                  : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                              }`}
                            >
                              {skill.levelTag}
                            </span>
                          </div>

                          <div className="text-xs text-slate-300 leading-relaxed pl-6">
                            {skill.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                      Grounded in 3+ Years of Professional Experience
                    </span>
                    <span className="text-cyan-400 font-semibold">Ready to Demonstrate in Technical Rounds</span>
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
