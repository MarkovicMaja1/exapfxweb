import React from "react";
import { useTranslation } from 'react-i18next';
import joinDiscordImage from "../assets/joindiscord.png";
import logoImage from "../assets/ECapFX-LOGO-white.png";

const Discord = () => {
  const { t } = useTranslation();

  return (
    <div style={{ backgroundColor: "rgb(21, 21, 21)" }}>
      {/* Title Container */}
      <div className="text-center pt-24" style={{ backgroundColor: "rgb(21, 21, 21)" }}>
        <h2 className="text-4xl font-bold mb-4 text-white uppercase">{t('discord.title')}</h2>
      </div>
      
      {/* Main Content */}
      <div className="flex items-center justify-center py-24 p-6">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-start">
          {/* Floating Phone Image with Mask */}
          <div className="relative flex justify-center items-center h-[500px]">
            {/* Phone Image */}
            <div className="relative z-10 animate-rise animate-float transition-all duration-1000">
              <img
                src={joinDiscordImage}
                alt={t('discord.title')}
                className="w-96 shadow-xl"
              />
            </div>

            {/* Mask Layer */}
            <div
              className="absolute bottom-0 left-0 w-full h-[14%] z-20"
              style={{ backgroundColor: "rgb(21, 21, 21)" }}
            ></div>

            {/* Overlay Card */}
            <div
              className="absolute w-[90%] mx-auto p-6 bg-gradient-to-br from-[#f9e79f] via-[#1d8348] to-[#000000] rounded-xl shadow-lg text-white z-30"
            >
              <div className="flex flex-col items-center mb-5">
                <div className="w-15 h-8 flex items-center justify-center mb-4">
                  <img
                    src={logoImage}
                    alt="ECapFX Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-center w-full">
                  <div className="text-sm text-white mb-1">{t('discord.overlay.invitedText')}</div>
                  <div className="text-xl font-extrabold text-white mb-2">{t('discord.overlay.communityName')}</div>
                  <div className="text-xs mt-1">
                    <span className="text-white">{t('discord.overlay.onlineStatus')}</span>
                  </div>
                </div>
              </div>
              <a
                href="https://discord.gg/85UM4nTDJg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-[#f9e79f] via-[#e8c74d] to-[#1d8348] hover:from-[#f7d86e] hover:via-[#d7b73c] hover:to-[#156437] text-[#000000] text-[#000000] hover:text-[#ffffff] font-semibold text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition duration-300"
              >
                {t('discord.buttons.getStarted')} <i className="fab fa-discord" />
              </a>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <p className="text-white mb-6">
              {t('discord.description')}
            </p>
            <ul className="space-y-2 mb-6 text-white">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> {t('discord.features.supportChannels')}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> {t('discord.features.exclusiveOffers')}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> {t('discord.features.tradingEducation')}
              </li>
            </ul>
            <div className="flex gap-4">
              <a
                href="https://active.ecapfx.com/promotion/challenge"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 px-6 py-2 rounded-lg text-white inline-block transition duration-300 ease-in-out hover:scale-105 active:cursor-pointer select-none"
              >
                {t('discord.buttons.getStarted')}
              </a>
              <a
                href="#pricingtable"
                className="bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 px-6 py-2 rounded-lg text-white inline-block transition duration-300 ease-in-out hover:scale-105 active:cursor-pointer select-none"
              >
                {t('discord.buttons.selectPlan')}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Scoped CSS */}
      <style jsx>{`
        .py-24 {
          padding-bottom: 0rem;
          padding-top: 6rem;
        }
        .py-34 {
          padding-bottom: 0rem;
          padding-top: 8rem;
        }  
      `}</style>
    </div>
  );
};

export default Discord;