import { useRef } from 'react';
import Galaxy from './hooks/Galaxy';
import CircleCursor from './hooks/CircleCursor';
import HeaderElement from './components/HeaderElement';
import BlurText from './hooks/BlurText';
import ShinyText from './hooks/ShinyText';
import ScrollReveal from './hooks/ScrollReveal';
import RotatingText from './hooks/RotatingText';
import Particles from './hooks/Particles';
import profileImg from './assets/profile.png';

import './App.css';

const skills = [
  { icon: '⚛️', name: 'React', level: 'Advanced' },
  { icon: '🟨', name: 'JavaScript', level: 'Advanced' },
  { icon: '🐍', name: 'Python', level: 'Advanced' },
  { icon: '☕', name: 'Java', level: 'Intermediate' },
  { icon: '⚡', name: 'C / C++', level: 'Intermediate' },
  { icon: '🌐', name: 'HTML / CSS', level: 'Advanced' },
  { icon: '🗄️', name: 'Node.js', level: 'Intermediate' },
  { icon: '🎨', name: 'Three.js', level: 'Learning' },
];

const projects = [
  {
    title: 'Portfolio 3D Experience',
    desc: 'An immersive portfolio website with real-time 3D starfield, glassmorphic UI, and scroll-driven animations. Built with React, Three.js, and GSAP.',
    tags: ['React', 'Three.js', 'GSAP', 'WebGL'],
    gradient: 'linear-gradient(135deg, #0a0a2e, #1a1a4e, #0a2a3a)',
    emoji: '🌌',
  },
  {
    title: 'AI Code Assistant',
    desc: 'A machine learning powered coding assistant that provides intelligent code suggestions and automated debugging using natural language processing.',
    tags: ['Python', 'ML', 'NLP', 'FastAPI'],
    gradient: 'linear-gradient(135deg, #1a0a2e, #2a1a4e, #1a0a3a)',
    emoji: '🤖',
  },
  {
    title: 'Real-time Analytics Dashboard',
    desc: 'Full-stack dashboard with live data streaming, interactive charts, and role-based access control for enterprise-grade monitoring.',
    tags: ['React', 'Node.js', 'WebSocket', 'D3.js'],
    gradient: 'linear-gradient(135deg, #0a1a2e, #1a2a4e, #0a2a2a)',
    emoji: '📊',
  },
];

function App() {
  const scrollContainerRef = useRef(null);

  return (
    <div className="portfolio" ref={scrollContainerRef}>
      <CircleCursor
        size={24}
        borderWidth={2}
        color="rgba(0, 220, 232, 0.5)"
        trailColor="rgba(0, 220, 232, 0.08)"
        delay={0.1}
      />

      {/* Fixed Galaxy Background */}
      <div className="bg-fixed">
        <Particles
          particleColors={["#ffffff"]}
          particleCount={1000}
          particleSpread={40}
          speed={0.15}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
        <div className="bg-gradient-overlay" />
      </div>

      {/* Content */}
      <div className="portfolio-content">
        <HeaderElement />

        {/* ===== HERO ===== */}
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
                  texts={['React', 'Python', 'JavaScript', 'Three.js', 'Java', 'Node.js']}
                  mainClassName="rotating-skill"
                  staggerFrom="last"
                  initial={{ y: '100%' }}
                  animate={{ y: 0 }}
                  exit={{ y: '-120%' }}
                  staggerDuration={0.025}
                  transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>

              <p className="hero-summary">
                A passionate developer crafting high-performance web experiences
                with modern technologies. I turn complex problems into elegant,
                interactive solutions that push the boundaries of the web.
              </p>

              <div className="hero-actions">
                <a href="#works" className="btn btn-primary cursor-target">
                  View Projects ↗
                </a>
                <a href="#contactUs" className="btn btn-outline cursor-target">
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

        {/* ===== ABOUT ===== */}
        <section id="about" className="section">
          <div className="section-inner">
            <div className="section-label">About Me</div>
            <div className="section-divider" />
            <div className="about-content">
              <div className="about-text">
                <ScrollReveal
                  scrollContainerRef={scrollContainerRef}
                  baseOpacity={0.15}
                  enableBlur={true}
                  blurStrength={3}
                >
                  I am a full-stack developer with a deep passion for creating
                  immersive digital experiences. From building real-time 3D
                  visualizations to architecting scalable backend systems, I
                  thrive at the intersection of creativity and technology.
                </ScrollReveal>
                <br />
                <ScrollReveal
                  scrollContainerRef={scrollContainerRef}
                  baseOpacity={0.15}
                  enableBlur={true}
                  blurStrength={3}
                >
                  My journey started with curiosity — taking apart code to
                  understand how things work. Today, I specialize in React
                  ecosystems, creative coding with WebGL, and building tools
                  that make developers more productive.
                </ScrollReveal>
              </div>

              <div className="about-stats">
                <div className="stat-card">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Coding</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">7+</div>
                  <div className="stat-label">Technologies</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Curiosity</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== SKILLS ===== */}
        <section className="section">
          <div className="section-inner">
            <div className="section-label">Tech Stack</div>
            <h2 className="section-title">
              <ShinyText
                text="Skills & Technologies"
                speed={4}
                color="#c0c0d0"
                shineColor="#00dce8"
              />
            </h2>
            <div className="section-divider" />

            <div className="skills-grid">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-card cursor-target">
                  <span className="skill-icon">{skill.icon}</span>
                  <div className="skill-name">{skill.name}</div>
                  <div className="skill-level">{skill.level}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROJECTS ===== */}
        <section id="works" className="section">
          <div className="section-inner">
            <div className="section-label">Selected Work</div>
            <h2 className="section-title">
              <ShinyText
                text="Featured Projects"
                speed={4}
                color="#c0c0d0"
                shineColor="#00dce8"
              />
            </h2>
            <div className="section-divider" />

            <div className="projects-grid">
              {projects.map((project) => (
                <div key={project.title} className="project-card cursor-target">
                  <div className="project-card-header">
                    <div
                      className="project-card-gradient"
                      style={{ background: project.gradient }}
                    >
                      <span>{project.emoji}</span>
                    </div>
                  </div>
                  <div className="project-card-body">
                    <h3 className="project-card-title">{project.title}</h3>
                    <p className="project-card-desc">{project.desc}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT ===== */}
        <section id="contactUs" className="section">
          <div className="section-inner">
            <div className="contact-container">
              <div className="section-label">Let's Connect</div>
              <h2 className="section-title">
                <ShinyText
                  text="Get in Touch"
                  speed={3}
                  color="#c0c0d0"
                  shineColor="#00dce8"
                />
              </h2>
              <div className="section-divider" style={{ margin: '0 auto 40px' }} />

              <p className="contact-desc">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of something amazing. Let's build the
                future together.
              </p>

              <div className="contact-links">
                <a href="mailto:girija@example.com" className="contact-link cursor-target">
                  <span className="contact-link-icon">✉️</span>
                  Email Me
                </a>
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="contact-link cursor-target">
                  <span className="contact-link-icon">🐙</span>
                  GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="contact-link cursor-target">
                  <span className="contact-link-icon">💼</span>
                  LinkedIn
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="contact-link cursor-target">
                  <span className="contact-link-icon">🐦</span>
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer className="footer">
          <p className="footer-text">
            Designed & Built by{' '}
            <span className="footer-accent">Girija Shankar Ray</span>{' '}
            © 2026
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;