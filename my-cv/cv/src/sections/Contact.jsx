import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="stack">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p>I'd love to hear from you! Send me a message and I'll get back to you as soon as possible.</p>
          <div className="contact-links">
            <p>📧 <a href="mailto:ahmed@example.com">ahmed@example.com</a></p>
            <p>💼 LinkedIn: Coming soon</p>
            <p>🐱 GitHub: Coming soon</p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}