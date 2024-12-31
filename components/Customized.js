'use client';
import React from 'react';
import Wrapper from './Wrapper';

const Customized = () => {
  return (
    // <div className="flex justify-between gap-4 p-8 ml-20 mr-20">
      <Wrapper className={"flex flex-col md:flex-row items-center  justify-between gap-4 p-8 "}>
      {/* Cards Container */}
      <div className="flex flex-wrap  w-full gap-4 md:gap-10 ">
        {/* First Card */}
        <div className="relative w-full lg:w-[45%] bg-[#F5F5F5] py-4 px-8 rounded-2xl">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl  font-extrabold text-center mb-4">Contact Us via WhatsApp</h3>
          <p className="text-[#000000] text-sm sm:text-[16px] text-center mb-6">Receive quick solutions instantly</p>

          {/* WhatsApp Logo and Text */}
          <div
            className="absolute hidden lg:block"
            style={{
              width: '126.39px',
              height: '101.34px',
              top: '150px',
              left: '30px',
              backgroundColor: '#2A27E8',
              borderRadius: '24px',
              opacity: 1,
              transform: 'rotate(-20deg)',
            }}
          >
            <img
              src="/service/whatsapp-logo.png"
              alt="WhatsApp Logo"
              className="w-12 h-12 mb-2 mt-2 ml-10 items-center "
            />
            <p className="font-bold text-white text-center">HouseBanao</p>
          </div>

          {/* Overlapping Join + Button */}
          <div className="lg:absolute bottom-[10px] lg:left-1/2 transform lg:-translate-x-1/2 ">
            <a
              href="https://api.whatsapp.com/send?phone=9810432124"
              target="_blank"
              rel="noopener noreferrer"
              className="w-36 h-12 bg-[#48C857] text-white font-bold rounded-full hover:bg-[#40B94E] flex items-center justify-center mx-auto"
            >
              Join +
            </a>
          </div>
        </div>

        {/* Second Card */}
        <div className="relative w-full lg:w-[45%] bg-[#F5F5F5] py-4 px-8 rounded-2xl">
          <h3 className=" text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-center mb-4">Get Estimate Calculation</h3>
          <p className="text-[#000000] text-sm sm:text-[16px] text-center mb-6">Get the customized packages as per your need</p>

          {/* Button */}
          <div className="flex justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send?phone=9810432124"
              target="_blank"
              rel="noopener noreferrer"
              className="w-36 h-12 bg-[#48C857] text-white font-bold rounded-full hover:bg-[#40B94E] flex items-center justify-center"
            >
              Join +
            </a>
          </div>
        </div>
      </div>

      {/* Right-Side Section */}
      <div className="flex flex-col items-center justify-center w-[30%]">
        {/* "Contact Us" Button */}
        <div className="flex flex-col items-center gap-4 shadow-lg rounded-2xl">
          <a
            href="https://api.whatsapp.com/send?phone=9810432124"
            target="_blank"
            rel="noopener noreferrer"
            className="w-36 h-12 bg-black text-white font-bold rounded-lg hover:bg-gray-800 flex items-center justify-center gap-2"
          >
            Contact Us
            <img
              src="/service/whatsapp-logo.png"
              alt="WhatsApp Logo"
              className="w-6 h-6 ml-2"
            />
          </a>
        </div>

        {/* WhatsApp Exclusive Text */}
        <p className="text-center mt-4 text-gray-600 font-semibold text-sm sm:text-base">WhatsApp Exclusive</p>
      </div>
      </Wrapper>
    // </div>
  );
};

export default Customized;
