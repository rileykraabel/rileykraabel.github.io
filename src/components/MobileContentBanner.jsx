/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import React from 'react';

import './ContentBanner.css';

// function for the mobile-specific content banner element (home page) //
function MobileContentBanner() {
  return (
    <div className="fullscreen-panel">
      <div className="top-section-mobile">
        <h1>RILEY KRAABEL</h1>
        <p>I'm a new-grad full-stack developer with a passion for <i>web-development</i>, <i>creativity</i>, and <i>collaboration</i>. Open to new opportunities and starting my professional career! </p>
      </div>
      <div className="bottom-section-mobile">
        <p>CHICAGO, IL</p>
      </div>
    </div>
  );
}

export default MobileContentBanner;