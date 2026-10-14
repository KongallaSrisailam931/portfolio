"use client";

import { Check, ArrowUpRight, Cpu, Layers, ShieldCheck, Zap, Sparkles } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Full-Stack Enterprise Applications",
    desc: "End-to-end web engineering from database schema design and MVC backend architecture to responsive, reactive client interfaces.",
    icon: Layers,
    badge: "CORE ARCHITECTURE",
    color: "from-blue-600/20 via-blue-500/10 to-transparent border-blue-500/30 group-hover:border-cyan-400",
    deliverables: [
      "Custom business web portals and admin dashboards",
      "High-throughput RESTful APIs with strict validation",
      "Secure authentication, authorization & session management",
      "Modular, scalable codebases built with Laravel & React.js",
    ],
    tech: ["Laravel", "React.js", "PHP 8", "MySQL", "REST APIs"],
  },
  {
    id: "02",
    title: "Custom Enterprise CMS Engineering",
    desc: "Bespoke, high-performance content management systems crafted from scratch—avoiding generic bloat while delivering lightning speed.",
    icon: Cpu,
    badge: "CUSTOM SOLUTIONS",
    color: "from-indigo-600/20 via-indigo-500/10 to-transparent border-indigo-500/30 group-hover:border-indigo-400",
    deliverables: [
      "Bespoke media asset management for millions of monthly users",
      "Granular Role-Based Access Control (RBAC) for studio editors",
      "Dynamic CRUD operations with pagination, search & audit logs",
      "SEO metadata automation and rapid server-side caching",
    ],
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "Git"],
  },
  {
    id: "03",
    title: "API Engineering & Third-Party Integrations",
    desc: "Bridging mission-critical software systems through resilient API pipelines, event webhooks, and secure cloud services.",
    icon: Zap,
    badge: "SYSTEM CONNECTIVITY",
    color: "from-amber-600/20 via-amber-500/10 to-transparent border-amber-500/30 group-hover:border-amber-400",
    deliverables: [
      "Twilio OTP mobile authentication and automated SMS alerts",
      "Razorpay payment gateway order creation & webhook verification",
      "Firebase Cloud Messaging for instantaneous multi-platform push",
      "External CRM and ERP synchronization interfaces",
    ],
    tech: ["REST APIs", "Twilio", "Firebase", "Razorpay", "Postman"],
  },
  {
    id: "04",
    title: "Database Optimization & Production Support",
    desc: "Diagnosing performance bottlenecks, fine-tuning complex SQL queries, and ensuring 24/7 reliability across live enterprise environments.",
    icon: ShieldCheck,
    badge: "PERFORMANCE & RELIABILITY",
    color: "from-emerald-600/20 via-emerald-500/10 to-transparent border-emerald-500/30 group-hover:border-emerald-400",
    deliverables: [
      "Deep SQL query optimization and composite index engineering",
      "Normalized relational schema design (MySQL & PostgreSQL)",
      "Root-cause debugging and rapid production bug remediation",
      "Version control management and smooth deployment pipelines",
    ],
    tech: ["MySQL", "PostgreSQL", "Query Profiling", "Git", "Linux"],
  },
];

export default function ServicesSection() {
  return (
    <section id="sec-services" className="py-28 bg-gradient-to-b from-[#040814] via-[#070e20] to-[#030610] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background ambient orbs */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-gradient-to-l from-indigo-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full linear-pill text-cyan-400 font-mono text-xs font-bold tracking-wider uppercase shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>04 / SERVICES OFFERED</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            High-Impact{" "}
            <span className="text-gradient-animated">
              Technical Capabilities.
            </span>
          </h2>
          <p className="text-slate-300 max-w-3xl text-base sm:text-lg">
            Delivering production-tested web applications, bespoke CMS platforms, and scalable data architectures designed to withstand heavy operational volume.
          </p>
        </div>

        {/* 4 Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className={`group relative rounded-3xl bg-gradient-to-b ${srv.color} border p-8 sm:p-10 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] hover:-translate-y-1.5 flex flex-col justify-between backdrop-blur-xl`}
              >
                <div>
                  {/* Top Row */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md shadow-md text-white flex items-center justify-center border border-white/15 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300 group-hover:rotate-6">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 font-mono text-[10px] font-bold tracking-wider uppercase backdrop-blur-sm">
                        {srv.badge}
                      </span>
                      <span className="font-mono text-xs font-bold text-slate-400">
                        {srv.id}
                      </span>
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-8">
                    {srv.desc}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-3 mb-8 border-t border-white/10 pt-6">
                    <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
                      Key Deliverables & Specifications
                    </div>
                    {srv.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Tags & CTA */}
                <div className="border-t border-white/10 pt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex flex-wrap gap-1.5">
                    {srv.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md linear-card text-slate-300 font-mono text-[11px] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#sec-cta-footer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-white transition-colors group/link"
                  >
                    <span>Discuss Architecture</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
