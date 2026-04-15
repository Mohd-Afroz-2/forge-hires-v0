import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import CareerCard from '@/components/custom/CareerCard'

const page = () => {
  const heroData = {
    title: "Careers",
    description: "Join the internal team at Forge Hire and help us shape the future of recruitment and staffing.",
    bgImage: "/heroImages/aboutcareer.png"
  }
  const services = [
    {
      id: 1,
      title: "ReactJS",
      popupData: `Join our team as a React JS Developer and create dynamic user interfaces for our web applications. Utilize your expertise in JavaScript, React, and modern web technologies to develop responsive and interactive features that enhance user experience and performance.`
    },
    {
      id: 2,
      title: "Non IT Recruiter",
      popupData: `Key Responsibilities:

Candidate Sourcing: Identify potential candidates through various channels such as job boards, social media, networking events, and employee referrals. Screen resumes and applications to match candidates with the appropriate non-IT roles.

Interview Coordination: Schedule and conduct initial interviews to assess candidates' qualifications, cultural fit, and overall suitability for the role. This may include phone, video, or in-person interviews.

Candidate Management: Maintain positive relationships with candidates throughout the recruitment process, providing timely updates, feedback, and guidance.

Offer Negotiation and Closing: Extend job offers to selected candidates and negotiate salary and other employment terms. Ensure a smooth onboarding process for new hires.

Recruitment Strategy Development: Contribute to the development and implementation of recruitment strategies to attract top talent. This may include employer branding initiatives, participation in job fairs, and developing new sourcing channels.

Compliance and Record-Keeping: Ensure all recruitment activities are compliant with relevant laws, regulations, and company policies. Maintain accurate records of all recruitment activities.

Continuous Improvement: Stay informed about trends and best practices in recruitment. Suggest improvements to the recruitment process to enhance efficiency and effectiveness.

Required Skills and Qualifications:

Proven experience as a recruiter, with a focus on non-IT roles.
Strong understanding of recruitment processes and candidate selection methods.
Excellent communication and interpersonal skills.
Forge Hires  in using recruitment software and candidate management systems.
Ability to work independently and manage multiple tasks simultaneously.
Strong decision-making and problem-solving skills.
Preferred Skills:

Experience in specific industries relevant to the company (e.g., manufacturing, healthcare, retail, etc.).
Knowledge of employment law and HR best practices.`
    },
  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className='max-w-7xl mx-auto md:mt-10 mt-4 '>
        <h2 className='text-xs md:text-base lg:text-lg md:px-10 px-4 text-justify'>Welcome to the careers page of Forge Hires Now, where a world of professional opportunities awaits you. Our company thrives on diversity, offering a wide array of career paths across various departments and specializations.<br />

          <br />Each career avenue is designed to cater to different skills and aspirations. Whether you are an experienced professional or a fresh graduate, we have opportunities that will challenge you and help you grow.</h2>
        <CareerCard services={services} />
      </section>
    </>
  )
}

export default page