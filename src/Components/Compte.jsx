import { AccountBoxOutlined, ArrowLeftOutlined, FavoriteBorderOutlined, InboxOutlined, KeyboardArrowLeftOutlined, LocationOnOutlined, ManageAccountsOutlined, PowerInputOutlined, PowerSettingsNewOutlined } from '@mui/icons-material'
import React from 'react'
import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import auth from '../firebase';


export default function Compte() {
    const [open, setOpen]=useState(true); 
    const [click, setClick]=useState("compte")
    const navigate = useNavigate()


    const disconnect = ()=>{
      signOut(auth).then(() => {
        // Sign-out successful.
        navigate("/")
      }).catch((error) => {
        // An error happened.
      });
    }
  return (
    <div className="md:mt-[12vh] flex md:text-sm">
        <div className={`${open ? 'w-72' : 'w-20'} duration-300 h-screen bg-slate-200 relative`}>
            <div className={`absolute cursor-pointer right-[-2vh] top-9 w-7 border-2 shadow-lg border-slate-400 rounded-full bg-white ${!open && 'rotate-180'}`} onClick={()=>setOpen(!open)}><KeyboardArrowLeftOutlined  className=""/></div>

            <Link to='/user/' className={`flex p-5 gap-x-2 hover:bg-white  hover:font-bold cursor-pointer duration-300 border-b border-gray-100 ${click === "compte" && "bg-white font-bold shadow"}`} onClick={()=>setClick("compte")}>
            <AccountBoxOutlined fontSize={`${!open? 'large': 'medium'}`} className=""/>
            <div className={`  ${!open && "hidden"} origin-left  duration-200`}>Votre compte Rhanour</div>
            </Link>

            <Link to='/user/order' className={`flex p-5 gap-x-2 hover:bg-white  hover:font-bold cursor-pointer duration-300 ${click === "commande" && "bg-white font-bold shadow"}`} onClick={()=>setClick("commande")} >
            <InboxOutlined fontSize={`${!open? 'large': 'medium'}`}/>
            <div className={`  ${!open && "hidden"} origin-left  duration-200`}> Vos commandes</div>
            </Link>

            <Link to='/user/favori' className={`flex p-5 gap-x-2 hover:bg-white  hover:font-bold cursor-pointer duration-300 ${click === "like" && "bg-white font-bold shadow"} `}  onClick={()=>setClick("like")}>
            <FavoriteBorderOutlined fontSize={`${!open? 'large': 'medium'}`} />
            <div className={`  ${!open && "hidden"} origin-left  duration-200`}> Votre liste d'envies</div>
            </Link>

            {/* <Link to='/user/manageaccount' className={`flex p-5 gap-x-2 hover:bg-white  hover:font-bold cursor-pointer duration-300 ${click === "gCompte" && "bg-white font-bold shadow"} `} onClick={()=>setClick("gCompte")}>
            <ManageAccountsOutlined fontSize={`${!open? 'large': 'medium'}`}/>
            <div className={`  ${!open && "hidden"} origin-left  duration-200`}> Gérez votre Compte</div>
            </Link> */}

            <Link to='/user/adresse' className={`flex p-5 gap-x-2 hover:bg-white  hover:font-bold cursor-pointer duration-300 ${click === "adresse" && "bg-white font-bold shadow"} `} onClick={()=>setClick("adresse")}>
            <LocationOnOutlined fontSize={`${!open? 'large': 'medium'}`}/>
            <div className={`  ${!open && "hidden"} origin-left  duration-200`}> Adresses</div>
            </Link>

            <div className="border-t border-gray-100 flex p-5 gap-x-2 hover:bg-red-500 hover:font-bold cursor-pointer duration-300">
            <PowerSettingsNewOutlined fontSize={`${!open? 'large': 'medium'}`} />
            <div className={`  ${!open && "hidden"} origin-left  duration-200`} onClick={disconnect}>DÉCONNEXION</div>
            </div>
        </div>
        <div className="">
          <Outlet/>
        </div>
    </div>
  )
}
