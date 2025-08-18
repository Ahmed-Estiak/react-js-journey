import React, { useState } from "react";
import "../components_css/light-to-do.css";

function LightToDo(){
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask=()=>{
    if(newTask.trim()!==''){
      setTasks([...tasks, {id:Date.now(),text: newTask, completed: false}]);
      setNewTask("");
    }
  }

  const deleteTask=(id)=>{
    setTasks(tasks.filter(task=>task.id!==id));
  }

  const toggleTask=(id)=>{
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === id ? {...task, completed: !task.completed} : task
      )
    );
  }

  return(
    <div style={styles.app} className="to-do-container">
      <h1>Light To-Do List</h1>
      <div className="input-container">
        <input type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e)=>setNewTask(e.target.value)}
        />
      </div>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map(task=>(
          <li key={task.id} className="task-item">
            <span className={task.completed?"completed":""}>{task.text}</span>
            <button onClick={()=>deleteTask(task.id)}>Delete</button>
            <button onClick={()=>toggleTask(task.id)}>Toggle</button>
          </li>
        ))}
      </ul>

    </div>

  )
  
}

const styles={
  app:{
    maxWidth: "400px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    fontSize: "16px",
    lineHeight: "1.5",
    marginTop: "20px",
  }
}

export default LightToDo;

