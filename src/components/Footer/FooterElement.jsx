import React from 'react';
import { motion } from 'motion/react';
import './FooterElement.css';

function FooterElement() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <p className="footer-text">
        Designed &amp; Built by{' '}
        <span className="footer-accent">Girija Shankar Ray</span>{' '}
        © 2026
      </p>
    </motion.footer>
  );
}

export default FooterElement;
