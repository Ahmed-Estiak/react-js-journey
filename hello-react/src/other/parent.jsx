import React from "react";
import {useState} from "react";
import ColorPicker from "./ColorPicker";

function Parent(){
  const [color, setColor] = useState("#000000");

  const handlePick= (newColor)=>{
    setColor(newColor);

  }
  return (
    <div style={{fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",padding: "20px"}}>
      <h1>Color Picker</h1>
      <h2>Selected Color: <span style={{color}}>{color}</span></h2>
      <div style={{
        width: 120, height: 60, background: color, borderRadius: 8
      }} />
      <ColorPicker onPick={handlePick} />

    </div>
  )



}
export default Parent;

