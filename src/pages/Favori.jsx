import React from 'react'
import { Link } from 'react-router-dom'

export default function Favori() {
  return (
<div className="md:ml-10 md:mt-5">
        <div className="md:w-[128vh]">
            <div className="  font-bold text-center bg-gray-100 rounded-t-xl">
                <div className="p-3 md:text-xl">Votre liste d'envies</div>
            </div>
            <div className="flex justify-center mt-5">
              <img src="https://cdn-icons-png.flaticon.com/512/535/535183.png" 
              alt="" className="w-20  " />
            </div>
            <div className="text-center ">
                <div className="font-bold mb-5">Votre liste d'envies est vide !</div>
                <div>Vous avez trouvé quelque chose que vous aimez ?<br/> Tapez sur l'icône en forme de cœur à côté de l'article <br/>pour l'ajouter à votre liste d'envies! Tous vos articles<br/> sauvegardés apparaîtront ici.</div>
            </div>
            <div className="flex justify-center mt-9">
            <Link to="/" className="bg-black text-white p-3 rounded-md hover:bg-gray-100 hover:text-black font-bold hover:border hover:border-black">
            POURSUIVEZ VOS ACHATS</Link>
            </div>
        </div>
    </div>
  )
}
