import React from 'react'
import { Link } from 'react-router-dom'
import Suggestion from '../Components/Suggestion'

export default function Empty() {
  return (
    <div className="p-10 md:p-20">
      <div className="bg-white p-5 shadow  rounded text-center ">
        <div className="p-2 flex justify-center mb-5">
          <img className="w-40 " src='https://cdn-icons-png.flaticon.com/512/6713/6713725.png'/>
        </div>
        <div className="mb-4 font-bold">Votre panier est vide</div>
        <div className="mb-6">Parcourez nos catégories et découvrez nos meilleures offres!</div>
      <Link to="/" className="mb-3"><button className="md:w-lg active:border-white border border-black hover:bg-black hover:text-white rounded font-bold p-2 text-[15px] shadow-lg"> COMMENCEZ VOS ACHATS  </button>
      </Link>
      </div>
    </div>
  )
}
