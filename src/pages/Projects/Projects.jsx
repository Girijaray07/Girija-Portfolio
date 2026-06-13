import React from 'react';
import PageTransition from '../../components/PageTransition/PageTransition';
import ProjectsSection from '../../sections/ProjectsSection';
import './Projects.css';

function Projects() {
  return (
    <PageTransition>
      <ProjectsSection />
    </PageTransition>
  );
}

export default Projects;
