"use client"
import React, { useState } from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import ServiceCard from '@/components/custom/ServiceCard'
import MissionVision from '@/components/custom/MissionVision'

const Page = () => {
  const [selectedData, setSelectedData] = useState(null)
  const heroData = {
    title: "Product Support",
    description: "Dedicated 24/7 technical support and maintenance to ensure your products deliver maximum uptime and reliability.",
    bgImage: "/heroImages/product-support.png"
  }
  const services = [
    {
      id: 1,
      title: "Salesforce",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Step into a realm of unparalleled support with our dedicated Product Support service, meticulously designed to cater to the dynamic and intricate Salesforce ecosystem. As a cornerstone of our offerings, our Salesforce support is not just a service;
    
    it's a commitment to optimizing your Salesforce experience for maximum efficiency and impact.
    
    Our expert team is well-versed in every facet of Salesforce, from implementation to ongoing support and troubleshooting. We understand that Salesforce is not just a tool; it's a strategic enabler for businesses, and our support reflects this understanding. Whether you're navigating the complexities of initial implementation or fine-tuning an existing Salesforce setup, our support services are tailored to suit your unique needs.
    
    Our commitment to excellence extends beyond mere issue resolution. We proactively assess your Salesforce environment, identifying opportunities for enhancement and optimization. We believe in empowering your team with the knowledge and tools necessary to leverage Salesforce fully. Our collaborative approach ensures that our support is not just a fix for today but an investment in the sustained success of your Salesforce-powered operations.<
    
    Choose ForgeHire for Salesforce support that goes beyond the ordinary – a service that aligns seamlessly with your business goals, driving innovation, efficiency, and enduring success through every stage of your Salesforce journey.`

    },
    {
      id: 2,
      title: "ServiceNow",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Embark on a transformative journey with our dedicated Product Support service, specifically tailored for ServiceNow. At Forge Hires Now, we recognize that ServiceNow is not just a platform; it's a linchpin for businesses aiming for operational excellence and digital transformation.

Our seasoned experts bring an in-depth understanding of the ServiceNow landscape, offering comprehensive support from implementation to ongoing maintenance. We understand that ServiceNow is a pivotal force in streamlining workflows, fostering collaboration, and enhancing user experiences. Hence, our support services are crafted to align with your unique needs, ensuring a seamless and optimized ServiceNow experience.

Beyond issue resolution, our support spans proactive assessment and strategic guidance. We delve into your ServiceNow environment, identifying opportunities for enhancement and optimization. Our collaborative approach doesn't just resolve today's challenges; it equips your team with the knowledge and tools for future success.

Choose ForgeHire for ServiceNow support that transcends traditional service models. Our commitment is to empower your business with ServiceNow's full potential, driving efficiency, innovation, and sustained success throughout your digital transformation journey.`

    },
    {
      id: 3,
      title: "Java",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Embark on a journey of unparalleled technical proficiency with our specialized Product Support service, tailored specifically for Java. At Forge Hires Now, we recognize Java as more than a programming language—it's a cornerstone of robust, scalable, and innovative software development.

Our dedicated team of Java experts brings an extensive understanding of the language and its ecosystem. From application development to system integration, we offer comprehensive support services covering the entire Java spectrum. Whether you're initiating a project, troubleshooting, or optimizing existing Java applications, our support is strategically designed to elevate your development endeavors.

Java's versatility makes it a linchpin for various software solutions, and our support mirrors this adaptability. We not only resolve coding challenges but also offer proactive assessments to identify opportunities for code enhancement, performance optimization, and security fortification. Our collaborative approach is rooted in empowering your team with the knowledge and tools necessary for navigating Java's dynamic landscape.

Choose ForgeHire for Java support that extends beyond conventional assistance. We don't just resolve coding challenges; we unlock the full potential of Java for your projects, fostering efficiency, innovation, and sustained success in your software development journey.`

    },
    {
      id: 4,
      title: "DevOps",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Embark on a transformative journey of operational excellence with our specialized Product Support service tailored for DevOps. At Forge Hires Now, we understand that DevOps is not just a methodology; it's a cultural shift driving efficiency, collaboration, and continuous improvement in software development and operations.

Our seasoned DevOps experts bring a deep understanding of the entire development lifecycle, from code inception to deployment and monitoring. We provide comprehensive support services, ensuring seamless integration of development and operations. Whether you're adopting DevOps practices, troubleshooting, or optimizing existing processes, our support is strategically designed to enhance collaboration and accelerate your software delivery.

DevOps is more than a set of practices; it's a philosophy of continuous improvement. Our support goes beyond issue resolution, encompassing proactive assessments to identify areas for automation, efficiency gains, and enhanced collaboration. We collaborate closely with your team, ensuring they not only overcome immediate challenges but also gain the insights and tools necessary for long-term success in the DevOps landscape.

Choose ForgeHire for DevOps support that transcends conventional service models. We don't just resolve issues; we empower your teams to embrace DevOps principles fully, fostering innovation, efficiency, and sustained success in your software development and delivery journey.


`

    },
    {
      id: 5,
      title: "DotNet",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Embark on a transformative journey of dynamic software development with our specialized Product Support service tailored for Dotnet. At Forge Hires Now, we recognize Dotnet as more than a framework; it's a robust, versatile platform that powers innovative and scalable applications across various domains.

Our dedicated team of Dotnet experts brings profound expertise in the intricacies of the framework, covering a spectrum from application development to system integration. We provide comprehensive support services designed to ensure a seamless and optimized Dotnet experience. Whether you're initiating a project, troubleshooting, or optimizing existing Dotnet applications, our support is strategically crafted to elevate your development endeavors.

Dotnet's versatility makes it a cornerstone for various software solutions, and our support aligns seamlessly with this adaptability. Beyond resolving coding challenges, our support includes proactive assessments to identify opportunities for code enhancement, performance optimization, and security fortification. Our collaborative approach empowers your team with the knowledge and tools necessary to navigate the dynamic landscape of Dotnet effectively.

Choose ForgeHire for Dotnet support that goes beyond conventional service models. We don't just resolve coding challenges; we unlock the full potential of Dotnet for your projects, fostering efficiency, innovation, and sustained success in your software development journey.`

    },
    {
      id: 6,
      title: "Workday",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Embark on a transformative journey of streamlined HR and finance operations with our specialized Product Support service tailored for Workday. At Forge Hires Now, we understand that Workday is more than an enterprise solution; it's a comprehensive platform reshaping how organizations manage their workforce and financials.

Our dedicated team of Workday experts brings profound expertise in the intricacies of the platform, covering a spectrum from implementation to ongoing support. We provide comprehensive support services designed to ensure a seamless and optimized Workday experience. Whether you're adopting Workday for the first time, troubleshooting, or optimizing existing processes, our support is strategically crafted to elevate your human capital and financial management endeavors.

Workday's adaptability makes it a cornerstone for various organizational needs, and our support aligns seamlessly with this flexibility. Beyond resolving system challenges, our support includes proactive assessments to identify opportunities for process enhancement, workflow optimization, and strategic alignment with organizational goals. Our collaborative approach empowers your team with the knowledge and tools necessary to navigate the dynamic landscape of Workday effectively.

Choose ForgeHire for Workday support that transcends conventional service models. We don't just resolve system challenges; we unlock the full potential of Workday for your organization, fostering efficiency, innovation, and sustained success in your HR and finance management journey.
`
    },
    {
      id: 7,
      title: "Airtable",
      description: ``,
      popupData: `Embark on a journey of dynamic collaboration and streamlined data management with our specialized Product Support service tailored for Airtable. At Forge Hires Now, we understand that Airtable is more than just a database; it's an agile and user-friendly platform that redefines how teams organize, collaborate, and work with data.

Our dedicated team of Airtable experts brings profound expertise in maximizing the potential of this versatile platform. From database design to workflow automation, we provide comprehensive support services designed to ensure a seamless and optimized Airtable experience. Whether you're initiating a project, troubleshooting, or optimizing existing workflows, our support is strategically crafted to elevate your data management endeavors.

Airtable's adaptability makes it a cornerstone for various teams and projects, and our support aligns seamlessly with this flexibility. Beyond resolving technical challenges, our support includes proactive assessments to identify opportunities for process enhancement, workflow optimization, and strategic alignment with your organizational goals. Our collaborative approach empowers your team with the knowledge and tools necessary to harness the full capabilities of Airtable effectively.

Choose ForgeHire for Airtable support that transcends conventional service models. We don't just resolve technical challenges; we unlock the full potential of Airtable for your projects, fostering efficiency, collaboration, and sustained success in your data management journey.`,
    },
    {
      id: 8,
      title: `Low Code Tools 
      (Partnerships/
      Collaborations)`,
      description: ``,
      popupData: `Embark on a transformative journey of rapid application development and seamless collaborations with our specialized Product Support service tailored for Low Code Tools, driven by partnerships and collaborations. At Forge Hires Now, we recognize that Low Code Tools are more than just a development approach; they're a catalyst for innovation, empowering organizations to build applications swiftly and foster dynamic collaborations.

Our dedicated team of Low Code Tools experts brings profound expertise in leveraging strategic partnerships and collaborations to maximize the potential of these agile platforms. From rapid application prototyping to full-scale deployment, we provide comprehensive support services designed to ensure a seamless and optimized experience with Low Code Tools. Whether you're initiating a project, troubleshooting, or optimizing existing applications, our support is strategically crafted to elevate your development endeavors.

Low Code Tools' adaptability makes them a cornerstone for various business needs, and our support aligns seamlessly with this flexibility. Beyond resolving technical challenges, our support includes proactive assessments to identify opportunities for process enhancement, workflow optimization, and strategic alignment with your organizational goals. Our collaborative approach empowers your team with the knowledge and tools necessary to harness the full capabilities of Low Code Tools effectively.

Choose ForgeHire for Low Code Tools support driven by partnerships and collaborations that transcend conventional service models. We don't just resolve technical challenges; we unlock the full potential of Low Code Tools for your projects, fostering efficiency, innovation, and sustained success in your application development journey.


`,
    }

  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />

      <section className='max-w-7xl mx-auto md:mt-10 mt-4 '>
        <h2 className='text-xs md:text-base lg:text-lg md:px-10 px-4 text-justify'>ForgeHire provides Product support to our clients and business. Our clients need these services to maintain and upgrade updated systems and technology.<br />
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