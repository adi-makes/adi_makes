'use client';

import { motion } from 'motion/react';
import { techStack, currentlyExploring } from '@/lib/data';
import { cn } from '@/lib/utils';

export function TechStack() {
  return (
    <section id="skills" className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold font-mono text-amber-500 uppercase tracking-[0.3em] mb-16">Tech Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {techStack.map((category) => (
              <div key={category.category} className="space-y-8">
                <h3 className="text-sm font-mono text-amber-500/80 uppercase tracking-[0.2em] flex items-center gap-4">
                  <span className="w-12 h-[2px] bg-amber-500/20" />
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-zinc-900 border border-zinc-800/80 hover:border-amber-500/40 hover:bg-zinc-800/50 hover:-translate-y-1 transition-all duration-300 group shadow-sm hover:shadow-amber-500/5"
                    >
                      <skill.icon className="w-5 h-5 text-zinc-400 group-hover:text-amber-400 transition-all font-bold" />
                      <span className="text-base font-medium text-zinc-300 group-hover:text-zinc-50 transition-colors tracking-tight">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Currently Exploring Section */}
          <div className="mt-24 p-10 md:p-12 rounded-[2.5rem] glass-darker border-amber-500/20 relative overflow-hidden group/container shadow-2xl shadow-amber-500/5">
            <div className="absolute -top-10 -right-10 p-8 opacity-5 group-hover/container:opacity-20 transition-all duration-700 pointer-events-none rotate-6 scale-110">
              <span className="text-9xl font-serif italic text-amber-500 selection:bg-transparent">Exploring</span>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-lg font-mono text-amber-500 uppercase tracking-[0.3em] mb-10 flex items-center gap-6">
                <span className="w-16 h-[2px] bg-amber-500/30" />
                Currently Exploring
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentlyExploring.map((item) => (
                  <div 
                    key={item.title}
                    className="flex flex-col gap-2 p-6 rounded-[1.5rem] bg-zinc-950/80 border border-zinc-800/80 hover:border-amber-500/50 hover:bg-zinc-900/40 transition-all duration-300 group/item shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.4)] animate-pulse" />
                      <item.icon className="w-5 h-5 text-amber-400/90 group-hover/item:scale-110 transition-transform" />
                      <h4 className="text-base font-serif font-medium text-zinc-100 group-hover/item:text-amber-400 transition-colors">{item.title}</h4>
                    </div>
                    <p className="text-xs font-mono text-zinc-400 pl-5 leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
