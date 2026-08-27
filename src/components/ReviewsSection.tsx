'use client';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  {
    text: "I flew in from London specifically for Dr. Vance. The level of precision and the absolute painlessness of the procedure was unlike anything I have ever experienced. True artistry.",
    author: "E. Kensington",
    role: "Venture Capitalist"
  },
  {
    text: "The concierge team handled everything from my hotel to the private car. The clinic feels like a 5-star spa. My porcelain veneers look incredibly natural, yet completely flawless.",
    author: "A. Sterling",
    role: "Actor"
  },
  {
    text: "I had severe dental anxiety for decades. The sleep dentistry option combined with their serene environment completely changed my life. I woke up to a perfect smile.",
    author: "M. Rothschild",
    role: "Philanthropist"
  }
];

export function ReviewsSection() {
  return (
    <section className="relative w-full py-16 md:py-32 px-4 md:px-12 lg:px-24 overflow-hidden border-t border-white/5">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="overflow-hidden">
            <motion.span 
              initial={{ y: "100%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="uppercase tracking-[0.3em] text-xs font-light text-zinc-400 block mb-4"
            >
              Patient Stories
            </motion.span>
          </div>
          <div className="overflow-hidden py-2">
            <motion.h2 
              initial={{ y: "100%", filter: "blur(10px)", opacity: 0 }}
              whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-4xl md:text-5xl font-light text-white tracking-tight"
            >
              Words from our <span className="font-bold">Clients</span>
            </motion.h2>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, filter: "blur(10px)", scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: idx * 0.2 }}
              className="bg-transparent border border-white/5 p-10 rounded-[2rem] flex flex-col justify-between hover:bg-white/[0.02] hover:border-white/10 transition-all duration-500 shadow-2xl shadow-black/50"
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-zinc-300 font-light leading-relaxed mb-10 text-lg italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
                  <span className="text-white text-xs font-bold">{review.author.charAt(0)}</span>
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold tracking-wide">{review.author}</h4>
                  <span className="text-zinc-500 text-xs tracking-widest uppercase">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
