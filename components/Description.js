import React, { useEffect, useState } from 'react';
import { FaCogs, FaPaintBrush, FaHandshake, FaHammer, FaClock, FaEyeSlash } from 'react-icons/fa';
import Wrapper from './Wrapper';

const Description = () => {
  const boxes = [
    { name: 'Flawless Execution', icon: <FaCogs className="text-black" /> },
    { name: 'Custom Designs', icon: <FaPaintBrush className="text-black" /> },
    { name: 'Reliable Services', icon: <FaHandshake className="text-black" /> },
    { name: 'Expert Craftsmanship', icon: <FaHammer className="text-black" /> },
    { name: 'Timely Delivery', icon: <FaClock className="text-black" /> },
    { name: 'No Hidden Costs', icon: <FaEyeSlash className="text-black" /> },
  ];

  const [shuffledBoxes, setShuffledBoxes] = useState(boxes);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffledBoxes((prev) => [...prev].sort(() => Math.random() - 0.5));
    }, 3000); // Shuffle every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#F5F5F7] py-8 sm:py-12 md:py-16  lg:py-20 relative">
      {/* Heading */}
      <Wrapper>
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="text-left">
          <h1 className=" font-bold text-2xl lg:text-4xl xl:text-6xl text-[#000000] uppercase">
            Why <span className="text-[#2A27E8]">House Banao</span>
          </h1>
        </div>
      </div>

      {/* Visual Image */}
      <div className="hidden xl:block absolute top-[200px] left-20 w-[450px] h-[350px] opacity-100 animate-fadeIn">
        <img
          src="/description/Visuals.png" // Visual image
          alt="Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Boxes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 gap-x-6 mt-4 sm:mt-10 xl:pl-[540px] xl:animate-columnShuffle">
        {shuffledBoxes.map((box, index) => (
          <div
            key={index}
            className="flex items-center w-80 sm:w-[340px] h-[70px] bg-[#FFFFFF] rounded-[20px] shadow-md border-t border-gray-200 px-2 py-10   sm:gap-6 md:gap-10 relative hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
          >
            {/* Icon Background */}
            <div
              className="w-[47px] h-[47px] absolute mt-7 ml-8 bg-[#E2E7F1] opacity-70"
              style={{
                top: '-10px',
                left: '-10px',
              }}
            ></div>
            {/* Icon */}
            <div className="w-20 h-20 mr-4 flex justify-center items-center">
              {box.icon}
            </div>
            <div className="text-base sm:text-lg font-medium text-gray-700">{box.name}</div>
          </div>
        ))}
      </div>
      </Wrapper>

    </div>
  );
};

export default Description;
