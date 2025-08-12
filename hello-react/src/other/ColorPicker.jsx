
function ColorPicker({onPick}){
  const colors=["#000000", "#0000ff", "#00ff00", "#ff0000", "#ffff00", "#00ffff", "#ff00ff"];
  return (
    <div style={{display: "flex", gap: 10, marginTop: 10}}>
      {colors.map((c)=>(
        <button 
        key={c}
        onClick={()=>onPick(c)}
        style={{
          width: 30, height: 30, borderRadius: "50%", border: "none", cursor: "pointer",
          background: c,
          boxShadow: "0 0 5px rgba(0,0,0,0.3)",
          transition: "transform 0.2s",
        }}
        title={c}
        />
      ))}
    </div>
  )
}

export default ColorPicker;