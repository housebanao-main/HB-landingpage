import React from 'react';
import Steps from './Steps';

const PimpedImage = () => {
  const imageUrl = '/service/pimpedimage.png'; // Path to your image in the public folder
  const imageAlt = 'Pimped Image';

  return (
    <div className="flex flex-col justify-between items-center p-0 mt-20 h-screen m-0">
      {/* Image with Tailwind styling */}
      <img
        src={imageUrl}
        alt={imageAlt}
        className="w-full h-full object-cover rounded-none shadow-lg"
      />

      
    </div>
  );
};

export default PimpedImage;
