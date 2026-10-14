"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  GraduationCap,
  Sparkles,
  Layers,
  Cpu,
  Database,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const philosophyPoints = [
  {
    title: "Scalable MVC Architecture First",
    desc: "Writing modular, object-oriented, reusable code in Laravel, CodeIgniter, and PHP that gracefully evolves as product complexity expands.",
    icon: Layers,
    color: "from-blue-600/20 via-blue-500/10 to-transparent border-blue-500/30 text-blue-400",
  },
  {
    title: "Enterprise Custom CMS Engineering",
    desc: "Rejecting generic bloat in favor of tailored content workflows, role-based access permissions, and automated business operations.",
    icon: Cpu,
    color: "from-indigo-600/20 via-indigo-500/10 to-transparent border-indigo-500/30 text-indigo-400",
  },
  {
    title: "Database Performance & Query Optimization",
    desc: "Designing normalized MySQL and PostgreSQL schemas with fine-tuned indexing, execution plan analysis, and zero-latency retrieval.",
    icon: Database,
    color: "from-amber-600/20 via-amber-500/10 to-transparent border-amber-500/30 text-amber-400",
  },
  {
    title: "Seamless API & Third-Party Ecosystems",
    desc: "Integrating secure payment gateways (Razorpay), real-time messaging (Firebase), and automated authentication (Twilio OTP).",
    icon: ShieldCheck,
    color: "from-emerald-600/20 via-emerald-500/10 to-transparent border-emerald-500/30 text-emerald-400",
  },
];

