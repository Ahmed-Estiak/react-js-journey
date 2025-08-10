import React, { useState } from 'react';

function ToDoListReloaded() {
  const [tasks, setTasks] = useState(
    [
      {id:1, text:'Buy groceries'},
      {id:2, text:'Finish the project'},
      {id:3, text:'Call the plumber'},
    ]
  )
  
  const handleDelete = (id) => {
    const updateTasks=(tasks.filter(task => task.id !==id));
    setTasks(updateTasks);
 
  }


  return(
    <div style={{ padding: "20px" }}>
      <h1>ToDo List</h1>
      <ul style={{listStyle:"none", padding:0}}>
        {tasks.map(task=>(
          <li
          key={task.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            background: "#f1f1f1",
            padding: "8px",
            borderRadius: "5px"
          }}>
            <span>{task.text}</span>
            <button onClick={()=> handleDelete(task.id)}>❌</button>
            

          </li>

        ))}

      </ul>
    </div>  
  );

  }

  export default ToDoListReloaded;