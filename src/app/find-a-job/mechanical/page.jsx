import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import Jobcard from '@/components/custom/Jobcard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Mechanical",
    description: "Technical roles in mechanical design, maintenance, and engineering across diverse industrial sectors.",
    bgImage: "/heroImages/mechanical.png"
  }
  const services = [
    {
      id: 1,
      title: "Mechanical Engineer (All sorts of designs)",
      popupData: `Responsible for conceptualizing, designing, and developing a variety of mechanical systems and products. Involves research, prototyping, analysis, and optimization, using CAD tools and engineering principles.`
    },
    {
      id: 2,
      title: "Mechanical Engineer (with HVAC Design experience)",
      popupData: `Specializes in HVAC system design, including analysis, planning, and implementation of heating, ventilation, and air conditioning systems. Requires knowledge of thermal dynamics, fluid mechanics, and environmental control.`
    },
    {
      id: 3,
      title: "Mechanical Engineer (Fire Sprinkler design experience)",
      popupData: `Focuses on designing and implementing fire sprinkler systems. Involves creating plans, performing hydraulic calculations, and ensuring compliance with safety standards and building codes.`
    },
    {
      id: 4,
      title: "Mechanical Engineer (Building Automation experience)",
      popupData: `Involves designing and managing building automation systems, integrating HVAC, lighting, security, and other systems to optimize energy efficiency and functionality.`
    },
    {
      id: 5,
      title: "Mechanical Engineer (Manufacturing industry experience)",
      popupData: `Works in the manufacturing sector, designing machinery, production processes, and equipment. Requires knowledge of manufacturing techniques, materials science, and quality control.`
    },
    {
      id: 6,
      title: "Mechanical Engineer (Aerospace industry experience)",
      popupData: `Engages in the design and development of aerospace components and systems, including aircraft and spacecraft. Requires understanding of aerodynamics, materials science, and propulsion systems.`
    },
    {
      id: 7,
      title: "Mechanical Engineer (High rise buildings experience)",
      popupData: `Specializes in engineering for high-rise buildings, focusing on structural integrity, HVAC systems, and utility planning. Involves collaboration with architects and construction teams.`
    },
    {
      id: 8,
      title: "Mechanical Engineer (MEP firm experience)",
      popupData: `Works within a Mechanical, Electrical, and Plumbing (MEP) firm, providing integrated solutions for building systems. Involves design, coordination, and project management.`
    },
    {
      id: 9,
      title: "Mechanical Design Engineer (Revit/AutoCAD)",
      popupData: `Focuses on creating detailed mechanical designs using Revit and AutoCAD. Involves drafting, 3D modeling, and collaborating with engineering teams.`
    },
    {
      id: 10,
      title: "Mechanical Design Engineer (SolidWorks/MATLAB)",
      popupData: `Utilizes SolidWorks and MATLAB for mechanical design and analysis. Involves developing models, simulations, and prototypes for various mechanical systems.`
    },
    {
      id: 11,
      title: "Senior Mechanical Engineer (All sorts of mechanical engineering designs)",
      popupData: `Senior role involving oversight of mechanical engineering projects, mentorship of junior engineers, and involvement in complex design and problem-solving tasks.`
    },
    {
      id: 12,
      title: "Mechanical Engineer (Chiller Systems)",
      popupData: `Specializes in designing and maintaining chiller systems for commercial and industrial use. Requires knowledge of refrigeration, thermodynamics, and fluid mechanics.`
    },
    {
      id: 13,
      title: "Mechanical Engineer (Oil and Gas)",
      popupData: `Works in the oil and gas industry, focusing on designing and maintaining equipment used in exploration and extraction processes.`
    },
    {
      id: 14,
      title: "Mechanical Engineer (Conveyor systems)",
      popupData: `Designs conveyor systems for various industries, involving calculations for load, throughput, and material handling requirements.`
    },
    {
      id: 15,
      title: "Mechanical Engineer (Overhead cranes)",
      popupData: `Designs conveyor systems for various industries, involving calculations for load, throughput, and material handling requirements.`
    },
    {
      id: 16,
      title: "Mechanical Engineer (Automobile Engineering)",
      popupData: `Engages in the design and development of automobiles, including components like engines, transmissions, and body structures.`
    },
    {
      id: 17,
      title: "Reliability Engineer",
      popupData: `Focuses on ensuring the reliability and safety of engineering systems and components, through testing, analysis, and maintenance planning.`
    },
    {
      id: 18,
      title: "Thermal Systems Engineer",
      popupData: `Specializes in the design and analysis of thermal systems, including heat exchangers, refrigeration systems, and HVAC.`
    },
    {
      id: 19,
      title: "HVAC Engineer (Heating, Ventilation, and Air Conditioning)",
      popupData: `Involves designing, implementing, and maintaining HVAC systems, focusing on thermal comfort and air quality in buildings.`
    },
    {
      id: 20,
      title: "Fluid Dynamics Engineer",
      popupData: `Deals with the analysis and application of fluid dynamics in various systems, including aerodynamics, hydrodynamics, and pneumatics.`
    },
    {
      id: 21,
      title: "Structural Engineer (with a focus on mechanical systems)",
      popupData: `Combines structural engineering with mechanical principles, focusing on the design and analysis of mechanical structures and systems.`
    },
    {
      id: 22,
      title: "Aerospace Engineer (for those specializing in aircraft and spacecraft)",
      popupData: `Involves designing and developing aircraft and spacecraft, focusing on aerodynamics, propulsion systems, and materials science.`
    },
    {
      id: 23,
      title: "Automotive Engineer (for those working in the automotive industry)",
      popupData: `Specializes in the automotive industry, focusing on vehicle design, performance, and safety systems.`
    },
    {
      id: 24,
      title: "Robotics Engineer",
      popupData: `Involves designing and developing robotic systems, including automation, control systems, and artificial intelligence applications.`
    },
    {
      id: 25,
      title: "Manufacturing Engineer",
      popupData: `Works in the manufacturing sector, focusing on process design, equipment layout, and optimization of production systems.`
    },
    {
      id: 26,
      title: "Quality Assurance Engineer",
      popupData: `Responsible for ensuring the quality and safety of engineering products and processes, through testing, inspection, and compliance with standards.`
    },
    {
      id: 27,
      title: "Energy Systems Engineer",
      popupData: `Focuses on designing and analyzing energy systems, including renewable energy sources and energy efficiency technologies.`
    },
    {
      id: 28,
      title: "Control Systems Engineer (for those focusing on automation and control systems)",
      popupData: `Specializes in automation and control systems, involving the design and implementation of control algorithms and systems integration.`
    },
    {
      id: 29,
      title: "Materials Engineer (for those specializing in materials science)",
      popupData: `Focuses on materials science, involving the selection, testing, and development of materials for various engineering applications.`
    },
    {
      id: 30,
      title: "Acoustic Engineer (specializing in sound and vibration)",
      popupData: `Specializes in sound and vibration engineering, focusing on noise control, acoustics, and vibration analysis in various systems.`
    },
    {
      id: 31,
      title: "Biomechanical Engineer (working in the field of biology and human movement)",
      popupData: `Combines principles of biology and engineering, focusing on the analysis and design of systems related to human movement.`
    },
    {
      id: 32,
      title: "Renewable Energy Engineer",
      popupData: `Focuses on renewable energy technologies, including the design, implementation, and analysis of systems like solar, wind, and hydro power.`
    },
    {
      id: 33,
      title: "Process Engineer (often found in manufacturing and chemical industries)",
      popupData: `Involves designing and optimizing manufacturing and chemical processes, focusing on efficiency, safety, and environmental impact.`
    },
    {
      id: 34,
      title: "Product Development Engineer",
      popupData: `Focuses on the development of new products, from concept to market launch, involving design, prototyping, and testing.`
    },
    {
      id: 35,
      title: "Project Engineer (overseeing engineering projects)",
      popupData: `Responsible for overseeing engineering projects, including planning, execution, and coordination with multidisciplinary teams.`
    },
    {
      id: 36,
      title: "Research and Development Engineer",
      popupData: `Involves research and development of new engineering technologies and solutions, often in a specialized field of engineering.`
    },

  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>The mechanical industry is pivotal in the modern world, driving innovation and development across various sectors. It encompasses the design, analysis, and manufacturing of mechanical systems, playing a crucial role in industries like automotive, aerospace, and energy.<br />
          <br />Mechanical engineers in this industry tackle challenges in mechanics, thermodynamics, and materials science to create efficient and sustainable solutions. They work on a broad range of projects, from developing sophisticated machinery to improving manufacturing processes, constantly pushing the boundaries of technology and design.</h2>
        <Jobcard services={services} />
      </section>
            <MissionVision/>
    </>
  )
}

export default page