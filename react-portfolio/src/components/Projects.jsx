import React from 'react';
import Project from './Project';

import './Projects.css';

// import project1Img from '../assets/project2.jpg';

function Projects() {
    const projects = [
        {
            title: 'Portfolio Website',
            description: 'My personal site built with React and hosted on GitHub Pages.',
            // image: project1Img,
            link: 'https://yourportfolio.com',
        },
        {
            title: 'E-Commerce Store',
            description: 'An online store built with Shopify and custom checkout logic.',
            // image: project2Img,
            link: 'https://yourecommercestore.com',
        },
        // Add more projects here
    ];

    return (
        <div className="projects-main">
            <div className="projects-header">
                <h1>Previous Projects</h1>
            </div>
            <div className="projects-content">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;