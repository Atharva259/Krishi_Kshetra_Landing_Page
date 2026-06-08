'use client';

import { motion } from 'framer-motion';
import { Activity, CloudRain, ShieldCheck, Zap, Globe, Cpu } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    { icon: <Zap />, title: "Automated Irrigation", desc: "Self-regulating water delivery based on real-time soil analytics." },
    { icon: <Activity />, title: "Smart Monitoring", desc: "24/7 continuous health tracking for crop vitality and soil hydration." },
    { icon: <CloudRain />, title: "Water Conservation", desc: "Precision distribution algorithms minimizing agricultural water waste." },
    { icon: <Globe />, title: "Scalable AgriTech", desc: "Modular architecture designed for micro-farms to industrial operations." },
    { icon: <ShieldCheck />, title: "IoT Integration", desc: "Secure telemetry pipelines connecting edge sensors to cloud dashboards." },
    { icon: <Cpu />, title: "Future AI Expansion", desc: "Machine learning roadmap for predictive yield analysis and automated robotics." },
  ];

  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Core <span className="text-brand-emerald">Capabilities</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Built for resilience. Designed for scale. Krishi Kshetra delivers uncompromising performance in rural environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-brand-emerald/10 text-brand-emerald border border-brand-emerald/20">
                {item.icon}
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
