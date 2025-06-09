import React from 'react';
import './NavBanner.css';

import { Link } from "react-router-dom";
import texture from '../assets/texture.png';

function NavBanner() {
    return (
        <nav className="navbar">
            <div className="navbar-top">
                <Link to="/">Riley Kraabel</Link>
            </div>
            <div className="navbar-bottom">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBanner;