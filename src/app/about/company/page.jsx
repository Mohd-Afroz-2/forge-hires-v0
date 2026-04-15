'use client'
import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Button from '@/components/custom/Button'
import { BUTTONS, TYPOGRAPHY } from '@/theme/styles'
import { FaRocket, FaEye, FaBullseye, FaChess, FaHandshake, FaLightbulb } from 'react-icons/fa'
import { FaShieldHalved } from 'react-icons/fa6'
import AboutCompanyCard from '@/components/custom/AboutCompanyCard'

const page = () => {
  const router = useRouter()
  const heroData = {
    title: "Company",
    description: "Learn about our history, mission, and the core values that drive our commitment to excellence.",
    bgImage: "/heroImages/aboutcompany.png"
  }

  const cardData = [
    {
      name: "Vision",
      message: "To support our Employers with professional and executive talent and to direct employees to the right position in their career path with rewarding benefits. We bridge the gap between industry and the talent pool with Automated technology.",
      logo: <FaEye />
    },
    {
      name: "Mission",
      message: "ForgeHire provides high quality recruitment services to various industries. We support the agile growth of clients by providing to executive solutions. we are result oriented and to become global player in the coming years.",
      logo: <FaBullseye />
    },
    {
      name: "Values",
      message: "We are transparent, Trusted, Highly Focused and Goal Oriented. We work with Positive reinforcement with SMART objectives.",
      logo: <FaShieldHalved />
    },
    {
      name: "Strategy",
      message: "ForgeHire crafts effective strategies for client growth, utilizing our talent network. We strategically place the right talent to meet business demands, directing our skilled pool toward shared goals for mutual success.",
      logo: <FaChess />
    },
    {
      name: "Partnership",
      message: "ForgeHire treats our employers and employees as our business partners and actualizes their goals. Our goal-oriented team always expands the network pool to meet the demands of our clients.",
      logo: <FaHandshake />
    },
    {
      name: "Innovation",
      message: "Innovation fuels Forge Hires Now. We embrace creativity and cutting-edge solutions, continually evolving to redefine industry standards. Committed to excellence, we propel clients and talent toward unmatched success.",
      logo: <FaLightbulb />
    },
  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />

      {/* Journey Section */}
      <section className='max-w-7xl mx-auto p-4 md:py-15 py-4'>
        <div className='grid grid-cols-1 items-center lg:grid-cols-[8fr_4fr] p-4 md:p-0 md:gap-10 gap-4'>
          <div className='flex flex-col gap-4'>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-2 text-black'>
              Our Journey: Empowering Careers, Transforming Businesses
            </h2>
            <p className={TYPOGRAPHY.body + ' text-justify '}>
              Since our founding in June 2021, we&apos;ve revolutionized recruitment by providing bespoke hiring solutions across diverse industries. From the US IT sector to Legal, Construction, Architecture, Mechanical, and Manufacturing, our vision drives seamless connections between employers and top-tier talent. With operations in the US, Australia, and India, and plans for global expansion, our diverse workforce is dedicated to driving recruitment excellence. Beyond business success, we&apos;re committed to community impact, bridging the gap between talent requirements and career growth opportunities. Join us in empowering careers and transforming businesses worldwide.
            </p>
            <Button
              text="Let's go!"
              className={BUTTONS.primary + " w-fit!"}
              onClick={() => router.push("/contact-us")}
            />
          </div>
          <div>
            <Image
              src="/about/aboutcompany.jpg"
              width={500}
              height={500}
              alt="About Company"
              className='w-full h-auto object-cover rounded-3xl'
            />
          </div>
        </div>
      </section>

      {/* Vision Mission Values Section */}
      <section className='max-w-7xl mx-auto p-4 md:py-10 py-4'>
        <div className='grid grid-cols-1 items-center p-4 md:p-0 md:gap-10 gap-4'>
          <div className='flex flex-col items-center gap-4'>
            <h2 className='text-2xl text-center md:text-3xl lg:text-4xl font-bold uppercase text-black'>
              Shaping a Vision for a Brighter Tomorrow
            </h2>
            <p className={TYPOGRAPHY.body + ' text-center '}>
              Gaining profound Insights into the path to Success and unleashing your business's full potential
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {cardData.map((card, index) => (
              <AboutCompanyCard key={index} card={card} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default page