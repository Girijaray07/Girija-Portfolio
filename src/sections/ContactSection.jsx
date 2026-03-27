import React from 'react';
import { motion } from 'motion/react';
import ShinyText from '../hooks/ShinyText';

const links = [
  { href: 'mailto:girijaray64@gmail.com', icon: '✉️', label: 'Email Me' },
  { href: 'https://github.com/Girijaray07', icon: '🐙', label: 'GitHub', external: true },
  { href: 'https://www.linkedin.com/in/girija-shankar-ray/', icon: '💼', label: 'LinkedIn', external: true },
];

function ContactSection() {
  return (
    <section id="contactUs" className="section">
      <div className="section-inner">
        <div className="contact-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
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
          </motion.div>

          <div className="contact-links">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                className="contact-link cursor-target"
                {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: i * 0.09, ease: 'easeOut' }}
              >
                <span className="contact-link-icon">{link.icon}</span>
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
