import type { Metadata } from 'next';
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Particles from "@/components/ui/Particles";
import Script from 'next/script';

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

const SITE_URL = 'https://adi-makes.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: 'Adith R. Lal — Frontend Engineer & AI Builder',
    template: '%s | Adith R. Lal',
  },

  description:
    'Portfolio of Adith R. Lal (Adith), a Computer Science student at CUSAT, Kochi. Frontend Engineer, AI Builder & Product Thinker — building AI-powered products at the intersection of design and intelligence.',

  keywords: [
    'Adith',
    'Adith R Lal',
    'Adith R. Lal',
    'Adith Lal',
    'Adith CUSAT',
    'Adith portfolio',
    'adi-makes',
    'Frontend Engineer Kerala',
    'AI Builder India',
    'CUSAT Computer Science',
    'Next.js developer India',
    'React developer Kochi',
    'AI developer student',
    'HouSmart developer',
    'adithr747',
  ],

  authors: [{ name: 'Adith R. Lal', url: SITE_URL }],
  creator: 'Adith R. Lal',
  publisher: 'Adith R. Lal',

  alternates: {
    canonical: SITE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: 'Adith R. Lal',
    title: 'Adith R. Lal — Frontend Engineer & AI Builder',
    description:
      'Portfolio of Adith R. Lal (Adith), Frontend Engineer & AI Builder based in Kochi, India. B.Tech CS at CUSAT · 9.69 CGPA · 10+ Hackathons.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Adith R. Lal — Frontend Engineer & AI Builder',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Adith R. Lal — Frontend Engineer & AI Builder',
    description:
      'Portfolio of Adith R. Lal (Adith), Frontend Engineer & AI Builder based in Kochi, India.',
    images: ['/og-image.png'],
    creator: '@adi_makes',
  },

  category: 'technology',

  verification: {
    google: '7YzRrKVMNLry9-6vw35v1SprlEbRK96nN7y7GKVPxY4',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Adith R. Lal',
  alternateName: ['Adith', 'Adith Lal', 'Adith R Lal'],
  url: 'https://adi-makes.vercel.app',
  email: 'adithr747@gmail.com',
  jobTitle: 'Frontend Engineer & AI Builder',
  description:
    'Computer Science student at CUSAT, Kerala, India. Building AI-powered products at the intersection of frontend engineering and intelligence.',
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Cochin University of Science and Technology (CUSAT)',
      address: { '@type': 'PostalAddress', addressLocality: 'Kochi', addressRegion: 'Kerala', addressCountry: 'IN' },
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Kochi',
    addressRegion: 'Kerala',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://github.com/adi-makes',
    'https://linkedin.com/in/adith-r-lal',
  ],
  knowsAbout: [
    'Frontend Engineering',
    'Artificial Intelligence',
    'Next.js',
    'React',
    'TypeScript',
    'Machine Learning',
    'LLM Integration',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn(inter.variable, playfair.variable, jetbrainsMono.variable, pixar.variable, "scroll-smooth")}>
      <head>
        <Script
          id="json-ld-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />
      </head>
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
