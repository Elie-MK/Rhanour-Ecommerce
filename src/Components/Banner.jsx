import React, { useEffect, useState } 
from 'react'
import {NavigateBefore, NavigateNext } from '@mui/icons-material'

import ApiBanner from '../Database/APiBanner'

let count = 0; 


export default function Banner() {
  const [slider, setSlider]=useState(0); 

    useEffect(()=>{
      startSlider()
    },[])
const startSlider = ()=>{
  setInterval(()=>{
    handleOnNextClick()
  }, 10000)
}
  const handleOnPrevClick = ()=> {
    const slide = ApiBanner.length; 
    count = (slider + slide -1) % slide; 
    setSlider(count);
  }
  const handleOnNextClick = ()=> {   count = (count + 1) % ApiBanner.length;
    setSlider(count)}

  return (
    <div className=" md:mt-9 select-non relative flex justify-center items-center  bg-cover max-w-screen-2xl ">
      <img className="object-full md:h-[700px] h-[300px]  w-full p-10" src={ApiBanner[slider]} alt="" />
      <div className="aspect-w-16 aspect-h-9 ">

      </div>

      <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
        <button onClick={handleOnPrevClick}><NavigateBefore/> </button>
        <button onClick={handleOnNextClick}><NavigateNext/></button>
      </div>
      
    </div>
  )
}
