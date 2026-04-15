import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import Jobcard from '@/components/custom/Jobcard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Environmental",
    description: "Join the mission to protect our planet with careers in sustainability, environmental engineering, and safety.",
    bgImage: "/heroImages/environmental.jpg"
  }
  const services = [
    {
      id: 1,
      title: "Park Ranger",
      popupData: `TQualifications: Bachelor’s degree in Parks and Recreation, Environmental Science, Biology, or a related field. CPR and first aid certification may be required. Strong communication and interpersonal skills.

Roles and Responsibilities:

Patrol park areas to ensure visitor safety and compliance with regulations.
Provide information and assistance to park visitors.
Conduct educational programs and guided tours.
Perform resource management tasks such as trail maintenance and habitat restoration.
Monitor wildlife and enforce wildlife protection regulations.`
    },
    {
      id: 2,
      title: "Natural Resource Technician",
      popupData: `Qualifications: Associate’s or bachelor’s degree in Natural Resources Management, Environmental Science, Biology, or a related field. Fieldwork experience and familiarity with data collection techniques.

Roles and Responsibilities:

Conduct field surveys to collect data on natural resources such as wildlife, vegetation, and water quality.
Assist in habitat restoration projects and invasive species management.
Monitor and maintain environmental monitoring equipment.
Compile and analyze data for reporting and research purposes.
Assist in the development and implementation of natural resource management plans.`
    },
    {
      id: 3,
      title: "Marine Biologist",
      popupData: `Qualifications: Bachelor’s degree in Marine Biology, Biology, Ecology, or a related field. Advanced degree may be required for research positions. Strong swimming and diving skills may be necessary.

Roles and Responsibilities:

Study marine organisms, ecosystems, and habitats.
Conduct field research and collect samples.
Analyze data and prepare research reports.
Monitor marine biodiversity and assess environmental impacts.
Collaborate with other scientists and stakeholders in conservation efforts.`
    },
    {
      id: 4,
      title: "Environmental Technician",
      popupData: `Qualifications: Bachelor’s degree in Wildlife Biology, Ecology, Environmental Science, or a related field. Strong knowledge of wildlife ecology and behavior.

Roles and Responsibilities:

Conduct surveys to monitor wildlife populations and habitats.
Implement wildlife management and conservation strategies.
Assist in endangered species recovery efforts.
Provide technical assistance and training to landowners and stakeholders on wildlife management practices.
Collaborate with other agencies and organizations on wildlife-related projects.`
    },
    {
      id: 5,
      title: "Wildlife Specialists",
      popupData: `Qualifications: Bachelor’s degree in Wildlife Biology, Ecology, Environmental Science, or a related field. Strong knowledge of wildlife ecology and behavior.

Roles and Responsibilities:

Conduct surveys to monitor wildlife populations and habitats.
Implement wildlife management and conservation strategies.
Assist in endangered species recovery efforts.
Provide technical assistance and training to landowners and stakeholders on wildlife management practices.
Collaborate with other agencies and organizations on wildlife-related projects.`
    },
    {
      id: 6,
      title: "Wildlife Biologist",
      popupData: `Qualifications: Bachelor’s or master’s degree in Wildlife Biology, Ecology, Environmental Science, or a related field. Strong analytical and research skills

Roles and Responsibilities:

Study wildlife populations, behavior, and habitat use.
Conduct field research and data collection.
Analyze data and prepare research reports.
Assist in wildlife management and conservation planning.
Collaborate with other scientists and stakeholders in conservation efforts.`
    },
     {
      id: 7,
      title: "Meteorologist",
      popupData: `Qualifications: Bachelor’s degree in Meteorology, Atmospheric Science, or a related field. Strong mathematical and computer skills. Experience with weather forecasting models and data analysis.

Roles and Responsibilities:

Analyze weather data and atmospheric conditions.
Develop weather forecasts and warnings.
Monitor weather patterns and climate trends.
Conduct research on weather phenomena and climate change.
Communicate weather information to the public and stakeholders.`
    },
    {
      id: 8,
      title: "Wind Turbine Technician",
      popupData: `Qualifications: Associate’s degree in Wind Energy Technology, Electrical Engineering Technology, or a related field. Certification from a wind turbine technician program may be required. Experience with electrical systems and mechanical components.

Roles and Responsibilities:

Install, inspect, and maintain wind turbine systems.
Troubleshoot electrical and mechanical issues.
Perform routine maintenance and repairs.
Ensure compliance with safety regulations and manufacturer guidelines.
Monitor turbine performance and generate reports.`
    },
    {
      id: 9,
      title: "Geographic Information Systems (GIS) Specialist",
      popupData: `Qualifications: Bachelor’s degree in Geography, Geographic Information Systems (GIS), Environmental Science, or a related field. Proficiency in GIS software and spatial analysis techniques.

Roles and Responsibilities:

Create and maintain GIS databases and maps.
Collect, organize, and analyze geographic data.
Develop spatial models and perform spatial analysis.
Provide GIS support to research projects and fieldwork.
Communicate GIS findings to stakeholders through maps and reports.`
    },
    {
      id: 10,
      title: "Environmental Scientist",
      popupData: `Qualifications: Bachelor’s or master’s degree in Environmental Science, Ecology, Biology, or a related field. Strong analytical, communication, and problem-solving skills.

Roles and Responsibilities:

Conduct environmental assessments and impact studies.
Collect and analyze environmental data.
Develop and implement environmental monitoring programs.
Assist in environmental permitting and regulatory compliance.
Collaborate with interdisciplinary teams on environmental projects and research.`
    },
    {
      id: 11,
      title: "Geographer",
      popupData: `Qualifications: Bachelor’s degree in Geography, Geographic Information Systems (GIS), Environmental Science, or a related field. Strong analytical and spatial reasoning skills.

Roles and Responsibilities:

Study the Earth's surface and its features, including landforms, climate, and vegetation.
Analyze spatial data using GIS and other tools.
Conduct research on human-environment interactions and geographic patterns.
Create maps and visualizations to represent geographic information.
Provide expertise on geographical issues to support planning and decision-making.`
    },
    {
      id: 12,
      title: "Geologist",
      popupData: `Qualifications: Bachelor’s degree in Geology, Earth Sciences, or a related field. Strong fieldwork and analytical skills.

Roles and Responsibilities:

Study the Earth's structure, composition, and processes.
Conduct geological surveys and field investigations.
Analyze rock and soil samples to understand geological formations.
Interpret geological data to assess natural resource potential and environmental risks.
Provide expertise on geological hazards and environmental conservation.`
    },
    {
      id: 13,
      title: "Ecologist",
      popupData: `Qualifications: Bachelor’s or master’s degree in Ecology, Biology, Environmental Science, or a related field. Strong knowledge of ecosystems and ecological principles.

Roles and Responsibilities:

Study the relationships between organisms and their environments.
Conduct field research to assess ecological conditions and biodiversity.
Analyze ecological data and identify patterns and trends.
Develop conservation and restoration plans for ecosystems.
Provide expertise on ecological impacts of development projects and land management practices.`
    },
    {
      id: 14,
      title: "Landscape Architect",
      popupData: `Qualifications: Bachelor’s or master’s degree in Ecology, Biology, Environmental Science, or a related field. Strong knowledge of ecosystems and ecological principles.

Roles and Responsibilities:

Study the relationships between organisms and their environments.
Conduct field research to assess ecological conditions and biodiversity.
Analyze ecological data and identify patterns and trends.
Develop conservation and restoration plans for ecosystems.
Provide expertise on ecological impacts of development projects and land management practices.`
    },
    {
      id: 15,
      title: "Environmental Compliance Specialist",
      popupData: `Qualifications: Bachelor’s degree in Environmental Science, Environmental Engineering, or a related field. Strong understanding of environmental regulations and compliance requirements.

Roles and Responsibilities:

Monitor and assess environmental regulations at the local, state, and federal levels.
Develop and implement compliance programs and procedures.
Conduct audits and inspections to ensure adherence to environmental laws and regulations.
Provide training and guidance to employees on environmental compliance.
Prepare and submit reports to regulatory agencies.`
    },
    {
      id: 16,
      title: "Environmental Consultant",
      popupData: `Qualifications: Bachelor’s or master’s degree in Environmental Science, Environmental Engineering, or a related field. Professional certification or licensure may be required. Strong analytical and communication skills.

Roles and Responsibilities:

Provide expertise and advice on environmental issues to clients in various industries.
Conduct environmental assessments, impact studies, and risk assessments.
Develop strategies and recommendations for environmental management and sustainability.
Assist clients in obtaining permits and complying with environmental regulations.
Communicate findings and recommendations to clients and stakeholders.`
    },
    {
      id: 17,
      title: "Microbiologist",
      popupData: `Qualifications: Bachelor’s or master’s degree in Microbiology, Biology, Environmental Science, or a related field. Strong laboratory skills and knowledge of microbiological techniques.

Roles and Responsibilities:

Study microorganisms and their interactions with the environment.
Conduct laboratory experiments and research on microbial processes.
Assess the role of microorganisms in environmental pollution and degradation.
Develop and implement methods for microbial control and remediation.
Provide expertise on microbiological aspects of environmental health and safety.`
    },
    {
      id: 18,
      title: "Environmental Specialist",
      popupData: `Qualifications: Bachelor’s degree in Environmental Science, Ecology, or a related field. Strong knowledge of environmental regulations and management practices.

Roles and Responsibilities:

Conduct environmental assessments and evaluations.
Monitor environmental conditions and trends.
Develop and implement environmental management plans.
Assist in environmental permitting and compliance activities.
Provide technical expertise and support on environmental issues.`
    },
    {
      id: 19,
      title: "Environmental Planner",
      popupData: `Qualifications: Bachelor’s or master’s degree in Urban Planning, Environmental Planning, or a related field. Strong analytical and communication skills.

Roles and Responsibilities:

Develop land use plans and policies that promote sustainable development and environmental conservation.
Assess theenvironmental impacts of proposed development projects.
Conduct environmental reviews and evaluations.
Engage stakeholders and communities in the planning process.
Ensure compliance with environmental regulations and planning guidelines.`
    },
    {
      id: 20,
      title: "Environment, Health, and Safety (EHS) Specialist",
      popupData: `Qualifications: Bachelor’s degree in Environmental Health and Safety, Occupational Health and Safety, or a related field. Professional certification or licensure may be required. Strong knowledge of safety regulations and practices.

Roles and Responsibilities:

Develop and implement health and safety programs and policies.
Conduct risk assessments and hazard analyses.
Provide training and guidance to employees on safety procedures.
Investigate accidents and incidents to determine causes and prevent recurrence.
Ensure compliance with health, safety, and environmental regulations.`
    },
    {
      id: 21,
      title: "Environmental Engineer",
      popupData: `Qualifications: Bachelor’s or master’s degree in Environmental Engineering, Civil Engineering, or a related field. Professional engineering licensure may be required. Strong analytical and problem-solving skills.

Roles and Responsibilities:

Design and implement systems and processes to prevent or mitigate environmental pollution and degradation.
Conduct environmental assessments and impact studies.
Develop and implement pollution control and remediation strategies.
Ensure compliance with environmental regulations and permits.
Collaborate with other engineers, scientists, and stakeholders on environmental projects.`
    },
    {
      id: 22,
      title: "Sustainability Engineer",
      popupData: `Qualifications: Bachelor’s or master’s degree in Environmental Engineering, Sustainable Engineering, or a related field. Strong understanding of sustainability principles and practices.

Roles and Responsibilities:

Develop and implement sustainability initiatives and strategies.
Conduct life cycle assessments and environmental impact analyses.
Identify opportunities for energy efficiency and renewable energy generation.
Design and implement sustainable building and infrastructure projects.
Monitor and report on sustainability performance metrics.`
    },
    {
      id: 23,
      title: "Environmental Health and Safety Officer",
      popupData: `Qualifications: Bachelor’s degree in Environmental Health and Safety, Occupational Health and Safety, or a related field. Professional certification or licensure may be required. Strong knowledge of health, safety, and environmental regulations.

Roles and Responsibilities:

Develop and implement health, safety, and environmental policies and procedures.
Conduct risk assessments and hazard analyses.
Provide training and guidance to employees on health and safety practices.
Investigate accidents and incidents to determine causes and prevent recurrence.
Ensure compliance with health, safety, and environmental regulations and standards.`
    },

  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>The environmental work industry is dedicated to safeguarding ecosystems and addressing pressing environmental issues such as climate change, pollution, and habitat degradation. Professionals in this field, including environmental scientists and conservation biologists, play pivotal roles in research, conservation efforts, and policy advocacy. Theres a notable shift towards sustainable practices, renewable energy adoption, and the promotion of green technologies. Concurrently, the sector fosters public awareness, community education, and collaboration with stakeholders to ensure a sustainable future for generations to come.</h2>
        <Jobcard services={services} />
      </section>
            <MissionVision/>
    </>
  )
}

export default page