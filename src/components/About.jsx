import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import DesktopAbout from './DesktopAbout';
import MobileAbout from './MobileAbout';

import './About.css';

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