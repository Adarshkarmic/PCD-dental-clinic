'use client';
import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="w-full pt-16 md:pt-32 pb-12 px-4 md:px-12 lg:px-24 border-t border-white/5 relative overflow-hidden">
      
      {/* Huge CTA Section */}
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center mb-20 md:mb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <span className="uppercase tracking-[0.4em] text-xs font-bold text-zinc-500 block mb-6">Begin Your Transformation</span>
          <h2 className="text-4xl md:text-5xl lg:text-8xl font-light text-white tracking-tighter leading-none mb-12">
            Book a Private <br/>
            <span className="font-bold italic text-zinc-300">Consultation.</span>
          </h2>
          <button className="group relative px-8 py-4 md:px-10 md:py-5 bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-300 tracking-[0.2em] uppercase text-xs md:text-sm font-bold rounded-full overflow-hidden inline-flex items-center gap-4 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(255,255,255,0.3)]">
            <span>Schedule Appointment</span>
            <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
        </motion.div>
      </div>

      {/* Grid Links Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10 relative z-10 text-center md:text-left">
        
        {/* Col 1: Brand */}
        <div className="flex flex-col space-y-4 md:space-y-6 items-center md:items-start">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
            <span className="text-xl font-bold tracking-widest text-white uppercase">PDC<span className="font-light text-zinc-500">CLINIC</span></span>
          </div>
          <p className="text-zinc-500 text-sm font-light leading-relaxed max-w-xs mx-auto md:mx-0">
            Where biological science meets architectural precision. We sculpt the world's most flawless smiles.
          </p>
        </div>

        {/* Col 2: The Clinic */}
        <div className="flex flex-col space-y-4 md:space-y-6">
          <h4 className="text-white font-bold tracking-widest uppercase text-xs">The Clinic</h4>
          <ul className="space-y-3 md:space-y-4 text-sm font-light text-zinc-500">
            <li>123 Luxury Avenue, Suite 500<br/>Beverly Hills, CA 90210</li>
            <li><a href="#" className="hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-0.5">VIP Line: +1 (800) 555-SMILE</a></li>
            <li><a href="#" className="hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-0.5">concierge@pdcclinic.com</a></li>
          </ul>
        </div>

        {/* Col 3: Expertise */}
        <div className="flex flex-col space-y-4 md:space-y-6 items-center md:items-start">
          <h4 className="text-white font-bold tracking-widest uppercase text-xs">Expertise</h4>
          <ul className="space-y-3 md:space-y-4 text-sm font-light text-zinc-500 flex flex-col items-center md:items-start">
            <li><a href="#" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-white after:transition-all">Ultra-Thin Veneers</a></li>
            <li><a href="#" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-white after:transition-all">3D Implantology</a></li>
            <li><a href="#" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-white after:transition-all">Full Mouth Rehabilitation</a></li>
            <li><a href="#" className="hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 hover:after:w-full after:bg-white after:transition-all">Laser Whitening</a></li>
          </ul>
        </div>

        {/* Col 4: Hours */}
        <div className="flex flex-col space-y-6">
          <h4 className="text-white font-bold tracking-widest uppercase text-xs">Access</h4>
          <ul className="space-y-4 text-sm font-light text-zinc-500">
            <li className="uppercase tracking-widest text-[10px] text-zinc-400">Strictly By Appointment Only</li>
            <li>Mon - Thu: 10:00 AM – 4:00 PM</li>
            <li>Fri - Sun: Exclusive VIP Bookings</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between mt-8 text-xs font-light text-zinc-600 relative z-10">
        <p>© {new Date().getFullYear()} PDC Clinic. All rights reserved.</p>
        
        <div className="flex items-center space-x-8 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
            Instagram
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
          </a>
        </div>
      </div>

    </footer>
  );
}
