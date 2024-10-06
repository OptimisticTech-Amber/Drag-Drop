import React, { useState } from 'react'
import Tag from './Tag';

const TaskForm = ({setTasks}) => {
    const [taskdata, setTaskData] = useState({
        task:"",
        status:"todo",
        tags:[],
    })

    const checkTag=(tag)=>{
        return taskdata.tags.some((item)=>item===tag);
    }
const selectTag =(tag)=>{
    if(taskdata.tags.some((item)=>item===tag)){
        const filterTags = taskdata.tags.filter((item)=>item!==tag);
        setTaskData((prev)=>{
            return {...prev,tags:filterTags};
        })
    }else{
        setTaskData((prev)=>{
            return {...prev,tags:[...prev.tags,tag]}
        })
    }
}

    const handleChange =(e)=>{
     const {name , value}= e.target;
     setTaskData((prev)=>{ return {...prev,[name]:value}})
    };


    const handleSubmit =(e)=>{
     e.preventDefault();
     
     setTasks((prev)=>{
        return [...prev,taskdata]
     });
     setTaskData({
        task:"",
        status:"todo",
        tags:[],
     })
    }
  return (
    <div className='flex items-center justify-center border-b-[1px] border-[#dcdcdc]'>
     <form onSubmit={handleSubmit} className='w-full'>
     <input className='text-xl font-semibold bg-[#f9f9f9] text-[#000] border-[1px] border-[#dfe3e6] py-2 px-3 mb-4 w-full' 
     type="text" name='task' placeholder='Enter your Task' value={taskdata.task} onChange={handleChange} />
      <div className='flex items-center justify-between'>
        <div> 
        <Tag 
        tagName="HTML"
        selectTag={selectTag}
        selected={checkTag("HTML")}/>

        <Tag 
        tagName="CSS"
        selectTag={selectTag}
        selected={checkTag("CSS")}/>

        <Tag 
        tagName="JavaScript"
        selectTag={selectTag}
        selected={checkTag("JavaScript")}/>

       <Tag 
        tagName="React"
        selectTag={selectTag}
        selected={checkTag("React")}/>
        </div>

        <div>
            <select name="status" value={taskdata.status} className='text-xl font-semibold  border-[1px] border-[#0e0404] rounded-[5px] w-[120px] h-[40px] px-1 py-0' onChange={handleChange}>
             <option value="todo" className='text-[10px] font-semibold bg-black text-white '> To Do</option>
             <option value="doing" className='text-[10px] font-semibold bg-black text-white'>Doing</option>
             <option value="done" className='text-[10px] font-semibold bg-black text-white '>Done</option>
            </select>
            <button type='submit' className='text-xl font-semibold bg-[#6457f9] text-[#fff] rounded-[5px] h-[40px] py-1 px-3 ml-2 border-none cursor-pointer'>+ Add Submit</button>
        </div>
      </div>
      
     </form>
    </div>
  )
}

export default TaskForm;