import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
  return (
    <Link to="/Error">
        <div className="flex justify-center mt-20 p-5  text-center">
            <div className="">
                <img src="https://img.freepik.com/free-vector/404-error-lost-space-concept-illustration_114360-7871.jpg?w=740&t=st=1663353083~exp=1663353683~hmac=02d607ecb3402350b4d22a8d11e64dcb2040b71be7f716364f75a636b542a151" alt="" srcset="" />
            </div>
        </div>
    </Link>
  )
}
