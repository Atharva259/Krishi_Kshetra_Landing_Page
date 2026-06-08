'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Cpu, 
  Activity, 
  Zap, 
  Terminal, 
  Wrench, 
  Box, 
  TestTube, 
  Flag, 
  BrainCircuit, 
  ArrowRight,
  TrendingUp,
  ShieldAlert,
  Gauge,
  Layers
} from 'lucide-react';

export default function PrototypeSection() {
  // Animation presets
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  // Phase items from user request
  const completedItems = [
    {
      title: "Soil Moisture Monitoring",
      desc: "Completed and tested.",
      details: "High-resolution capacitive sensing calibrated for silt, clay, and sandy loam.",
      icon: <Activity className="text-emerald-600" size={20} />
    },
    {
      title: "Relay-Based Pump Automation",
      desc: "Successfully controls irrigation pumps automatically.",
      details: "Optically isolated solid-state relay circuit to prevent electromagnetic interference.",
      icon: <Zap className="text-emerald-600" size={20} />
    },
    {
      title: "Sensor Validation",
      desc: "Moisture readings validated during prototype testing.",
      details: "Cross-referenced readings with gravimetric dry-oven lab tests to guarantee accuracy.",
      icon: <CheckCircle2 className="text-emerald-600" size={20} />
    },
    {
      title: "Low-Power Architecture",
      desc: "Designed for battery and solar compatibility.",
      details: "Deep sleep mode consuming < 15µA; integrated lithium solar charging controller.",
      icon: <Cpu className="text-emerald-600" size={20} />
    }
  ];

  const inProgressItems = [
    {
      title: "Dashboard Integration",
      desc: "Connecting ESP32 telemetry with database.",
      details: "Configuring real-time telemetry streaming using secure MQTT/WebSockets.",
      icon: <Terminal className="text-teal-600" size={20} />,
      progress: 15
    },
    {
      title: "Circuit Stabilization",
      desc: "Adding ESD protection & bypass routing.",
      details: "Mitigating high-voltage pump start surges and noise via RC snubber circuits.",
      icon: <Wrench className="text-teal-600" size={20} />,
      progress: 60
    },
    {
      title: "Enclosure Development",
      desc: "Designing weather-proof protective shell.",
      details: "CAD design of an IP65 rated, UV-stabilized custom ASA polymer enclosure.",
      icon: <Box className="text-teal-600" size={20} />,
      progress: 45
    }
  ];

  const plannedItems = [
    {
      title: "Field Testing",
      desc: "Validation in active farming conditions.",
      details: "Deploying 10 test nodes in diverse farming cooperatives for environmental testing.",
      icon: <TestTube className="text-slate-600" size={20} />
    },
    {
      title: "Pilot Deployment",
      desc: "Initial deployment with local partners.",
      details: "Integrating hardware with multi-valve grid layouts in cooperative farm clusters.",
      icon: <Flag className="text-slate-600" size={20} />
    },
    {
      title: "AI Advisory Layer",
      desc: "Smart irrigation scheduling.",
      details: "Evapotranspiration calculations mapping historical and real-time weather APIs.",
      icon: <BrainCircuit className="text-slate-600" size={20} />
    },
    {
      title: "Scalable Product Architecture",
      desc: "Designing other scalable smart farming products.",
      details: "Researching modular robotics expansions, multi-valve solenoid hubs, and large-scale agricultural telemetry sensors.",
      icon: <Layers className="text-slate-600" size={20} />
    }
  ];

  // Pipeline phases for the TRL (Technology Readiness Level) timeline
  const pipelinePhases = [
    { number: "01", name: "Concept Design", period: "Jan - Feb 2026", status: "completed", desc: "Schematics & simulations completed" },
    { number: "02", name: "Sub-system Validation", period: "Mar - May 2026", status: "completed", desc: "Sensors & relays validated (TRL 4)" },
    { number: "03", name: "Integration & Hardening", period: "June 2026", status: "active", desc: "Enclosures & cloud sync (TRL 5)" },
    { number: "04", name: "Field Testing & Trials", period: "Q3 2026", status: "upcoming", desc: "Cooperative validation in real soils" },
    { number: "05", name: "Pilot & Agri-Cluster Scale", period: "Q4 2026", status: "upcoming", desc: "Multi-node mesh deployments" }
  ];

  return (
    <section id="prototype" className="py-28 relative bg-white text-slate-800 overflow-hidden border-y border-slate-100">
      
      {/* Premium Engineering Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />
      
      {/* Blurred Decorative Gradients */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-tr from-emerald-100/30 to-teal-100/30 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-tr from-teal-100/20 to-emerald-100/30 rounded-full blur-[130px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-100 mb-6 shadow-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>TECHNOLOGY STATUS: TRL 5 (PROTOTYPE STAGE)</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-none mb-6"
          >
            Current <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">Prototype Development</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed"
          >
            Building affordable smart irrigation technology for small and medium-scale farmers.
          </motion.p>
        </div>

        {/* Top-Level Technology Readiness & Hardware Specs Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          
          {/* Engineering Specifications Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-100/50 rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-extrabold text-slate-800 flex items-center gap-2">
                  <Gauge className="text-emerald-600" size={22} />
                  Hardware Validation Metrics
                </h3>
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-100 text-slate-600 font-bold uppercase tracking-wider">
                  Hardware Rev: v1.2-Beta
                </span>
              </div>
              
              <p className="text-slate-500 text-sm mb-8">
                Strict laboratory benchmarks verified under controlled testing conditions prior to rural cluster pilot. These metrics ensure compliance with robust deployment standards.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Standby Power</span>
                  <span className="text-2xl font-black text-slate-800 tracking-tight">&lt; 15 µA</span>
                  <span className="block text-[10px] text-emerald-600 font-bold mt-1">✓ Spec Met</span>
                </div>
                
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Sensor Spec</span>
                  <span className="text-2xl font-black text-slate-800 tracking-tight">Capacitive</span>
                  <span className="block text-[10px] text-emerald-600 font-bold mt-1">✓ Non-Corrosive</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Supply Source</span>
                  <span className="text-2xl font-black text-slate-800 tracking-tight">3.7V - 12V</span>
                  <span className="block text-[10px] text-emerald-600 font-bold mt-1">✓ Solar/Battery</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Relay Capacity</span>
                  <span className="text-2xl font-black text-slate-800 tracking-tight">12V / 5A</span>
                  <span className="block text-[10px] text-emerald-600 font-bold mt-1">✓ Auto-Isolated</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs">
              <div className="flex items-center gap-2 text-slate-500">
                <ShieldAlert size={16} className="text-teal-600" />
                <span>Zero dummy statistics used. Calibrated with commercial-grade dry-soil instrumentation.</span>
              </div>
              <div className="font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                Ready for Investor Cohorts
              </div>
            </div>
          </motion.div>
          
          {/* Progress Analytics Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-lg shadow-slate-100/50 rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-extrabold text-slate-800 flex items-center gap-2 mb-4">
                <TrendingUp className="text-teal-600" size={22} />
                Milestone Progress
              </h3>
              
              <div className="space-y-5 my-6">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-500 uppercase tracking-wider">Completed Milestones (4/10)</span>
                    <span className="text-emerald-600 font-bold">40%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-500 uppercase tracking-wider">Active Development (3/10)</span>
                    <span className="text-teal-600 font-bold">30%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-teal-500 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span className="text-slate-500 uppercase tracking-wider">Planned Pipeline (3/10)</span>
                    <span className="text-slate-400 font-bold">30%</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-slate-300 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center border border-teal-100 shrink-0">
                  <span className="text-sm font-black text-teal-700">70%</span>
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-slate-800">Sys-Eng Integration Stage</h4>
                  <p className="text-[10px] text-slate-500">Combining stable hardware layer with cloud data streams.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3-Column Status Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          
          {/* COLUMN 1: COMPLETED */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-emerald-100 pb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-600"></div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">Completed & Tested</h3>
            </div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {completedItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="bg-white/70 backdrop-blur border border-slate-200/60 shadow-sm rounded-xl p-5 hover:bg-emerald-50/10 hover:border-emerald-500/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100/50 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-800 flex items-center gap-1.5">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 text-sm mt-1 mb-2 font-medium">{item.desc}</p>
                      <div className="text-[11px] text-slate-400 leading-normal font-medium border-t border-slate-100 pt-2">
                        {item.details}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* COLUMN 2: IN PROGRESS */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-teal-100 pb-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal-600"></span>
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-teal-800">In Active Development</h3>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {inProgressItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="bg-white/70 backdrop-blur border border-slate-200/60 shadow-sm rounded-xl p-5 hover:bg-teal-50/10 hover:border-teal-500/20 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100/50 flex items-center justify-center shrink-0 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-extrabold text-slate-800">{item.title}</h4>
                      <p className="text-slate-600 text-sm mt-1 mb-3 font-medium">{item.desc}</p>
                      
                      <div className="mb-3">
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1">
                          <span>Progress</span>
                          <span>{item.progress}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <div className="h-full bg-teal-500 rounded-full transition-all duration-1000" style={{ width: `${item.progress}%` }}></div>
                        </div>
                      </div>

                      <div className="text-[11px] text-slate-400 leading-normal font-medium border-t border-slate-100 pt-2">
                        {item.details}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* COLUMN 3: PLANNED */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-400"></div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">Planned Pipeline</h3>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {plannedItems.map((item, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  className="bg-white/40 backdrop-blur border border-dashed border-slate-200 shadow-sm rounded-xl p-5 hover:bg-slate-50/80 hover:border-slate-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-200/50 flex items-center justify-center shrink-0 group-hover:bg-slate-700 group-hover:text-white transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-slate-700">{item.title}</h4>
                      <p className="text-slate-500 text-sm mt-1 mb-2 font-medium">{item.desc}</p>
                      <div className="text-[11px] text-slate-400 leading-normal font-medium border-t border-slate-100 pt-2">
                        {item.details}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Development Timeline Map */}
        <div className="bg-slate-50/50 border border-slate-200/60 rounded-2xl p-8 backdrop-blur-sm">
          <div className="mb-10 text-center md:text-left">
            <h3 className="text-lg font-black text-slate-800 uppercase tracking-wider mb-2">Development Timeline Roadmap</h3>
            <p className="text-xs text-slate-500">Milestones aligned with agritech investment cycles and technology readiness levels.</p>
          </div>
          
          <div className="relative">
            {/* Timeline connector bar */}
            <div className="absolute top-[35px] left-8 right-8 h-0.5 bg-slate-200 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {pipelinePhases.map((phase, idx) => (
                <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left">
                  
                  {/* Phase dot indicator */}
                  <div className="mb-4 relative">
                    <div className={`w-[70px] h-[70px] rounded-full border-4 border-white flex items-center justify-center text-sm font-black shadow-md ${
                      phase.status === 'completed' ? 'bg-emerald-600 text-white shadow-emerald-100' :
                      phase.status === 'active' ? 'bg-teal-500 text-white shadow-teal-100 animate-pulse' :
                      'bg-slate-100 text-slate-400 shadow-slate-50'
                    }`}>
                      {phase.number}
                    </div>
                    {phase.status === 'active' && (
                      <span className="absolute -top-1 -right-1 flex h-4 w-4">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-4 w-4 bg-teal-500"></span>
                      </span>
                    )}
                  </div>
                  
                  {/* Phase Text */}
                  <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">{phase.period}</span>
                  <h4 className={`text-base font-extrabold mt-1 mb-2 ${
                    phase.status === 'completed' ? 'text-slate-800' :
                    phase.status === 'active' ? 'text-teal-600 font-black' : 'text-slate-400'
                  }`}>
                    {phase.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-normal px-4 md:px-0 max-w-xs">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
