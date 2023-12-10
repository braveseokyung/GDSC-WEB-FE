import React, { useState } from 'react';
// import logo from './logo.svg';
import { MdDelete } from 'react-icons/md';
import './App.css';

function App() {
  const [tasks, setTasks]=useState([]);
  const [task, setTask]=useState('');

  const deleteAllTask=function(){
    setTasks([]);
  };

  const deleteTask=function(id){
    // console.log(id)
    // console.log(tasks)
    setTasks(tasks.filter(task=>task.id!==id));
  };

  const addTask=()=>{
    if (task!==""){
      setTasks([...tasks,{id:tasks.length,text:task,checked:false}]);
      setTask('');
    }
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div class="nav">
        <input
          type="text"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
        <button className="deleteButton" onClick={deleteAllTask}>Delete All</button>
      </div>
      
      <ul className="TodoList">
        {tasks.map((t)=>(
          <li className="Todo" key={t.id}>
            <input 
              type="checkbox"
            />
            <span>{t.text}</span>
            <div className="deleteButton" onClick={()=>{deleteTask(t.id)}}><MdDelete /></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
