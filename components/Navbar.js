import React, { useState, useEffect } from "react";
import { usePopup } from "../context/PopupContext";
import Wrapper from "./Wrapper";
import Image from "next/image";

export default function Navbar() {
  const { openPopup } = usePopup();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <Wrapper
        className={
          "absolute left-1/2 -translate-x-1/2 w-full z-50 text-white py-4 md:flex md:justify-between md:items-center"
        }
      >
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold">
            <a href="#home">HouseBanao</a>
          </div>
          <div className="block md:hidden">
            <button className="text-3xl" onClick={toggleMenu}>
              <Image
                src={
                  !isMenuOpen
                    ? "https://img.icons8.com/?size=100&id=3096&format=png&color=ffffff"
                    : "https://img.icons8.com/?size=100&id=6483&format=png&color=ffffff"
                }
                alt="menu-icon"
                width={25}
                height={10}
              />
            </button>
          </div>
        </div>
        <div className="hidden md:block">
        <Menu closeMenu={closeMenu} openPopup={openPopup} />
        </div>
        <div className="hidden md:flex items-center space-x-2">
          <button onClick={openPopup} className="hover:underline">
            Get in Touch
          </button>
        </div>
      </Wrapper>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white text-black shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={closeMenu}>
            <Image
              src="https://img.icons8.com/?size=100&id=6483&format=png&color=000000"
              alt="close-icon"
              width={25}
              height={10}
            />
          </button>
        </div>
        <Menu closeMenu={closeMenu} openPopup={openPopup} />
      </div>
    </>
  );
}

const Menu = ({ closeMenu, openPopup }) => (
  <ul className="mt-4 md:mt-auto text-center md:text-left md:bg-transparent md:flex space-y-5 md:space-y-0 md:space-x-6 lg:space-x-8">
    <li>
      <a href="#services" className="hover:text-blue-400" onClick={closeMenu}>
        Services
      </a>
    </li>
    <li>
      <a href="#quickservices" className="hover:text-blue-400" onClick={closeMenu}>
        Quick Services
      </a>
    </li>
    <li>
      <a href="#whyus" className="hover:text-blue-400" onClick={closeMenu}>
        Why Us
      </a>
    </li>
    <li>
      <a href="#contactus" className="hover:text-blue-400" onClick={closeMenu}>
        Contact Us
      </a>
    </li>
    <li className="flex md:hidden items-center space-x-2">
      <button
        onClick={() => {
          openPopup();
          closeMenu();
        }}
        className="hover:underline text-center w-full md:w-auto md:text-left"
      >
        Get in Touch
      </button>
    </li>
  </ul>
);
