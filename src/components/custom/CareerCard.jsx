"use client"
import React, { useState } from 'react'

const CareerCard = ({ services }) => {
  const [selectedData, setSelectedData] = useState(null)
  return (
    <main className='p-6 md:p-10 relative overflow-hidden'>
      {/* Cards Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedData(service)}
            className='transition-all duration-300 ease-in-out hover:scale-102 hover:shadow-xl border border-gray-500 bg-gray-200 rounded-xl py-10 px-4 text-black cursor-pointer'
          >
            <div className='text-3xl md:text-5xl mb-3 font-semibold'>
              {String(service.id).padStart(2, "0")}
            </div>

            <div className='text-xs md:text-base lg:text-lg leading-tight font-semibold'>
              {service.title}
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedData && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>
          <div className="bg-white p-6 max-w-4xl mx-auto md:p-8 rounded-3xl shadow-2xl relative animate-in fade-in zoom-in duration-200">

            {/* Close Button */}
            <button
              onClick={() => setSelectedData(null)}
              className='absolute top-4 right-5 text-xl md:text-2xl font-bold cursor-pointer'
            >
              ✕
            </button>

            {/* Content */}
            <div className="flex md:flex-row flex-col md:gap-10 gap-4">
              <div>
                <div className=' border-b border-solid border-slate-900 mb-4'>
                  <h2 className='text-sm md:text-xl font-bold text-slate-900 mb-4'>
                    {selectedData.title}
                  </h2>
                  <h4>Across USA</h4>

                </div>

                <h2 className='font-bold text-lg mb-2'>Job description</h2>

                <p className='text-xs md:text-base  max-w-md w-full max-h-[60vh] overflow-y-auto whitespace-pre-line text-gray-700'>
                  {selectedData.popupData}
                </p>
              </div>
              <div className=" md:mt-10 mt-0 flex md:flex-col flex-row justify-evenly items-center gap-4">
                <div className='flex flex-col md:border md:border-width md:border-slate-900 md:rounded-3xl md:px-10 md:py-12 items-center '>
                  <h3 className="text-center text-[12px] md:text-xl font-bold whitespace-nowrap md:mb-6 mb-2">LOOKING FOR YOUR NEXT ROLE?</h3>
                  <button className="md:px-6 md:w-auto  w-fit p-2 py-2.5 text-[12px] md:text-lg bg-black text-white font-semibold rounded-lg transition-all duration-300 transform active:scale-97 shadow-md cursor-pointer whitespace-nowrap" onClick={() => router.push("")}>Submit Resume</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default CareerCard