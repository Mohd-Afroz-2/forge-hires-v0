import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import MissionVision from '@/components/custom/MissionVision'
import ServiceCard from '@/components/custom/ServiceCard'
import Jobcard from '@/components/custom/Jobcard'

const page = () => {
  const heroData = {
    title: "Public Safety",
    description: "Dedicated roles in emergency services, law enforcement, and community safety operations.",
    bgImage: "/heroImages/public-safety.jpg"
  }
   const services = [
  {
    id: 1,
    title: "Police Officer",
    popupData: `Qualifications High school diploma or equivalent (some agencies may require a college degree). Completion of police academy training and certification. Physical fitness and agility. Good moral character and clean criminal record. Valid driver's license. Roles and Responsibilities

Enforce laws, maintain public order, and prevent crime.
Patrol assigned areas, respond to calls for service, and conduct investigations.
Arrest suspects and gather evidence.
Provide assistance and support to the community.
Prepare reports and testify in court.
Continuously train to maintain skills and knowledge.`
  },
  {
    id: 2,
    title: "Firefighter",
    popupData: `Qualifications High school diploma or equivalent. Completion of firefighter training and certification. Physical fitness and agility. Emergency medical technician (EMT) certification may be required. Valid driver's license. Roles and Responsibilities

Respond to fires, medical emergencies, and other incidents.
Perform rescue operations to save lives and protect property.
Operate firefighting equipment and tools.
Conduct fire prevention inspections and public education programs.
Maintain equipment and facilities. Participate in training drills and exercises.`
  },
  {
    id: 3,
    title: "Emergency Medical Technician (EMT)",
    popupData: `Qualifications High school diploma or equivalent. Completion of EMT training and certification. CPR certification. Valid driver's license. Roles and Responsibilities

Respond to medical emergencies and provide pre-hospital care.
Assess patients' conditions and administer appropriate treatments.
Transport patients to medical facilities.
Document patient care and maintain accurate records.
Communicate effectively with other emergency responders and healthcare providers.
Participate in continuing education to maintain certification.`
  },
  {
    id: 4,
    title: "Paramedic",
    popupData: `Qualifications Associate's degree or higher in paramedicine. Paramedic training and certification. CPR certification. Valid driver's license. Roles and Responsibilities

Provide advanced life support to patients in medical emergencies.
Perform advanced medical procedures and administer medications.
Coordinate with other emergency responders and healthcare providers.
Manage patient care during transport to medical facilities.
Maintain equipment and supplies.
Stay updated on medical protocols and guidelines.`
  },
  {
    id: 5,
    title: "Emergency Dispatcher",
    popupData: `Qualifications High school diploma or equivalent. Completion of dispatcher training and certification. Strong communication and multitasking skills. Ability to remain calm under pressure. Knowledge of emergency response procedures. Roles and Responsibilities

Receive and prioritize emergency calls.
Dispatch appropriate emergency responders to incidents.
Provide pre-arrival instructions to callers.
Coordinate communication between responders and agencies.
Document calls and maintain accurate records. Monitor radio traffic and update responders on situations.`
  },
  {
    id: 6,
    title: "Crime Scene Investigator",
    popupData: `Qualifications Bachelor's degree in forensic science, criminal justice, or related field. Crime scene investigation training and certification. Attention to detail and analytical skills. Knowledge of evidence collection and preservation techniques. Roles and Responsibilities

Respond to crime scenes to collect and document evidence.
Photograph and sketch crime scenes.
Collect and process physical evidence, such as fingerprints and DNA.
Analyze evidence in laboratory settings.
Prepare reports and testify in court.
Coordinate with law enforcement agencies and other forensic specialists.`
  },
  {
    id: 7,
    title: "Correctional Officer",
    popupData: `Qualifications High school diploma or equivalent. Completion of correctional officer training. Physical fitness and strength. Good judgment and interpersonal skills. Roles and Responsibilities

Maintain security and control within correctional facilities.
Supervise inmates and enforce rules and regulations.
Conduct searches and inspections.
Escort inmates within the facility and during transport.
Provide support and assistance to inmates.
Respond to emergencies and incidents.`
  },
  {
    id: 8,
    title: "Security Guard",
    popupData: `Qualifications High school diploma or equivalent. Completion of security guard training. Good judgment and observation skills. Physical fitness and ability to stand for long periods. Customer service skills. Roles and Responsibilities

Patrol assigned areas to prevent and detect security breaches.
Monitor surveillance cameras and alarms.
Control access to restricted areas.
Respond to incidents and emergencies.
Write reports documenting observations and actions.
Provide assistance and support to visitors and employees.`
  },
  {
    id: 9,
    title: "Park Ranger",
    popupData: `Qualifications Bachelor's degree in park management, environmental science, or related field. Knowledge of natural resources and conservation principles. Outdoor skills and physical fitness. First aid and CPR certification. Valid driver's license. Roles and Responsibilities

Protect and preserve natural resources and wildlife.
Enforce park rules and regulations.
Provide information and assistance to park visitors.
Conduct patrols and inspections.
Respond to emergencies and provide first aid.
Maintain facilities and trails.`
  },
  {
    id: 10,
    title: "Lifeguard",
    popupData: `Qualifications Lifeguard certification. CPR and first aid certification. Physical fitness and swimming ability. Good communication and observation skills. Roles and Responsibilities

Monitor swimmers and enforce safety rules.
Perform water rescues and provide first aid.
Conduct swim lessons and programs.
Maintain cleanliness and safety of aquatic facilities.
Respond to emergencies and coordinate with other lifeguards and emergency responders.
Provide excellent customer service to patrons.`
  },
  {
    id: 11,
    title: "Animal Control Officer",
    popupData: `Qualifications High school diploma or equivalent. Training in animal control procedures and laws. Knowledge of animal behavior and handling techniques. Good communication and interpersonal skills. Physical fitness and ability to handle animals safely. Roles and Responsibilities

Respond to calls regarding stray, injured, or aggressive animals.
Capture and restrain animals using appropriate methods.
Investigate animal-related complaints and enforce animal control ordinances.
Educate the public about responsible pet ownership.
Work with animal shelters and rescue organizations to care for and rehome animals.
Maintain records and prepare reports.`
  },

]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4'>

     <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>In the Public Safety sector, dedicated professionals work to ensure the security and well-being of communities. Law enforcement officers uphold the law, investigate crimes, and protect citizens from harm. Firefighters bravely respond to emergencies, extinguishing fires, and providing medical assistance. Emergency medical technicians (EMTs) deliver critical care on the front lines, saving lives in challenging situations. Dispatchers coordinate responses, connecting individuals in need with the appropriate assistance. Additionally, analysts gather and analyze data to enhance public safety strategies and response tactics. Careers in this vital field offer opportunities to serve and protect, making communities safer and more resilient.</h2>
            <Jobcard services={services} />
    </section>
          <MissionVision/>
    </>
  )
}

export default page