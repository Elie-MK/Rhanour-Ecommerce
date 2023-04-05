import { query } from 'firebase/database'
import { addDoc, collection, getDocs, where } from 'firebase/firestore'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import auth, { db } from '../firebase'

export default function Ordertrue() {
  const [details, setDetails]=useState({})
  // const PostData  = async(e)=>{
  //   // e.preventDefault()
  //   const {category, sousCategory, id, products}=details; 
  //   try {
  //     const docRef = await addDoc(collection(db, "products"), {
  //       Iduser: auth.currentUser.uid, 
  //       id :1,
  //       category: "femme",
  //       sousCategory: "vetements",
  //       products: [
  //         {
  //           id : 528773, 
  //           img : "https://www.awalebiz.com/images/detailed/15/Kiba_Tima_02.jpg", 
  //           title : "Ensemble Boubou",
  //           desc : "Il intègre des épaulettes soigneusement étudiées, des manches veste raffinées ainsi que des attributs propres à l’habit africain, ce qui lui donne une allure spécifique de costume africain.",
  //           price : "40",
  //           id_cat:1,
  //         }
  //       ],
  //     });
  
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }
  // useEffect(()=>{
  //   PostData()
  // },[])

  
  const [getdata, setGetdata]=useState([])

  const {category, sousCategory, id, products}=getdata
  
  
  
  const getDetail = async ()=>{
    
    const citiesRef = collection(db, "products");
    const q = query(citiesRef, where("id", "==", 1));
    const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  setGetdata(doc.data().products[0]);
  console.log(getdata)
  });
  }
  
  useEffect(()=>{
    getDetail()
  },[])
  return (
    <div>
            <div className="flex p-5 mt-10 justify-center">
                <img src="https://cdn-icons-png.flaticon.com/512/825/825561.png" 
                alt="" className="w-20 " />
            </div>
            <div className="text-center ">
                <div className="font-bold mb-5">Vous n'avez placé aucune commande !</div>
                <div>Toutes vos commandes seront sauvegardées ici<br/> pour que vous puissiez consulter leur statut à tout <br/> moment.</div>
            </div>
            <div className="flex justify-center mt-9">
            <Link to="/" className="bg-black text-white p-3 rounded-md hover:bg-gray-100 hover:text-black font-bold hover:border hover:border-black">
                POURSUIVEZ VOS ACHATS</Link>
            </div>
    </div>
  )
}
