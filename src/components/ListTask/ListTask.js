import React from 'react';
import { useState } from "react"
import { Input } from '../Input/Input';
import { Task } from '../Task/Task';

import'./ListTask.css';


export const ListTask = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    if (newTask.text.trim()) {
      const updatedTask = [newTask, ...tasks];
      setTasks(updatedTask);
    }
  };

  const deleteTask =(id) => {
    const updatedTask = tasks.filter(task => task.id !== id);
    setTasks(updatedTask);
  };

  const completedTask = (id) => {
    const updatedTask = tasks.map(task =>{
      if (task.id === id){
        task.completed = !task.completed;
      }
      return task;
    })
    setTasks(updatedTask)
  };

  return (
    <>
      <Input onSubmit={addTask}/>
      <div className='container-ListTask'>
        {
          tasks.map((task) =>
            <Task
              key={task.id}
              id={task.id}
              text={task.text}
              completed={task.completed}
              deleteTask={deleteTask}
              finishTask={completedTask}
            />
          )
        }
      </div>
    </>
  )
}
