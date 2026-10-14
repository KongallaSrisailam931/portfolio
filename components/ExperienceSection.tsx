"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Sparkles, Layers } from "lucide-react";

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  projectsMentioned: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: "01",
    role: "Full Stack Developer",
    company: "Green Gold Animation Pvt Ltd",
    location: "Hyderabad, India",
    period: "Jul 2025 – Present",
    isCurrent: true,
    summary:
      "Leading frontend development, custom CMS engineering, and internal workflow applications for India's prominent animation studio.",
    responsibilities: [
      "Led end-to-end design and development of the official Chhota Bheem website and custom CMS from scratch.",
      "Architected scalable MVC backend modules managing movie releases, video episodes, interactive games, and promotional events.",
      "Engineered role-based access control (RBAC) admin dashboards enabling marketing and editorial teams to update multimedia content dynamically.",
      "Developed internal Employee Helpdesk System for automated departmental ticketing, SLA resolution tracking, and file uploads.",
      "Built intelligent Resume Parsing System extracting candidate credentials into the recruitment database.",
      "Maintained database schema normalization and optimized SQL queries to ensure zero-downtime reliability."
    ],
    techStack: ["PHP", "MySQL", "JavaScript", "Bootstrap", "HTML5/CSS3", "REST APIs", "Git"],
    projectsMentioned: [
      "Chhota Bheem Website & Custom CMS",
      "Green Gold Corporate Portal",
      "Employee Helpdesk System",
      "Resume Parsing System"
    ]
  },
  {
    id: "02",
    role: "Full Stack Developer",
    company: "Anicalls Pvt Ltd",
    location: "Hyderabad, India",
    period: "Jul 2023 – Jul 2025",
    isCurrent: false,
    summary:
      "Engineered business-critical web applications, parametric property search platforms, and secure administrative consoles using Laravel and CodeIgniter.",
    responsibilities: [
      "Developed real estate listing platforms and multi-region classified applications in Laravel and CodeIgniter.",
      "Constructed advanced parametric SQL search queries and composite database indices to minimize query latency.",
      "Created secure broker administration dashboards, user management modules, and automated lead capture workflows.",
      "Implemented secure authentication, session handling, CSRF protection, and role-based permissions.",
      "Integrated third-party REST APIs and handled ongoing maintenance, defect resolution, and release deployments."
    ],
    techStack: ["Laravel", "CodeIgniter", "PHP", "MySQL", "Bootstrap", "AJAX", "REST APIs", "Git"],
    projectsMentioned: [
      "Real Estate Property Listing & Search Platform",
      "Local Classifieds Portal",
      "Broker & Agent Admin Portals"
    ]
  },
  {
    id: "03",
    role: "PHP Backend Developer",
    company: "Innoitlabs",
    location: "Hyderabad, India",
    period: "Mar 2023 – Jul 2023",
    isCurrent: false,
    summary:
      "Built backend APIs, database structures, and third-party communication integrations for CRM and classified advertising platforms.",
    responsibilities: [
      "Developed backend RESTful APIs in PHP and MySQL supporting user registrations and ad placement.",
      "Integrated Twilio SMS API for two-factor mobile OTP authentication and account verification.",
      "Implemented Firebase Cloud Messaging (FCM) for real-time transactional push notifications.",
      "Designed normalized MySQL database tables, wrote data validation logic, and supported staging deployments."
    ],
    techStack: ["PHP", "MySQL", "REST APIs", "Twilio OTP", "Firebase FCM", "Postman", "Git"],
    projectsMentioned: [
      "CRM Application Modules",
      "Classified Advertisement Engine"
    ]
  },
  {
    id: "04",
    role: "PHP Backend Developer Intern",
    company: "Rubia Services",
    location: "Hyderabad, India",
    period: "Sep 2022 – Feb 2023",
    isCurrent: false,
    summary:
      "Assisted in backend feature development, payment gateway integration, and database operations for enterprise client applications.",
    responsibilities: [
      "Contributed to backend module development built on the Yii2 PHP framework and MySQL.",
      "Configured Razorpay payment gateway integration, order creation workflows, and webhook verification.",
      "Set up transactional SMS API notifications and assisted with database maintenance and bug fixes."
    ],
    techStack: ["Yii2", "PHP", "MySQL", "Razorpay Gateway", "SMS APIs", "Firebase"],
    projectsMentioned: [
      "Enterprise Payment Integration Modules",
      "Client Management Backend"
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section
      id="sec-experience"
      className="py-28 bg-gradient-to-b from-[#040814] via-[#070e22] to-[#030612] text-white relative overflow-hidden border-t border-white/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[38rem] h-[38rem] bg-gradient-to-br from-blue-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[38rem] h-[38rem] bg-gradient-to-tl from-indigo-600/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full linear-pill text-cyan-400 font-mono text-xs font-bold tracking-wider uppercase shadow-md">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>04 / PROFESSIONAL EXPERIENCE TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Work Experience &{" "}
            <span className="text-gradient-animated">
              Career Trajectory.
            </span>
          </h2>
          <p className="text-slate-300 max-w-3xl text-base sm:text-lg leading-relaxed">
            A chronological timeline of my professional roles in software development, delivering practical solutions with PHP, Laravel, CodeIgniter, and MySQL.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-white/15 ml-4 sm:ml-8 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={exp.id} className="relative pl-8 sm:pl-12 group">
              
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-transform duration-300 group-hover:scale-125 ${
                  exp.isCurrent
                    ? "bg-emerald-400 border-white shadow-[0_0_15px_rgba(52,211,153,0.8)]"
                    : "bg-blue-500 border-slate-900 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                }`}
              />

              {/* Timeline Card */}
              <div className="linear-card rounded-3xl p-8 sm:p-10 transition-all duration-300 hover:border-cyan-400/60 hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-6">
                
                {/* Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-white/10 pb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wide">
                        {exp.company}
                      </span>
                      {exp.isCurrent && (
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-cyan-400" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Role Summary */}
                <p className="text-sm text-slate-200 leading-relaxed font-normal">
                  {exp.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Key Contributions & Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Projects & Tech Stack Footer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-slate-400 font-mono block mb-2 font-semibold">
                      Featured Systems & Projects:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.projectsMentioned.map((proj, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-slate-300 font-mono text-[11px]"
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-slate-400 font-mono block mb-2 font-semibold">
                      Technologies Applied:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.techStack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-md linear-card text-cyan-300 font-mono text-[11px] font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
