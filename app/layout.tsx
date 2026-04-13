import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Particles from "@/components/ui/Particles";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const pixar = localFont({
  src: '../assets/pixar_font/pixar.woff2',
  variable: '--font-pixar',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif-original',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Adith R. Lal',
  description: 'Professional portfolio of Adith R. Lal, a Computer Science student building AI-powered products.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable, playfair.variable, jetbrainsMono.variable, pixar.variable, "scroll-smooth")}>
      <body suppressHydrationWarning className="bg-zinc-950 text-zinc-50 antialiased selection:bg-amber-500/30 selection:text-amber-200 min-h-screen relative overflow-x-hidden">
        <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40">
          <Particles 
            particleCount={250}
            particleSpread={12}
            speed={0.1}
            particleColors={['#f59e0b', '#d97706', '#fbbf24', '#ffffff']}
            moveParticlesOnHover={true}
            particleHoverFactor={0.8}
            alphaParticles={true}
            pixelRatio={2}
          />
        </div>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
