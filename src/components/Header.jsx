import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../assets/ECapFX-LOGO-white.png';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="bg-[#151515] fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        background: `linear-gradient(to bottom, #151515 98%, rgba(185, 179, 179, 0.61) 100%)`
      }}>
      <nav className="items-center mx-auto flex max-w-screen-2xl p-4 relative">
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
          <Link
            to="https://active.ecapfx.com/auth/signin"
            className="getstarted-button px-5 py-2.5 text-white font-roboto bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 rounded-2xl transition duration-300 ease-in-out hover:scale-105 active:cursor-pointer select-none"
          >
            {t('header.getStarted')}
          </Link>
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
              <Link
                to="https://active.ecapfx.com/auth/signin"
                className="bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 px-6 py-2 rounded-lg text-white inline-block transition duration-300 ease-in-out hover:scale-105 active:cursor-pointer select-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                {t('header.getStarted')}
              </Link>
            </li>
            <li className="mt-2">
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
      )}
      <style jsx>{`
        @media (max-width: 1160px) {
          .lg\\:flex {
            display: none !important;
          }
          .lg\\:block {
            display: none !important;
          }
          .lg\\:hidden {
            display: block !important;
          }
        }
        @media (min-width: 1160px) {
          .lg\\:flex {
            display: flex !important;
          }
          .lg\\:block {
            display: block !important;
          }
          .lg\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;