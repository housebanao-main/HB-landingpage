import React from 'react';
import { FaTools, FaHandsHelping, FaMoneyBillWave, FaCheckCircle, FaEyeSlash } from 'react-icons/fa';

const Steps = () => {
  const steps = [
    { name: 'Professional Expertise', icon: <FaTools /> },
    { name: 'Reliable Service', icon: <FaHandsHelping /> },
    { name: 'Affordable Rates', icon: <FaMoneyBillWave /> },
    { name: 'Quality Checks', icon: <FaCheckCircle /> },
    { name: 'No Hidden Costs', icon: <FaEyeSlash /> },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-5 py-4  font-poppins">
      {/* Steps */}
      <div className="flex flex-wrap justify-between mt-10 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center w-36 h-36 border-4 border-gray-400 rounded-full text-center p-5 bg-transparent"
          >
            <div className="text-3xl text-gray-500 mb-3">{step.icon}</div>
            <div className="text-sm font-medium text-gray-700">{step.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
