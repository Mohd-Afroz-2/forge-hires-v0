'use client'
import Button from "@/components/custom/Button";
import ClientExperience from "@/components/custom/ClientExperience";
import QnaData from "@/components/custom/QnaData";
import { BUTTONS, LAYOUT } from "@/theme/styles";
import { redirect } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Page = () => {
  // const [openIndex, setOpenIndex] = useState(null);

  //   const qnaData=[
  //     {heading:"Staffing Solutions",
  //       forwardIcon:<IoIosArrowForward />,
  //       downwardIcon:<IoIosArrowDown />,
  //       message:"ForgeHire shows staffing solutions to their clients. Submit your requirements on line or call our recruitment specialist and discuss the experience required and Skills that Suits your positions."
  //     },
  //      {heading:"Project Solutions",
  //       forwardIcon:<IoIosArrowForward />,
  //       downwardIcon:<IoIosArrowDown />,
  //       message:"ForgeHire shows staffing solutions to their clients. Submit your requirements on line or call our recruitment specialist and discuss the experience required and Skills that Suits your positions."
  //     },
  //      {heading:"Team Solutions",
  //       forwardIcon:<IoIosArrowForward />,
  //       downwardIcon:<IoIosArrowDown />,
  //       message:"ForgeHire shows staffing solutions to their clients. Submit your requirements on line or call our recruitment specialist and discuss the experience required and Skills that Suits your positions."
  //     },
  //      {heading:"Consultations Solutions",
  //       forwardIcon:<IoIosArrowForward />,
  //       downwardIcon:<IoIosArrowDown />,
  //       message:"ForgeHire shows staffing solutions to their clients. Submit your requirements on line or call our recruitment specialist and discuss the experience required and Skills that Suits your positions."
  //     },
  //      {heading:"Technical Solutions",
  //       forwardIcon:<IoIosArrowForward />,
  //       downwardIcon:<IoIosArrowDown />,
  //       message:"ForgeHire shows staffing solutions to their clients. Submit your requirements on line or call our recruitment specialist and discuss the experience required and Skills that Suits your positions."
  //     },
  //      {heading:"Innovative Solutions",
  //       forwardIcon:<IoIosArrowForward />,
  //       downwardIcon:<IoIosArrowDown />,
  //       message:"ForgeHire shows staffing solutions to their clients. Submit your requirements on line or call our recruitment specialist and discuss the experience required and Skills that Suits your positions."
  //     },
  //   ]
  //   const handleToggle = (index) => {
  //     setOpenIndex(openIndex === index ? null : index);
  //   };

  return (
    <div >
      <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center md:gap-8 gap-3 md:mt-15 p-5 md:items-start bg-gray-300">
        {/* content */}
        <div className="w-full xl:w-1/2 max-w-auto md:mt-2">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-2 text-black">
            Embrace Innovation - break free from traditional recruitment
            methods
          </h2>
          <p className="hidden md:block text-zinc-950 md:text-sm lg:text-base mt-7">
            ForgeHire effortlessly combines services, technology, and
            network advantages to assist businesses in discovering visionary
            talent and creating substantial enterprise worth.
          </p>
        </div>

        {/* form */}
        <div className=" w-full xl:w-1/2 flex justify-center lg:p-4 ">
          <form className="bg-white pt-4 px-2 w-full rounded-lg md:pt-10 md:pl-6 md:pr-4">
            <div className="grid grid-cols-1 text-xs gap-x-8 gap-y-10 md:grid-cols-2 md:text-sm lg:text-base ">
              <div>
                <p className="whitespace-nowrap">First Name</p>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="border-b border-zinc-950 outline-none w-full py-2 "
                />
              </div>
              <div>
                <p className="whitespace-nowrap">Last Name</p>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="border-b border-zinc-950 outline-none w-full py-2 "
                />
              </div>
              <div>
                <p className="whitespace-nowrap">Email</p>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="border-b border-zinc-950 outline-none w-full py-2 "
                />
              </div>
              <div className="">
                <p className="whitespace-nowrap">Phone Number</p>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="border-b border-zinc-950 outline-none w-full py-2 "
                />
              </div>
            </div>
            <div>
              <p className="py-5 text-xs md:text-sm lg:text-base">Message</p>
              <input
                type="text"
                name="messages"
                id="messages"
                className="border-b border-zinc-950 outline-none text-md w-full "
              />
            </div>
            <div className="py-10 ">
              <p className="text-xs md:text-sm lg:text-base">
                What is your interest in Forge Hires Now?
              </p>
              <div className="flex flex-row gap-2 py-3">
                <input type="radio" name="radio" />
                <p className="text-xs md:text-sm lg:text-base">
                  Our company needs to hire
                </p>
              </div>
              <div className="flex flex-row gap-2 py-3">
                <input type="radio" name="radio" />
                <p className="text-xs md:text-sm lg:text-base">
                  I am looking for a new job
                </p>
              </div>
              <div className="flex flex-row gap-2 py-3">
                <input type="radio" name="radio" />
                <p className="text-xs md:text-sm lg:text-base">
                  Learn more about Forge Hires Now
                </p>
              </div>
            </div>
            <button className={`${BUTTONS.primary} hover:bg-blue-600`}>Send Message</button>
            <p className=" py-5 text-xs md:text-sm">
              For details on how we collect, use, and safeguard your data,
              please review our <span className="text-blue-600">Privacy Policy.</span> By
              submitting this form, you agree to our privacy practices as
              outlined in the policy.
            </p>
          </form>
        </div>
      </section>
      <QnaData />
      <ClientExperience />
    </div>
  );
};

export default Page;
