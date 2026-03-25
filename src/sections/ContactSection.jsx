import React from 'react';
import ShinyText from '../hooks/ShinyText';

function ContactSection() {
  return (
    <section id="contactUs" className="section">
      <div className="section-inner">
        <div className="contact-container">
          <div className="section-label">Let's Connect</div>
          <h2 className="section-title">
            <ShinyText
              text="Get in Touch"
              speed={3}
              color="#c0c0d0"
              shineColor="#00dce8"
            />
          </h2>
          <div className="section-divider" style={{ margin: '0 auto 40px' }} />

          <p className="contact-desc">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of something amazing. Let's build the
            future together.
          </p>

          <div className="contact-links">
            <a href="mailto:girija@example.com" className="contact-link cursor-target">
              <span className="contact-link-icon">✉️</span>
              Email Me
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="contact-link cursor-target">
              <span className="contact-link-icon">🐙</span>
              GitHub
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="contact-link cursor-target">
              <span className="contact-link-icon">💼</span>
              LinkedIn
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="contact-link cursor-target">
              <span className="contact-link-icon">🐦</span>
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
