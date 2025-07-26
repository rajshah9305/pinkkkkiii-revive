import { useCallback } from 'react';
import CosmicParticles from '@/components/CosmicParticles';
import ProgressBar from '@/components/ProgressBar';
import ChapterNavigation from '@/components/ChapterNavigation';
import BackToTop from '@/components/BackToTop';
import InteractiveCursor from '@/components/InteractiveCursor';
import HeroSection from '@/components/HeroSection';
import SeedSection from '@/components/SeedSection';
import GrowthSection from '@/components/GrowthSection';
import SensesSection from '@/components/SensesSection';
import MolecularSection from '@/components/MolecularSection';
import AwardsSection from '@/components/AwardsSection';
import FinaleSection from '@/components/FinaleSection';
import Footer from '@/components/Footer';

const chapters = [
  { id: 'prologue', title: 'Prologue' },
  { id: 'seed', title: 'Seed' },
  { id: 'growth', title: 'Growth' },
  { id: 'senses', title: 'Senses' },
  { id: 'molecular', title: 'Molecular' },
  { id: 'awards', title: 'Awards' },
  { id: 'finale', title: 'Finale' }
];

const Index = () => {
  const scrollToFirstChapter = useCallback(() => {
    const firstChapter = document.getElementById('seed');
    if (firstChapter) {
      firstChapter.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleExperience = useCallback(() => {
    // Could scroll to top or trigger some experience
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen relative">
      <InteractiveCursor />
      <CosmicParticles />
      <ProgressBar />
      <ChapterNavigation chapters={chapters} />
      
      <main>
        <HeroSection onBeginJourney={scrollToFirstChapter} />
        <SeedSection />
        <GrowthSection />
        <SensesSection />
        <MolecularSection />
        <AwardsSection />
        <FinaleSection onExperience={handleExperience} />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;
