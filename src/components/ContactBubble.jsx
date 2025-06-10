import React from 'react';
import './Contact.css';

function ContactBubble({ title, link }) {
  // Define different colors for each type of contact
  const getColorClass = (title) => {
    switch (title.toLowerCase()) {
      case 'email':
        return 'bubble-email';
      case 'linkedin':
        return 'bubble-linkedin';
      case 'github':
        return 'bubble-github';
      case 'resume':
        return 'bubble-resume';
      default:
        return 'bubble-default';
    }
  };

  return (
    <div className={`contact-bubble ${getColorClass(title)}`}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
  );
}

export default ContactBubble;