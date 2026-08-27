"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const halfViewport = window.innerHeight * 0.5;
      
      if (currentScrollY < halfViewport) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div 
        className={`fixed left-1/2 -translate-x-1/2 z-[60] transition-all duration-500 ease-in-out ${
          isVisible || isMobileMenuOpen ? "top-4 sm:top-6 opacity-100" : "-top-20 opacity-0"
        } w-[90%] sm:w-auto max-w-2xl`}
      >
        <nav className="flex items-center justify-between gap-4 sm:gap-8 px-4 sm:px-6 py-3 rounded-full bg-black/40 sm:bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl w-full">
          
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 font-bold text-white tracking-widest cursor-pointer hover:opacity-80 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 shrink-0">
              <path d="M10 20.5c0 0-2-2.5-2-5.5v-1a4 4 0 0 1 8 0v1c0 3-2 5.5-2 5.5" />
              <path d="M14 20.5c0 0 2-2.5 2-5.5v-1a4 4 0 0 0-8 0v1c0 3 2 5.5 2 5.5" />
              <path d="M4 14V9a5 5 0 0 1 10 0" />
              <path d="M20 14V9a5 5 0 0 0-10 0" />
            </svg>
            <span className="hidden sm:inline whitespace-nowrap">PDC CLINIC</span>
            <span className="sm:hidden tracking-[0.2em] whitespace-nowrap">PDC</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-sm font-light text-zinc-200">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Procedures</a>
            <a href="#" className="hover:text-white transition-colors">Clinic</a>
          </div>

          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <button className="bg-white text-black px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest hover:scale-105 transition-transform">
              Book
            </button>
            
            {/* Mobile Hamburger Menu Toggle */}
            <button 
              className="md:hidden text-white p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-light tracking-[0.2em] text-zinc-300">
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">HOME</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">ABOUT</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">PROCEDURES</a>
              <a href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-white transition-colors">CLINIC</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
