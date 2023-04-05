import { ShoppingBagOutlined, ShoppingCart, ShoppingCartCheckoutOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux/es/exports'
import { addCart } from '../redux/redux'
import ApiCategoryShower from '../Database/ApiCategorySower'

const Products =({title})=>{
const dispatch = useDispatch();
const [shower, setShow]=useState([])

useEffect(()=>{
    
 const data= ApiCategoryShower.find(data=>data.category==title )
setShow(data.products)
// setShow(shower.products)

},[title])

  return (
    <div className="sm:ml-9 sm:mr-9">
                <div className="text-center p-5 uppercase text-2xl bg-gray-100 border-black flex justify-between items-center">             
                <p>{title}</p>
                <Link to={`/${title}`} className="cursor-pointer font-bold text-lg">Voir plus</Link></div>
                <div className=" mt-3 grid-cols-2 md:grid-cols-4 grid gap-2 p-2">
    {
        shower.map(({id, img, title, alt, price,   id_cat})=>(
            
            <div className="group relative hover:shadow-xl" key={id}>
            <Link to={`/detail/${id_cat}/${id}`}  >
                <div className="items-center flex justify-center">
                    <img className="w-[50%] h-[30vh] p-2" src={img} alt={alt}/>
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
  )
}

export default Products;