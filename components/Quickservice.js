import React from 'react';
import Wrapper from './Wrapper';

const QuickService = () => {
  return (
    <div className="bg-white py-8 md:py-16  ">
    
      {/* Heading */}
      <Wrapper>
      <div className="text-center mb-8">
        <h1 className="text-2xl lg:text-4xl xl:text-6xl text-left  font-bold">
          <span className="text-black">QUICK </span>
          <span className="text-[#2A27E8]">SERVICES</span>
        </h1>
      </div>
      {/* Services and View All Button in Same Line */}
      <div className="flex justify-center items-center  gap-4 md:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 flex-wrap">
        {/* Service 1 */}
        <div className="flex flex-col items-center">
          <img
            src="/quickservice/plumber.png"
            alt="Plumber"
            className="w-[100px] h-[90px]"
          />
          <p className="mt-2 text-gray-700 text-sm">Plumber</p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center">
          <img
            src="/quickservice/electrician.png"
            alt="Electrician"
            className="w-[74px] h-[83px]"
          />
          <p className="mt-2 text-gray-700 text-sm">Electrician</p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center">
          <img
            src="/quickservice/carpenter.png"
            alt="Carpenter"
            className="w-[74px] h-[83px]"
          />
          <p className="mt-2 text-gray-700 text-sm">Carpenter</p>
        </div>

        {/* Service 4 */}
        <div className="flex flex-col items-center">
          <img
            src="/quickservice/painter.png"
            alt="Painter"
            className="w-[74px] h-[83px]"
          />
          <p className="mt-2 text-gray-700 text-sm">Painter</p>
        </div>

        {/* Service 5 */}
        <div className="flex flex-col items-center">
          <img
            src="/quickservice/pestcontrol.png"
            alt="Pest Control"
            className="w-[74px] h-[83px]"
          />
          <p className="mt-2 text-gray-700 text-sm">Pest Control</p>
        </div>

        {/* Service 6 */}
        <div className="flex flex-col items-center">
          <img
            src="/quickservice/gardener.png"
            alt="Gardening"
            className="w-[74px] h-[83px]"
          />
          <p className="mt-2 text-gray-700 text-sm">Gardening</p>
        </div>

        {/* Service 7 */}
        <div className="flex flex-col items-center">
          <img
            src="/quickservice/housekeeping.png"
            alt="Housekeeping"
            className="w-[74px] h-[83px]"
          />
          <p className="mt-2 text-gray-700 text-sm">Housekeeping</p>
        </div>

        {/* View All Button */}
        <div className="flex flex-col items-center">
          <button
            className="w-[130px] h-[130px] bg-[#E2E7F1] text-[#2A27E8] text-sm font-bold rounded-[14.72px] hover:bg-[#2A27E8] hover:text-white flex items-center justify-center"
            style={{
              padding: '18.41px 14.72px',
              gap: '14.72px',
              borderWidth: '3px',
              borderStyle: 'solid',
              borderColor: '#FFFFFF',
              opacity: 1, // Set opacity to 1 for visibility
            }}
          >
            View All
          </button>
        </div>
      </div>
      </Wrapper>
    </div>
  );
};

export default QuickService;
