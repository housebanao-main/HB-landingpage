import React from 'react';
import Link from 'next/link';
import { usePopup } from '../context/PopupContext';

const Navbar = () => {
  const { openPopup } = usePopup();

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white text-black shadow-md px-4 md:px-8 py-4 flex flex-wrap justify-between items-center">
      <div className="text-lg font-bold md:ml-20">
        <Link href="#home">HouseBanao</Link>
      </div>
      <ul className="hidden md:flex flex-wrap justify-center space-x-4 md:space-x-8 text-sm md:text-base">
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#quickservices">Quick Services</Link></li>
        <li><Link href="#whyus">Why Us</Link></li>
        <li><Link href="#contactus">Contact Us</Link></li>
      </ul>
      <div className="hidden md:flex items-center space-x-2">
        <button onClick={openPopup} className="hover:underline md:mr-10 font-bold">
          Get in Touch
        </button>
      </div>
      {/* Mobile Menu */}
      <div className="flex md:hidden">
        <button onClick={openPopup} className="font-bold">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;