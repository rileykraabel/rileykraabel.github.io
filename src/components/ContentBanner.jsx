/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import React, { useState, useEffect, useRef, Link } from 'react';

import MobileContentBanner from './MobileContentBanner.jsx';
import DesktopContentBanner from './DesktopContentBanner.jsx';

import './ContentBanner.css';

// function for the general content banner element (determines whether the user is on mobile or desktop) //
function ContentBanner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const InnerContent = isMobile ? <MobileContentBanner /> : <DesktopContentBanner />;

  return (
    <div className="fullscreen-panel">
      {InnerContent}

      {/* Reusable SVG overlay */}
      <svg
        className="squiggly-overlay"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-10,20 C20,15 40,35 60,25 C80,15 100,40 120,30"
          stroke="#359058"
          strokeWidth="3"
          fill="none"
          opacity="0.8"
        />
        <path
          d="M-10,45 C25,40 35,60 70,50 C85,45 110,65 120,55"
          stroke="#03B2FC"
          strokeWidth="2.5"
          fill="none"
          opacity="0.6"
        />
        <path
          d="M-10,70 C30,65 50,85 80,75 C95,70 115,90 120,80"
          stroke="#359058"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
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
    </div>
  );

}

export default ContentBanner;