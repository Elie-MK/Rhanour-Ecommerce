import { AccountCircleOutlined, Clear, Menu, ShoppingBagOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { Badge } from '@mui/material'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'

export default function NavBar() {
  const [btn, setBtn]=useState(false)
  const [totall, setTotal]=useState(0)
  const showNavbar = ()=>{
    setBtn(!btn)
  }
  const state = useSelector((state)=>state.cart)


  useEffect(()=>{
    var total = 0
    const Somme = (qte)=>{
      total = total +qte
    }

    state.forEach(element => {
      Somme(element.qte)
    });


    setTotal(total)

  },[state])
  return (
    <div className='  shadow-sm border-b sm:fixed top-0 left-0 right-0 bg-gray-100 z-10'>
      <header className="p-2 flex justify-between ">
    <Link to="/" className="cursor-pointer font-bold text-2xl items-center p-1 sm:p-3">RHANOUR.</Link>
    <nav  className="md:flex hidden sm:items-center sm:text-sm block">
      <Link to="/Femme" className=' cursor-pointer uppercase sm:p-1 m-1 hover:transition hover:duration-700 hover:ease-in-out hover:border-b-2 hover:border-black  hover:font-bold'>Femme</Link>
      <Link to="/Homme" className=' cursor-pointer uppercase sm:p-1 m-1 hover:transition hover:duration-700 hover:ease-in-out  hover:border-b-2 hover:border-black  hover:font-bold'>Homme</Link>
      <Link to="/Enfant" className=' cursor-pointer uppercase sm:p-1 m-1 hover:transition hover:duration-700 hover:ease-in-out  hover:border-b-2 hover:border-black  hover:font-bold'>Enfant</Link>
    </nav>
    <div className="md:flex items-center hidden">
    <Link to="/Login" className="cursor-pointer p-1 hover:transition hover:duration-700 hover:ease-in-out hover:border-b-2 hover:border-black"><AccountCircleOutlined /></Link>
    <Link to="/Panier" className="cursor-pointer p-1 mr-1 hover:transition hover:duration-700 hover:ease-in-out hover:border-b-2 hover:border-black"><Badge badgeContent={totall} color="primary" max={20}><ShoppingCartOutlined color="action"/></Badge></Link>
    </div>
    <div className="md:hidden items-center ml-40">
    <Link to="/Panier" className="cursor-pointer p-1 mr-1 hover:transition hover:duration-700 hover:ease-in-out hover:border-b-2 hover:border-black"><Badge badgeContent={totall} color="primary" max={20}><ShoppingCartOutlined color="action"/></Badge></Link>
    </div>


   <div className='md:hidden'>
{
    !btn ? (
      
      <button onClick={showNavbar}><Menu/> </button>
      

    ):(

<button onClick={showNavbar}><Clear/> </button>
    )
}


   </div>

  
    
    </header>
   {
    btn && (
      <div className="p-2">
      <nav  className="md:hidden flex justify-between">
         <Link to="/Femme" className=' cursor-pointer uppercase sm:p-1 m-1 hover:transition hover:duration-700 hover:ease-in-out hover:border-b-2 hover:border-black  hover:font-bold block'>Femme</Link>
         <Link to="/Homme" className=' cursor-pointer uppercase sm:p-1 m-1 hover:transition hover:duration-700 hover:ease-in-out  hover:border-b-2 hover:border-black  hover:font-bold block'>Homme</Link>
         <Link to="/Enfant" className=' cursor-pointer uppercase sm:p-1 m-1 hover:transition hover:duration-700 hover:ease-in-out  hover:border-b-2 hover:border-black  hover:font-bold block'>Enfant</Link>
         <div className="flex justify-end">
         <Link to="/Login" className="cursor-pointer p-1 hover:transition hover:duration-700 hover:ease-in-out hover:border-b-2 hover:border-black"><AccountCircleOutlined /></Link>
         {/* <Link to="/Panier" className="cursor-pointer p-1 mr-1 hover:transition hover:duration-700 hover:ease-in-out hover:border-b-2 hover:border-black"><Badge badgeContent={state.length} color="primary" max={20}><ShoppingCartOutlined color="action"/></Badge></Link> */}
         </div>
       </nav>
      </div>
    )

   }

    </div>
  )
}
