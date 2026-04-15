"use client"
import React, { useState } from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import MissionVision from '@/components/custom/MissionVision'
import ServiceCard from '@/components/custom/ServiceCard'

const Page = () => {
  const [selectedData, setSelectedData] = useState(null)

  const heroData = {
    title: "Payroll Services",
    description: "End-to-end payroll management ensuring your employees are paid accurately and on time, with full compliance.",
    bgImage: "/heroImages/payroll-service.png"
  }
  const services = [
    {
      id: 1,
      title: "Payroll Management",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Embark on a journey of seamless workforce management and strategic financial control with our specialized Product Support service tailored for Payroll Management. At Forge Hires Now, we understand that payroll management is not just about processing salaries; it's the heartbeat of employee satisfaction, legal compliance, and organizational efficiency.

Our dedicated team of payroll management experts brings profound expertise in the intricacies of payroll processing and compliance. From salary disbursement to tax deductions, we provide comprehensive support services designed to ensure a seamless and optimized payroll management experience. Whether you're streamlining payroll workflows, troubleshooting discrepancies, or optimizing existing processes, our support is strategically crafted to elevate your workforce management endeavors.

Payroll management's critical role makes it a cornerstone for various business needs, and our support aligns seamlessly with this significance. Beyond resolving payroll challenges, our support includes proactive assessments to identify opportunities for process enhancement, compliance optimization, and strategic alignment with your organizational goals. Our collaborative approach empowers your team with the knowledge and tools necessary to navigate the dynamic landscape of payroll management effectively.

Choose ForgeHire for payroll management support that transcends conventional service models. We don't just resolve payroll challenges; we unlock the full potential of payroll management for your organization, fostering workforce satisfaction, compliance, and sustained success in your payroll management journey.`

    },
    {
      id: 2,
      title: "Avoiding Conventional Hiring Process",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Commence a streamlined journey of talent acquisition efficiency with our specialized Avoiding Hiring Process service at Forge Hires Now. We understand that bypassing the traditional hiring process requires talent foresight, innovative solutions, and optimized workforce readiness. Our team offers expertise in workforce dynamics, providing proactive talent mapping and strategic succession planning.

Embracing this approach means redefining how you source, nurture, and retain your workforce. Our support offers proactive assessments for skill enhancement and strategic workforce planning, empowering your team for effective talent acquisition. Choose ForgeHire for talent acquisition support that transcends conventional hiring models. We unlock the full potential of strategic talent management, fostering workforce agility, innovation, and sustained success in your talent acquisition journey.`

    },
    {
      id: 3,
      title: "Technology Advantage",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Our dedicated team of technology experts brings profound expertise in harnessing the full potential of cutting-edge tools and solutions. From strategic technology adoption to ongoing support, we provide comprehensive services designed to ensure a seamless and optimized technology advantage. Whether you're navigating digital transformation, troubleshooting tech challenges, or optimizing existing processes, our support is strategically crafted to elevate your technological endeavors.`

    },
    {
      id: 4,
      title: "Focus on Core Business",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Embark on a streamlined journey of business optimization and strategic focus with our specialized Product Support service tailored for Focus on Core Business. At Forge Hires Now, we understand that success lies in concentrating on what you do best – your core business functions – while we handle the intricacies of support services.

Our dedicated team of business optimization experts brings profound expertise in streamlining non-core functions, freeing your organization to channel resources and energy into what truly matters. From outsourcing support services to strategic process optimization, we provide comprehensive support designed to ensure a seamless and optimized focus on your core business. Whether you're streamlining workflows, troubleshooting operational challenges, or optimizing existing processes, our support is strategically crafted to elevate your business endeavors.

Focusing on your core business isn't just about delegating tasks; it's about maximizing your organization's strengths. Our support aligns seamlessly with this efficiency-focused approach, offering proactive assessments to identify opportunities for operational enhancement, cost-effective strategies, and strategic alignment with your organizational goals. Our collaborative approach empowers your team with the knowledge and tools necessary to navigate the dynamic landscape of business optimization effectively.

Choose ForgeHire for support that transcends conventional service models. We don't just provide business support; we unlock the full potential of focusing on your core business, fostering operational efficiency, innovation, and sustained success in your business journey.
`

    },
    {
      id: 5,
      title: "Managing the Shared Services",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Our dedicated team of shared services management experts brings profound expertise in orchestrating the intricate network of shared functions. From centralized support to process standardization, we provide comprehensive services designed to ensure seamless and optimized shared services management. Whether you're consolidating resources, troubleshooting operational challenges, or optimizing existing processes, our support is strategically crafted to elevate your shared services endeavors.

Managing shared services isn't just about centralizing tasks; it's about strategically aligning shared functions to enhance overall organizational performance. Our support aligns seamlessly with this efficiency-focused approach, offering proactive assessments to identify opportunities for process enhancement, cost-effective strategies, and strategic alignment with your organizational goals. Our collaborative approach empowers your team with the knowledge and tools necessary to navigate the dynamic landscape of managing shared services effectively.`

    },
    {
      id: 6,
      title: "Cost Savings",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Discover fiscal prudence and strategic financial management with our specialized Cost Savings service at Forge Hires Now. We recognize that cost savings go beyond expense reduction; they're about maximizing efficiency, optimizing resources, and ensuring financial sustainability. Our expert team identifies fiscal optimization opportunities, providing comprehensive support for seamless cost-saving strategies. From expense audits to process optimization, we empower your organization with proactive assessments and strategic alignment to drive fiscal responsibility, innovation, and sustained success.
`
    },
    {
      id: 7,
      title: "Time Management of the Company",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Dive into optimized workflows and strategic time management with our specialized Product Support service for Time Management of the Company. At Forge Hires Now, we recognize time as a critical factor influencing organizational productivity and success. Our expert team orchestrates efficient workflows and strategic time allocation, ensuring seamless and optimized time management across various organizational functions. From enhancing project timelines to troubleshooting delays, our support elevates productivity and efficiency. Choose ForgeHire for time management support that unlocks the full potential of streamlined operations, fostering innovation and sustained success in your organizational journey.`
    }, {
      id: 8,
      title: "Professional Services",
      poupData: `Embark on a journey of strategic expertise and comprehensive support with our specialized Product Support service for Professional Services at Forge Hires Now. We recognize professional services as a commitment to excellence and client success. Our expert team navigates client interactions and service delivery complexities, ensuring seamless and optimized experiences. Whether enhancing client relationships or troubleshooting challenges, our support elevates professional services endeavors. Choose ForgeHire for support that unlocks the full potential of professional services, fostering client satisfaction and sustained success in your business journey.
`
    }

  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />

      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>Embark on seamless workforce management with our specialized Payroll Management service at Forge Hires Now. Our experts ensure efficient salary processing and compliance, empowering your team with tools for success. Beyond resolving challenges, we proactively assess opportunities for process enhancement and compliance optimization, fostering workforce satisfaction and sustained success in your payroll journey.<br /><br />Choose ForgeHire for payroll support that transcends conventional service models. Our collaborative approach empowers your team with knowledge and tools, ensuring efficient salary processing and compliance while fostering workforce satisfaction and sustained success in your payroll journey.</h2>
        <ServiceCard services={services} />
      </section>
      <MissionVision />
    </>
  )
}

export default Page