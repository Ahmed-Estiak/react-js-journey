import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

// Validation rules
const validationRules = {
  name: (value) => {
    if (!value?.trim()) return "Name is required";
    return "";
  },
  email: (value) => {
    if (!value?.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) return "Please enter a valid email";
    return "";
  },
  message: (value) => {
    if (!value?.trim()) return "Message is required";
    return "";
  },
  gender: (value) => {
    if (!value) return "Gender is required";
    return "";
  },
  age: (value) => {
    if (!value) return "Age is required";
    const ageNum = parseInt(value);
    if (ageNum < 1 || ageNum > 120) return "Age must be between 1 and 120";
    return "";
  }
};

export default function ContactForm() {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validate,
    reset,
    isValid
  } = useForm(
    { name: "", email: "", message: "", gender: "", age: "" },
    validationRules
  );

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Check if form is ready to submit
  const isFormValid = () => {
    return (
      values.name?.trim() &&
      values.email?.trim() &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) &&
      values.message?.trim() &&
      values.gender &&
      values.age &&
      parseInt(values.age) >= 1 &&
      parseInt(values.age) <= 120
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: `Contact from ${values.name}`,
          body: values.message,
          userId: 1,
          userEmail: values.email,
          userGender: values.gender,
          userAge: values.age
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        console.log('Form Data:', values);
        
        setSubmitSuccess(true);
        
        setTimeout(() => {
          reset(); 
          setSubmitSuccess(false);
        }, 3000);
      }
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="form-container">
        <div className="success-message">
          <h3>✅ Thank you!</h3>
          <p>Your message has been sent successfully!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <h3>Get in Touch</h3>
      <form onSubmit={handleSubmit} className="contact-form">
        
        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur} // 🎯 Touch tracking!
            className={errors.name ? "form-input error" : "form-input"}
            placeholder="Enter your full name"
          />
          {touched.name && errors.name && <span className="error-text">{errors.name}</span>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email Address *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email ? "form-input error" : "form-input"}
            placeholder="Enter your email"
          />
          {touched.email && errors.email && <span className="error-text">{errors.email}</span>}
        </div>

        {/* Gender Field */}
        <div className="form-group">
          <label htmlFor="gender">Gender *</label>
          <select
            id="gender"
            name="gender"
            value={values.gender}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.gender ? "form-input error" : "form-input"}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            <option value="prefer-not-to-say">Prefer not to say</option>
          </select>
          {touched.gender && errors.gender && <span className="error-text">{errors.gender}</span>}
        </div>

        {/* Age Field */}
        <div className="form-group">
          <label htmlFor="age">Age *</label>
          <input
            type="number"
            id="age"
            name="age"
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.age ? "form-input error" : "form-input"}
            placeholder="Enter your age"
            min="1"
            max="120"
          />
          {touched.age && errors.age && <span className="error-text">{errors.age}</span>}
        </div>

        {/* Message Field */}
        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.message ? "form-input error" : "form-input"}
            placeholder="Write your message here..."
            rows="5"
          />
          {touched.message && errors.message && <span className="error-text">{errors.message}</span>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isFormValid() || isSubmitting}
          className={`submit-btn ${!isFormValid() ? 'disabled' : ''}`}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

