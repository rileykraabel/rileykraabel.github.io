import React from 'react';

import mountainImage from '../assets/mountain.jpg';

import './About.css';

function About() {
    return (
        <div className="about-main">
            <div className="about-header">
                <h1>ABOUT ME!</h1>
            </div>
            <div className="about-content">
                <div className="about-left">
                    <img src={mountainImage} alt="Mountain" />
                </div>
                <div className="about-right">
                    <p>
                        I recently graduated from the University of Utah with a Bachelor of Science in Software Development (May 2025).
                        I am excited and passionate about web and full-stack development, designing functional and creative user interfaces, and database management.

                    <br /><br />
                        I love to learn, and hope to apply the skills I learned in undergrad to create new, exciting systems that make life easier for users.
                    <br /><br />
                        When I'm not programming, I'm either reading, traveling, or spending time outdoors! I have been fortunate enough to spend the past few years
                        of my life exploring new places and trying new things, and hope to continue this in the years to come.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;