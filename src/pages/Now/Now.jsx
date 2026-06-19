import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FiGithub, FiExternalLink, FiBookOpen, FiTarget, FiCpu, FiCode, FiZap, FiTrendingUp } from 'react-icons/fi';
import PageTransition from '../../components/PageTransition/PageTransition';
import ShinyText from '../../hooks/ShinyText';

import './Now.css';

/* ── Data ── */
const STATUS = { label: 'Available for work', color: '#22c55e' };
const LAST_UPDATED = 'June 2026';

const currentFocus = [
  {
    icon: <FiCode />,
    title: 'Building',
    desc: 'Full-stack portfolio with 3D visuals, React Router architecture, and premium UI.',
    progress: 75,
    accent: '#3b82f6',
  },
  {
    icon: <FiBookOpen />,
    title: 'Learning',
    desc: 'Advanced system design, AI/ML pipelines, and cloud-native architecture patterns.',
    progress: 45,
    accent: '#a855f7',
  },
  {
    icon: <FiTarget />,
    title: 'Exploring',
    desc: 'WebGPU, Rust for performance-critical apps, and edge computing platforms.',
    progress: 30,
    accent: '#f59e0b',
  },
];

const currentlyLearning = [
  { name: 'System Design', progress: 60 },
  { name: 'Docker & K8s', progress: 50 },
  { name: 'TypeScript', progress: 70 },
  { name: 'AI/ML with Python', progress: 40 },
  { name: 'AWS Cloud', progress: 45 },
  { name: 'GraphQL', progress: 35 },
];

const currentlyBuilding = [
  {
    title: 'Portfolio v3',
    desc: 'Multi-page React portfolio with 3D visuals and route transitions.',
    status: 'In Progress',
    statusColor: '#3b82f6',
    link: 'https://girijaray.dev',
  },
  {
    title: 'MediAssist AI',
    desc: 'AI-powered healthcare assistant with LLM pipelines and real-time support.',
    status: 'Shipped',
    statusColor: '#22c55e',
    link: 'https://mediassistai.girijaray.dev',
  },
  {
    title: 'Dev Toolkit CLI',
    desc: 'Command-line utility for scaffolding projects and automating workflows.',
    status: 'Paused',
    statusColor: '#f59e0b',
    link: '',
  },
];

const timeline = [
  { year: '2022', milestone: 'Started CS degree & first Python program', done: true },
  { year: '2023', milestone: 'Built first React app & learned Node.js', done: true },
  { year: '2024', milestone: 'Launched portfolio v1 with Three.js & GSAP', done: true },
  { year: '2025', milestone: 'Freelance projects & open source contributions', done: true },
  { year: '2026', milestone: 'Advanced full-stack & AI/ML integrations', done: false },
  { year: 'Next', milestone: 'SaaS product launch & DevOps mastery', done: false },
];

const reading = [
  { title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', progress: 60 },
  { title: 'The Pragmatic Programmer', author: 'Hunt & Thomas', progress: 85 },
  { title: 'Clean Architecture', author: 'Robert C. Martin', progress: 40 },
];

const exploringChips = [
  'WebGPU', 'Rust', 'Bun', 'Deno', 'tRPC', 'Astro', 'Turbopack',
  'Edge Functions', 'Wasm', 'LangChain', 'RAG', 'Vector DBs',
];

const terminalLines = [
  '$ whoami',
  'Girija Shankar Ray — Full-Stack Developer and AI Engineer',
  '',
  '$ cat current_stack.txt',
  'React · Node.js · PostgreSQL · Python · Docker · AWS',
  '',
  '$ git log --oneline -3',
  'a1b2c3d  feat: add /now page to portfolio',
  'd4e5f6g  refactor: multi-page React Router',
  'h7i8j9k  style: MediAssist AI Backend Workflow',
  '',
];

/* ── GitHub Contribution Graph (mock) ── */
function GitHubGraph() {
  const weeks = 20;
  const days = 7;

  // Generate deterministic-ish contribution data
  const cells = [];
  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < days; d++) {
      const seed = (w * 7 + d * 13 + 42) % 100;
      let level = 0;
      if (seed > 30) level = 1;
      if (seed > 55) level = 2;
      if (seed > 75) level = 3;
      if (seed > 90) level = 4;
      cells.push({ w, d, level });
    }
  }

  return (
    <div className="now-github">
      <div className="now-github-header">
        <FiGithub />
        <span>GitHub Contributions</span>
        <a
          href="https://github.com/Girijaray07/?utm_source=girijaray.dev&utm_medium=Portfolio&utm_campaign=showcase"
          target="_blank"
          rel="noopener"
          className="now-github-link"
        >
          <b>View Profile <FiExternalLink size={12} /></b>
        </a>
      </div>
      <div className="now-github-grid">
        {cells.map((cell, i) => (
          <div
            key={i}
            className={`now-github-cell level-${cell.level}`}
            style={{
              gridRow: cell.d + 1,
              gridColumn: cell.w + 1,
            }}
          />
        ))}
      </div>
      <div className="now-github-legend">
        <span>Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <div key={l} className={`now-github-cell level-${l}`} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

/* ── Terminal Section ── */
function MiniTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines < terminalLines.length) {
      const timer = setTimeout(
        () => setVisibleLines((v) => v + 1),
        visibleLines === 0 ? 600 : 180
      );
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  return (
    <div className="now-terminal">
      <div className="now-terminal-bar">
        <div className="now-terminal-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="now-terminal-title">girija@dev ~ </span>
      </div>
      <div className="now-terminal-body">
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="now-terminal-line">
            {line.startsWith('$') ? (
              <>
                <span className="now-terminal-prompt">$ </span>
                <span className="now-terminal-cmd">{line.slice(2)}</span>
              </>
            ) : (
              <span className="now-terminal-output">{line}</span>
            )}
          </div>
        ))}
        {visibleLines < terminalLines.length && (
          <span className="now-terminal-cursor">▋</span>
        )}
      </div>
    </div>
  );
}

