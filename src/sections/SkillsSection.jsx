import React from 'react';
import { motion } from 'motion/react';
import { FaReact, FaNodeJs, FaJava, FaGithub } from 'react-icons/fa';
import { SiThreedotjs, SiNpm, SiGit, SiMarkdown } from 'react-icons/si';
import svgIcons from '../assets/icons/svgicons';

import './SkillsSection.css';

function SkillsSection() {
  const skills = [
    { icon: <FaReact size={50} color='Cyan' />, name: 'ReactJs' },
    { icon: <FaNodeJs size={50} color='Green' />, name: 'NodeJs' },
    { icon: <img src={svgIcons.postgres} width={50} />, name: 'PostgreSQL' },
    { icon: <SiNpm size={50} color='Red' />, name: 'NPM' },
    { icon: <SiMarkdown size={50} color='var(--text-primary)' />, name: 'Markdown' },
    { icon: <img src={svgIcons.bash} width={50} />, name: 'Bash' },
    { icon: <img src={svgIcons.python} width={50} />, name: 'Python' },
    { icon: <FaJava size={50} color='Orange' />, name: 'Java' },
    { icon: <SiGit size={50} color='Red' />, name: 'Git' },
    { icon: <FaGithub size={50} color='var(--text-primary)' />, name: 'GitHub' },
    { icon: <img src={svgIcons.vscode} width={50} />, name: 'VS Code' },
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
          <h2 className="section-title">Skills & Technologies</h2>
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
