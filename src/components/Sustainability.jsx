import React from 'react';
import { useTranslation } from 'react-i18next';
import img3 from '../assets/sustainable3.png';
import image1 from '../assets/sustainable1.png';
import image2 from '../assets/sustainable2.png';
import quality from '../assets/quality.png';
import ability from '../assets/ability.png';
import gender from '../assets/gender-fluid.png';
import './Home.css';

const Sustainability = () => {
  const { t } = useTranslation();

  return (
    <div className="relative overflow-hidden">
      {/* <div className="animated-bg"></div> */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-0 mb-24">
        <div className="text-center sustainabillityPadding">
          <div className="mx-auto max-w-screen-xl relative isolate">
            <div className="mx-auto lg:max-w-4xl text-center">
              <h2 className="mt-2 text-4xl lg:text-5xl font-extrabold tracking-tight text-center uppercase">
                {t('sustainability.hero.title')}
              </h2>
            </div>
            <div className="mx-auto lg:max-w-4xl text-center">
              <p className="mt-16 mb-16 text-lg leading-8 text-white-600">
                {t('sustainability.hero.description')}
              </p>
            </div>
          </div>

          {/* Flex container for all three cards */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16 mt-8 justify-center">
            {/* First Card */}
            <div className="bg-[#101919] rounded-lg shadow-lg p-6 flex flex-row items-center text-white hover:bg-gray-800 transition duration-300 hover:scale-105 w-full lg:w-1/3">
              <div className="flex flex-col items-center text-center w-1/2">
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-800 rounded-full">
                  <img src={quality} alt={t('sustainability.cleanWater.imageAlt')} className="w-10 h-10 object-contain filter brightness-100 saturate-200" />
                </div>
                <h5 className="text-xl font-semibold text-white mb-2">{t('sustainability.cleanWater.title')}</h5>
                <small className="text-sm">{t('sustainability.cleanWater.text')}</small>
              </div>
              <div className="w-1/2 flex justify-center">
                <a href="https://sdgs.un.org/goals/goal6" target="_blank" rel="noopener noreferrer">
                  <div className="h-32 w-32 flex items-center justify-center rounded-lg bg-white">
                    <img src={img3} alt={t('sustainability.cleanWater.imageAlt')} className="w-full object-cover rounded-lg" />
                  </div>
                </a>
              </div>
            </div>

            {/* Second Card */}
            <div className="bg-[#101919] rounded-lg shadow-lg p-6 flex flex-row items-center text-white hover:bg-gray-800 transition duration-300 hover:scale-105 w-full lg:w-1/3">
              <div className="flex flex-col items-center text-center w-1/2">
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-800 rounded-full">
                  <img src={ability} alt={t('sustainability.qualityEducation.imageAlt')} className="w-10 h-10 object-contain filter brightness-100 saturate-200" />
                </div>
                <h5 className="text-xl font-semibold text-white mb-2">{t('sustainability.qualityEducation.title')}</h5>
                <small className="text-sm">{t('sustainability.qualityEducation.text')}</small>
              </div>
              <div className="w-1/2 flex justify-center">
                <a href="https://sdgs.un.org/goals/goal4" target="_blank" rel="noopener noreferrer">
                  <div className="h-32 w-32 flex items-center justify-center rounded-lg bg-white">
                    <img src={image1} alt={t('sustainability.qualityEducation.imageAlt')} className="w-full object-cover rounded-lg" />
                  </div>
                </a>
              </div>
            </div>

            {/* Third Card */}
            <div className="bg-[#101919] rounded-lg shadow-lg p-6 flex flex-row items-center text-white hover:bg-gray-800 transition duration-300 hover:scale-105 w-full lg:w-1/3">
              <div className="flex flex-col items-center text-center w-1/2">
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-800 rounded-full">
                  <img src={gender} alt={t('sustainability.genderEquality.imageAlt')} className="w-10 h-10 object-contain filter brightness-100 saturate-200" />
                </div>
                <h5 className="text-xl font-semibold text-white mb-2">{t('sustainability.genderEquality.title')}</h5>
                <small className="text-sm">{t('sustainability.genderEquality.text')}</small>
              </div>
              <div className="w-1/2 flex justify-center">
                <a href="https://sdgs.un.org/goals/goal5" target="_blank" rel="noopener noreferrer">
                  <div className="h-32 w-32 flex items-center justify-center rounded-lg bg-white">
                    <img src={image2} alt={t('sustainability.genderEquality.imageAlt')} className="w-full object-cover rounded-lg" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .sustainabillityPadding {
            padding-left: 12px;
            padding-right: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Sustainability;