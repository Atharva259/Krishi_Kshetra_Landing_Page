'use client';

import { motion } from 'framer-motion';
import { Droplet, Leaf, Cpu } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            <div className="absolute inset-0 bg-brand-emerald/20 blur-[100px] rounded-full"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(16,185,129,0.15)] group">
              <div className="absolute inset-0 bg-gradient-to-t from-[#041a0f] via-transparent to-transparent z-10 opacity-80"></div>
              <Image 
                src="/about-robotics.jpg" 
                alt="Agricultural Robotics" 
                width={800} 
                height={800} 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 z-20">
                <div className="px-4 py-2 rounded-full glass-panel border-brand-emerald/30 inline-flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></div>
                  <span className="text-xs font-bold text-brand-emerald tracking-wider uppercase">Krishi Kshetra AI V1.2</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Redefining <br/>
              <span className="text-brand-emerald">Sustainable</span> Farming
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Krishi Kshetra merges agricultural traditions with cutting-edge robotics. 
              We are engineering autonomous systems to optimize water usage, enhance crop yield, and empower rural AgriTech innovation.
            </p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="space-y-6"
            >
              {[
                {
                  icon: <Droplet className="text-brand-emerald" size={24} />,
                  title: "Smart Irrigation",
                  desc: "IoT-driven sensors monitor real-time soil hydration to prevent water waste."
                },
                {
                  icon: <Cpu className="text-brand-emerald" size={24} />,
                  title: "Agricultural Automation",
                  desc: "Embedded systems replace manual labor with 24/7 automated farm management."
                },
                {
                  icon: <Leaf className="text-brand-emerald" size={24} />,
                  title: "Water Optimization",
                  desc: "Achieve up to 60% reduction in water consumption through algorithms."
                }
              ].map((feature, idx) => (
                <motion.div key={idx} variants={itemVariants} className="glass-card p-6 flex gap-6 items-start group">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-emerald/10 border border-brand-emerald/20 flex items-center justify-center group-hover:bg-brand-emerald group-hover:text-[#041a0f] transition-all duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
