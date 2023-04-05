import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { ApiCommune } from '../Database/ApiCommune'
import { Link, useNavigate } from 'react-router-dom';
import  axios  from 'axios'

export default function Modepaie() {
    const [writing, setWrite]=useState("")
    console.log(writing);
    const [totalGeneral, setTotatlGeneral]=useState(0)
    const state = useSelector((state)=>state.cart)
    console.log(state);

    const navigate = useNavigate()
    useEffect(()=>{
        var total = 0
        const Somme = (qte, price)=>{
          total = total + (price * qte)
        }
    
        state.forEach(element => {
          Somme(element.qte, element.detail.price)
        });
    
    
        setTotatlGeneral(total)

    
      },[state])



      const Sendmail = (e)=>{
            e.preventDefault(); 
            state.map((item)=>{
                axios.post("http://localhost:500/send_email",
                {
                    from : "eliemulumba63@gmail.com",
                    to : "eliemulumba63@gmail.com",
                    subject : `Confirmation de votre commande ${writing}`,
                    message : 
                        `
                            <h1>Détails de votre commande</h1>
                            <h5>ID: ${item.detail.id}</h5>
                            <h5>Quantité : ${item.qte}</h5>
                            <h5>Titre : ${item.detail.title}</h5>
                            <h5>Prix : ${item.detail.price},00$</h5>
                            <h5>Livraison : 3,00$</h5>
                            <img style = "width : 60px; height : 90px" src=${item.detail.img} alt="" />
                        `
                })
                .then(res=>{
                    console.log(res.data);
                })
                .catch(err=>{
                    console.log(err)
                })
            })
            alert("Votre commande a été envoyer avec succès")
            navigate("/")
      }
    
  return (
    <div className="md:mt-20 md:mb-5">
        <div className="p-5 font-bold text-center md:text-2xl">
        FINALISATION DE LA COMMANDE
        </div>
        <div className="md:grid md:grid-cols-7 gap-x-3">
            <form className="col-span-5 md:ml-5 p-5 border-r roundeed-lg shadow-md bg-gray-100">
                <div className="font-bold">1. ADRESSE</div>
                <div className="flex gap-3  items-center mt-4">
                    <label className="relative">
                        <input type="text" className="bg-gray-100 h-10 md:w-80 w-40 px-6  border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-black focus:text-black transition duration-200" name="name" id="name" onChange={(e)=>setWrite(e.target.value)}/>
                        <span className=" text-black text-oapcity-80 absolute left-0 top-2 mx-6 px-2 transition duration-200 input-text" >Nom*</span>
                    </label>
                    <label className="relative">
                        <input type="text" className="bg-gray-100 h-10 md:w-80 w-40 px-6  border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-black focus:text-black transition duration-200" onChange={(e)=>setWrite(e.target.value)}/>
                        <span className=" text-black text-oapcity-80 absolute left-0 top-2 mx-6 px-2 transition duration-200 input-text">Prénom*</span>
                    </label>
                </div>
                <div className="flex  items-center gap-3 mt-4">
                    <label className="relative">
                        <input type="text" className="bg-gray-100 h-10 md:w-80 w-40 px-6  border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-black focus:text-black transition duration-200"/>
                        <span className=" text-black text-oapcity-80 absolute left-0 top-2 mx-6 px-2 transition duration-200 input-text">N°Phone*</span>
                    </label>

                    <div className="md:flex gap-2">
                        <div>Votre sexe :</div>
                        <div className="flex gap-2">
                            <input type="radio" name="F" id="M"  value="masculin" />
                            <div>Masculin*</div>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" name="F" id="F" value="feminin" />
                            <div>Féminin*</div>
                        </div>
                    </div>
                    
                </div>
                <div className="md:flex gap-3 items-center mt-4">
                    <label className="relative">
                        <textarea type="text" className="bg-gray-100 h-20 md:w-80 px-6  border-2 rounded-lg border-black border-opacity-50 outline-none focus:border-black focus:text-black transition duration-200"/>
                        <span className=" text-black text-oapcity-80 absolute md:left-0 md:top-2 md:mx-6 md:px-2 transition duration-200 input-text">N°, Avenue, Quartier, Réference*</span>
                    </label>
                    <div className="border-2 p-3 rounded-lg border-gray-400 w-80 flex justify-between h-10 items-center">

                        <div className="mb-1 font-bold">Votre Commune :</div>
                        <select  className="bg-gray-100" name="" id="">
                            {
                                ApiCommune.map((item)=>(
                                    <option value={item}>{item}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                    <div className="mt-3">
                        <div className="font-bold">2. MODE DE LIVRAISON</div> 
                        <div className="gap-2 ml-5">
                        <div className="flex gap-2 mt-2">
                            <input type="radio" name="L" id="adomicile" />
                            <div>Livraison à domicile ou au bureau</div>
                        </div>
                        <div className="flex gap-2 mt-2">
                            <input type="radio" name="L" id="surplace" />
                            <div>Sur place</div>
                        </div>
                    </div>
                        <div className="mt-3">
                            <div className="font-bold">3. MODE DE PAIEMENT</div>
                            <div className="">Quel moyen de paiement voulez-vous utiliser?</div>
                            <div className="gap-2">
                        <div className="flex gap-2">
                            <input type="radio" name="P" id="mobilemoney" />
                            <div>
                                <img className="w-60" src="https://thumb.canalplus.pro/http/unsafe/0x0/smart/filters:quality(40)/warehouse.canal-overseas.com/content/0001/03/426517ee2c58a1bf2e7c202fcc6c4a733e1c22d7.png" alt="" />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <input type="radio" name="P" id="cash" />
                            <div>Paiement CASH à la livraison</div>
                        </div>
                    </div>
                        </div>
                    </div>
                    <div className="mt-5  p-3 rounded-lg md:w-96 ">
                      <div>
                        <div className="flex justify-between">
                            <div className="">Sous-total</div>
                            <div className="">{totalGeneral},00$</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="">Montant de livraison</div>
                            <div className="">3,00$</div>
                        </div>
                        <div className="flex justify-between">
                            <div className="font-bold text-lg">Total</div>
                            <div className="font-bold text-lg">{totalGeneral + 3},00$</div>
                        </div>
                      </div>
                    </div>
                        <div className="flex justify-center mt-5" >
                            <div onClick={Sendmail} className="p-2 bg-black  text-white rounded-lg active:bg-gray-100
                            active:border active:border-black active:text-black active:duration-500 font-bold cursor-pointer">CONFIRMER LA COMMANDE</div>
                        </div>
            </form>
            <div className="col-span-2  md:mr-5 bg-gray-100 h-full shadow-md">
                <div className="flex justify-center ">
                    <div className="text-sm font-bold p-5">VOTRE COMMANDE ({state.length})</div>
                </div>
                {
                    state.map((item,index)=>(
                   <>
                <div className="flex gap-2 mt-5 border-b p-2">
                    <div>
                        <img className="w-10 h-10 " src={item.detail.img} alt="" />
                    </div>

                    <div className="">
                        <div>{item.detail.title}</div>
                        <div className="font-bold">Qté: {item.qte} x {item.detail.price},00$</div>
                    </div>
                </div>
                   </>     
                    ))
                }
                <div className="p-2 border-b">
                    <div className="flex justify-between">
                        <div>Sous Total</div>
                        <div>{totalGeneral},00$</div>
                    </div>
                    <div className="flex justify-between">
                        <div>Montant de livraison</div>
                        <div>3,00$</div>
                    </div>
                </div>
                <div className="p-2 border-b">
                <div className="flex justify-between">
                        <div className="font-bold">Total</div>
                        <div className="font-bold">{totalGeneral + 3},00$</div>
                    </div>
                </div>
                <Link to="/panier" className="flex justify-center p-2">
                    <div className="cursor-pointer bg-white p-2 rounded-lg border border-black">RETOUR AU PANIER</div>
                </Link>
                <div className="flex justify-center p-2">
                    <div className="cursor-pointer bg-white p-2 rounded-lg border border-black">VALIDATION</div>
                </div>
            </div>
        </div>
    </div>
  )
}
