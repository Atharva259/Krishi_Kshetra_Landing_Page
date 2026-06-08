'use client';

import { motion } from 'framer-motion';
import { Droplet, DollarSign, Users, Target, ShieldAlert, Cpu } from 'lucide-react';

export default function StorySection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 80, damping: 15 } 
    }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: 'spring', stiffness: 80, damping: 15 } 
    }
  };

  const challenges = [
    {
      icon: <Droplet className="text-emerald-400" size={20} />,
      title: "Water Inefficiency",
      desc: "Widespread overwatering deprives crops of aeration and depletes vital water tables.",
      metric: "60% Water Target Saved"
    },
    {
      icon: <DollarSign className="text-teal-400" size={20} />,
      title: "Escalating Power Bills",
      desc: "Unregulated pump activation increases electricity usage and overhead costs.",
      metric: "Reduced Energy Bills"
    },
    {
      icon: <Users className="text-emerald-400" size={20} />,
      title: "Labor Constraints",
      desc: "Heavy dependency on manual farm operations causes timing and coverage errors.",
      metric: "24/7 Automated Cycle"
    }
  ];

  return (
    <section id="story" className="py-28 relative z-10 overflow-hidden bg-[#041a0f] border-t border-white/5">
      {/* Decorative background grid and blurs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LEFT COLUMN: Visuals & Structural Challenge Specs */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-6"
          >
            <motion.div variants={itemVariants} className="text-left mb-2">
              <span className="text-xs font-mono font-bold text-brand-emerald uppercase tracking-wider block mb-2">
                THE CHALLENGES WE RESOLVE
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight">
                Addressing Agricultural Inefficiencies
              </h3>
            </motion.div>

            <div className="space-y-4">
              {challenges.map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="glass-card p-6 border border-white/5 bg-white/[0.01] rounded-2xl flex gap-5 items-start hover:border-brand-emerald/20 hover:bg-white/[0.03] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-brand-emerald group-hover:text-[#041a0f] transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex justify-between items-center gap-2 mb-1.5">
                      <h4 className="text-base font-extrabold text-white">{item.title}</h4>
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-brand-emerald/10 border border-brand-emerald/20 text-brand-emerald uppercase font-mono">
                        {item.metric}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div 
              variants={itemVariants}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-3.5 text-xs text-gray-400"
            >
              <ShieldAlert size={18} className="text-brand-emerald shrink-0" />
              <span>Engineered specifically to solve real physical bottlenecks rather than marketing metrics.</span>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: The Story Narrative & Big Typography */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={rightVariants}
            className="lg:col-span-7 space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald mb-6">
                <Target size={12} className="text-brand-emerald" />
                <span>FOUNDER STORY & ORIGIN</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.05]">
                Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-emerald to-teal-400">KRISHI KSHETRA</span> <br />
                Was Started
              </h2>
            </div>

            {/* Narrative text block with elegant layout and large typography */}
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              
              {/* Problem/Creation sentence */}
              <div className="border-l-4 border-brand-emerald pl-6 py-1">
                <p className="font-extrabold text-white text-xl md:text-2xl leading-snug">
                  KRISHI KSHETRA was created to address water wastage and irrigation inefficiencies faced by small and medium-scale farmers.
                </p>
              </div>

              {/* The Context */}
              <p className="text-base text-gray-400">
                Many farmers still rely on manual irrigation methods that lead to excess water consumption, increased electricity costs, and labour dependency.
              </p>

              {/* Grid showing Vision and Mission cards for professional presentation */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                
                <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-brand-emerald/10 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded bg-brand-emerald/10 flex items-center justify-center border border-brand-emerald/20">
                      <Cpu size={14} className="text-brand-emerald" />
                    </div>
                    <h4 className="text-sm font-black text-white uppercase tracking-wider">The Vision</h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">
                    To make intelligent agricultural automation accessible and affordable for farmers who cannot invest in expensive precision agriculture systems.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-teal-500/10 transition-colors duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded bg-teal-500/10 flex items-center justify-center border border-teal-500/20">
                      <Target size={14} className="text-teal-400" />
                    </div>
                    <h4 className="text-sm font-black text-white uppercase tracking-wider">The Mission</h4>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">
                    To improve irrigation efficiency, support sustainable farming, and reduce resource wastage through practical technology.
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
