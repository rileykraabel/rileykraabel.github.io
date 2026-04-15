/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import React from 'react';
import { Link } from "react-router-dom";

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
                    </div>

                    <div className="footer-right">
                        <div className="footer-section">
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

export default DesktopFooter;