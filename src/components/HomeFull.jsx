import React from 'react';
import backgroundImage from '../assets/so.svg';
import './Home.css'

const Home = () => {
  return (
    <div className="relative overflow-hidden flex items-center justify-center min-h-screen">
      {/* sivi filter */}
      <div
        className="absolute inset-0 animated-bg"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'sepia(1) saturate(5) hue-rotate(90deg) ',
          zIndex: -1, 
        }}
      ></div>

      <section className="flex flex-col items-center justify-center w-full max-w-screen-2xl p-4 isolate text-center">
       

        <div className="max-w-2xl mt-20">
          <p className="font-medium tracking-wide uppercase font-bold" style={{ color: '#d4ac0d' }}>
            Smart Trading
          </p>
          <p className="mt-2 text-4xl md:text-6xl font-extrabold tracking-tight text-black">
            Boost & Profit from Your Demo Trading
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Sharpen your trading skills on our FTMO demo platform—access up to $200,000 in virtual funds and claim up to 90% of your simulated profits
          </p>

          <div className="items-center justify-center mt-6 flex gap-3">
            <p className="text-gray-600">
              Take the first step toward becoming a pro trader today
            </p>
          </div>

          {/* Dugme */}
          <div className="mt-6 flex justify-center gap-4">
            <a
              className="px-5 py-2.5 rounded-md text-black border-2 border-[#f9e79f] hover:bg-[#f9e79f] transition-all"
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
