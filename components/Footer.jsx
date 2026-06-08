import Image from 'next/image';
import { Code, MessageCircle, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#041a0f] border-t border-white/5 pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-0.5">
                <Image src="/logo.jpeg" alt="Krishi Kshetra" width={32} height={32} className="w-full h-full object-contain" />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Krishi <span className="text-brand-emerald">Kshetra</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm mb-6">
              Engineering autonomous irrigation, robotics, and smart farming systems for sustainable agriculture.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/Atharva259/krishi-kshetra-website" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-brand-emerald hover:border-brand-emerald/50 transition-all" aria-label="GitHub Repository">
                <Code size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-brand-emerald hover:border-brand-emerald/50 transition-all">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-brand-emerald hover:border-brand-emerald/50 transition-all">
                <Briefcase size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#technology" className="hover:text-brand-emerald transition-colors">Technology</a></li>
              <li><a href="#features" className="hover:text-brand-emerald transition-colors">Features</a></li>
              <li><a href="#roadmap" className="hover:text-brand-emerald transition-colors">Roadmap</a></li>
              <li><a href="#github" className="hover:text-brand-emerald transition-colors">Open Source</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-brand-emerald transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-brand-emerald transition-colors">Team</a></li>
              <li><a href="#contact" className="hover:text-brand-emerald transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-brand-emerald transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Krishi Kshetra. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>Designed for the Future of Farming.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
