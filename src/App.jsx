import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

import LoadingScreen from './components/LoadingScreen/LoadingScreen';

import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css';

const LOADING_KEY = 'portfolio_loaded';

function App() {
  // Only show loading screen on first visit (not refresh)
  const [loaded, setLoaded] = useState(() => {
    return sessionStorage.getItem(LOADING_KEY) === 'true';
  });

  const handleLoaded = () => {
    setTimeout(() => {
      setLoaded(true);
      sessionStorage.setItem(LOADING_KEY, 'true');
    }, 100);
  };

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoaded} />}

      <div
        className={`portfolio ${loaded ? 'app-loaded' : ''}`}
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s ease 0.1s',
          pointerEvents: loaded ? 'auto' : 'none',
        }}
      >
        <BrowserRouter>
          <Analytics />
          <SpeedInsights />
          <AppRouter />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;