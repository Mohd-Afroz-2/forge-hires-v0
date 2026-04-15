'use client'
import React, { useState } from 'react'
import HeroSectionForAll from '@/components/custom/HeroSectionForAll'
import { inputStyle } from '@/theme/styles'

const page = () => {
  const heroData = {
    title: "Resume Submission",
    description: "Forge Hire is a premier staffing agency that provides temporary and permanent staffing solutions to businesses, bridging the gap between talent and opportunity.",
    bgImage: "/heroImages/resume-submission.png"
  }

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    email: "",
    specialty: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      city: "",
      email: "",
      specialty: "",
      file: null,
    })
  };
  return (
    <>
      <HeroSectionForAll {...heroData} />
      <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-6 md:py-10 space-y-6">

        {/* Description */}
        <div>
          <p className="text-sm md:text-base lg:text-lg text-justify text-slate-700 leading-relaxed">
            Searching is a tedious and cumbersome process. We made it easy for you.
            ForgeHire puts resources and skilled experts in the market and brings
            opportunities to your doorstep, so the right opportunity doesn’t miss you!
            Our expert team understands market challenges and simplifies the hiring process.
            JUST SUBMIT to us — we’ll guide you through the process.
          </p>
        </div>

        {/* Heading */}
        <div>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-900">
            Submit Your Resume
          </h2>
        </div>

        {/* Form Section */}
        <div className="bg-gray-100 p-4 md:p-6 lg:p-8 rounded-2xl shadow-sm">

          {/* Title */}
          <p className="text-sm md:text-base lg:text-lg font-semibold text-blue-900 mb-6 md:mb-8">
            All the fields with an asterisk are required.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* Grid Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">

              <input
                type="text"
                name="firstName"
                placeholder="First Name*"
                className={inputStyle}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name*"
                className={inputStyle}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                className={inputStyle}
                onChange={handleChange}
              />

              <input
                type="text"
                name="city"
                placeholder="Select City"
                className={inputStyle}
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Primary Email"
                className={inputStyle}
                onChange={handleChange}
              />

              {/* File Upload */}
              <div className="sm:col-span-2 flex flex-col gap-2">

                <label className="text-sm md:text-base font-medium text-slate-700">
                  Upload Resume
                </label>

                <div className="flex flex-col sm:flex-row items-start sm:items-center cursor-pointer gap-3">

                  <input
                    type="file"
                    name="file"
                    onChange={handleChange}
                    className="w-full text-sm text-slate-600 
      file:mr-4 file:py-2 file:px-4 
      file:rounded-full file:border-0 
      file:text-sm file:font-semibold 
      file:bg-indigo-900 file:text-white 
      hover:file:bg-indigo-800 
      cursor-pointer"
                  />

                </div>
              </div>
            </div>

            {/* Specialty */}
            <div>
              <label className="block text-sm md:text-base font-semibold text-blue-900 mb-2">
                Speciality*
              </label>
              <input
                type="text"
                name="specialty"
                placeholder="Speciality"
                className={inputStyle}
                onChange={handleChange}
                required
              />
            </div>

            {/* Button */}
            <div className="flex justify-start sm:justify-start">
              <button
                type="submit"
                className="w-full sm:w-auto bg-indigo-900 text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-indigo-800 transition cursor-pointer"
              >
                Submit
              </button>
            </div>

          </form>
        </div>

      </section>
    </>
  )
}

export default page