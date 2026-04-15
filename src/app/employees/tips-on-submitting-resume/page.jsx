import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import ServiceCard from '@/components/custom/ServiceCard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Tips on Submitting Resume",
    description: "Create a high-impact resume that stands out to recruiters and highlights your unique professional value.",
    bgImage: "/heroImages/tips-on-submitting-resume.png"
  }
    const services = [
  {
    id: 1,
    title: "Resume Format",
    popupData: `These two resume formats are by far the most common:

1.Reverse-chronological Resumes 2. Skills-based (or functional) resume

Both have strengths and weaknesses. It depends on the companies you’re interested and your work experience. Let us analyze both options.`
  },
  {
    id: 2,
    title: "Contact Information",
    popupData: `Ensure your resume stands out by beginning with clear and updated contact information. This vital section includes your full name, phone number, professional email, and LinkedIn profile. Make it easy for recruiters to connect with you and create a lasting first impression.`
  },
  {
    id: 3,
    title: "Qualification and Career Highlight",
    popupData: `Showcase your qualifications and career achievements to engage recruiters. This section succinctly summarizes your expertise, accomplishments, and core skills. Create a captivating overview of your professional journey, leaving recruiters eager to delve into the breadth of experience you offer.`
  },
  {
    id: 4,
    title: "Job Skills",
    popupData: `Empower your resume with a dedicated 'Job Skills' section. Showcase your specific competencies, technical proficiencies, and industry-relevant skills. This strategic segment enables recruiters to swiftly identify your unique capabilities, ensuring your application aligns seamlessly with the demands of the targeted position.`
  },
  {
    id: 5,
    title: "Professional Skills",
    popupData: `Elevate your professional profile with a focused 'Professional Skills' section. This area allows you to spotlight your interpersonal, leadership, and collaboration abilities. Articulate how your soft skills complement your technical prowess, providing recruiters with a holistic view of your aptitude and potential as a valuable team member.`
  },
  {
    id: 6,
    title: "Education and Certification",
    popupData: `Set the foundation for success by showcasing your academic and professional qualifications in the 'Education and Certification' section. Clearly articulate your degrees, certifications, and relevant training. This segment provides recruiters with a comprehensive snapshot of your commitment to continuous learning and your expertise in the field.`
  },
  {
    id: 7,
    title: "Soft and Hard Skills",
    popupData: `Navigate the competitive landscape by spotlighting your 'Soft and Hard Skills.' This dual-purpose section articulates your interpersonal strengths and technical proficiencies. Showcase your adaptability, communication finesse, and technical prowess, ensuring recruiters recognize your well-rounded skill set essential for excelling in the dynamic demands of today's workplace.`
  },
  {
    id: 8,
    title: "References",
    popupData: `Seal the deal with a robust 'References' section. Provide credible endorsements that validate your professional prowess. This segment adds depth to your resume, offering recruiters assurance in your abilities. Include respected professionals who can vouch for your expertise, leaving a lasting impression on potential employers.`
  },
  
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4 '>

          <h2 className='text-xs md:text-base lg:text-lg md:px-10 px-4 text-justify'>1. Optimize your resume to one page.<br/>

<br/>2.Use a straightforward and easy-to-scan format.<br/>

<br/>3.Maximize format spacing, margins, all-caps, and bolded font for readability.<br/>

<br/>4.Emphasize both technical competencies and interpersonal skills.<br/>

<br/>5.Highlight your hard and soft skills.<br/>

<br/>6.Review and clean up your personal information and social media accounts.</h2>
            <ServiceCard services={services} />
    </section>
      <MissionVision/>
    </>
  )
}

export default page