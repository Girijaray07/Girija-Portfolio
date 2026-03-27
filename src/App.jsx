import { useRef, useState } from 'react';

import CircleCursor from './hooks/CircleCursor';
import HeaderElement from './components/HeaderElement';
import LoadingScreen from './components/LoadingScreen';

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
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = () => {
    setTimeout(() => setLoaded(true), 100);
  };

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoaded} />}

      <div
        className={`portfolio ${loaded ? 'app-loaded' : ''}`}
        ref={scrollContainerRef}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease 0.1s',
          pointerEvents: loaded ? 'auto' : 'none',
        }}
      >
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
          <HeroSection loaded={loaded} />
          <MarqueeTicker />
          <AboutSection scrollContainerRef={scrollContainerRef} />
          <SkillsSection />
          {/* <ExperienceSection /> */}
          <ProjectsSection />
          <ContactSection />
          <FooterElement />
        </div>
      </div>
    </>
  );
}

export default App;