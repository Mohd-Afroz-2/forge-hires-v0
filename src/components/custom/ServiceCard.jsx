"use client"
import React, { useState } from 'react'

const ServiceCard = ({ services }) => {
  const [selectedData, setSelectedData] = useState(null)

  return (
    <main className='p-6 md:p-10 relative overflow-hidden'>
      {/* Cards Grid */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedData(service)}
            className='transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg border border-gray-500 bg-gray-200 rounded-xl py-10 px-4 text-black cursor-pointer'
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
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4'>
          <div className="bg-gray-100 border border-gray-500   p-6 md:p-8 rounded-3xl max-w-2xl w-full max-h-[60vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in duration-200">

            {/* Close Button */}
            <button
              onClick={() => setSelectedData(null)}
              className='absolute top-4 right-5 text-xl md:text-2xl font-bold cursor-pointer'
            >
              ✕
            </button>

            {/* Content */}
            <h2 className="text-sm md:text-xl font-bold text-slate-900 mb-4">
              {selectedData.title}
            </h2>

            <p className='text-xs md:text-base whitespace-pre-line text-black'>
              {selectedData.popupData}
            </p>
          </div>
        </div>
      )}
    </main>
  )
}

export default ServiceCard