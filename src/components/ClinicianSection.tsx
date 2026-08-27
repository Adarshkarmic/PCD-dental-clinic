'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function ClinicianSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="relative w-full py-16 md:py-32 px-4 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Image (Portrait) */}
        <motion.div 
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
          whileInView={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full md:w-1/2 relative"
        >
          <div className="aspect-[3/4] max-w-md mx-auto relative rounded-3xl overflow-hidden group">
            {/* Dark gradient overlay at bottom for name */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent z-10"></div>
            
            <motion.img 
              style={{ y: yImage, scale: 1.15 }}
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1000&auto=format&fit=crop" 
              alt="Lead Doctor Portrait" 
              className="absolute inset-0 object-cover w-full h-full filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000"
            />
            
            {/* Name Plate inside Image */}
            <div className="absolute bottom-8 left-8 right-8 z-20 overflow-hidden">
              <motion.h3 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="text-3xl font-bold text-white tracking-tight"
              >
                Dr. Julian Vance
              </motion.h3>
              <motion.p 
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="text-zinc-400 text-sm tracking-[0.2em] uppercase mt-2"
              >
                Master Clinician & Founder
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          
          <div className="overflow-hidden">
            <motion.div 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-[1px] bg-white/30"></div>
              <span className="uppercase tracking-[0.3em] text-xs font-light text-zinc-400">The Architect of Smiles</span>
            </motion.div>
          </div>

          <div className="overflow-hidden py-1">
            <motion.h2 
              initial={{ y: "100%", filter: "blur(10px)", opacity: 0 }}
              whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl md:text-5xl font-light text-white leading-[1.1] tracking-tight"
            >
              Pioneering the future of <br/>
              <span className="font-bold">aesthetic dentistry.</span>
            </motion.h2>
          </div>

          <div className="space-y-6 text-zinc-400 font-light leading-relaxed">
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                With over 15 years of exclusive focus on full-mouth rehabilitation and aesthetic reconstruction, Dr. Vance is globally recognized not just as a clinician, but as an artist.
              </motion.p>
            </div>
            <div className="overflow-hidden">
              <motion.p
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                He lectures internationally on the integration of 3D facial scanning with ultra-thin porcelain veneers, ensuring every patient leaves with a smile that is biologically sound and architecturally perfect.
              </motion.p>
            </div>
          </div>
          
          {/* Credentials/Stats */}
          <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10 mt-8">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              >
                <div className="text-3xl font-bold text-white mb-1">10k+</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest">Smiles Restored</div>
              </motion.div>
            </div>
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              >
                <div className="text-3xl font-bold text-white mb-1">AACD</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest">Accredited Fellow</div>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
