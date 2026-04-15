"use client"
import React, { useState } from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import Button from '@/components/custom/Button'
import { BUTTONS } from '@/theme/styles'
import Jobcard from '@/components/custom/Jobcard'
import MissionVision from '@/components/custom/MissionVision'

const Page = () => {
  const heroData = {
    title: "Accounting",
    description: "Connect with top financial firms and accounting roles that match your expertise and career goals.",
    bgImage: "/heroImages/accounting.jpg"
  }

  const services = [
    {
      id: 1,
      title: "Accountant",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Qualifications: Bachelor’s degree in Accounting or Finance, CPA certification preferred. Proficiency in accounting principles and regulations.

Roles and Responsibilities:

Maintain financial records accurately.
Analyze financial information for accuracy and compliance.
Prepare and file tax returns.
Assist in budgeting and forecasting.
 Handle accounts payable and accounts receivable tasks.`

    },
    {
      id: 2,
      title: "Accounting Manager",
      description: "",
      popupData: `Qualifications: Bachelor’s degree in Accounting or Finance, CPA certification preferred. Proven experience in accounting leadership.

Roles and Responsibilities:

Oversee daily operations of the accounting department.
Supervise accounting staff, ensuring theaccuracy of financial records.
Develop and implement accounting policies and procedures.
Prepare financial reports for senior management.
Coordinate with external auditors during audits. 

`

    },
    {
      id: 3,
      title: "Financial Analyst",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Qualifications: Bachelor’s degree in Finance, Accounting, Economics, or related field. Strong analytical and communication skills.

Roles and Responsibilities:

Analyze financial data and trends to offer insights and recommendations.
Prepare financial models and forecasts.
Conduct variance analysis and identify improvement areas.
Assist in financial planning and budgeting.
Prepare presentations for management and stakeholders.`

    },
    {
      id: 4,
      title: "Accounting Clerk",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Qualifications: High school diploma or equivalent. Some college coursework in accounting or related field may be preferred

Roles and Responsibilities:

Assist with accounts payable and accounts receivable tasks.
Maintain and update financial records in databases.
Prepare invoices and process payments.
Assist with basic bookkeeping tasks.

`

    },
    {
      id: 5,
      title: "Accounts Payable",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Qualifications: High school diploma or equivalent. Experience in accounts payable or general accounting preferred.

Roles and Responsibilities:

Process vendor invoices, ensuring accuracy.
Reconcile accounts payable transactions.
Prepare and process payments to vendors.
Address vendor inquiries and resolve discrepancies.
Maintain accurate records of accounts payable transactions.
`

    },
    {
      id: 6,
      title: "Auditor",
      description: "Finding top-tier leadership for your organization.",
      popupData: `Qualifications: Bachelor’s degree in Accounting, Finance, or related field. CPA or CIA certification preferred.

Roles and Responsibilities:

Conduct internal audits to assess financial processes and controls.
Review financial statements and reports for accuracy and compliance.
Identify areas of risk or inefficiency and provide improvement recommendations.
Prepare audit reports and communicate findings to management.
Coordinate with external auditors during external audits.
`

    },
      {
    id: 7,
    title: "CFO",
    popupData: `Qualifications: Master’s degree in Finance, Accounting, or Business Administration. CPA or CFA certification preferred. Extensive experience in financial leadership roles.

Roles and Responsibilities:

Develop and implement financial strategies to support company goals.
Oversee financial planning, budgeting, and forecasting.
Manage financial risk and ensure compliance with regulations.
Provide strategic financial analysis and guidance to senior management.
Oversee financial reporting and communicate financial performance to stakeholders.`

  },
  {
    id: 8,
    title: "Bookkeeper",
    popupData: `Qualifications: High school diploma or equivalent. Associate’s degree in accounting or related field may be preferred.

Roles and Responsibilities:

Record financial transactions in accounting software.
Reconcile bank statements and prepare financial reports.
Assist with accounts payable and accounts receivable tasks.
Maintain accurate financial transaction records.
Prepare basic financial statements.

`

  },
  {
    id: 9,
    title: "Management Accounting",
    popupData: `Qualifications: Bachelor’s degree in Accounting, Finance, or a related field. CPA or CMA certification preferred.

Roles and Responsibilities:

Analyze financial data to support management decision-making.
Prepare budgets and forecasts for different departments or projects.
Monitor and report on financial performance against budgets.
Provide financial analysis and insights to help improve efficiency and profitability.
Collaborate with management to develop strategies for achieving financial goals.`

  },
  {
    id: 10,
    title: "Senior Accountant",
    popupData: `Qualifications: Bachelor’s degree in Accounting or Finance, CPA certification preferred. Several years of experience in accounting roles

Roles and Responsibilities:

Prepare and review financial statements and reports.
Supervise and mentor junior accounting staff.
Assist with month-end and year-end close processes.
Conduct financial analysis and provide insights to management.

`

  },
  

  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>The accounting industry sector encompasses a broad range of professional services focused on financial management, reporting, and analysis. Accounting firms and professionals play a vital role in ensuring the accuracy and integrity of financial records for businesses, government agencies, nonprofit organizations, and individuals. Services offered include auditing, tax preparation and planning, financial consulting, budgeting, and forensic accounting. With the advent of digital technology, accounting has evolved to incorporate data analytics, cloud computing, and automation tools, enhancing efficiency and decision-making. Regulatory compliance, financial transparency, and strategic financial management are key drivers shaping the industrys growth and adaptation to changing economic landscapes.</h2>
        <Jobcard services={services} />
      </section>
      <MissionVision/>
    </>
  )
}

export default Page