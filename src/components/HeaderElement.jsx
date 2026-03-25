import { useState, useEffect } from 'react';
import BlurText from "../hooks/BlurText";

import './HeaderElement.css'

function HeaderElement() {
    const [activeTab, setActiveTab] = useState('home');

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
        if (!document.startViewTransition) {
            document.documentElement.classList.toggle('dark-theme');
            return;
        }

        const isDark = document.documentElement.classList.contains('dark-theme');
        
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

            document.documentElement.animate(
                {
                    clipPath: isDark ? [...clipPath].reverse() : clipPath,
                },
                {
                    duration: 600,
                    easing: "ease-in-out",
                    pseudoElement: isDark ? "::view-transition-old(root)" : "::view-transition-new(root)",
                }
            );
        });
    };
    return (
        <header className='header'>
            <div className="left-section">
                <BlurText
                    text="Girija Ray."
                    delay={150}
                    animateBy="letters"
                    direction="bottom"
                    className="name-logo"
                />
            </div>
            <nav className="header_items">
                <ul>
                    <li>
                        <a href="#home" className={`header_item-text ${activeTab === 'home' ? 'active' : ''}`}>Home</a>
                    </li>
                    <li>
                        <a href="#about" className={`header_item-text ${activeTab === 'about' ? 'active' : ''}`}>About Me</a>
                    </li>
                    <li>
                        <a href="#skills" className={`header_item-text ${activeTab === 'skills' ? 'active' : ''}`}>Skills</a>
                    </li>
                    <li>
                        <a href="#works" className={`header_item-text ${activeTab === 'works' ? 'active' : ''}`}>Project</a>
                    </li>
                    <li>
                        <a href="#contactUs" className={`header_item-text ${activeTab === 'contactUs' ? 'active' : ''}`}>Contact Me</a>
                    </li>
                </ul>

                <div className="header-buttons">
                    <a
                        href="/Girija_Ray_Resume.pdf"
                        download="Girija_Shankar_Ray_Resume.pdf"
                        className="btn btn-primary btn-resume"
                    >Resume ↓
                    </a>
                    <button onClick={toggleTheme} className="btn btn-theme-toggle">
                        ☯
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default HeaderElement;