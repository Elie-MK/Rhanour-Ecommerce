import React, { useEffect, useState } from 'react'
import Empty from './Empty'
import { useSelector } from 'react-redux'
import Suggestion from '../Components/Suggestion'
import { Delete } from '@mui/icons-material'
import { Link, useParams } from 'react-router-dom'
import { deleteCart, emptyCart } from '../redux/redux'
import { useDispatch } from 'react-redux';
import auth from '../firebase';
import {onAuthStateChanged} from "firebase/auth";




export default function Panier() {
  
  const {id} = useParams()
  const dispatch = useDispatch();
  const [totalGenetal, setTotatlGenetal]=useState(0)


  const state = useSelector((state)=>state.cart)
  console.log(state);

  useEffect(()=>{
    var total = 0
    const Somme = (qte, price)=>{
      total = total + (price * qte)
    }

    state.forEach(element => {
      Somme(element.qte, element.detail.price)
    });


    setTotatlGenetal(total)

  },[state])

  return (

    <div>
      {
        state.length < 1 && (
          <Empty/>
        )
      }
      <div>
        {
          state.length >=1 && (

            <div className="md:grid md:grid-cols-5 p-10 md:p-20 gap-3">
            <div className="col-span-3 bg-gray-100 rounded-lg">
                <div className="border-b p-5">
                    <div className="text-lg font-bold text-center md:text-start">Panier ({ state.length})</div>
                </div>
                  {
                    state.map((item,index)=>(
                      <div className="flex"  key={index}>
                      <div className="w-20 p-2">
                      <img src={item.detail.img} alt="" srcset="" />
                  </div>
                  <div className="p-2 flex justify-between w-full">
                      <div className="text-sm md:text-lg  md:p-2">{item.detail.title} </div>
                      <div className="text-sm md:text-xl font-bold md:p-2">qté: {item.qte}x{item.detail.price},00$</div>
                      <div className="text-sm md:text-xl font-bold md:p-2">{item.detail.price *  item.qte},00$  </div>
                  </div>
                  <div className="p-2">
                  <button className="text-sm md:text-lg  md:p-2" onClick={()=>dispatch(deleteCart(item.detail.id))}><Delete /></button>
                  </div>
                </div>
                    ))
                  }
                    <div className="p-2 text-center md:text-start">
                        <button className="p-2 hover:bg-gray-100 hover:rounded uppercase" onClick={()=>dispatch(emptyCart())}><Delete /> Tout supprimer</button>
                    </div>
            </div>
            <div className="col-span-2 bg-gray-100  rounded-lg">
            <div className="border-b p-5 text-center">
                    <div className="md:text-lg font-bold">RÉSUMÉ DU PANIER</div>
                </div>

                <div className="border-b p-5 text-center">
                    <div className="">Total : <span className="font-bold md:text-xl">{totalGenetal},00$</span> </div>
                </div>
                <Link to='/checkout' className="flex justify-center  cursor-pointer md:p-2">
                    <button className="md:text-xl bg-white p-2 md:mt-1 shadow-lg rounded active:bg-black active:text-white" >Commander</button>
                </Link>
            </div>
        </div>
          )
          
        }
      </div>
      <div className="bg-white p-5 shadow rounded mt-5">
          <Suggestion id_cat={13} title="Les plus demandés" />
      </div>
    </div>
  )
}
