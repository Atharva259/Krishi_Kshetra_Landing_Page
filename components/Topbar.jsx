'use client';

import { Leaf, Moon } from 'lucide-react';
import Link from 'next/link';

export default function Topbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 shrink-0 w-full absolute top-0 left-0 z-10">
      <div className="flex items-center gap-2">
        <div className="text-brand-emerald">
          <Leaf size={24} />
        </div>
        <span className="text-xl font-bold tracking-tight text-brand-emerald">
          Krishi Kshetra
        </span>
      </div>

      <div className="flex items-center gap-6">
        <button className="text-slate-500 hover:text-slate-900 transition-colors">
          <Moon size={20} />
        </button>
        
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Login
          </Link>
          <Link href="#" className="text-sm font-medium bg-brand-emerald hover:bg-brand-forest text-white px-5 py-2 rounded-md transition-colors shadow-sm">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
