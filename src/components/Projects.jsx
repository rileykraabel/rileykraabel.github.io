import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import DesktopProjects from './DesktopProjects';
import MobileProjects from './MobileProjects';

import './Projects.css';

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