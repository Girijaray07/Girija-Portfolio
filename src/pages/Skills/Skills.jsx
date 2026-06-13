import React from 'react';
import PageTransition from '../../components/PageTransition/PageTransition';
import SkillsSection from '../../sections/SkillsSection';
import './Skills.css';

function Skills() {
  return (
    <PageTransition>
      <SkillsSection />
    </PageTransition>
  );
}

export default Skills;
