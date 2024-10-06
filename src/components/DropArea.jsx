import React, { useState } from 'react'

const DropArea = ({onDrop}) => {
  const [showDrop,setShowDrop] = useState(false);
  return (
    <section 
    onDragEnter={()=>setShowDrop(true)}
    onDragLeave={()=>setShowDrop(false)}
    onDrop={()=>{
      onDrop();
      setShowDrop(false)
    }}
    onDragOver={(e)=>e.preventDefault()}
    className={`${!showDrop?"opacity-0":"w-full h-full text-[#111] font-semibold border-[2px] border-dashed border-[#111] rounded-lg p-4 mb-4 opacity-100 transition-all duration-200 ease-in-out"}`}>
      Drop Here
    </section>
  )
}

export default DropArea;