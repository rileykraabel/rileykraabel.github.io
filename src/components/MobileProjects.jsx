/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './Projects.css';
import projects from './projects.js';

// function for the mobile-specific version of the 'projects' page //
function MobileProjects() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <div className="projects-main">
            <div className="projects-header">
                <h1>PREVIOUS PROJECTS</h1>
            </div>

            {projects.map((project, index) => (
                <section className="mobile-project-section" id={project.id} key={index}>
                    <div className="mobile-project-image">
                        {project.image && <img src={project.image} alt={project.title} />}
                    </div>
                    <div className="mobile-project-info">
                        <h2>{project.title}</h2>
                        <h3>{project.dates}</h3>
                        <p>{project.description}</p>
                        {project.link && (
                            <a href={project.link} target="_blank" rel="noreferrer">
                                VIEW PROJECT →
                            </a>
                        )}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default MobileProjects;