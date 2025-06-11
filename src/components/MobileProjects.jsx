import { React, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './Projects.css';

import project1Img from '../assets/portfolio-home.png';
import airpowerracing from '../assets/airpowerracing-site.png';
import webdev2 from '../assets/welcome-1.png';
import webdev1 from '../assets/3550-1.png';
import dbsystems from '../assets/db-lms.png';

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

    const projects = [
        {
            title: 'PORTFOLIO WEBSITE',
            dates: 'June 2025',
            description: "You're already here! My personal portfolio site, built using React and CSS, and deployed to GitHub Pages using Git. I wanted to incorporate more of my own personal touch into this project, and hope you enjoy it!",
            image: project1Img,
            link: 'https://www.rileykraabel.github.io/',
            id: 'portfolio',
        },
        {
            title: 'AIR POWER RACING',
            dates: 'Planning: Fall 2024 Implementation: Spring 2025',
            description: 'My capstone project; a custom site built using Bubble.io for a local Salt Lake City company, Air Power Racing. I worked on the database implementation along with front to back end integration. This project was created with a team of 3 other students.',
            image: airpowerracing,
            link: 'https://www.airpowerracing.com',
            id: 'apr',
        },
        {
            title: 'CHAT APPLICATION',
            dates: 'Spring 2024',
            description: 'My second web programming course required us to create a custom, full-stack chat application using React, Swagger, and Python FastAPI. Users are able to send/receive messages from other authenticated users, and manage chat features as an admin.',
            image: webdev2,
            link: 'https://github.com/rileykraabel/chat-app-project',
            id: 'chat-app',
        },
        {
            title: 'CUSTOM LMS DATABASE',
            dates: 'Spring 2024',
            description: 'For my Database Systems course, me and a partner designed and implemented a relational database system consisting of 10+ interconnected tables. From there, we connected the MySQL database to a simple, course-provided frontend application using C#, LINQ, and .NET Core.',
            image: dbsystems,
            link: '',
            id: 'custom-db',
        },
        {
            title: 'CANVAS / LMS DUPE',
            dates: 'Fall 2023',
            description: 'My introductory web programming course involved creating a Canvas "dupe" LMS by using a Django backend, and using HTML / CSS for front-end styling. The project was mainly to practice using basic elements, and included functionalities such as grading assignments, role-based management, and submissions.',
            image: webdev1,
            link: 'https://github.com/rileykraabel/lms-app',
            id: 'canvas-dupe',
        },
        // Add more projects here
    ];

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