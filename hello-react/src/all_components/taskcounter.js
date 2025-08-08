import React, { useState } from 'react';

function TaskCounter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  console.log("Button clicked");

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>Task Counter</h2>
      <p style={{ fontSize: '24px', color: 'darkgreen' }}>{count}</p>
      <button onClick={increment} style={{ marginRight: '10px' }}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
export default TaskCounter;