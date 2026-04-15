import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import Jobcard from '@/components/custom/Jobcard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Airines Aviation",
    description: "Take your career to new heights with opportunities in ground operations, flight crew, and aviation maintenance.",
    bgImage: "/heroImages/airlines.jpg"
  }
  const services = [
    {
      id: 1,
      title: "Aircraft Cleaner",
      popupData: `Qualifications: High school diploma or equivalent. Previous experience in janitorial or cleaning services preferred. Roles and Responsibilities: - Clean aircraft interiors, including cabins, galleys, and lavatories. - Vacuum carpets, wipe surfaces, and sanitize high-touch areas. - Dispose of waste and restock supplies as needed. - Follow cleaning protocols and safety procedures to maintain a clean and hygienic environment.`
    },
    {
      id: 2,
      title: "Reservation Agent",
      popupData: `Qualifications: High school diploma or equivalent. Excellent communication and customer service skills. Proficiency in reservation software systems. Roles and Responsibilities: - Assist customers with booking and managing flight reservations. - Provide information on flight schedules, fares, and services. - Process ticket sales, changes, and cancellations. - Handle inquiries and resolve customer issues or complaints. - Maintain accurate records and documentation of reservations.`
    },
    {
      id: 3,
      title: "Aircraft Fueller",
      popupData: `Qualifications: High school diploma or equivalent. Valid driver's license with a clean driving record. Training in fueling operations and safety procedures. Roles and Responsibilities: - Fuel aircraft according to established procedures and safety guidelines. - Monitor fuel levels and perform fuel quality checks. - Operate fueling equipment, such as fuel trucks and hydrants. - Coordinate with flight crews and ground personnel to ensure timely fueling services. - Maintain fueling records and documentation.`
    },
    {
      id: 4,
      title: "Avionics Technician",
      popupData: `Qualifications: Associate’s degree or certificate in Avionics Technology or a related field. FAA certification may be required. Strong troubleshooting and diagnostic skills. Roles and Responsibilities: - Install, inspect, and repair avionics systems and components. - Perform routine maintenance and scheduled inspections. - Troubleshoot electrical and electronic systems using diagnostic tools. - Ensure compliance with FAA regulations and manufacturer specifications. - Document maintenance activities and update aircraft records.`
    },
    {
      id: 5,
      title: "Air Traffic Controller",
      popupData: `Qualifications: Bachelor’s degree in Air Traffic Management, Aviation Administration, or a related field. FAA Air Traffic Control Specialist certification. Strong communication and decision-making skills. Roles and Responsibilities: - Monitor and manage air traffic within assigned airspace or airport control zone. - Provide instructions to pilots regarding flight paths, altitudes, and speeds. - Coordinate take-offs, landings, and aircraft movements to maintain safe separation. - Communicate with other air traffic control facilities and agencies. - Respond to emergencies and implement contingency plans as needed.`
    },
    {
      id: 6,
      title: "Aircraft Maintenance Technician",
      popupData: `Qualifications: FAA Airframe and Powerplant (A&P) mechanic certification. Associate’s degree or certificate in Aviation Maintenance Technology preferred. Strong mechanical skills and attention to detail. Roles and Responsibilities: - Perform maintenance, repairs, and inspections on aircraft systems and components. - Troubleshoot and diagnose mechanical and electrical issues. - Replace and repair aircraft parts and equipment. - Conduct functional tests and verify proper operation of aircraft systems. - Document maintenance activities and ensure compliance with FAA regulations.`
    },
    {
      id: 7,
      title: "Aviation Manager",
      popupData: `Qualifications: Bachelor’s degree in Aviation Management, Business Administration, or a related field. Several years of experience in aviation operations or management roles. Roles and Responsibilities: - Oversee day-to-day operations of aviation facilities or departments. - Develop and implement policies, procedures, and strategic plans. - Manage budgets, resources, and personnel. - Ensure compliance with safety regulations, industry standards, and company policies. - Coordinate with other departments and stakeholders to achieve organizational objectives.`
    },
    {
      id: 8,
      title: "Aircraft Mechanic",
      popupData: `Qualifications: FAA Airframe and Powerplant (A&P) mechanic certification. High school diploma or equivalent. Experience in aircraft maintenance and repair. Roles and Responsibilities: - Inspect, troubleshoot, and repair aircraft systems and components. - Perform scheduled maintenance tasks and inspections. - Replace worn or malfunctioning parts and components. - Conduct functional tests and verify aircraft performance. Document maintenance activities and maintain accurate records`
    },
    {
      id: 9,
      title: "Avionics Engineer",
      popupData: `Qualifications: Bachelor’s degree in Electrical Engineering, Avionics Engineering, or a related field. Experience in avionics design, development, and testing. Roles and Responsibilities: - Design and develop avionics systems and components for aircraft. - Conduct system integration and testing to ensure compliance with specifications and regulations. - Analyze and troubleshoot avionics issues and implement solutions. - Collaborate with other engineers and stakeholders to develop new technologies and products. - Prepare documentation, reports, and technical specifications.`
    },
    {
      id: 10,
      title: "Aerospace Engineer",
      popupData: `Qualifications: Bachelor’s degree in Aerospace Engineering, Mechanical Engineering, or a related field. Strong analytical and problem-solving skills. Experience in aircraft design, analysis, or testing. Roles and Responsibilities: - Design and develop aircraft, spacecraft, and related systems. - Conduct aerodynamic analysis and structural design. - Perform computational modeling and simulation studies. - Evaluate materials and manufacturing processes for aerospace applications. - Collaborate with multidisciplinary teams to achieve project objectives.`
    },
    {
      id: 11,
      title: "Flight Attendant",
      popupData: `Qualifications: Completion of flight attendant training program. Excellent communication and customer service skills. Ability to remain calm under pressure and handle emergencies. Physical fitness and ability to lift heavy objects. Flexibility to work irregular hours and travel frequently. Roles and Responsibilities:

Ensure the safety and comfort of passengers during flights.
Conduct pre-flight safety demonstrations and provide instructions.
Assist passengers with boarding, seating, and stowing luggage.
Serve food, beverages, and amenities according to airline policies.
Handle passenger inquiries, complaints, and emergencies. Collaborate with the flight crew to maintain a secure and orderly cabin environment.`
    },
    
    

  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>The airline and aviation industry includes a wide array of air transportation services, such as commercial airlines, cargo carriers, and private aviation. Pilots and flight attendants play crucial roles in ensuring safe and comfortable flights for passengers, while air traffic controllers manage air traffic flow. Aircraft mechanics are responsible for maintaining and repairing planes, ensuring their airworthiness. Aviation engineers are tasked with designing and innovating aircraft and related systems, while airport operations staff oversee ground services and facilities. Additionally, aviation safety inspectors enforce regulations to uphold industry standards. With diverse roles spanning from flight operations to engineering and safety, the industry offers opportunities for professionals passionate about aviation and travel.</h2>
        <Jobcard services={services} />
      </section>
            <MissionVision/>
    </>
  )
}

export default page