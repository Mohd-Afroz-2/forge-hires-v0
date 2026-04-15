import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import MissionVision from '@/components/custom/MissionVision'
import ServiceCard from '@/components/custom/ServiceCard'
import Jobcard from '@/components/custom/Jobcard'

const page = () => {
  const heroData = {
    title: "Healthcare and Pharmaceuticals",
    description: "Make a difference in the lives of many with rewarding roles in clinical care, research, and pharmaceutical sales.",
    bgImage: "/heroImages/healthcare-pharmaceuticals.jpg"
  }
  const services = [
    {
      id: 1,
      title: "Laboratory Analyst",
      popupData: `Qualifications Bachelor’s degree in a related field (such as Chemistry or Biology). Proficiency in laboratory techniques and equipment operation. Roles and Responsibilities

Perform analytical tests on samples using laboratory equipment and instruments.
Record and analyze data, and prepare reports.
Ensure compliance with safety protocols and quality standards.
Maintain laboratory equipment and inventory.
Collaborate with other team members to achieve research or testing objectives.`
    },
    {
      id: 2,
      title: "Laboratory Technician",
      popupData: `Qualifications Associate degree or certification in Medical Laboratory Technology or related field. Proficiency in laboratory procedures and techniques. Roles and Responsibilities

Prepare specimens and samples for analysis.
Perform routine laboratory tests and experiments.
Maintain laboratory equipment and supplies.
Document and report test results accurately.
Follow safety protocols and quality control procedures.`
    },
    {
      id: 3,
      title: "Medical Sales Representative",
      popupData: `Qualifications Bachelor’s degree in a relevant field (such as Biology or Marketing). Strong sales and communication skills. Roles and Responsibilities

Promote pharmaceutical or medical products to healthcare professionals.
Build and maintain relationships with clients and customers.
Provide product information and demonstrations.
Monitor market trends and competitor activities.
Achieve sales targets and objectives.`
    },
    {
      id: 4,
      title: "Pharmaceutical Manufacturer Technician",
      popupData: `Qualifications Associate degree or certification in Pharmacy Technology or related field. Experience in pharmaceutical manufacturing. Roles and Responsibilities

Operate and maintain manufacturing equipment.
Follow standard operating procedures and safety protocols.
Prepare and package pharmaceutical products.
Monitor production processes and troubleshoot issues.
Ensure compliance with regulatory requirements.`
    },
    {
      id: 5,
      title: "Regulatory Specialist",
      popupData: `Qualifications Bachelor’s degree in Regulatory Affairs or a related field. Knowledge of healthcare regulations and compliance standards. Roles and Responsibilities

Prepare and submit regulatory documents for product approvals.
Monitor changes in regulations and ensure compliance with requirements.
Review product labeling and advertising materials for compliance.
Communicate with regulatory agencies on behalf of the organization.
Provide guidance and support to internal teams on regulatory matters.`
    },
    {
      id: 6,
      title: "Clinical Research Scientist",
      popupData: `Qualifications Advanced degree (Master’s or Ph.D.) in a relevant scientific field. Experience in clinical research. Roles and Responsibilities

Design and implement clinical research studies.
Collect and analyze data, and interpret results.
Prepare study protocols, reports, and publications.
Ensure compliance with regulatory requirements and ethical standards.
Collaborate with cross-functional teams to support clinical development programs.`
    },
    {
      id: 7,
      title: "Chemist",
      popupData: `Qualifications Bachelor’s degree or higher in Chemistry or a related field. Strong analytical and problem-solving skills. Roles and Responsibilities

Conduct chemical analysis and experiments.
Develop and optimize chemical processes.
Interpret and report experimental data.
Maintain laboratory safety and quality standards.
Collaborate with colleagues on research projects.`
    },
    {
      id: 8,
      title: "Psychiatrist",
      popupData: `Qualifications Medical degree (MD or DO) with specialization in Psychiatry. Board certification in Psychiatry. Roles and Responsibilities

Diagnose and treat mental health disorders.
Conduct psychiatric evaluations and assessments.
Develop and implement treatment plans, including medication management and therapy.
Provide crisis intervention and support to patients and families.
Collaborate with other healthcare professionals to coordinate care.`
    },

  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>In the Healthcare and Pharmaceuticals industries, professionals work diligently to provide vital medical services and develop life-saving medications. From doctors and nurses delivering direct patient care to researchers conducting groundbreaking studies, the sector encompasses a broad spectrum of roles. Additionally, pharmaceutical companies employ scientists, regulatory specialists, and marketing professionals to develop, produce, and distribute medications globally. These industries offer rewarding career opportunities for those passionate about improving healthcare outcomes and advancing medical science.</h2>
        <Jobcard services={services} />
      </section>
            <MissionVision/>
    </>
  )
}

export default page