export default function IdentitySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [countYears, setCountYears] = useState(0);
  const [countSites, setCountSites] = useState(0);
  const [countOwnership, setCountOwnership] = useState(0);
  const [countUptime, setCountUptime] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          const duration = 1600;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);

            setCountYears(Math.floor(ease * 3));
            setCountSites(Math.floor(ease * 10));
            setCountOwnership(Math.floor(ease * 100));
            setCountUptime(parseFloat((ease * 99.9).toFixed(1)));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCountYears(3);
              setCountSites(10);
              setCountOwnership(100);
              setCountUptime(99.9);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      id="sec-identity"
      ref={sectionRef}
      className="py-28 bg-gradient-to-b from-[#060a17] via-[#0a1226] to-[#070c1a] border-t border-white/10 relative overflow-hidden"
    >
      {/* Background Subtle Linear Grid */}
      <div className="absolute inset-0 tech-grid-linear opacity-50 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[35rem] h-[35rem] bg-gradient-to-br from-blue-600/15 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[35rem] h-[35rem] bg-gradient-to-tr from-indigo-600/15 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header Monospace Badge */}
        <div className="flex flex-col items-start space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full linear-pill text-cyan-400 font-mono text-xs font-bold tracking-wider uppercase shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>01 / IDENTITY & PHILOSOPHY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Engineering High-Traffic Digital Infrastructure with{" "}
            <span className="text-gradient-animated">
              Architectural Rigor.
            </span>
          </h2>
          <p className="text-slate-300 max-w-3xl text-base sm:text-lg leading-relaxed">
            A comprehensive look into my technical foundation, engineering discipline, and production leadership across media, real estate, and enterprise software.
          </p>
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Developer Portrait Card with aspect-[4/5] */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border-2 border-white/15 bg-slate-950 group">
              <Image
                src="/images/srisailam-profile.jpg"
                alt="Kongalla Srisailam - Lead Full Stack Developer"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/95 via-[#030712]/30 to-transparent" />
              
              {/* Bottom Card Details */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-3 z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-mono text-xs font-semibold backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Lead Full Stack Developer
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
                    PHP / Laravel
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                    React.js / Next.js
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20">
                    MySQL / PostgreSQL
                  </span>
                </div>
              </div>
            </div>

            {/* Academic Credentials Card with Linear Glass */}
            <div className="mt-6 p-6 rounded-3xl linear-card shadow-lg flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-xs font-mono text-slate-400 font-bold uppercase tracking-wider">
                  Academic Degree
                </div>
                <div className="font-bold text-white text-sm">
                  B.Tech in Electrical & Electronics Engineering
                </div>
                <div className="text-xs text-slate-400">
                  Malla Reddy Institute of Engineering & Technology (JNTUH) • 2019 – 2022
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Biography & Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="p-8 rounded-3xl linear-card space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span className="text-gradient-animated">Executive Profile & Background</span>
              </h3>
              <p className="text-slate-200 leading-relaxed font-medium">
                Results-driven Full Stack Developer with 3+ years of experience delivering enterprise-grade web applications, custom CMS platforms, and high-traffic production websites.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                At <strong className="text-white">Green Gold Animation Pvt Ltd</strong>, I led the architecture and end-to-end development of the <span className="text-cyan-400 font-semibold">official Chhota Bheem website</span> and a custom enterprise CMS built from scratch, managing massive digital asset pipelines and high-volume fan traffic across global regions.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm">
                My background covers the complete Software Development Life Cycle (SDLC) including system modeling, MVC architecture, optimized database design, API integration, and continuous deployment.
              </p>
            </div>

            {/* Philosophy Grid with Linear Gradient Fills */}
            <div className="space-y-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Core Architectural Principles
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {philosophyPoints.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className={`p-5 rounded-2xl bg-gradient-to-br ${item.color} border backdrop-blur-md shadow-lg hover:border-cyan-400/60 hover:scale-[1.02] transition-all duration-300 space-y-2 group`}
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

            {/* Career Timeline Summary with Linear Gradient */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/95 text-white space-y-4 shadow-xl border border-white/15">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-cyan-400 uppercase font-semibold">
                  Career Trajectory
                </span>
                <span className="font-mono text-xs text-slate-400">
                  2022 – Present
                </span>
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between items-center py-1">
                  <div>
                    <span className="font-bold text-white">Full Stack Developer</span>
                    <span className="text-slate-400"> • Green Gold Animation Pvt Ltd</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30">
                    Jul 2025 – Present
                  </span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <div>
                    <span className="font-bold text-white">Full Stack Developer</span>
                    <span className="text-slate-400"> • Anicalls Pvt Ltd</span>
                  </div>
                  <span className="text-slate-400">Jul 2023 – Jul 2025</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <div>
                    <span className="font-bold text-white">PHP Backend Developer</span>
                    <span className="text-slate-400"> • Innoitlabs</span>
                  </div>
                  <span className="text-slate-400">Mar 2023 – Jul 2023</span>
                </div>
                <div className="flex justify-between items-center py-1">
                  <div>
                    <span className="font-bold text-white">PHP Backend Developer Intern</span>
                    <span className="text-slate-400"> • Rubia Services</span>
                  </div>
                  <span className="text-slate-400">Sep 2022 – Feb 2023</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4-Column Key Metrics Grid with Live Animated Counters & Linear Borders */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          <div className="p-8 rounded-3xl linear-card hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,140,255,0.25)] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500" />
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono mb-2 text-gradient-animated">
              0{countYears}+
            </div>
            <div className="font-bold text-sm text-white mb-1">
              Years Enterprise SDLC
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Full lifecycle engineering from system design to high-throughput deployment.
            </div>
          </div>

          <div className="p-8 rounded-3xl linear-card hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,140,255,0.25)] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-blue-500 to-cyan-400" />
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono mb-2 text-gradient-animated">
              {countSites}+
            </div>
            <div className="font-bold text-sm text-white mb-1">
              Live Production Systems
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Actively maintaining and scaling business-critical enterprise web platforms.
            </div>
          </div>

          <div className="p-8 rounded-3xl linear-card hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,140,255,0.25)] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-400" />
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono mb-2 text-gradient-animated">
              {countOwnership}%
            </div>
            <div className="font-bold text-sm text-white mb-1">
              Architecture Ownership
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              MVC design patterns, normalized database schemas, and end-to-end releases.
            </div>
          </div>

          <div className="p-8 rounded-3xl linear-card hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(0,140,255,0.25)] transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-amber-500 via-orange-400 to-pink-500" />
            <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight font-mono mb-2 text-gradient-gold">
              {countUptime}%
            </div>
            <div className="font-bold text-sm text-white mb-1">
              Query & Server Uptime
            </div>
            <div className="text-xs text-slate-400 leading-relaxed">
              Rigorous SQL query optimization, caching strategies, and SLA adherence.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
