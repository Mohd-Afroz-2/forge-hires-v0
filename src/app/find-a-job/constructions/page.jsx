import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import Jobcard from '@/components/custom/Jobcard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Constructions",
    description: "Build your career with rewarding roles in residential, commercial, and industrial construction projects.",
    bgImage: "/heroImages/constructions.png"
  }
  const services = [
    {
      id: 1,
      title: "Commercial / Residential Superintendent",
      popupData: `Responsible for overseeing the daily operations of commercial or residential construction projects, ensuring they are completed on time, within budget, and according to quality standards. Duties include coordinating with subcontractors, managing construction schedules, enforcing safety regulations, and communicating project progress to stakeholders.`
    },
    {
      id: 2,
      title: "Commercial / Residential Project Manager",
      popupData: `Manages commercial or residential construction projects from inception to completion. Responsibilities include budgeting, scheduling, coordinating with various stakeholders, ensuring compliance with legal requirements, and resolving any issues that arise during the construction process.`
    },
    {
      id: 3,
      title: "Heavy Civil Engineer",
      popupData: `Focuses on the design, construction, and maintenance of infrastructure projects such as bridges, highways, and dams. Requires strong analytical skills to develop solutions for complex engineering challenges, ensuring safety and efficiency in construction and operation.`
    },
    {
      id: 4,
      title: "Construction Estimator",
      popupData: `Responsible for estimating the costs associated with construction projects. This involves analyzing project plans, computing costs, determining timeframes, and considering various factors like labor, materials, and equipment needed for the project.`
    },
    {
      id: 5,
      title: "Structural Engineer",
      popupData: `Specializes in designing and analyzing the structural components of buildings, bridges, and other structures. Ensures that structures are safe, stable, and capable of withstanding environmental stresses and loads.`
    },
    {
      id: 6,
      title: "Environmental Engineer",
      popupData: `Works on projects that improve environmental quality. Involves assessing and managing the environmental impact of construction projects, developing pollution control technologies, and advising on sustainable construction practices.`
    },
     {
      id: 7,
      title: "Travelling Superintendent / Project Manager",
      popupData: `Oversees construction projects at different locations, often traveling to various sites. Manages project timelines, budgets, and teams, ensuring that construction standards are met and projects are completed efficiently and effectively.`
    },
    {
      id: 8,
      title: "Roadway Engineers",
      popupData: `Specializes in designing and overseeing the construction and maintenance of roads and highways. Ensures that roadway projects meet safety, environmental, and budgetary requirements, and coordinates with other engineers and government agencies.`
    },
    {
      id: 9,
      title: "Infrastructure Engineer",
      popupData: `Involved in planning, designing, and overseeing the construction and maintenance of infrastructure facilities like water supply systems, sewage systems, and public transportation networks. Ensures that these systems are efficient, sustainable, and meet community needs.`
    },
    {
      id: 10,
      title: "Geo Technical Surveyors/Engineers",
      popupData: `Focuses on analyzing the earth materials and their behavior in construction projects. Involves conducting soil and rock testing, assessing site conditions, and providing recommendations for foundation design and other construction-related decisions.`
    },
    

  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>Construction logistics is the process of planning, coordinating and executing the transportation, storage and distribution of materials and equipment needed for construction projects. It involves ensuring that all the necessary resources are available when and where they are needed, and that they are used efficiently throughout the project.<br />
          <br />Construction logistics is a complex and challenging field, but it is an essential part of any successful construction project. By carefully planning and coordinating the transportation, storage and distribution of materials and equipment, construction logistics can help to ensure that a project runs smoothly and efficiently from start to finish.</h2>
        <Jobcard services={services} />
      </section>
            <MissionVision/>
    </>
  )
}

export default page