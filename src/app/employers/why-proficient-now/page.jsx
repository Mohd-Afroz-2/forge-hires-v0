import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import ServiceCard from '@/components/custom/ServiceCard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Why Proficient Now",
    description: "Learn what sets our staffing methodology apart and why leading companies trust us with their talent needs.",
    bgImage: "/heroImages/why-proficient-now.png"
  }
  const services = [
    {
      id: 1,
      title: "Our People / Team",
      popupData: "At Forge Hires Now, our focus is on delivering superior and efficient Hiring Solutions through our talented teams, each specializing in different areas. Our teams prioritize understanding the employer's requirements for each job profile while leveraging our extensive network pool to source top talent. This agile approach allows us to provide swift solutions to our clients while maintaining transparency by showcasing relevant data."
    },
    {
      id: 2,
      title: "Network Talented Pool",
      popupData: "Talent pooling involves creating a database of skilled candidates interested in working for your organization. Establishing and maintaining this pool is achievable by implementing simple steps into your recruitment process. Candidate Portal: Prospective applicants create accounts on our portal to receive updates on job opportunities. This maintains a pool of candidates aligned with our values. Employee Referral Programs: Leveraging our team's networks, we attract top talent through employee recommendations, streamlining recruitment and ensuring candidates align with our culture. University Career Fairs: We engage with graduating students at career fairs to build a diverse talent pool. By connecting early, we access fresh talent suited to our needs. Job Fairs: We conduct and attend job fairs to actively engage with candidates seeking opportunities, expanding our talent pool with diverse expertise."
    },
    {
      id: 3,
      title: "Advanced/Automated Recruitment Process",
      popupData: `Our team utilizes various automation tools such as ATS (Applicant Tracking Systems), CRMs, sourcing tools, AI bots, and more. These applications are essential in assisting our recruiting team in finding the perfect clients and candidates alike.`
    },
    {
      id: 4,
      title: "Higher Quality Candidate Services",
      popupData: `Recruiters often save the best candidates for companies who need to fill a specific position, because they have connections to both the company and to job seekers. Some of these job seekers may not even be actively looking for work but are open to new opportunities if they were presented to them. This gives the company better access to higher-quality candidates, beyond what could be achieved through the traditional job board posting.`
    },
    {
      id: 5,
      title: "Saves Time and Money Act Agile",
      popupData: "Many companies do not have the money to spend on keeping an employee solely for interviewing hiring new candidates and asking a pre-existing employee to do so can cut into productivity and workplace morale. Any company that opens the position to the public will find themselves overwhelmed by resumes and under-qualified candidates hoping to luck their way into a new job with a better salary than their last position. A recruiter works with a specific list of candidates and provides resumes based on their suggestions after matching them with the workplace and position, saving the company time and money sorting through unqualified resumes and candidates."
    },
    {
      id: 6,
      title: "Insider Alerts to the State of the Industry and Job Market Business Process",
      popupData: "Larger companies who work with recruiting agencies tend to rely on their recruiters to bring them news about the state of the company’s industry and how the job marketplace looks. If there are a lot of candidates seeking specific positions within a company or industry, it can alert the company to upcoming trends in the public, allowing them to pivot and further support employees."
    },
  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>ForgeHire transcends mere talent sourcing and recruitment; we are creators of a superior talent pool. Our advanced technology and automated processes ensure the seamless integration of the right talent into efficient business processes. From interns to CEOs, ForgeHire caters to all levels of staffing needs. You request, and we provide a SMART, tailored talent pool to suit your business and industry requirements. We continuously expand our talent database to accommodate new profiles and meet your evolving business needs.</h2>
        <ServiceCard services={services} />
      </section>
      <MissionVision />
    </>
  )
}

export default page