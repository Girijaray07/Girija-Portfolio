import React from 'react';
import { motion } from 'motion/react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaGit } from 'react-icons/fa';
import { SiHtml5, SiThreedotjs, SiMysql, SiGnubash } from 'react-icons/si';

import './SkillsSection.css';

function SkillsSection() {
  const skills = [
    { icon: <FaReact size={50} color='Cyan' />, name: 'ReactJs' },
    { icon: <FaNodeJs size={50} color='Green' />, name: 'NodeJs' },
    { icon: <SiMysql size={50} color='Orange' />, name: 'MySQL' },
    { icon: <SiGnubash size={50} color='Green' />, name: 'Bash' },
    { icon: <FaPython size={50} color='Blue' />, name: 'Python' },
    { icon: <FaJava size={50} color='Orange' />, name: 'Java' },
    { icon: <FaGit size={50} color='Red' />, name: 'Git' },
    { icon: <SiHtml5 size={50} color='Red' />, name: 'HTML / CSS' },
    { icon: <SiThreedotjs size={50} color='Orange' />, name: 'Three.js' },
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
            Professional Skills
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-card cursor-target"
              initial={{ opacity: 0, x: 80 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
