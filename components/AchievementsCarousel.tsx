"use client";

import { useEffect, useState } from "react";
import { Award, CheckCircle2, ChevronLeft, ChevronRight, Flame, Shield, Star, Trophy, Sparkles } from "lucide-react";

const milestones = [
  {
    title: "Official Chhota Bheem Platform & CMS",
    company: "Green Gold Animation Pvt Ltd",
    badge: "FLAGSHIP MILESTONE",
    desc: "Single-handedly architected and delivered the official website and custom CMS from scratch for India's foremost animation franchise, handling multi-million traffic spikes.",
    stat: "Multi-Million Users",
    icon: Trophy,
    color: "from-amber-500/20 via-orange-500/10 to-transparent border-amber-500/40 text-amber-400",
  },
  {
    title: "10+ Live Production Platforms",
    company: "Green Gold & Anicalls",
    badge: "PRODUCTION SCALE",
    desc: "Managed, deployed, and continuously optimized more than 10 critical enterprise websites across Media, Real Estate, HR, CRM, Classifieds, and eCommerce domains.",
    stat: "10+ Live Websites",
    icon: Shield,
    color: "from-blue-500/20 via-indigo-500/10 to-transparent border-blue-500/40 text-blue-400",
  },
  {
    title: "AI-Powered Resume Parsing Engine",
    company: "HR Automation Tech",
    badge: "AI AUTOMATION",
    desc: "Engineered automated resume extraction tool parsing complex candidate documents into structured hiring databases, drastically eliminating manual entry.",
    stat: "70% Time Saved",
    icon: Flame,
    color: "from-purple-500/20 via-pink-500/10 to-transparent border-purple-500/40 text-purple-400",
  },
  {
    title: "High-Throughput OTP & Payment Pipelines",
    company: "Twilio & Razorpay",
    badge: "INTEGRATION MASTERY",
    desc: "Implemented fault-tolerant two-factor Twilio OTP authentication and secure Razorpay payment workflows with webhook verification and zero transaction failures.",
    stat: "99.9% Delivery Rate",
    icon: CheckCircle2,
    color: "from-emerald-500/20 via-teal-500/10 to-transparent border-emerald-500/40 text-emerald-400",
  },
  {
    title: "Sub-50ms SQL Query Performance",
    company: "Enterprise MySQL & PostgreSQL",
    badge: "DATABASE TUNING",
    desc: "Transformed sluggish relational queries through normalized schema design, execution plan profiling, and strategic composite indexing for instant response times.",
    stat: "<50ms Query Latency",
    icon: Star,
    color: "from-cyan-500/20 via-blue-500/10 to-transparent border-cyan-500/40 text-cyan-400",
  },
];

export default function AchievementsCarousel() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % milestones.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="py-24 bg-gradient-to-r from-[#050916] via-[#0a132a] to-[#050916] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-600/15 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-purple-600/15 to-transparent rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full linear-pill text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider mb-4 shadow-md">
              <Award className="w-3.5 h-3.5" />
              <span>KEY PRODUCTION MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Enterprise Impact &{" "}
              <span className="text-gradient-animated">
                Accomplishments.
              </span>
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={() => setActiveIdx((prev) => (prev - 1 + milestones.length) % milestones.length)}
              className="p-3.5 rounded-full linear-card hover:bg-white/15 text-white transition-all shadow-md"
              aria-label="Previous milestone"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActiveIdx((prev) => (prev + 1) % milestones.length)}
              className="p-3.5 rounded-full linear-card hover:bg-white/15 text-white transition-all shadow-md"
              aria-label="Next milestone"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Cards View */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[-1, 0, 1].map((offset) => {
            const index = (activeIdx + offset + milestones.length) % milestones.length;
            const item = milestones[index];
            const Icon = item.icon;
            const isCenter = offset === 0;

            return (
              <div
                key={index}
                className={`p-8 rounded-3xl border transition-all duration-500 flex flex-col justify-between ${
                  isCenter
                    ? `bg-gradient-to-b ${item.color} shadow-[0_20px_50px_rgba(0,0,0,0.8)] scale-100 ring-1 ring-white/20`
                    : "linear-card opacity-60 hover:opacity-100 scale-95"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-mono text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-black/60 border border-white/15 text-slate-200">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs font-mono text-cyan-400 font-semibold mb-4">
                    {item.company}
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-400">Verified Metric:</span>
                  <span className="font-bold text-white text-sm bg-white/15 px-3 py-1 rounded-xl shadow-sm">
                    {item.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dot Pagination Indicator */}
        <div className="flex justify-center items-center gap-2 mt-10">
          {milestones.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIdx === idx ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-400" : "w-2 bg-slate-700 hover:bg-slate-600"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