/* ── Main Page ── */
function Now() {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: { duration: 0.45, delay, ease: 'easeOut' },
  });

  return (
    <PageTransition>
      <section id="now-page" className="now-page">
        <div className="section-inner now-inner">

          {/* ── Header ── */}
          <motion.div {...fadeUp(0)} className="now-header">
            <div className="now-header-row">
              <div>
                <div className="section-label">What I'm Doing Now</div>
                <h1 className="section-title">
                  <ShinyText
                    text="Now"
                    speed={3}
                    color="#c0c0d0"
                    shineColor="#00dce8"
                  />
                </h1>
                <div className="section-divider" />
              </div>
              <div className="now-meta">
                <div className="now-status-badge">
                  <span
                    className="now-status-dot"
                    style={{ background: STATUS.color }}
                  />
                  {STATUS.label}
                </div>
                <div className="now-updated">Last updated: {LAST_UPDATED}</div>
              </div>
            </div>
            <p className="now-intro">
              Inspired by{' '}
              <a href="https://nownownow.com/about" target="_blank" rel="noopener">
                Derek Sivers' /now page
              </a>{' '}
              concept — a snapshot of what I'm focused on right now, updated regularly.
            </p>
          </motion.div>

          {/* ── Current Focus Cards ── */}
          <motion.div {...fadeUp(0.05)}>
            <div className="now-section-label">
              <FiZap /> Current Focus
            </div>
            <div className="now-focus-grid">
              {currentFocus.map((item, i) => (
                <motion.div
                  key={item.title}
                  className="now-focus-card"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                >
                  <div className="now-focus-icon" style={{ color: item.accent }}>
                    {item.icon}
                  </div>
                  <h3 className="now-focus-title">{item.title}</h3>
                  <p className="now-focus-desc">{item.desc}</p>
                  <div className="now-progress-bar">
                    <motion.div
                      className="now-progress-fill"
                      style={{ background: item.accent }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                    />
                  </div>
                  <span className="now-progress-label">{item.progress}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Two-column: Learning + Building ── */}
          <div className="now-two-col">
            {/* Currently Learning */}
            <motion.div {...fadeUp(0.05)}>
              <div className="now-section-label">
                <FiTrendingUp /> Currently Learning
              </div>
              <div className="now-learning-list">
                {currentlyLearning.map((item, i) => (
                  <motion.div
                    key={item.name}
                    className="now-learning-item"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                  >
                    <div className="now-learning-header">
                      <span className="now-learning-name">{item.name}</span>
                      <span className="now-learning-pct">{item.progress}%</span>
                    </div>
                    <div className="now-progress-bar">
                      <motion.div
                        className="now-progress-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Currently Building */}
            <motion.div {...fadeUp(0.1)}>
              <div className="now-section-label">
                <FiCpu /> Currently Building
              </div>
              <div className="now-building-list">
                {currentlyBuilding.map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="now-building-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <div className="now-building-header">
                      <h4 className="now-building-title">{item.title}</h4>
                      <span
                        className="now-building-status"
                        style={{ borderColor: item.statusColor, color: item.statusColor }}
                      >
                        {item.status}
                      </span>
                    </div>
                    <p className="now-building-desc">{item.desc}</p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener"
                        className="now-building-link"
                      >
                        View <FiExternalLink size={12} />
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── Learning Roadmap Timeline ── */}
          <motion.div {...fadeUp(0.05)}>
            <div className="now-section-label">
              <FiTarget /> Learning Roadmap
            </div>
            <div className="now-timeline">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  className={`now-timeline-item ${item.done ? 'done' : 'pending'}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="now-timeline-dot" />
                  <div className="now-timeline-year">{item.year}</div>
                  <div className="now-timeline-milestone">{item.milestone}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Reading & Courses ── */}
          <motion.div {...fadeUp(0.05)}>
            <div className="now-section-label">
              <FiBookOpen /> Reading
            </div>
            <div className="now-reading-grid">
              {reading.map((book, i) => (
                <motion.div
                  key={book.title}
                  className="now-reading-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                >
                  <div className="now-reading-title">{book.title}</div>
                  <div className="now-reading-author">{book.author}</div>
                  <div className="now-progress-bar">
                    <motion.div
                      className="now-progress-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${book.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                    />
                  </div>
                  <span className="now-reading-pct">{book.progress}%</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Currently Exploring Chips ── */}
          <motion.div {...fadeUp(0.05)}>
            <div className="now-section-label">
              <FiZap /> Currently Exploring
            </div>
            <div className="now-chips">
              {exploringChips.map((chip, i) => (
                <motion.span
                  key={chip}
                  className="now-chip"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{
                    y: -3,
                    scale: 1.05,
                    transition: { duration: 0.15 },
                  }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* ── Mini Terminal ── */}
          <motion.div {...fadeUp(0.05)}>
            <MiniTerminal />
          </motion.div>

          {/* ── GitHub Activity ── */}
          <motion.div {...fadeUp(0.05)}>
            <GitHubGraph />
          </motion.div>

        </div>
      </section>
    </PageTransition>
  );
}

export default Now;
