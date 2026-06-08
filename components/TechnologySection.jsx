'use client';

import { motion } from 'framer-motion';
import { Database, Waves, Power, Settings } from 'lucide-react';

export default function TechnologySection() {
  return (
    <section id="technology" className="py-24 relative z-10 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">System <span className="text-brand-emerald">Architecture</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A seamless integration of hardware sensors, microcontrollers, and relay automation designed for maximum efficiency.
          </p>
        </div>

        {/* Animated Architecture Diagram */}
        <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 p-8 glass-card">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-white/10 -translate-y-1/2 z-0">
             <div className="h-full bg-brand-emerald w-full animate-[pulse-slow_3s_ease-in-out_infinite] shadow-[0_0_15px_rgba(16,185,129,0.5)]"></div>
          </div>

          {[
            { icon: <Database />, title: "Soil Sensor", data: "Analog/Digital Input" },
            { icon: <Settings />, title: "Controller", data: "Logic Processing" },
            { icon: <Power />, title: "Relay Module", data: "Circuit Automation" },
            { icon: <Waves />, title: "Water Pump", data: "Precision Dispensing" }
          ].map((node, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center group"
            >
              <div className="w-24 h-24 rounded-2xl bg-[#05160E] border border-brand-emerald/30 shadow-[0_0_20px_rgba(16,185,129,0.1)] flex items-center justify-center text-white mb-4 group-hover:bg-brand-emerald group-hover:border-brand-emerald transition-all duration-300">
                <div className="scale-150 group-hover:scale-125 transition-transform duration-300">
                  {node.icon}
                </div>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">{node.title}</h4>
              <span className="text-xs font-mono text-brand-emerald bg-brand-emerald/10 px-3 py-1 rounded-full">
                {node.data}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
