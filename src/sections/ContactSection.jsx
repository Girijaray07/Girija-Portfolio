import React, { useState } from 'react';
import { motion } from 'motion/react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { BiLinkExternal } from 'react-icons/bi';
import './ContactSection.css';

const socialLinks = [
  { href: 'mailto:girijaray64@gmail.com', icon: <MdEmail />, label: 'Email' },
  { href: 'https://github.com/Girijaray07', icon: <FaGithub />, label: 'GitHub', external: true },
  { href: 'https://www.linkedin.com/in/girija-shankar-ray/', icon: <FaLinkedin />, label: 'LinkedIn', external: true },
];

const highlights = [
  'Full-Stack Web Development',
  'Creative UI / UX Engineering',
  'Open Source Contributor',
  'Always Learning Something New',
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.4, delay, ease: 'easeOut' },
});

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '', email: '', subject: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:girijaray64@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\n\n${formData.message}`)}`;
    window.open(mailto, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contactUs" className="section">
      <div className="contact-container">

        {/* ── Header ── */}
        <motion.div {...fadeUp(0)}>
          <div className="section-label">Let's Connect</div>
          <div className="section-divider" />
        </motion.div>

        {/* ── Two-column layout ── */}
        <div className="contact-layout">

          {/* ── LEFT: info panel ── */}
          <motion.div className="contact-info" {...fadeUp(0.05)}>
            <h2 className="contact-heading">
              Let's Talk For Your{' '}
              <span className="contact-heading-accent">Next Project</span>
            </h2>

            <p className="contact-desc">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of something amazing. Let's build the
              future together.
            </p>

            <ul className="contact-highlights">
              {highlights.map((item, i) => (
                <motion.li
                  key={item}
                  {...fadeUp(0.1 + i * 0.07)}
                  className="contact-highlight-item"
                >
                  <span className="contact-check">✦</span>
                  {item}
                </motion.li>
              ))}
            </ul>

            {/* Social icon buttons */}
            <div className="contact-socials">
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="contact-social-btn cursor-target"
                  aria-label={link.label}
                  {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
                  {...fadeUp(0.45 + i * 0.07)}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: form panel ── */}
          <motion.div className="contact-form-wrap" {...fadeUp(0.15)}>
            <form className="contact-form" onSubmit={handleSubmit} noValidate>

              <div className="contact-form-row">
                <div className="contact-field">
                  <label className="contact-label" htmlFor="cf-name">
                    Full Name <span className="contact-required">*</span>
                  </label>
                  <input
                    id="cf-name"
                    name="name"
                    type="text"
                    className="contact-input"
                    placeholder="Girija Shankar Ray"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-field">
                  <label className="contact-label" htmlFor="cf-email">
                    Email Address <span className="contact-required">*</span>
                  </label>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    className="contact-input"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="cf-subject">Subject</label>
                <input
                  id="cf-subject"
                  name="subject"
                  type="text"
                  className="contact-input"
                  placeholder="I have a project for you"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-field">
                <label className="contact-label" htmlFor="cf-message">
                  Message <span className="contact-required">*</span>
                </label>
                <textarea
                  id="cf-message"
                  name="message"
                  className="contact-input contact-textarea"
                  placeholder="Write your message..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="contact-submit btn btn-primary"
              >
                {submitted ? 'Opening mail client ✓' : 'Send Message ↗'}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ContactSection;
