import React from "react";
import Todo from "../assets/direct-hit.png"

import TaskCard from "./TaskCard";
import DropArea from "./DropArea";
const TaskColumn=({
    title,icon , tasks, status, handleDelete,setActiveCard,onDrop
})=>{

    console.log(title)

    return(
        <section className="w-full m-1">
            <h2 className="flex items-center lg:justify-center mb-4 text-black">
                <img src={icon} alt="" className="w-8 mr-1" /> {title}
            </h2>
              <DropArea onDrop={(()=>onDrop(status,0))}/>
            {
                tasks.map((task,index)=>task.status === status && (
                    <div key={index}>
                        <TaskCard handleDelete={handleDelete} setActiveCard={setActiveCard} title={task.task} tags={task.tags}
                        index={index}/>

                         <DropArea onDrop={(()=>onDrop(status,index+1))}/>
                    </div>
                    
                ))
            }
            <DropArea onDrop={(()=>onDrop(status,index+1))}/>
        </section>
    )
}
export default TaskColumn;