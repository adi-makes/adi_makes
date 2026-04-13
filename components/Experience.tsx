'use client';

import { motion } from 'motion/react';
import { experiences } from '@/lib/data';
import { Badge } from '@/components/ui/badge';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold font-mono text-amber-500 uppercase tracking-[0.3em] mb-16">Experience</h2>

          <div className="relative border-l border-zinc-900 ml-4 md:ml-0">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-16 last:mb-0 pl-8 relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-serif font-medium text-zinc-100 mb-1">{exp.company}</h3>
                    <p className="text-lg text-amber-500/80 font-medium tracking-tight">{exp.role}</p>
                  </div>
                  <div className="text-left md:text-center flex flex-col items-center md:items-center gap-1.5 self-start md:self-center">
                    <span className="text-sm font-mono text-zinc-500 bg-zinc-900/50 px-4 py-1.5 rounded-full border border-zinc-800/50 whitespace-nowrap shadow-sm">{exp.duration}</span>
                    <span className="text-xs text-amber-500/60 font-medium uppercase tracking-[0.2em]">{exp.type}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-zinc-300 text-base md:text-lg leading-relaxed flex items-start gap-4 group/item">
                      <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-amber-500/30 group-hover/item:bg-amber-500 transition-colors shrink-0 shadow-[0_0_8px_rgba(245,158,11,0.2)]" />
                      {achievement}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3">
                  {exp.tech.map((t) => (
                    <Badge key={t} variant="secondary" className="bg-zinc-900/80 text-zinc-400 border-zinc-800/80 px-4 py-1.5 text-sm hover:bg-zinc-800 hover:text-zinc-200 hover:border-amber-500/30 transition-all cursor-default">
                      {t}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
