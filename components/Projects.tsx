'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { projects, personalInfo } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function Projects() {
  const [filter, setFilter] = useState('All');
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <h2 className="text-xl font-bold font-mono text-amber-500 uppercase tracking-[0.3em] mb-6 px-1">Projects</h2>
            <h3 className="text-5xl font-serif font-medium text-zinc-100">Selected Works <span className="text-zinc-600 ml-4 font-mono text-2xl">({projects.length})</span></h3>
          </div>

          <Tabs defaultValue="All" onValueChange={setFilter} className="w-full md:w-auto">
            <TabsList className="bg-zinc-900 border border-zinc-800 p-1 rounded-full">
              {['All', 'AI', 'Frontend', 'Full-stack'].map((tab) => (
                <TabsTrigger 
                  key={tab} 
                  value={tab}
                  className="rounded-full px-6 text-zinc-400 data-[active]:bg-amber-500 data-[active]:text-zinc-950 hover:text-zinc-100 transition-all hover:scale-105 active:scale-95"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={cn(
                  "group relative flex flex-col glass rounded-[2.5rem] overflow-hidden hover:border-amber-500/50 transition-all duration-500 hover:scale-[1.01] active:scale-[0.99] hover:shadow-2xl hover:shadow-amber-500/5",
                  project.featured ? "lg:col-span-2" : ""
                )}
              >
                <div className="p-10 md:p-12 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {(project as any).icon ? (
                        <Image src={(project as any).icon} alt={project.title} width={36} height={36} className="object-contain" />
                      ) : (
                        <span className="text-4xl">{project.emoji}</span>
                      )}
                      <div>
                        <h4 className="text-2xl font-serif font-medium text-zinc-100 group-hover:text-amber-400 transition-colors mb-2">
                          {project.title}
                        </h4>
                        <p className="text-sm font-mono text-zinc-500 uppercase tracking-[0.2em] leading-relaxed">{project.tagline}</p>
                      </div>
                    </div>
                    {project.status && (
                      <Badge variant="outline" className="border-zinc-800 text-zinc-500 font-mono text-xs uppercase tracking-tighter shrink-0">
                        {project.status}
                      </Badge>
                    )}
                  </div>

                  <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-10 flex-grow font-medium">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {project.techStack.map((tech) => (
                      <span key={tech} className="text-sm font-mono text-zinc-400 border border-zinc-800/80 px-3 py-1 rounded-lg bg-zinc-900/40">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.githubUrl || (project as any).openLinkUrl || (project as any).caseStudyUrl) && (
                    <div className="flex items-center justify-between pt-6 border-t border-zinc-900">
                      <div className="flex items-center gap-4">
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                            <Github className="w-5 h-5" />
                          </a>
                        )}
                        {(project as any).openLinkUrl && (
                          <a href={(project as any).openLinkUrl} target="_blank" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                            <ExternalLink className="w-5 h-5" />
                          </a>
                        )}
                      </div>
                      {(project as any).caseStudyUrl && (
                        <a 
                          href={(project as any).caseStudyUrl} 
                          className="flex items-center gap-1 text-xs font-medium text-amber-500 hover:text-amber-400 transition-colors group/link"
                        >
                          View Case Study
                          <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  )}
                </div>

                {/* Hover Border Glow */}
                <div className="absolute inset-0 border border-amber-500/0 group-hover:border-amber-500/20 transition-all duration-500 rounded-3xl pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-16 text-center">
          <a 
            href={`https://github.com/${personalInfo.github}`} 
            target="_blank"
            className="inline-flex items-center gap-2 text-sm font-mono text-zinc-500 hover:text-amber-400 transition-colors group"
          >
            More on GitHub
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
