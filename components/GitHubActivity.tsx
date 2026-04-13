'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { personalInfo } from '@/lib/data';
import { Github, ExternalLink } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';

export function GitHubActivity() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { label: "Total Commits", value: "222" },
    { label: "Repositories", value: "24" },
    { label: "Top Language", value: "TypeScript" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold font-mono text-amber-500 uppercase tracking-[0.3em] mb-16">GitHub Activity</h2>

          <div className="glass rounded-[2rem] p-10 mb-12 shadow-2xl shadow-black/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 mb-12">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-lg">
                  <Github className="w-8 h-8 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-medium text-zinc-100">{personalInfo.github}</h3>
                  <p className="text-base font-mono text-emerald-500 uppercase tracking-widest leading-loose">Live contribution heatmap</p>
                </div>
              </div>
              <a 
                href={`https://github.com/${personalInfo.github}`} 
                target="_blank"
                className="px-4 py-2 rounded-full bg-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-700 hover:text-amber-500 border border-transparent hover:border-amber-500 transition-all flex items-center gap-2"
              >
                View Profile
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Real GitHub Heatmap */}
            <div className="mb-8 bg-zinc-950/30 rounded-2xl border border-zinc-900 overflow-hidden">
              <div className="overflow-x-auto pb-6 px-6 pt-8 scrollbar-hide">
                <div className="w-max mx-auto">
                  {mounted ? (
                    <GitHubCalendar 
                      username={personalInfo.github}
                      blockSize={12}
                      blockMargin={4}
                      fontSize={12}
                      theme={{
                        light: ['#18181b', '#f59e0b22', '#f59e0b44', '#f59e0b88', '#f59e0b'],
                        dark: ['#18181b', '#f59e0b22', '#f59e0b44', '#f59e0b88', '#f59e0b'],
                      }}
                      labels={{
                        totalCount: '{{count}} contributions in the last year',
                      }}
                    />
                  ) : (
                    <div className="h-[160px] w-full flex items-center justify-center">
                      <div className="w-8 h-8 border-2 border-amber-500/20 border-t-amber-500 rounded-full animate-spin" />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-10 border-t border-zinc-800">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-serif font-medium text-zinc-100 mb-2">{stat.value}</p>
                  <p className="text-sm font-mono text-zinc-400 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
