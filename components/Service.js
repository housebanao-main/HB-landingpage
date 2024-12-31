import React from 'react';
import HomeInteriorCard from './Homeinteriorcard';
import Wrapper from './Wrapper';

const ServicesSection = ({ openPopup }) => {
  return (
    // <div className=" border-2 border-red-400">
      <Wrapper className={"bg-[#F5F5F7] py-16   mt-8 sm:mt-12 lg:mt-20 xl:mt-32 "}>
      {/* Heading */}
      <div className="mb-6 md:mb-12">
        <h1 className="text-left text-2xl lg:text-4xl xl:text-6xl  font-bold text-[#2A27E8] mb-4">SERVICE,</h1>
        <h2 className="text-left text-2xl lg:text-4xl xl:text-6xl  font-bold text-black">
          YOU WON'T GET ANYWHERE
        </h2>
      </div>

      {/* Service Boxes */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10 ">
        <HomeInteriorCard
          logo="/service/service1.png"
          heading="Home Interior"
          description="Elevate the aesthetic appeal and functionality of your living spaces with our bespoke home interior design solutions."
          bgColor="bg-[#FFFFFF]"
          onBookNow={openPopup}
          animationClass="hover:scale-105 hover:shadow-2xl transition duration-500"
        />
        <HomeInteriorCard
          logo="/service/service2.png"
          heading="Renovation"
          description="Transform your outdated or worn-out interiors into vibrant and revitalized spaces with our renovation services."
          bgColor="bg-[#E2E7F1]"
          onBookNow={openPopup}
          animationClass="hover:scale-105 hover:shadow-2xl transition duration-500"
        />
        <HomeInteriorCard
          logo="/service/service3.png"
          heading="Office Interior"
          description="Create inspiring and functional work environments with our office interior design and build services."
          bgColor="bg-[#FFFFFF]"
          onBookNow={openPopup}
          animationClass="hover:scale-105 hover:shadow-2xl transition duration-500"
        />
        <HomeInteriorCard
          logo="/service/service4.png"
          heading="Home Construction"
          description="At House Banao, we specialize in providing comprehensive home construction services aimed at bringing your dream home to life."
          bgColor="bg-[#E2E7F1]"
          onBookNow={openPopup}
          animationClass="hover:scale-105 hover:shadow-2xl transition duration-500"
        />
      </div>
      </Wrapper>
    // </div>
  );
};

export default ServicesSection;
