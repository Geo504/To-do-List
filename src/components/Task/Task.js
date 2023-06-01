import React from 'react'
import { IoTrashOutline } from "react-icons/io5";

import './Task.css'

export const Task = ({id, text, completed, finishTask, deleteTask}) =>{
  return(
    <div className={`container-task ${completed?'complete':''}`}>

      <div className='icon' onClick={()=> deleteTask(id)}>  
        <IoTrashOutline />
      </div>

      <div className='text-task' onClick={()=> finishTask(id)}>
        {text}
      </div>
       
    </div> 
  )
}