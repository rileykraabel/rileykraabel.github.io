import React, { useEffect, useRef, Link } from 'react';

import resume from '../assets/Resume.pdf';
import './ContentBanner.css';

function ContentBanner() {
  return (
    <div className="fullscreen-panel">
      {/* Squiggly line overlay */}
      <svg
        className="squiggly-overlay"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main flowing wave */}
        <path
          d="M-10,20 C20,15 40,35 60,25 C80,15 100,40 120,30"
          stroke="#359058"
          strokeWidth="3"
          fill="none"
          opacity="0.8"
        />

        {/* Second wave */}
        <path
          d="M-10,45 C25,40 35,60 70,50 C85,45 110,65 120,55"
          stroke="#03B2FC"
          strokeWidth="2.5"
          fill="none"
          opacity="0.6"
        />

        {/* Third wave */}
        <path
          d="M-10,70 C30,65 50,85 80,75 C95,70 115,90 120,80"
          stroke="#359058"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />

        {/* Additional subtle waves */}
        <path
          d="M-5,35 C15,30 45,50 75,40 C90,35 105,55 125,45"
          stroke="#E43FC1"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />

        <path
          d="M-5,60 C20,55 55,75 85,65 C100,60 115,80 125,70"
          stroke="#E43FC1"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />
      </svg>

      <div className="top-section">
        <h1>RILEY KRAABEL</h1>
        <p>I'm a new-grad Full-Stack Developer with a passion for <i>web-development</i>, <i>creativity</i>, and <i>collaboration</i>.</p>
      </div>
      <div className="bottom-section">
        <div className="links">
          <a href={resume} target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="mailto:rileykraabel@gmail.com?subject=Let's%20Connect!">Email</a>
          <a href="https://www.linkedin.com/in/rileykraabel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.github.com/rileykraabel" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <p>CHICAGO, IL</p>
      </div>
    </div>
  );
}

export default ContentBanner;