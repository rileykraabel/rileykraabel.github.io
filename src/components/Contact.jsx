import React, { useState } from 'react';

import resume from '../assets/Resume.pdf';
import ContactBubble from './ContactBubble';
import './Contact.css';

const links = [
    {
        title: "Email",
        link: "mailto:rileykraabel@gmail.com?subject=Let's%20Connect!"
    },
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/rileykraabel",
    },
    {
        title: "GitHub",
        link: "https://www.github.com/rileykraabel",
    },
    {
        title: "Resume",
        link: resume
    }
];

function Contact({ title, link }) {
    return (
        <div className="contact-main">
            <div className="contact-header">
                <h1>CONTACT</h1>
            </div>
            <div className="contact-text">
                <p>Have any questions or want to work together? Send me a message and I'll get back to you as soon as possible :)</p>
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