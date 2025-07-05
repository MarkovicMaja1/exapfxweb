import React from 'react';
import { useTranslation } from 'react-i18next';
import image1 from '../assets/investment.png';
import image2 from '../assets/growth.png';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* TOP GRADIENT DIV ABOVE SECTION */}
      <div className="relative w-full h-32 overflow-hidden bg-[#151515]">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="#e5e5e5" points="0,0 50,100 100,0" />
        </svg>
      </div>

      <section className="bg-[#151515] text-white pt-24 pb-14">
        <div className="mx-auto px-4 max-w-screen-2xl relative isolate">
          <div className="mx-auto lg:max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-center">
              {t('about.title.mainTitle')}
            </h2>
          </div>

          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 about-us-grid">
              <div className="about-us-text mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid grid-cols-1 gap-y-16">
                  <div className="text-left">
                    <h3 className="text-3xl font-semibold mb-4 inline-block">
                      {t('about.title.ecapfx')}
                    </h3>
                    <p className="text-lg text-white mb-4">
                      {t('about.description.ecapfx1')}
                    </p>
                    <p className="text-lg text-white mb-4">
                      {t('about.description.ecapfx2')}
                    </p>
                    <h3 className="text-3xl font-semibold mb-4 inline-block">
                      {t('about.title.mission')}
                    </h3>
                    <p className="text-lg text-white">
                      {t('about.description.mission')}
                    </p>
                  </div>
                </dl>
              </div>

              <div className="about-us-image ecoImage flex justify-center mt-10">
                <img
                  src={image2}
                  alt={t('about.image.alt')}
                  loading="lazy"
                  className="w-3/4 h-3/4 mr-10 rounded-lg bg-transparent hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 about-us-grid">
              <div className="text-left"></div>
              <div className="about-us-text mx-auto sm:mt-20 lg:max-w-4xl text-left">
                <dl className="grid grid-cols-1 gap-y-16">
                  <div className="about-us-image missionImage flex justify-center mr-10"></div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRADIENT DIV BELOW SECTION */}
      <div className="relative w-full h-32 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="#151515" points="0,0 50,100 100,0" />
        </svg>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .about-us-grid {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .about-us-text,
          .about-us-image {
            width: 100%;
            margin-bottom: 20px;
          }

          .about-us-text {
            order: 1;
          }

          .about-us-image {
            order: 2;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .ecoImage {
            margin-top: -40px;
          }

          .missionImage {
            margin-top: -20px;
            margin-right: -20px;
          }

          .line {
            margin-bottom: 70px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;