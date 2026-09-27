'use client';

import { motion } from 'motion/react';
import { achievements } from '@/lib/data';
import { ExternalLink, FileText } from 'lucide-react';

export function Achievements() {
  const leftCol = [achievements[0], achievements[2]];
  const rightCol = [achievements[1], achievements[3], achievements[4]];
  const bottomCard = achievements[5];

  const renderCard = (achievement: typeof achievements[0], index: number) => {
    if (!achievement) return null;
    const Icon = achievement.icon;

    return (
      <motion.div
        key={achievement.title}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="flex flex-col justify-between p-6 sm:p-8 rounded-[2rem] bg-zinc-900/50 border border-zinc-800 hover:border-amber-500/30 transition-all group h-full"
      >
        <div className="flex items-start gap-5 sm:gap-6">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
            {typeof Icon === 'function' || typeof Icon === 'object' ? (
              <Icon className="w-6 h-6 text-amber-400" />
            ) : (
              <span className="text-2xl leading-none">{Icon}</span>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="text-lg sm:text-xl font-serif font-medium text-zinc-100 mb-2 group-hover:text-amber-400 transition-colors leading-snug">
              {achievement.title}
            </h4>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {achievement.context}
            </p>
          </div>
        </div>

        {'linkUrl' in achievement && achievement.linkUrl && (
          <div className="mt-6 pt-4 border-t border-zinc-800/60 flex justify-end">
            <a
              href={achievement.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-full text-amber-400 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-500/40 transition-all group/btn"
            >
              <FileText className="w-3.5 h-3.5" />
              {'linkText' in achievement && achievement.linkText ? achievement.linkText : "View Paper"}
              <ExternalLink className="w-3 h-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <section className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold font-mono text-amber-500 uppercase tracking-[0.3em] mb-16">
            Achievements
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              {leftCol.map((item, idx) => renderCard(item, idx))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              {rightCol.map((item, idx) => renderCard(item, idx + 2))}
            </div>
          </div>

          {/* Last Row (1 Card for now) */}
          {bottomCard && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {renderCard(bottomCard, 5)}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
