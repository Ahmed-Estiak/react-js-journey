import React, { useState } from 'react';

function ToDoList() {
  const tasks = [
    {id:1, text:'Buy groceries', completed:false},  
    {id:2, text:'Finish the project', completed:false},
    {id:3, text:'Call the plumber', completed:false},
  ];

  const [taskList, setTaskList] = useState(tasks);

  const handleTaskClick = (id) => {
    setTaskList(taskList.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  };

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'left',height:'20vh'}}>
      <h1>To-Do List</h1>
      <ul style={{paddingLeft: '0', listStyle: 'none'}}>
        {taskList.map(task => (
          <li key={task.id} style={{
            textDecoration: task.completed ? 'line-through' : 'none',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <span style={{marginRight: '8px', color: '#666'}}>•</span>
            <input 
              type="checkbox" 
              checked={task.completed} 
              onChange={() => handleTaskClick(task.id)}
              style={{marginRight: '8px'}}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;