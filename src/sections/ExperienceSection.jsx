import React from 'react';
import ShinyText from '../hooks/ShinyText';

function ExperienceSection() {
  const experiences = [
    {
      role: 'Lead Software Engineer at Google',
      duration: 'Nov 2019 - Present',
      description: 'As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.',
      logo: 'G'
    },
    {
      role: 'Software Engineer at YouTube',
      duration: 'Jan 2017 - Oct 2019',
      description: 'At YouTube, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.',
      logo: 'Y'
    }
  ];

  return (
    <section id="experience" className="section" style={{ background: '#111111', color: '#fff', borderTop: '2px solid #fff', borderBottom: '2px solid #fff' }}>
      <div className="section-inner">
        <div className="section-label" style={{ color: '#aaa', borderColor: '#444' }}>My Experience</div>
        <h2 className="section-title">
          <ShinyText
            text="Experience"
            speed={4}
            color="#fff"
            shineColor="#aaa"
          />
        </h2>
        <div className="section-divider" style={{ background: '#fff' }} />

        <div className="experience-list" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-card" style={{ padding: '30px', border: '2px solid #444', background: '#000', borderRadius: '6px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ width: '40px', height: '40px', background: '#fff', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>{exp.logo}</div>
                  <h3 style={{ fontSize: '1.2rem', margin: 0 }}>{exp.role}</h3>
                </div>
                <div style={{ fontSize: '0.85rem', color: '#aaa', fontFamily: 'var(--font-mono)' }}>{exp.duration}</div>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#ccc', lineHeight: '1.6' }}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
