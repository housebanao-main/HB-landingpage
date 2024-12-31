"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Wrapper from "./Wrapper";

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
    <div className="l">
      <Wrapper className={" mx-auto w-full flex flex-col gap-1 mt-8 mb-8 sm:mb-16 "}>
      <h1 className="text-left text-2xl lg:text-4xl xl:text-6xl font-bold">Our Trusted Partners</h1>
      <h1 className="mt-2 sm:mt-4 text-sm sm:text-lg lg:text-xl text-gray-600">
        Great collaborations that produce great designs
      </h1>
      <div className="w-full h-auto relative flex items-center justify-center overflow-hidden">
        {/* Marquee Container */}
        <div className="marquee w-full">
          {/* <div className="marquee-content flex animate-marquee"> */}
            {/* First set of images */}
            <Marquee autoFill={true} >
            {icons.map((icon, index) => (
              <div key={`partner-${index}`} className="flex-shrink-0 mx-4 sm:mx-[30px]">
                <Image
                  src={icon}
                  alt={`Partner ${index + 1}`}
                  className="h-[100px] object-contain w-[100px] "
                  // style={{mixBlendMode: 'multiply'}}
                  width={100}
                  height={100}
                  priority={true}
                />
              </div>
            ))}
            </Marquee>
            {/* Second set of images (to create the seamless loop) */}
            {/* {icons.map((icon, index) => (
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
            ))} */}
          {/* </div> */}
        </div>
      </div>
      </Wrapper>
    </div>
  );
};
