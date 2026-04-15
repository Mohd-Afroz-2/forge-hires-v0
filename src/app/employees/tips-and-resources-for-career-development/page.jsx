import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import ServiceCard from '@/components/custom/ServiceCard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Tips and Resources for Career Development",
    description: "Resources and tools to help you continuously grow and advance throughout your professional journey.",
    bgImage: "/heroImages/tips-and-Resources-for-Career-Development.png"
  }
  const services = [
  {
    id: 1,
    title: "List Out Your Passion and Skills",
    popupData: `Start with the right perspective. You need to adopt the perspective that what you love to do? Which area where you enjoy by doing that task or work or skill Which skill you most like to do any time and you will find your passion.

Think about what you’ve already enjoyed doing. So think of all the experiences you’ve had that you’ve loved most—without limiting yourself just to work experiences—and investigate what made them so fulfilling. If there was a job you loved, what were your tasks? What kind of work environment was it? What was the company working toward? Who did you get to interact with? What was most exciting and/or satisfying?

Discern between a hobby and a profitable passion. Break down your fears—so you can overcome them.`
  },
  {
    id: 2,
    title: "Career Goals",
    popupData: `A career goal is a well-defined statement explaining the profession that an individual intends to pursue throughout his career. It is important for every employee or job seeker to define their career goals clearly. It helps them to come up with effective action plans.

Short-term vs. Long-term Career Goals. Short-term goals are those that can be achieved within six months to three years. It may take three to five years or more to achieve long-term goals.`
  },
  {
    id: 3,
    title: "List Your Strengths",
    popupData: `Make a list of strengths and interests, then think about what careers might match those traits. For example, if you're good at resolving conflict and perform well in stressful situations, you could be data analyst or Solution provider.`
  },
  {
    id: 4,
    title: "Values and Purpose",
    popupData: `Your core Values are important, and you should choose a job that aligns with your beliefs. Finding a purpose in your work will increase your satisfaction and motivate you to advance your career.`
  },
  {
    id: 5,
    title: "Learn New Skills",
    popupData: `Acquiring new and relevant skills can help you progress toward your career goals

1.Critical thinking allows you to identify and overcome challenges by analyzing data and facts. To expand your critical-thinking skills, learn more hard skills related to your role to make it easier to identify and solve problems.

2.Emotional Intelligence involves interpreting conversations and nonverbal actions of others and effectively communicating your ideas. This skill is key in conveying clear goals and understanding your coworkers, managers and customers. 

3.Teamwork involves sharing ideas and assisting co coworkers with tasks to achieve goals and create a cohesive and enjoyable work environment. When learning teamwork skills, make sure you listen to your coworkers and attempt to include them in activities.

4.Negotiation is a conversation that helps two or more parties reach an agreement and can be a useful workplace skill for solving coworker conflict or discussing a raise with your manager. Developing this skill can also help improve relations with your team and clients. `
  },
  {
    id: 6,
    title: "Online Professional Networking Groups",
    popupData: `Develop employees by expanding their professional horizons, giving them the opportunity to on line network with others in the industry.

Introduce employees to business leaders and professional associations. Networking broadens their minds and gives them new Introduce employees to angles of perception, both key attributes in solving evolving challenges in the workplace.

Networking provides your team ways of obtaining extra support, advice and information to grow their careers. `
  },
  {
    id: 7,
    title: "Find a Mentor",
    popupData: `Mentors are advisors that offer young professionals’ advice and guidance while they progress in their careers. Your mentor could be any of the following:

A current or past manager
A member of your professional network
A co-worker with more experience
A mentor will provide you with a trusted, experienced perspective that can help you define your career goals. Consider meeting with your mentor weekly or monthly to share your accomplishments, establish more career milestones and maintain your motivation.`
  },
  
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4 '>

          <h2 className='text-xs md:text-base lg:text-lg md:px-10 px-4 text-justify'>Career development flourishes when you can create clear and realistic goals that encourage progress in your chosen profession. It involves continuously educating yourself and learning more about potential paths to improve your career. Understanding how career development works and what you can do to improve yours can greatly benefit your career regardless of your field.<br/>

<br/>The goals you create to advance your career will depend on your passion and values.<br/>

<br/>You can think about your favorite childhood hobbies or classes in school and reflect on which interests you return to throughout your life. Consider other occupations, perhaps those of your parents, older siblings and role models, that you find interesting. These may be helpful areas in which to explore career options.</h2>
            <ServiceCard services={services} />
    </section>
      <MissionVision/>
    </>
  )
}

export default page