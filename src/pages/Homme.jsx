import { Clear, Menu, MenuOpen } from '@mui/icons-material'
import React, { useState } from 'react'
import ShowerCategory from '../Components/ShowerCategory'


export default function Homme() {
  
  const [slide, setSlide]=useState("Vetements")

  return (
    <div className="flex md:grid md:grid-cols-6">
      <div className="md:mt-[10vh] p-2 w-40 left-0 bg-gray-100 md:h-[86vh] top-[64px] col-span-1">
        <div className="sm:mt-5 ">
          <div  className={`cursor-pointer mb-1 hover:bg-black hover:rounded-r-xl hover:text-white  p-1 ${slide === "Vetements" ? "bg-black rounded-r-xl text-white" : null}`} onClick={()=>setSlide("Vetements")} >Vêtements</div>
          <div className={`cursor-pointer mb-1 hover:bg-black hover:rounded-r-xl hover:text-white p-1 ${slide === "Chaussures" ? "bg-black rounded-r-xl text-white" : null}`} onClick={()=>setSlide("Chaussures")}>Chaussures</div>
          <div className={`cursor-pointer hover:bg-black hover:rounded-r-xl hover:text-white p-1 ${slide === "Accessoires" ? "bg-black rounded-r-xl text-white" : null}`} onClick={()=>setSlide("Accessoires")}>Accessoires</div>
        </div>
        
      </div>
      <div className="p-2 col-span-5">
      <div className="md:mt-20 ">
        <ShowerCategory category="homme" sousCategory={slide} />
        </div>
         </div>
    </div>
  )
}
