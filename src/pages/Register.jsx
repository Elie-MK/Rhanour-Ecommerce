import { Email } from '@mui/icons-material'
import React, { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth, { provider } from '../firebase';
import { useNavigate } from 'react-router-dom';



export default function Register() {
  const [email, setEmail]=useState("")
  const [password, setPassword]=useState("")
  const navigate = useNavigate()


  const register = (e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
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

  onAuthStateChanged(auth,(user)=>{
    if(user){
      navigate("/user")
    }
  })
  }
  return (
<div className="md:mt-[20vh] p-2 flex md:grid md:grid-cols-2">
  <div className="col-span-1 mt-20 md:mt-[-9vh]">
    <div>
      <img src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=740&t=st=1663355532~exp=1663356132~hmac=3572f478a34a4807dd1c2223fbc84a2c88bb4caa978dc52fb8dc18f1459c0548" alt="" />
    </div>
  </div>

      <div className="text-center md:col-span-1 mt-9">
        <div className="font-bold text-xl ">Enregistrez-vous !!!</div>
        <div>
          <form onSubmit={register} className="mt-4">
            <input className="border p-2 mb-2 md:pr-40" placeholder='Adresse e-mail' type="text"  value={email} onChange={(text)=>setEmail(text.target.value)}/><br/>
            <input className="border p-2 mb-2 md:pr-40" placeholder='Mot de passe' type="password"  value={password} onChange={(text)=>setPassword(text.target.value)}/><br/>
            <button className="bg-black text-white p-2 rounded md:w-60 hover:font-bold hover:bg-gray-100 hover:text-black hover:shadow-sm mt-3">S'enregistrer</button>
          </form>
        </div>
          <div className="mt-5 mb-5">
            <button className="bg-black text-white p-2 hover:font-bold rounded md:w-80 hover:bg-gray-100 hover:text-black hover:shadow-sm"><Email /> Connectez-vous avec Gmail</button>
          </div>
      </div>
    </div>
  )
}







