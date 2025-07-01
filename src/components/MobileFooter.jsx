/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import React from 'react';
import { Link } from "react-router-dom";

import logo from '../assets/logo.png';

import './Footer.css';

// function for the mobile-specific footer element //
function MobileFooter() {
    return (
        <div className="footer-mobile-main">
            <div className="footer-content-mobile">
                <div className="footer-links-mobile">

                    <div className="footer-top">
                        <div className="footer-mobile-titles">
                            <p>&copy; rileykraabel.github.io </p>
                        </div>
                        <img src={logo} alt="logo" width="120" height="120"></img>
                    </div>

                    <div className="footer-middle">
                        <div className="footer-section-mobile">
                            <h2 className="footer-mobile-titles">EXPLORE</h2>

                            <Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</Link>
                            <Link to="/projects" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Projects</Link>
                            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact</Link>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="footer-section-mobile">
                            <h2 className="footer-mobile-titles">CONTACT</h2>
                            <a href="mailto:rileykraabel@gmail.com?subject=Let's%20Connect!">Email</a>
                            <a href="https://www.linkedin.com/in/rileykraabel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://www.github.com/rileykraabel" target="_blank" rel="noopener noreferrer">GitHub</a>
                            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
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

export default MobileFooter;