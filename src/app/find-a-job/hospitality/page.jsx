import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import MissionVision from '@/components/custom/MissionVision'
import ServiceCard from '@/components/custom/ServiceCard'
import Jobcard from '@/components/custom/Jobcard'

const page = () => {
  const heroData = {
    title: "Hospitality",
    description: "Excel in service with career opportunities in world-class hotels, resorts, and premium event management.",
    bgImage: "/heroImages/hospitality.jpg"
  }
   const services = [
  {
    id: 1,
    title: "Housekeeper",
    popupData: `Qualifications: High school diploma or equivalent. Previous experience in housekeeping or a related field may be preferred. Roles and Responsibilities: - Clean and tidy guest rooms, bathrooms, and common areas according to established standards. - Change bed linens, replenish amenities, and restock supplies as needed. - Vacuum, dust, and mop floors, as well as clean windows and surfaces. - Report any maintenance issues or damage to the appropriate department. - Ensure guest satisfaction by providing prompt and courteous service.`
  },
  {
    id: 2,
    title: "Guest Services Supervisorn",
    popupData: `EQualifications: Bachelor’s degree in Hospitality Management or a related field. Previous experience in guest services or front office operations. Roles and Responsibilities: - Supervise the guest services team and oversee front desk operations. - Train and mentor staff on customer service standards and procedures. - Handle guest inquiries, requests, and complaints professionally. - Monitor room availability and reservations for efficient check-in and check-out processes. - Coordinate with other departments to resolve guest issues and ensure a seamless experience.`
  },
  {
    id: 3,
    title: "Hotel General Manager",
    popupData: `Qualifications: Bachelor’s degree in Hospitality Management or a related field. Several years of experience in hotel management or a similar role. Roles and Responsibilities: - Oversee all aspects of hotel operations, including guest services, housekeeping, food and beverage, and maintenance. - Develop and implement strategic plans to achieve financial and operational objectives. - Hire, train, and evaluate staff to ensure high performance and guest satisfaction. - Monitor financial performance and budgetary compliance. - Maintain relationships with guests, vendors, and industry partners to drive business growth.`
  },
  {
    id: 4,
    title: "Hotel Receptionist",
    popupData: `Qualifications: High school diploma or equivalent. Previous experience in customer service or hospitality may be preferred. Roles and Responsibilities: - Greet guests and check them in/out of the hotel using the property management system. - Answer phone calls, respond to emails, and handle guest inquiries and requests. - Process reservations, payments, and other transactions accurately. - Provide information about hotel facilities, services, and local attractions. - Assist with administrative tasks such as filing, data entry, and correspondence.`
  },
  {
    id: 5,
    title: "Porter",
    popupData: `Qualifications: High school diploma or equivalent. Physical fitness and the ability to lift and carry heavy items. Roles and Responsibilities: - Assist guests with luggage and belongings upon arrival and departure. - Transport luggage to and from guest rooms, vehicles, or storage areas. - Maintain cleanliness and orderliness in public areas such as lobbies, entrances, and parking lots. - Provide directions and assistance to guests as needed. - Assist with loading and unloading of goods and supplies.`
  },
  {
    id: 6,
    title: "Cruise Ship Attendant",
    popupData: `Qualifications: High school diploma or equivalent. Previous experience in hospitality, customer service, or the cruise industry may be preferred. Roles and Responsibilities: - Provide exceptional customer service to cruise ship passengers throughout their journey. - Clean and maintain guest cabins, public areas, and facilities on the ship. - Assist with guest activities and events, such as meal service, entertainment, and shore excursions. - Respond to guest inquiries, requests, and complaints promptly and professionally. - Follow safety protocols and procedures to ensure the well-being of passengers and crew.`
  },
   {
      id: 7,
      title: "Spa Manager",
      popupData: `Qualifications: Bachelor’s degree in Hospitality Management, Spa Management, or a related field. Certification in spa management or aesthetics may be preferred. Roles and Responsibilities: - Oversee the operation of the spa facility, including staff management, scheduling, and budgeting. - Develop and implement spa services, treatments, and packages to meet guest needs and preferences. - Train and mentor spa staff on service standards, procedures, and product knowledge. - Monitor guest satisfaction and feedback, implementing improvements as needed. - Maintain cleanliness, safety, and hygiene standards in the spa area.`
    },
    {
      id: 8,
      title: "Lodging Manager",
      popupData: `Qualifications: Bachelor’s degree in Hospitality Management or a related field. Several years of experience in hotel management or a similar role. Roles and Responsibilities: - Manage the daily operations of lodging facilities such as hotels, motels, or resorts. - Hire, train, and supervise staff to ensure high service levels and guest satisfaction. - Develop and implement policies and procedures to optimize efficiency and guest experience. - Monitor financial performance and budgetary compliance. - Handle guest inquiries, requests, and complaints professionally.`
    },
    {
      id: 9,
      title: "Tour Guide",
      popupData: `Qualifications: Knowledge of local history, culture, and attractions. Strong communication and interpersonal skills. Proficiency in multiple languages may be preferred. First aid and CPR certification may be required. Experience in customer service or the hospitality industry is beneficial. Roles and Responsibilities:

Lead guided tours of historical sites, landmarks, or natural attractions.
Provide engaging commentary, anecdotes, and information to enhance the tour experience.
Ensure the safety and well-being of tour participants.
Answer questions and provide assistance to guests.
Handle bookings, reservations, and payments.
Maintain a professional and welcoming demeanor throughout the tour.`
    },
    {
      id: 10,
      title: "Valet",
      popupData: `Qualifications: Valid driver's license with a clean driving record. Strong customer service and communication skills. Ability to drive both manual and automatic transmission vehicles. Attention to detail and organizational skills. Physical stamina to work in various weather conditions and lift heavy luggage. Roles and Responsibilities:

Greet guests upon arrival and assist with parking their vehicles.
Maintain organized records of parked vehicles and keys.
Retrieve vehicles promptly upon guests' request.
Provide assistance with luggage and other belongings.
Maintain cleanliness and orderliness of the valet area.
Adhere to safety procedures and traffic regulations.`
    },
    {
      id: 11,
      title: "Concierge",
      popupData: `Qualifications: Strong knowledge of local attractions, restaurants, and services. Excellent communication and interpersonal skills. Multilingual proficiency may be preferred. Ability to remain calm and professional under pressure. Experience in the hospitality or customer service industry. Roles and Responsibilities:

Assist guests with inquiries, reservations, and recommendations.
Arrange transportation, tours, and dining reservations.
Handle guest requests and complaints in a prompt and courteous manner.
Provide information about hotel facilities, services, and policies.
Coordinate special events, celebrations, and VIP services.
Maintain a neat and organized concierge desk.`
    },
    {
      id: 12,
      title: "Travel Agent",
      popupData: `Qualifications: Knowledge of travel destinations, itineraries, and booking procedures. Strong sales and negotiation skills. Proficiency in travel booking software and online reservation systems. Excellent communication and customer service skills. Certification from a recognized travel agency association may be preferred. Roles and Responsibilities:

Assist clients in planning and booking travel arrangements, including flights, accommodations, and activities.
Provide personalized recommendations based on clients' preferences and budgets.
Negotiate with airlines, hotels, and other travel suppliers to secure the best deals.
Handle reservations, payments, and documentation accurately and efficiently.
Stay updated on travel trends, promotions, and regulations.
Resolve issues and provide support before, during, and after clients' trips.`
    },
    {
      id: 13,
      title: "Resort Manager",
      popupData: `Qualifications: Bachelor's degree in Hospitality Management, Business Administration, or related field. Previous experience in resort management or the hospitality industry. Strong leadership, communication, and organizational skills. Knowledge of hotel operations, marketing, and finance. Ability to work under pressure and adapt to changing situations. Roles and Responsibilities:

Oversee all aspects of resort operations, including guest services, accommodations, food and beverage, and recreation facilities.
Develop and implement strategies to maximize occupancy, revenue, and guest satisfaction.
Recruit, train, and supervise staff members to ensure high-quality service standards.
Manage budgets, expenses, and financial performance.
Coordinate marketing efforts to attract and retain guests.
Maintain compliance with regulatory requirements and safety standards.`
    },
    {
      id: 14,
      title: "Hotel Sales Coordinator",
      popupData: `Qualifications: Bachelor's degree in Hospitality Management, Marketing, or related field. Sales experience in the hospitality or travel industry. Strong communication, negotiation, and interpersonal skills. Proficiency in sales management software and customer relationship management (CRM) tools. Ability to work independently and as part of a team. Roles and Responsibilities:

Identify and pursue sales opportunities to meet revenue targets.
Respond to inquiries, RFPs, and leads from potential clients.
Prepare and present proposals, contracts, and pricing agreements.
Collaborate with other departments to ensure successful execution of events and bookings.
Maintain relationships with existing clients and cultivate new business opportunities.
Track sales performance and provide regular reports to management.  `
    },
  
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4'>
     <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>The hospitality and tourism sectors cater to travelers needs and preferences, offering various services and accommodations worldwide. Hotels and resorts provide lodging options, ranging from budget-friendly to luxury accommodations, while restaurants and food services offer diverse culinary experiences. Tour operators and travel agencies organize trips and excursions, facilitating travelers exploration of destinations. Hospitality professionals, such as hotel managers and concierge staff, ensure guests comfort and satisfaction during their stays. Event planners coordinate conferences, weddings, and other gatherings, while transportation services, including airlines and car rental companies, facilitate travelers mobility. With a range of roles from customer service to event management, the hospitality and tourism sectors offer diverse opportunities for those passionate about providing exceptional experiences to travelers.</h2>
            <Jobcard services={services} />
    </section>
      <MissionVision/>
    </>
  )
}

export default page