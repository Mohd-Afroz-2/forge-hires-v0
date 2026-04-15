"use client";

import React from "react";
import Image from "next/image";

import company_1 from "../../../public/trusted-company/Logo1.png";
import company_2 from "../../../public/trusted-company/Logo2.png";
import company_3 from "../../../public/trusted-company/Logo3.png";
import company_4 from "../../../public/trusted-company/Logo4.png";
import company_5 from "../../../public/trusted-company/Logo5.png";
import company_6 from "../../../public/trusted-company/Logo6.png";
import company_7 from "../../../public/trusted-company/Logo7.png";
import company_8 from "../../../public/trusted-company/logo8.png";
import company_9 from "../../../public/trusted-company/Logo9.png";
import company_10 from "../../../public/trusted-company/Logo10.png";
import company_11 from "../../../public/trusted-company/Logo11.png";
import company_12 from "../../../public/trusted-company/Logo12.png";
import company_13 from "../../../public/trusted-company/Logo13.png";
import company_14 from "../../../public/trusted-company/Logo14.png";
import company_15 from "../../../public/trusted-company/Logo15.png";
import company_16 from "../../../public/trusted-company/Logo16.png";
import company_17 from "../../../public/trusted-company/Logo17.png";
import company_18 from "../../../public/trusted-company/Logo18.png";

const TrustedBy = () => {

  const partners = [
    { logo: company_1 },
    { logo: company_2 },
    { logo: company_3 },
    { logo: company_4 },
    { logo: company_5 },
    { logo: company_6 },
    { logo: company_7 },
    { logo: company_8 },
    { logo: company_9 },
    { logo: company_10 },
    { logo: company_11 },
    { logo: company_12 },
    { logo: company_13 },
    { logo: company_14 },
    { logo: company_15 },
    { logo: company_16 },
    { logo: company_17 },
    { logo: company_18 },
  ];

  return (
    <section className="w-full overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 md:py-10 py-4">
        <h2 className="text-center  text-base sm:text-lg md:text-xl lg:text-2xl  font-bold uppercase mb-16">
          Trusted by 7537+ top companies across the world
        </h2>

        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center md:gap-16 gap-10 uppercase font-bold text-sm">
                {partners.map((partner, index) => (
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

          {/* Fade gradients for smooth entry/exit */}
          {/* <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-10 pointer-events-none"></div> */}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
