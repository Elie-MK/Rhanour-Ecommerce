import { ShoppingCartOutlined } from '@mui/icons-material';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import ApiCategoryShower from '../../Database/ApiCategorySower'
import { addCart } from '../../redux/redux';

export default function Chemise(category) {
  const dispatch = useDispatch();
  const [boubou, setBoubou]=useState([])

  useEffect(()=>{
    
    const data= ApiCategoryShower.find(data=>data.categoryV=="Chemises" && data.products)
  setBoubou(data.products)
   // setShow(shower.products)
   
   },[category])

  return (
    <div className="overflow-auto md:mt-[11vh] bg-gray-100  ">
      <div className="p-2 text-center text-2xl font-bold">CHEMISES</div>
      <div className="flex justify-center">
<div className="md:grid md:grid-cols-4 mt-5">
      {
        boubou.map(({title, img, price, id, id_cat})=>(
          <div className="group relative hover:shadow-xl w-[15rem]" key={id}>
          <Link to={`/detail/${id_cat}/${id}`}  >
              <div className="flex justify-center ">
                  <img className="md:w-40 md:h-60 p-2" src={img} />
              </div>
              <div className="flex justify-between ">
              <p className="font-bold text-[15px] absolute left-0 top-0 bg-black text-white py-2 px-6 rounded">{price},00$</p>
              </div>
  </Link>
          <div className="  rounded-xl items-center cursor-pointer ">
          <div className="p-5 ">
              <div className="text-center p-2  ">
                  <p>{title}</p>
              </div>
              <div className="mt-1">
              <button className="w-full hidden group-hover:block active:border-white border border-black hover:bg-black hover:text-white rounded font-bold p-1 text-[15px]" onClick={()=>dispatch(addCart({qte:1,detail:{img:img,title:title,price:price,id:id}}))}><ShoppingCartOutlined /> J'achète  </button>
              </div>
          </div>
      </div>
      </div>
        ))
      }
      </div>
      </div>
    </div>
  )
}

