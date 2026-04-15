import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import Jobcard from '@/components/custom/Jobcard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Manufacturing",
    description: "Power the industry with roles in production management, quality control, and industrial engineering.",
    bgImage: "/heroImages/manufacturing.png"
  }
  const services = [
    {
      id: 1,
      title: "Manufacturing Engineer/Supervisor/ Technician",
      popupData: `Responsible for designing, implementing, and overseeing manufacturing processes. Supervises technicians, ensures efficiency, and maintains quality in production processes.`
    },
    {
      id: 2,
      title: "Product/New Product Engineer/Designer",
      popupData: `Focuses on designing and developing new products. Works closely with manufacturing teams to ensure feasible and efficient production. Involves in product testing and iteration.`
    },
    {
      id: 3,
      title: "Production Manager/Supervisor",
      popupData: `Oversees the production process in a manufacturing setting. Manages staff, schedules work, and ensures product quality and timely delivery.`
    },
    {
      id: 4,
      title: "Quality Control/Quality Assurance Engineer/Supervisor",
      popupData: `Ensures the quality of products in manufacturing. Develops quality standards, oversees testing, and identifies areas for improvement in production processes.`
    },
    {
      id: 5,
      title: "Supply Chain Manager",
      popupData: `Manages the end-to-end supply chain process in manufacturing. Coordinates with suppliers, oversees logistics, and ensures efficient inventory management.`
    },
    {
      id: 6,
      title: "Purchaser/Buyer/ Purchasing Agent",
      popupData: `Responsible for purchasing materials and supplies needed for manufacturing. Negotiates with suppliers, evaluates quality and cost, and maintains inventory levels.`
    },
    {
      id: 7,
      title: "Process Engineer",
      popupData: `Designs and optimizes manufacturing processes for efficiency and quality. Develops new process strategies and troubleshoots existing production issues.`
    },
    {
      id: 8,
      title: "Controls Engineer",
      popupData: `Specializes in designing and maintaining control systems in manufacturing. Ensures machinery operates efficiently and safely.`
    },
    {
      id: 9,
      title: "Production/Plant Manager/Supervisor",
      popupData: `Manages the overall operations of a manufacturing plant or production facility. Oversees staff, production schedules, and ensures compliance with safety standards.`
    },
    {
      id: 10,
      title: "Industrial Engineer/Supervisor/ Technician",
      popupData: `Focuses on optimizing manufacturing processes for increased efficiency and reduced waste. Analyzes production workflows and implements improvements.`
    },
    {
      id: 11,
      title: "Product Design/Design Engineer",
      popupData: `Involved in the conceptualization and design of new products. Works closely with engineering and manufacturing teams to create viable product designs.`
    },
    {
      id: 12,
      title: "Maintenance/EHS/Safety Manager/Coordinator",
      popupData: `Oversees maintenance of equipment and facilities in a manufacturing setting. Ensures compliance with environmental, health, and safety regulations.`
    },

  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>Discover exciting opportunities in the dynamic world of manufacturing. Explore roles that shape industries, from production and operations to quality assurance and supply chain management. Whether you are an experienced professional or entering the field, our manufacturing jobs span a spectrum of expertise. Join us in building the future, where innovation meets precision, and your skills contribute to the creation of high-quality products. Explore diverse career paths within our manufacturing sector and be a part of a team that values excellence, efficiency, and continuous improvement. Find your ideal manufacturing job and advance your career with us.</h2>
        <Jobcard services={services} />
      </section>
            <MissionVision/>
    </>
  )
}

export default page