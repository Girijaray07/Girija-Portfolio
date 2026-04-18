import React from 'react';
import { motion } from 'motion/react';
import ScrollReveal from '../hooks/ScrollReveal';
import './AboutSection.css';

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
  }),
};

function AboutSection({ scrollContainerRef }) {
  const stats = [
    { number: '15+', label: 'Projects' },
    { number: '3+', label: 'Years Coding' },
    { number: '7+', label: 'Technologies' },
    { number: '∞', label: 'Curiosity' },
  ];

  return (
    <section id="about" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="section-label">About Me</div>
          <div className="section-divider" />
        </motion.div>

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
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
              >
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
