import React from 'react';
import backgroundImage from '../assets/so.svg';

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      {/* sivi filter */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'grayscale(100%)', 
          zIndex: -1, 
        }}
      ></div>

      <section className="mx-auto mt-16 pt-24 pb-28 relative max-w-screen-2xl p-4 isolate">
        <svg
          className="w-[468px] h-[788px] absolute top-0 left-0 -z-10 transform-gpu overflow-hidden blur-2xl"
          viewBox="0 0 468 788"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          id="Windframe_NOK9mFeZdV"
        >
          <g filter="url(#filter0_b_1410_520)">
            <circle cx="73.5409" cy="394.049" r="393.819" fill="white" fillOpacity="0.79" />
          </g>
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

        <div className="mx-auto max-w-2xl">
          <p className="text-center font-medium tracking-wide uppercase font-bold" style={{ color: '#d4ac0d' }}>
            Smart Trading
          </p>
          <p className="mt-2 text-center text-4xl md:text-6xl font-extrabold tracking-tight text-black">
            Boost & Profit from Your Demo Trading
          </p>
          <p className="mt-6 text-lg text-gray-600 text-center">
            Sharpen your trading skills on our FTMO demo platform—access up to $200,000 in virtual funds and claim up to 90% of your simulated profits!
          </p>

          <div className="items-center justify-center mt-6 flex gap-3">
            <svg
              className="w-6 h-6"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="Windframe_FRI9TmyUopO"
            >
              <path
                d="M11.0527 22.0752C17.128 22.0752 22.0527 17.1505 22.0527 11.0752C22.0527 4.9999 17.128 0.0751953 11.0527 0.0751953C4.97743 0.0751953 0.0527344 4.9999 0.0527344 11.0752C0.0527344 17.1505 4.97743 22.0752 11.0527 22.0752Z"
                fill="currentColor"
              />
              <path
                d="M5.55273 11.6251L8.85273 14.9251L16.5527 7.2251"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-center text-gray-600">
              Take the first step toward becoming a pro trader today!
            </p>
          </div>

          {/* Dugme */}
          <div className="mt-6 flex justify-center gap-4">
            <a
              className="px-5 py-2.5 rounded-md text-black border-2 border-[#f9e79f] hover:bg-[#f9e79f]  transition-all"
              href="#get-started"
            >
              Free Trial
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
