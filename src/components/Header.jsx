import React, { useState } from 'react';
import logo from '../assets/ECapFX-LOGO-white.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#101919] fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="items-center mx-auto flex max-w-screen-2xl p-4 relative">
        {/* Logo */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
          <a href="#home" className="-m-1.5 p-1.5">
            <span className="sr-only">Windframe</span>
            <img src={logo} alt="Logo" className="w-2/5" />
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-16 text-white text-lg font-bold justify-center flex-1 pl-32 ml-[100px]">
          <li><a href="#home" className="font-bold hover:text-[#1d8348] transition font-poppins">Home</a></li>
          <li><a href="#chooseplan" className="font-bold hover:text-[#1d8348] transition">Choose Plan</a></li>
          <li><a href="#about" className="font-bold hover:text-[#1d8348] transition">About Us</a></li>
          <li><a href="#team" className="font-bold hover:text-[#1d8348] transition">Team</a></li>
        </ul>

        <a
          className="px-5 py-2.5 text-white font-poppins hidden lg:block ml-auto bg-[#1d8348] rounded-3xl hover:text-black hover:bg-[#2ecc71] transition duration-300 ease-in-out"
        >
          Get Started
        </a>

        {/* Mobile menu button */}
        <div className="lg:hidden ml-auto z-20">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-[#101919] px-4 pt-4 pb-6">
          <ul className="space-y-4 text-white text-lg font-bold">
            <li><a href="#home" className="block hover:text-[#1d8348] transition"   onClick={() => setIsOpen(!isOpen)}>Home</a></li>
            <li><a href="#chooseplan" className="block hover:text-[#1d8348] transition"   onClick={() => setIsOpen(!isOpen)}>Choose Plan</a></li>
            <li><a href="#about" className="block hover:text-[#1d8348] transition"   onClick={() => setIsOpen(!isOpen)}>About Us</a></li>
            <li><a href="#team" className="block hover:text-[#1d8348] transition"   onClick={() => setIsOpen(!isOpen)}>Team</a></li>
            <li>
              <a
                className="px-5 py-2.5 text-white font-poppins bg-[#1d8348] rounded-3xl hover:text-black hover:bg-[#2ecc71] transition duration-300 ease-in-out inline-block"
              >
                Get Started
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
