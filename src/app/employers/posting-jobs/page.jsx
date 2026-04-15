import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import ServiceCard from '@/components/custom/ServiceCard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Posting Jobs",
    description: "Reach the right talent quickly and efficiently with our streamlined job posting and recruitment platform.",
    bgImage: "/heroImages/posting-jobs.png"
  }
  const services = [
    {
      id: 1,
      title: "Identifying Your Recruitment Goals",
      popupData: "Our team's assessment of the appropriate recruitment strategy is crucial in selecting the right candidate. While your primary goal may be finding the ideal candidate, it's also essential to consider the time and costs involved. Whether you're filling a new vacancy or replacing someone already in the position."
    },
    {
      id: 2,
      title: "Sourcing",
      popupData: "The agency will search its own database and talented network pool for qualified candidates, and mobilize influencers to reach candidates within their unique networks and circles. In most cases, our team identifies 5 to 6 suitable candidates from the pool."
    },
    {
      id: 3,
      title: "Interviewing",
      popupData: `The interview process unfolds in two stages. Initially, the agency arranges candidate interviews internally, providing an opportunity to assess their suitability for your company and the agency itself. During these interviews, candidates receive a briefing on your company's needs, culture, and long-term vision. Subsequently, after further narrowing down the candidate pool, your company receives detailed briefings on each candidate, and the agency assists in organizing final interviews. Studies show that 51% of recruiters believe three interviews are necessary before extending an offer to a candidate.`
    },

  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>Our clients can easily post job openings on our website in just three simple steps: provide their email ID, company name, and type of job requirement. Our advanced automated business process then searches the talent from our existing network pool and provides the right candidate as per the client’s demand.</h2>
        <ServiceCard services={services} />
      </section>
      <MissionVision />
    </>
  )
}

export default page