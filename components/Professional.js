import React from "react";

const Professional = () => {
  const features = [
    "Professional Expertise",
    "No Hidden Cost",
    "Affordable Rates",
  ];

  return (
    <div className="relative w-full h-[115.89px] bg-[#F3144E] opacity-[0.9] rotate-[-3.8deg] pt-4 shadow-lg rounded-lg border-t-[16px] border-t-[#ADFF00]">
      <div className="overflow-hidden w-full h-[55.25px]">
        {/* Marquee Content */}
        <div className="marquee-content mt-4 flex whitespace-nowrap animate-marquee">
          {features.map((feature, index) => (
            <div
              key={`feature-${index}`}
              className="flex items-center gap-3 mx-[50px] hover:opacity-80 transition duration-300 justify-center"
            >
              <img
                src="/service/subtract.png"
                alt="tick icon"
                className="w-8 h-8"
              />
              <span className="text-[#FFFFFF] font-bold text-3xl">
                {feature}
              </span>
            </div>
          ))}
          {features.map((feature, index) => (
            <div
              key={`feature-duplicate-${index}`}
              className="flex items-center gap-3 mx-[50px] hover:opacity-80 transition duration-300 justify-center"
            >
              <img
                src="/service/subtract.png"
                alt="tick icon"
                className="w-8 h-8"
              />
              <span className="text-[#FFFFFF] font-bold text-3xl">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Professional;
