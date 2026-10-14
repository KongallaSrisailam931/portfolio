import Navbar from "@/components/Navbar";
import HeroCursorMask from "@/components/HeroCursorMask";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import IdentitySection from "@/components/IdentitySection";
import WorkShowcase from "@/components/WorkShowcase";
import TechStackSection from "@/components/TechStackSection";
import ExperienceSection from "@/components/ExperienceSection";
import CinematicFooter from "@/components/CinematicFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-blue-600 selection:text-white overflow-hidden">
      {/* Floating Glass Pill Navigation Header & Mobile Drawer */}
      <Navbar />

      {/* Hero Section with Liquid Cursor Reveal Mask */}
      <HeroCursorMask />

      {/* Dual Auto-Scrolling Tech Stack & Platform Marquee Ticker */}
      <InfiniteMarquee />

      {/* Section 01: Identity, Engineering Philosophy & Factual Metrics (#sec-about) */}
      <IdentitySection />

      {/* Section 02: Selected Work Showcase & 7-Part Detailed Case Studies (#sec-projects) */}
      <WorkShowcase />

      {/* Section 03: Categorized Tech Stack & Ecosystem (#sec-skills) */}
      <TechStackSection />

      {/* Section 04: Chronological Professional Experience Timeline (#sec-experience) */}
      <ExperienceSection />

      {/* Section 05: Cinematic Dark Footer, Direct Contact Channels & PDF Resume (#sec-contact) */}
      <CinematicFooter />
    </main>
  );
}
