import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Thank You | Krishi Kshetra',
  description: 'Thank you for reaching out to Krishi Kshetra.',
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#041a0f] relative overflow-hidden px-6">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-emerald/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-lg glass-card p-10 md:p-14 text-center border-brand-emerald/30 shadow-[0_0_50px_rgba(16,185,129,0.15)]">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-brand-emerald/10 border border-brand-emerald/30 flex items-center justify-center text-brand-emerald shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <CheckCircle size={40} />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Message <span className="text-brand-emerald">Received</span></h1>
        
        <p className="text-lg text-gray-400 mb-10 leading-relaxed">
          Thank you for reaching out. Our team will review your inquiry and get back to you shortly to discuss the future of AgriTech.
        </p>
        
        <Link 
          href="/" 
          className="inline-flex items-center justify-center gap-2 px-8 py-4 w-full sm:w-auto rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-brand-emerald/50 text-white font-semibold transition-all duration-300"
        >
          <ArrowLeft size={18} />
          Return to Platform
        </Link>
      </div>
    </main>
  );
}
