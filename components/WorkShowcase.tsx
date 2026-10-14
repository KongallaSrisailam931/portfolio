"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  LayoutGrid,
  SlidersHorizontal,
  Check,
  ExternalLink,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  badge: string;
  image: string;
  tech: string[];
  features: string[];
  impact: string;
  url?: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Official Chhota Bheem Platform & Custom CMS",
    tagline: "High-Traffic Flagship Media Portal & Custom Editorial Engine",
    category: "Green Gold Animation Pvt Ltd",
    badge: "FLAGSHIP ENTERPRISE CMS",
    image: "/images/projects/project-1.png",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap", "REST APIs", "Git"],
    features: [
      "Custom CMS built completely from scratch with modular MVC architecture",
      "Dynamic media library and asset pipeline serving millions of young fans",
      "Role-based access control (RBAC) for studio editors and content teams",
      "Optimized SQL schema handling spikes during cartoon broadcast premieres",
    ],
    impact: "Official digital home of India's most beloved animation franchise",
    url: "https://greengold.tv/",
  },
  {
    id: "02",
    title: "Green Gold Corporate Web Infrastructure",
    tagline: "Global Animation Studio Portal & IP Franchise Showcase",
    category: "Green Gold Animation Pvt Ltd",
    badge: "STUDIO INFRASTRUCTURE",
    image: "/images/projects/project-2.png",
    tech: ["PHP", "MySQL", "Bootstrap", "REST APIs", "SEO Architecture"],
    features: [
      "Corporate web presence for India's leading animation powerhouse",
      "Comprehensive digital catalogue of global animation IPs and licensing",
      "Automated SEO metadata injection and lightning-fast CDN assets",
      "Enterprise security headers and cross-origin protection",
    ],
    impact: "Central business platform for global entertainment partnerships",
    url: "https://greengold.tv/",
  },
  {
    id: "03",
    title: "Enterprise Helpdesk & Workflow Engine",
    tagline: "Mission-Critical Internal Ticket & SLA Management",
    category: "Internal Enterprise Tool",
    badge: "WORKFLOW AUTOMATION",
    image: "/images/projects/project-3.png",
    tech: ["PHP", "MySQL", "REST APIs", "AJAX", "Session Security"],
    features: [
      "Automated ticket dispatch and departmental routing across studio hubs",
      "Real-time SLA resolution countdown and escalation matrix",
      "Comprehensive employee role permissions and audit trails",
      "Custom reporting dashboards with performance bottleneck alerts",
    ],
    impact: "Streamlined operational turnaround for 300+ studio employees",
  },
  {
    id: "04",
    title: "AI-Powered Resume Parsing Engine",
    tagline: "Automated Talent Screening & Candidate Ingestion",
    category: "Green Gold Animation Pvt Ltd",
    badge: "HR TECH INNOVATION",
    image: "/images/projects/project-4.png",
    tech: ["Laravel", "PHP", "MySQL", "AJAX", "Regex Parsing"],
    features: [
      "Automated resume ingestion parsing PDF and DOCX files into structured data",
      "Extracts candidate skillsets, contact credentials, and years of experience",
      "Interactive recruitment dashboard with instant search & filter",
      "Drastically eliminated manual resume data entry overhead",
    ],
    impact: "Reduced talent acquisition screening cycle time by 70%",
  },
  {
    id: "05",
    title: "Real Estate Enterprise Listing Platform",
    tagline: "Parametric Property Search & Agent Portal",
    category: "Anicalls Pvt Ltd",
    badge: "REAL ESTATE COMMERCE",
    image: "/images/projects/project-5.png",
    tech: ["Laravel", "CodeIgniter", "MySQL", "Bootstrap", "AJAX"],
    features: [
      "Multifaceted parametric query engine for property locations and amenities",
      "Secure broker and agent management dashboards with lead tracking",
      "Optimized composite database indices for sub-50ms query returns",
      "Responsive interactive floor plan galleries and contact forms",
    ],
    impact: "Powered high-value commercial and residential real estate transactions",
  },
  {
    id: "06",
    title: "LocalClassyAds Multi-Region Marketplace",
    tagline: "Secure Classifieds with Twilio OTP & Firebase Alerts",
    category: "Classifieds & Ads",
    badge: "HIGH-CONCURRENCY PORTAL",
    image: "/images/projects/project-6.png",
    tech: ["Laravel", "PHP", "MySQL", "Twilio OTP", "Firebase FCM"],
    features: [
      "Two-factor OTP authentication via Twilio SMS API for user verification",
      "Real-time Firebase push alerts on ad inquiries and buyer bids",
      "Automated moderation workflow and anti-spam duplicate detection",
      "Multi-category hierarchy with localized geo-targeting filters",
    ],
    impact: "Delivered spam-free ad marketplace across multiple regional markets",
  },
];

