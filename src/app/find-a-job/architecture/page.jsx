import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import Jobcard from '@/components/custom/Jobcard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Architecture",
    description: "Design your future with positions in leading architectural firms, from junior designers to lead architects.",
    bgImage: "/heroImages/architecture.jpg"
  }
  const services = [
    {
      id: 1,
      title: "Job Captain (Interiors, Retail, healthcare, K-12, Commercial, etc)",
      popupData: `Leads retail project teams, focusing on design development and client relations, ensuring project quality and consistency.`
    },
    {
      id: 2,
      title: "Senior Job Captain (Retail)",
      popupData: `Ensure your resume stands out by beginning with clear and updated contact information. This vital section includes your full name, phone number, professional email, and LinkedIn profile. Make it easy for recruiters to connect with you and create a lasting first impression.`
    },
    {
      id: 3,
      title: "Architectural Designer (Retail, interiors, space planning",
      popupData: `Focuses on retail space planning and interior design, creating innovative solutions and detailed architectural plans.`
    },
    {
      id: 4,
      title: "Design Architect (Corporate Interiors)",
      popupData: `Specializes in designing corporate interiors, blending aesthetics with functional workspace design.`
    },
    {
      id: 5,
      title: "Senior Architect (K-12)",
      popupData: `Responsible for leading K-12 educational architecture projects, managing design, and ensuring compliance with educational standards.`
    },
    {
      id: 6,
      title: "Licensed Architect",
      popupData: `Handles architectural projects with legal authority, ensuring designs meet regulatory standards and client requirements.`
    },
    {
      id: 7,
      title: "Project Architect (Tenant Improvement)",
      popupData: `Leads tenant improvement projects, managing design and construction processes to enhance building interiors.`
    },
    {
      id: 8,
      title: "Lead Architect (Healthcare)",
      popupData: `Directs healthcare architecture projects, focusing on patient-centered design and healthcare facility standards.`
    },
    {
      id: 9,
      title: "Principal Architect (Buildings)",
      popupData: `Manages large-scale building projects, overseeing design, budget, and construction processes to ensure project success.`
    },
    {
      id: 10,
      title: "Architectural Project Manager",
      popupData: `Coordinates architectural projects, liaising between clients and design teams to deliver high-quality outcomes.`
    },
    {
      id: 11,
      title: "Architectural Coordinator (All sorts of disciplines)",
      popupData: `Facilitates coordination across various architectural disciplines, ensuring project integration and team collaboration.`
    },
    {
      id: 12,
      title: "Architectural Team Lead",
      popupData: `Leads architectural teams, overseeing project development and ensuring efficient workflow and design quality.`
    },
    {
      id: 13,
      title: "Project Lead Architect (Commercial)",
      popupData: `Directs commercial architecture projects, focusing on innovative design and client satisfaction.`
    },
    {
      id: 14,
      title: "Design Principal",
      popupData: `Leads design initiatives, setting creative direction and ensuring design excellence in architectural projects.`
    },
    {
      id: 15,
      title: "Project Manager - Architecture",
      popupData: `Manages architectural projects, overseeing planning, design, and execution to meet client goals.`
    },
    {
      id: 16,
      title: "Architectural Planner (All sorts of Architecture)",
      popupData: `Develops architectural plans for diverse projects, ensuring design innovation and practical implementation.`
    },
    {
      id: 17,
      title: "Architectural Director (Corporate Office planning/interiors)",
      popupData: `Oversees corporate office planning and interior designs, ensuring strategic alignment with client objectives.`
    },
    {
      id: 18,
      title: "Architectural Supervisor",
      popupData: `Supervises architectural teams, ensuring project efficiency, design quality, and team performance.`
    },
    {
      id: 19,
      title: "Landscape Architect",
      popupData: `Designs and manages landscape architecture projects, focusing on aesthetic, functional, and environmental aspects.`
    },
    {
      id: 20,
      title: "Senior Landscape Architect",
      popupData: `Leads complex landscape architecture projects, ensuring innovative design and effective project management.`
    },

  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>The architecture industry is a dynamic field, constantly evolving with technological advancements and societal needs. Architects blend creativity and engineering to design structures that are both functional and aesthetically pleasing, shaping the worlds skylines and communities.<br />
          <br />In recent years, sustainable design has become a pivotal aspect of the architecture industry. Emphasizing eco-friendly materials and energy efficiency, architects are increasingly focused on creating buildings that minimize environmental impact while maximizing user comfort and functionality.</h2>
        <Jobcard services={services} />
      </section>
            <MissionVision/>
    </>
  )
}

export default page