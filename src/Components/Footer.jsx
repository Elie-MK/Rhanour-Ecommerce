import React from 'react'
import {Link} from 'react-router-dom'
import {Facebook, Instagram} from '@mui/icons-material'
import NavBar from './NavBar'


export default function Footer() {
  return (
    <div className="bg-black p-3 z-20">
    <div className="p-2 mb-3 sm:text-xl text-center text-white sm:mr-3">Inscrivez-vous à nos communications pour recevoir nos  meilleurs offres!</div>  
    <div className="mt-3 grid sm:grid-cols-4">
      <div className="col-span-1 sm:text-center sm:mt-2 text-white text-center mb-2">
      <Link to="/" className="cursor-pointer font-bold sm:text-4xl sm:items-center sm:p-3">RHANOUR.</Link>
      </div>
      <div className="sm:mt-2 sm:col-span-2 sm:items-center text-justify" >
        <form className="sm:flex">
          <input className="sm:p-2 rounded " placeholder='Entrez votre adresse e-mail'/>
          <button type='submit' className="text-white sm:p-3 ml-2 border rounded">FEMME</button>
          <button type='submit' className="text-white sm:p-3 ml-2 border rounded">HOMME</button>
        </form>
      </div>
      <div className="col-span-1 text-white font-bold text-center mt-2 sm:mt-2">
        <div>RETROUVEZ-NOUS SUR</div>
        <div className="flex justify-center sm:mt-2">
          <div className="mr-2 cursor-pointer"><Facebook/> </div>
          <div className="mr-2 cursor-pointer"><Instagram/> </div>
        </div>
      </div>
    </div>
    <div className="text-white text-center mt-5">
      <div>©Copyright <a href="https://kgroupcd.web.app/" target="_blank" className="font-extrabold hover:border-b">Kgroup</a></div>
    </div>
    </div>
  )
}
