/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import React from 'react';
import { Link } from "react-router-dom";

import resume from '../assets/Resume.pdf';
import logo from '../assets/logo.png';

import './Footer.css';

// function for the desktop-specific footer element //
function DesktopFooter() {
    return (
        <div className="footer-main">
            <div className="footer-content">
                <div className="footer-links">

                    <div className="footer-left">
                        <div className="footer-section-titles">
                            <p>&copy; rileykraabel.github.io </p>
                        </div>
                        <img src={logo} alt="logo" width="120" height="120"></img>
                    </div>

                    <div className="footer-center-left">
                        <div className="footer-section">
                            <h2 className="footer-section-titles">PROJECTS</h2>
                            <Link to="/projects/#portfolio">Portfolio</Link>
                            <Link to="/projects/#apr">Air Power Racing</Link>
                            <Link to="/projects/#chat-app">Chat Application</Link>
                            <Link to="/projects/#custom-db">Custom LMS Database</Link>
                            <Link to="/projects/#mobile-app">Mobile Drawing Application</Link>
                            <Link to="/projects/#canvas-dupe">Canvas / LMS Dupe</Link>
                            <Link to="/projects/#cooking-game">2D Cooking Game</Link>
                            <Link to="/projects/#agario-game">Agar.io Dupe Game</Link>
                            <Link to="/projects/#spreadsheet">Spreadsheet</Link>
                        </div>
                    </div>

                    <div className="footer-center-right">
                        <div className="footer-section">
                            <h2 className="footer-section-titles">EXPLORE</h2>
                            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link>
                            <Link to="/projects" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Projects</Link>
                            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact</Link>
                        </div>
                    </div>

                    <div className="footer-right">
                        <div className="footer-section">
                            <h2 className="footer-section-titles">CONTACT</h2>
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

export default DesktopFooter;