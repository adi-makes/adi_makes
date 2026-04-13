'use client';

import { motion } from 'motion/react';
import { achievements } from '@/lib/data';

export function Achievements() {
  return (
    <section className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold font-mono text-amber-500 uppercase tracking-[0.3em] mb-16">Achievements</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-8 p-8 rounded-[2rem] bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-all group"
              >
                <div className="text-5xl group-hover:scale-110 transition-transform duration-500 shrink-0 drop-shadow-lg">
                  {achievement.icon}
                </div>
                <div>
                  <h4 className="text-xl font-serif font-medium text-zinc-100 mb-2 group-hover:text-amber-400 transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-base text-zinc-400 leading-relaxed">
                    {achievement.context}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
