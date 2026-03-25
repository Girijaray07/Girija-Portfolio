import { useRef } from 'react';

import CircleCursor from './hooks/CircleCursor';
import HeaderElement from './components/HeaderElement';

import HeroSection from './sections/HeroSection';
import MarqueeTicker from './sections/MarqueeTicker';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ExperienceSection from './sections/ExperienceSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import FooterElement from './sections/FooterElement';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css';

function App() {
  const scrollContainerRef = useRef(null);

  return (
    <div className="portfolio" ref={scrollContainerRef}>
      <Analytics />
      <SpeedInsights />
      <CircleCursor
        size={24}
        borderWidth={5}
        color="rgba(255, 0, 0, 0.8)"
        trailColor="rgba(255, 0, 0, 0.2)"
        delay={0.12}
      />

      <div className="portfolio-content">
        <HeaderElement />
        <HeroSection />
        <MarqueeTicker />
        <AboutSection scrollContainerRef={scrollContainerRef} />
        <SkillsSection />
        {/* <ExperienceSection /> */}
        <ProjectsSection />
        <ContactSection />
        <FooterElement />
      </div>
    </div>
  );
}

export default App;