'use client';

import { motion } from 'motion/react';
import { personalInfo } from '@/lib/data';
import { MapPin, Clock } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold font-mono text-amber-500 uppercase tracking-[0.3em] mb-12">About</h2>
          
          <p className="text-2xl md:text-3xl font-serif leading-relaxed text-zinc-100 mb-16">
            {personalInfo.about}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {personalInfo.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-4xl font-serif font-medium text-amber-400 mb-1">{stat.value}</span>
                <span className="text-sm font-mono text-zinc-400 uppercase tracking-widest leading-loose">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-8 pt-10 border-t border-zinc-900">
            <div className="flex items-center gap-3 text-base text-zinc-400">
              <span className="font-medium text-zinc-200">Currently:</span>
              <span className="text-zinc-300">Deep in AI/ML engineering and LLM integration</span>
            </div>
            <div className="flex items-center gap-6 ml-auto">
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <MapPin className="w-4 h-4" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-500">
                <Clock className="w-4 h-4" />
                <span>{personalInfo.timezone}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
