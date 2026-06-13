import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { X } from 'lucide-react';
import BlurText from '../../hooks/BlurText';
import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';
import { RiGithubFill, RiLinkedinFill, RiDiscordFill } from 'react-icons/ri';

import './HeaderElement.css';

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/now', label: 'Now' },
  { to: '/contact', label: 'Contact' },
];

function HeaderElement({ loaded }) {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    const isCurrentlyDark = document.documentElement.classList.contains('dark-theme');
    setIsDark(!isCurrentlyDark);

    if (!document.startViewTransition) {
      document.documentElement.classList.toggle('dark-theme');
      return;
    }

    const transition = document.startViewTransition(() => {
      document.documentElement.classList.toggle('dark-theme');
    });

    transition.ready.then(() => {
      const x = window.innerWidth;
      const y = 0;
      const endRadius = Math.hypot(x, window.innerHeight);

      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ];

      document.documentElement.animate(
        { clipPath },
        {
          duration: 700,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
    });
  };

  return (
    <header className="header">
      <NavLink to="/" className="left-section">
        <BlurText
          text="Girija"
          delay={150}
          animateBy="letters"
          direction="bottom"
          className="name-logo"
          trigger={loaded}
        />
      </NavLink>

      <nav className="header_items">
        <ul className={isMenuOpen ? 'mobile-open' : ''}>
          <button
            className="mobile-close-btn"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={32} strokeWidth={2} />
          </button>

          {navItems.map((item) => (
            <li key={item.to} onClick={() => setIsMenuOpen(false)}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `header_item-text ${isActive ? 'active' : ''}`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="right-section">
        <div className="header-links">
          <a
            href="https://github.com/Girijaray07?ref=girijaray.dev"
            target="_blank"
            rel="noopener"
            referrerPolicy="strict-origin-when-cross-origin"
            className="header-social-link"
          >
            <RiGithubFill />
          </a>
          <a
            href="https://discord.gg/JtbQfghp?ref=girijaray.dev"
            target="_blank"
            rel="noopener"
            referrerPolicy="strict-origin-when-cross-origin"
            className="header-social-link"
          >
            <RiDiscordFill />
          </a>
          <a
            href="https://www.linkedin.com/in/girija-shankar-ray/?ref=girijaray.dev"
            target="_blank"
            rel="noopener"
            referrerPolicy="strict-origin-when-cross-origin"
            className="header-social-link"
          >
            <RiLinkedinFill />
          </a>
        </div>
        <div className="header-divider">|</div>
        <div className="header-buttons">
          <button onClick={toggleTheme} className="btn-theme-toggle">
            {isDark ? <MdOutlineLightMode size={30} /> : <MdLightMode size={30} />}
          </button>
          <button
            className="mobile-hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default HeaderElement;