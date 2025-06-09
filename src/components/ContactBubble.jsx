import React from 'react';
import './Contact.css';

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