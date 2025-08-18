import React, { useState } from "react";

function ContactForm(){
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    isSubmitted: false,
    error: "",
    success: false,
    
  });

  const handleChange=(e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(formData.name.trim() === "" || formData.email.trim() === "" || formData.message.trim() === ""){
      setFormData({...formData, error: "All fields are required"});
      return;
    }
    setFormData({...formData, isSubmitted: true, error: "", success: true});
    setTimeout(()=>{
      setFormData({...formData, isSubmitted: false, success: false});
    }, 3000);
  }

  return(
    <div className="contact-form-container">
      <h1>Contact Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required/>
        </div>

        {formData.error && <p className="error">{formData.error}</p>}
          {formData.success && <p className="success">Message sent successfully!</p>}

        <button type="submit" disabled={formData.isSubmitted}>
          {formData.isSubmitted ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  )
}

export default ContactForm;
