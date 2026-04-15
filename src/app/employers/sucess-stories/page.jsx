import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import SucessStoriesCard from '@/components/custom/SucessStoriesCard'
import { LAYOUT, TYPOGRAPHY } from '@/theme/styles'


const page = () => {
  const heroData = {
    title: "Success Stories",
    description: "Explore how we’ve helped businesses across industries overcome challenges and achieve their growth goals.",
    bgImage: "/heroImages/success-stories.png"
  }

  const candidates = [
    {
      image: "/testimonial/candidate1.png",
      name: "Alex Reynolds",
      profession: "Project Manager",
      message: "ForgeHire went beyond expectations, leading me to an exceptional career opportunity. Their committed team introduced an exciting role that stood out from competitors. I appreciate their personalized approach, making each step uniquely tailored to my professional journey."
    },
    {
      image: "/testimonial/candidate2.png",
      name: "Jordan",
      profession: "Marketing Specialist",
      message: "ForgeHire exceeded my expectations, navigating me to a unique career opportunity. Their dedicated team stood out, presenting an exciting role unmatched by other recruiters. I'm genuinely grateful for their personalized approach, ensuring every step felt tailored to my professional journey."
    },
    {
      image: "/testimonial/candidate3.png",
      name: "S. John",
      profession: "HR Generalist",
      message: "I was looking for the next step in my career and ForgeHire was able to find me an exciting and unique opportunity that was unlike anything presented to me by other recruiters."
    }
  ]

  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className={LAYOUT.section + ' flex flex-col md:gap-10 gap-5'}>
        <div className={LAYOUT.flexCenter}>
          <h2 className={TYPOGRAPHY.h2}>Candidates Experience</h2>
          <p className={TYPOGRAPHY.body + ' max-w-2xl'}>Gaining profound insights into the path to success and unleashing your buisness full potential through our tailored recruitment solutions.
          </p>
        </div>
        <div className={LAYOUT.grid6}>
          {/* i want a card of 3 items with image and text  */}
          {(candidates.map((card, index) => (
            <SucessStoriesCard key={index} card={card} />
          ))
          )}
        </div>
      </section>
    </>
  )
}

export default page