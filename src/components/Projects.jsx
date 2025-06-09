import React from 'react';
import Project from './Project';
import ProjectDetails from './ProjectDetails';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './Projects.css';

// import project1Img from '../assets/project2.jpg';
import airpowerracing from '../assets/airpowerracing-site.png';
import webdev2 from '../assets/welcome-1.png';
import webdev1 from '../assets/3550-1.png';
import dbsystems from '../assets/db-lms.png';

function Projects() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const el = document.querySelector(location.hash);
            if (el) {
                // Delay needed if images or layout hasn't rendered yet
                setTimeout(() => {
                    el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const projects = [
        {
            title: 'Portfolio Website',
            description: "You're already here! My personal portfolio site, built using React / CSS and deployed to GitHub Pages.",
            // image: project1Img,
            link: 'https://www.rileykraabel.github.io/',
            id: 'portfolio',
        },
        {
            title: 'Air Power Racing',
            description: 'My capstone project; a custom site built using Bubble.io for a local Salt Lake City company, Air Power Racing. I worked on the database implementation along with front to back end integration. This project lasted the entirety of my senior year, and was created with a team of 3 other students.',
            image: airpowerracing,
            link: 'https://www.airpowerracing.com',
            id: 'apr',
        },
        {
            title: 'Canvas / LMS Dupe',
            description: 'My introductory web programming course involved creating a Canvas "dupe" LMS by using a Django backend, and using HTML / CSS for front-end styling. The project was mainly to practice using basic elements, and was added onto throughout the entire Fall 2023 semester.',
            image: webdev1,
            link: 'https://github.com/rileykraabel/lms-app',
            id: 'canvas-dupe',
        },
        {
            title: 'Chat Application',
            description: 'My second web programming course required us to create a custom, full-stack chat application using React, Swagger, and Python FastAPI. Users are able to send/receive messages from other authenticated users, and manage chat features as an admin. This project spanned the Spring 2024 semester.',
            image: webdev2,
            link: 'https://github.com/rileykraabel/chat-app-project',
            id: 'chat-app',
        },
        {
            title: 'Custom LMS Database',
            description: 'For my Database Systems course, me and a partner designed and implemented a relational database system consisting of 10+ interconnected tables. From there, we connected the MySQL database to a simple, course-provided frontend application using C#, LINQ, and .NET Core.',
            image: dbsystems,
            link: '',
            id: 'custom-db',
        }
        // Add more projects here
    ];

    return (
        <div className="projects-main">
            <div className="projects-header">
                <h1>Previous Projects</h1>
            </div>

            {projects.map((project, index) => (
                <section className="project-section" id={project.id} key={index}>
                    <div className="project-image">
                        {project.image && <img src={project.image} alt={project.title} />}
                    </div>
                    <div className="project-info">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            {project.link && (
                                <a href={project.link} target="_blank" rel="noreferrer">
                                    View Project →
                                </a>
                            )}
                    </div>
                </section>
            ))}
        </div>
    );
}

export default Projects;