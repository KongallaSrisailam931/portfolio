"use client";

import Image from "next/image";
import {
  GraduationCap,
  Sparkles,
  Layers,
  Cpu,
  Database,
  ShieldCheck,
  TrendingUp,
  Code2,
  Server,
  FileCheck2,
} from "lucide-react";

const keyHighlights = [
  {
    title: "Maintainable MVC Code",
    desc: "Writing clean, modular, object-oriented PHP and Laravel code following solid architectural principles for maintainability.",
    icon: Layers,
    color: "from-blue-600/20 via-blue-500/10 to-transparent border-blue-500/30 text-blue-400",
  },
  {
    title: "Custom CMS & Admin Dashboards",
    desc: "Developing purpose-built content management platforms with dynamic CRUD, role permissions, and editorial workflows.",
    icon: Cpu,
    color: "from-indigo-600/20 via-indigo-500/10 to-transparent border-indigo-500/30 text-indigo-400",
  },
  {
    title: "Database Design & Optimization",
    desc: "Structuring normalized MySQL relational schemas, indexing key columns, and writing structured queries for reliable performance.",
    icon: Database,
    color: "from-amber-600/20 via-amber-500/10 to-transparent border-amber-500/30 text-amber-400",
  },
  {
    title: "REST APIs & Integrations",
    desc: "Building clean API endpoints with input validation, session/token security, and integrating payment gateways like Razorpay.",
    icon: ShieldCheck,
    color: "from-emerald-600/20 via-emerald-500/10 to-transparent border-emerald-500/30 text-emerald-400",
  },
];

export default function IdentitySection() {
  return (
    <section
      id="sec-about"
      className="py-28 bg-gradient-to-b from-[#060a17] via-[#0a1226] to-[#070c1a] border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Subtle Linear Grid */}
      <div className="absolute inset-0 tech-grid-linear opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[35rem] h-[35rem] bg-gradient-to-br from-blue-600/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[35rem] h-[35rem] bg-gradient-to-tr from-indigo-600/15 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full linear-pill text-cyan-400 font-mono text-xs font-bold tracking-wider uppercase shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>01 / ABOUT & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Practical Engineering for{" "}
            <span className="text-gradient-animated">
              Real Business Applications.
            </span>
          </h2>
          <p className="text-slate-300 max-w-3xl text-base sm:text-lg leading-relaxed">
            A solid background in developing backend business logic, responsive interfaces, custom content management platforms, and robust database architectures.
          </p>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Developer Portrait Card with aspect-[4/5] */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-2 border-white/15 bg-slate-950 group">
              <Image
                src="/images/srisailam-profile.jpg"
                alt="Kongalla Srisailam - Full Stack Developer"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/95 via-[#030712]/30 to-transparent" />
              
              {/* Bottom Card Details */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-3 z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono text-xs font-semibold backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Full Stack Developer
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Kongalla Srisailam
                  </h3>
                  <p className="text-sm text-cyan-400 font-medium">
                    Green Gold Animation Pvt Ltd • Hyderabad, India
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-200">
                  <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                    PHP & Laravel
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                    MySQL & SQL
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                    React.js & JS
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Credentials Card */}
            <div className="mt-6 p-6 rounded-3xl linear-card shadow-lg flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">
                  Education
                </div>
                <div className="font-bold text-white text-sm">
                  B.Tech in Electrical & Electronics Engineering
                </div>
                <div className="text-xs text-slate-400">
                  Malla Reddy Institute of Engineering and Technology (JNTUH) • 2019 – 2022
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Profile & Engineering Discipline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 rounded-3xl linear-card space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span className="text-gradient-animated">Professional Profile</span>
              </h3>
              <p className="text-slate-200 leading-relaxed font-normal">
                I am a Full Stack Developer with 3+ years of professional experience building and supporting database-driven web applications, custom CMS solutions, and API integrations.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                At <strong className="text-white font-semibold">Green Gold Animation Pvt Ltd</strong>, I led the frontend and custom CMS development for the <span className="text-cyan-400 font-semibold">official Chhota Bheem website</span> from scratch, implementing modules for media assets, movies, episodes, and promotional events. I also engineered an internal employee ticketing helpdesk system and a resume parsing workflow.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                Prior to Green Gold Animation, I built and maintained business-critical Laravel and CodeIgniter applications at <strong className="text-white font-semibold">Anicalls Pvt Ltd</strong>, implementing advanced parametric search engines, property listing modules, and secure administrative controls.
              </p>
            </div>

            {/* Practical Engineering Discipline Grid */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Core Development Competencies
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {keyHighlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl bg-gradient-to-br ${item.color} border backdrop-blur-md shadow-lg hover:border-cyan-400/60 hover:scale-[1.01] transition-all duration-300 space-y-2 group`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h5 className="font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </h5>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

        {/* Factual, Grounded Metrics Grid (Replaces unsupported or exaggerated counters) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-7 rounded-3xl linear-card hover:border-cyan-400/60 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono mb-2 text-gradient-animated">
              3+ Years
            </div>
            <div className="font-bold text-sm text-white mb-1">
              Professional SDLC
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Full lifecycle development from requirements to production deployment.
            </div>
          </div>

          <div className="p-7 rounded-3xl linear-card hover:border-cyan-400/60 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono mb-2 text-gradient-animated">
              PHP & Laravel
            </div>
            <div className="font-bold text-sm text-white mb-1">
              Core Technical Focus
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Modular MVC architecture, database modeling, and RESTful APIs.
            </div>
          </div>

          <div className="p-7 rounded-3xl linear-card hover:border-cyan-400/60 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono mb-2 text-gradient-animated">
              Custom CMS
            </div>
            <div className="font-bold text-sm text-white mb-1">
              Bespoke CMS Delivery
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Role-based editorial management and media workflow pipelines.
            </div>
          </div>

          <div className="p-7 rounded-3xl linear-card hover:border-cyan-400/60 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-orange-400 to-pink-500" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-mono mb-2 text-gradient-gold">
              REST & SQL
            </div>
            <div className="font-bold text-sm text-white mb-1">
              Backend Engineering
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Relational MySQL schemas, query optimization, and payment integration.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
