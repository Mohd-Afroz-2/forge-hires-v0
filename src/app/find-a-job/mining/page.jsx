import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import Jobcard from '@/components/custom/Jobcard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Mining",
    description: "Specialized opportunities in resource extraction, site management, and geological surveying.",
    bgImage: "/heroImages/mining.jpg"
  }
   const services = [
  {
    id: 1,
    title: "Blaster",
    popupData: `Qualifications: High school diploma or equivalent. Certification in blasting techniques may be required. Physical fitness and manual dexterity. Roles and Responsibilities: - Prepare and set up explosives for blasting operations. - Follow safety protocols and regulations to ensure safe blasting practices. - Monitor blast site conditions and weather conditions. - Coordinate with drilling and mining teams to plan blasting schedules. - Inspect blast areas for safety hazards and conduct post-blast evaluations.`
  },
  {
    id: 2,
    title: "Underground Miner",
    popupData: `Qualifications: High school diploma or equivalent. Training in mining operations and safety procedures. Roles and Responsibilities: - Operate mining equipment and machinery underground. - Perform drilling, blasting, and excavation activities. - Transport materials, ore, and waste to the surface. - Install and maintain ground support systems. - Follow safety protocols and regulations to ensure a safe working environment.`
  },
  {
    id: 3,
    title: "Heavy Equipment Operator",
    popupData: `Qualifications: High school diploma or equivalent. Certification or training in heavy equipment operation. Roles and Responsibilities: - Operate heavy equipment such as bulldozers, excavators, and loaders. - Transport materials, ore, and waste within the mine site. - Perform routine maintenance and inspections on equipment. - Follow safety protocols and regulations to prevent accidents and injuries. - Coordinate with other workers and supervisors to complete tasks efficiently.`
  },
  {
    id: 4,
    title: "Driller",
    popupData: `Qualifications: High school diploma or equivalent. Training in drilling techniques and equipment operation. Roles and Responsibilities: - Operate drilling equipment to extract core samples or prepare blast holes. - Follow drilling plans and specifications provided by engineers or supervisors. - Monitor drilling operations and adjust equipment as needed. - Inspect and maintain drilling equipment and tools. - Ensure compliance with safety regulations and procedures.`
  },
  {
    id: 5,
    title: "Electrician",
    popupData: `Qualifications: Certification or diploma in electrical technology or a related field. Experience in industrial or mining electrical systems. Roles and Responsibilities: - Install, maintain, and repair electrical systems and equipment in mining facilities. - Troubleshoot electrical issues and perform repairs as needed. - Conduct preventive maintenance to ensure the reliability of electrical systems. - Follow safety protocols and regulations to prevent electrical hazards. - Coordinate with other maintenance and operations teams to minimize downtime.`
  },
  {
    id: 6,
    title: "Material Planner",
    popupData: `Qualifications: Bachelor’s degree in Supply Chain Management, Logistics, or a related field. Experience in materials planning or inventory management. Roles and Responsibilities: - Plan and coordinate the procurement and delivery of materials needed for mining operations. - Monitor inventory levels and track material usage. - Analyze demand forecasts and develop material procurement strategies. - Collaborate with suppliers to ensure timely delivery of materials. - Maintain accurate records and documentation related to materials planning.`
  },
   {
    id: 7,
    title: "Health and Safety Specialist",
    popupData: `Qualifications: Bachelor’s degree in Occupational Health and Safety, Environmental Science, or related field. Certification in health and safety may be required. Roles and Responsibilities: - Develop and implement health and safety programs and policies for mining operations. - Conduct risk assessments and hazard analyses. - Provide training and education to employees on health and safety practices. - Investigate accidents and incidents to determine causes and recommend preventive measures. - Ensure compliance with health and safety regulations and standards.`
  },
  {
    id: 8,
    title: "Mine Manager",
    popupData: `Qualifications: Bachelor’s degree in Mining Engineering, Geology, or related field. Several years of experience in mining operations and management roles. Roles and Responsibilities:

Oversee all aspects of mining operations, including production, safety, and environmental compliance.
Develop and implement operational plans and strategies to achieve production targets.
Manage budget and resources to optimize efficiency and profitability.
Lead and mentor mining staff, including supervisors and workers.
Ensure compliance with regulatory requirements and industry standards.`
  },
  {
    id: 9,
    title: "Site Surveyor",
    popupData: `Qualifications: Bachelor’s degree in Mining Engineering or related field. Strong analytical and problem-solving skills. Roles and Responsibilities:

Plan and design mining operations, including surface and underground mines.
Conduct feasibility studies and economic analyses of mining projects.
Develop mining methods and strategies to optimize ore recovery and minimize environmental impact.
Monitor and analyze mining processes and equipment performance.
Ensure compliance with safety regulations and environmental standards.`
  },
  {
    id: 10,
    title: "Mining Engineer",
    popupData: `Qualifications: Bachelor’s degree in Mining Engineering or related field. Strong analytical and problem-solving skills. Roles and Responsibilities:

Plan and design mining operations, including surface and underground mines.
Conduct feasibility studies and economic analyses of mining projects.
Develop mining methods and strategies to optimize ore recovery and minimize environmental impact.
Monitor and analyze mining processes and equipment performance.
Ensure compliance with safety regulations and environmental standards.`
  },
  
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4'>

     <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>The mining industry involves extracting valuable minerals and resources from the earths surface or underground. It encompasses diverse roles, including miners who operate heavy machinery to extract minerals, geologists who study the earths composition to locate deposits, and engineers who design and oversee mining operations. Additionally, there are environmental scientists who ensure compliance with regulations, safety officers who enforce safety protocols, and managers who oversee the overall operations. From exploration to extraction and processing, the mining industry offers a range of career opportunities suited to individuals with various skill sets, interests, and educational backgrounds.</h2>
      <Jobcard services={services} />
    </section>
          <MissionVision/>
   
    </>
  )
}

export default page