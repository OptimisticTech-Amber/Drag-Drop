import React from "react";

import deleteIcon from "../assets/delete.png";
import Tag from "./Tag";
const TaskCard = ({title,tags, handleDelete, index,setActiveCard})=>{
    return(
        <article className={` active:opacity-70 active:border-[1px] active:border-[#111] w-full min-h-24 border-[2px] border-[#dcdcdc] p-4 mb-4 cursor-grab`} draggable onDragStart={()=>setActiveCard(index)}
        onDragEnd={()=>setActiveCard(null)}>
            <p className=" text-xl font-semibold mb-4">{title}</p>
            <div>
                <div className="flex items-center justify-center">
                    {tags.map((tag,index)=>(
                    <Tag key={index} tagName={tag} selected/>
                ))}</div>

                <div className="w-9 h-9 rounded-[100%] flex justify-center mt-1 cursor-pointer  " onClick={()=>handleDelete(index)}>
                    <img src={deleteIcon} className="w-6 " alt="" />
                </div>

            </div>

        </article> 
    )
}
export default TaskCard;