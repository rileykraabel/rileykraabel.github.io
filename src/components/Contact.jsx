/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import React from 'react';

import ContactBubble from './ContactBubble';

import './Contact.css';

// define the specific links to display //
const links = [
    {
        title: "Email",
        link: "mailto:rileykraabel@gmail.com?subject=Let's%20Connect!"
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/rileykraabel"
    },
    {
        title: "GitHub",
        link: "https://www.github.com/rileykraabel"
    },
    {
        title: "Resume",
        link: "/Resume.pdf"
    }
];

// function for the reusable contact element //
function Contact({ title, link }) {
    return (
        <div className="contact-main">
            <div className="contact-header">
                <h1>CONTACT</h1>
            </div>
            <div className="contact-text">
                <h3 className="overview">Have any questions or want to work together? </h3>
                <p>Send me a quick email and I'll get back to you as soon as possible :)</p>
                <p>In the meantime, check out some of my work!</p>
            </div>
            <div className="contact-content">
                <div className="contact-bubbles">
                    {links.map((bubble, index) => (
                        <ContactBubble key={index} title={bubble.title} link={bubble.link} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Contact;