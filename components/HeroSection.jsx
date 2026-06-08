'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Activity } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-emerald/20 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-forest/20 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-brand-emerald/30">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-emerald"></span>
            </span>
            <span className="text-sm font-medium text-brand-emerald">Next-Gen AgriTech Infrastructure</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8">
            Autonomous <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-brand-emerald via-green-400 to-brand-forest">
              Smart Irrigation.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed font-medium">
            Krishi Kshetra builds scalable, IoT-driven robotics and sustainable water conservation systems for the future of rural agriculture.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#technology" className="px-8 py-4 rounded-full bg-brand-emerald hover:bg-brand-forest text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]">
              Explore Technology
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="https://github.com/Atharva259/krishi-kshetra-website" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 border-white/20">
              <Code size={20} />
              View GitHub
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full max-w-lg"
        >
          {/* Abstract Tech Visual */}
          <div className="relative aspect-square rounded-full border border-white/5 bg-gradient-to-br from-brand-emerald/5 to-transparent flex items-center justify-center p-8">
            <div className="absolute inset-0 rounded-full border border-brand-emerald/20 animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-8 rounded-full border border-white/10 animate-[spin_15s_linear_infinite_reverse]"></div>
            
            <div className="glass-card w-full h-full rounded-full flex flex-col items-center justify-center p-8 text-center relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-emerald to-transparent opacity-50"></div>
               <Activity size={48} className="text-brand-emerald mb-4" />
               <h3 className="text-2xl font-bold text-white mb-2">Live Telemetry</h3>
               <p className="text-sm text-gray-400">99.9% Sensor Accuracy</p>
               
               {/* Mock Data Lines */}
               <div className="mt-8 w-full space-y-3">
                 <div className="flex justify-between text-xs font-mono text-brand-emerald">
                   <span>SOIL_MOISTURE</span>
                   <span>64.2%</span>
                 </div>
                 <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                   <div className="h-full bg-brand-emerald w-[64%] shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
                 </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
