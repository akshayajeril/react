import './App.css';
import React, { useRef, useState } from 'react';

function App() {
  const [tasks,updateTask] = useState([])
  const inputTask = useRef()
  const addTask = () =>{
    updateTask([...tasks,inputTask.current.value])
    inputTask.current.value = '';
  }
  const deleteTask = (index) =>{
    const temp = [...tasks];
    temp.splice(index,1)
    updateTask(temp)
  }
  const editTask = () =>{
    updateTask([...tasks,inputTask.current.value])
  }
  const handlePlay = () =>{
    updateTask([...tasks,inputTask.current.value])
  }
  const handlePause = () =>{
    updateTask([...tasks,inputTask.current.value])
  }
  return (
    <div style={{ padding: '20px' }}>
      <div className="input-group">
<input type="text" ref={inputTask} className="task-input" />
      <button onClick={addTask} className="add-button">Add Task</button>
      </div>
     
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span>{task}</span>
            <span>Time taken: {task.time} sec</span>
            <div className="button-group">
              <button onClick={() => deleteTask(index)} className="action-button">Delete</button>
              <button onClick={() => editTask(index)} className="action-button">Edit</button>
              <button onClick={() => handlePlay(index)} className="action-button">Start</button>
              <button onClick={() => handlePause(index)} className="action-button">Pause</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
