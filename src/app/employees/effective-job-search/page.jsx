import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import ServiceCard from '@/components/custom/ServiceCard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Effective Job Search",
    description: "Master the art of the modern job hunt with proven strategies for finding and securing your ideal role.",
    bgImage: "/heroImages/effective-job-search.png"
  }
  const services = [
  {
    id: 1,
    title: "Selective With your Job Search",
    popupData: "Stay attentive on your job search and the positions being advertised. Focus on companies that genuinely excite you and align with your career goals. This enthusiasm will boost your confidence when speaking to hiring managers and convey your passion for the role during interviews, increasing your chances of securing the position."
  },
  {
    id: 2,
    title: "Show a Strong Presence in the Digital World",
    popupData: "TKeep updating your resume and skills on digital social media platforms, and strive to expand your network by joining relevant social media groups. Posting your resume in groups with like-minded individuals can help match your skills with specific job requirements, increasing your visibility to various hiring managers."
  },
  {
    id: 3,
    title: "Customized Applications",
    popupData: `Personalize your cover letter and resume for every role you apply for. Evaluate how your skills will fit a role and tailor the resume to highlight your accomplishments and relevant experiences. Include the keywords from the job description for the position you're applying for.`
  },
  {
    id: 4,
    title: "Keep Learning a New Skill",
    popupData: `Learning an exciting new skill related to your profession can improve your confidence and energize you. It helps you to surround yourself with people who are excited about leveraging their talents. By surrounding yourself with other professionals in your industry, you may learn about new opportunities. You'll also be able to enhance your own resume and show hiring managers that personal and professional growth is important to you.`
  },
  {
    id: 5,
    title: "Network Regularly",
    popupData: `Networking stands as one of the most effective job searching strategies at your disposal. It enables you to uncover job openings that may not be widely advertised. The more individuals you connect with and inform about your job search, the greater the likelihood of discovering open positions. Additionally, you may secure a referral through this process.`
  },
  {
    id: 6,
    title: "Participating in Job Fairs",
    popupData: `Job fairs, often held throughout the year, allow you to meet employers who are hiring directly. Do your research in advance and find out which organizations will be attending the job fair. Next, identify the companies you are most interested in working for and research to learn more about them. Your preparation will come across when you speak with the employer directly at the job fair and they will be far more likely to remember you at the end of the day. You may even earn an interview on the spot.`
  },
  {
    id: 7,
    title: "Tour Company Websites",
    popupData: "If you have identified a shortlist of companies you are most interested in working for, begin regularly visiting their websites to check for job openings. Many companies do not advertise their openings on job sites but instead post them directly on their own websites and share them on social media. By monitoring the websites of the companies you're most interested in, you'll be more likely to notice if a position becomes available suddenly."
  },
  {
    id: 8,
    title: "Leverage Your Current Relationships",
    popupData: "The more relationships you have, the greater the likelihood of a referral for a job. Start using social media and leveraging your personal and professional networks to learn about openings and get a referral."
  },
  {
    id: 9,
    title: "Contact Specialized Headhunters",
    popupData: `There are various specialized headhunters available in the job market who can guide you to the right industry and position. You need to search for these types of headhunters, submit your resume, and follow up or visit as per your convenience to keep your file active.
`
  },
  {
    id: 10,
    title: "Always stay connected with Professional organizations",
    popupData: `Join a professional organization in your field. This will present opportunities for you to learn, expand upon your current skillset and network with those working within the industry. Make sure when you're meeting new people that you're mentally present and engaged, as you may connect with someone at an event who can help in your job search.`
  },
  {
    id: 11,
    title: "Check the possibility of Bypassing human resources",
    popupData: `If possible, find a way to bypass HR and connect with someone in the department for which you're applying. Look on job-related social networks and find people who work within the company. Then evaluate whether you have any connections who could get you an introduction. Consider reaching out to people in the department to see if you can get coffee and learn more about the company and the position. You may walk away from the meeting with a personal referral for the job.`
  },
  {
    id: 12,
    title: "Look Offline",
    popupData: `Visit small companies, particularly family-owned businesses or organizations that rely on word-of-mouth. Identify the decision maker of the company with a cold email. Use social networks to see if you are connected with anyone who works there and periodically check their website to determine whether they are hiring.`
  },
  
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4 '>

          <h2 className='text-xs md:text-base lg:text-lg md:px-10 px-4 text-justify'>The job searching process can be exciting and challenging, but it is often necessary for finding a new job that meets your needs. You should do anything you can to make yourself positively stand apart from other applicants. This can include increasing your understanding of how to do well in the application process, including during interviews. In this article, we offer some tips for a successful job search.<br/>

<br/>To begin your job search with a well-defined plan. Determine what industry you want to work in, what types of roles youre looking for, your ideal salary range and what type of company you want to work at. You should consider what is important to you regarding your job at this stage, as it can help you decide as your job search moves forward.<br/>

<br/>It can also be helpful to set yourself goals such as the number of jobs to apply for per week, a goal for hours spent on job research each day or a deadline for improving your resume and cover letter. You might also find it helpful to create a method for tracking what jobs you have applied for, such as an application, document or spreadsheet.</h2>
            <ServiceCard services={services} />
    </section>
      <MissionVision/>
    </>
  )
}

export default page