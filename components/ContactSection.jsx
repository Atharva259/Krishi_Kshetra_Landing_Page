'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Mail, 
  ArrowRight, 
  MessageCircle, 
  Loader2, 
  Globe, 
  User, 
  Handshake, 
  CheckSquare 
} from 'lucide-react';

export default function ContactSection() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    // Web3Forms Access Key
    formData.append("access_key", "933cb07e-2362-4b76-9d6a-eaa78e2d0f67");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();

      if (data.success) {
        e.target.reset();
        router.push('/thank-you');
      } else {
        alert("Please set your Web3Forms Access Key in the code to receive emails.");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappNumber = "919421190585";
  const whatsappMessage = encodeURIComponent("Hi Krishi Kshetra! I'd like to discuss a partnership.");

  const supportAreas = [
    "Incubation Support",
    "Technical Mentorship",
    "Product Development Guidance",
    "Pilot Deployment Support",
    "Industry Partnerships",
    "Infrastructure Access"
  ];

  return (
    <section id="contact" className="py-28 relative z-10 overflow-hidden bg-[#041a0f] border-t border-white/5">
      {/* Background Decorative Blurs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-brand-emerald/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT COLUMN: Founder Brief & Support Areas */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-emerald/10 border border-brand-emerald/30 text-brand-emerald mb-6">
                <Handshake size={12} className="text-brand-emerald" />
                <span>VENTURE PARTNERSHIPS</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-6">
                Partner With <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-emerald to-teal-400">KRISHI SHETRA</span>
              </h2>
              
              <p className="text-gray-400 text-base leading-relaxed">
                Seeking incubation, mentorship, pilot deployment opportunities, and technical guidance.
              </p>
            </div>

            {/* Founder Contact Details Card */}
            <div className="glass-card p-6 border border-white/5 bg-white/[0.01] rounded-2xl space-y-4 hover:border-brand-emerald/20 transition-all duration-300">
              <h3 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">Venture Representation</h3>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-emerald to-teal-500 p-[2px] shadow-md shadow-brand-emerald/10">
                  <div className="w-full h-full bg-[#041a0f] rounded-full flex items-center justify-center font-black text-white text-sm">
                    AA
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white flex items-center gap-2">
                    <User size={16} className="text-brand-emerald" />
                    Atharva Anand
                  </h4>
                  <p className="text-brand-emerald text-xs font-semibold">Founder & Lead Engineer</p>
                </div>
              </div>

              <div className="space-y-2 border-t border-white/5 pt-4 text-xs font-mono">
                <div className="flex items-center gap-2.5 text-gray-400">
                  <Mail size={14} className="text-brand-emerald" />
                  <a href="mailto:atharva.anand1679@gmail.com" className="hover:text-white transition-colors">
                    atharva.anand1679@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-2.5 text-gray-400">
                  <Globe size={14} className="text-brand-emerald" />
                  <a href="https://krishi-kshetra.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    krishi-kshetra.vercel.app
                  </a>
                </div>
              </div>
            </div>

            {/* Support Areas Checklist */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest">Incubation & Growth Requirements</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {supportAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckSquare size={16} className="text-brand-emerald shrink-0" />
                    <span className="font-medium text-xs">{area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Web3Forms Form */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-card p-8 md:p-10 border border-white/5 bg-white/[0.01] rounded-2xl relative overflow-hidden shadow-xl">
              <h3 className="text-xl font-bold text-white mb-6">Send Partnership Proposal</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="Full Name" 
                      className="w-full bg-[#041a0f]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">Your Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder="Email Address" 
                      className="w-full bg-[#041a0f]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold font-mono text-gray-500 uppercase tracking-wider mb-2">Collaboration Request</label>
                  <textarea 
                    name="message"
                    required
                    rows="4"
                    placeholder="Describe how your incubator, cooperative, or venture can guide Krishi Kshetra..." 
                    className="w-full bg-[#041a0f]/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-emerald focus:ring-1 focus:ring-brand-emerald transition-all text-sm resize-none"
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 bg-brand-emerald hover:bg-brand-forest text-[#041a0f] hover:text-white shadow-[0_0_20px_rgba(16,185,129,0.15)] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <Loader2 size={18} className="animate-spin text-white" />
                    ) : (
                      <>
                        <Mail size={18} />
                        Send Proposal
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>

                  <a 
                    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-white/5 hover:bg-white/10 border border-brand-emerald/30 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer text-sm"
                  >
                    <MessageCircle size={18} className="text-[#25D366]" />
                    Chat on WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
