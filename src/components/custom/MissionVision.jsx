"use client";

import React from 'react'
import Button from './Button'
import { TYPOGRAPHY, LAYOUT, CARD, BUTTONS } from '@/theme/styles'
import { useRouter } from 'next/navigation'
import { HiOutlineRocketLaunch, HiOutlineLightBulb, HiOutlineShieldCheck } from "react-icons/hi2";

const MissionVision = () => {
  const router = useRouter();

  return (
    <div className="bg-white">
      {/* Unified Mission/Vision/Values Section */}
      <section className={LAYOUT.section}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Mission - Prominent / Left */}
          <div className="lg:col-span-7 flex flex-col justify-start items-center lg:items-start text-center lg:text-left gap-4 p-8 bg-gray-50/50 rounded-4xl border-2 border-gray-300 group hover:scale-102 transition-all duration-500">
            <div className="p-4 rounded-2xl bg-black text-white mb-2">
              <HiOutlineRocketLaunch className="w-10 h-10" />
            </div>
            <h2 className={`${TYPOGRAPHY.h2} tracking-tight normal-case!`}>Our Mission</h2>
            <p className={`${TYPOGRAPHY.body} max-w-2xl`}>
              ForgeHire revolutionizes recruitment across diverse industries, empowering organizations and individuals alike. <br className="hidden lg:block" />
              <span className="font-semibold text-gray-900 mt-2 block text-base md:text-lg">Our mission is to bridge aspiration with achievement, delivering tailored solutions that drive growth and success globally.</span>
              Join us in shaping the future of careers and businesses.
            </p>
          </div>

          {/* Vision & Values - Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Vision */}
            <div className="flex-1 p-6 md:p-8 border-2 border-gray-300 rounded-4xl flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group hover:scale-102 transition-all duration-500">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className='flex items-center bg-black p-3 rounded-xl'>
                  <HiOutlineLightBulb className="w-6 h-6 text-white" />
                </div>
                <h3 className={`${TYPOGRAPHY.h3}`}>Vision</h3>
              </div>
              <p className={`${TYPOGRAPHY.body} leading-relaxed`}>
                To support our Employers with professional and talent talent and to direct employees to the right position in their career path.
              </p>
            </div>

            {/* Core Values */}
            <div className="flex-1 p-6 md:p-8 border-2 border-gray-300 rounded-4xl flex flex-col items-center lg:items-start text-center lg:text-left gap-3 group hover:scale-102 transition-all duration-500">
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <div className='flex items-center bg-black p-3 rounded-xl'>
                  <HiOutlineShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className={`${TYPOGRAPHY.h3}`}>Core Values</h3>
              </div>
              <p className={`${TYPOGRAPHY.body} leading-relaxed`}>
                We are transparent, Trusted, and Goal Oriented with SMART objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started / CTA Section - Premium Dark Theme */}
      <section className="py-5 md:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className={CARD.feature}>
            <h2 className={TYPOGRAPHY.h2}>Get Started with Forge Hire</h2>
            <p className={TYPOGRAPHY.body + ' max-w-2xl'}>
              Whether you&apos;re looking for your next career move or seeking world-class talent to join your team, we&apos;re here to make the connection. Reach out today or submit your resume to our expert recruiters.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full sm:w-auto">
              <Button text="Contact Us" className={BUTTONS.primary} onClick={() => router.push("/contact-us")} />
              <Button text="Submit Resume" className={BUTTONS.secondary} onClick={() => router.push("")} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default MissionVision