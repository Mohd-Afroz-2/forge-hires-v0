import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import MissionVision from '@/components/custom/MissionVision'
import ServiceCard from '@/components/custom/ServiceCard'
import Jobcard from '@/components/custom/Jobcard'

const page = () => {
  const heroData = {
    title: "Retail",
    description: "Drive customer experiences and sales in leading retail environments from management to store operations.",
    bgImage: "/heroImages/retail.jpg"
  }
   const services = [
  {
    id: 1,
    title: "Buyer",
    popupData: `Qualifications: Bachelor’s degree in Business Administration, Marketing, Merchandising, or a related field. Strong negotiation and analytical skills.

Roles and Responsibilities:

Source and purchase merchandise for the retail store.
Analyze market trends and consumer preferences.
Negotiate pricing and terms with suppliers.
Maintain relationships with vendors and ensure timely delivery of products.
Monitor inventory levels and adjust purchasing decisions accordingly.`
  },
  {
    id: 2,
    title: "Floor Manager",
    popupData: `Qualifications: High school diploma or equivalent. Previous retail experience and demonstrated leadership skills.

Roles and Responsibilities:

Supervise and coordinate activities of retail staff on the sales floor.
Ensure excellent customer service and satisfaction.
Monitor and manage inventory levels and product displays.
Train and coach sales associates on product knowledge and sales techniques.
Handle customer inquiries, complaints, and escalations.`
  },
  {
    id: 3,
    title: "Store Manager",
    popupData: `Qualifications: Bachelor’s degree in Business Administration, Retail Management, or a related field. Several years of retail management experience.

Roles and Responsibilities:

Oversee all aspects of store operations, including sales, staffing, inventory management, and customer service.
Develop and implement strategies to achieve sales targets and profitability goals.
Hire, train, and evaluate store staff.
Ensure compliance with company policies and procedures.
Handle administrative tasks such as scheduling, budgeting, and reporting.`
  },
  {
    id: 4,
    title: "Inventory Control Specialist",
    popupData: `Qualifications: High school diploma or equivalent. Experience in inventory management and proficiency in inventory tracking software.

Roles and Responsibilities:

Maintain accurate records of inventory levels and transactions.
Perform regular inventory audits to identify discrepancies and prevent stockouts.
Coordinate with suppliers to replenish inventory in a timely manner.
Monitor and analyze inventory data to optimize stock levels and minimize carrying costs.
Implement and enforce inventory control procedures to prevent loss and theft.`
  },
  {
    id: 5,
    title: "Visual Merchandiser",
    popupData: `Qualifications: Bachelor’s degree in Visual Merchandising, Fashion Design, or a related field. Strong creative and artistic skills.

Roles and Responsibilities:

Design and create visually appealing displays to showcase merchandise and attract customers.
Plan and execute store layout and product placement strategies.
Coordinate with buyers and store managers to ensure alignment with marketing and promotional campaigns.
Maintain visual standards and ensure compliance with brand guidelines.
Monitor sales performance and adjust visual displays as needed to drive sales.`
  },
  {
    id: 6,
    title: "Assistant Store Manager",
    popupData: `Qualifications: High school diploma or equivalent. Previous retail experience and demonstrated leadership abilities.

Roles and Responsibilities:

Support the store manager in overseeing daily operations and achieving sales targets.
Assist in hiring, training, and supervising store staff.
Manage inventory levels and merchandise presentation on the sales floor.
Provide excellent customer service and resolve customer issues.
Handle administrative tasks as assigned by the store manager.`
  },
  {
    id: 7,
    title: "Department Manager",
    popupData: `Qualifications: High school diploma or equivalent. Previous retail experience, with supervisory or leadership experience preferred.   Roles and Responsibilities: - Manage a specific department within the store, such as apparel, electronics, or cosmetics. - Oversee merchandise selection, pricing, and promotions within the department. - Train and supervise department staff, including sales associates and specialists. - Monitor department performance and implement strategies to drive sales and profitability. - Ensure compliance with company policies and procedures.`
  },
  {
    id: 8,
    title: "Warehouse Clerk",
    popupData: `Qualifications: High school diploma or equivalent. Previous experience in warehouse operations preferred. Roles and Responsibilities: - Receive, store, and organize incoming merchandise in the warehouse. - Pick and pack orders for shipment to stores or customers. - Maintain accurate inventory records using computerized systems. - Assist with loading and unloading of trucks. - Keep the warehouse clean, organized, and safe.`
  },
  {
    id: 9,
    title: "Customer Service Representative",
    popupData: `Qualifications: High school diploma or equivalent. Strong communication and interpersonal skills. Roles and Responsibilities: - Greet and assist customers in a friendly and professional manner. - Answer inquiries about products, services, and store policies. - Process transactions accurately and efficiently using cash registers or point-of-sale systems. - Handle returns, exchanges, and refunds according to company policies. - Resolve customer complaints and issues in a timely and satisfactory manner.`
  },
  {
    id: 10,
    title: "Inventory Associate",
    popupData: `Qualifications: High school diploma or equivalent. Previous experience in inventory management or retail preferred. Roles and Responsibilities: - Assist in receiving and unpacking shipments of merchandise. - Stock shelves and displays with new inventory. - Perform regular inventory counts and reconcile discrepancies. - Assist in maintaining organized and clean storage areas. - Collaborate with other staff members to ensure efficient inventory management.`
  },
  {
    id: 11,
    title: "Sales Associate",
    popupData: `Qualifications: High school diploma or equivalent. Previous retail sales experience and excellent communication skills. Roles and Responsibilities: - Welcome and assist customers in finding products and making purchasing decisions. - Provide product information, recommendations, and demonstrations as needed. - Process sales transactions accurately and efficiently. - Maintain a clean and organized sales floor. - Meet or exceed sales targets and contribute to the overall success of the store.`
  },
  {
    id: 12,
    title: "Cashier",
    popupData: `Qualifications: High school diploma or equivalent. Strong numerical and customer service skills. Roles and Responsibilities: - Operate cash registers and process sales transactions. - Scan and bag merchandise for customers. - Handle cash, credit card, and other forms of payment accurately. - Maintain a clean and organized checkout area. Provide friendly and efficient service to customers throughout their shopping experience.`
  },
  
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4'>

     <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>The retail industry comprises businesses selling goods and services, both in physical stores and online platforms. It offers diverse job roles, from customer-facing positions like sales associates to behind-the-scenes roles such as inventory managers and buyers. Additionally, opportunities extend to marketing, logistics, finance, human resources, and IT domains. Marketing professionals attract customers, logistics specialists manage supply chains, finance teams handle budgets, HR oversees staffing, and IT maintains digital infrastructure. With roles catering to various skill sets, the retail sector provides a dynamic environment for career growth and development.</h2>
            <Jobcard services={services} />
    </section>
          <MissionVision/>
    </>
  )
}

export default page
