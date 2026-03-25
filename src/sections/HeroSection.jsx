import React from 'react';
import ShinyText from '../hooks/ShinyText';
import BlurText from '../hooks/BlurText';
import RotatingText from '../hooks/RotatingText';
import profileImg from '../assets/profile.png';

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <div className="hero-greeting">
            <ShinyText
              text="// Hello, World"
              speed={3}
              color="#6a6a8a"
              shineColor="#00dce8"
            />
          </div>

          <div className="name-start">
            <ShinyText
              text="I'm"
              speed={7}
              color="#e5e5e5ff"
            />
          </div>

          <h1 className="hero-name">
            <BlurText
              text="Girija Shankar"
              delay={100}
              animateBy="letters"
              direction="bottom"
            />
            <span className="hero-name-gradient">
              <BlurText
                text="Ray"
                delay={120}
                animateBy="letters"
                direction="bottom"
              />
            </span>
          </h1>

          <div className="hero-title-line">
            <span style={{ color: 'var(--text-muted)' }}>I build with</span>
            <RotatingText
              texts={['React', 'Python', 'JavaScript', 'Java', 'Node.js']}
              mainClassName="rotating-skill"
              staggerFrom="last"
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '-120%', opacity: 0 }}
              staggerDuration={0.01}
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </div>

          <p className="hero-summary">
            A passionate developer crafting high-performance web experiences
            with modern technologies. I turn complex problems into elegant,
            interactive solutions that push the boundaries of the web.
          </p>

          <div className="hero-actions">
            <a href="#works" className="btn btn-primary">
              View Projects ↗
            </a>
            <a href="#contactUs" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-photo-wrapper">
          <div className="hero-photo-container">
            <div className="hero-photo-glow" />
            <div className="hero-photo-ring" />
            <div className="hero-photo-ring-inner" />
            <img
              src={profileImg}
              alt="Girija Shankar Ray"
              className="hero-photo"
            />
            <div className="hero-photo-dots" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
