'use client';

import { motion } from 'framer-motion';
import { Terminal, Star, GitFork, BookOpen } from 'lucide-react';

export default function GithubSection() {
  const repos = [
    {
      name: "krishi-kshetra-smart-irrigation",
      desc: "Core C++ and Python logic for embedded microcontroller sensors and relay triggers.",
      stars: 124,
      forks: 32,
      lang: "C++",
      url: "https://github.com/Atharva259"
    },
    {
      name: "krishi-kshetra-website",
      desc: "The open-source Next.js frontend repository driving this investor-grade landing page.",
      stars: 89,
      forks: 14,
      lang: "TypeScript",
      url: "https://github.com/Atharva259/krishi-kshetra-website"
    }
  ];

  return (
    <section id="github" className="py-24 relative z-10 bg-[#05160E]/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 border-brand-emerald/30">
            <Terminal size={16} className="text-brand-emerald" />
            <span className="text-sm font-medium text-brand-emerald">Open Innovation</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Open Source <span className="text-brand-emerald">Development</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We believe in collaborative engineering. Explore our public repositories and technical documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {repos.map((repo, idx) => (
            <motion.a 
              key={idx}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 group cursor-pointer block no-underline"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <BookOpen className="text-brand-emerald" size={24} />
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-emerald transition-colors">{repo.name}</h3>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed min-h-[40px]">
                {repo.desc}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-emerald"></div>
                  {repo.lang}
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} />
                  {repo.stars}
                </div>
                <div className="flex items-center gap-1">
                  <GitFork size={14} />
                  {repo.forks}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
