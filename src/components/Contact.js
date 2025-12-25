import React from "react";
import "../styles/contact.css";
import { FaEnvelope, FaPhone, FaLinkedin,  } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-intro">
        Feel free to reach out to me via email, phone, or connect on my socials.
      </p>

      <div className="contact-grid">
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>Email</h3>
          <a href="mailto:yourmail@example.com">bhavadharini277@gmail.com</a>
        </div>

        <div className="contact-card">
          <FaPhone className="contact-icon" />
          <h3>Phone</h3>
          <a href="tel:+919677590548">+91 96775 90548</a>
        </div>

        <div className="contact-card">
          <FaLinkedin className="contact-icon" />
          <h3>LinkedIn</h3>
          <a
            href="https://www.linkedin.com/in/bhavadharini-s-1840862a2/"
            target="_blank"
            rel="noreferrer"
          >
            bhavadharini-s
          </a>
        </div>

  
        
      </div>
    </section>
  );
};

export default Contact;
