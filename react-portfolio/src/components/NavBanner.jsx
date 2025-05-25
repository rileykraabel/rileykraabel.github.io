import React from 'react';
import './NavBanner.css';

function NavBanner() {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    Riley Kraabel
                </a>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBanner;