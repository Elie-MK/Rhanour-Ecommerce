import { FavoriteBorderOutlined, FavoriteSharp, ShoppingCartOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Suggestion from '../Components/Suggestion';
import { addCart, supCart } from '../redux/redux'
import ApiCategoryShower from '../Database/ApiCategorySower';


export default function Detail() {
    const {id,idCategory} = useParams()
    const dispatch = useDispatch();


    const [taille, setTaille]=useState("S")
    const [Favorite, setFavorite]=useState(false)
    const [product, setProduct]=useState({})
    const [category, setCategory]=useState({})
   
    const [count, setCount] = useState(0)
    const Handlebutton = (detail)=> { 

        if(count <= 0){
            return;
        }
        setCount(count - 1)
        dispatch(supCart(detail))


    } 
    const HandleButtonPlus = (detail) => {

        if(count>=20){
            return;
        }
        setCount(count + 1)
        dispatch(addCart(detail))
    } 
    
    useEffect(()=>{
        const data = ApiCategoryShower.find(data=>(data.id == idCategory))
            const datas=data.products
        
        // setProduct(data.products[0])
        console.log(datas);
        const datadetail = datas.find(data=>(data.id == id))
        setProduct(datadetail)
        const category = ApiCategoryShower.find(data=>(data.id == idCategory))
        setCategory(category.sousCategory);
    },[id])
    
  return (
    <div className="bg-gray-100 px-2">
    <div className="md:mt-[80px] p-2 sm:grid-cols-2 grid bg-white rounded-b-xl px-2">
        {/* Detail image */}
        <div className=" border-r flex justify-center">
            <div className="w-full">
                <img src={product?.img} alt="" />
            </div>

        </div>
        {/* Detail Titre */}
        <div className="">
            <div className="flex justify-between items-center p-2">
                <div className=" text-[10px] cursor-pointer bg-black text-white rounded p-1">Boutique Officielle</div>
                <div className="">
                    {
                        Favorite?(
                            <div onClick={()=>setFavorite(!Favorite)}>
                                <FavoriteSharp /> 
                            </div> 

                        ):(
                            <div onClick={()=>setFavorite(!Favorite)}>
                                <FavoriteBorderOutlined />  

                            </div>

                        )
                    }
                </div>

            </div>
            <div className="border-b mb-2 p-2">
                <div className="text-xl">{product?.title}</div>
                <div className={`${category =="chaussures"? "flex gap-4" : "hidden"} mt-5`}>
                    <div>Votre pointure :</div>
                    <label htmlFor="">
                        <input className="w-[9vh] border-2 border-black p-1 rounded-lg" type="text" />
                    </label>
                </div>
                <div className={`${category !='chaussures'? "mb-5" : "hidden" } mt-2 mb-4`}>Taille disponible : {product.category}</div>
                <div className={`${category !='chaussures'? "mb-5" : "hidden" } `}>
                    <span className={`border p-2  cursor-pointer hover:bg-black hover:text-white ${taille ==="S" ? "bg-black text-white" : null}`} onClick={()=>setTaille("S")}>S</span> 
                    <span className={`border p-2  cursor-pointer hover:bg-black hover:text-white ${taille ==="M" ? "bg-black text-white" : null}`} onClick={()=>setTaille("M")}>M</span> 
                    <span className={`border p-2  cursor-pointer hover:bg-black hover:text-white ${taille ==="L" ? "bg-black text-white" : null}`} onClick={()=>setTaille("L")}>L</span> 
                    <span className={`border p-2  cursor-pointer hover:bg-black hover:text-white ${taille ==="xl" ? "bg-black text-white" : null}`} onClick={()=>setTaille("xl")}>XL</span> 
                    <span className={`border p-2  cursor-pointer hover:bg-black hover:text-white ${taille ==="Xxl" ? "bg-black text-white" : null}`} onClick={()=>setTaille("Xxl")}>XXL</span> 
                </div>
            </div>
            <div className="p-2">
                <div className="text-4xl font-bold">{product?.price},00$ </div>
                <div className="text-sm mt-2">+ frais de livraison <span className="font-bold">5.000 FC</span></div>
            </div>
            <div className="p-2">
                <div>
                <button className="mr-3 text-1xl p-2 rounded-l-xl bg-black text-white" onClick={()=>Handlebutton({qte:1,detail:{img:product?.img,title:product?.title,price:product?.price,id:product?.id}})}  >-</button> {count}<button className="ml-3 text-1xl p-2 rounded-r-xl bg-black text-white" onClick={()=>HandleButtonPlus({qte:1,detail:{img:product?.img,title:product?.title,price:product?.price,id:product?.id}})}>+</button> </div>
            </div>
            <div className="mt-2 p-2">
                <button className="w-[12rem] active:border-white border border-black hover:bg-black hover:text-white rounded font-bold p-1 text-[15px]" onClick={()=>dispatch(addCart({qte:1,detail:{img:product?.img,title:product?.title,price:product?.price,id:product?.id}}))}><ShoppingCartOutlined /> J'achète  </button>
            </div>
            <div className="border-t ">
                <div className="text-xl text-center">Description</div>
                <div className="p-2">{product?.desc} </div>
            </div>
        </div>
    </div>
    <div className="p-2 overflow-y-scroll h-80 mb-2">
        <Suggestion id_cat={idCategory >1 ? idCategory -1 :idCategory}  title="Autres produits de la boutique" />
    </div>
    </div>
  )
}
