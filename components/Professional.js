import React from "react";
import Marquee from "react-fast-marquee";

const Professional = () => {
  const features = [
    "Professional Expertise",
    "No Hidden Cost",
    "Affordable Rates",
  ];

  return (
    <div className="relative w-full  sm:h-[115.89px] bg-[#F3144E] opacity-[0.9] rotate-[-3.8deg] py-4 sm:pt-4 shadow-lg rounded-lg border-t-[16px] border-t-[#ADFF00]">
      <div className="overflow-hidden w-full h-[55.25px] ">
        {/* Marquee Content */}
        <div className=" mt-4 flex whitespace-nowrap ">
          {/* Features */}
          {/* {features.concat(features).map((feature, index) => ( */}
          <Marquee autoFill={true}  >
            {features.map((feature, index) => (


            
            <div
              key={`feature-${index}`}
              className="flex items-center gap-3 mx-4 md:mx-8 lg:mx-[50px]  hover:opacity-80 transition duration-300 justify-center"
            >
              <img
                src="/service/subtract.png"
                alt="tick icon"
                className="w-8 h-8"
              />
              <span className="text-[#FFFFFF] font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">
                {feature}
              </span>
            </div>
            ))}

{/* } */}
            </Marquee>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
};

export default Professional;
