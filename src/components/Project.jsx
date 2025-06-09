import React from 'react';
import './Project.css';

function Project({ title, description, image, link }) {
    return (
        <div className="project-main">
            <img src={image} alt={title} className="project-image" />
            <div className="project-info">
                <h2>{title}</h2>
                <p>{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
}

export default Project;