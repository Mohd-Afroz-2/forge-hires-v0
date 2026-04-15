import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import MissionVision from '@/components/custom/MissionVision'
import ServiceCard from '@/components/custom/ServiceCard'
import Jobcard from '@/components/custom/Jobcard'

const page = () => {
  const heroData = {
    title: "Public Administration",
    description: "Serve your community with career paths in government agencies and public sector management.",
    bgImage: "/heroImages/public-administration.jpg"
  }
   const services = [
  {
    id: 1,
    title: "City Manager",
    popupData: `Qualifications

Master's degree in public administration, business administration, or a related field.
Experience in municipal government or public administration.
Strong leadership and management skills.
Knowledge of local government operations and policies.
Excellent communication and interpersonal skills. Roles and Responsibilities
Serve as the chief executive officer of the city government.
Implement policies and programs established by the city council.
Oversee city departments and operations.
Develop and manage the city budget.
Represent the city in interactions with other government agencies, community organizations, and the public.
Provide leadership and guidance to city staff.`
  },
  {
    id: 2,
    title: "City Manager",
    popupData: `EQualifications

Master's degree in public administration, business administration, or a related field.
Experience in county government or public administration.
Knowledge of county government operations and policies.
Strong leadership and management skills.
Excellent communication and interpersonal skills. Roles and Responsibilities
Serve as the chief administrative officer of the county government.
Implement policies and programs established by the county board of supervisors.
Oversee county departments and operations.
Develop and manage the county budget.
Represent the county in interactions with other government agencies, community organizations, and the public.
Provide leadership and guidance to county staff.`
  },
  {
    id: 3,
    title: "Town Administrator",
    popupData: `Qualifications

Master's degree in public administration, business administration, or a related field.
Experience in town government or public administration.
Knowledge of town government operations and policies.
Strong leadership and management skills.
Excellent communication and interpersonal skills. Roles and Responsibilities
Serve as the chief administrative officer of the town government.
Implement policies and programs established by the town council.
Oversee town departments and operations.
Develop and manage the town budget.
Represent the town in interactions with other government agencies, community organizations, and the public.
Provide leadership and guidance to town staff.`
  },
  {
    id: 4,
    title: "Public Administrator",
    popupData: `Qualifications

Bachelor's or master's degree in public administration, political science, or a related field.
Experience in public administration or government.
Knowledge of government operations and policies.
Strong organizational and analytical skills.
Excellent communication and interpersonal skills. Roles and Responsibilities
Manage and administer public programs and services.
Develop and implement policies and procedures to improve government efficiency and effectiveness.
Analyze and evaluate programs to ensure compliance with regulations and objectives.
Provide guidance and support to government officials and staff.
Coordinate with other government agencies, stakeholders, and the public.
Represent the government in meetings, hearings, and other forums.`
  },
  {
    id: 5,
    title: "Mayor",
    popupData: `Qualifications

Bachelor's or master's degree in public administration, political science, or a related field.
Experience in government or public service.
Strong leadership and communication skills.
Knowledge of local government operations and policies.
Ability to work effectively with diverse stakeholders. Roles and Responsibilities
Serve as the chief executive officer of the city or town government.
Preside over city council or town meetings.
Develop and implement policies and programs to address community needs and priorities.
Represent the city or town in interactions with other government agencies, community organizations, and the public.
Work with city council or town board members to enact legislation and approve budgets.
Provide leadership and direction to city or town staff.`
  },
  {
    id: 6,
    title: "Chief Administrative Officer (CAO)",
    popupData: `Qualifications

Master's degree in public administration, business administration, or a related field.
Experience in executive leadership or management.
Knowledge of government operations and policies.
Strong organizational and strategic planning skills.
Excellent communication and interpersonal skills. Roles and Responsibilities
Serve as the senior executive responsible for managing the administrative functions of the organization.
Develop and implement organizational policies and procedures.
Oversee departmental operations and ensure compliance with regulations and standards.
Provide guidance and support to department heads and staff.
Represent the organization in interactions with stakeholders, including government agencies, community organizations, and the public.
Report to the governing body or board of directors on organizational performance and strategic priorities.`
  },
  {
    id: 7,
    title: "Chief Executive Officer (CEO)",
    popupData: `Qualifications

Master's degree in business administration, public administration, or a related field.
Experience in executive leadership or management.
Strong leadership and strategic planning skills.
Excellent communication and interpersonal skills.
Knowledge of the organization's industry or sector. Roles and Responsibilities
Serve as the highest-ranking executive officer of the organization.
Develop and implement the organization's strategic vision and goals.
Oversee all aspects of the organization's operations, including finance, human resources, and program management.
Provide leadership and direction to senior management and staff.
Represent the organization in interactions with stakeholders, including government agencies, funders, partners, and the public.
Ensure compliance with legal and regulatory requirements.
Report to the board of directors or governing body on organizational performance and strategic priorities.`
  },
  {
    id: 8,
    title: "Deputy City Manager",
    popupData: `Qualifications

Bachelor's degree in public administration, political science, business administration, or a related field (master's degree preferred).
Several years of experience in local government management or administration.
Strong leadership and communication skills.
Knowledge of public policy, budgeting, and organizational management.
Ability to work collaboratively with diverse stakeholders. Roles and Responsibilities
Assist the city manager in overseeing day-to-day operations and strategic planning.
Manage assigned departments or divisions within the city government.
Coordinate interdepartmental initiatives and projects.
Represent the city manager in meetings and events as needed.
Provide leadership and support to city staff.
Serve as acting city manager in the absence of the city manager.`
  },
  
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4'>

     <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>Public Administration involves managing governmental operations to serve the public effectively. Administrators oversee various departments, ensuring efficient delivery of services like transportation, public safety, and healthcare. They develop policies, allocate resources, and navigate complex regulatory landscapes. Additionally, analysts assess public needs, formulate strategies, and evaluate programs to enhance effectiveness. Public administrators collaborate with elected officials, community leaders, and stakeholders to address societal challenges and foster progress. Careers in public administration offer opportunities to shape policies, improve services, and make a positive impact on society.</h2>
            <Jobcard services={services} />
    </section>
          <MissionVision/>
    </>
  )
}

export default page