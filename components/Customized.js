'use client';
import React from 'react';

const Customized = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 p-4 md:p-8 mx-4 md:mx-20">
      {/* Cards Container */}
      <div className="flex flex-wrap gap-4 w-full lg:w-2/3 justify-between">
        {/* First Card */}
        <div className="relative w-full sm:w-[48%] lg:w-[45%] bg-gray-100 py-4 px-6 md:px-8 rounded-2xl">
          <h3 className="text-xl md:text-3xl font-extrabold text-center mb-4">Contact Us via WhatsApp</h3>
          <p className="text-black text-sm md:text-base text-center mb-6">Receive quick solutions instantly</p>

          {/* WhatsApp Logo and Text */}
          <div
            className="absolute hidden md:flex flex-col items-center justify-center"
            style={{
              width: '126.39px',
              height: '101.34px',
              top: '220px',
              left: '18px',
              backgroundColor: '#2A27E8',
              borderRadius: '24px',
              transform: 'translateY(-50%) rotate(-20deg)',
            }}
          >
            <img
              src="/service/whatsapp-logo.png"
              alt="WhatsApp Logo"
              className="w-12 h-12 mb-2"
            />
            <p className="font-bold text-white text-center">HouseBanao</p>
          </div>

          {/* Overlapping Join + Button */}
          <div className="flex justify-center mt-12">
            <a
              href="https://api.whatsapp.com/send?phone=9810432124"
              target="_blank"
              rel="noopener noreferrer"
              className="w-28 md:w-36 h-10 md:h-12 bg-green-600 text-white font-bold rounded-full hover:bg-green-500 flex items-center justify-center"
            >
              Join +
            </a>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative w-full sm:w-[48%] lg:w-[45%] bg-gray-100 py-4 px-6 md:px-8 rounded-2xl">
          <h3 className="text-xl md:text-3xl font-extrabold text-center mb-4">Get Estimate Calculation</h3>
          <p className="text-black text-sm md:text-base text-center mb-6">Get customized packages as per your need</p>

          {/* Button */}
          <div className="flex justify-center mt-6">
            <a
              href="https://api.whatsapp.com/send?phone=9810432124"
              target="_blank"
              rel="noopener noreferrer"
              className="w-28 md:w-36 h-10 md:h-12 bg-green-600 text-white font-bold rounded-full hover:bg-green-500 flex items-center justify-center"
            >
              Join +
            </a>
          </div>
        </div>
      </div>

      {/* Right-Side Section */}
      <div className="flex flex-col items-center justify-center w-full lg:w-1/3 mt-4 lg:mt-0">
        {/* "Contact Us" Button */}
        <div className="flex flex-col items-center gap-4 shadow-lg rounded-2xl p-4 bg-white">
          <a
            href="https://api.whatsapp.com/send?phone=9810432124"
            target="_blank"
            rel="noopener noreferrer"
            className="w-28 md:w-36 h-10 md:h-12 bg-black text-white font-bold rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2"
          >
            Contact Us
            <img
              src="/service/whatsapp-logo.png"
              alt="WhatsApp Logo"
              className="w-4 h-4 md:w-6 md:h-6"
            />
          </a>
        </div>

        {/* WhatsApp Exclusive Text */}
        <p className="text-center mt-4 text-gray-600 font-semibold text-sm md:text-base">WhatsApp Exclusive</p>
      </div>
    </div>
  );
};

export default Customized;
