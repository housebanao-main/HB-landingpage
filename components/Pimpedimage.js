import React from 'react';
import Steps from './Steps';

const PimpedImage = () => {
  const imageUrl = '/service/pimpedimage.png'; // Path to your image in the public folder
  const imageAlt = 'Pimped Image';

  return (
    <div className="flex flex-col justify-between items-center bg-[#2A27E8] p-0  h-screen m-0">
      {/* Image with Tailwind styling */}
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-full ml-20 object-cover rounded-none shadow-lg"
      />

      
    </div>
  );
};

export default PimpedImage;
