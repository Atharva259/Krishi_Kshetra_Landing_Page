import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import StorySection from '../components/StorySection';
import TechnologySection from '../components/TechnologySection';
import FeaturesSection from '../components/FeaturesSection';
import ImpactSection from '../components/ImpactSection';
import PrototypeSection from '../components/PrototypeSection';
import GallerySection from '../components/GallerySection';
import RoadmapSection from '../components/RoadmapSection';
import GithubSection from '../components/GithubSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#041a0f] selection:bg-brand-emerald/30 overflow-hidden">
      <HeroSection />
      <AboutSection />
      <StorySection />
      <FeaturesSection />
      <ImpactSection />
      <TechnologySection />
      <PrototypeSection />
      <GallerySection />
      <RoadmapSection />
      <GithubSection />
      <TeamSection />
      <ContactSection />
    </main>
  );
}



