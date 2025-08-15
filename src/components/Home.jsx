import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useTranslation } from 'react-i18next';
import mtrTvDark from '../assets/mtr_tv_dark.png';
import tradingView from '../assets/trading_view.png';
import Seo from '../components/Seo';

const Home = () => {
  const { t } = useTranslation();

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesOptions = {
    autoPlay: true,
    background: {
      color: { value: '#151515' },
    },
    fullScreen: {
      enable: false,
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: 'repulse' },
        onClick: { enable: false, mode: 'push' },
        resize: true,
      },
      modes: {
        repulse: { distance: 150, duration: 0.4 },
        push: { quantity: 4 },
        bubble: { distance: 400, size: 30, duration: 2, opacity: 0.8 },
      },
    },
    particles: {
      number: { value: 20, density: { enable: true, value_area: 600 } },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.3, max: 0.8 },
        random: true,
        animation: { enable: true, speed: 0.5, minimumValue: 0.3, sync: false },
      },
      size: {
        value: { min: 1, max: 3 },
        random: true,
        animation: { enable: true, speed: 2, minimumValue: 1, sync: false },
      },
      rotate: {
        value: 0,
        random: true,
        direction: 'random',
        animation: { enable: true, speed: 5, sync: false },
      },
      move: {
        enable: true,
        speed: 2,
        random: false,
        direction: 'none',
        straight: false,
        outModes: { default: 'out' },
        attract: { enable: false },
      },
      links: { enable: true, distance: 120, color: '#00ff99', opacity: 0.4, width: 1 },
      twinkle: { particles: { enable: true, frequency: 0.05, opacity: 1 } },
    },
    detectRetina: true,
  };

  return (
    <div id="home" className="relative">
      {/* Removed min-h-screen to prevent excessive height on vertical screens */}
      <Seo
        title={t('seo.title')}
        description={t('seo.description')}
        canonical="https://www.ecapfx.com/"
        metaTags={[
          { name: 'keywords', content: 'forex trading, funded trading, sustainability, EcapFX' },
          { property: 'og:title', content: t('seo.title') },
          { property: 'og:description', content: t('seo.description') },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: 'https://www.ecapfx.com/' },
          { property: 'og:image', content: 'https://www.ecapfx.com/images/og-image.jpg' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: t('seo.title') },
          { name: 'twitter:description', content: t('seo.description') },
          { name: 'twitter:image', content: 'https://www.ecapfx.com/images/og-image.jpg' },
        ]}
        schemaData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "ECAPFX",
          "url": "https://www.ecapfx.com/",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.ecapfx.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      <section className="relative flex items-center justify-center z-10 px-4 sm:px-6 md:px-8 lg:px-12 text-center mx-auto max-w-screen-2xl homePadding isolate">
        <svg
          className="w-[300px] h-[500px] sm:w-[468px] sm:h-[788px] absolute top-0 left-0 -z-10 transform-gpu overflow-hidden blur-2xl"
          viewBox="0 0 468 788"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              id="filter0_b_1410_520"
              x="-460.404"
              y="-139.896"
              width="1067.89"
              height="1067.89"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImageFix" stdDeviation="70.063" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1410_520" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_1410_520"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className="pt-[20px] lg:pt-[10px] mx-auto max-w-10xl">
          {/* Reduced pt-[51px] to pt-[20px] and lg:pt-[10px] to minimize top space */}
          <h3
            className="text-center mb-10 text-3xl sm:text-4xl tracking-wide uppercase text-[#1d8348] font-black uppercase"
            style={{ wordSpacing: '0.5rem' }}
          >
            {t('home.heading.tradeWithPurpose')}
          </h3>
          <h1
            className="text-white mt-4 text-center custom-heading text-12xl font-extrabold tracking-tight uppercase"
            style={{ letterSpacing: '0.03em' }}
          >
            {t('home.title.empowerYourTrading')}
          </h1>
          <h1
            className="text-white mt-4 text-center custom-heading text-12xl font-extrabold tracking-tight uppercase"
            style={{ letterSpacing: '0.03em' }}
          >
            {t('home.title.realFunding')}
          </h1>
          <h1
            className="text-white mt-4 text-center text-9xl font-extrabold tracking-tight"
            style={{ letterSpacing: '0.03em' }}
          >
            {/* {t('home.title.supportingSustainability')} */}
          </h1>

          <p className="text-white mt-10 text-[1rem] text-center ultra-bold uppercase">
            {t('home.paragraph.turnSimulatedTrading')}<br />
            {t('home.paragraph.turnSimulatedTrading2')}
          </p>
          <div className="mt-8 sm:mt-12 md:mt-16 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 px-4 sm:px-4 w-full">
          <a
            href="#pricingtable"
            target="_self"
            rel="noopener noreferrer"
            className="bg-gradient-to-r uppercase from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 px-4 sm:px-8 md:px-12 py-3 sm:py-4 rounded-lg text-white text-base sm:text-lg md:text-xl inline-block transition duration-300 ease-in-out hover:scale-105 active:cursor-pointer select-none w-full sm:w-auto max-w-[90%] md:max-w-[400px] text-center wide-button"
          >
            {t('home.button.startChallenge')}
          </a>
          {/* <a
            href="#pricingtable"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 px-12 py-4 rounded-lg text-white text-xl inline-block transition duration-300 ease-in-out hover:scale-110 active:cursor-pointer select-none w-full md:w-auto text-center"
          >
            {t('home.button.selectPlan')}
          </a> */}
          <a
            href="https://active.ecapfx.com/promotion/challenge?challengeId=8f7597f1-7574-11f0-9e58-21111e3a5c6c"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent uppercase border-2 border-white hover:bg-white hover:text-black hover:border-white px-4 sm:px-8 md:px-12 py-3 sm:py-4 rounded-lg text-white text-base sm:text-lg md:text-xl inline-block transition duration-300 ease-in-out hover:scale-105 active:cursor-pointer select-none w-full sm:w-auto max-w-[90%] md:max-w-[400px] text-center wide-button"
          >
            {t('home.button.getStarted')}
          </a>
          </div>

           <div className="py-12 bg-[#151515] dark:bg-opacity-10">
            <div className="container mx-auto px-4">
              <div className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  { title: 'forex' },
                  { title: 'metals' },
                  { title: 'indices' },
                  { title: 'commodities' },
                  { title: 'crypto' },
                  { title: 'stocks' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-4 rounded-lg shadow-md border border-[#f9e7a0] bg-[#1a1a1a] hover:scale-105 transition-transform z-20"
                  >
                    <div className="elementor-icon-box-content text-center">
                      <h6 className="text-base font-semibold text-white-100 dark:text-white uppercase">
                        {item.link ? <a href={item.link}>{t(`home.items.${item.title}`)}</a> : t(`home.items.${item.title}`)}
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* NEW: Trustpilot Review Widget */}
          <div className="w-full max-w-screen-xl mx-auto px-4 mb-10">
            <div 
              className="trustpilot-widget" 
              data-locale="en-GB"
              data-template-id="56278e9abfbbba0bdcd568bc"
              data-businessunit-id="68331593da567151e6b44a82"
              data-style-height="52px"
              data-style-width="100%"
              data-theme="dark"
            >
              <a 
                href="https://uk.trustpilot.com/review/ecapfx.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#00ff99] hover:underline"
              >
                Trustpilot
              </a>
            </div>
          </div>        
          <p className="disclaimer text-center text-[#f7e59f] font-semibold tracking-tight mt-1 uppercase">
            {t('home.disclaimer.text')}
          </p>

          <div className="mt-8 mb-8 flex justify-center gap-8">
            {/* Added mb-8 to reduce space below images */}
            <a href="https://prop.ecapfx.com" target="_blank" rel="noopener noreferrer">
              <img
                src={mtrTvDark}
                alt={t('home.image.mtrTvDark.alt')}
                loading="lazy"
                className="max-w-full h-28 sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
              />
            </a>
            <a href="https://prop.ecapfx.com" target="_blank" rel="noopener noreferrer">
              <img
                src={tradingView}
                alt={t('home.image.tradingView.alt')}
                className="max-w-full h-28 sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
              />
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .homePadding {
          padding-left: 1rem;
          padding-right: 1rem;
          padding-top: 200px; /* Big space for computers */
          padding-bottom: 4rem; /* Less space at bottom */
          margin-bottom: -1px;
        }

        @media (max-width: 1024px) { /* For tablets */
          .homePadding {
            padding-top: 150px; /* A bit less space on top */
            padding-bottom: 3rem;
          }
        }

        @media (max-width: 768px) { /* For phones */
          .homePadding {
            padding-left: 1rem;
            padding-right: 1rem;
            padding-top: 120px; /* Even less space so menu doesn't cover stuff */
            padding-bottom: 2rem; /* Super small bottom space */
          }
        }

        @media (max-width: 480px) { /* For really small phones */
          .homePadding {
            padding-top: 100px; /* Tiny top space */
            padding-bottom: 1.5rem;
          }
        }
        .wide-button {
          min-width: 280px;
          max-width: 400px;
          min-height: 50px;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          white-space: nowrap; /* Keeps text on one line */
        }

        @media (max-width: 1024px) {
          .wide-button {
            min-width: 240px;
            max-width: 350px;
            min-height: 48px;
          }
        }

        @media (max-width: 768px) {
          .wide-button {
            min-width: 100%; /* Full width on phones */
            max-width: 100%;
            min-height: 44px;
          }
        }

        @media (max-width: 480px) {
          .wide-button {
            min-width: 100%;
            max-width: 100%;
            min-height: 40px;
          }
        }
        .homePadding {
          padding-left: 1rem;
          padding-right: 1rem;
          padding-top: 200px; /* Fixed 200 to ensure content is below menu */
          padding-bottom: 4rem; /* Reduced from 10vh to control bottom space */
          margin-bottom: -1px;
        }

        @media (max-width: 768px) {
          .homePadding {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            padding-top: 120px; /* Slightly reduced for vertical screens, still below menu */
            padding-bottom: 4rem; /* Reduced to minimize bottom space */
          }
        }

        :global(#tsparticles canvas) {
          position: absolute !important;
          width: 100% !important;
          height: 100% !important;
          top: 0;
          left: 0;
          z-index: -1 !important;
          pointer-events: none;
        }
        .custom-heading {
          font-size: 5.2rem; /* Default font size for large screens */
          line-height: 1.0; /* Adjust line height for better readability */
        }

        @media (max-width: 1024px) {
          .custom-heading {
            font-size: 3.5rem; /* Smaller font size for tablets */
          }
        }

        @media (max-width: 768px) {
          .custom-heading {
            font-size: 2.5rem; /* Smaller font size for mobile */
          }
        }

        @media (max-width: 480px) {
          .custom-heading {
            font-size: 2rem; /* Even smaller for very small screens */
          }
        }
        .ultra-bold {
          font-weight: 900; /* Maximum font weight */
          text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.5); /* Subtle shadow for emphasis */
          letter-spacing: 0.05em; /* Slightly wider spacing for prominence */
        }
        .small-button {
          min-width: 50px;
          min-height: 32px;
        }

        @media (max-width: 768px) {
          .small-button {
            min-width: 40px;
            min-height: 28px;
          }
        }
        .disclaimer {
          font-size: 0.8rem !important; /* Smaller than text-base (16px), equivalent to ~11.2px */
          line-height: 1rem; /* Adjusted from leading-[3px] for readability */
        }
        /* NEW: Trustpilot widget styling */
        .trustpilot-widget {
          min-height: 52px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .trustpilot-widget a {
          font-size: 0.8rem;
          opacity: 0.7;
          transition: opacity 0.3s;
        }
        
        .trustpilot-widget a:hover {
          opacity: 1;
        }
      `}</style>
    </div>
  );
};

export default Home;