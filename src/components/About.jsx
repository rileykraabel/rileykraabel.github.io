/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import { React, useState, useEffect } from 'react';

import DesktopAbout from './DesktopAbout';
import MobileAbout from './MobileAbout';

import './About.css';

// function for the general footer element (determines whether the user is on mobile or desktop) //
function About() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 500);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile ? <MobileAbout /> : <DesktopAbout />;
}

export default About;