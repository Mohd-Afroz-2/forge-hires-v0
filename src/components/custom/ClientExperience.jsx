"use client"

import React, { useState } from 'react'
import Button from './Button'
import CECard from './CECard'
import { TYPOGRAPHY, LAYOUT, BUTTONS } from '@/theme/styles'

const ClientExperience = () => {
    const [activeTab, setActiveTab] = useState("forCandidates");
    const forCandidates = [
        {
            image: "/testimonial/candidate1.png",
            name: "Alex Reynolds",
            profession: "Project Manager",
            message: "ForgeHire went beyond expectations, leading me to an exceptional career opportunity. Their committed team introduced an exciting role that stood out from competitors. I appreciate their personalized approach, making each step uniquely tailored to my professional journey."
        },
        {
            image: "/testimonial/candidate2.png",
            name: "Jordan",
            profession: "Marketing Specialist",
            message: "ForgeHire exceeded my expectations, navigating me to a unique career opportunity. Their dedicated team stood out, presenting an exciting role unmatched by other recruiters. I'm genuinely grateful for their personalized approach, ensuring every step felt tailored to my professional journey."
        },
        {
            image: "/testimonial/candidate3.png",
            name: "S. John",
            profession: "HR Generalist",
            message: "I was looking for the next step in my career and ForgeHire was able to find me an exciting and unique opportunity that was unlike anything presented to me by other recruiters."
        }
    ]
    const forEmployers = [
        {
            image: "/testimonial/client1.png",
            name: "Lauren Howard",
            profession: "Client Director",
            message: "Collaborating with ForgeHire has been exceptional. Their keen understanding of client needs ensures they present top-tier candidates. Their dedicated team goes beyond, offering unique talents that stand out. Grateful for their partnership in bringing valuable professionals to our team."
        },
        {
            image: "/testimonial/client2.png",
            name: "Danny Mitchell",
            profession: "Recruitment Manager",
            message: "Working closely with ForgeHire has been a game-changer. Their meticulous approach to candidate selection and seamless communication sets them apart. The team consistently delivers exceptional talent, making my role as a recruitment manager more effective and rewarding."
        },
        {
            image: "/testimonial/client3.png",
            name: "Olivia",
            profession: "Talent Acquisition",
            message: "Partnering with ForgeHire has been a strategic advantage. Their dynamic team understands our evolving needs, consistently presenting high-caliber candidates. Their proactive communication and tailored approach make the recruitment process seamless. ForgeHire truly enhances our talent acquisition strategy."
        }
    ]
    return (
        <section className={LAYOUT.section + ' flex flex-col md:gap-10 gap-5'}>
            <div className={LAYOUT.flexCenter}>
                <h2 className={TYPOGRAPHY.h2}>Client Experience</h2>
                <p className={TYPOGRAPHY.body + ' max-w-2xl'}>Gaining profound insights into the path to success and unleashing your buisness full potential through our tailored recruitment solutions.
                </p>
                <div className='inline-flex p-1 bg-gray-100 rounded-full border border-gray-200'>
                    <Button
                        text="For Candidates"
                        className={`${BUTTONS.roundedFull} ${activeTab === "forCandidates"
                            ? "bg-black text-white shadow-lg"
                            : "bg-transparent text-gray-500 hover:text-black"
                            }`}
                        onClick={() => setActiveTab("forCandidates")}
                    />
                    <Button
                        text="For Employers"
                        className={`${BUTTONS.roundedFull} ${activeTab === "forEmployers"
                            ? "bg-black text-white shadow-lg"
                            : "bg-transparent text-gray-500 hover:text-black"
                            }`}
                        onClick={() => setActiveTab("forEmployers")}
                    />
                </div>
            </div>
            <div className={LAYOUT.grid6}>
                {/* i want a card of 3 items with image and text  */}
                {activeTab === "forCandidates" ? (
                    forCandidates.map((card, index) => (
                        <CECard key={index} card={card} />
                    ))
                ) : (
                    forEmployers.map((card, index) => (
                        <CECard key={index} card={card} />
                    ))
                )}
            </div>
        </section>
    )
}

export default ClientExperience