export default function WorkShowcase() {
  const [viewMode, setViewMode] = useState<"carousel" | "grid">("carousel");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const currentProject = projects[currentIndex];

  useEffect(() => {
    if (viewMode !== "carousel" || !isPlaying || isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [viewMode, isPlaying, isHovered]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
  };

  return (
    <section id="sec-showcase" className="py-28 bg-gradient-to-b from-[#070c1a] via-[#091126] to-[#050916] text-white relative overflow-hidden border-t border-white/10">
      
      {/* Background radial linear lights */}
      <div className="absolute top-1/3 left-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[40rem] h-[40rem] bg-gradient-to-tl from-cyan-500/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header & View Switcher */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full linear-pill text-cyan-400 font-mono text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>02 / SELECTED WORK SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Enterprise Platforms{" "}
              <span className="text-gradient-animated">
                Engineered for Scale.
              </span>
            </h2>
            <p className="text-slate-300 max-w-2xl text-base sm:text-lg">
              Explore 6 flagship production solutions, custom CMS architectures, and enterprise portals built for high-traffic volume.
            </p>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center gap-2 linear-card p-1.5 rounded-2xl border border-white/15 self-start md:self-end">
            <button
              onClick={() => setViewMode("carousel")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                viewMode === "carousel"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Auto Carousel</span>
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              <span>3D Grid</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: INTERACTIVE AUTO-SCROLLING CAROUSEL */}
        {viewMode === "carousel" && (
          <div
            className="space-y-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Main Stage Active Slide Card */}
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-slate-900/90 text-white border-2 border-white/15 p-8 sm:p-12 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] group transition-all duration-300"
              style={{ transition: "transform 0.2s ease-out, box-shadow 0.3s ease" }}
            >
              {/* Iridescent Sheen Glare Sweep */}
              <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] group-hover:animate-sheen-sweep bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none z-30" />
              
              {/* Subtle tech grid */}
              <div className="absolute inset-0 tech-grid-linear opacity-30 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-20">
                
                {/* Left Side: Mockup Image */}
                <div className="lg:col-span-7">
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-950 border border-white/15 shadow-2xl">
                    <Image
                      src={currentProject.image}
                      alt={currentProject.title}
                      fill
                      priority
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md text-xs font-mono font-bold tracking-wider text-cyan-400 border border-white/20">
                      {currentProject.badge}
                    </div>
                  </div>
                </div>

                {/* Right Side: Project Information */}
                <div className="lg:col-span-5 space-y-6">
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wider">
                        {currentProject.category}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {currentProject.id} / 06
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {currentProject.title}
                    </h3>

                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                      {currentProject.tagline}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg linear-card text-slate-200 font-mono text-xs font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Deliverables Bullet Points */}
                  <div className="space-y-2.5 pt-2 border-t border-white/10">
                    {currentProject.features.slice(0, 3).map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/10">
                    <button
                      onClick={() => setActiveProject(currentProject)}
                      className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-[0_0_25px_rgba(0,140,255,0.6)] text-white font-bold text-xs transition-all flex items-center gap-2 shadow-lg shadow-blue-600/30"
                    >
                      <span>Full Specifications</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>

                    {currentProject.url && (
                      <a
                        href={currentProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-full linear-card text-slate-300 hover:text-white font-mono text-xs font-semibold transition-colors flex items-center gap-2"
                      >
                        <span>Visit Live Portal</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>

                </div>

              </div>
            </div>

            {/* Carousel Controls Bar with Linear Background */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl linear-card">
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2.5 rounded-full linear-card hover:bg-white/10 text-white transition-colors"
                  aria-label={isPlaying ? "Pause auto-scroll" : "Play auto-scroll"}
                >
                  {isPlaying ? <Pause className="w-4 h-4 text-cyan-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
                </button>
                <div className="text-xs font-mono text-slate-300">
                  {isPlaying ? "Auto-Scroll: ACTIVE (4.5s)" : "Auto-Scroll: PAUSED"}
                </div>
              </div>

              {/* Thumbnails Navigator */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-md py-1">
                {projects.map((proj, idx) => (
                  <button
                    key={proj.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                      currentIndex === idx
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/30"
                        : "linear-card text-slate-400 hover:text-white"
                    }`}
                  >
                    {proj.id}
                  </button>
                ))}
              </div>

              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full linear-card hover:bg-white/10 text-white transition-colors"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full linear-card hover:bg-white/10 text-white transition-colors"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

        {/* VIEW 2: 3D INTERACTIVE GRID VIEW */}
        {viewMode === "grid" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div
                key={proj.id}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="group relative flex flex-col justify-between rounded-3xl linear-card p-6 transition-all duration-300 hover:shadow-2xl hover:border-cyan-400/60 overflow-hidden"
                style={{ transition: "transform 0.2s ease-out, box-shadow 0.3s ease, border-color 0.3s ease" }}
              >
                {/* Sheen Glare Sweep */}
                <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] group-hover:animate-sheen-sweep bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none z-30" />

                <div>
                  <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-white/15 shadow-inner">
                    <Image
                      src={proj.image}
                      alt={proj.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/85 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider text-cyan-400 border border-white/20">
                      {proj.badge}
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-cyan-400 uppercase">
                        {proj.category}
                      </span>
                      <span className="font-mono text-xs text-slate-400">
                        {proj.id} / 06
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium">
                      {proj.tagline}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md linear-card text-slate-300 font-mono text-[11px] font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                    {proj.features.slice(0, 3).map((f, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-tight">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-slate-400 font-semibold truncate max-w-[160px]">
                    {proj.impact}
                  </div>

                  <button
                    onClick={() => setActiveProject(proj)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold hover:shadow-lg transition-all"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl transition-opacity"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 rounded-3xl max-w-2xl w-full p-8 shadow-2xl border-2 border-white/20 max-h-[90vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                  {activeProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProject(null)}
                className="p-2 rounded-full linear-card text-slate-400 hover:text-white text-sm font-mono font-bold"
              >
                ✕
              </button>
            </div>

            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-white/15">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-slate-300">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
                  Technical Architecture & Deliverables
                </h4>
                <ul className="space-y-2">
                  {activeProject.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm">
                      <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg linear-card text-white font-mono text-xs font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl linear-card text-cyan-300 text-xs font-medium border-cyan-500/30">
                <span className="font-bold">Key Project Impact: </span>
                {activeProject.impact}
              </div>

              {activeProject.url && (
                <div className="pt-2 flex justify-end">
                  <a
                    href={activeProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold transition-all hover:shadow-lg"
                  >
                    <span>Visit Live Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
