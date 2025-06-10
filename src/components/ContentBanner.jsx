import React, { useState, useEffect, useRef, Link } from 'react';

import resume from '../assets/Resume.pdf';

import MobileContentBanner from './MobileContentBanner.jsx';
import DesktopContentBanner from './DesktopContentBanner.jsx';

import './ContentBanner.css';

function ContentBanner() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 500);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile ? <MobileContentBanner /> : <DesktopContentBanner />;
}

export default ContentBanner;