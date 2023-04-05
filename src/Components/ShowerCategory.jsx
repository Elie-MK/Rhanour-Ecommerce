import { ShoppingCartOutlined } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import ApiCategoryShower from '../Database/ApiCategorySower'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/redux'



export default function ShowerCategory({category, sousCategory}) {
const dispatch = useDispatch();


const [shower, setShow]=useState([])

useEffect(()=>{
    
 const data= ApiCategoryShower.find(data=>data.category==category  && data.sousCategory.toLocaleLowerCase()==sousCategory.toLocaleLowerCase())
setShow(data.products)
// setShow(shower.products)

},[category, sousCategory])

  return (
    <div className=" md:ml-[-2vh] overflow-y-auto h-[500px]">
            <div className="font-bold p-3 rounded text-xl">{sousCategory}</div>

        <div>
        <div className="grid md:grid-cols-4 grid-cols-2 ">
        {
    shower.map(({id, img, title, price, alt, id_cat})=>(
        
<div className="group ">
    <div className=" md:p-2  bg-white  hover:shadow-lg items-center cursor-pointer ">
        <div className="md:p-5 ">
        <Link to={`/detail/${id_cat}/${id}`} key={id} >
            <div className="items-center flex justify-center">
                <img className="h-[160px] p-2" src={img} alt={alt}/>
            </div>
    </Link>
            <div className="text-center p-2  border-black hover:transition hover:duration-700 hover:ease-in-out hover:border-black ">
                {title}
            </div>
            <div className="text-center p-2 font-bold  border-black hover:transition hover:duration-700 hover:ease-in-out hover:border-black ">
                {price},00$
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
