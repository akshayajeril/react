import './App.css';
import React, { useRef, useState } from 'react';

function App() {
  const [task,updateTask] = useState([])
  const inputTask = useRef()
  const addTask = () =>{
    updateTask([...task,inputTask.current.value])
  }
  return (
    <div>
      <input type="text" ref={inputTask}></input>
      <button onClick={addTask}>Add</button>
      <div>
      <ul>
        {task.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
