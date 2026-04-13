'use client';

import { motion } from 'motion/react';
import { personalInfo } from '@/lib/data';
import { Mail, Linkedin, Github } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-xl font-bold font-mono text-amber-500 uppercase tracking-[0.3em] mb-12">Contact</h2>
          <h3 className="text-5xl md:text-7xl font-serif font-medium text-zinc-100 mb-8">Let&apos;s Build Something</h3>
          <p className="text-zinc-300 text-xl md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed">
            Open to internships, freelance projects, research collaborations, and full-time roles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="flex flex-col items-center gap-4 md:gap-6 p-6 md:p-10 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-all group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
                <Mail className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="text-base font-medium text-zinc-200">Email Me</span>
            </a>
            <a 
              href={`https://linkedin.com/in/${personalInfo.linkedin}`}
              target="_blank"
              className="flex flex-col items-center gap-4 md:gap-6 p-6 md:p-10 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-all group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
                <Linkedin className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="text-base font-medium text-zinc-200">LinkedIn</span>
            </a>
            <a 
              href={`https://github.com/${personalInfo.github}`}
              target="_blank"
              className="flex flex-col items-center gap-4 md:gap-6 p-6 md:p-10 rounded-[2.5rem] bg-zinc-900 border border-zinc-800 hover:border-amber-500/50 transition-all group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-zinc-950 transition-all">
                <Github className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <span className="text-base font-medium text-zinc-200">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
