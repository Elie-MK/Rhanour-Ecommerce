import { ArrowBack, Details } from '@mui/icons-material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ApiCommune } from '../Database/ApiCommune'
import { collection, addDoc } from "firebase/firestore"; 
import auth, { db } from '../firebase'


export default function EditAdress() {

  const [details, setDetails]=useState({})
  const [detailC, setDetailC]=useState("Bandalungwa")
  const PostData  = async(e)=>{
    e.preventDefault()
    const {lName, fName, phone, adresse, communes}=details; 
    try {
      const docRef = await addDoc(collection(db, "users"), {
        Iduser: auth.currentUser.uid, 
        nom: lName,
        prenom: fName,
        phone: phone,
        adresse : adresse, 
        commune : detailC
      });
  
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log(detailC);
      console.error("Error adding document: ", e);
    }
    
  }

  return (
    <div className="md:ml-10 md:mt-5">
      <div className="flex gap-5">
        <Link to="/user/adresse"><ArrowBack/></Link>
        <div>Modifier l'adresse</div>
      </div>
      <form className="mt-5">
      <div className="flex gap-3  items-center mt-4">
                    <label className="relative">
                        <input type="text" className="h-10 md:w-80 w-40 px-6  border-2  border-black border-opacity-50 outline-none focus:border-black focus:text-black transition duration-200" onChange={(e)=>setDetails({...details, lName:e.target.value})} />
                        <span className=" text-black text-oapcity-80 absolute left-0 top-2 mx-6 px-2 transition duration-200 input-texte">Nom</span>
                    </label>
                    <label className="relative">
                        <input type="text" className=" h-10 md:w-80 w-40 px-6  border-2 border-black border-opacity-50 outline-none focus:border-black focus:text-black transition duration-200" onChange={(e)=>setDetails({...details, fName:e.target.value})}/>
                        <span className=" text-black text-oapcity-80 absolute left-0 top-2 mx-6 px-2 transition duration-200 input-texte">Prénom</span>
                    </label>
        </div>
      <div className="flex gap-3  items-center mt-4">
                    <label className="relative">
                        <input type="text" className=" h-10 md:w-80 w-40 px-6  border-2  border-black border-opacity-50 outline-none focus:border-black focus:text-black transition duration-200" onChange={(e)=>setDetails({...details, phone:e.target.value})}/>
                        <span className=" text-black text-oapcity-80 absolute left-0 top-2 mx-6 px-2 transition duration-200 input-texte">N° Phone</span>
                    </label>
        </div>
      <div className="flex gap-3  items-center mt-4">
                    <label className="relative">
                        <input type="text" className=" h-10 md:w-[120vh] w-40 px-6  border-2  border-black border-opacity-50 outline-none focus:border-black focus:text-black transition duration-200" onChange={(e)=>setDetails({...details, adresse:e.target.value})}/>
                        <span className=" text-black text-oapcity-80 absolute left-0 top-2 mx-6 px-2 transition duration-200 input-texte">Adresse</span>
                    </label>
        </div>
          <div className="border-2 p-3 mt-3 border-gray-400 w-80 flex justify-between h-10 items-center">

            <div className="mb-1 font-bold">Votre Commune :</div>
            <select  className="" name="" id="" onChange={(e)=>setDetailC(e.target.value)}>
                {
                    ApiCommune.map((item)=>(
                        <option  value={item}>{item}
                        </option>
                    ))
                }
            </select>
          </div>
          <div className="mt-5 flex justify-center bg-black p-2 text-white font-bold cursor-pointer">
            <div className="" onClick={PostData}>ENREGISTRER</div>
          </div>
      </form>
    </div>
  )
}
