import React from 'react';
import { Link } from "react-router-dom";

import resume from '../assets/Resume.pdf';
import texture from '../assets/texture.png';

import './Footer.css';

function Footer() {
    return (
        <div className="footer-main">
            <div className="footer-content">
                <div className="footer-links">

                    <div className="footer-left">
                        <p>&copy; rileykraabel.github.io </p>
                    </div>

                    <div className="footer-center-left">
                        <div className="footer-section">
                            <h2 className="footer-section-titles">Projects</h2>
                            <Link to="/projects/#portfolio">Portfolio</Link>
                            <Link to="/projects/#apr">Air Power Racing</Link>
                            <Link to="/projects/#canvas-dupe">Canvas/LMS Dupe</Link>
                            <Link to="/projects/#chat-app">Chat Application</Link>
                            <Link to="/projects/#custom-db">Custom LMS Database</Link>
                        </div>
                    </div>

                    <div className="footer-center-right">
                        <div className="footer-section">
                            <h2 className="footer-section-titles">Explore</h2>
                            <a href="/about">About</a>
                            <a href="/projects">Projects</a>
                            <a href="/contact">Contact</a>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="footer-section">
                            <h2 className="footer-section-titles">Contact</h2>
                            <a href="mailto:rileykraabel@gmail.com?subject=Let's%20Connect!">Email</a>
                            <a href="https://www.linkedin.com/in/rileykraabel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://www.github.com/rileykraabel" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={scrollToTop} className="scroll-top-arrow" aria-label="Scroll to top">
                ↑
            </button>
            <p>this site was hand-crafted and designed by Riley Kraabel.</p>
        </div >
    );
}

// method to bounce back to the top of the page //
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default Footer;