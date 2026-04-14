'use client';

import { personalInfo } from '@/lib/data';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm font-medium text-zinc-300 text-center">
            Built by <span className="font-name italic text-amber-400 text-xl md:text-2xl ml-1">{personalInfo.name}</span>
            <span className="block mt-1 text-zinc-500">(adi-makes)</span>
          </p>
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
            Next.js · Tailwind · Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a href={`https://github.com/${personalInfo.github}`} target="_blank" className="text-zinc-500 hover:text-amber-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" className="text-zinc-500 hover:text-amber-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="text-zinc-500 hover:text-amber-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="flex items-center gap-8">
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-widest hover:text-amber-400 transition-colors group"
          >
            Back to Top
            <ArrowUp className="w-3 h-3 group-hover:-translate-y-1 transition-transform" />
          </button>
          <p className="text-xs font-mono text-zinc-600 uppercase tracking-widest flex items-center gap-1.5">
            <span className="text-lg leading-none">©</span> {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
