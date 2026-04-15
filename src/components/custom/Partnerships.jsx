"use client";

import React from "react";
import Image from "next/image";

import partner1 from "../../../public/partnerships/partner1.svg";
import partner2 from "../../../public/partnerships/partner2.svg";
import partner3 from "../../../public/partnerships/partner3.svg";
import partner4 from "../../../public/partnerships/partner4.svg";
import partner5 from "../../../public/partnerships/partner5.svg";
import partner6 from "../../../public/partnerships/partner6.svg";

const Partnerships = () => {

  const partnerships = [
    { logo: partner1 },
    { logo: partner2 },
    { logo: partner3 },
    { logo: partner4 },
    { logo: partner5 },
    { logo: partner6 },
  ];

  return (
    <section className="w-full overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 md:py-10 py-4">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-16">
          Thriving Partnerships Propel Business Growth.
        </h2>

        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center md:gap-16 gap-10 uppercase font-bold text-sm">
                {partnerships.map((partner, index) => (
                  <div key={index} className="flex flex-col items-center gap-2 md:gap-10 opacity-100 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer hover:scale-110">
                    <Image
                      src={partner.logo}
                      width={200}
                      height={200}
                      alt="partner logo"
                      className="md:h-10 h-10 w-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
