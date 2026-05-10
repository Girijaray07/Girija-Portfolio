import { useState, useEffect } from 'react';
import { X } from "lucide-react";
import BlurText from "../hooks/BlurText";
import { MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { RiGithubFill, RiLinkedinFill, RiDiscordFill } from "react-icons/ri";

import './HeaderElement.css'

function HeaderElement({ loaded }) {
    const [activeTab, setActiveTab] = useState('home');
    const [isDark, setIsDark] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        <header className="header">
            <a href="#home" className="left-section">
                <BlurText
                    text="Girija"
                    delay={150}
                    animateBy="letters"
                    direction="bottom"
                    className="name-logo"
                    trigger={loaded}
                />
            </a>
            <nav className="header_items">
                <ul className={isMenuOpen ? "mobile-open" : ""}>
                    <button
                        className="mobile-close-btn"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    ><X size={32} strokeWidth={2} />
                    </button>
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
                        <a href="#contactUs" className={`header_item-text ${activeTab === 'contactUs' ? 'active' : ''}`}>Contact</a>
                    </li>
                    {/* <li>
                        <a
                            href="/Girija_Ray_Resume.pdf"
                            download="Girija_Ray_Resume.pdf"
                            className="btn btn-primary btn-resume"
                        >Resume ↓
                        </a>
                    </li> */}
                </ul>
            </nav>
            <div className="right-section">
                <div className="header-links">
                    <a href="https://github.com/Girijaray07?ref=girijaray.dev"
                        target="_blank"
                        rel="noopener"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="header-social-link"
                    ><RiGithubFill />
                    </a>

                    <a href="https://discord.gg/JtbQfghp?ref=girijaray.dev"
                        target="_blank"
                        rel="noopener"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="header-social-link"
                    ><RiDiscordFill />
                    </a>

                    <a href="https://www.linkedin.com/in/girija-shankar-ray/?ref=girijaray.dev"
                        target="_blank"
                        rel="noopener"
                        referrerPolicy="strict-origin-when-cross-origin"
                        className="header-social-link"
                    ><RiLinkedinFill />
                    </a>
                </div>
                <div className="header-divider">|</div>
                <div className="header-buttons">
                    <button onClick={toggleTheme} className="btn-theme-toggle">
                        {isDark ? <MdOutlineLightMode size={30} /> : <MdLightMode size={30} />}
                    </button>
                    <button className="mobile-hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6 text-black dark:text-white"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default HeaderElement;