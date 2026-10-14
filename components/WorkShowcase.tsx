"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  Layers,
  FolderLock,
  Globe,
  Building,
  ShoppingCart,
  Headphones,
  CheckCircle2,
  FileText,
} from "lucide-react";

interface CaseStudy {
  id: string;
  title: string;
  role: string;
  client: string;
  badge: string;
  category: "all" | "cms" | "internal" | "commerce";
  isPublic: boolean;
  publicUrl?: string;
  image: string;
  overview: string;
  problem: string;
  responsibilities: string[];
  techStack: string[];
  keyFeatures: string[];
  businessImpact: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "01",
    title: "Chhota Bheem Website & Custom CMS",
    role: "Full Stack Developer (Frontend & Custom CMS Development)",
    client: "Green Gold Animation Pvt Ltd",
    badge: "PRODUCTION CMS",
    category: "cms",
    isPublic: true,
    publicUrl: "https://greengold.tv/",
    image: "/images/projects/project-1.png",
    overview:
      "The official web platform and custom content management engine for India's foremost animation franchise, Chhota Bheem. Built to deliver rich multimedia, episodes, character lore, and interactive games to a global audience.",
    problem:
      "The animation studio required a bespoke, highly maintainable content management system from scratch to manage media assets, movie launches, episodes, games, and events dynamically without relying on bloated off-the-shelf CMS solutions.",
    responsibilities: [
      "Engineered the custom CMS backend from scratch using PHP and MySQL following modular MVC architecture.",
      "Developed responsive, mobile-first frontend interfaces using HTML5, CSS3, JavaScript, and Bootstrap.",
      "Designed normalized database schemas for characters, movies, episodic videos, games, and contests.",
      "Built a secure admin dashboard enabling non-technical content and marketing teams to publish and update media.",
      "Integrated RESTful API endpoints for dynamic content ingestion and optimized SQL queries for high stability."
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML5/CSS3", "REST APIs", "Git"],
    keyFeatures: [
      "Movies & Video Episodes Module: Dynamic management of release schedules, video embeds, and trailers.",
      "Interactive Games Portal: Showcase and direct play/download links for franchise web games.",
      "Events & Contests Scheduling: Time-sensitive promotional campaigns, banners, and announcements.",
      "Granular Admin Permissions: Role-based dashboard allowing content teams to manage media safely.",
      "Optimized Media Asset Pipelines: Clean caching and database query design for fast page response."
    ],
    businessImpact:
      "Successfully replaced legacy static workflows with a bespoke CMS, empowering marketing teams to launch movie promotions and episodes independently."
  },
  {
    id: "02",
    title: "Employee Helpdesk / Ticketing System",
    role: "Full Stack Developer (Architecture, Backend & Admin Workflows)",
    client: "Green Gold Animation Pvt Ltd",
    badge: "INTERNAL TOOL",
    category: "internal",
    isPublic: false,
    image: "/images/projects/project-3.png",
    overview:
      "A mission-critical internal ticketing and workflow automation system built for Green Gold Animation studio employees to coordinate IT support, travel logistics, and administrative requests.",
    problem:
      "Studio teams across animation, production, and IT lacked a centralized tracking mechanism for internal service requests, leading to untracked email chains and delayed issue resolution.",
    responsibilities: [
      "Designed normalized relational database tables in MySQL for ticket queues, categories, priorities, and audit logs.",
      "Engineered backend business logic, status state transitions, and validation rules in PHP.",
      "Built secure multi-part file upload handlers for documentation, travel proofs, and receipts.",
      "Implemented departmental routing logic and custom administrative triage dashboards.",
      "Ensured rigorous session management, input sanitization, and access authorization."
    ],
    techStack: ["PHP", "MySQL", "REST APIs", "AJAX", "Bootstrap", "Session Security", "Git"],
    keyFeatures: [
      "Ticket Lifecycle Management: Automated ticket generation, unique tracking codes, and status updates.",
      "Departmental Routing: Smart dispatching to IT, Facilities, Human Resources, or Accounts teams.",
      "Secure File Attachments: Validated file upload engine for screenshots, invoices, and documents.",
      "Travel Details Coordination: Specialized sub-module for employee travel requests, budgets, and management sign-offs.",
      "Admin Resolution Dashboard: Priority filters (Urgent, High, Normal), internal notes, and resolution auditing."
    ],
    businessImpact:
      "Automated internal request handling across studio departments, establishing clear accountability, audit trails, and faster response turnaround."
  },
  {
    id: "03",
    title: "Real Estate Property Listing & Search Platform",
    role: "Full Stack Developer (Backend Engine & Search Optimization)",
    client: "Anicalls Pvt Ltd",
    badge: "COMMERCIAL CLIENT",
    category: "commerce",
    isPublic: false,
    image: "/images/projects/project-5.png",
    overview:
      "A commercial property discovery, search, and broker management platform engineered to support residential and commercial real estate transactions with complex filtering criteria.",
    problem:
      "Real estate buyers and brokers required a responsive platform capable of executing rapid multi-parametric searches across property types, pricing tiers, amenities, and geographical zones.",
    responsibilities: [
      "Developed property listing and categorization modules using Laravel and CodeIgniter.",
      "Constructed complex multi-attribute SQL search queries with composite indices to minimize query latency.",
      "Created secure administrative CRUD interfaces for broker management, listing approvals, and lead capture.",
      "Built responsive property showcase cards, interactive photo galleries, and inquiry modals using Bootstrap and AJAX."
    ],
    techStack: ["Laravel", "CodeIgniter", "PHP", "MySQL", "Bootstrap", "AJAX", "REST APIs"],
    keyFeatures: [
      "Parametric Multi-Criteria Search: Instant filtering by budget, square footage, property type, and location.",
      "Complete Admin CRUD Engine: Full administrative control over active listings, pricing changes, and image uploads.",
      "Broker & Agent Management: Dedicated agent profiles, contact routing, and prospective buyer inquiry logs.",
      "Database Query Optimization: Normalized relational schema with indexed search columns for fast lookups.",
      "Interactive Property Galleries: Responsive layout featuring floor plans, key specifications, and direct inquiry forms."
    ],
    businessImpact:
      "Streamlined property publishing for brokers and provided buyers with a rapid, reliable search interface without system slowdowns."
  },
  {
    id: "04",
    title: "B2B E-Commerce & Multi-Vendor Application",
    role: "Full Stack Developer (Catalog, GST & Payment Gateway Integration)",
    client: "Commercial Wholesale / Client Project",
    badge: "E-COMMERCE ENGINE",
    category: "commerce",
    isPublic: false,
    image: "/images/projects/project-6.png",
    overview:
      "A B2B e-commerce platform built to manage wholesale product catalogs, tiered pricing structures, supplier management, and automated GST invoice generation.",
    problem:
      "Wholesale commerce requires specialized business rules including minimum order quantities (MOQ), supplier-specific catalogs, Indian GST tax slab calculations, and integrated digital payment handling.",
    responsibilities: [
      "Architected backend product catalog, category hierarchy, and inventory tracking in PHP and Laravel.",
      "Engineered automated GST tax calculation algorithms based on product categories and inter/intra-state rules.",
      "Integrated Razorpay payment gateway with secure checkout, order verification, and automated status webhooks.",
      "Created supplier and buyer dashboards for tracking purchase orders, dispatch status, and billing."
    ],
    techStack: ["PHP", "Laravel", "MySQL", "Razorpay Gateway", "REST APIs", "AJAX", "Bootstrap"],
    keyFeatures: [
      "Supplier & Customer Dashboards: Role-separated dashboards for managing bulk stock and reviewing orders.",
      "Category & Sub-Category Tree: Dynamic multi-level product categorization and inventory management.",
      "Automated GST Configuration: Tax slab application (5%, 12%, 18%, 28%) and automated invoice data generation.",
      "Razorpay Payment Integration: Seamless order initiation, encrypted checkout, and webhook verification.",
      "Order Management & Dispatch Tracking: Step-by-step order processing from payment confirmation to shipping dispatch."
    ],
    businessImpact:
      "Delivered a working B2B transaction framework handling wholesale inventory, automated billing logic, and verified digital payments."
  }
];

