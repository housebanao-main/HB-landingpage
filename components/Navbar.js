import React from 'react';
import Link from 'next/link';
import { usePopup } from '../context/PopupContext';

const Navbar = () => {
  const { openPopup } = usePopup();

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white text-black shadow-md px-4 md:px-8 py-4 flex justify-between items-center">
      <div className="text-lg md:ml-20 font-bold">
        <Link href="#home">HouseBanao</Link>
      </div>
      <ul className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-8 text-sm md:text-base">
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#quickservices">Quick Services</Link></li>
        <li><Link href="#whyus">Why Us</Link></li>
        <li><Link href="#contactus">Contact Us</Link></li>
      </ul>
      <div className="flex items-center space-x-2">
        <button onClick={openPopup} className="hover:underline md:mr-10 font-bold">
          Get in Touch
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
