/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import React from 'react';

import resume from '../assets/Resume.pdf';

import './ContentBanner.css';

// function for the desktop-specific content banner element //
function DesktopContentBanner() {
  return (
    <>
      <div className="top-section">
        <h1>RILEY KRAABEL</h1>
        <p>I'm a new-grad full-stack developer with a passion for <i>web-development</i>, <i>creativity</i>, and <i>collaboration</i>. Open to new opportunities and starting my professional career! </p>
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
    </>
  );
}

export default DesktopContentBanner;