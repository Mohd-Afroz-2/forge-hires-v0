import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'

const CECard = ({ card }) => {
    return (
        <div className='flex flex-col w-full border border-gray-200 p-8 rounded-3xl justify-start items-start gap-4 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 bg-white group'>
            <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-gray-100 group-hover:border-black transition-colors duration-300">
                    <Image
                        src={card.image}
                        fill
                        alt={card.name}
                        className="object-cover"
                        sizes="64px"
                    />
                </div>
                <div className="flex flex-col">
                    <h3 className='text-xl font-bold leading-tight tracking-tight text-gray-900'>{card.name}</h3>
                    <p className='text-gray-900 text-sm font-medium'>{card.profession}</p>
                </div>
            </div>
            
            <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400 w-4 h-4" />
                ))}
            </div>

            <p className='text-gray-900 text-base leading-relaxed italic'>
                "{card.message}"
            </p>
        </div>
    )
}

export default CECard