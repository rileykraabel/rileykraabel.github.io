/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import { React, useState, useEffect } from 'react';

import DesktopProjects from './DesktopProjects';
import MobileProjects from './MobileProjects';

import './Projects.css';

// function for the general projects page (determines whether the user is on mobile or desktop) //
function Projects() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 500);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return isMobile ? <MobileProjects /> : <DesktopProjects />;
}

export default Projects;