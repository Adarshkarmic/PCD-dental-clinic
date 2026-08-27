'use client';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const galleryCases = [
  {
    id: "caries",
    title: "Dental Caries",
    treatment: "Laser Restoration",
    beforeImg: "/disease_before_images/Dental Caries.jpg",
    afterImg: "/disease_after_images/Dental Caries.jpeg",
    patient: "Indian Male, 35"
  },
  {
    id: "attrition",
    title: "Enamel Attrition",
    treatment: "Porcelain Veneers",
    beforeImg: "/disease_before_images/Enamel Attrition.jpg",
    afterImg: "/disease_after_images/Enamel Attrition.jpeg",
    patient: "Caucasian Female, 28"
  },
  {
    id: "periodontitis",
    title: "Periodontitis",
    treatment: "Laser Gum Therapy",
    beforeImg: "/disease_before_images/Advanced Periodontitis.jpg",
    afterImg: "/disease_after_images/Advanced Periodontitis.jpeg",
    patient: "African American Male, 55"
  },
  {
    id: "recession",
    title: "Gingival Recession",
    treatment: "Tissue Grafting",
    beforeImg: "/disease_before_images/Gingival Recession.jpg",
    afterImg: "/disease_after_images/Gingival Recession.jpeg",
    patient: "East Asian Female, 45"
  },
  {
    id: "edentulism",
    title: "Edentulism",
    treatment: "Premium Implants",
    beforeImg: "/disease_before_images/Edentulism.jpg",
    afterImg: "/disease_after_images/Edentulism.jpeg",
    patient: "Middle Eastern Male, 65"
  },
  {
    id: "infection",
    title: "Endodontic Infection",
    treatment: "Ceramic Crown",
    beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000&auto=format&fit=crop",
    patient: "Hispanic Female, 32"
  }
];

export function GallerySection() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  
  const activeCase = galleryCases[activeCaseIndex];

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  return (
    <section className="relative w-full py-16 md:py-32 px-4 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-10"
        >
          <span className="uppercase tracking-[0.3em] text-xs font-light text-zinc-400 block mb-4">The Gallery</span>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Masterpieces of <span className="font-bold">Restoration</span>
          </h2>
        </motion.div>

        {/* Gallery Tabs */}
        <div className="flex overflow-x-auto gap-2 md:gap-4 mb-10 w-full max-w-5xl pb-4 px-2 snap-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {galleryCases.map((c, i) => (
            <button 
              key={c.id}
              onClick={() => { setActiveCaseIndex(i); setSliderPosition(50); }}
              style={{ animationDelay: `${i * 0.4}s` }}
              className={`animate-float snap-center shrink-0 px-6 py-3 rounded-full text-xs md:text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                activeCaseIndex === i 
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]" 
                  : "bg-white/5 text-zinc-400 border border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        {/* Before/After Slider */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full max-w-5xl aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-[0_0_50px_rgba(0,0,0,0.5)] group animate-float"
          style={{ animationDelay: "1s" }}
          ref={containerRef}
          onMouseDown={(e) => { setIsDragging(true); handleMove(e.clientX); }}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onMouseMove={onMouseMove}
          onTouchStart={(e) => { setIsDragging(true); handleMove(e.touches[0].clientX); }}
          onTouchEnd={() => setIsDragging(false)}
          onTouchMove={onTouchMove}
        >
          {/* After Image (Background) */}
          <div className="absolute inset-0">
            <img 
              key={`after-${activeCase.id}`}
              src={activeCase.afterImg} 
              alt={`After: ${activeCase.treatment}`} 
              className="object-cover w-full h-full pointer-events-none"
              draggable="false"
            />
            <div className="absolute bottom-6 right-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-white text-xs tracking-widest uppercase font-bold flex flex-col items-end">
              <span>After: {activeCase.treatment}</span>
              <span className="text-[10px] text-zinc-400 font-normal mt-1">{activeCase.patient}</span>
            </div>
          </div>

          {/* Before Image (Clipped overlay) */}
          <div 
            className="absolute inset-0"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              key={`before-${activeCase.id}`}
              src={activeCase.beforeImg} 
              alt={`Before: ${activeCase.title}`} 
              className={`object-cover w-full h-full pointer-events-none ${activeCase.id === 'infection' ? 'filter grayscale sepia-[0.3] contrast-75 brightness-90' : ''}`}
              draggable="false"
            />
            <div className="absolute bottom-6 left-6 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full border border-white/10 text-zinc-300 text-xs tracking-widest uppercase">
              Before
            </div>
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)] pointer-events-none"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 backdrop-blur-xl border border-white/50 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <div className="w-1 h-4 border-l border-r border-white/70 mx-1"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
