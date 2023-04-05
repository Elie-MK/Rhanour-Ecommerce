import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Commande() {
    const [clic, setClic]=useState("true")

  return (
    <div className="md:ml-10 md:mt-5">
        <div className="md:w-[128vh]">
            <div className="  font-bold text-center bg-gray-100 rounded-t-xl">
                <div className="p-3 md:text-xl">   Vos commandes</div>
            </div>
                <div className="border-t-2 border-white grid grid-cols-2 text-center  ">
                    <Link to='ordertrue' className={`hover:font-bold col-span-1 p-2 hover:border-b-2 hover:border-gray-200 cursor-pointer duration-200 ${clic === "true" && "border-b-2 border-gray-200 font-bold" }`} onClick={()=>setClic("true")}>COMMANDES RÉUSSIES
                    </Link>


                    <Link to='orderfalse' className={`hover:font-bold col-span-1 p-2 hover:border-b-2 hover:border-gray-200 cursor-pointer duration-200 ${clic === "false" && "border-b-2 border-gray-200 font-bold" }`} onClick={()=>setClic("false")}>
                        COMMANDES ÉCHOUÉES (0)
                    </Link>
                </div>
        </div>
                    <div><Outlet/></div>
    </div>
  )
}
