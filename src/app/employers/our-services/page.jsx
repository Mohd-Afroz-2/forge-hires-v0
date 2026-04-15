import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import ServiceCard from '@/components/custom/ServiceCard'
import MissionVision from '@/components/custom/MissionVision'

const Page = () => {
  //  const [selectedData, setSelectedData] = useState(null)
  const heroData = {
    title: "Our Services",
    description: "Discover our comprehensive suite of staffing and business solutions designed to streamline your operations.",
    bgImage: "/heroImages/ourservices.png"
  }
  const services = [
    {
      id: 1,
      title: "Permanent Employees",
      popupData: "Permanent employees are those who work directly for an employer and receive regular payment from them. They can work either part-time or full-time, typically classified as those working 35 or more hours per week by the Bureau of Labor Statistics. Permanent employees often enjoy benefits packages provided by their employers, including paid time off for personal reasons such as vacations, illness, or parental leave. The amount of time off may vary based on factors like job position or tenure. Employers may also offer paid holidays such as Independence Day or Thanksgiving."
    },
    {
      id: 2,
      title: "Contractual / Freelancers",
      popupData: "Contractual employees, also known as independent contractors, freelancers, or work-for-hire staffers, receive a fixed fee for working on a specified timeframe or project. Unlike regular company employees, they are not eligible for benefits. As self-employed individuals, they are responsible for obtaining their insurance and managing retirement savings. Additionally, contract employees pay self-employment taxes."
    },
    {
      id: 3,
      title: "Remotely Working Employees",
      popupData: `More Organizations are allowing / encouraging their teams to work remotely. As you progress through your career, you might have the opportunity to complete your work outside of a traditional office setting 1. Improved productivity. 2. Healthier lifestyles can lead to Better nutrition, fitness, emotional wellbeing and improved work-life balance. 3. More take-home pay. 4. Enhanced savings. 5. Greater team diversity. 6. Improved record keeping. 7. More sustainable lifestyle . Disadvantages working remotely: 1. Less human interaction. 2. Increased travel. 3. Increased health effects. 4. Decreased productivity. 5. Delayed response times. 6. Decreased feedback.`
    },
    {
      id: 4,
      title: "MSP",
      popupData: `A managed service provider (MSP) oversees business areas to ensure day-to-day operations, serving as strategic partners to enhance efficiency for businesses of all sizes. With a pool of experts, MSPs handle complex processes, providing access to top talent and cutting-edge technology without rapid cost escalation. For instance, amid diverse employee categories and hybrid work models, businesses outsource HR activities to professional employer organizations (PEOs). MSPs commonly manage: 1.Payroll. 2.IT services. 3.Workforce management. 4.Recruitment. 5.Vendor and contract management. 6.Human resources.`
    },
    {
      id: 5,
      title: "Executive Talent Pool",
      popupData: "Our executive recruiters have functional expertise so they can identify and source the most qualified candidates for your CXO, SVP, and VP executive roles. C-Suite 1.Chief Executive Officer. 2. Chief Operating Officer. 3. Chief Marketing Officer. 4. Chief People Officer. 5. Chief Revenue Officer Diversity Officer. 6. Chief Customer Officer. 7. Chief Financial Officer. 8.Chief Technical Officer. 9. Chief Product Officer and many more. Vice President 1. VP of Sales. 2. VP of Marketing. 3. VP of Branding. 4. VP of Business Development. 5. VP of Product. 6. VP of Finance. 7. VP of People. 8. VP of Engineering. 9. VP of Operations. 10. VP of Growth. 11. VP of Customer Success and many more."
    },
    {
      id: 6,
      title: "Professional Talent Pool",
      popupData: "Our team and network pool technology connected with top management personals and highly influential people to provide the talent your esteemed organization. This varies from directors, Senior Managers, and individual contributor positions. Director 1. Director of Growth. 2. Director of Revenue. 3. Director of HR/People. 4. Director of Sales. 5. Director of Marketing. 6. Director of Operations. 7. Director of Product and many more. Senior Manager 1. Sr. Marketing Manager. 2. Sr. Sales Manager. 3. Sr. Business Development Manager. 4. Sr. Product Manager. 5. Sr. Operations Manager. 6. Sr. HR/People Manager. Manager 1. Marketing Manager. 2. Sales Manager. 3. Business Development Manager. 4. Product Manager. 5. Operations Manager. 6. HR/People Manager."
    },
  ]
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
        <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>ForgeHire specializes in sourcing outstanding talent pools for various industries and businesses, placing them in the right positions. Whether you require permanent hires, contract employees, freelancers, temporary staff, remote workers, or executive talent searches, were your preferred partner.<br />
          <br />Additionally, ForgeHire provides workforce management services through recruitment process outsourcing (RPO) methods, ensuring seamless talent onboarding with minimal operational interference.</h2>
        <ServiceCard services={services} />
      </section>
      <MissionVision />
    </>
  )
}

export default Page