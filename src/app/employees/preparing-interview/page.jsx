import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import MissionVision from '@/components/custom/MissionVision'
import ServiceCard from '@/components/custom/ServiceCard'

const page = () => {
  const heroData = {
    title: "Preparing Interview",
    description: "Gain the confidence to succeed with professional tips on interview techniques and common pitfalls.",
    bgImage: "/heroImages/preparing-interview.png"
  }
  const services = [
  {
    id: 1,
    title: "Research the Company",
    popupData: `Many hiring managers interested to know whether candidates know about the company to which they are interviewing. So prepare in advance about the basic details about the company, organogram, Sales turn over, different departments, Certifications.

Take some time to review the company’s products and services. You need at least a general idea of how the business makes money; that’s a must. Additionally, head to the company’s website and review its mission, Vision and values statements. This gives you major clues about the organization’s priorities and culture.

Also, head to the company’s social media page for more insights, as well as details about its recent achievements or newsworthy events. The more company-specific details you can work into your interview answers, the better. It shows you went the extra mile to learn about them, and that can help you stand out from the crowd.`
  },
  {
    id: 2,
    title: "Practice your Interview Questions",
    popupData: `One of the best ways to start is to learn about the different kinds of interview questions. Common Questions like:

Tell me about Your self
What are motivating factors to work with our company
While we took a deep dive into the STAR Method before, here’s an overview. STAR stands for Situation, Task, Action, and Results

Tailoring Method - It’s an approach that makes the hiring manager and company the priority, not you. It’s about positioning yourself as a solution to the problem the hiring manager is trying to solve (which, by the way, is finding the ideal candidate for the job they need to fill). That makes the Tailoring Method a competitive advantage, as not all job seekers are going to go that extra mile.`
  },
  {
    id: 3,
    title: "Reread the Job Description",
    popupData: `You may want to print it out and begin underlining specific skills the employer is looking for. Think about examples from your past and current work that align with these requirements.`
  },
  {
    id: 4,
    title: "STAR method - Tell stories with a clear Situation, Task, Action and Result",
    popupData: `One of the best ways to start is to learn about the different kinds of interview questions. Common Questions like:

Tell me about Your self
What are motivating factors to work with our company
While we took a deep dive into the STAR Method before, here’s an overview. STAR stands for Situation, Task, Action, and Results

Tailoring Method - It’s an approach that makes the hiring manager and company the priority, not you. It’s about positioning yourself as a solution to the problem the hiring manager is trying to solve (which, by the way, is finding the ideal candidate for the job they need to fill). That makes the Tailoring Method a competitive advantage, as not all job seekers are going to go that extra mile.


`
  },
  {
    id: 5,
    title: "Plan to Arrive 10–15 Minutes Early",
    popupData: `Map out your route to the interview location so you can be sure to arrive on time. Consider doing a practice run before your interview day. If you’re taking public transportation, identify a backup plan if there are delays or closures.`
  },
  {
    id: 6,
    title: "Make a Great First Impression",
    popupData: `Don’t forget the little things—shine your shoes, make sure your nails are clean and tidy, and check your clothes Properly Ironed, without stains and loose threads. Keep always Smile on your face.`
  },
  {
    id: 7,
    title: "Respond Truthfully",
    popupData: `While it can seem tempting to embellish your skills and accomplishments, interviewers find honesty refreshing and respectable. Focus on your key strengths and why your background makes you uniquely qualified for the position.`
  },
  {
    id: 8,
    title: "Answers Precise and Focused",
    popupData: `Your time with each interviewer is limited so keep your answers brief with real life situations and as many examples as possible. Practicing your answers beforehand can help keep you focused.`
  },
  {
    id: 9,
    title: "Always Use Technical Words",
    popupData: `Always use technical words rather than generalizing. For example, in an Quality controller interview you can the technical words of Quality Inspection, Acceptable Quality Level (AQL), Average outgoing quality (AOQ), Statistical Quality Control (SQL)

Purchasing: lead time, Request for Quotation, Sourcing techniques, Forward Buying, Win-Win, BOM, Blanket Order.
`
  },
  {
    id: 10,
    title: "Don't Speak Negatively About Previous Employers",
    popupData: `If you’re feeling discouraged about your current job, focus on what you’ve gained from the experience and what you want to do next.
`
  },
  {
    id: 11,
    title: "Ask About Next Steps",
    popupData: `After your interview, it's appropriate to ask either your interviewer, hiring manager or recruiter about what you should expect next. This will likely be a follow-up email with results from your interview, along with additional requirements like an assignment or reference list or another interview.
`
  },
  {
    id: 12,
    title: "Send a Thank-You Letter after the Interview",
    popupData: `If your interview is in person, ask for the business card of each person you speak with so you can follow up individually with a separate thank-you email. If you interviewed in the morning, send your follow-up emails the same day. If you interviewed in the afternoon, the next morning is fine.`
  },
  
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4 '>

          <h2 className='text-xs md:text-base lg:text-lg md:px-10 px-4 text-justify'>An upcoming interview is an exciting opportunity to explore a new career path and get to know a company you’re interested in working for. No matter what kind of interview you’ll be participating in, from initial screenings to case interviews, it’s important to prepare carefully.<br/>

<br/>Engaging in this process can bolster your confidence in your skills, your potential contributions to the company, and your self-presentation.<br/>

<br/>Here, we have listed the steps to prepare for your interview. By following the steps in order, you will explore your own abilities first and then apply these insights to researching the company and demonstrating your value to a potential employer.</h2>
            <ServiceCard services={services} />
    </section>
      <MissionVision/>
    </>
  )
}

export default page