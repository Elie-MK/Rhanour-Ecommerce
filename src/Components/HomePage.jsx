import React from 'react'
import Banner from './Banner'
import NavBar from './NavBar'
import Products from './Products'
import Footer from './Footer'
import {Link} from 'react-router-dom'
import Info from './Info'
import Compte from './Compte'
import Modepaie from './Modepaie'



export default function HomePage() {
  document.body.style.overflowY="scroll"

  return (
    <div className="">
        <Banner />
        <Info />
    
        <Products 
        
        title="Boubou"/>

        <Products 
        title="Chemises"/>

        <Products 
        title="Robes" />
       
       <Products 
        title="chaussures" /> 

        {/* <Compte /> */}
       
       {/* <Modepaie/> */}
       
    </div>
  )
}
