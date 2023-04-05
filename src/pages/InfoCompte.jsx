import {  AccountCircleOutlined, Edit } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function InfoCompte() {
  return (
    <div className="md:ml-10 md:mt-5  ">
        <div className="md:w-[128vh] ">
            <div className="flex justify-between bg-gray-100 rounded-t-xl">
            <div className="p-3 md:text-xl font-bold">Votre compte</div>
            <div>
                <div className="p-3 md:text-lg font-bold">
                    <AccountCircleOutlined fontSize='large' className=""/>
                    Elie Mulumba
                </div>
            </div>
            </div>
            <div>
                <div className="border-l h-full border-r">
                    <div className="p-3 border-b text-center font-bold">
                        INFORMATIONS PERSONNELLES
                    </div>
                <div className="md:grid md:grid-cols-2 border-b">
                    <div className="col-span-1 border-r p-2">
                        <div>Elie Mulumba</div>
                        <div>eliemulumba63@gmail.com</div>
                        <div>Masculin</div>
                    </div>
                    <div className="col-span-1 p-2">
                        <div className="font-bold flex justify-between">
                            <div>Adresse par défaut :</div>
                            <Link to="/user/adresse/edit" className="text-blue-500"><Edit/></Link>
                        </div> 
                        <div>
                            Rue Farazdak, Residence Selma, Appartement
                            El Aouina, Tunis
                        </div>
                        <div>
                            +216 53027426
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