export default function WorkShowcase() {
  const [activeCategory, setActiveCategory] = useState<"all" | "cms" | "internal" | "commerce">("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? caseStudies
      : caseStudies.filter((item) => item.category === activeCategory);

  return (
    <section
      id="sec-projects"
      className="py-28 bg-gradient-to-b from-[#070c1a] via-[#091126] to-[#050916] text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-gradient-to-br from-blue-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[40rem] h-[40rem] bg-gradient-to-tl from-cyan-500/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full linear-pill text-cyan-400 font-mono text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>02 / PROFESSIONAL CASE STUDIES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Featured Projects &{" "}
              <span className="text-gradient-animated">
                Engineering Case Studies.
              </span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Real-world web applications, custom CMS platforms, and internal tools built to solve actual business and operational requirements.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 linear-card p-1.5 rounded-2xl border border-white/15 self-start md:self-end">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                activeCategory === "all"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              All Projects (4)
            </button>
            <button
              onClick={() => setActiveCategory("cms")}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                activeCategory === "cms"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Custom CMS
            </button>
            <button
              onClick={() => setActiveCategory("internal")}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                activeCategory === "internal"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Internal Tools
            </button>
            <button
              onClick={() => setActiveCategory("commerce")}
              className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all ${
                activeCategory === "commerce"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Laravel & Commerce
            </button>
          </div>
        </div>

        {/* 2x2 Clean Case Study Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl linear-card p-8 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden"
            >
              {/* Subtle tech sheen */}
              <div className="absolute inset-0 -translate-x-[150%] skew-x-[-20deg] group-hover:animate-sheen-sweep bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-30" />

              <div>
                {/* Image Preview & Badges */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-white/15 shadow-inner">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  
                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/85 backdrop-blur-md text-[10px] font-mono font-bold tracking-wider text-cyan-400 border border-white/20">
                      {project.badge}
                    </span>
                    {project.isPublic ? (
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 backdrop-blur-md text-[10px] font-mono font-bold text-emerald-400 border border-emerald-500/40 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Public Portal
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-slate-800/80 backdrop-blur-md text-[10px] font-mono font-semibold text-slate-300 border border-white/15 flex items-center gap-1">
                        <FolderLock className="w-3 h-3 text-slate-400" />
                        Internal / Private Architecture
                      </span>
                    )}
                  </div>
                </div>

                {/* Header Information */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-wide">
                      {project.client}
                    </span>
                    <span className="font-mono text-xs text-slate-400">
                      CASE STUDY {project.id}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 font-medium">
                    {project.role}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed pt-2">
                    {project.overview}
                  </p>
                </div>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-slate-200 font-mono text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Core Responsibilities Highlight */}
                <div className="space-y-2 mb-6 border-t border-white/10 pt-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                    Key Features & Implementation
                  </div>
                  {project.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/25 text-white font-bold text-xs transition-all flex items-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Read Full Case Study</span>
                </button>

                {project.isPublic && project.publicUrl ? (
                  <a
                    href={project.publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full linear-card text-slate-300 hover:text-white font-mono text-xs font-semibold transition-colors"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-[11px] font-mono text-slate-500">
                    Confidential Internal Codebase
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Comprehensive Case Study Modal (Strict 7-Part Structure) */}
      {selectedCaseStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl transition-opacity"
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 rounded-3xl max-w-3xl w-full p-8 sm:p-10 shadow-2xl border-2 border-white/20 max-h-[92vh] overflow-y-auto relative animate-in fade-in zoom-in-95 duration-200 text-white"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between mb-6 border-b border-white/10 pb-5">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wide">
                    {selectedCaseStudy.client}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-xs font-mono text-slate-400">
                    CASE STUDY {selectedCaseStudy.id}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedCaseStudy.title}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-cyan-300 mt-1">
                  {selectedCaseStudy.role}
                </p>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2.5 rounded-full linear-card text-slate-400 hover:text-white text-sm font-mono font-bold transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* Modal Image */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-8 bg-slate-950 border border-white/15">
              <Image
                src={selectedCaseStudy.image}
                alt={selectedCaseStudy.title}
                fill
                className="object-cover"
              />
            </div>

            {/* 7-Part Structured Content */}
            <div className="space-y-6 text-slate-300 text-sm">
              
              {/* 1. Project Overview */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  1. Project Overview
                </h4>
                <p className="text-slate-200 leading-relaxed">
                  {selectedCaseStudy.overview}
                </p>
              </div>

              {/* 2. Problem or Business Requirement */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
                  2. Problem & Business Requirement
                </h4>
                <p className="text-slate-200 leading-relaxed">
                  {selectedCaseStudy.problem}
                </p>
              </div>

              {/* 3. My Responsibilities */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                  3. My Responsibilities & Engineering Work
                </h4>
                <ul className="space-y-2">
                  {selectedCaseStudy.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 4. Technologies Used */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                  4. Technology Stack & Tools
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedCaseStudy.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg linear-card text-white font-mono text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 5. Key Features Implemented */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold">
                  5. Key Features Implemented
                </h4>
                <ul className="space-y-2">
                  {selectedCaseStudy.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-200">
                      <ShieldCheck className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 6 & 7. Business Impact & Live Verification */}
              <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-1.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                  6. Business Impact & Operational Value
                </h4>
                <p className="text-slate-200 leading-relaxed">
                  {selectedCaseStudy.businessImpact}
                </p>
              </div>

              {/* Live Demo or Status */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-4">
                <div className="text-xs font-mono text-slate-400">
                  {selectedCaseStudy.isPublic
                    ? "Verified Public Production Platform"
                    : "Internal Production Architecture (Confidential Codebase Protected)"}
                </div>

                {selectedCaseStudy.isPublic && selectedCaseStudy.publicUrl ? (
                  <a
                    href={selectedCaseStudy.publicUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs transition-all hover:shadow-lg shadow-blue-500/25"
                  >
                    <span>Visit Live Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => setSelectedCaseStudy(null)}
                    className="px-6 py-2.5 rounded-full linear-card text-slate-200 font-semibold text-xs hover:text-white"
                  >
                    Close Case Study
                  </button>
                )}
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
