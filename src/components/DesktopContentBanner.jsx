/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import React from 'react';

import './ContentBanner.css';

// function for the desktop-specific content banner element //
function DesktopContentBanner() {
  return (
    <>
      <div className="top-section">
        <h1>RILEY KRAABEL</h1>
        <p>Hello! I'm a new-grad full-stack developer with a passion for <i>web-development</i>, <i>creativity</i>, and <i>collaboration</i>. Currently looking forward to continuing my professional career :) </p>
      </div>
      <div className="bottom-section">
        <p>AUSTIN, TX</p>
      </div>
    </>
  );
}

export default DesktopContentBanner;