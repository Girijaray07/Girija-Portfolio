import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import PageLoader from '../components/PageLoader/PageLoader';

// Lazy load all pages for optimal performance
const Home = lazy(() => import('../pages/Home/Home'));
const About = lazy(() => import('../pages/About/About'));
const Projects = lazy(() => import('../pages/Projects/Projects'));
const Skills = lazy(() => import('../pages/Skills/Skills'));
const Contact = lazy(() => import('../pages/Contact/Contact'));
const Now = lazy(() => import('../pages/Now/Now'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

/**
 * Central route configuration.
 * All routes are nested under MainLayout for persistent header/footer.
 * Child paths are relative (no leading /).
 */
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <Suspense fallback={<PageLoader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="about"
          element={
            <Suspense fallback={<PageLoader />}>
              <About />
            </Suspense>
          }
        />
        <Route
          path="projects"
          element={
            <Suspense fallback={<PageLoader />}>
              <Projects />
            </Suspense>
          }
        />
        <Route
          path="skills"
          element={
            <Suspense fallback={<PageLoader />}>
              <Skills />
            </Suspense>
          }
        />
        <Route
          path="contact"
          element={
            <Suspense fallback={<PageLoader />}>
              <Contact />
            </Suspense>
          }
        />
        <Route
          path="now"
          element={
            <Suspense fallback={<PageLoader />}>
              <Now />
            </Suspense>
          }
        />
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRouter;