import React from 'react';
import logo from '../assets/ECapFX-LOGO-white.png';

const Header = () => {
  return (
    <header className="bg-[#101919] fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="items-center mx-auto flex max-w-screen-2xl p-4 relative">
        {/* Logo positioned absolutely */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
  <a href="#home" className="-m-1.5 p-1.5">
    <span className="sr-only">Windframe</span>
    <img src={logo} alt="Logo" className="w-2/5" /> {/* Veća širina */}
  </a>
</div>
        
        {/* Navigation centered with padding to avoid overlap */}
        <ul className="hidden lg:flex gap-20 text-white text-lg font-bold justify-center flex-1 pl-32 ml-[100px]">
          <li><a href="#home" className="font-bold hover:text-[#1d8348] transition font-poppins">Home</a></li>
          <li><a href="#chooseplan" className="font-bold hover:text-[#1d8348] transition">Choose Plan</a></li>
          <li><a href="#about" className="font-bold hover:text-[#1d8348] transition">About Us</a></li>
          <li><a href="#team" className="font-bold hover:text-[#1d8348] transition">Team</a></li>
          <li><a href="#contact" className="font-bold hover:text-[#1d8348] transition">Contact</a></li>
        </ul>
        
        {/* Get Started button */}
        <a
          className="px-5 py-2.5 text-white"
          style={{ backgroundColor: '#1d8348', borderRadius: '30px' }}
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}

export default Header;
