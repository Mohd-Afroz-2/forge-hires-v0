import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import { TYPOGRAPHY } from '@/theme/styles'
import Image from 'next/image'
import ClientExperience from '@/components/custom/ClientExperience'
import AboutPeopleCard from '@/components/custom/AboutPeopleCard'
import QnaData from '@/components/custom/QnaData'

const page = () => {
  // const router = useRouter();
  const heroData = {
    title: "People",
    description: "Meet the dedicated team of experts behind Forge Hire's industry-leading recruitment solutions.",
    bgImage: "/heroImages/aboutpeople.png"
  }

  const cardData = [
    {
      name: "Work life is balanced in Forge Hires  Now",
      message: "Work-life is balanced to the degree to which one can manage their job responsibilities and their personal life in a way that supports their well-being.",
      img: "/about/work.jpg"
    },
    {
      name: "Vacations are planned as per schedule",
      message: "At Forge Hires Now, we prioritize work-life balance. Enjoy worry-free vacations with meticulously planned schedules, ensuring you recharge and return energized to contribute your best.",
      img: "/about/vacation.png"
    },
    {
      name: "Employee recognition programs",
      message: "Employee recognition programs are planned in ForgeHire for motivating employees and rewarding them for hard work. At end of the year employees will be verified based on their performance to meet deadlines, reach sales targets and hit other key performance indicators.",
      img: "/about/employee.jpg"
    },
    {
      name: "Training programs",
      message: "ForgeHire provides Employee training programs which involve both formal learning and on-the-job skill development meant to help the Our Employees to advance in their career. Some businesses create training tracks specifically designed for individuals interested in starting on a new job path.",
      img: "/about/training.jpg"
    }
  ]

  return (
    <>
      <HeroSectionForAll {...heroData} />

      {/* Team */}
      <section className='max-w-7xl mx-auto p-4 md:py-15 py-4'>
        <div className='grid grid-cols-1 items-center lg:grid-cols-[5fr_7fr] p-4 md:p-0 md:gap-10 gap-4'>
          <div className='flex flex-col gap-3 p-9 bg-black'>
            <h3 className='text-xl md:text-2xl text-white uppercase lg:text-3xl font-semibold mb-2'>
              Our dedicated team at ForgeHire provides the right direction and goals to our clients and talented pool in creating and shaping the business and career growth landscape.
            </h3>
          </div>
          <div className='flex flex-col gap-2'>
            <p className=' text-base leading-relaxed text-gray-900 text-justify '>
              ForgeHire believes that our team is our greatest strength. Our team members possess in-depth knowledge and skills across various fields, including digital technology, logistics and warehousing, manufacturing, construction, information technology, engineering, services, law, and more.
            </p>
            <p className=' text-base leading-relaxed text-gray-900 text-justify '>
              Furthermore, our team excels in recruitment, leveraging our expertise to provide tailored talent solutions to different business partners. We specialize in identifying and collecting specific talents for each sector of the industry, facilitating and boosting the growth of our clients and their employees.
            </p>
            <p className=' text-base leading-relaxed text-gray-900 text-justify '>
              Through our strategic approach, we have helped our clients transform their businesses within limited time periods by providing talented leadership teams tailored to meet new market demands and enter new territories. We achieve this by conducting thorough assessments of their operations, gaining deep insights, and comprehensively understanding their businesses and talent pools.                </p>
          </div>
        </div>
      </section>

      {/* Team Image Section */}
      <section className='max-w-7xl mx-auto p-4 md:py-10 py-4'>
        <div className='grid grid-cols-1 items-stretch md:grid-cols-[4fr_8fr] p-4 md:p-0 md:gap-10 gap-4'>
          <div className='relative h-[300px] md:h-[400px] lg:h-[500px]'>
            <Image
              src="/about/aboutpeople2.jpg"
              alt="About People"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className='object-cover rounded-2xl'
            />
          </div>
          <div className='relative h-[300px] md:h-[400px] lg:h-[500px]'>
            <Image
              src="/about/aboutpeople1.jpg"
              alt="About People"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className='object-cover rounded-2xl'
            />
          </div>
        </div>
      </section>

      {/* Client Experience Section */}
      <ClientExperience />

      {/* Stats Section */}
      <section>
        <QnaData />
      </section>

      {/*  */}
      <section className='max-w-7xl mx-auto p-4 md:py-10 py-4'>
        <div className='grid grid-cols-1 items-center p-4 md:p-0 md:gap-10 gap-4'>
          <div className='flex flex-col items-center gap-4'>
            <h2 className='text-2xl text-center md:text-3xl lg:text-4xl font-bold uppercase text-black'>
              Life at Forge Hires  now
            </h2>
            <p className={TYPOGRAPHY.body + ' text-center '}>
              Gaining profound Insights into the path to Success and unleashing your business's full potential
            </p>
          </div>
          <div className='grid grid-cols-1 gap-4'>
            {cardData.map((card, index) => (
              <AboutPeopleCard key={index} card={card} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default page