import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import MissionVision from '@/components/custom/MissionVision'
import ServiceCard from '@/components/custom/ServiceCard'
import Jobcard from '@/components/custom/Jobcard'

const page = () => {
  const heroData = {
    title: "Sports",
    description: "Pursue your passion with careers in sports management, coaching, and athletic facility operations.",
    bgImage: "/heroImages/sports.jpg"
  }
   const services = [
  {
    id: 1,
    title: "Exercise Physiologist",
    popupData: `Qualifications: Bachelor’s degree in Exercise Physiology or related field. Certification from a recognized organization may be required. Roles and Responsibilities: - Assess clients' fitness levels and develop personalized exercise programs. - Conduct fitness tests and evaluations to monitor progress. - Provide guidance on exercise techniques and safety precautions. - Work with individuals with medical conditions or injuries to improve their physical health. - Stay current with research and developments in exercise science.`
  },
  {
    id: 2,
    title: "Kinesiologist",
    popupData: `Qualifications: Bachelor’s degree in Kinesiology or related field. Certification may be required depending on the jurisdiction. Roles and Responsibilities: - Study human movement and biomechanics to improve performance and prevent injuries. - Design exercise programs to enhance strength, flexibility, and endurance. - Conduct movement assessments and analyze gait, posture, and muscle function. - Provide rehabilitation and corrective exercise for individuals recovering from injuries. - Collaborate with other healthcare professionals to optimize treatment plans.`
  },
  {
    id: 3,
    title: "Nutritionist",
    popupData: `Qualifications: Bachelor’s degree in Nutrition, Dietetics, or related field. Registered Dietitian (RD) credential may be required. Roles and Responsibilities: - Assess individuals' dietary habits and nutritional needs. - Develop personalized meal plans and nutrition strategies to support athletic performance and health goals. - Provide education on nutrition principles, including macronutrients, micronutrients, and hydration. - Monitor and evaluate clients' progress and make adjustments to their nutrition plans as needed. - Stay informed about current research and guidelines in sports nutrition.`
  },
  {
    id: 4,
    title: "Orthopaedist",
    popupData: `Qualifications: Medical degree (MD or DO) with specialization in orthopedic surgery. Board certification in Orthopedic Surgery. Roles and Responsibilities: - Diagnose and treat musculoskeletal injuries and conditions in athletes. - Perform surgeries such as arthroscopy, joint replacement, and fracture repair. - Provide non-surgical treatments including medication, physical therapy, and injections. - Collaborate with other healthcare professionals to develop comprehensive treatment plans. - Educate athletes on injury prevention and rehabilitation.`
  },
  {
    id: 5,
    title: "Personal Trainer",
    popupData: `Qualifications: Certification from a recognized personal training organization. Bachelor’s degree in Exercise Science or related field may be preferred. Roles and Responsibilities: - Assess clients' fitness levels, goals, and health conditions. - Develop personalized exercise programs tailored to clients' needs and preferences. - Instruct and demonstrate proper exercise techniques and form. - Motivate and support clients to achieve their fitness goals. - Monitor clients' progress and make adjustments to their programs as needed.`
  },
  {
    id: 6,
    title: "Referee/Umpire",
    popupData: `Qualifications: Knowledge of the rules and regulations of the specific sport. Training and certification may be required depending on the level of competition. Roles and Responsibilities: - Enforce the rules of the game and ensure fair play. - Make impartial decisions on game-related matters such as fouls, penalties, and scoring. - Communicate with players, coaches, and officials to maintain order and resolve disputes. - Uphold sportsmanship and promote a positive and safe environment for participants. - Continuously assess and improve officiating skills.`
  },
  {
    id: 7,
    title: "Sports Massage Therapist",
    popupData: `Qualifications: Certification in massage therapy. Additional training or certification in sports massage may be required. Roles and Responsibilities: - Provide massage therapy to athletes before, during, and after training sessions and competitions. - Focus on techniques to improve flexibility, circulation, and recovery. - Address specific muscle soreness, tension, and injuries. - Communicate with athletes to understand their needs and preferences. - Collaborate with other healthcare professionals to support athletes' overall wellness.`
  },
  {
    id: 8,
    title: "Sports Medicine Medical Assistant",
    popupData: `Qualifications: Certification as a medical assistant. Knowledge of sports medicine principles and practices may be preferred. Roles and Responsibilities: - Assist sports medicine physicians and other healthcare providers in evaluating and treating athletes. - Prepare treatment rooms and assist with procedures such as physical exams, injections, and minor surgeries. - Perform administrative tasks such as scheduling appointments, maintaining medical records, and coordinating referrals. - Educate athletes on injury prevention, rehabilitation exercises, and home care instructions. - Maintain confidentiality and professionalism in all interactions with athletes and medical staff.`
  },
  {
    id: 9,
    title: "Sports Statistician",
    popupData: `Qualifications: Bachelor’s degree in Statistics, Mathematics, or a related field. Strong analytical and mathematical skills. Roles and Responsibilities: - Collect, analyze, and interpret statistical data related to sports events and performances. - Compile and maintain databases of player and team statistics. - Generate reports, charts, and graphs to present statistical findings to coaches, players, and management. - Use statistical models and software to predict outcomes and evaluate player performance. - Stay current with trends and developments in sports analytics.`
  },
  {
    id: 10,
    title: "Sports Psychologist",
    popupData: `Qualifications: Doctoral degree in Psychology with specialization in Sports Psychology. State licensure as a psychologist. - Roles and Responsibilities: - Provide psychological assessment and counseling services to athletes and sports teams. - Help athletes manage stress, anxiety, and performance-related issues. - Develop mental skills training programs to enhance focus, confidence, and resilience. - Work with coaches and trainers to create a supportive team culture and promote mental wellness. - Conduct research and contribute to the field of sports psychology through publications and presentations.  `
  },
  
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4'>

     <h2 className='text-xs md:text-base md:px-10 px-4 lg:text-lg text-justify'>The sports industry offers a vast range of opportunities, from athlete management to event planning, appealing to a wide spectrum of sports enthusiasts. Roles include athletes, coaches, event organizers, and sports media personnel, each contributing to the excitement and success of sporting events. Specialized positions such as sports agents and analysts further diversify this dynamic field, providing avenues for individuals to engage with their passion for sports professionally.</h2>
            <Jobcard services={services} />
    </section>
          <MissionVision/>
    </>
  )
}

export default page