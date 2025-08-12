import React, { useState } from "react";

function LiveInput() {
  // State to store the current value of the input
  const [text, setText] = useState("");

  // Function to handle input changes
  const handleChange = (event) => {
    // event.target.value gives the current value of the input
    setText(event.target.value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Live Input Example</h2>
      
      {/* Input field with onChange event */}
      <input 
        type="text" 
        placeholder="Type something..."
        value={text}         // Bind state value to the input
        onChange={handleChange} // Update state when user types
        style={{ padding: "8px", width: "200px" }}
      />
      
      {/* Live display of the input */}
      <p>Current Input: {text}</p>
    </div>
  );
}

export default LiveInput;
