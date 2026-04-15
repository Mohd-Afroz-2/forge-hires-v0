"use client"

import React from 'react'
import { LAYOUT, TYPOGRAPHY } from '@/theme/styles'

const HeroSectionForAll = ({title, description, bgImage}) => {
  return (
    <section 
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bgImage})` 
      }}
      className={LAYOUT.hero + ` bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center gap-6 text-center text-white`}
    >
      <div className="max-w-4xl mx-auto flex flex-col gap-6 items-center">
        <h1 className={TYPOGRAPHY.h1}>{title}</h1>
        <p className={TYPOGRAPHY.body + 'max-w-2xl'}>{description}</p>
      </div>
    </section>
  )
}

export default HeroSectionForAll;