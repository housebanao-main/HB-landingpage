import React, { useEffect, useState } from 'react';
import { FaCogs, FaPaintBrush, FaHandshake, FaHammer, FaClock, FaEyeSlash } from 'react-icons/fa';

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
    <div className="bg-[#F5F5F7] px-4 md:px-20 py-20 relative">
      {/* Heading */}
      <div className="flex flex-col lg:flex-row items-start gap-8">
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold ml-4 md:ml-0 text-left uppercase">
            Why <span className="text-[#2A27E8]">House Banao</span>
          </h1>
        </div>
      </div>

      {/* Visual Image */}
      <div className="absolute hidden md:block top-[150px] left-4 md:left-20 w-[200px] md:w-[450px] h-[200px] md:h-[350px] opacity-100 animate-fadeIn">
        <img
          src="/description/Visuals.png" // Visual image
          alt="Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 mt-10 md:pl-[0px] md:pl-[540px] animate-columnShuffle">
        {shuffledBoxes.map((box, index) => (
          <div
            key={index}
            className="flex items-center w-full md:w-[340px] h-[70px] bg-[#FFFFFF] rounded-[20px] shadow-md border-t border-gray-200 px-2 py-10 gap-10 relative hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out"
          >
            {/* Icon Background */}
            <div
              className="w-[47px] h-[47px] absolute hidden md:block mt-7 ml-8 bg-[#E2E7F1] opacity-70"
              style={{
                top: '-10px',
                left: '-10px',
              }}
            ></div>
            {/* Icon */}
            <div className="w-16 h-16 md:w-20 md:h-20 mr-4 flex justify-center items-center">
              {box.icon}
            </div>
            <div className="text-sm md:text-lg font-medium text-gray-700">
              {box.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Description;