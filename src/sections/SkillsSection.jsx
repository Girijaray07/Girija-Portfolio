import React from 'react';
import { motion } from 'motion/react';
import ShinyText from '../hooks/ShinyText';

function SkillsSection() {
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

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
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
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card cursor-target"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.38,
                delay: index * 0.07,
                ease: 'easeOut',
              }}
            >
              <span className="skill-icon">{skill.icon}</span>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">{skill.level}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
