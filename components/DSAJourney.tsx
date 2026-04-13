'use client';

import { motion } from 'motion/react';
import { dsaJourney } from '@/lib/data';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';
// @ts-ignore
import leetcodeIcon from '../assets/leetcode.png';

export function DSAJourney() {
  return (
    <section className="py-24 px-6 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold font-mono text-amber-500 uppercase tracking-[0.3em] mb-16">DSA Journey</h2>

          <div className="glass rounded-[2rem] p-10 mb-12 shadow-2xl shadow-black/20">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-6 mb-10">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex items-center justify-center bg-zinc-900 border border-zinc-800">
                  <Image src={leetcodeIcon} alt="LeetCode" width={64} height={64} className="object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-medium text-zinc-100">LeetCode</h3>
                  <p className="text-base font-mono text-emerald-500 uppercase tracking-widest">Live data sync</p>
                </div>
              </div>
              <a 
                href={`https://leetcode.com/${dsaJourney.username}`} 
                target="_blank"
                className="px-4 py-2 rounded-full bg-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-700 hover:text-amber-500 border border-transparent hover:border-amber-500 transition-all flex items-center gap-2"
              >
                View Profile
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden relative border border-zinc-900 bg-zinc-950/30">
              <img 
                src={`https://leetcard.jacoblin.cool/${dsaJourney.username}?theme=dark&font=Inter&radius=20&border=0&ext=heatmap`} 
                alt="LeetCode Stats & Heatmap"
                className="w-full h-auto transition-transform duration-700 hover:scale-[1.01]"
                referrerPolicy="no-referrer"
              />
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
