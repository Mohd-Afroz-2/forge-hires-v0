import { TYPOGRAPHY } from '@/theme/styles'
import Image from 'next/image'
import React from 'react'

const AboutPeopleCard = ({ card }) => {
  return (
    <div className='flex flex-col md:flex-row items-center md:items-start text-center md:text-start p-6 md:p-8 rounded-3xl bg-white border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 group border-b-4 hover:border-b-black h-full gap-6 md:gap-8'>
      <div className='relative w-32 h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-2xl shadow-md'>
        <Image 
          src={card.img} 
          alt={card.name} 
          fill
          className='object-cover transform transition-transform duration-700 group-hover:scale-110' 
        />
      </div>
      <div className='flex flex-col justify-center space-y-3 flex-1'>
        <h3 className={`${TYPOGRAPHY.h3} text-black transition-colors duration-500 line-clamp-2`}>
          {card.name}
        </h3>
        <p className={`${TYPOGRAPHY.body}`}>
          {card.message}
        </p>
      </div>
    </div>
  )
}

export default AboutPeopleCard