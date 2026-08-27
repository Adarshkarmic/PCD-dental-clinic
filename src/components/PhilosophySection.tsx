'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function PhilosophySection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={containerRef} className="relative w-full py-16 md:py-32 px-4 md:px-12 lg:px-24 overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Text */}
        <div className="flex flex-col space-y-8">
          <div className="overflow-hidden">
            <motion.div 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-[1px] bg-white/30"></div>
              <span className="uppercase tracking-[0.3em] text-xs font-light text-zinc-400">The Philosophy</span>
            </motion.div>
          </div>

          <div className="overflow-hidden py-1">
            <motion.h2 
              initial={{ y: "100%", filter: "blur(10px)", opacity: 0 }}
              whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl md:text-6xl font-light text-white leading-none tracking-tight"
            >
              Dentistry as a <br/>
              <span className="font-bold italic text-zinc-300">Fine Art.</span>
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <motion.p 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg"
            >
              We believe that a perfect smile is not just manufactured; it is sculpted. By combining architectural precision with biological harmony, we create results that are visually stunning and enduringly healthy.
            </motion.p>
          </div>

          <div className="overflow-hidden">
            <motion.p 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="text-zinc-500 text-sm font-light leading-relaxed max-w-lg"
            >
              Every procedure is planned meticulously using digital smile design (DSD) and ultra-high-resolution 3D facial scanning. The result is a bespoke smile tailored uniquely to your facial geometry.
            </motion.p>
          </div>
        </div>

        {/* Right Image with Parallax */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative h-[400px] md:h-[600px] w-full rounded-2xl overflow-hidden group"
        >
          <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-all duration-700 z-10"></div>
          
          <motion.img 
            style={{ y: yImage, scale: 1.15 }}
            src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=2000&auto=format&fit=crop" 
            alt="Luxury Dental Clinic" 
            className="absolute inset-0 object-cover w-full h-full filter grayscale hover:grayscale-0 transition-all duration-1000"
          />
        </motion.div>

      </div>
    </section>
  );
}
