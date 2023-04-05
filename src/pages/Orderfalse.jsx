import React from 'react'
import { Link } from 'react-router-dom'

export default function Orderfalse() {
  return (
    <div>
            <div className="flex p-5 mt-10 justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/825/825561.png" 
                alt="" className="w-20 " />
            </div>
            <div className="text-center ">
                <div className="font-bold mb-5">Pas d'historique à afficher</div>
                <div>Toutes vos commandes fermées seront enregistrées ici.</div>
            </div>
            <div className="flex justify-center mt-9">
            <Link to="/" className="bg-black text-white p-3 rounded-md hover:bg-gray-100 hover:text-black font-bold hover:border hover:border-black">
            COMMENCER À FAIRE DES ACHATS</Link>
            </div>
    </div>
  )
}
