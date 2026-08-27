'use client';
import { motion } from 'framer-motion';
import { Car, Headphones, ShieldCheck, Syringe } from 'lucide-react';

const conciergeFeatures = [
  {
    icon: <Syringe className="w-6 h-6 text-cyan-400" />,
    title: "Sleep Dentistry",
    description: "Complete your entire treatment in absolute comfort while you sleep under the care of our board-certified anesthesiologists."
  },
  {
    icon: <Car className="w-6 h-6 text-cyan-400" />,
    title: "Chauffeur Service",
    description: "Complimentary black-car service to and from our clinic for our VIP and out-of-town patients."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    title: "Absolute Privacy",
    description: "Dedicated private suites, VIP entrances, and strict confidentiality protocols for high-profile clients."
  },
  {
    icon: <Headphones className="w-6 h-6 text-cyan-400" />,
    title: "Sensory Control",
    description: "Bose noise-canceling headphones, curated playlists, and ambient aromatherapy to eliminate clinical stress."
  }
];

export function ConciergeSection() {
  return (
    <section className="relative w-full py-16 md:py-32 px-4 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Text */}
        <div className="w-full lg:w-1/3 flex flex-col space-y-6">
          <div className="overflow-hidden">
            <motion.div 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center space-x-4"
            >
              <div className="w-12 h-[1px] bg-white/30"></div>
              <span className="uppercase tracking-[0.3em] text-xs font-light text-zinc-400">The VIP Experience</span>
            </motion.div>
          </div>

          <div className="overflow-hidden py-2">
            <motion.h2 
              initial={{ y: "100%", filter: "blur(10px)", opacity: 0 }}
              whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl md:text-5xl font-light text-white leading-[1.1] tracking-tight"
            >
              5-Star <br/>
              <span className="font-bold">Concierge Care.</span>
            </motion.h2>
          </div>
          
          <div className="overflow-hidden">
            <motion.p 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-zinc-400 font-light leading-relaxed"
            >
              We have engineered every touchpoint to feel less like a clinical visit and more like a retreat at a luxury resort. Anxiety is replaced with absolute tranquility.
            </motion.p>
          </div>
        </div>

        {/* Right Bento Grid */}
        <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {conciergeFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)", scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.15 }}
              className="bg-transparent border border-white/5 p-8 rounded-3xl hover:bg-white/[0.02] hover:border-white/10 transition-all duration-300 shadow-2xl shadow-black/50"
            >
              <div className="w-12 h-12 bg-zinc-900/50 rounded-2xl flex items-center justify-center mb-6 border border-white/5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 tracking-wide">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed font-light">{feature.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
