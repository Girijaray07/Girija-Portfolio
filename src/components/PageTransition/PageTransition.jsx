import React from 'react';
import { motion } from 'motion/react';
import './PageTransition.css';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.99,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.99,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
};

/**
 * Wraps page content with smooth fade + slide transition.
 * Usage: <PageTransition><YourPageContent /></PageTransition>
 */
function PageTransition({ children, className = '' }) {
  return (
    <motion.div
      className={`page-transition ${className}`}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

export default PageTransition;
