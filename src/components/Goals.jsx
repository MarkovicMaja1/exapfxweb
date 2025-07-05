import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import AOS from 'aos';
import 'aos/dist/aos.css';
import funding from '../assets/funding2.png';
import network from '../assets/networking2.png';
import leadership from '../assets/leadership2.png';
import expansion from '../assets/expansion2.png';
import planet from '../assets/planet2.png';
import './Home.css';

const Goals = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const goalsData = [
    { image: funding, key: 'empowerTraders' },
    { image: network, key: 'buildThrivingCommunity' },
    { image: leadership, key: 'driveIndustryLeadership' },
    { image: expansion, key: 'expandGlobally' },
    { image: planet, key: 'commitToSustainability' },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      {/* <div className="animated-bg-goals"></div> */}

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 mb-24 relative z-10">
        <div className="text-center goalsPadding">
          <div className="mx-auto lg:max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-center">
              {t('goals.hero.title')}
            </h2>
            <p className="text-lg text-white-600 mt-10 mb-0">
              {t('goals.hero.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16 mt-16">
            {goalsData.map((goal, index) => (
              <div
                key={index}
                className="bg-[#101919] rounded-lg shadow-lg p-4 flex flex-col items-center text-center text-white hover:bg-gray-800 transition duration-300"
                data-aos="fade-up"
                data-aos-delay={`${index * 100}`}
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-800 rounded-full">
                  <img
                    src={goal.image}
                    alt={t(`goals.${goal.key}.imageAlt`)}
                    className="w-10 h-10 object-contain filter brightness-100 saturate-200"
                  />
                </div>
                <h5 className="text-xl font-semibold text-white mb-2">
                  {t(`goals.${goal.key}.title`)}
                </h5>
                <small
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: t(`goals.${goal.key}.text`) }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .goalsPadding {
            padding-left: 12px;
            padding-right: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Goals;