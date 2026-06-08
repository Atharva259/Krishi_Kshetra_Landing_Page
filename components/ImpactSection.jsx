'use client';

import { motion } from 'framer-motion';
import { 
  Droplet, 
  Activity, 
  Zap, 
  TrendingUp, 
  Coins, 
  Leaf, 
  Globe,
  Compass,
  CheckCircle
} from 'lucide-react';

export default function ImpactSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: 'spring', stiffness: 90, damping: 14 } 
    }
  };

  const sdgs = [
    {
      goal: "SDG 2",
      title: "Zero Hunger",
      desc: "Promoting food security by optimizing crop health and water management.",
      color: "border-amber-500/20 text-amber-400 bg-amber-500/5"
    },
    {
      goal: "SDG 6",
      title: "Clean Water & Sanitation",
      desc: "Reducing agricultural water extraction by optimizing root-level moisture supply.",
      color: "border-blue-500/20 text-blue-400 bg-blue-500/5"
    },
    {
      goal: "SDG 9",
      title: "Industry, Innovation & Infrastructure",
      desc: "Deploying scalable IoT networks and embedded controls in rural fields.",
      color: "border-orange-500/20 text-orange-400 bg-orange-500/5"
    },
    {
      goal: "SDG 12",
      title: "Responsible Consumption",
      desc: "Ensuring sustainable resource use through automated scheduling.",
      color: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5"
    }
  ];

  const impactCards = [
    {
      title: "Reduced Water Wastage",
      desc: "Closed-loop micro-irrigation logic delivers hydration directly to the root zone, preventing surface runoff, deep percolation, and evaporation.",
      icon: <Droplet className="text-emerald-400" size={22} />,
      vector: "Resource Management",
      accent: "from-emerald-500 to-teal-500"
    },
    {
      title: "Improved Irrigation Efficiency",
      desc: "Automation triggers pumps based on real-time soil requirements rather than arbitrary timers, ensuring optimal moisture balance.",
      icon: <Activity className="text-teal-400" size={22} />,
      vector: "Agronomic Precision",
      accent: "from-teal-500 to-emerald-400"
    },
    {
      title: "Lower Electricity Consumption",
      desc: "By eliminating unnecessary pump run times, the system reduces agricultural grid load and lowers monthly utility overheads.",
      icon: <Zap className="text-emerald-400" size={22} />,
      vector: "Operational Cost",
      accent: "from-emerald-600 to-teal-400"
    },
    {
      title: "Improved Agricultural Productivity",
      desc: "Consistent, threshold-backed moisture conditions prevent crop hydration stress, supporting healthy root systems and maximizing yield potential.",
      icon: <TrendingUp className="text-teal-400" size={22} />,
      vector: "Yield Optimization",
      accent: "from-teal-400 to-emerald-400"
    },
    {
      title: "Affordable Farm Automation",
      desc: "Utilizing cost-effective microcontrollers and localized sensor nodes to make precision irrigation accessible without capital-heavy installations.",
      icon: <Coins className="text-emerald-400" size={22} />,
      vector: "Cost Accessibility",
      accent: "from-emerald-500 via-teal-500 to-emerald-600"
    },
    {
      title: "Support for Sustainable Farming",
      desc: "Promotes conservation-oriented farming practices, preventing soil erosion, salinization, and supporting long-term ecological balance.",
      icon: <Leaf className="text-teal-400" size={22} />,
      vector: "Ecological Support",
      accent: "from-teal-500 to-emerald-500"
    }
  ];

  return (
    <section id="impact" className="py-28 relative z-10 overflow-hidden bg-[#041a0f] border-t border-white/5">
      {/* Background Decorative Rings & Blurs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-emerald/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald mb-6"
          >
            <Compass size={12} className="text-brand-emerald" />
            <span>SUSTAINABILITY & ALIGNMENT</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-6"
          >
            Expected <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-emerald to-teal-400">Impact</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
          >
            Aligning technological innovation with sustainable agriculture metrics and resource conservation frameworks.
          </motion.p>
        </div>

        {/* SDG Badges Panel (Incubator & Accelerator Alignment) */}
        <div className="mb-20">
          <h3 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest text-center mb-8">
            United Nations SDG Core Alignment
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdgs.map((sdg, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border backdrop-blur-sm flex flex-col justify-between hover:scale-[1.02] transition-all duration-300 ${sdg.color}`}
              >
                <div>
                  <span className="text-xs font-bold font-mono tracking-widest uppercase opacity-75">{sdg.goal}</span>
                  <h4 className="text-lg font-black text-white mt-1 mb-3">{sdg.title}</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed font-medium">
                  {sdg.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 6-Card Impact Dashboard Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {impactCards.map((card, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              className="glass-card p-8 border border-white/5 bg-white/[0.01] rounded-2xl flex flex-col justify-between hover:border-brand-emerald/30 hover:bg-white/[0.03] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Card top gradient border effect */}
              <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${card.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div>
                
                {/* Header & Icon */}
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-emerald group-hover:text-[#041a0f] transition-all duration-300 shrink-0">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-bold font-mono text-brand-emerald bg-brand-emerald/10 border border-brand-emerald/15 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {card.vector}
                  </span>
                </div>

                {/* Card Title */}
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-brand-emerald transition-colors duration-300">
                  {card.title}
                </h4>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 font-medium">
                  {card.desc}
                </p>

              </div>

              {/* Qualitative Benchmark Indicator */}
              <div className="border-t border-white/5 pt-4 flex items-center gap-2 text-xs text-brand-emerald font-semibold">
                <CheckCircle size={14} className="text-brand-emerald" />
                <span>Qualitative Target Validated</span>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
