import React from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import ServiceCard from '@/components/custom/ServiceCard'
import MissionVision from '@/components/custom/MissionVision'

const page = () => {
  const heroData = {
    title: "Career Advice",
    description: "Expert guidance on navigating your professional path, from entry-level roles to executive leadership.",
    bgImage: "/heroImages/career-advice.png"
  }
  const services = [
  {
    id: 1,
    title: "Work Hard, Play Harder",
    popupData: "In the creative industry, hours are long. You must work hard to succeed. But to be inspired and keep your finger on the pop culture pulse, you also really need to play hard. You need to get out there and live life. See the play. Hear the music. Go on the trip. A life lived solely behind a computer screen leaves little to the imagination. - Abby Downing, ZinePak"
  },
  {
    id: 2,
    title: "Avoid Being Paralyzed By Fear",
    popupData: "When I graduated from college, I interviewed 300+ people about their best career advice. Not to downgrade their advice, but the best career lesson came from a fainting goat. Adult fainting goats experience temporary paralysis when they face fear. On the other hand, baby fainting goats know nothing about fear and move about the farm freely. The key to a career: Avoid being paralyzed by fear. - Brett Farmiloe, Markitors"
  },
  {
    id: 3,
    title: "Have A Path But Be Flexible",
    popupData: `Have a general career path in mind, build relationships along that path, and be willing to accept challenges even if it seems they may lead you down a different path. You never know where those may lead. - Brian Sullivan, Sullivan Branding`
  },
  {
    id: 4,
    title: "Don't Let Others Manage Your Career",
    popupData: "One of my mentors always said don't let others manage your career because you will be unhappy with the results. What he meant by management is focusing on what skills and experiences you need to ultimately be in your dream job. I managed my moves carefully, making sure that I built the right skills to be a CEO. In the end, he was right and I am happy with the outcome. - Gina Michnowicz, Union+Webster"
  },
  {
    id: 5,
    title: "Earn Their Trust",
    popupData: "The best piece of career advice I ever received was earn their trust. Whether it's a client, a coworker, a vendor or a boss, once you have earned someone's trust, new opportunities, information and cooperation come your way. I've found this to be true for the more than three decades of my career. - Drew McLellan, Agency Management Institute"
  },
  {
    id: 6,
    title: "Fight For Happiness",
    popupData: `A fairy tale misconception is that happiness (in work or in life) is presented to you by someone else (like a knight in shining armor). Truth is, your life, happiness, sense of balance and even how people treat you, are completely in your control. But the kicker is you have to fight for these things each day. - Jaymie Scotto Cutaia, Jaymie Scotto & Associates`
  },
  
  {
    id: 7,
    title: "Learn Something New Everyday",
    popupData: "The pace of business is grueling and the energy required is exhausting. But, as one of my trusted mentors reminded me, our brain needs exercise each day. He suggested to seek new knowledge and become a student of the industry I serve, of my profession, as well as in parenting and in my faith. Learning something new is a privilege we can ill-afford to sacrifice. - Dave Wendland, Hamacher Resource Group"
  },
  {
    id: 8,
    title: "Treat Everyone How You Want To Be Treated",
    popupData: "Anyone who comes in contact with your business or employees deserves to be treated with kindness and respect. I’ve held to this belief when dealing with rude inquiries, tough clients and bullying peers. The result is a company with a reputation for helping others, sticking to their word and producing results while being courteous. - Leila Lewis, Be Inspired PR"
  },
  {
    id: 9,
    title: "Don't Be The Smartest One In The Room",
    popupData: `Oftentimes, leaders feel that they need to be the "smartest guy or gal" in the room, and that couldn't be further from the truth. Good leaders are the smartest one in the room, great leaders surround themselves with smarter people that will challenge ideas, bring new perspectives to the table and drive innovation. - Jacob Hanson, PR with Panache! Forbes Agency Council is an invitation-only community for executives in successful public relations, media strategy, creative and advertising agencies. Do I qualify?`
  },
  {
    id: 10,
    title: "Improve, Don't Perfect",
    popupData: "Success doesn’t come overnight. The ascent toward your vision is long and steep, but only you can see it, so don’t be so hard on yourself. Start climbing and you’ll realize you’re on a never-ending hike. Strive for constant improvement, not perfection. - Lindsay Mullen, Prosper Strategies"
  },
  {
    id: 11,
    title: "Never Complain When There's A Lot Of Work",
    popupData: "I was told by a mentor very early on that I should never complain when there’s a lot of work to do. I agree and tell my team the same thing. Be thankful there’s work to do. When something becomes easy or routine, it’s a clear sign you’re not growing. - Nicole Rodrigues, NRPR Group, LLC"
  },
  {
    id: 12,
    title: "Don't Tie Your Sense Of Self-Worth To Your Job",
    popupData: `Regardless of how good/bad your job is going at any time, you're a valued individual regardless. If you're finding that your emotions are held hostage to how you're performing at work, it's time to rethink your priorities and what truly matters to you. - Jeff Tan, Dentsu Aegis Network`
  },
  
  {
    id: 13,
    title: "Slay The Dragon",
    popupData: "Dragons manifest in various forms: be it the toughest task of the day, a new responsibility, an impending deadline, or handling conflicts. The key is to slay these dragons without overthinking and continue forward. Success requires the confidence to confront challenges directly and persist in moving ahead. - Sarah Mannone, Trekk"
  },
  {
    id: 14,
    title: "Market Yourself",
    popupData: "When I started my career, I was told, Market yourself because no one else will do it for you. I passed along every great job! email to my managers and then filed them away to read again whenever I needed a pick-me-up. I shared the work I had done of which I was proud and others might not be aware. And I counsel everyone I mentor to do the same. If you don't have your own back, who will? - Starr Million Baker, INK"
  },
  {
    id: 15,
    title: "You are the CEO of Your Life",
    popupData: `As entrepreneurs, we commit to 100-hour weeks with little thanks. Therefore, clarity about our 'why' is crucial. If there's anything else you'd prefer doing, your current path might not be right. When fully committed to your 'why,' the grind becomes an integral part of the game. Mine? Breathing life into entrepreneurs' dreams. I can't get enough of that. - Randy Shattuck, The Shattuck Group`
  },
]
  return (
    <>
    <HeroSectionForAll {...heroData} />
    <section className='max-w-7xl mx-auto md:mt-10 mt-4 '>

          <h2 className='text-xs md:text-base lg:text-lg md:px-10 px-4 text-justify'>Throughout your life, you will always receive career advice – some bad and some good. What you do with the advice you receive is up to you, but in some instances, it can prove to be invaluable. A report from CNBC showed that the top women CEOs received valuable career advice from their moms that they still adhere to today.<br/>

<br/>Whether you have received advice from a mentor, peer or family member, it can help change the course of how you go about your career and the path you decide to take.</h2>
            <ServiceCard services={services} />
    </section>
      <MissionVision/>
    </>
  )
}

export default page