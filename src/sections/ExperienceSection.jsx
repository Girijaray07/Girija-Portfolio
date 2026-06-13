import React from 'react';
import { motion } from 'motion/react';
import ShinyText from '../hooks/ShinyText';
import './ExperienceSection.css';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'Freelance / Personal Projects',
    duration: 'Jan 2024 - Present',
    description:
      'Building production-grade web applications using React, Node.js, and cloud services. Delivered multiple client projects including business platforms, AI-powered assistants, and interactive portfolios with 3D visualizations.',
    logo: 'F',
    tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
  },
  {
    role: 'Open Source Contributor',
    company: 'GitHub Community',
    duration: 'Jun 2023 - Present',
    description:
      'Contributing to open-source projects focused on developer tooling and frontend frameworks. Building reusable component libraries, animation hooks, and creative coding experiments shared with the developer community.',
    logo: 'G',
    tags: ['Open Source', 'React', 'Three.js', 'GSAP'],
  },
  {
    role: 'Computer Science Student',
    company: 'University',
    duration: '2022 - Present',
    description:
      'Pursuing a degree in Computer Science with focus on software engineering, data structures, algorithms, and full-stack web development. Continuously expanding knowledge through courses, certifications, and hands-on projects.',
    logo: 'U',
    tags: ['DSA', 'Java', 'Python', 'ML', 'Web Dev'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: i * 0.12, ease: 'easeOut' },
  }),
};

function ExperienceSection() {
  return (
    <section id="experience" className="section experience-section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="section-label">My Journey</div>
          <h2 className="section-title">
            <ShinyText
              text="Experience"
              speed={4}
              color="#c0c0d0"
              shineColor="#00dce8"
            />
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="experience-card"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
            >
              <div className="experience-card-dot" />

              <div className="experience-card-header">
                <div className="experience-logo">{exp.logo}</div>
                <div className="experience-meta">
                  <h3 className="experience-role">{exp.role}</h3>
                  <span className="experience-company">{exp.company}</span>
                </div>
                <span className="experience-duration">{exp.duration}</span>
              </div>

              <p className="experience-desc">{exp.description}</p>

              <div className="experience-tags">
                {exp.tags.map((tag) => (
                  <span key={tag} className="experience-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
