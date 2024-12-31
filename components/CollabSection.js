"use client";

import React from "react";
import Image from "next/image";

export const CollabsSection = () => {
  const icons = [
    "/images/bosch.png",
    "/images/asianpaintss.png",
    "/images/siemens.png",
    "/images/hettichh.png",
    "/images/dorset.png",
    "/images/dewa.png",
  ];

  return (
    <div className="bg-white w-full flex flex-col gap-4 mt-8 mb-16 px-20">
      <h1 className="text-5xl font-bold mt-20 text-left">Our Partners</h1>
      <h1 className="mt-4 text-xl text-gray-600 text-left">
        Great collaborations that produce great designs
      </h1>
      <div className="w-full h-auto relative flex items-center justify-center overflow-hidden mt-4">
        {/* Marquee Container */}
        <div className="marquee w-full">
          <div className="marquee-content flex animate-marquee">
            {/* First set of images */}
            {icons.map((icon, index) => (
              <div key={`partner-${index}`} className="flex-shrink-0 mx-[30px]">
                <Image
                  src={icon}
                  alt={`Partner ${index + 1}`}
                  className="h-[100px] object-contain w-[100px]"
                  width={100}
                  height={100}
                  priority={true}
                />
              </div>
            ))}
            {/* Second set of images (to create the seamless loop) */}
            {icons.map((icon, index) => (
              <div key={`partner-duplicate-${index}`} className="flex-shrink-0 mx-[30px]">
                <Image
                  src={icon}
                  alt={`Partner Duplicate ${index + 1}`}
                  className="h-[100px] object-contain w-[100px]"
                  width={100}
                  height={100}
                  priority={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
