import React from 'react';

const Card = ({ icon, title, subtitle, description }) => (
  <div className="bg-white text-black rounded-lg shadow p-2 sm:p-5 xl:p-7 text-center   sm:min-h-[175px] opacity-100">
    <img src={icon} alt="Icon" className="w-[32px] h-[24px] ml-0 mb-2 sm:mb-4" />
    <h3 className="text-[4vw] sm:text-[20px] text-[#0B1215] font-[500] leading-[30px] text-left">
      {title}
    </h3>
    <p className="text-[3.2vw] sm:text-[16px] lg:text-2xl font-[500] text-[#0B1215] sm:leading-[24px] text-left">
      {subtitle}
    </p>
    <p className="text-[2.8vw] sm:text-[12px] text-[#0B1215] font-[400] mt-2 sm:leading-[18px] text-left s,:text-nowrap">
      {description}
    </p>
  </div>
);

export default function FeatureBoxes() {
  const cardsData = [
    {
      icon: "/service/Vector.png",
      title: "123k+",
      subtitle: "Happy Customers",
      description: "Trusted by thousands",
    },
    {
      icon: "/service/Vector.png",
      title: "250+",
      subtitle: "Expert Professionals",
      description: "Delivering Excellence",
    },
    {
      icon: "/service/Vector.png",
      title: "500+",
      subtitle: "Projects Completed",
      description: "Transforming Dreams",
    },
  ];

  return (
    <div className=" grid grid-cols-3 sm:grid-cols-3 gap-4  ">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
        />
      ))}
    </div>
  );
}
