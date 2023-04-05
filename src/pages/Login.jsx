import { Email, LoginOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from '../firebase';


export default function Login() {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const navigate = useNavigate()

  const register = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    navigate("/user")

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message 
    alert(errorMessage);
    // ..
  });
  }


  onAuthStateChanged(auth,(user)=>{
    if(user){
      navigate("/user")
    }
  })
  return (
    <div className="md:mt-[20vh] p-2 flex md:grid md:grid-cols-2">
      <div className="md:mt-[-50px] mt-20 col-span-1">
        <img className="md:w-full" src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?w=740&t=st=1663354349~exp=1663354949~hmac=92029fc75cfa2b044c62c79745b5a9e72486b2de03e13a0bbdc73969b92a9fec" alt="" />
      </div>
      <div className="text-center  mt-5 col-span-1 ">
        <div className="font-bold text-xl">Connectez-vous !!!</div>
        <div>
          <form onSubmit={register} className="mt-4">
            <input className="border p-2 mb-2 md:pr-40" placeholder='Adresse e-mail' type="text" value={email} onChange={(text)=>setEmail(text.target.value)} /><br/>
            <input className="border p-2 mb-2 md:pr-40" placeholder='Mot de passe' type="password" value={password} onChange={(text)=>setPassword(text.target.value)}/><br/>
            <div>
              <a href="#"><button>Mot de passe oublié ?</button></a>
              </div>
            <button className="bg-black text-white p-2 rounded md:w-60 hover:font-bold hover:bg-gray-100 hover:text-black hover:shadow-sm mt-3">Se Connecter</button>
          </form>
        </div>
        <Link to="/register">
          <div className="font-bold mt-4">
            <p className="">Enregistrez-vous<LoginOutlined className="ml-2 cursor-pointer"/></p>
          </div>
        </Link>
          <div className="mt-5 mb-5">
            <button className="bg-black text-white p-2 hover:font-bold rounded md:w-80 hover:bg-gray-100 hover:text-black hover:shadow-sm "><Email/> Connectez-vous avec Gmail</button>
          </div>
      </div>
    </div>
  )
}
