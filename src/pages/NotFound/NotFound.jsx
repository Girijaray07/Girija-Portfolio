import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import PageTransition from '../../components/PageTransition/PageTransition';
import './NotFound.css';

function NotFound() {
  return (
    <PageTransition>
      <section className="notfound-section">
        <motion.div
          className="notfound-inner"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="notfound-code">404</div>
          <div className="notfound-terminal">
            <span className="notfound-prompt">$ </span>
            <span className="notfound-cmd">find page</span>
            <br />
            <span className="notfound-output">
              error: page not found in /portfolio/*
            </span>
          </div>
          <p className="notfound-msg">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/" className="btn btn-primary">
            ← Back to Home
          </Link>
        </motion.div>
      </section>
    </PageTransition>
  );
}

export default NotFound;
