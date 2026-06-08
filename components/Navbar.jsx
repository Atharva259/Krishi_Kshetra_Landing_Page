'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#041a0f]/80 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl shadow-black/50' : 'bg-transparent py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg overflow-hidden p-1">
            <Image src="/logo.jpeg" alt="Krishi Kshetra Logo" width={40} height={40} className="w-full h-full object-contain" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Krishi <span className="text-brand-emerald">Kshetra</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['About', 'Story', 'Features', 'Impact', 'Technology', 'Prototype', 'Gallery', 'Roadmap'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {item}
            </a>
          )) }
          <a href="#contact" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-brand-emerald/20 border border-white/10 hover:border-brand-emerald/50 text-white text-sm font-medium transition-all duration-300">
            Partner With Us
          </a>
        </div>

        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-[#041a0f]/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {['About', 'Story', 'Features', 'Impact', 'Technology', 'Prototype', 'Gallery', 'Roadmap'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-gray-300 hover:text-white py-2"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="mt-4 text-center px-5 py-3 rounded-xl bg-brand-emerald text-white font-medium">
            Partner With Us
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
