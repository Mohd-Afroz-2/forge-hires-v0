import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import ServiceCard from '@/components/custom/ServiceCard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Talent Grooming",
    description: "Enhance your professional skills and marketability with our specialized development and training insights.",
    bgImage: "/heroImages/talent-grooming.png"
  }
  const services = [
  {
    id: 1,
    title: "Talent Identification Programmes",
    popupData: `An executive working in an organization today can become a business leader tomorrow. It is the responsibility of senior business leaders to identify future business leaders by keeping their eyes open for bright, high potential team members.

Ability and willingness to learn
An entrepreneurial spirit
Crisis management skills
Analytical Skills
Innovation
Team spirit and leadership skills
Decision-making skills
Strong communication skills`
  },
  {
    id: 2,
    title: "Mentoring Programmes",
    popupData: `In most of the cases the Mentors or senior employees are experienced enough to offer expert tips to younger employees. They play the role of a counsellor, guide, and teacher and make younger employees aware of the different facets of corporate culture. The young leaders can spend time shadowing the senior leaders.

Providing vital insight and helping young talent to identify new opportunities in the organization. Teaching them the ways to climb up the corporate ladder and Discussing business strategies and advising them on how ideas and strategies can influence the goals of business leaders in an organization.`
  },
  {
    id: 3,
    title: "Leadership Training",
    popupData: `Leadership trainings are imperative as they provide talent with a broader view of the organization. Only true leaders are capable of making quick and effective decisions during tough times. Leadership training goes a long way in grooming top-notch business leaders. Such training programmes impart knowledge on different business specialties such as sales, finance, business strategy and innovation. It enables in-house talent of an organization to develop strong leadership qualities so that they can inculcate adequate confidence in themselves and take fruitful decisions during tough times.`
  },
  {
    id: 4,
    title: "Time Management Training",
    popupData: `Time management is important because it lessens stress levels while enabling one to achieve more. Time is an irreplaceable resource and should be utilized wisely. Thus, senior leaders should teach the talented young employees, the art of mastering time management. The future leaders should know how to organize, prioritize and schedule their time-table so as to utilize time in an effective manner.`
  },
  {
    id: 5,
    title: "Business Communication Training",
    popupData: `Only strong communication skills can help business leaders to achieve their goals in diverse business contexts. Many organisations provide business communication training to their highly talented workforce so that they can cultivate an effective communication style. A good communicator is one who is a good listener as well as one who knows how to put across his/ her insights effectively. Without good listening skills, a good business leader would not be able to easily connect with his/ her audience so as to make an influential impact. `
  },
  {
    id: 6,
    title: "Attitude Training",
    popupData: `Right attitude is an essential attribute of true leaders and no leader can lead efficiently without it. Right attitude enables leaders to confront big challenges with ease and achieve success in whatever they do. Employee attitude training programmes prepare talent to try hard for constant self-improvement. It trains them to build their strengths and downplay/reduce their weaknesses.`
  },
  {
    id: 7,
    title: "Flexible Work Environment",
    popupData: `While developing team-leadership skills, organizations should offer employees with a flexible work environment, such as: • ‘Work from Home’ schedules so that employees can maintain work-life balance • Providing employees with smartphones, laptops and other gadgets to make them more efficient and portable. `
  },
  {
    id: 8,
    title: "On-The-Job Training",
    popupData: `The organization has to give the future leaders difficult assignments/projects where they can utilize all their training and create a meaningful impact on the organization.`
  },
  
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4 '>

          <h2 className='text-xs md:text-base lg:text-lg md:px-10 px-4 text-justify'>Talented employees are a valuable resource to any organization. Identifying young talent and nurturing them for taking up important roles and responsibilities in future is the prime concern for many global organizations.<br/>

<br/>High-potential workforce in an organization helps in adding competitive advantage to any business by generating enormous dividends. Thus, top-notch organizations across the globe, including start-ups, take keen interest in grooming young talent by designing special development programmes.<br/>

<br/>These development programmes instill a global mindset in budding talent and help them acquire comprehensive knowledge of the business so that they can enhance their performance and deliver better value to clients.<br/>

<br/>Moreover, development programmes prepare future business leaders to develop leadership in thoughts as well as actions, besides grooming them to lead big and small teams efficiently, at different levels.<br/>

<br/>Here are some ways and means followed by organizations for grooming talent for critical roles and responsibilities:</h2>
            <ServiceCard services={services} />
    </section>
      <MissionVision/>
    </>
  )
}

export default page