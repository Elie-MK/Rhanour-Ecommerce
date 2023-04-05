import { HeadsetMicOutlined, LocalShippingOutlined } from '@mui/icons-material'
import React from 'react'


export default function Info() {
  return (
      <div className=" p-2 text-black mb-3 ">
        <div className="">
          <div className="flex justify-center  md:p-5 ">
            <div className="p-2  text-center bg-gray-100 md:p-5 border-r shadow" >
              <LocalShippingOutlined className=""/> <span className="font-bold">LIVRAISON</span> À DOMICILE</div>
            <div className="p-2  text-center bg-gray-100 md:p-5 shadow">
              <HeadsetMicOutlined className=""/> <span className="font-bold">CONTACTEZ</span>-NOUS</div>
          </div>
        </div>
    </div>
  )
}
