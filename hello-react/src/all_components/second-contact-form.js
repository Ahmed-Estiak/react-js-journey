import React, { useState } from "react";

function SecondContactForm(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name.trim() === "" || email.trim() === "" || message.trim() === ""){
      setError("All fields are required");
      return;
    }
    setError("");
    setSuccess("Message sent successfully!");
    setTimeout(()=>{
      setSuccess("");
    }, 3000);
  }

  return(
    <form onSubmit={handleSubmit} style={styles.form}>
      <h1>Contact Form</h1>
      <div style={styles.formGroup}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} 
        onChange={(e)=>setName(e.target.value)}
        placeholder="Enter your name"
        style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email}
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="your@email.com"
        style={styles.input}
        />
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" value={message}
        onChange={(e)=>setMessage(e.target.value)}
        placeholder="Enter your message"
        style={styles.textarea}
        />
      </div>
      <button type="submit" style={styles.button}>
        Submit
      </button>
      {error && <p style={styles.error}>{error}</p>}
      {success && <p style={styles.success}>{success}</p>}
    </form>
  )
}

const styles = {
  form: {
    maxWidth: 400,
    margin: "20px auto",
    padding: "16px",
    border: "1px solid #ccc",
    borderRadius: 8,
    fontFamily: "system-ui",
  },
  field: {
    marginBottom: 12,
    display: "grid",
    gap: 4,
  },
  input: {
    padding: "8px 10px",
    border: "1px solid #ddd",
    borderRadius: 6,
  },
  textarea: {
    padding: "8px 10px",
    border: "1px solid #ddd",
    borderRadius: 6,
    minHeight: 80,
  },
  button: {
    padding: "10px 16px",
    border: "none",
    borderRadius: 6,
    background: "#4f46e5",
    color: "white",
    cursor: "pointer",
  },
};

export default SecondContactForm;