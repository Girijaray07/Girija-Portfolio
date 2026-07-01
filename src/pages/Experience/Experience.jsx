import { motion } from 'framer-motion';
import ShinyText from '../../hooks/BlurText';

const experiences = [
    {
        role: 'Full Stack Developer',
        company: 'Freelance / Personal Projects',
        duration: 'Jan 2024 - Present',
        description:
            'Building production-grade web applications using React, Node.js, and cloud services. Delivered multiple client projects including business platforms, AI-powered assistants, and interactive portfolios with 3D visualizations.',
        logo: 'F',
        tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    },
    {
        role: 'Open Source Contributor',
        company: 'GitHub Community',
        duration: 'Jun 2023 - Present',
        description:
            'Contributing to open-source projects focused on developer tooling and frontend frameworks. Building reusable component libraries, animation hooks, and creative coding experiments shared with the developer community.',
        logo: 'G',
        tags: ['Open Source', 'React', 'Three.js', 'GSAP'],
    },
    {
        role: 'Computer Science Student',
        company: 'University',
        duration: '2022 - Present',
        description:
            'Pursuing a degree in Computer Science with focus on software engineering, data structures, algorithms, and full-stack web development. Continuously expanding knowledge through courses, certifications, and hands-on projects.',
        logo: 'U',
        tags: ['DSA', 'Java', 'Python', 'ML', 'Web Dev'],
    },
];

const experienceCardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.4,
            delay: i * 0.08,
            ease: 'easeOut',
        },
    },
};

return (
    <>
        <motion.div
            className="about-experience-header"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <div className="section-label">My Journey</div>
            <h2 className="section-title">
                <ShinyText
                    text="Experience"
                    speed={4}
                    color="#c0c0d0"
                    shineColor="#00dce8"
                />
            </h2>
            <div className="section-divider" />
        </motion.div>

        <div className="about-timeline">
            {experiences.map((exp, i) => (
                <motion.div
                    key={i}
                    className="experience-card"
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={experienceCardVariants}
                    whileHover={{
                        y: -3,
                        x: -2,
                        boxShadow: '8px 8px 0 var(--border)',
                        transition: { duration: 0.2, ease: 'easeOut' },
                    }}
                    style={{ perspective: 800 }}
                >
                    <div className="experience-card-dot" />

                    <div className="experience-card-header">
                        <div className="experience-logo">{exp.logo}</div>
                        <div className="experience-meta">
                            <h3 className="experience-role">{exp.role}</h3>
                            <span className="experience-company">{exp.company}</span>
                        </div>
                        <span className="experience-duration">{exp.duration}</span>
                    </div>

                    <p className="experience-desc">{exp.description}</p>

                    <div className="experience-tags">
                        {exp.tags.map((tag) => (
                            <span key={tag} className="experience-tag">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
            ))}
        </div>
    </>
)