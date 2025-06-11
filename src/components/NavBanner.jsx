/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './NavBanner.css';

// function for the general nav banner element //
function NavBanner() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path || location.hash === path;

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className={isActive("/") ? "nav-link active" : "nav-link"}>RK</Link>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li><Link to="/about" className={isActive("/about") ? "nav-link active" : "nav-link"}>About</Link></li>
                    <li><Link to="/projects" className={isActive("/projects") ? "nav-link active" : "nav-link"}>Projects</Link></li>
                    <li><Link to="/contact" className={isActive("/contact") ? "nav-link active" : "nav-link"}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBanner;