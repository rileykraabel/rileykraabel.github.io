import React from 'react';
import resume from '../Resume.pdf';

import './Footer.css';

function Footer() {
    return (
        <div className="footer-main">
            <div className="footer-header">
                <h1> footer goes here! </h1>
            </div>
            <div className="footer-content">
                <p>Copyright &copy; 2025 Riley Kraabel</p>
                <div className="footer-links">
                    <div className="footer-section-links">
                        <h2 className="footer-section-titles">Projects</h2>
                        <a href="/">Project 1</a>

                    </div>
                    <div className="footer-section-links">
                        <h2 className="footer-section-titles">Jump To</h2>
                        <a href="/About">About</a>
                        <a href="/projects">Projects</a>
                        <a href="/contact">Contact</a>
                    </div>
                    <div className="footer-section-links">
                        <h2 className="footer-section-titles">Contact</h2>
                        <a href="mailto:rileykraabel@gmail.com?subject=Let's%20Connect!">Email</a>
                        <a href="https://www.linkedin.com/in/rileykraabel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        <a href="https://www.github.com/rileykraabel" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                    </div>
                </div>
            </div>
            <button onClick={scrollToTop} className="scroll-top-arrow" aria-label="Scroll to top">
                ↑
            </button>
        </div>
    );
}

// method to bounce back to the top of the page //
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default Footer;