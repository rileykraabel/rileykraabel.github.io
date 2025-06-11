/* Author: Riley Kraabel 
   Date: June 10, 2025 
   All Rights Reserved */

import React from 'react';

import './Contact.css';

// function for the individual contact bubble elements //
function ContactBubble({ title, link }) {
  return (
    <div className="contact-bubble">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
  );
}

export default ContactBubble;