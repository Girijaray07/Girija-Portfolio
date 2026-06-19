import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import HeaderElement from '../components/Header/HeaderElement';
import FooterElement from '../components/Footer/FooterElement';
import CircleCursor from '../hooks/CircleCursor';
import ScrollToTop from '../components/ScrollToTop';
import useDesktopCursor from '../hooks/useDesktopCursor';

const MainLayout = () => {
  const location = useLocation();
  const isDesktop = useDesktopCursor();

  return (
    <div className="main-layout">
      <ScrollToTop />
      <HeaderElement />
      <main className="portfolio-content">
        <AnimatePresence mode="wait">
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <FooterElement />
      {isDesktop && (
        <CircleCursor
          size={24}
          borderWidth={5}
          color="rgba(255, 0, 0, 0.8)"
          trailColor="rgba(255, 0, 0, 0.2)"
          delay={0.12}
        />
      )}
    </div>
  );
};

export default MainLayout;
