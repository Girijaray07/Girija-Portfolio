import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { FiArrowRight } from 'react-icons/fi';
import ShinyText from '../../hooks/ShinyText';
import BlurText from '../../hooks/BlurText';
import RotatingText from '../../hooks/RotatingText';
import ConsoleTypewriter from '../../hooks/ConsoleTypewriter';
import IconCTAButton from '../../components/IconCTAButton';
import PageTransition from '../../components/PageTransition/PageTransition';
import MarqueeTicker from '../../sections/MarqueeTicker';
import profileImg from '../../assets/profile/girija.png';

import './Home.css';

const previewCards = [
  {
    label: 'About Me',
    title: 'Who I Am',
    desc: 'Full-stack developer crafting immersive digital experiences at the intersection of creativity and technology.',
    to: '/about',
    icon: '⚡',
  },
  {
    label: 'Projects',
    title: 'Selected Work',
    desc: 'From 3D portfolios to AI assistants — explore my featured builds and live deployments.',
    to: '/projects',
    icon: '🚀',
  },
  {
    label: 'Now',
    title: "What I'm Doing",
    desc: "Current focus, learning goals, and what I'm building right now — updated regularly.",
    to: '/now',
    icon: '🔮',
  },
];

function Home() {
  return (
    <PageTransition>
      {/* ── Hero Section ── */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-greeting">
              <ConsoleTypewriter
                words={['World', 'Coders', 'Folks', 'Developers', 'Friends']}
                prefix="// Hello, "
                speed={90}
                deleteSpeed={70}
                delayBetweenWords={1800}
              />
            </div>

            <div className="name-start">
              <span>I'm</span>
            </div>

            <h1 className="hero-name">
              <span className="hero-name-line">
                <BlurText
                  text="Girija Shankar"
                  delay={100}
                  animateBy="letters"
                  direction="bottom"
                  trigger={true}
                />
              </span>
              <span className="hero-name-gradient hero-name-line">
                <BlurText
                  text="Ray"
                  delay={120}
                  animateBy="letters"
                  direction="bottom"
                  trigger={true}
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
              <Link to="/projects" className="btn btn-primary">
                View Projects ↗
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in Touch
              </Link>
            </div>

            <div className="hero-cta-icons">
              <IconCTAButton
                icon={MdEmail}
                label="Email Me"
                tooltip="girijaray64@gmail.com"
                href="mailto:girijaray64@gmail.com"
              />
              <IconCTAButton
                icon={FiGithub}
                label="GitHub"
                tooltip="github.com/Girijaray07"
                href="https://github.com/Girijaray07"
                external
              />
              <IconCTAButton
                icon={FiLinkedin}
                label="LinkedIn"
                tooltip="linkedin.com/in/girija-shankar-ray"
                href="https://www.linkedin.com/in/girija-shankar-ray/"
                external
              />
            </div>
          </div>

          <div className="hero-photo-wrapper">
            <div style={{ marginTop: '10px' }}></div>
            <div className="hero-photo-container">
              <img
                src={profileImg}
                alt="Girija Shankar Ray"
                className="hero-photo"
              />
            </div>
            <div className="hero-photo-line" />
          </div>
        </div>
      </section>

      {/* ── Marquee Ticker ── */}
      <MarqueeTicker />

      {/* ── Preview Cards ── */}
      <section className="home-preview section">
        <div className="section-inner">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="section-label">Explore</div>
            <h2 className="section-title">
              <ShinyText
                text="Quick Links"
                speed={3}
                color="#c0c0d0"
                shineColor="#00dce8"
              />
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="preview-grid">
            {previewCards.map((card, i) => (
              <motion.div
                key={card.to}
                className="preview-card glass-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.25 },
                }}
              >
                <div className="preview-card-icon">{card.icon}</div>
                <div className="preview-card-label">{card.label}</div>
                <h3 className="preview-card-title">{card.title}</h3>
                <p className="preview-card-desc">{card.desc}</p>
                <Link to={card.to} className="preview-card-link">
                  Explore <FiArrowRight />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Home;
