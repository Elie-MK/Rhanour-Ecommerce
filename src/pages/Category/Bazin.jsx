import React from 'react'

export default function Bazin() {
  return (
    <div className="overflow-auto md:mt-[13vh] bg-gray-100">
      <div className="p-2 text-center text-xl font-bold">B a z i n</div>
  <div className=" flex  md:mb-1 p-2 gap-1">
      <div class="flex font-sans border">
        <div class="flex-none w-48 relative">
          <img src="https://www.africouleur.com/wp-content/uploads/2019/09/Chemise-africaine-homme-en-bazin-brod%C3%A9-33-510x765.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        </div>
        <div class="flex-auto p-6">
          <div class="flex flex-wrap">
            <h1 class="flex-auto text-lg font-semibold text-slate-900">
              Classic Utility Jacket
            </h1>
            <div class="text-lg font-semibold text-slate-500">
              $110.00
            </div>
            <div class="mb-2 w-full flex-none text-sm font-medium text-slate-700 mt-2">
              In stock
            </div>
          </div>
          <div class="flex space-x-4 mb-6 text-sm font-medium">
            <div class="flex-auto flex space-x-4">
              <button class="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
                J'achète
              </button>
            </div>
          </div>
        </div>
  </div>
  </div>
    </div>
  )
}
