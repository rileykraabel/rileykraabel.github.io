import React from 'react';

import './ProjectDetails.css';

function ProjectDetails({ title, longdescription, image, link }) {
    return (
        <div className="projectdetails-main">
            <h2>{title}</h2>
            <img src={image} alt={title} className="proj-details-image"/>
            <div className="details-content">
                <p>{longdescription}</p>
                <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    );
}

export default ProjectDetails;