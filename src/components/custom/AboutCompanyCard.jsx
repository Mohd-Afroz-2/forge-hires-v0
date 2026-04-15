import { TYPOGRAPHY } from '@/theme/styles'
import React from 'react'

const AboutCompanyCard = ({ card }) => {
  return (
    <div className='flex flex-col items-center lg:items-start text-center lg:text-start p-8 rounded-3xl bg-white border border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group border-b-4 hover:border-b-black h-full gap-6'>
      <div className='w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center text-3xl text-gray-400 group-hover:bg-black group-hover:text-white transition-all duration-500 shadow-inner'>
        {card.logo}
      </div>
      <div className='space-y-3'>
        <h3 className={`${TYPOGRAPHY.h3} text-black group-hover:text-black transition-colors duration-500`}>
          {card.name}
        </h3>
        <p className={`${TYPOGRAPHY.body} text-gray-600 leading-relaxed text-sm md:text-base`}>
          {card.message}
        </p>
      </div>
    </div>
  )
}

export default AboutCompanyCard