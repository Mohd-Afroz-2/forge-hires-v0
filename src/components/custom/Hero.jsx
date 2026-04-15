"use client";

import React from "react";
import Image from "next/image";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { BUTTONS, LAYOUT, TYPOGRAPHY } from "@/theme/styles";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="bg-white">
      {/* Inner Container matching PartnershipSection width & logic */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between min-h-[550px] lg:min-h-[70vh] md:gap-20 gap-8 px-6 md:px-10 py-5">
        
        {/* Text Block - Matching Partnership Section alignment */}
        <div className="flex-1 lg:text-start text-center flex flex-col items-center lg:items-start gap-6 animate-in fade-in slide-in-from-bottom-5 duration-1000">
          <h1 className={`${TYPOGRAPHY.h1} normal-case! tracking-tight text-black`}>
            Forge Hire
          </h1>
          <p className={`${TYPOGRAPHY.body} max-w-xl leading-relaxed`}>
            Forge Hire is a premier staffing agency that provides temporary and permanent staffing solutions to businesses, bridging the gap between talent and opportunity.
            <br className="hidden md:block" />
            We are committed to delivering exceptional service and value to both our clients and candidates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            <Button 
              text="Get Started" 
              className={BUTTONS.primary}
              onClick={() => router.push("/contact-us")} 
            />
          </div>
        </div>
        
        {/* Illustration Block - Card Design inspired by PartnershipSection */}
        <div className="flex-none lg:flex-1 relative group cursor-pointer max-w-sm lg:max-w-md mx-auto animate-in fade-in zoom-in-95 duration-1000 delay-200">
          <div className="relative overflow-hidden">
            <Image
              src="/Businessmerger-amico.svg"
              width={600}
              height={600}
              alt="Forge Hire Illustration"
              className="w-full h-auto object-cover p-8"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
