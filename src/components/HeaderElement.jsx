import { useState, useEffect } from 'react';
import BlurText from "../hooks/BlurText";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";

import './HeaderElement.css'

function HeaderElement({ loaded }) {
    const [activeTab, setActiveTab] = useState('home');
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver((entries) => {
            let intersecting = false;
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveTab(entry.target.id);
                    intersecting = true;
                }
            });
            // Fallback for when scroll is exactly at top
            if (!intersecting && window.scrollY < 100) {
                setActiveTab('home');
            }
        }, { threshold: window.innerWidth < 768 ? 0.2 : 0.5 });

        sections.forEach(sec => observer.observe(sec));
        return () => observer.disconnect();
    }, []);

    const toggleTheme = () => {
        const isCurrentlyDark = document.documentElement.classList.contains('dark-theme');

        // update state properly
        setIsDark(!isCurrentlyDark);

        if (!document.startViewTransition) {
            document.documentElement.classList.toggle('dark-theme');
            return;
        }

        const transition = document.startViewTransition(() => {
            document.documentElement.classList.toggle('dark-theme');
        });

        transition.ready.then(() => {
            const x = window.innerWidth;
            const y = 0;

            const endRadius = Math.hypot(x, window.innerHeight);

            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`
            ];

            // ALWAYS animate the NEW layer expanding smoothly from the button
            document.documentElement.animate(
                {
                    clipPath: clipPath
                },
                {
                    duration: 700,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        });
    };
    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="left-section">
                <BlurText
                    text="Girija Ray."
                    delay={150}
                    animateBy="letters"
                    direction="bottom"
                    className="name-logo"
                    trigger={loaded}
                />
            </div>
            <nav className="header_items">
                <ul className={isMenuOpen ? "mobile-open" : ""}>
                    <li onClick={() => setIsMenuOpen(false)}>
                        <a href="#home" className={`header_item-text ${activeTab === 'home' ? 'active' : ''}`}>Home</a>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                        <a href="#about" className={`header_item-text ${activeTab === 'about' ? 'active' : ''}`}>About Me</a>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                        <a href="#skills" className={`header_item-text ${activeTab === 'skills' ? 'active' : ''}`}>Skills</a>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                        <a href="#works" className={`header_item-text ${activeTab === 'works' ? 'active' : ''}`}>Project</a>
                    </li>
                    <li onClick={() => setIsMenuOpen(false)}>
                        <a href="#contactUs" className={`header_item-text ${activeTab === 'contactUs' ? 'active' : ''}`}>Contact Me</a>
                    </li>
                    <li>
                        <a
                            href="/Girija_Ray_Resume.pdf"
                            download="Girija_Ray_Resume.pdf"
                            className="btn btn-primary btn-resume"
                        >Resume ↓
                        </a>
                    </li>
                </ul>

                <div className="header-buttons">
                    <button onClick={toggleTheme} className="btn-theme-toggle">
                        {isDark ? <MdOutlineLightMode size={40} /> : <MdLightMode size={40} />}
                    </button>
                    <button className="mobile-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? "✕" : "☰"}
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default HeaderElement;