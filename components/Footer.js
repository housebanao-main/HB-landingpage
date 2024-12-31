// Footer.js
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-black px-6 py-8">
      <div className="max-w-[1290px] mx-auto grid lg:grid-cols-3 grid-cols-1 gap-8">
        {/* Contact Info */}
        <div className="text-white">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Phone: +91-9876543210</li>
            <li>Email: support@housebanao.com</li>
            <li>Address: 746A, 7th floor, JMD Megapolis, Sector 48, Gurgaon, Haryana 122018</li>
          </ul>
        </div>

        {/* About Us */}
        <div className="text-white">
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <ul className="space-y-2 text-sm mt-2">
            <li><Link href="#services">Our Services</Link></li>
            <li><Link href="#quickservices">Quick Services</Link></li>
            <li><Link href="#whyus">Why Choose Us</Link></li>
            <li><Link href="#contactus">Contact Us</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="text-white">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-white text-sm mt-8">
        © 2024 Vive HouseBanao Technologies Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
