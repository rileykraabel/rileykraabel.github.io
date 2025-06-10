import React from 'react';
import './NavBanner.css';

import { Link, useLocation } from 'react-router-dom';

function NavBanner() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path || location.hash === path;

    return (
        <nav className="navbar">
            <div className="navbar-top">
                <Link to="/" className={isActive("/") ? "nav-link active" : "nav-link"}>RK</Link>
            </div>
            <div className="navbar-bottom">
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