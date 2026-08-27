"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Navbar } from "@/components/Navbar";
import { TreatmentSidebar } from "@/components/TreatmentSidebar";
import { PhilosophySection } from "@/components/PhilosophySection";
import { GallerySection } from "@/components/GallerySection";
import { ClinicianSection } from "@/components/ClinicianSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ConciergeSection } from "@/components/ConciergeSection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

// Industry-level optimization: Lazy load the heavy 3D engine on the client-side only
const MouthScene = dynamic(() => import("@/components/MouthScene"), { ssr: false });

export default function Home() {
  const [activeTreatment, setActiveTreatment] = useState<number | null>(null);

  return (
    <main className="flex flex-col bg-black">
      <Navbar />
      {/* SECTION 1: HERO (Minimal & Bold) */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-black z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[75%_center] md:object-center opacity-60 pointer-events-none"
        >
          <source src="/Dentist_performing_dental_procedure_1080p_202608202357.mp4" type="video/mp4" />
        </video>
        
        {/* Radial Gradient overlay for cinematic dark vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.7)_100%)] pointer-events-none" />

        {/* Content Wrapper */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Premium High-Ticket Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="flex flex-col items-center drop-shadow-2xl"
          >
            <span className="text-xl md:text-3xl font-light text-zinc-300 tracking-[0.4em] uppercase mb-2">The Art of</span>
            <span className="text-5xl md:text-8xl font-bold text-white tracking-tighter leading-none uppercase">Perfect Smiles</span>
          </motion.h1>
          
          {/* Sub-text (Inspiration se inspired par zyada sleek) */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="text-zinc-300 mt-8 text-lg md:text-xl max-w-2xl font-light tracking-wide leading-relaxed"
          >
            We go beyond traditional dentistry. Experience world-class compassionate care combined with cutting-edge 3D technology, designed for your absolute comfort.
          </motion.p>
          
          {/* 2 Premium Buttons (Awesome & Aligned) */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
            <button className="group relative px-8 py-4 bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-300 tracking-[0.2em] uppercase text-xs font-bold rounded-full overflow-hidden flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.5)]">
              <span>Discover Your Smile</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
            <button className="px-8 py-4 border border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 hover:border-white/40 transition-all duration-300 tracking-[0.2em] uppercase text-xs font-bold rounded-full">
              Explore Treatments
            </button>
          </div>
        </div>
      </section>

      {/* Section 2: 3D Model with Interactive Sidebar */}
      {/* Mobile: Stacked (50vh Canvas, 50vh Sidebar). Desktop: Full screen with absolute overlay */}
      <section className="w-full h-screen relative overflow-hidden flex flex-col md:block">

        {/* Subtle grid pattern for extra luxury texture */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 z-0 pointer-events-none"></div>

        {/* 3D Canvas Container */}
        {/* Mobile: Top half. Desktop: Full screen absolute */}
        <div className="relative md:absolute inset-0 h-[60vh] md:h-full w-full cursor-grab active:cursor-grabbing z-0">
          <MouthScene activeTreatment={activeTreatment} />
        </div>

        {/* Sidebar Container */}
        {/* Mobile: Bottom half with scroll. Desktop: Full screen overlay */}
        <div className="relative z-10 w-full flex-1 md:h-full md:absolute md:inset-0 pointer-events-none overflow-y-auto md:overflow-hidden">
          <TreatmentSidebar active={activeTreatment} setActive={setActiveTreatment} />
        </div>
        
      </section>

        {/* New Sections */}
        <PhilosophySection />
        <GallerySection />
        <ClinicianSection />
        <ReviewsSection />
        <ConciergeSection />
        <Footer />
        
    </main>
  );
}