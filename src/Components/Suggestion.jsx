import { ShoppingCartOutlined } from '@mui/icons-material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux/es/exports'
import { addCart } from '../redux/redux'
import { Link } from 'react-router-dom'
import ApiCategoryShower from '../Database/ApiCategorySower'
import { useState } from 'react'

export default function Suggestion({title, id_cat}) {
    const dispatch = useDispatch();
    const [suge, setSuge]=useState([])
    useEffect(()=>{
        const data = ApiCategoryShower.find(data=>(data.id == id_cat))
            const datas=data.products
  
        // setProduct(data.products[0])
        console.log(datas);
        // const datadetail = datas.find(data=>(data.id == id))
        setSuge(datas)
    },[id_cat])
  return (
    <div>
            <div className="font-bold p-3 rounded text-xl bg-white">{title}</div>

        <div>
        <div className="grid md:grid-cols-4">
    {
        suge.map(({id, img, title, price, alt, id_cat})=>(
            
    <div key={id} className="group">
        <div className=" md:p-2  bg-white  hover:shadow-lg items-center cursor-pointer ">
            <Link to={`/detail/${id_cat}/${id}`} className="md:p-5 ">
                
                <div className="items-center flex justify-center">
                    <img className="h-[160px] p-2" src={img} alt={alt}/>
                </div>
                <div className="text-center p-2  border-black hover:transition hover:duration-700 hover:ease-in-out hover:border-black ">
                    {title}
                </div>
                <div className="text-center p-2 font-bold  border-black hover:transition hover:duration-700 hover:ease-in-out hover:border-black ">
                    {price},00$
                </div>
                <div className="mt-1">
                <button className="w-full hidden group-hover:block active:border-white border border-black hover:bg-black hover:text-white rounded font-bold p-1 text-[15px]" onClick={()=>dispatch(addCart({qte:1,detail:{img:img,title:title,price:price,id:id}}))}><ShoppingCartOutlined /> J'achète  </button>
                </div>
            </Link>
        </div>
    </div>
        ))
    }
    </div>
        </div>
    </div>
  )
}
