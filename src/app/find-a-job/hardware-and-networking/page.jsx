import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import Jobcard from '@/components/custom/Jobcard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Hardware and Networking",
    description: "Forge Hire is a premier staffing agency that provides temporary and permanent staffing solutions to businesses, bridging the gap between talent and opportunity.",
    bgImage: "/heroImages/hardware-and-networking.jpg"
  }
  const services = [
    {
      id: 1,
      title: "Network Security Specialist",
      popupData: `Qualifications Bachelor’s degree in Computer Science, Information Technology, or related field. Relevant certifications such as CISSP, CompTIA Security+, or Certified Ethical Hacker (CEH). Strong understanding of network protocols, firewalls, intrusion detection systems, and encryption technologies. Experience with security assessment tools and techniques. Excellent analytical and problem-solving skills. Roles and Responsibilities

Implement and maintain network security measures to protect against unauthorized access, data breaches, and cyber threats.
Monitor network traffic for suspicious activity and security incidents.
Conduct security assessments and penetration testing to identify vulnerabilities and weaknesses in network infrastructure.
Develop and enforce security policies, procedures, and best practices.
Respond to security incidents and breaches, including incident investigation and remediation.
Provide security awareness training to employees and stakeholders.
Stay current with industry trends, emerging threats, and security technologies.`
    },
    {
      id: 2,
      title: "Network Administrator",
      popupData: `Qualifications Bachelor’s degree in Computer Science, Information Technology, or related field. Certification such as Cisco Certified Network Associate (CCNA) or CompTIA Network+. Proficiency in network protocols, routing, switching, and network security principles. Experience with network monitoring and troubleshooting tools. Strong problem-solving and communication skills. Roles and Responsibilities

Install, configure, and maintain network hardware, software, and infrastructure components.
Monitor network performance, availability, and security.
Troubleshoot network issues and perform root cause analysis.
Implement network upgrades, patches, and security updates.
Manage user accounts, permissions, and access controls.
Provide technical support and assistance to end-users and IT teams.
Document network configurations, procedures, and troubleshooting steps.`
    },
    {
      id: 3,
      title: "Hardware Engineer",
      popupData: `Qualifications Bachelor’s degree in Electrical Engineering, Computer Engineering, or related field. Strong knowledge of digital and analog circuits, microprocessors, and semiconductor devices. Proficiency in computer-aided design (CAD) software for hardware design and simulation. Experience with hardware prototyping, testing, and debugging. Excellent problem-solving and analytical skills. Roles and Responsibilities

Design and develop hardware components and systems, including circuit boards, processors, and peripherals.
Perform schematic design, PCB layout, and simulation using CAD tools.
Prototype, test, and validate hardware designs to ensure functionality and performance.
Collaborate with cross-functional teams, including software engineers, to integrate hardware and software components.
Conduct design reviews and provide technical expertise and support throughout the product development lifecycle.
Troubleshoot hardware issues and implement design improvements.`
    },
    {
      id: 4,
      title: "Systems Administrator",
      popupData: `Qualifications Bachelor’s degree in Computer Science, Information Technology, or related field. Certification such as Microsoft Certified Systems Administrator (MCSA) or Linux Professional Institute Certification (LPIC). Proficiency in operating systems such as Windows Server, Linux, and Unix. Experience with system administration tools and technologies. Strong troubleshooting and problem-solving skills. Roles and Responsibilities

Install, configure, and maintain server hardware, operating systems, and software applications.
Monitor system performance, availability, and security.
Troubleshoot system issues and perform root cause analysis.
Implement system upgrades, patches, and security updates.
Manage user accounts, permissions, and access controls.
Backup and restore data, and implement disaster recovery plans.
Document system configurations, procedures, and troubleshooting steps.`
    },
    {
      id: 5,
      title: "IT Support Specialist",
      popupData: `Qualifications Associate’s degree or certification in Information Technology, Computer Science, or related field. Experience in technical support or help desk role. Knowledge of computer hardware, software, and operating systems. Strong customer service and communication skills. Ability to troubleshoot and resolve technical issues. Roles and Responsibilities

Provide technical support and assistance to end-users via phone, email, or in-person.
Diagnose and resolve hardware, software, and network problems.
Install, configure, and upgrade computer systems and software.
Assist with user account management, permissions, and access controls.
Escalate complex issues to higher-level support teams or vendors.
Document support requests, resolutions, and troubleshooting steps.
Provide training and guidance to end-users on IT systems and applications.`
    },
    {
      id: 6,
      title: "Network Engineer",
      popupData: `Qualifications Bachelor’s degree in Computer Science, Information Technology, or related field. Certification such as Cisco Certified Network Professional (CCNP) or Juniper Networks Certified Internet Specialist (JNCIS). Strong knowledge of network protocols, routing, switching, and security. Experience with network design, implementation, and optimization. Excellent problem-solving and analytical skills. Roles and Responsibilities

Design, implement, and manage enterprise network infrastructure, including routers, switches, firewalls, and VPNs.
Configure and optimize network performance, availability, and security.
Monitor network traffic, bandwidth utilization, and performance metrics.
Troubleshoot network issues and perform root cause analysis.
Implement network upgrades, patches, and security updates.
Collaborate with cross-functional teams to integrate network solutions with other IT systems.
Document network configurations, procedures, and troubleshooting steps.`
    },
    {
      id: 7,
      title: "Systems Engineer",
      popupData: `Qualifications Bachelor’s degree in Computer Science, Information Technology, or related field. Certification such as Microsoft Certified Systems Engineer (MCSE) or Red Hat Certified Engineer (RHCE). Proficiency in operating systems, server hardware, virtualization, and storage technologies. Experience with system design, implementation, and optimization. Strong problem-solving and analytical skills. Roles and Responsibilities

Design, deploy, and maintain enterprise-level systems infrastructure, including servers, storage, and virtualization platforms.
Configure and optimize system performance, availability, and security.
Implement system upgrades, patches, and security updates.
Troubleshoot system issues and perform root cause analysis.
Develop and maintain system documentation, procedures, and best practices.
Collaborate with cross-functional teams to integrate systems with other IT infrastructure components.
Stay current with industry trends, emerging technologies, and best practices in systems engineering.`
    },
    {
      id: 8,
      title: "IT Manager",
      popupData: `Qualifications Bachelor’s degree in Computer Science, Information Technology, or related field. Several years of experience in IT management or leadership roles. Strong technical background in hardware, networking, and systems administration. Excellent leadership, communication, and project management skills. Knowledge of ITIL, COBIT, or other IT governance frameworks. Roles and Responsibilities

Plan, coordinate, and oversee IT operations, including infrastructure, systems, and support services.
Develop and implement IT strategies, policies, and procedures to align with business objectives.
Manage IT budgets, resources, and vendor relationships.
Lead IT projects and initiatives, from planning and execution to monitoring and evaluation.
Ensure compliance with regulatory requirements and industry standards.
Provide leadership and mentorship to IT staff, fostering a culture of innovation, collaboration, and continuous improvement.
Stay updated on emerging technologies, trends, and best practices in IT management.`
    },

  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>In the hardware and networking industry, professionals play pivotal roles in building and maintaining the digital infrastructure that powers modern society. Skilled technicians install and troubleshoot hardware components, ensuring smooth operation of computer systems and networks. Meanwhile, network engineers design and optimize complex networks to support data transmission and communication. Cybersecurity experts protect these systems from cyber threats, safeguarding sensitive information. Additionally, sales and marketing teams promote hardware and networking solutions, driving innovation and growth in the industry. Careers in this dynamic field offer opportunities to contribute to technological advancement and address evolving connectivity needs.</h2>
        <Jobcard services={services} />
      </section>
            <MissionVision/>
    </>
  )
}

export default page