import React from 'react';
import ScrollReveal from '../hooks/ScrollReveal';

function AboutSection({ scrollContainerRef }) {
  return (
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
  );
}

export default AboutSection;
