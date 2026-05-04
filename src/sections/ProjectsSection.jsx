import React from 'react';
import { motion } from 'motion/react';
import ShinyText from '../hooks/ShinyText';
import useTilt from '../hooks/useTilt';
import { FaGithub } from 'react-icons/fa';
import { BiLinkExternal } from "react-icons/bi";

import portfolioImage from '../assets/projects/portfolio_image.png';
import elevatedByDecimal from '../assets/projects/elevatedbydecimal.png'
import './ProjectsSection.css';

function ProjectCard({ project, index }) {
  const tilt = useTilt(9);

  return (
    <motion.div
      key={project.title}
      className={`project-card cursor-target`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: index * 0.12, ease: 'easeOut' }}
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      onMouseEnter={tilt.onMouseEnter}
      style={{ willChange: 'transform' }}
    >
      <div className="project-card-header">
        <div className="project-card-gradient" style={{ background: '#111' }}>
          <img className="project-card-image" src={project.imagelink} alt={project.title} />
        </div>
      </div>

      <div className="project-card-body">
        <div className="project-card-row">
          <h3 className="project-card-title">{project.title}</h3>
          <div className="project-title-links">
            {project.github && (
              <a href={project.github}
                target="_blank"
                rel="noopener"
                referrerPolicy="strict-origin-when-cross-origin"
                className="project-icon-link"
                aria-label="GitHub repository"
                onClick={(e) => e.stopPropagation()}
              >
                <FaGithub />
              </a>
            )}
            {project.live && (
              <a href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon-link"
                aria-label="Live demo"
                onClick={(e) => e.stopPropagation()}
              >
                <BiLinkExternal />
              </a>
            )}
          </div>
        </div>
        <div>
          <p className="project-card-desc">{project.desc}</p>
        </div>
        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: 'Portfolio 3D Experience',
      desc: 'An immersive portfolio website with real-time 3D starfield, glassmorphic UI, and scroll-driven animations. Built with React, Three.js, and GSAP.',
      tags: ['React', 'Three.js', 'GSAP', 'WebGL'],
      github: 'https://github.com/Girijaray07/Girija-Portfolio',
      live: 'https://girijaray.dev/',
      gradient: 'linear-gradient(135deg, #0a0a2e, #1a1a4e, #0a2a3a)',
      imagelink: portfolioImage,
    },
    {
      title: 'Elevated By Decimal',
      desc: 'A business platform for scaling brands through marketing, Optimization service management, and real-time client interaction with dashboards and admin controls.',
      tags: ['Dashboard', 'Client', 'Admin', 'Service', 'React'],
      github: '',
      live: 'https://elevatedbydecimal.girijaray.dev',
      gradient: 'linear-gradient(135deg, #1a0a2e, #2a1a4e, #1a0a3a)',
      imagelink: elevatedByDecimal,
    },
    {
      title: 'Real-time Analytics Dashboard',
      desc: 'Full-stack dashboard with live data streaming, interactive charts, and role-based access control for enterprise-grade monitoring.',
      tags: ['React', 'Node.js', 'WebSocket', 'D3.js'],
      github: '',
      live: '',
      gradient: 'linear-gradient(135deg, #0a1a2e, #1a2a4e, #0a2a2a)',
      imagelink: portfolioImage,
    },
  ];

  return (
    <section id="works" className="section">
      <div className="section-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="section-label">Selected Work</div>
          <h2 className="section-title">Featured Projects
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
