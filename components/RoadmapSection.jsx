'use client';

import { motion } from 'framer-motion';
import { 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Rocket, 
  BrainCircuit, 
  FileCheck,
  Check,
  Zap,
  Clock
} from 'lucide-react';

export default function RoadmapSection() {
  const milestones = [
    {
      date: "May 2026",
      title: "Prototype Development",
      status: "completed",
      statusText: "Completed",
      desc: "Hardware schematic design, sensor validations (capacitive moisture), relay pump test configurations, and low-power hardware testing.",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      date: "June 2026",
      title: "Dashboard Integration & Circuit Stabilization",
      status: "active",
      statusText: "In Progress",
      desc: "Configuring real-time telemetry streaming via Firebase/MQTT. Engineering bypass circuits and ESD shielding to isolate motor surges.",
      icon: <Terminal className="w-5 h-5" />
    },
    {
      date: "July 2026",
      title: "Prototype Validation & Field Testing",
      status: "planned",
      statusText: "Planned",
      desc: "Conducting laboratory verification and initiating multi-soil field trials on cooperative test beds to validate sensor calibration.",
      icon: <ShieldCheck className="w-5 h-5" />
    },
    {
      date: "August 2026",
      title: "Pilot Deployment",
      status: "planned",
      statusText: "Planned",
      desc: "Deploying multi-node smart mesh network devices in rural agriculture clusters. Validating physical deployment durability.",
      icon: <Rocket className="w-5 h-5" />
    },
    {
      date: "September 2026",
      title: "AI Advisory Development",
      status: "planned",
      statusText: "Planned",
      desc: "Training predictive modeling scripts utilizing evapotranspiration metrics and local weather APIs for precision schedule algorithms.",
      icon: <BrainCircuit className="w-5 h-5" />
    },
    {
      date: "October 2026",
      title: "Commercial Readiness Preparation",
      status: "planned",
      statusText: "Planned",
      desc: "Finalizing custom casing tooling, regulatory safety certifications, and preparing commercial investor decks (TRL 7/8 scale).",
      icon: <FileCheck className="w-5 h-5" />
    }
  ];

  return (
    <section id="roadmap" className="py-28 relative z-10 overflow-hidden bg-[#041a0f]">
      {/* Background aesthetics */}
      <div className="absolute top-1/2 left-0 right-0 h-[300px] bg-brand-emerald/5 rounded-full blur-[130px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald mb-6"
          >
            <Clock size={12} className="text-brand-emerald" />
            <span>PROJECTED DEVELOPMENT PIPELINE</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-6"
          >
            Development <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-emerald to-teal-400">Roadmap</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
          >
            A high-level overview of our technical milestones leading to commercialization and scalable pilot deployments.
          </motion.p>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW: Horizontal Timeline (Visible on md and up)                 */}
        {/* ========================================================================= */}
        <div className="hidden lg:block relative py-10">
          
          {/* Connector Line Background */}
          <div className="absolute top-[48px] left-[5%] right-[5%] h-1 bg-white/10 rounded-full z-0" />
          
          {/* Filled Connector Line (25% progress from Step 1 to Step 2) */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "23%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute top-[48px] left-[5%] h-1 bg-gradient-to-r from-brand-emerald to-teal-400 rounded-full z-0 shadow-[0_0_10px_rgba(16,185,129,0.5)]" 
          />

          <div className="grid grid-cols-6 gap-6 relative z-10">
            {milestones.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-center group"
              >
                {/* Visual Node circle */}
                <div className="mb-8 relative">
                  
                  {/* Outer glow ring for active node */}
                  {step.status === 'active' && (
                    <div className="absolute -inset-2 rounded-full bg-teal-500/20 border border-teal-400/40 animate-ping" />
                  )}

                  <div className={`w-14 h-14 rounded-full border-2 flex items-center justify-center transition-all duration-300 relative z-10 shadow-lg ${
                    step.status === 'completed' ? 'bg-brand-emerald border-brand-emerald text-[#041a0f]' :
                    step.status === 'active' ? 'bg-teal-500 border-teal-400 text-white animate-pulse' :
                    'bg-[#05180f] border-white/10 text-gray-500 group-hover:border-white/30'
                  }`}>
                    {step.status === 'completed' ? <Check className="w-5 h-5 stroke-[3]" /> : step.icon}
                  </div>
                </div>

                {/* Glassmorphic Milestone Card */}
                <div className="glass-card w-full p-5 border border-white/5 bg-white/[0.01] rounded-xl group-hover:border-brand-emerald/20 transition-all duration-300 flex flex-col justify-between min-h-[260px] relative">
                  <div>
                    {/* Status Badge */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-mono font-bold text-brand-emerald uppercase tracking-wider">{step.date}</span>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                        step.status === 'completed' ? 'bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald' :
                        step.status === 'active' ? 'bg-teal-500/10 border-teal-500/20 text-teal-400' :
                        'bg-white/5 border-white/10 text-gray-500'
                      }`}>
                        {step.statusText}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-white mb-2 leading-tight group-hover:text-brand-emerald transition-colors duration-300">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-400 text-xs leading-relaxed mt-2 min-h-[90px] border-t border-white/5 pt-3">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW: Vertical Timeline (Visible on screens below lg)            */}
        {/* ========================================================================= */}
        <div className="lg:hidden relative">
          
          {/* Connector Line (Vertical) */}
          <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-white/10 z-0" />
          
          {/* Filled Connector Line (Mobile) */}
          <div className="absolute left-8 top-8 w-0.5 bg-gradient-to-b from-brand-emerald to-teal-400 z-0" style={{ height: "20%" }} />

          <div className="space-y-10 relative z-10">
            {milestones.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="flex items-start gap-6"
              >
                {/* Node Circle */}
                <div className="relative shrink-0 mt-1">
                  {step.status === 'active' && (
                    <div className="absolute -inset-1.5 rounded-full bg-teal-500/25 animate-ping" />
                  )}
                  
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-md ${
                    step.status === 'completed' ? 'bg-brand-emerald border-brand-emerald text-[#041a0f]' :
                    step.status === 'active' ? 'bg-teal-500 border-teal-400 text-white' :
                    'bg-[#05180f] border-white/10 text-gray-500'
                  }`}>
                    {step.status === 'completed' ? <Check className="w-4 h-4 stroke-[3]" /> : step.icon}
                  </div>
                </div>

                {/* Milestone Detail Card */}
                <div className="glass-card flex-1 p-6 border border-white/5 bg-white/[0.01] rounded-xl hover:border-brand-emerald/20 transition-all duration-300">
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-brand-emerald uppercase tracking-wider">{step.date}</span>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border uppercase tracking-wider ${
                      step.status === 'completed' ? 'bg-brand-emerald/10 border-brand-emerald/20 text-brand-emerald' :
                      step.status === 'active' ? 'bg-teal-500/10 border-teal-500/20 text-teal-400' :
                      'bg-white/5 border-white/10 text-gray-500'
                    }`}>
                      {step.statusText}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-3 mt-3">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
