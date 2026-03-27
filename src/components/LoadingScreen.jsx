import { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';

const MESSAGES = [
  'Initializing environment...',
  'Loading CSS...',
  'Importing components...',
  'Compiling JSX...',
  'Applying animations...',
  'Connecting to server...',
  'Bundling modules...',
  'Optimizing assets...',
  'Rendering portfolio...',
];

function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  // Animate progress 0 → 100 over ~6000ms
  useEffect(() => {
    const DURATION = 6000;

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const pct = Math.min((elapsed / DURATION) * 100, 100);
      setProgress(Math.floor(pct));

      if (pct < 100) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        // Small pause, then fade out
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => onComplete(), 600);
        }, 300);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  // Cycle messages
  useEffect(() => {
    const interval = setInterval(() => {
      setMsgIndex((i) => (i + 1) % MESSAGES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loading-screen ${exiting ? 'loading-exit' : ''}`}>
      <div className="loading-inner">
        <div className="loading-logo">
          <span className="loading-logo-bracket">[</span>
          <span className="loading-logo-text">GR</span>
          <span className="loading-logo-bracket">]</span>
        </div>

        <div className="loading-message">
          <span className="loading-prompt">$ </span>
          <span className="loading-msg-text">{MESSAGES[msgIndex]}</span>
          <span className="loading-cursor">▋</span>
        </div>

        <div className="loading-bar-wrap">
          <div
            className="loading-bar-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="loading-pct">{progress}%</div>
      </div>
    </div>
  );
}

export default LoadingScreen;
