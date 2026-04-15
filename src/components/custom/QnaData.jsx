'use client'
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const QnaData = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const qnaData = [
    {
      heading: "Staffing Solutions",
      forwardIcon: <IoIosArrowForward />,
      downwardIcon: <IoIosArrowDown />,
      message: "ForgeHire shows staffing solutions to their clients. Submit your requirements on line or call our recruitment specialist and discuss the experience required and Skills that Suits your positions."
    },
    {
      heading: "Project Solutions",
      forwardIcon: <IoIosArrowForward />,
      downwardIcon: <IoIosArrowDown />,
      message: "ForgeHire shows staffing solutions to their clients. Submit your requirements on line or call our recruitment specialist and discuss the experience required and Skills that Suits your positions."
    },
    {
      heading: "Team Solutions",
      forwardIcon: <IoIosArrowForward />,
      downwardIcon: <IoIosArrowDown />,
      message: "ForgeHire shows staffing solutions to their clients. Submit your requirements on line or call our recruitment specialist and discuss the experience required and Skills that Suits your positions."
    },
    {
      heading: "Consultations Solutions",
      forwardIcon: <IoIosArrowForward />,
      downwardIcon: <IoIosArrowDown />,
      message: "ForgeHire shows staffing solutions to their clients. Submit your requirements on line or call our recruitment specialist and discuss the experience required and Skills that Suits your positions."
    },
    {
      heading: "Technical Solutions",
      forwardIcon: <IoIosArrowForward />,
      downwardIcon: <IoIosArrowDown />,
      message: "ForgeHire shows staffing solutions to their clients. Submit your requirements on line or call our recruitment specialist and discuss the experience required and Skills that Suits your positions."
    },
    {
      heading: "Innovative Solutions",
      forwardIcon: <IoIosArrowForward />,
      downwardIcon: <IoIosArrowDown />,
      message: "ForgeHire shows staffing solutions to their clients. Submit your requirements on line or call our recruitment specialist and discuss the experience required and Skills that Suits your positions."
    },
  ]
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div>
      <div className="flex flex-col px-8 py-10">
        <div className="flex flex-col items-center py-5">
          <p className="text-black uppercase text-3xl md:text-2xl font-bold pb-4 ">Solutions Section</p>
          <p className="text-base md:text-sm">
            We Provide Complete Wholistic Talented Staffing Solutions to Suit your
            Business.
          </p>
        </div>

        <div>
          {qnaData.map((data, index) => (
            <div key={index} className=" mx-6 md:mx-30 my-5 bg-slate-200 px-8 py-4 rounded-xl">
              <div className="flex flex-row justify-between py-2 items-center" onClick={() => handleToggle(index)}>
                <h3 className="font-semibold text-sm md:text-base text-black">{data.heading}</h3>
                <button className="rounded-full">
                  {/* Toggle the icon based on whether this specific index is open */}
                  {openIndex === index ? <IoIosArrowDown /> : <IoIosArrowForward />}
                </button>
              </div>
              {openIndex === index && (
                <p className="text-sm md:text-base text-gray-700">{data.message}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QnaData