'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { academics, certifications } from '@/lib/data';
import { GraduationCap, Award, BookOpen, ExternalLink, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export function Academics() {
  const [selectedCert, setSelectedCert] = useState<{name: string, badge: string, links?: {name: string, url: string}[]} | null>(null);

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl font-bold font-mono text-amber-500 uppercase tracking-[0.3em] mb-16">Academics & Certifications</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Academics Card */}
            <div className="glass rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-center h-full">
              <div className="absolute -top-8 -right-8 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
                <GraduationCap className="w-48 h-48 rotate-12" />
              </div>
              
              <div className="relative z-10 flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-amber-500" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-medium text-zinc-100">{academics.institution}</h3>
                  <p className="text-sm text-zinc-500">{academics.period}</p>
                </div>
              </div>

              <div className="relative z-10 mb-10">
                <p className="text-xl font-medium text-zinc-100 mb-2">{academics.degree}</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl font-serif font-medium text-amber-500">{academics.cgpa}</span>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-[0.2em]">CGPA</span>
                </div>
              </div>

              <div className="relative z-10">
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-5 flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-zinc-600" />
                  Relevant Coursework
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-3">
                  {academics.coursework.map((course) => (
                    <Badge 
                      key={course} 
                      variant="secondary" 
                      className="bg-zinc-900/80 text-zinc-200 border-zinc-700/50 px-5 py-2.5 text-base rounded-full hover:bg-zinc-800 hover:border-amber-500/30 transition-all duration-300"
                    >
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div className="glass rounded-3xl p-8 lg:p-12">
              <div className="flex items-center gap-6 mb-10">
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-3xl font-serif font-medium text-zinc-100">Certifications</h3>
              </div>

              <div className="space-y-6">
                {certifications.map((cert) => (
                  <button 
                    key={cert.name} 
                    onClick={() => setSelectedCert(cert as any)}
                    className="w-full flex items-center justify-between gap-6 p-6 md:p-8 rounded-[2rem] bg-zinc-900/40 border border-zinc-800/80 hover:border-amber-500 hover:bg-zinc-900/60 transition-all duration-300 group cursor-pointer text-left shadow-lg hover:shadow-[0_0_25px_rgba(245,158,11,0.15)] hover:scale-[1.04] active:scale-[0.96]"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-3xl group-hover:scale-110 transition-transform">{cert.badge}</span>
                      <span className="text-lg md:text-xl font-medium text-zinc-200 group-hover:text-zinc-50 transition-colors">{cert.name}</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4 text-amber-500" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Pop up modal for drive link */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm" onClick={() => setSelectedCert(null)}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-[2rem] p-10 max-w-xl w-full text-center relative border border-zinc-800/50 shadow-2xl shadow-black/50" 
            onClick={e => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-4 text-zinc-500 hover:text-zinc-300 transition-all z-20 active:scale-90"
            >
              <X className="w-6 h-6" />
            </button>
            <span className="text-7xl mb-8 block drop-shadow-lg">{selectedCert.badge}</span>
            <h4 className="text-2xl font-serif text-zinc-100 mb-8 px-4">{selectedCert.name}</h4>
            <div className="space-y-4 max-h-[50vh] overflow-y-auto scrollbar-hide px-2">
              {selectedCert.links?.map((link, idx) => (
                <a 
                  key={idx}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-between bg-amber-500/5 hover:bg-amber-500 hover:text-zinc-950 border border-amber-500/10 hover:border-amber-500 text-amber-500 font-medium px-8 py-4 rounded-2xl transition-all w-full text-sm group shadow-sm hover:shadow-amber-500/20"
                >
                  <span className="text-left leading-relaxed mr-4">{link.name}</span>
                  <ExternalLink className="w-4 h-4 shrink-0 opacity-70 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
