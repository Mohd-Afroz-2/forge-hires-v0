import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import MissionVision from '@/components/custom/MissionVision'
import ServiceCard from '@/components/custom/ServiceCard'
import Jobcard from '@/components/custom/Jobcard'

const page = () => {
  const heroData = {
    title: "Telecommunications and wireless",
    description: "Connect the world with technical and management roles in wireless and fiber-optic networking.",
    bgImage: "/heroImages/telecommunications-wireless.jpg"
  }
   const services = [
  {
    id: 1,
    title: "Telecommunications Engineer",
    popupData: `Qualifications Bachelor's degree or higher in Electrical Engineering, Telecommunications Engineering, or related field. Knowledge of telecommunications systems, protocols, and technologies. Proficiency in network design, implementation, and troubleshooting. Experience with telecommunication equipment and software. Strong analytical and problem-solving skills. Roles and Responsibilities

Design, deploy, and maintain telecommunications networks and systems.
Conduct site surveys and assess network requirements.
Configure and optimize network infrastructure for performance and reliability.
Troubleshoot network issues and implement solutions.
Collaborate with cross-functional teams to integrate new technologies and services.
Stay updated on industry standards and emerging technologies.`
  },
  {
    id: 2,
    title: "VoIP Engineer",
    popupData: `Qualifications Bachelor's degree or higher in Computer Science, Telecommunications, or related field. Experience with Voice over Internet Protocol (VoIP) technologies and protocols. Proficiency in VoIP system design, configuration, and troubleshooting. Knowledge of network protocols such as SIP, RTP, and H.323. Strong communication and teamwork skills. Roles and Responsibilities

Design, implement, and support VoIP systems and services.
Configure VoIP gateways, PBX systems, and SIP trunks.
Monitor and optimize system performance and call quality.
Troubleshoot VoIP-related issues and implement solutions.
Collaborate with network engineers to ensure VoIP traffic is prioritized and optimized.
Provide training and support to end-users.`
  },
  {
    id: 3,
    title: "Telecommunications Sales Representative",
    popupData: `Qualifications Bachelor's degree or equivalent experience in Sales, Marketing, or related field. Proven track record in telecommunications or technology sales. Excellent communication and negotiation skills. Ability to understand and articulate technical concepts. Strong customer service orientation. Roles and Responsibilities

Identify and prospect new business opportunities in the telecommunications sector.
Build and maintain relationships with existing and potential customers.
Understand customer needs and recommend appropriate telecommunications solutions.
Prepare and present proposals, quotes, and contracts.
Negotiate terms and close sales.
Collaborate with internal teams to ensure customer satisfaction and successful implementation.`
  },
  {
    id: 4,
    title: "Telecommunications Analyst",
    popupData: `Qualifications Bachelor's degree or higher in Information Technology, Telecommunications, or related field. Experience with telecommunications systems and technologies. Proficiency in data analysis and reporting tools. Strong problem-solving and analytical skills. Attention to detail. Roles and Responsibilities

Analyze telecommunications data and metrics to identify trends and patterns.
Generate reports and dashboards to communicate findings to stakeholders.
Monitor network performance and identify areas for improvement.
Evaluate new technologies and services for potential implementation.
Provide recommendations for optimizing telecommunications systems and services.
Collaborate with cross-functional teams to troubleshoot and resolve issues.`
  },
  {
    id: 5,
    title: "Telecommunications Technician",
    popupData: `Qualifications Associate's degree or equivalent experience in Telecommunications, Electronics, or related field. Experience with installation, maintenance, and repair of telecommunications equipment. Knowledge of telecommunications protocols and standards. Strong technical and troubleshooting skills. Ability to work independently and as part of a team. Roles and Responsibilities

Install, configure, and test telecommunications equipment and systems.
Perform routine maintenance and repairs on telecommunication infrastructure.
Troubleshoot and resolve network issues and outages.
Document work performed and maintain accurate records.
Provide technical support to end-users and customers. Stay updated on industry trends and best practices.`
  },
  {
    id: 6,
    title: "Wireless Engineer",
    popupData: `Qualifications Bachelor's degree or higher in Electrical Engineering, Telecommunications, or related field. Experience with wireless communication technologies such as LTE, Wi-Fi, and Bluetooth. Proficiency in radio frequency (RF) design, optimization, and troubleshooting. Knowledge of wireless network protocols and standards. Strong problem-solving and analytical skills. Roles and Responsibilities

Design, deploy, and optimize wireless communication networks.
Conduct RF surveys and site assessments to determine network coverage and capacity requirements.
Perform radio planning and optimization to maximize network performance.
Troubleshoot RF interference and coverage issues.
Collaborate with network engineers to integrate wireless networks with existing infrastructure.
Stay updated on emerging wireless technologies and standards.`
  },
  {
    id: 7,
    title: "Network Operations Center (NOC) Technician",
    popupData: `Qualifications Associate's degree or equivalent experience in Information Technology, Telecommunications, or related field. Experience with network monitoring and troubleshooting tools. Knowledge of network protocols and technologies. Strong analytical and problem-solving skills. Ability to work under pressure in a fast-paced environment. Roles and Responsibilities

Monitor network performance and health using network management tools.
Identify and troubleshoot network issues and outages.
Coordinate with other technical teams to resolve escalated issues.
Document incidents and resolutions in a ticketing system.
Perform routine maintenance and updates on network devices and systems.
Follow standard operating procedures and best practices for network operations.`
  },
  {
    id: 8,
    title: "Telecommunications Consultant",
    popupData: `Qualifications Bachelor's degree or higher in Telecommunications Engineering, Electrical Engineering, or related field. Extensive experience in the telecommunications industry with a focus on consulting. Strong knowledge of telecommunications technologies, protocols, and standards. Excellent communication and interpersonal skills. Ability to analyze complex problems and provide strategic recommendations. Roles and Responsibilities

Provide expert advice and guidance to clients on telecommunications strategies, technologies, and solutions.
Assess client needs and develop customized telecommunications solutions to meet their requirements.
Conduct feasibility studies, cost-benefit analyses, and risk assessments for proposed projects.
Collaborate with internal and external stakeholders to implement and optimize telecommunications solutions.
Stay updated on industry trends, emerging technologies, and regulatory changes.
Deliver presentations and training sessions to clients and internal teams.`
  },
  {
    id: 9,
    title: "Telecommunications Project Manager",
    popupData: `Qualifications Bachelor's degree or higher in Telecommunications Engineering, Project Management, or related field. Proven experience in project management, preferably in the telecommunications industry. Strong leadership, organizational, and communication skills. Proficiency in project management tools and methodologies. Ability to manage multiple projects simultaneously and deliver on time and within budget. Roles and Responsibilities

Plan, execute, and manage telecommunications projects from initiation to closure.
Define project scope, objectives, and deliverables in collaboration with stakeholders.
Develop project plans, schedules, and budgets, and track progress against milestones.
Allocate resources, manage project teams, and coordinate activities across functional areas.
Identify and mitigate project risks, and escalate issues as needed.
Communicate project status, progress, and changes to stakeholders and senior management.`
  },
  {
    id: 10,
    title: "Wireless Network Engineer",
    popupData: `Qualifications Bachelor's degree or higher in Electrical Engineering, Telecommunications Engineering, or related field. Strong knowledge of wireless networking technologies and protocols (e.g., Wi-Fi, LTE, 5G). Experience in designing, implementing, and troubleshooting wireless networks. Proficiency in network simulation and optimization tools. Excellent analytical and problem-solving skills. Roles and Responsibilities

Design, deploy, and optimize wireless networks to meet performance, capacity, and coverage requirements.
Conduct site surveys and RF propagation analysis to assess network deployment scenarios.
Configure and integrate wireless networking equipment, including access points, controllers, and antennas.
Perform network performance monitoring, analysis, and optimization to ensure reliability and quality of service.
Troubleshoot network issues and implement corrective actions to minimize downtime.
Stay updated on emerging wireless technologies and industry trends.`
  },
  {
    id: 11,
    title: "RF Engineer",
    popupData: `Qualifications Bachelor's degree or higher in Electrical Engineering, Telecommunications Engineering, or related field. Specialization or coursework in radio frequency (RF) engineering. Experience in RF design, analysis, and optimization. Proficiency in RF simulation and measurement tools. Strong analytical and problem-solving skills. Roles and Responsibilities ·        Design and optimize RF systems and components for telecommunications applications. ·        Conduct RF link budget analysis and coverage prediction to ensure adequate signal strength and coverage. ·        Perform RF interference analysis and mitigation to minimize signal degradation. ·        Develop and execute test plans for RF equipment and systems. ·        Collaborate with other engineers and stakeholders to integrate RF solutions into larger systems. Stay updated on RF technologies, standards, and regulatory requirements.`
  },
  {
    id: 12,
    title: "Wireless Systems Architect",
    popupData: `Qualifications Bachelor's degree or higher in Electrical Engineering, Telecommunications Engineering, or related field. Extensive experience in wireless systems design and architecture. Strong knowledge of wireless communication technologies and protocols. Experience with system-level modeling, simulation, and optimization. Excellent communication and teamwork skills. Roles and Responsibilities

Design end-to-end wireless communication systems, including radio access networks, core networks, and backhaul links.
Define system architecture, protocols, interfaces, and standards.
Conduct system-level performance analysis and optimization to meet key performance indicators (KPIs).
Collaborate with cross-functional teams to integrate wireless systems into larger networks and platforms.
Evaluate and recommend emerging technologies and solutions to meet evolving requirements.
Provide technical leadership and mentorship to junior engineers.`
  },
  {
    id: 13,
    title: "Wireless Field Technician",
    popupData: `Qualifications Associate's degree or higher in Electronics, Telecommunications, or related field. Certification or training in wireless networking or telecommunications. Experience in field installation, testing, and troubleshooting of wireless equipment. Familiarity with common tools and equipment used in telecommunications fieldwork. Strong problem-solving and communication skills. Roles and Responsibilities

Install, configure, and commission wireless networking equipment, including access points, antennas, and cabling.
Conduct site surveys and assessments to determine optimal equipment placement and coverage patterns.
Perform acceptance testing and commissioning of wireless networks according to design specifications.
Troubleshoot network issues and perform corrective actions to restore service.
Document installation and testing procedures, as-built configurations, and equipment inventory.
Provide training and support to end-users and customers as needed.`
  },
  {
    id: 14,
    title: "Wireless Security Engineer",
    popupData: `Qualifications Bachelor's degree or higher in Computer Science, Information Security, or related field. Specialization or certification in wireless security (e.g., CWSP, CCNP Security). Experience in designing, implementing, and managing wireless security solutions. Knowledge of wireless networking protocols, encryption algorithms, and authentication methods. Strong understanding of network security principles and best practices. Roles and Responsibilities

Design and implement security measures to protect wireless networks from unauthorized access, intrusion, and exploitation.
Conduct security assessments and audits of wireless networks to identify vulnerabilities and risks.
Develop and enforce security policies, procedures, and controls for wireless network infrastructure.
Configure and manage security appliances, such as firewalls, intrusion detection/prevention systems (IDS/IPS), and authentication servers.
Monitor network traffic and security logs for suspicious activity and security incidents.
Stay updated on emerging threats and security technologies to proactively mitigate risks.`
  },
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4'>

     <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>In the Telecommunications & Wireless Networking sector, professionals drive global connectivity through cutting-edge technology. Engineers design and optimize wireless networks, ensuring seamless communication across vast distances. Technicians install and maintain infrastructure, guaranteeing reliable service for users worldwide. Additionally, cybersecurity experts protect networks from evolving threats, safeguarding sensitive data and privacy. Sales and marketing professionals promote new technologies, fostering innovation and market expansion. Careers in this dynamic field offer opportunities to shape the future of communication and connectivity, making a profound impact on how people connect and interact in the digital age.</h2>
            <Jobcard services={services} />
    </section>
          <MissionVision/>
    </>
  )
}

export default page