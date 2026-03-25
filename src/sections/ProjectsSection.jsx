import React from 'react';
import ShinyText from '../hooks/ShinyText';

function ProjectsSection() {
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

  return (
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
                  style={{ background: '#111' }}
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
  );
}

export default ProjectsSection;
