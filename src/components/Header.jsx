import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/ECapFX-LOGO-white.png';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  // Timer state from current time (04:27 PM CEST, August 04, 2025) to August 16, 2025
  const startDate = new Date('2025-08-04T16:27:00+02:00'); // 04:27 PM CEST
  const endDate = new Date('2025-08-16T23:59:59+02:00'); // End of August 16, 2025
  const [timeLeft, setTimeLeft] = useState(Math.floor((endDate - new Date()) / 1000)); // Start from current time

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText("NEW").then(() => {
      alert("Copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
    });
  };

  return (
    <>
      {/* Banner Section */}
      <div
        className="fixed top-0 left-0 w-full h-[67px] lg:h-[50px] px-5 sm:px-6 flex items-center justify-between z-[1000]"
        style={{
          background: 'radial-gradient(circle at top left, #1a6f3d 0%, #145c33 70%)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        role="region"
        aria-label="Special offers"
      >
        <div className="space-y-[5px]">
          <div className="h-[2px] bg-white transition-all duration-1000 w-[16px]"></div>
          <div className="h-[2px] bg-white transition-all duration-1000 w-[10px]"></div>
        </div>
        <div className="flex-1 h-full w-full relative overflow-hidden">
          <div className="w-full h-full pointer-events-none" aria-hidden="true"></div>
          <div className="absolute top-0 left-0 w-full h-fit" style={{ transform: 'translate(0px, 0px)' }}>
            <div>
              <div className="h-[67px] lg:h-[50px] flex items-center lg:justify-center justify-start relative" role="button" tabIndex="0">
                <div className="text-white text-sm flex lg:items-center items-start lg:gap-[10px] gap-[5px] lg:flex-row flex-col relative">
                  <span className="font-bold max-lg:hidden">ECAPFX: Exclusive Offer</span>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[6px] max-lg:hidden" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"></path>
                  </svg>
                  <span className="max-xsm:w-[160px] leading-[120%] max-xsm:text-[12px]">Claim 25% Off ECAPFX Challenges Now with Promo Code!</span>
                  <button className="bg-white/15 rounded-full px-2 py-[2px] text-[13px] uppercase flex items-center gap-[8px] transition-all duration-300 font-semibold hover:bg-white/20" type="button" onClick={copyToClipboard}>
                    <span className="translate-y-[0.5px]">
                      <span className="max-lg:hidden">CODE :</span> NEW
                    </span>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="text-[12px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path>
                    </svg>
                  </button>
                </div>
                <div className="absolute right-0 top-[50%] translate-y-[-50%] text-white flex flex-col items-center gap-[5px]">
                  <div className="flex items-center gap-[5px]">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-[12px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"></path>
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"></path>
                    </svg>
                    <span className="font-light text-sm text-nowrap">{formatTime(timeLeft)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <header className="bg-[#151515] fixed w-full p-4 z-[999] custom-header-offset">
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
      <style jsx>{`
        @media (max-width: 1023px) {
          .lg\\:flex {
            display: none !important;
          }
          .lg\\:block {
            display: none !important;
          }
          .lg\\:hidden {
            display: block !important;
          }
          .custom-header-offset {
            top: 67px;
          }
        }
        @media (min-width: 1024px) {
          .lg\\:flex {
            display: flex !important;
          }
          .lg\\:block {
            display: block !important;
          }
          .lg\\:hidden {
            display: none !important;
          }
          .custom-header-offset {
            top: 50px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;