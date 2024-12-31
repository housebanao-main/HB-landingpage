import React from 'react';
import { usePopup } from '../context/PopupContext';

const QuickService = () => {
  const { openPopup } = usePopup(); // Access the openPopup function

  return (
    <div className="bg-white p-30 md:p-8 mt-8 md:mt-14">
      {/* Heading */}
      <div className="text-center  py-3 mb-8">
        <h1 className="text-4xl md:text-6xl text-left ml-4 md:ml-16 font-bold">
          <span className="text-black">QUICK </span>
          <span className="text-[#2A27E8]">SERVICES</span>
        </h1>
      </div>
      {/* Services and View All Button in Same Line */}
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20">
        {/* Service Items */}
        {[
          { src: '/quickservice/plumber.png', alt: 'Plumber', label: 'Plumber' },
          { src: '/quickservice/electrician.png', alt: 'Electrician', label: 'Electrician' },
          { src: '/quickservice/carpenter.png', alt: 'Carpenter', label: 'Carpenter' },
          { src: '/quickservice/painter.png', alt: 'Painter', label: 'Painter' },
          { src: '/quickservice/pestcontrol.png', alt: 'Pest Control', label: 'Pest Control' },
          { src: '/quickservice/gardener.png', alt: 'Gardening', label: 'Gardening' },
          { src: '/quickservice/housekeeping.png', alt: 'Housekeeping', label: 'Housekeeping' },
        ].map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={service.src}
              alt={service.alt}
              className="w-[60px] h-[60px] md:w-[80px] md:h-[83px]"
            />
            <p className="mt-2 text-gray-700 text-xs md:text-sm">{service.label}</p>
          </div>
        ))}

        {/* View All Button */}
        <div className="flex flex-col items-center">
          <button
            onClick={openPopup} // Open the popup on click
            className="w-[100px] h-[100px] md:w-[130px] md:h-[130px] bg-[#E2E7F1] text-[#2A27E8] text-xs md:text-sm font-bold rounded-[12px] md:rounded-[14.72px] hover:bg-[#2A27E8] hover:text-white flex items-center justify-center"
            style={{
              padding: '12px 10px',
              gap: '10px',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: '#FFFFFF',
              opacity: 1,
            }}
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickService;