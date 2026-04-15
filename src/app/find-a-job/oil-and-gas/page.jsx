import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import Jobcard from '@/components/custom/Jobcard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Oil and Gas",
    description: "Crucial roles in exploration, production, and refining within the global energy sector.",
    bgImage: "/heroImages/oil-and-gas.jpg"
  }
   const services = [
  {
    id: 1,
    title: "Gas Engineer",
    popupData: `Qualifications: Bachelor’s degree in Mechanical Engineering, Chemical Engineering, or a related field. A Professional Engineer (PE) license may be required. Experience in gas processing and distribution. Roles and Responsibilities: - Design, develop, and optimize systems for the extraction, processing, and distribution of natural gas. - Conduct feasibility studies and technical evaluations for gas projects. - Monitor and analyze gas production and transmission systems. - Troubleshoot equipment and process issues to ensure operational efficiency and safety. - Collaborate with other engineers and stakeholders to ensure compliance with regulations and industry standards.`
  },
  {
    id: 2,
    title: "Pipeline Engineer",
    popupData: `Qualifications: Bachelor’s degree in Civil Engineering, Mechanical Engineering, or a related field. A Professional Engineer (PE) license may be required. Experience in pipeline design and construction. Roles and Responsibilities: - Design and oversee the construction of pipelines for the transportation of oil and gas. - Conduct site surveys and environmental assessments for pipeline projects. - Develop pipeline route plans and specifications. - Perform hydraulic calculations and stress analyses to ensure pipeline integrity and safety. - Coordinate with regulatory agencies and stakeholders to obtain permits and approvals.`
  },
  {
    id: 3,
    title: "Petroleum Engineer",
    popupData: `Qualifications: Bachelor’s degree in Petroleum Engineering or a related field. Strong analytical and problem-solving skills. Experience in reservoir engineering, drilling, and production operations. Roles and Responsibilities: - Evaluate and optimize oil and gas reservoirs to maximize production and recovery. - Design and implement drilling programs and production strategies. - Analyze well performance and reservoir data to identify opportunities for improvement. - Conduct reservoir simulations and modeling studies. - Provide technical support and expertise to drilling and production teams.`
  },
  {
    id: 4,
    title: "Rig Manager",
    popupData: `Qualifications: High school diploma or equivalent. Extensive experience in drilling operations, with supervisory or management experience. Strong leadership and communication skills. Roles and Responsibilities: - Oversee drilling rig operations, including drilling, completion, and workover activities. - Ensure compliance with safety regulations and company policies. - Manage rig personnel, including hiring, training, and performance evaluation. - Coordinate with other departments and contractors to optimize rig performance. - Monitor drilling progress and costs to ensure project objectives are met.`
  },
  {
    id: 5,
    title: "Oil and Gas Accountant",
    popupData: `Qualifications: Bachelor’s degree in Accounting, Finance, or a related field. CPA or relevant certification preferred. Experience in oil and gas accounting or financial analysis. Roles and Responsibilities: - Manage financial transactions and reporting for oil and gas operations. - Prepare and analyze financial statements, budgets, and forecasts. - Monitor revenue and expenses related to production, exploration, and development activities. - Ensure compliance with accounting standards and regulatory requirements. - Provide financial analysis and support to management and stakeholders.`
  },
  {
    id: 6,
    title: "Foreperson",
    popupData: `Qualifications: High school diploma or equivalent. Experience in oil and gas field operations, with supervisory experience preferred. Strong leadership and communication skills. Roles and Responsibilities: - Supervise and coordinate activities of oil and gas field crews. - Ensure compliance with safety regulations and company policies. - Assign tasks and provide guidance to field workers. - Monitor progress and quality of work to meet project objectives. - Communicate with management and other departments to coordinate activities and resolve issues.`
  },
  {
    id: 7,
    title: "Oil Field Worker",
    popupData: `Qualifications: High school diploma or equivalent. Experience in oil and gas field operations preferred. Physical fitness and ability to work in outdoor environments. Roles and Responsibilities: - Assist with drilling, production, and maintenance activities at oil and gas well sites. - Operate equipment and machinery such as pumps, valves, and compressors. - Perform manual labor tasks such as loading and unloading materials, digging trenches, and cleaning equipment. - Follow safety protocols and procedures to prevent accidents and injuries. - Communicate with supervisors and co-workers to ensure efficient and safe work practices.`
  },
  
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4'>

     <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>The Oil and Gas industry involves petroleum and natural gas exploration, extraction, refining, and distribution. Petroleum engineers lead drilling operations, with support from geoscientists analyzing data to identify reserves. Drilling technicians operate machinery, ensuring efficiency and safety. Pipeline operators manage transportation networks, and environmental specialists ensure compliance. Refinery operators oversee complex refining processes. With varied roles, the industry offers opportunities for professionals skilled in energy production, distribution, and environmental stewardship.</h2>
            <Jobcard services={services} />
    </section>
          <MissionVision/>
    </>
  )
}

export default page