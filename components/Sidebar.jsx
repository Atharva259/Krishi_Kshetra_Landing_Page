'use client';

import { Home, LayoutDashboard, Droplets, Wallet, Bot, MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function Sidebar() {
  const navItems = [
    { name: 'Home', icon: <Home size={18} />, href: '#', active: false },
    { name: 'Dashboard', icon: <LayoutDashboard size={18} />, href: '#', active: false },
    { name: 'Irrigation Control', icon: <Droplets size={18} />, href: '#', active: false },
    { name: 'Budget Planner', icon: <Wallet size={18} />, href: '#', active: false },
    { name: 'AI Assistant', icon: <Bot size={18} />, href: '#', active: false },
    { name: 'Community', icon: <MessageSquare size={18} />, href: '#', active: false },
  ];

  return (
    <aside className="w-64 bg-[#f8fafc] border-r border-slate-200 hidden md:flex flex-col h-full shrink-0">
      <div className="p-6">
        {/* Logo is in Topbar per screenshot, but leaving padding here */}
      </div>
      
      <nav className="flex-1 px-4 space-y-1 overflow-y-auto">
        {navItems.map((item, idx) => (
          <Link 
            key={idx} 
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
              item.active 
                ? 'bg-brand-emerald/10 text-brand-emerald' 
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
      
      {/* Small dark avatar circle at bottom left seen in screenshot */}
      <div className="p-4 border-t border-slate-200">
         <div className="w-8 h-8 rounded-full bg-[#1e293b] flex items-center justify-center text-white text-xs font-bold shadow-md">
           N
         </div>
      </div>
    </aside>
  );
}
