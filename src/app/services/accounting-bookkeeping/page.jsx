"use client"
import React, { useState } from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import ServiceCard from '@/components/custom/ServiceCard'
import MissionVision from '@/components/custom/MissionVision'

const Page = () => {
  const [selectedData, setSelectedData] = useState(null)

  const heroData = {
    title: "Accounting and Bookkeeping",
    description: "Precise financial record-keeping and tax preparation services to keep your business's finances in perfect order.",
    bgImage: "/heroImages/accounting-bookkeeping.png"
  }
  const services = [
    {
      id: 1,
      title: "Accounting",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Accounting's critical role makes it a cornerstone for various business needs, and our support aligns seamlessly with this significance. Beyond resolving financial challenges, our support includes proactive assessments to identify opportunities for process enhancement, compliance optimization, and strategic alignment with your organizational goals. Our collaborative approach empowers your team with the knowledge and tools necessary to navigate the dynamic landscape of accounting effectively.`

    },
    {
      id: 2,
      title: "Bookkeeping",
      description: "Finding top-tier leadership for your organization.",
      popupData: `The importance of bookkeeping cannot be overstated, as it serves as a fundamental aspect of various financial requirements. Our assistance seamlessly integrates with this critical function, going beyond mere data resolution. We conduct proactive assessments to pinpoint opportunities for process improvement, compliance enhancement, and strategic alignment with your organizational objectives. Through our collaborative approach, we equip your team with the insights and resources needed to navigate the ever-changing landscape of bookkeeping Forge Hires ly.`

    },
    {
      id: 3,
      title: "Budget",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Given its strategic significance, budgeting plays a pivotal role in meeting various business requirements, and ForgeHire seamlessly aligns with this crucial function. In addition to addressing budgetary challenges, our support entails proactive assessments aimed at enhancing processes, improving forecasting accuracy, and strategically aligning with your organizational objectives. Through our collaborative approach, we provide your team with the expertise and resources needed to effectively navigate the dynamic landscape of budgeting, ensuring optimal results for your business.`

    },
    {
      id: 4,
      title: "Account Receivable",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Recognizing the pivotal financial role of accounts receivable in addressing diverse business needs, ForgeHire seamlessly integrates its support with this vital function. In addition to resolving receivables challenges, our assistance encompasses proactive assessments aimed at enhancing processes, optimizing cash flow, and strategically aligning with your organizational objectives. Through our collaborative approach, we equip your team with the expertise and resources required to effectively navigate the dynamic landscape of accounts receivable, ensuring sustained success for your business.

`

    },
    {
      id: 5,
      title: "Account Payables",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Amidst the pivotal role financial services play in both business and personal domains, ForgeHire stands ready to provide seamless support tailored to this vital function. Beyond simply addressing financial challenges, our comprehensive assistance includes proactive assessments geared towards nurturing wealth growth, mitigating risks, and strategically aligning with your financial goals. Through our collaborative approach, we equip you with the expertise and tools necessary to navigate the dynamic landscape of financial services effectively, empowering you to achieve your financial objectives with confidence.

`

    },
    {
      id: 6,
      title: "Financial Services",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Embark on a transformative journey of streamlined HR and finance operations with our specialized Product Support service tailored for Workday. At Forge Hires Now, we understand that Workday is more than an enterprise solution; it's a comprehensive platform reshaping how organizations manage their workforce and financials.

Our dedicated team of Workday experts brings profound expertise in the intricacies of the platform, covering a spectrum from implementation to ongoing support. We provide comprehensive support services designed to ensure a seamless and optimized Workday experience. Whether you're adopting Workday for the first time, troubleshooting, or optimizing existing processes, our support is strategically crafted to elevate your human capital and financial management endeavors.

Workday's adaptability makes it a cornerstone for various organizational needs, and our support aligns seamlessly with this flexibility. Beyond resolving system challenges, our support includes proactive assessments to identify opportunities for process enhancement, workflow optimization, and strategic alignment with organizational goals. Our collaborative approach empowers your team with the knowledge and tools necessary to navigate the dynamic landscape of Workday effectively.

Choose ForgeHire for Workday support that transcends conventional service models. We don't just resolve system challenges; we unlock the full potential of Workday for your organization, fostering efficiency, innovation, and sustained success in your HR and finance management journey.
`
    },
    {
      id: 7,
      title: "Tax Filing",
      popupData: `Our support at ForgeHire seamlessly integrates with the critical role of tax filing in meeting various financial and business requirements. Apart from addressing tax-related challenges, we conduct proactive assessments to optimize deductions, enhance compliance, and strategically align with your financial objectives. Through our collaborative approach, we provide you with the expertise and tools required to effectively navigate the ever-evolving landscape of tax filing, empowering you to achieve your financial goals with confidence.`
    }, {
      id: 8,
      title: "Financial Statements",
      popupData: `Understanding the pivotal role of financial statements in meeting diverse business needs, ForgeHire provides comprehensive support perfectly attuned to their significance. Going beyond addressing reporting challenges, our services include proactive assessments focused on enhancing clarity, optimizing compliance, and strategically aligning with your organizational goals. Through our collaborative approach, we equip your team with the expertise and tools needed to navigate the dynamic landscape of financial statements effectively, fostering greater financial clarity and success.`
    }

  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />

      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>Forge Hires Nows Finance & Accounting division assumes full responsibility for third-party financial services, providing a comprehensive solution for accounting needs.<br />
          <br />Small businesses, startups, and entrepreneurs often face the challenge of finding the right accountant with the necessary skills to handle financial preparation, analysis, bank account management, and invoicing, all at an affordable rate.<br />
          <br />Consequently, many of these businesses opt to outsource their accounting and bookkeeping services. While some believe these tasks should be handled internally, its essential to consider whether the organization truly has the expertise required.<br />
          <br />A staggering 62% of small business owners believe they overpay their taxes, prompting many to outsource accounting and bookkeeping services to third-party providers.</h2>
        <ServiceCard services={services} />
      </section>
      <MissionVision />
    </>
  )
}

export default Page