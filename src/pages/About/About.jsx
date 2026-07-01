import React, { useEffect, useMemo, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import PageTransition from '../../components/PageTransition/PageTransition';
import ShinyText from '../../hooks/ShinyText';

import './About.css';

gsap.registerPlugin(ScrollTrigger);

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const stats = [
  { number: '6+', label: 'Projects' },
  { number: '3+', label: 'Years Coding' },
  { number: '7+', label: 'Technologies' },
  { number: '∞', label: 'Curiosity' },
];

const aboutParagraphs = [
  `I am a full-stack developer obsessed with building immersive digital experiences that feel fluid, intelligent, and alive. My work blends engineering precision with creative interaction design — from performant frontend systems to visually rich interfaces powered by motion, depth, and realtime interactivity.`,

  `Over the years, I have explored everything from scalable backend architecture to experimental frontend animation systems. I enjoy creating products where technology disappears into the experience itself — interfaces that feel tactile, cinematic, and deeply intuitive.`,

  `My journey into development started with pure curiosity. I would dismantle projects just to understand how they worked internally, rebuilding them piece by piece while learning design systems, rendering pipelines, and modern application architecture along the way.`,

  `Today, my primary focus revolves around React ecosystems, creative development, interactive UI engineering, and building polished developer experiences. I especially enjoy crafting systems that combine aesthetics, performance, and usability into a single cohesive experience.`,

  `Beyond writing code, I constantly explore visual storytelling, motion design, 3D interfaces, WebGL experiments, and advanced frontend animation workflows. I believe the future of the web lies in experiences that are not only functional — but emotionally engaging.`,

  `Right now, I am focused on building scalable products, refining my design engineering skills, and pushing the boundaries of modern frontend experiences through interaction, animation, and immersive interface design.`,
];

/* ═══════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════ */

const statCardVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
  },

  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.45,
      delay: i * 0.1,
      ease: 'easeOut',
    },
  }),
};

/* ═══════════════════════════════════════════════════════════
   SCROLL REVEAL COMPONENT
   ═══════════════════════════════════════════════════════════ */

function ScrollRevealText({ children }) {
  const containerRef = useRef(null);

  const words = useMemo(() => {
    const text = typeof children === 'string' ? children : '';

    return text.split(' ').map((word, i) => (
      <span
        key={i}
        className="about-reveal-word"
      >
        {word}&nbsp;
      </span>
    ));
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;

    if (!el) return;

    const wordEls = el.querySelectorAll('.about-reveal-word');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        end: 'bottom 45%',
        scrub: 1.2,
      },
    });

    tl.to(wordEls, {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,

      stagger: {
        each: 0.035,
        from: 'start',
      },

      ease: 'power2.out',
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="about-scroll-reveal"
    >
      <p className="about-scroll-reveal-text">
        {words}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   ABOUT PAGE
   ═══════════════════════════════════════════════════════════ */

function About() {
  return (
    <PageTransition>
      <article className="about-page">

        <div className="about-page-inner">

          {/* HEADER */}

          <motion.header
            className="about-header"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: 'easeOut',
            }}
          >

            <div className="section-label">
              Introducing Me
            </div>

            <h1 className="section-title">
              <ShinyText
                text="About Me"
                speed={3}
                color="#c0c0d0"
                shineColor="#00dce8"
              />
            </h1>

            <div className="section-divider" />

          </motion.header>

          {/* SCROLL REVEAL PARAGRAPHS */}

          <div className="about-description">
            {aboutParagraphs.map((para, i) => (
              <section
                key={i}
                className="about-scroll-section"
              >
                <ScrollRevealText>
                  {para}
                </ScrollRevealText>
              </section>
            ))}
          </div>

          {/* STATS */}

          <div className="about-stats">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                variants={statCardVariants}
                whileHover={{
                  y: -6,
                  rotateX: 3,
                  rotateY: -3,
                  transition: {
                    duration: 0.25,
                  },
                }}
              >
                <div className="stat-number">
                  {stat.number}
                </div>

                <div className="stat-label">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </article>
    </PageTransition>
  );
}

export default About;