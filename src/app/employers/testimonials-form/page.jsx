import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import SucessStoriesCard from '@/components/custom/SucessStoriesCard'
import { LAYOUT, TYPOGRAPHY } from '@/theme/styles'

const page = () => {
  const heroData = {
    title: "Testimonials Form",
    description: "Share your experience with Forge Hire and help us continue to deliver world-class staffing solutions.",
    bgImage: "/heroImages/testimonials-form.png"
  }

  const client = [
    {
      image: "/testimonial/client1.png",
      name: "Lauren Howard",
      profession: "Client Director",
      message: "Collaborating with ForgeHire has been exceptional. Their keen understanding of client needs ensures they present top-tier candidates. Their dedicated team goes beyond, offering unique talents that stand out. Grateful for their partnership in bringing valuable professionals to our team."
    },
    {
      image: "/testimonial/client2.png",
      name: "Danny Mitchell",
      profession: "Recruitment Manager",
      message: "Working closely with ForgeHire has been a game-changer. Their meticulous approach to candidate selection and seamless communication sets them apart. The team consistently delivers exceptional talent, making my role as a recruitment manager more effective and rewarding."
    },
    {
      image: "/testimonial/client3.png",
      name: "Olivia",
      profession: "Talent Acquisition",
      message: "Partnering with ForgeHire has been a strategic advantage. Their dynamic team understands our evolving needs, consistently presenting high-caliber candidates. Their proactive communication and tailored approach make the recruitment process seamless. ForgeHire truly enhances our talent acquisition strategy."
    }
  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className={LAYOUT.section + ' flex flex-col md:gap-10 gap-5'}>
        <div className={LAYOUT.flexCenter}>
          <h2 className={TYPOGRAPHY.h2}>Client Experience</h2>
          <p className={TYPOGRAPHY.body + ' max-w-2xl'}>Gaining profound insights into the path to success and unleashing your buisness full potential through our tailored recruitment solutions.
          </p>
        </div>
        <div className={LAYOUT.grid6}>
          {/* i want a card of 3 items with image and text  */}
          {(client.map((card, index) => (
            <SucessStoriesCard key={index} card={card} />
          ))
          )}
        </div>
      </section>
    </>
  )
}

export default page