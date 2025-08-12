import React, { useState, useEffect } from "react";

function useLocalStorage(key, initialValue) {
  const[value, setValue] = useState(()=>{
    try{
      const saved= localStorage.getItem(key);
      if(saved){
        return JSON.parse(saved);
      }
      return initialValue;
    }catch(error){
      console.error("Error loading from localStorage:", error);
      return initialValue;
    }
  });

  useEffect(()=>{
    try{
      localStorage.setItem(key, JSON.stringify(value));
    }catch(error){
      console.error("Error saving to localStorage:", error);
    }
  }, [key, value]);

  return [value, setValue];
  
}

function UltimateToDo(){
  const [items, setItems]=useLocalStorage("notes_v1", []);
  const [draft, setDraft]=useState("");
  const [editingId, setEditingId]=useState(null);
  const [editText, setEditText]=useState("");

  const addItem=()=>{
    const text=draft.trim();
    if(!text) return;
    const newItem={
      id: crypto.randomUUID?.() ?? String(Date.now()),
      text,
      done: false,
    }
    setItems((prev)=> [...prev, newItem]);
    setDraft("");
  }

  const toggleDone=(id)=>{
    setItems((prev)=>prev.map((item)=>
    (item.id===id?{...item, done:!item.done}:item)
    ))
  }

  const removeItem=(id)=>{
    setItems((prev)=>
    prev.filter((item)=>item.id!==id))
    if (editingId===id){
      setEditingId(null);
      setEditText("");
    }
  }
  const startEdit=(item)=>{
    setEditingId(item.id);
    setEditText(item.text);
  }
  
  const commitEdit=()=>{
    const txt = editText.trim();
    if(!txt) {
      removeItem(editingId);
    }
    else{
      setItems((prev)=>prev.map((item)=>
      (item.id===editingId?{...item,text:txt}:item)
      ))
    }
    setEditingId(null);
    setEditText("");
  }

  return (
    <div style={styles.app}>
      {/* Your JSX will go here */}
      <h1>Ultimate ToDo List</h1>
      <div style={styles.newRow}>
        <input type="checkbox" disabled aria-label="new note checkbox"/>
        <input 
        style={styles.newInput}
        placeholder="New note..."
        value={draft}
        onChange={(e)=>setDraft(e.target.value)}
        onKeyDown={(e)=>{
          if(e.key==="Enter") addItem();
        }
      }
      autoFocus />
      </div>
      <ul style={styles.list}>
        {items.map((item)=>(
          <li key={item.id} style={styles.item}>
            <input type="checkbox"
            checked={item.done}
            onChange={()=>toggleDone(item.id)}
            aria-label="toggle done" />
          
          {editingId=== item.id?(
          <input
          style={{ ...styles.textInput, ...styles.editInput }}
          value={editText}
          onChange={(e)=> setEditText(e.target.value)}
          onBlur={commitEdit}
          onKeyDown={(e)=> {
            if(e.key==="Enter") commitEdit();
            if(e.key==="Escape") {
              setEditingId(null);
              setEditText("");
            }
          }}
          autoFocus />
          )
          :
          (
            <button 
            onDoubleClick={()=>startEdit(item)}
            onClick={()=> toggleDone(item.id)}
           style={{
            ...styles.textButton,
            ...(item.done ? styles.done :{}),
           }}
            title="Click to toggle, double‑click to edit"
            >
              {item.text}
            </button>
          )
          }
          <button
          onClick={()=>removeItem(item.id)}
          style={styles.deleteBtn}
          aria-label="delete note"
          title="Delete"
          >
            ✕
          </button>
          </li>
        )
        
        )}
      </ul>
      
    </div>
  );
}

const styles = {
  app: {
    maxWidth: 680,
    margin: "40px auto",
    padding: "16px",
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  },
  title: { margin: "0 0 12px", fontSize: 24 },
  newRow: {
    display: "grid",
    gridTemplateColumns: "24px 1fr",
    gap: 10,
    alignItems: "center",
    padding: "10px 12px",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    boxShadow: "0 1px 3px rgba(0,0,0,.04)",
    marginBottom: 14,
  },
  newInput: {
    border: "none",
    outline: "none",
    fontSize: 16,
    padding: "6px 4px",
  },
  list: { listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8 },
  item: {
    display: "grid",
    gridTemplateColumns: "24px 1fr 32px",
    gap: 10,
    alignItems: "center",
    padding: "10px 12px",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
  },
  textButton: {
    textAlign: "left",
    background: "transparent",
    border: "none",
    padding: "6px 4px",
    fontSize: 16,
    cursor: "pointer",
  },
  done: { textDecoration: "line-through", opacity: 0.6 },
  deleteBtn: {
    background: "transparent",
    border: "none",
    fontSize: 18,
    cursor: "pointer",
    color: "#ef4444",
  },
  textInput: {
    border: "1px solid #d1d5db",
    borderRadius: 8,
    padding: "6px 8px",
    fontSize: 16,
    width: "100%",
  },
  editInput: {
    outlineColor: "#6366f1",
  },
};

export default UltimateToDo;