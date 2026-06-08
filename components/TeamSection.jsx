'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Shield, Award, User } from 'lucide-react';

export default function TeamSection() {
  const [showAgePopup, setShowAgePopup] = useState(false);
  const team = [
    {
      name: "Atharva Anand",
      role: "Founder",
      bio: "Leading core hardware schematics, embedded firmware development, and venture operations. Architecting the product vision and investor relations.",
      responsibilities: ["Product Vision", "Embedded Systems", "Software Development", "Business Development"],
      initials: "AA",
      gradient: "from-emerald-500 via-teal-500 to-emerald-600",
      linkedin: "#",
      github: "https://github.com/Atharva259",
      mail: "mailto:atharva.anand1679@gmail.com"
    },
    {
      name: "Nihar Dudhabaware",
      role: "Co-Founder",
      bio: "Directing operational workflows, quality assurance procedures, and client relations. Managing product lifecycle support and field hardware compliance.",
      responsibilities: ["Operations", "Product Support", "Testing"],
      initials: "ND",
      gradient: "from-teal-500 via-emerald-400 to-teal-600",
      linkedin: "#",
      github: "https://github.com/masternihar9847-dot",
      mail: "mailto:masternihar9847@gmail.com"
    },
    {
      name: "Angad",
      role: "Co-Founder",
      bio: "Spearheading agronomic research, agricultural dataset compilation, and multi-soil testing configurations. Coordinating telemetry validation in test plots.",
      responsibilities: ["Field Validation", "Data Collection", "Testing Support"],
      initials: "A",
      gradient: "from-emerald-600 via-teal-400 to-emerald-400",
      linkedin: "#",
      github: "https://github.com/angad659",
      mail: "mailto:angad659@gmail.com"
    }
  ];

  return (
    <section id="team" className="py-28 relative z-10 overflow-hidden bg-[#041a0f]">
      {/* Background Subtle Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-brand-emerald/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-forest/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald mb-6"
          >
            <Shield size={12} className="text-brand-emerald" />
            <span>ORGANIZATIONAL LEADERSHIP</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-6"
          >
            Founding <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-emerald to-teal-400">Team</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg md:text-xl leading-relaxed"
          >
            Meet the engineers and innovators driving sustainable agriculture through automation and telemetry validation.
          </motion.p>
        </div>

        {/* Founder Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: 'spring', stiffness: 80, damping: 15 }}
              className="glass-card p-8 flex flex-col justify-between relative group overflow-hidden border border-white/5 bg-white/[0.02] rounded-2xl hover:border-brand-emerald/30 transition-all duration-300 shadow-xl"
            >
              {/* Card Hover Glow Backing */}
              <div className="absolute inset-0 bg-gradient-to-b from-brand-emerald/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div>
                
                {/* Tech HUD Avatar Container */}
                <div className="flex justify-center mb-8 relative">
                  
                  {/* Decorative Outer HUD Ring */}
                  <div className="absolute inset-0 w-32 h-32 rounded-full border border-brand-emerald/20 border-dashed animate-[spin_30s_linear_infinite] mx-auto pointer-events-none scale-110 opacity-60 group-hover:scale-105 transition-transform duration-500" />
                  
                  {/* Glowing Backing Ring */}
                  <div className={`w-28 h-28 rounded-full bg-gradient-to-tr ${member.gradient} p-[3px] shadow-[0_0_15px_rgba(16,185,129,0.1)] group-hover:shadow-[0_0_25px_rgba(16,185,129,0.3)] transition-all duration-300 relative z-10`}>
                    
                    {/* Inner avatar container */}
                    <div className="w-full h-full bg-[#041a0f] rounded-full flex flex-col items-center justify-center relative overflow-hidden group">
                      
                      {/* Avatar Initials */}
                      <span className="text-3xl font-black tracking-wider bg-clip-text text-transparent bg-gradient-to-br from-white to-gray-300 select-none">
                        {member.initials}
                      </span>
                      
                      {/* Sub-label under initials in avatar */}
                      <User size={14} className="text-brand-emerald/50 absolute bottom-3" />
                      
                      {/* Scanline overlay effect */}
                      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none" />
                    </div>
                  </div>

                  {/* Leadership Badge */}
                  <div className="absolute bottom-0 bg-brand-emerald/20 border border-brand-emerald/50 backdrop-blur-md rounded-full px-2.5 py-0.5 z-20 shadow-lg flex items-center gap-1">
                    <Award size={10} className="text-brand-emerald" />
                    <span className="text-[9px] font-bold tracking-widest text-brand-emerald uppercase font-mono">Founding</span>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-emerald transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-brand-emerald text-sm font-semibold tracking-wider uppercase mt-1">
                    {member.role}
                  </p>
                </div>

                {/* Short Bio */}
                <p className="text-gray-400 text-sm leading-relaxed text-center mb-6 min-h-[60px]">
                  {member.bio}
                </p>

                {/* Responsibilities Tags */}
                <div className="mb-8 border-t border-white/5 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 text-center">Core Focus Areas</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.responsibilities.map((resp, i) => (
                      <span 
                        key={i} 
                        className="text-[11px] font-semibold px-2.5 py-1 rounded bg-brand-emerald/10 border border-brand-emerald/15 text-brand-emerald hover:bg-brand-emerald/20 transition-colors duration-200"
                      >
                        {resp}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Action Links */}
              <div className="flex justify-center gap-4 border-t border-white/5 pt-6 mt-auto">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    setShowAgePopup(true);
                  }}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-emerald/20 hover:border-brand-emerald/40 transition-all duration-300 cursor-pointer"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <a 
                  href={member.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-emerald/20 hover:border-brand-emerald/40 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                </a>
                <a 
                  href={member.mail} 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-emerald/20 hover:border-brand-emerald/40 transition-all duration-300"
                  aria-label="Email Member"
                >
                  <Mail size={18} />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {showAgePopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowAgePopup(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md cursor-pointer"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card max-w-sm w-full p-8 border border-brand-emerald/30 bg-[#041a0f]/90 rounded-2xl relative shadow-[0_0_55px_rgba(16,185,129,0.25)] text-center cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center mx-auto mb-6 text-brand-emerald">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">LinkedIn Profile Restricted</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                LinkedIn profiles are unavailable for our young founders (ages 13–14) due to LinkedIn's minimum age requirements.
              </p>
              <button 
                onClick={() => setShowAgePopup(false)}
                className="w-full py-3 rounded-xl bg-brand-emerald hover:bg-brand-forest text-white font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] cursor-pointer"
              >
                Acknowledge
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
