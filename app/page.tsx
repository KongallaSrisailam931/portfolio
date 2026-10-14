import Navbar from "@/components/Navbar";
import HeroCursorMask from "@/components/HeroCursorMask";
import InfiniteMarquee from "@/components/InfiniteMarquee";
import IdentitySection from "@/components/IdentitySection";
import WorkShowcase from "@/components/WorkShowcase";
import AchievementsCarousel from "@/components/AchievementsCarousel";
import TechStackSection from "@/components/TechStackSection";
import ServicesSection from "@/components/ServicesSection";
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

      {/* Section 01: Identity, Engineering Philosophy & Animated Metrics */}
      <IdentitySection />

      {/* Section 02: Selected Work with Interactive Auto-Scroll Carousel & 3D Grid */}
      <WorkShowcase />

      {/* Auto-Playing Key Production Achievements & Enterprise Milestones Carousel */}
      <AchievementsCarousel />

      {/* Section 03: Tech Stack & Ecosystem with 3D Illustration & Floating Badges */}
      <TechStackSection />

      {/* Section 04: Services Offered & High-Impact Capabilities */}
      <ServicesSection />

      {/* Section 05: Cinematic Dark Footer & Direct Communication Channels */}
      <CinematicFooter />
    </main>
  );
}
