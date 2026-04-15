"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";
import { BUTTONS, TYPOGRAPHY } from "@/theme/styles";

const PartnershipSection = () => {
  return (
    <section className="  bg-white ">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-top justify-between md:gap-20 gap-8 px-6 md:px-10 md:py-10 py-4 ">
        <div className="flex-1 md:text-start text-center">
          <h2 className=" text-base sm:text-lg md:text-2xl lg:text-3xl font-bold uppercase mb-1 text-black">
            ForgeHire Strategic Partnerships For Boosting Small Businesses Online
          </h2>
          <p className={`${TYPOGRAPHY.body} md:mb-10 mb-4 max-w-4xl`}>
            Empower Your Business with ForgeHire Partnerships! We collaborate to streamline processes, optimize strategies, and enhance the online presence of small businesses. Join us on the journey to success!
          </p>
          <Button
            text="Know More"
            className={BUTTONS.primary}
            onClick={() => console.log("Directing to learn more...")}
          />
        </div>

        <div className="flex-none lg:flex-1 relative group cursor-pointer max-w-sm lg:max-w-md mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <Image
              src="/partners.svg"
              width={500}
              height={500}
              alt="Strategic Partnership"
              className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
