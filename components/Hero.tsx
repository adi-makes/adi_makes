'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Github, Linkedin, Mail, Download, ArrowRight, FileText } from 'lucide-react';
import { personalInfo } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import meImg from '../assets/me.png';

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-end sm:items-center pt-20 pb-6 sm:pb-0 overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 -z-20 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-full md:w-[70%] lg:w-[55%] h-full">
          <Image
            src={meImg}
            alt="Adith R. Lal"
            fill
            className="object-cover opacity-70 grayscale-[30%] object-top md:object-right-top transition-all duration-1000"
            priority
          />
          
          {/* Sophisticated Edge Fading */}
          {/* Horizontal Fade (Left to Right) */}
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/60 to-transparent" />
          
          {/* Vertical Fade (Bottom to Top) */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          
          {/* Subtle Right-Edge Vignette */}
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-950/20 to-transparent" />
        </div>
        
        {/* Base dark layer for the left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/60 via-zinc-950/20 to-transparent md:hidden" />
      </motion.div>

      {/* Background Gradient Orb */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[120px] -z-10 animate-glow" />
      
      <div className="w-full px-6 md:px-20 lg:px-32 xl:px-48 relative z-10">
        <div className="max-w-4xl mx-auto md:mx-0 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-8xl font-name font-medium tracking-tight text-zinc-100 mb-3 md:mb-6"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-2xl text-amber-200/80 font-medium mb-2 md:mb-4 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm md:text-base font-mono text-zinc-500 mb-6 md:mb-12 uppercase tracking-widest"
          >
            {personalInfo.title}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 mb-6 md:mb-16"
          >
            <Button 
              size="lg" 
              className="bg-amber-500 hover:bg-amber-600 text-zinc-950 font-semibold rounded-full px-6 h-10 md:px-8 md:h-12 group"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <a 
              href="https://drive.google.com/file/d/1ALa7RmOnOQiQbKxW0NS88_GqfjYKjSHX/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline" className="rounded-full px-6 h-10 md:px-8 md:h-12 border-zinc-700 hover:bg-zinc-900 hover:text-zinc-100 bg-transparent transition-all">
                <FileText className="mr-2 w-4 h-4" />
                View Resume
              </Button>
            </a>
            <Button 
              variant="ghost" 
              className="rounded-full px-6 h-10 md:px-8 md:h-12 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/50 transition-all"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center justify-center md:justify-start gap-8"
          >
            <a href={`https://github.com/${personalInfo.github}`} target="_blank" className="text-zinc-500 hover:text-amber-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href={`https://linkedin.com/in/${personalInfo.linkedin}`} target="_blank" className="text-zinc-500 hover:text-amber-400 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href={`mailto:${personalInfo.email}`} className="text-zinc-500 hover:text-amber-400 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-xs font-mono text-zinc-600 uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-amber-500 to-transparent" />
      </motion.div>
    </section>
  );
}
