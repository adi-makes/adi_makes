import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { TechStack } from '@/components/TechStack';
import { GitHubActivity } from '@/components/GitHubActivity';
import { DSAJourney } from '@/components/DSAJourney';
import { Academics } from '@/components/Academics';
import { Achievements } from '@/components/Achievements';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <GitHubActivity />
      <DSAJourney />
      <Academics />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}
