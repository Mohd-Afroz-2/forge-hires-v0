"use client"
import React, { useState } from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import ServiceCard from '@/components/custom/ServiceCard'
import MissionVision from '@/components/custom/MissionVision'

const Page = () => {
  const [selectedData, setSelectedData] = useState(null)
  const heroData = {
    title: "Product Development",
    description: "Transform your vision into reality with our expert design, engineering, and product lifecycle management services.",
    bgImage: "/heroImages/product-development.png"
  }

  const services = [
    {
      id: 1,
      title: "Web Applications",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Forge Hires  Now develops web applications tailored to clients' needs. Our technical team simplifies the process and explains technical aspects clearly.

They outline how requests are processed, starting with the web server handling backend logic. The response is then sent back to the browser for display.

Despite this simplicity, web applications have intricate architectures with multiple layers. Requests pass through these layers before reaching the server.
`

    },
    {
      id: 2,
      title: "LMS (Learning Management System)",
      description: "Finding top-tier leadership for your organization.",
      popupData: `ForgeHire develops customized Learning Management Systems (LMS) for businesses, schools, universities, and educational institutions seeking online training solutions. Our cloud-based PN-LMS product is user-friendly, efficiently training entire workforces online.

Our LMS development service involves:

Gathering requirements through Request for Information (RFI). Design and development, followed by coding after design approval. Comprehensive testing and quality assurance. Deployment to client servers, with training and support provided. Our expertise in e-learning software development has benefitted numerous companies in the US and MEA regions, recognizing the advantages of e-learning.


`

    },
    {
      id: 3,
      title: "ATS",
      description: "Finding top-tier leadership for your organization.",
      popupData: `What is an Applicant Tracking System (ATS)?

An applicant tracking system (ATS) is a powerful tool designed to enhance candidate tracking throughout the entire recruitment process. Forge Hires  Now extends the services of installing and training the ATS to those recruiting companies to speed the recruiting process. There are various softwares available for this process. Recruit is a one such ATS to manage your end-to-end recruitment right from talent search to onboarding your new hire.`

    },
    {
      id: 4,
      title: "API Services",
      description: "Finding top-tier leadership for your organization.",
      popupData: `ForgeHire develops API as per the needs of clients. Our technical team in briefs explains some of the technical aspects of applications to our clients.

API stands for Application Programming Interface. It is a collection of communication protocols and subroutines used by various programs to communicate between them. A programmer uses different API tools to make their program easier and simpler and also, an API facilitates programmers with an efficient way to develop their software programs.

`

    },


  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />

      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>ForgeHire provides Product support to our clients and business. Our clients need these services to maintain and upgrade updated systems and technology.<br />
          <br />ForgeHire extends these services as per the request of the clients. These services vary from providing the software as listed below. ForgeHire also maintain these technology service programs by a service contract or AMC as per the business understanding of the client.<br />
          <br />All of these constitute product support. They are designed to ensure that customers obtain the most value from use of the product after the sale. Such factors as heightened customer awareness and higher expectations about support levels, reduced ability to perceive product differentiation through superior technology and/or features, and improvements in support methodology have greatly increased the importance of product support in company strategy.<br />
          <br />ForgeHire identifies of customer expectations regarding product support and the development of cost-effective strategies for meeting those expectations is, these authors demonstrate, a major facet of successful marketing today.<br />ForgeHire also undertakes maintenance services only of software existing with the clients and upgrades as when required and provides any other technical services as per needs and demand of the market. ForgeHire also provides the update the new software that are available in the market and gives a complete cost-effective model to our client when ever a new software appears in the main.</h2>
        <ServiceCard services={services} />
      </section>
      <MissionVision />
    </>
  )
}

export default Page