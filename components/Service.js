import React from 'react';
import HomeInteriorCard from './Homeinteriorcard';

const ServicesSection = ({ openPopup }) => {
  return (
    <div className="bg-[#F5F5F7] p-8 mt-40">
      {/* Heading */}
      <div className="mb-12 text-left ml-20 md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-[#2A27E8] mb-4">SERVICE,</h1>
        <h2 className="text-4xl md:text-6xl font-bold text-black">
          YOU WON'T GET ANYWHERE
        </h2>
      </div>

      {/* Service Boxes */}
      <div className="container mx-auto flex flex-wrap gap-8 justify-center md:justify-start">
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
    </div>
  );
};

export default ServicesSection;
