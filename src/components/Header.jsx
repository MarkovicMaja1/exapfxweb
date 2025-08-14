import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/ECapFX-LOGO-white.png';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const [isCopied, setIsCopied] = useState(false);

  // Timer state from current time (02:02 AM CEST, August 05, 2025) to August 16, 2025
  const startDate = new Date('2025-08-05T02:02:00+02:00'); // 02:02 AM CEST
  const endDate = new Date('2025-08-21T23:59:59+02:00'); // End of August 21, 2025
  const [timeLeft, setTimeLeft] = useState(Math.floor((endDate - new Date()) / 1000));

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const remaining = Math.floor((endDate - now) / 1000);
      setTimeLeft(remaining >= 0 ? remaining : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format time
  const formatTime = (seconds) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("OFF40").then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <>
      {/* Banner Section */}
      <div
        className="fixed top-0 left-0 w-full h-16 sm:h-12 px-2 sm:px-4 flex items-center justify-between z-[1000] bg-gradient-to-r from-[#1a6f3d] to-[#145c33] border-b border-white/10"
        role="region"
        aria-label="Special offers"
      >
        {/* Menu Icon */}
        <div className="flex flex-col gap-1">
          <div className="h-0.5 w-3 bg-white transition-all duration-1000"></div>
          <div className="h-0.5 w-2 bg-white transition-all duration-1000"></div>
        </div>

        {/* Centered Banner Content */}
        <div className="flex items-center justify-center space-x-2 sm:space-x-3">
          <span className="font-bold text-white text-xs sm:text-sm hidden lg:block">ECAPFX: Exclusive Offer</span>
          <span className="text-white text-xs sm:text-sm truncate max-w-[120px] sm:max-w-[180px] lg:max-w-[370px]">
            {window.innerWidth >= 1024 ? "Claim 40% Off Across all One, Two Step Challenges Now with Promo Code!" : "Claim 40% off ECAP"}
          </span>
          <div className="px-[10px] w-[95px] h-[35px] rounded-[50px] overflow-hidden flex items-center gap-1 border-[1px] border-[#1a6f3d]" style={{ background: 'linear-gradient(0deg, #1a6f3d 0%, #145c33 100%)' }}>
         
            <p className="text-xs font-bold text-red uppercase text-center flex items-center justify-center gap-1">
              <span>OFF40</span>
              <button
                type="button"
                className="cursor-pointer transition-all duration-300 relative"
                onClick={handleCopy}
              >
                {isCopied ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-check">
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19 19" fill="none">
                    <path d="M18.3672 6.86819C18.3672 6.0013 17.8611 5.24305 17.1315 4.87266C16.7405 4.64074 16.2358 4.77709 16.0142 5.17408C15.7973 5.56301 15.9353 6.0543 16.3235 6.27245C16.5808 6.34745 16.7536 6.57732 16.7536 6.86818L16.7536 16.1309C16.7536 16.4885 16.491 16.7511 16.1334 16.7511L6.8675 16.7511C6.58732 16.7511 6.36734 16.5896 6.28439 16.3479C6.06625 15.9596 5.57416 15.8216 5.18523 16.0386C4.78824 16.2601 4.65189 16.7649 4.88382 17.1559C5.2578 17.8729 6.0105 18.3679 6.8675 18.3679L16.1334 18.3679C17.3583 18.3679 18.3672 17.3559 18.3672 16.1309L18.3672 6.86819ZM14.3256 2.82901C14.3256 1.60406 13.3176 0.592041 12.0926 0.592041L2.82675 0.59204C1.6018 0.59204 0.592934 1.60406 0.592934 2.82901L0.592933 12.0917C0.592933 13.3167 1.60179 14.3287 2.82675 14.3287L12.0926 14.3287C13.3176 14.3287 14.3256 13.3167 14.3256 12.0917L14.3256 2.82901ZM12.7128 2.82901L12.7128 12.0917C12.7128 12.4494 12.4503 12.7119 12.0926 12.7119L2.82675 12.7119C2.4691 12.7119 2.20576 12.4494 2.20576 12.0917L2.20576 2.82901C2.20576 2.47136 2.4691 2.20881 2.82675 2.20881L12.0926 2.20881C12.4503 2.20881 12.7128 2.47136 12.7128 2.82901Z" fill="white"></path>
                  </svg>
                )}
              </button>
            </p>
          </div>
        </div>

        {/* Timer */}
        <div className="flex items-center gap-1">
          <svg
            className="w-2.5 h-2.5 sm:w-3 sm:h-3"
            fill="currentColor"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
          </svg>
          <span className="text-white font-light text-[10px] sm:text-xs">
            {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Navigation Section */}
      <header className="bg-[#151515] fixed w-full p-4 z-[999] top-16 sm:top-12">
        <nav className="items-center mx-auto flex max-w-screen-2xl relative">
          {/* Logo */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10">
            <Link to="/#home" className="-m-1.5 p-1.5">
              <span className="sr-only">ECAPFX</span>
              <img src={logo} alt={t('header.logoAlt')} className="w-2/5" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex gap-16 text-white text-lg font-bold justify-center flex-1 pl-32 ml-[100px]">
            {t('header.navItems', { returnObjects: true }).map((item, index) => (
              <li key={index}>
                <Link to={item.to} className="font-bold hover:text-[#1d8348] transition font-roboto">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center ml-auto space-x-4">
            <a
              href="https://active.ecapfx.com/auth/signin"
              className="getstarted-button px-5 py-2.5 text-white font-roboto bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 rounded-2xl transition duration-300 ease-in-out hover:scale-105 active:cursor-pointer select-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('header.getStarted')}
            </a>
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden ml-auto z-20">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-[#101919] px-4 pt-4 pb-6">
            <ul className="space-y-4 text-white text-lg font-bold">
              {t('header.navItems', { returnObjects: true }).map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    className="block hover:text-[#1d8348] transition"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://active.ecapfx.com/auth/signin"
                  className="bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 px-6 py-2 rounded-lg text-white inline-block transition duration-300 ease-in-out hover:scale-105 active:cursor-pointer select-none"
                  onClick={() => setIsOpen(!isOpen)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t('header.getStarted')}
                </a>
              </li>
              <li className="mt-2">
                <LanguageSwitcher />
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;