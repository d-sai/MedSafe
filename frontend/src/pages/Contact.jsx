// import React from 'react'
// import  "../index.css";

// export default function Contact() {
//   return (
//     <>
//     <div className="page">This is Contact Page</div>
//     </>
//   )
// }

import React, { useState } from "react";
import "./Contact.css"; // match this with your styles folder

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Get in Touch</h2>
        <p>
          Have questions, feedback, or need help? We'd love to hear from you.
          Reach out using the form, or connect with us directly.
        </p>

        <ul>
          <li><strong>Email:</strong> support@expirytracker.com</li>
          <li><strong>Phone:</strong> +91 98765 43210</li>
          <li><strong>Address:</strong> Bhubaneswar, Odisha, India</li>
        </ul>
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Message</label>
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required />
          </div>

          <button type="submit" className="contact-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
