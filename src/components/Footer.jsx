/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import { React, useState, useEffect } from 'react';

import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

import './Footer.css';

// function for the general footer element (determines whether the user is on mobile or desktop) //
function Footer() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 500);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile ? <MobileFooter /> : <DesktopFooter />;
}

export default Footer;