import { React, useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import DesktopFooter from './DesktopFooter';
import MobileFooter from './MobileFooter';

import './Footer.css';

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