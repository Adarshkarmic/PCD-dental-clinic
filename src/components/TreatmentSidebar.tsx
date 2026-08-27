"use client";
import { useState } from "react";

const treatments = [
  // LEFT COLUMN (Pathologies & Infections)
  {
    name: "Dental Caries (Micro-Decay)",
    problem: "Acidic byproducts from bacterial plaque demineralize the enamel, exposing the highly sensitive dentin layer underneath.",
    cure: "Minimally Invasive Laser Restoration"
  },
  {
    name: "Advanced Periodontitis",
    problem: "Hardened calculus below the gumline causes chronic inflammation, leading to severe gum recession and jaw bone loss.",
    cure: "LANAP® Laser Therapy & Tissue Regeneration"
  },
  {
    name: "Endodontic Infection",
    problem: "Deep bacterial penetration infects the tooth's neural core, causing severe radiating pain and risk of an abscess.",
    cure: "Microscopic Endodontics (GentleWave®)"
  },
  
  // RIGHT COLUMN (Structural & Aesthetics)
  {
    name: "Enamel Attrition (Bruxism)",
    problem: "Chronic teeth grinding strips away the protective enamel shield, causing severe thermal sensitivity and compromised aesthetics.",
    cure: "Ultra-Thin Porcelain Veneers"
  },
  {
    name: "Edentulism & Bone Resorption",
    problem: "A missing tooth root causes the surrounding jawbone to shrink rapidly, destabilizing adjacent healthy teeth.",
    cure: "3D-Guided Zirconia Implants (All-on-4®)"
  },
  {
    name: "Gingival Recession",
    problem: "Genetics or aggressive brushing cause the gum tissue to pull back, exposing the vulnerable and highly sensitive tooth root.",
    cure: "Pinhole® Surgical Technique (PST)"
  }
];

type TreatmentSidebarProps = {
  active: number | null;
  setActive: (index: number | null) => void;
};

export function TreatmentSidebar({ active, setActive }: TreatmentSidebarProps) {
  const leftTreatments = treatments.slice(0, 3);
  const rightTreatments = treatments.slice(3, 6);

  const renderCard = (t: any, index: number) => {
    const isActive = active === index;
    return (
      <div
        key={index}
        onClick={() => setActive(isActive ? null : index)}
        className={`p-5 rounded-2xl backdrop-blur-md border cursor-pointer transition-all duration-500 ease-in-out pointer-events-auto group ${
          isActive
            ? "bg-white/10 border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20"
        }`}
      >
        {/* Title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              isActive ? "bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.8)] scale-125" : "bg-zinc-600 group-hover:bg-zinc-400"
            }`} />
            <h3
              className={`font-semibold tracking-widest uppercase transition-all duration-300 ${
                isActive ? "text-white text-sm" : "text-zinc-300 text-xs"
              }`}
            >
              {t.name}
            </h3>
          </div>
          {/* Expand Icon */}
          <svg
            className={`w-4 h-4 text-zinc-500 transition-transform duration-500 ${
              isActive ? "rotate-180 text-white" : "group-hover:text-zinc-300"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>

        {/* Expandable Content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isActive ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
          }`}
        >
          <p className="text-zinc-400 text-xs leading-relaxed">{t.problem}</p>
          
          <div className="mt-4 pt-4 border-t border-white/10">
            <span className="text-[10px] text-blue-400/90 uppercase tracking-widest font-bold block mb-1">
              Premium Cure
            </span>
            <p className="text-zinc-200 text-sm font-medium tracking-wide">
              {t.cure}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative md:absolute md:inset-0 z-10 flex flex-col md:flex-row md:items-center md:justify-between px-4 py-8 md:py-0 md:px-8 pointer-events-none gap-6 md:gap-0">
      {/* Left Column (or Top on mobile) */}
      <div className="flex flex-col gap-4 w-full md:w-[22rem]">
        {leftTreatments.map((t, i) => (
          <div id={`card-${i}`} key={i} className="pointer-events-auto">
            {renderCard(t, i)}
          </div>
        ))}
      </div>

      {/* Right Column (or Bottom on mobile) */}
      <div className="flex flex-col gap-4 w-full md:w-[22rem]">
        {rightTreatments.map((t, i) => (
          <div id={`card-${i + 3}`} key={i + 3} className="pointer-events-auto">
            {renderCard(t, i + 3)}
          </div>
        ))}
      </div>
    </div>
  );
}
