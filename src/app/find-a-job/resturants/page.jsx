import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import MissionVision from '@/components/custom/MissionVision'
import ServiceCard from '@/components/custom/ServiceCard'
import Jobcard from '@/components/custom/Jobcard'

const page = () => {
  const heroData = {
    title: "Restaurants (F&B)",
    description: "Stir up your career in culinary arts, restaurant management, and front-of-house service.",
    bgImage: "/heroImages/restaurants.jpg"
  }
   const services = [
  {
    id: 1,
    title: "Chef",
    popupData: `Qualifications: Culinary degree or equivalent experience. Extensive knowledge of cooking techniques, ingredients, and cuisines. Roles and Responsibilities: - Plan and execute menu items, ensuring quality and consistency. - Lead and supervise kitchen staff, including cooks and prep workers. - Develop new recipes and menu concepts. - Manage food costs and inventory. - Ensure compliance with health and safety regulations.`
  },
  {
    id: 2,
    title: "Line Cook",
    popupData: `Qualifications: High school diploma or equivalent. Culinary training or previous kitchen experience preferred. Roles and Responsibilities: - Prepare and cook menu items according to recipes and standards. - Work efficiently and accurately during busy service periods. - Maintain a clean and organized workstation. - Assist with food preparation and inventory management. - Follow safety and sanitation guidelines.`
  },
  {
    id: 3,
    title: "Kitchen Manager",
    popupData: `Qualifications: Culinary degree or equivalent experience. Strong leadership and organizational skills. Roles and Responsibilities: - Oversee kitchen operations, including food preparation, cooking, and sanitation. - Hire, train, and supervise kitchen staff. - Develop and implement standard operating procedures. - Monitor food quality and consistency. - Manage inventory and control food costs.`
  },
  {
    id: 4,
    title: "Prep Cook",
    popupData: `Qualifications: High school diploma or equivalent. Previous experience in food preparation preferred. Roles and Responsibilities: - Prepare ingredients for cooking, such as chopping vegetables and marinating meats. - Assist with menu item assembly and plating. - Follow recipes and portion sizes accurately. - Maintain a clean and organized prep area. - Assist with receiving and storing deliveries.`
  },
  {
    id: 5,
    title: "Catering Manager",
    popupData: `Qualifications: Bachelor’s degree in Hospitality Management or related field. Previous experience in catering or event planning. Roles and Responsibilities: - Plan and coordinate catering events, including menu selection, staffing, and logistics. - Communicate with clients to understand their needs and preferences. - Manage budgets and pricing for catering services. - Supervise catering staff during events. - Ensure compliance with health and safety regulations.`
  },
  {
    id: 6,
    title: "Sous Chef",
    popupData: `Qualifications: Culinary degree or equivalent experience. Experience in a supervisory role in a kitchen setting. Roles and Responsibilities: - Assist the head chef with menu planning and recipe development. - Supervise kitchen staff and coordinate food preparation activities. - Ensure that food is prepared and presented according to standards. - Monitor inventory and order supplies as needed. - Maintain a clean and organized kitchen environment.`
  },
   {
    id: 7,
    title: "Dishwasher",
    popupData: `Qualifications: No formal education required. Physical stamina and the ability to work in a fast-paced environment. Roles and Responsibilities: - Clean and sanitize dishes, utensils, and kitchen equipment. - Assist with kitchen cleanliness and organization. - Empty trash and recycling bins. - Follow safety and sanitation guidelines. - Work efficiently to keep up with dishwashing demands.`
  },
  {
    id: 8,
    title: "Hotel Manager",
    popupData: `Qualifications: Bachelor’s degree in Hospitality Management or related field. Several years of experience in hotel management. Roles and Responsibilities: - Oversee all aspects of hotel operations, including guest services, housekeeping, and maintenance. - Hire, train, and supervise staff to ensure high levels of service and guest satisfaction. - Develop and implement policies and procedures to optimize efficiency and guest experience. - Monitor financial performance and budgetary compliance. - Handle guest inquiries, requests, and complaints in a professional manner.`
  },
  {
    id: 9,
    title: "Restaurant Manager",
    popupData: `Qualifications: Bachelor’s degree in Hospitality Management or related field. Previous experience in restaurant management. Roles and Responsibilities: - Oversee day-to-day operations of the restaurant, including staffing, customer service, and financial management. - Hire, train, and supervise restaurant staff. - Develop and implement marketing strategies to attract and retain customers. - Monitor food quality, service, and cleanliness standards. - Handle customer inquiries, complaints, and feedback.`
  },
  
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4'>

     <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>The Restaurants (F&B) industry spans various culinary establishments, offering diverse dining experiences from fast food to fine dining. Roles encompass front-of-house (servers) to back-of-house (chefs, cooks), including management and specialized positions. Professionals in management, culinary arts, and hospitality find ample opportunities in this industry. From servers to chefs and managers, diverse roles contribute to delivering exceptional dining experiences. Specialized positions like sommeliers and pastry chefs add unique expertise to the vibrant culinary landscape.</h2>
            <Jobcard services={services} />
    </section>
          <MissionVision/>
    </>
  )
}

export default page