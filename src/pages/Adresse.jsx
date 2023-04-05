import { Edit } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { collection, doc, getDocs, getDoc } from "firebase/firestore"; 
import { query, where } from "firebase/firestore";

import auth, { db } from '../firebase';
import { useState } from 'react';


export default function Adresse() {

  const [getdata, setGetdata]=useState({})

  const {Iduser, nom, prenom, commune, adresse, phone}=getdata

  
  
  const getDetail = async ()=>{
    
    const citiesRef = collection(db, "users");
    const q = query(citiesRef, where("Iduser", "==", auth.currentUser.uid));
    const querySnapshot = await getDocs(q);
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  setGetdata(doc.data());
});
  }

  useEffect(()=>{
    getDetail()
  },[])
  

  return (
    <div className="md:ml-10 md:mt-5">
        <div className="md:w-[128vh]">
            <div className="md:w-96 ">
              <div className="bg-pink-100 p-3 border">
                <div className="mb-2">
                {`${nom} ${prenom}`}
                </div>

                <div className="mb-2">
                  {`${adresse}, ${commune}`}
                </div>
                <div className="mb-2">
                    {phone}
                </div>
                    <div className="mb-2">Adresse par défaut</div>
              </div>
                <div className="border p-3 flex justify-between">
                  <div className="font-bold text-gray-300">DÉFINIR PAR DÉFAUT</div>
                  <Link to="/user/adresse/edit" className="text-pink-400 hover:bg-pink-100 hover:rounded-full"><Edit/></Link>
                </div>
            </div>
        </div>
    </div>
  )
}
