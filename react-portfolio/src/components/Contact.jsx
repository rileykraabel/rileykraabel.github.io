import React, { useState } from 'react';

import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // You can integrate email service here (like EmailJS or backend API)
    };

    return (
        <div className="contact-main">
            <div className="contact-header">
                <h1>Contact</h1>
            </div>
            <div className="contact-text">
                <p>Have any questions or want to work together? Send me a message and I'll get back to you as soon as possible :)</p>
            </div>
            <div className="contact-content">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;