import React from 'react'
import NavBar from '../Components/NavBar'
import {Outlet} from 'react-router-dom'
import Footer from '../Components/Footer'

export default function IndexPages() {
  const Url= window.location

  return (
    <div>
        <NavBar />


        <Outlet />

        {
          Url !=="http://localhost:5173/Femme"&&(

            <Footer  />

          )
        }
    </div>
  )
}
