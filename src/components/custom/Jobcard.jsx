"use client";
import React, { useState } from "react";
import { useRouter } from 'next/navigation'; // Import hook

export default function Jobcard({ services }) {
  const router = useRouter(); // Hook initialize karo
  const [selectedData, setSelectedData] = useState(null);
  return (
    <main className="p-6 md:p-10 relative overflow-hidden">
      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setSelectedData(service)}
            className="transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 border border-gray-500 hover:shadow-lg bg-gray-200 rounded-xl py-10 px-4 text-black cursor-pointer"
          >
            <div className="text-3xl md:text-5xl mb-3 font-semibold">
              {String(service.id).padStart(2, "0")}
            </div>

            <div className="text-xs md:text-base lg:text-lg leading-tight font-semibold">
              {service.title}
            </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white p-6 max-h-[80vh] max-w-4xl mx-auto md:p-8 overflow-y-auto rounded-3xl shadow-2xl relative animate-in fade-in zoom-in duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedData(null)}
              className="absolute top-4 right-5 text-xl md:text-2xl font-bold cursor-pointer"
            >
              ✕
            </button>

            {/* Content */}
            <div className="flex md:flex-row flex-col md:gap-10 gap-4">
              <div>
                <div className=" border-b border-solid border-slate-900 mb-4">
                  <h2 className="text-sm md:text-xl font-bold text-slate-900 mb-4">
                    {selectedData.title}
                  </h2>
                  <h4>Across USA</h4>
                </div>

                <h2 className="font-bold text-lg mb-2">Job description</h2>

                <p className="text-xs text-justify md:text-base max-w-full overflow-y-auto whitespace-pre-line text-gray-700">
                  {selectedData.popupData}
                </p>
              </div>
              <div className=" md:mt-10 mt-0 flex md:flex-col max-w-auto flex-col sm:flex-row justify-evenly items-center gap-4">
                <div className="flex flex-col justify-center items-center  md:border md:border-width md:border-slate-900 md:rounded-3xl md:px-19 md:py-12">
                  <h3 className="text-center text-[12px] md:text-xl font-bold whitespace-nowrap md:mb-6 mb-2">
                    ARE YOU RECRUITING?
                  </h3>
                  <button className="md:px-6 md:w-auto w-fit p-2 py-2.5 text-[12px] md:text-lg bg-black text-white font-semibold rounded-lg transition-all duration-300 transform active:scale-97 shadow-md cursor-pointer whitespace-nowrap"  onClick={() => router.push("/contact-us")}>
                    Contact Us
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center md:border md:border-width md:border-slate-900 md:rounded-3xl md:px-10 md:py-12">
                  <h3 className="text-center text-[12px] md:text-xl font-bold whitespace-nowrap mb-2 md:mb-6">
                    LOOKING FOR YOUR NEXT ROLE?
                  </h3>
                  <button
                    className="md:px-6 p-4 py-2.5 md:w-auto w-fit text-[12px] md:text-lg bg-black text-white font-semibold rounded-lg transition-all duration-300 transform active:scale-95 shadow-md cursor-pointer whitespace-pre-line"
                    onClick={() => router.push("")}
                  >
                    Submit Resume
                  </button>
                </div>
                {/* <div className='flex flex-col gap-4 p-10 border border-slate-900 rounded-3xl items-center text-center'>
                            <h3 className='text-center '>ARE YOU RECRUITING?</h3>
                          <Button text="Contact Us" className='w-full md:w-auto px-6 py-2.5 text-base md:text-lg bg-black text-white font-semibold rounded-lg transition-all duration-300 transform active:scale-97 shadow-md cursor-pointer' onClick={() => router.push("/contact-us")} />
                          </div> */}
                {/* <div className='px-10 py-8 border border-slate-900 rounded-3xl'>
                            <h3 className='text-center leading-normal'>LOOKING FOR YOUR NEXT ROLE?</h3>
                          <Button text="Submit Resume" className='border-2 w-full md:w-auto border-black text-black md:text-lg text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-black hover:text-white transition-all duration-300 cursor-pointer' onClick={() => router.push("")} />
                          </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};


