import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import ServiceCard from '@/components/custom/ServiceCard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Career Insights",
    description: "Stay ahead of market trends with data-driven insights into industry growth and salary benchmarks.",
    bgImage: "/heroImages/career-insights.png"
  }
  const services = [
  {
    id: 1,
    title: "Improve Communication Skills",
    popupData: "Our team's assessment of the appropriate recruitment strategy is crucial in selecting the right candidate. While your primary goal may be finding the ideal candidate, it's also essential to consider the time and costs involved. Whether you're filling a new vacancy or replacing someone already in the position."
  },
  {
    id: 2,
    title: "Come Out From The Comfort Zone",
    popupData: "The agency will search its own database and talented network pool for qualified candidates, and mobilize influencers to reach candidates within their unique networks and circles. In most cases, our team identifies 5 to 6 suitable candidates from the pool."
  },
  {
    id: 3,
    title: "Keep the Goals Realistic",
    popupData: `The interview process unfolds in two stages. Initially, the agency arranges candidate interviews internally, providing an opportunity to assess their suitability for your company and the agency itself. During these interviews, candidates receive a briefing on your company's needs, culture, and long-term vision. Subsequently, after further narrowing down the candidate pool, your company receives detailed briefings on each candidate, and the agency assists in organizing final interviews. Studies show that 51% of recruiters believe three interviews are necessary before extending an offer to a candidate.`
  },
  {
    id: 4,
    title: "Acquire New Skills",
    popupData: `The interview process unfolds in two stages. Initially, the agency arranges candidate interviews internally, providing an opportunity to assess their suitability for your company and the agency itself. During these interviews, candidates receive a briefing on your company's needs, culture, and long-term vision. Subsequently, after further narrowing down the candidate pool, your company receives detailed briefings on each candidate, and the agency assists in organizing final interviews. Studies show that 51% of recruiters believe three interviews are necessary before extending an offer to a candidate.`
  },
  {
    id: 5,
    title: "Increase the Networking Opportunities",
    popupData: `The interview process unfolds in two stages. Initially, the agency arranges candidate interviews internally, providing an opportunity to assess their suitability for your company and the agency itself. During these interviews, candidates receive a briefing on your company's needs, culture, and long-term vision. Subsequently, after further narrowing down the candidate pool, your company receives detailed briefings on each candidate, and the agency assists in organizing final interviews. Studies show that 51% of recruiters believe three interviews are necessary before extending an offer to a candidate.`
  },
  
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4 '>

          <h2 className='text-xs md:text-base lg:text-lg md:px-10 px-4 text-justify'>This is people’s ability to be realistic about themselves and their careers. People who are high in career insight have an accurate understanding of their strengths and weaknesses and set clear career goals.<br/>

<br/>Career identity is the direction component. This is the extent to which people define themselves by their careers. People who are high in career identity are highly involved in their jobs, their organizations, and/or their professions. They strive for advancement, recognition, and a leadership role.<br/>

<br/>Career resilience is the persistence component. This is the ability to adapt to changing conditions and overcome career barriers. People who are high in career resilience believe in themselves, need to achieve, and are willing to take reasonable risks to do so.</h2>
            <ServiceCard services={services} />
    </section>
      <MissionVision/>
    </>
  )
}

export default page