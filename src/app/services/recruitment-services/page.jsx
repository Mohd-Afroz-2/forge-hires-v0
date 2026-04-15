"use client";
import React, { useState } from "react";
import HeroSectionForAll from "@/components/custom/HeroSectionForAll";
import MissionVision from "@/components/custom/MissionVision";
import ServiceCard from "@/components/custom/ServiceCard";

const Page = () => {
  const heroData = {
    title: "Recruitment Services",
    // i want short description
    description:
      "Strategic talent acquisition solutions to help you build high-performing teams with the industry's best candidates.",
    bgImage: "/heroImages/recruitment-services.png",
  };
  const services = [
    {
      id: 1,
      title: "Permanent Employees",
      description: "Finding top-tier leadership for your organization.",
      popupData:
        "Permanent employees are those who work directly for an employer and receive regular payment from them. They can work either part-time or full-time, typically classified as those working 35 or more hours per week by the Bureau of Labor Statistics. Permanent employees often enjoy benefits packages provided by their employers, including paid time off for personal reasons such as vacations, illness, or parental leave. The amount of time off may vary based on factors like job position or tenure. Employers may also offer paid holidays such as Independence Day or Thanksgiving.",
    },
    {
      id: 2,
      title: "Contractual / Freelancers",
      description: "Finding top-tier leadership for your organization.",
      popupData:
        "Contractual employees, also known as independent contractors, freelancers, or work-for-hire staffers, receive a fixed fee for working on a specified timeframe or project. Unlike regular company employees, they are not eligible for benefits. As self-employed individuals, they are responsible for obtaining their insurance and managing retirement savings. Additionally, contract employees pay self-employment taxes.",
    },
    {
      id: 3,
      title: "Remotely Working Employees",
      description: "Finding top-tier leadership for your organization.",
      popupData: `A managed service provider (MSP) oversees business areas to ensure day-to-day operations, serving as strategic partners to enhance efficiency for businesses of all sizes. With a pool of experts, MSPs handle complex processes, providing access to top talent and cutting-edge technology without rapid cost escalation. For instance, amid diverse employee categories and hybrid work models, businesses outsource HR activities to professional employer organizations (PEOs). MSPs commonly manage:

1.Payroll 2.IT services 3.Workforce management 4.Recruitment 5.Vendor and contract management 6.Human resources`,
    },
    {
      id: 4,
      title: "MSP",
      description: "Finding top-tier leadership for your organization.",
      popupData: `A service provider that manages one or more of your business areas to maintain business continuity on a day-to-day basis is a managed service provider. MSPs are used as strategic partners to improve operational efficiency of businesses of all types and sizes from small to medium-sized (SMBs) to government agencies and nonprofit organizations.

Managed service providers have a pool of experts that can handle the most complex business processes. Thus, through MSPs, you get access to the best talent and latest technology available in the market without costs increasing quickly.

For instance, with hybrid work models and multiple categories of employees―full-time, part-time, freelance, contractual and more―in every organization, human resources has become a complex process. So, many businesses choose to outsource their different human resources (HR) activities to professional employer organizations (PEOs).

Business processes that are usually outsourced to a managed service provider includes:

Payroll
IT services and infrastructure.
Workforce management Recruitment
Vendor management
Contract management and compliance.
Human resources
`,
    },
    {
      id: 5,
      title: "Executive Talent Pool",
      description: "Finding top-tier leadership for your organization.",
      popupData:
        "Our executive recruiters possess extensive functional expertise, enabling them to accurately identify and source the most qualified candidates for your CXO, SVP, and VP executive roles. Our focus extends across the C-suite, encompassing roles such as Chief Executive Officer, Chief Operating Officer, Chief Marketing Officer, Chief People Officer, Chief Revenue Officer, Diversity Officer, Chief Customer Officer, Chief Financial Officer, Chief Technical Officer, Chief Product Officer, and more. Additionally, we specialize in sourcing candidates for Vice President roles, including VP of Sales, VP of Marketing, VP of Branding, VP of Business Development, VP of Product, VP of Finance, VP of People, VP of Engineering, VP of Operations, VP of Growth, VP of Customer Success, and numerous others.",
    },
    {
      id: 6,
      title: "Professional Talent Pool",
      description: "Finding top-tier leadership for your organization.",
      popupData:
        "Our team and network specialize in connecting your organization with top management talent, including directors, senior managers, and individual contributors. We cover a range of director roles such as Growth, Revenue, HR/People, Sales, Marketing, Operations, and Product. Additionally, we excel in sourcing candidates for senior manager positions in Marketing, Sales, Business Development, Product, Operations, and HR/People.",
    },
  ];
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className="max-w-7xl mx-auto md:mt-10 mt-4">
        <h2 className="text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify">
          ForgeHire extends its services to employers in various areas,
          including permanent hires, contract employees, freelancers, temporary
          employees, remotely working employees, and executive and professional
          talent search.
          <br />
          Additionally, we offer workforce management services through recruitment
          process outsourcing (RPO) methods, facilitating talent onboarding with
          minimal operational interference.
        </h2>
        <ServiceCard services={services} />
      </section>
      <MissionVision />
    </>
  );
};

export default Page;
