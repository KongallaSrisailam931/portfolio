"use client";

import { useState } from "react";
import { Mail, Phone, ArrowUpRight, Github, Linkedin, Terminal, Sparkles, MapPin, FileText, Send, CheckCircle2 } from "lucide-react";

export default function CinematicFooter() {
  const currentYear = new Date().getFullYear();

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Time Role / Opportunity",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim()) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim()) {
      setErrorMessage("Please write a brief message.");
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form preparation and trigger mailto client
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      const mailtoUrl = `mailto:kongallasrisailam931@gmail.com?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Hi Srisailam,\n\nName: ${formData.name}\nEmail: ${formData.email}\nInquiry Type: ${formData.subject}\n\nMessage:\n${formData.message}\n`
      )}`;

      window.location.href = mailtoUrl;
    }, 700);
  };

  return (
    <footer
      id="sec-contact"
      className="bg-gradient-to-b from-[#030612] via-[#02040c] to-[#000000] text-white pt-28 pb-12 relative overflow-hidden border-t border-white/10"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[45rem] h-[22rem] bg-gradient-to-r from-blue-600/20 to-transparent rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[35rem] h-[18rem] bg-gradient-to-l from-indigo-600/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Recruiter-Ready Contact & Direct Inquiry Section */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-b from-slate-900/90 via-slate-950/95 to-black/95 border-2 border-white/15 backdrop-blur-2xl mb-24 shadow-[0_20px_70px_rgba(0,0,0,0.9)] relative overflow-hidden">
          
          <div className="absolute inset-0 tech-grid-linear opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-start">
            
            {/* Left Column: Direct Contact Info & Quick Actions */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full linear-pill text-cyan-400 font-mono text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>LET'S CONNECT</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Interested in working together or hiring for a{" "}
                <span className="text-gradient-animated">
                  PHP / Laravel Role?
                </span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed max-w-lg">
                I am open to full-time PHP, Laravel, and Full Stack Developer positions. Feel free to download my resume, send an inquiry directly, or connect with me on LinkedIn.
              </p>

              {/* Direct Channels */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-cyan-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Direct Email</span>
                    <a
                      href="mailto:kongallasrisailam931@gmail.com"
                      className="font-semibold text-white hover:text-cyan-400 transition-colors"
                    >
                      kongallasrisailam931@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-emerald-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Direct Phone</span>
                    <a
                      href="tel:+919381695637"
                      className="font-semibold text-white hover:text-emerald-400 transition-colors font-mono"
                    >
                      +91 9381695637
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 text-red-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">Location</span>
                    <span className="font-semibold text-white">
                      Hyderabad, Telangana, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Resume Download & Social Pills */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href="/Kongalla_Srisailam_Resume.pdf"
                  download="Kongalla_Srisailam_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/30 text-white font-bold text-xs transition-all flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/srisailam-kongalla-0b0938394/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full linear-card hover:border-cyan-400 text-slate-300 hover:text-white font-mono text-xs transition-colors shadow-sm"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <a
                  href="https://github.com/kongallasrisailam"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full linear-card hover:border-white/40 text-slate-300 hover:text-white font-mono text-xs transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4 text-slate-200" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>

            </div>

            {/* Right Column: Working Contact Form */}
            <div className="lg:col-span-6">
              <div className="p-7 sm:p-8 rounded-3xl linear-card border border-white/20 shadow-2xl space-y-5">
                <div className="border-b border-white/10 pb-4">
                  <h3 className="text-xl font-bold text-white">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below or reach me directly via email or phone.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                    <h4 className="text-lg font-bold text-white">Message Prepared!</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Your message has been formatted. If your email client didn't open automatically, you can email me directly at{" "}
                      <a href="mailto:kongallasrisailam931@gmail.com" className="text-cyan-400 font-semibold underline">
                        kongallasrisailam931@gmail.com
                      </a>.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-4 py-2 rounded-xl bg-white/10 text-white font-mono text-xs hover:bg-white/20 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {errorMessage && (
                      <div className="p-3 rounded-xl bg-red-950/50 border border-red-500/50 text-red-300 text-xs font-medium">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-300 block">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. John Doe / Tech Recruiter"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                          required
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono text-slate-300 block">
                          Your Email *
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">
                        Inquiry Subject / Topic
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white text-xs focus:border-cyan-400 focus:outline-none transition-colors"
                      >
                        <option value="Full-Time PHP / Laravel Role">Full-Time PHP / Laravel Role</option>
                        <option value="Full Stack Developer Opportunity">Full Stack Developer Opportunity</option>
                        <option value="Custom CMS / Project Discussion">Custom CMS / Project Discussion</option>
                        <option value="General Technical Inquiry">General Technical Inquiry</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 block">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell me about your role, project requirements, or team..."
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-white/15 text-white placeholder-slate-500 text-xs focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:shadow-lg hover:shadow-blue-500/30 text-white font-bold text-xs tracking-wide transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <span>Preparing Message...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

          </div>
        </div>

        {/* 4-Column Footer Navigation & Specifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-16 border-b border-white/10 text-sm">
          
          {/* Column 1: Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 font-bold tracking-tight text-white">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-mono text-xs font-bold shadow-md shadow-blue-500/30">
                SK
              </div>
              <span className="font-bold text-base">Kongalla Srisailam</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Full Stack Developer specializing in PHP, Laravel, CodeIgniter, MySQL, and modern web application development.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-Time Roles</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
              Navigation Index
            </h4>
            <ul className="space-y-2 font-mono text-xs text-slate-400">
              <li>
                <a href="#sec-hero" className="hover:text-cyan-400 transition-colors">
                  00 // Home & Profile
                </a>
              </li>
              <li>
                <a href="#sec-about" className="hover:text-cyan-400 transition-colors">
                  01 // About & Background
                </a>
              </li>
              <li>
                <a href="#sec-projects" className="hover:text-cyan-400 transition-colors">
                  02 // Project Case Studies
                </a>
              </li>
              <li>
                <a href="#sec-skills" className="hover:text-cyan-400 transition-colors">
                  03 // Technical Skills
                </a>
              </li>
              <li>
                <a href="#sec-experience" className="hover:text-cyan-400 transition-colors">
                  04 // Work Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Featured Case Studies */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
              Featured Case Studies
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="hover:text-slate-200 transition-colors">
                • Chhota Bheem Website & Custom CMS
              </li>
              <li className="hover:text-slate-200 transition-colors">
                • Employee Helpdesk / Ticketing System
              </li>
              <li className="hover:text-slate-200 transition-colors">
                • Real Estate Property Listing Platform
              </li>
              <li className="hover:text-slate-200 transition-colors">
                • B2B E-Commerce & Multi-Vendor Engine
              </li>
            </ul>
          </div>

          {/* Column 4: Quick Contact & Downloads */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
              Direct Contact
            </h4>
            <div className="p-4 rounded-2xl linear-card text-xs font-mono text-slate-400 space-y-2">
              <div>
                <span className="text-slate-500 block">Email:</span>
                <a href="mailto:kongallasrisailam931@gmail.com" className="text-white hover:text-cyan-400 transition-colors">
                  kongallasrisailam931@gmail.com
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">Phone:</span>
                <a href="tel:+919381695637" className="text-white hover:text-cyan-400 transition-colors">
                  +91 9381695637
                </a>
              </div>
              <div>
                <span className="text-slate-500 block">Resume:</span>
                <a
                  href="/Kongalla_Srisailam_Resume.pdf"
                  download="Kongalla_Srisailam_Resume.pdf"
                  className="text-cyan-400 font-bold hover:underline"
                >
                  Download PDF Resume
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © {currentYear} Kongalla Srisailam. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Built with Next.js 14, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
