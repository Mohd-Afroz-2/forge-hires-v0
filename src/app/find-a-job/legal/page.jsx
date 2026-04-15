import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import Jobcard from '@/components/custom/Jobcard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Legal",
    description: "Advance your legal career with positions in top-tier law firms and corporate legal departments.",
    bgImage: "/heroImages/legal.png"
  }
  const services = [
    {
      id: 1,
      title: "Civil Litigation Attorney",
      popupData: `Specializes in civil law, handling non-criminal litigation cases. Represents clients in disputes involving contracts, property, personal injury, and other civil matters. Prepares legal documents, argues cases in court, and negotiates settlements.`
    },
    {
      id: 2,
      title: "Plaintiff Personal Injury Attorney",
      popupData: `Represents clients who have been injured due to negligence or wrongful acts of others. Handles cases involving accidents, medical malpractice, and product liability. Responsible for litigation and seeking compensation for clients.`
    },
    {
      id: 3,
      title: "Plaintiff Employment Attorney",
      popupData: `Focuses on representing employees in cases against employers. Handles issues like wrongful termination, discrimination, and wage disputes. Advises clients on employment rights and litigates to resolve conflicts.`
    },
    {
      id: 4,
      title: "Labor Law Litigation Attorney",
      popupData: `Specializes in labor law, representing either employees or employers in disputes involving workplace rights, union negotiations, and employment laws.`
    },
    {
      id: 5,
      title: "Workers Comp/Insurance Defense Attorney",
      popupData: `Represents insurance companies or employers in workers' compensation cases. Handles claims, disputes, and litigation related to workplace injuries and insurance coverage.`
    },
    {
      id: 6,
      title: "Corporate Law and GA Securities Attorney",
      popupData: `Focuses on corporate law and securities regulation. Advises companies on legal and regulatory aspects of business operations, including mergers, acquisitions, and compliance with securities laws.`
    },
    {
      id: 7,
      title: "Attorney (Complex Civil Defense Experience)",
      popupData: `Handles complex civil litigation cases, often involving multiple parties and significant financial stakes. Specializes in defending clients in intricate legal disputes.`
    },
    {
      id: 8,
      title: "Attorney (Firearms and Ammunition)",
      popupData: `Specializes in legal matters related to firearms and ammunition. Advises clients on compliance with laws, represents them in litigation, and provides counsel on various aspects of firearms law.`
    },
    {
      id: 9,
      title: "Attorney – General Liability",
      popupData: `Handles a wide range of general liability cases, including personal injury, property damage, and negligence. Represents clients in both defense and plaintiff capacities.`
    },
    {
      id: 10,
      title: "Product Liability",
      popupData: `Specializes in product liability cases, focusing on consumer products, automotive components, and medical devices. Represents clients in cases involving defective or harmful products.`
    },
    {
      id: 11,
      title: "Attorney – Family Law",
      popupData: `Focuses on legal issues related to family matters, including divorce, child custody, alimony, and adoption. Represents clients in family courts and provides legal advice on family law issues.`
    },
    {
      id: 12,
      title: "Attorney – Defense Litigation",
      popupData: `Primarily represents defendants in civil litigation cases. Handles a variety of disputes and works to protect clients' interests in court.`
    },
    {
      id: 13,
      title: "Attorney – Deposition",
      popupData: `Specializes in taking and defending depositions in legal cases. Skilled in questioning witnesses and gathering information crucial for litigation.`
    },
    {
      id: 14,
      title: "Associate Attorney - General Commercial Litigation",
      popupData: `Works in general commercial litigation, handling a variety of business-related disputes. Involves in research, drafting legal documents, and representing clients in court.`
    },
    {
      id: 15,
      title: "Senior Associate Attorney – Multiple Areas",
      popupData: `A senior attorney with experience in multiple legal fields. Provides expert legal advice, represents clients in complex cases, and may oversee junior attorneys.`
    },

  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>In the dynamic realm of the legal profession, ForgeHire specializes in empowering attorneys with strategic support. We understand the multifaceted challenges attorneys face, from case preparation to courtroom dynamics. Our tailored solutions encompass legal research, case management, and workflow optimization, ensuring attorneys can navigate their caseloads with efficiency and precision.<br />
          <br />Forge Hires Nows commitment to the legal industry goes beyond conventional support. We facilitate the seamless integration of technology and legal expertise, providing attorneys the tools they need to excel in an ever-evolving legal landscape. Whether you are a solo practitioner or part of a larger firm, our services are designed to elevate your practice, allowing you to focus on what matters most — delivering exceptional legal counsel.</h2>
        <Jobcard services={services} />
      </section>
            <MissionVision/>
    </>
  )
}

export default page