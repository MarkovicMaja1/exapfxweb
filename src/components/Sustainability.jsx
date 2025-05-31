import React from 'react';
import img3 from '../assets/sustainable3.png';
import image1 from '../assets/sustainable1.png';
import image2 from '../assets/sustainable2.png';
import quality from '../assets/quality.png';
import ability from '../assets/ability.png';
import gender from '../assets/gender-fluid.png';
import './Home.css';

const Suistanbility = () => {
  return (
    <div className="relative overflow-hidden">
      {/* <div className="animated-bg"></div> */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-0 mb-24">
        <div className="text-center sustainabillityPadding">
          <div className="mx-auto max-w-screen-xl relative isolate">
            <div className="mx-auto lg:max-w-4xl text-center">
              <h2 className="mt-2 text-4xl lg:text-5xl font-extrabold tracking-tight text-center">
                Our Focus On Sustainability
              </h2>
            </div>
            <div className="mx-auto lg:max-w-4xl text-center">
              <p className="mt-16 mb-16 text-lg leading-8 text-white-600">
                At ECAPFX, we align our efforts with the United Nations Sustainable Development Goals (SDGs) to create a meaningful global impact. Our focus is on three key areas, supported by a strategic three-year plan designed to drive measurable and lasting change
              </p>
            </div>
          </div>

          {/* Flex container for all three cards */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16 mt-8 justify-center">
            {/* First Card */}
            <div className="bg-[#101919] rounded-lg shadow-lg p-6 flex flex-row items-center text-white hover:bg-gray-800 transition duration-300 hover:scale-105 w-full lg:w-1/3">
              <div className="flex flex-col items-center text-center w-1/2">
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-800 rounded-full">
                  <img src={quality} alt="Empower Traders" className="w-10 h-10 object-contain filter brightness-100 saturate-200" />
                </div>
                <h5 className="text-xl font-semibold text-white mb-2">Clean Water & Sanitation</h5>
                <small className="text-sm">We support initiatives that provide access to clean water and sanitation for communities in need, ensuring a healthier and more sustainable future.</small>
              </div>
              <div className="w-1/2 flex justify-center">
                <a href="https://sdgs.un.org/goals/goal6" target="_blank" rel="noopener noreferrer">
                  <div className="h-32 w-32 flex items-center justify-center rounded-lg bg-white">
                    <img src={img3} alt="Clean Water & Sanitation" className="w-full object-cover rounded-lg" />
                  </div>
                </a>
              </div>
            </div>

            {/* Second Card */}
            <div className="bg-[#101919] rounded-lg shadow-lg p-6 flex flex-row items-center text-white hover:bg-gray-800 transition duration-300 hover:scale-105 w-full lg:w-1/3">
              <div className="flex flex-col items-center text-center w-1/2">
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-800 rounded-full">
                  <img src={ability} alt="Empower Traders" className="w-10 h-10 object-contain filter brightness-100 saturate-200" />
                </div>
                <h5 className="text-xl font-semibold text-white mb-2">Quality Education</h5>
                <small className="text-sm">Education is the key to opportunity. We contribute to programs that provide learning resources, scholarships, and training to empower the next generation.</small>
              </div>
              <div className="w-1/2 flex justify-center">
                <a href="https://sdgs.un.org/goals/goal4" target="_blank" rel="noopener noreferrer">
                  <div className="h-32 w-32 flex items-center justify-center rounded-lg bg-white">
                    <img src={image1} alt="Quality Education" className="w-full object-cover rounded-lg" />
                  </div>
                </a>
              </div>
            </div>

            {/* Third Card */}
            <div className="bg-[#101919] rounded-lg shadow-lg p-6 flex flex-row items-center text-white hover:bg-gray-800 transition duration-300 hover:scale-105 w-full lg:w-1/3">
              <div className="flex flex-col items-center text-center w-1/2">
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-800 rounded-full">
                  <img src={gender} alt="Empower Traders" className="w-10 h-10 object-contain filter brightness-100 saturate-200" />
                </div>
                <h5 className="text-xl font-semibold text-white mb-2">Gender Equality</h5>
                <small className="text-sm">We advocate for equal opportunities in finance and beyond, supporting programs that promote women’s participation in trading, education, and leadership.</small>
              </div>
              <div className="w-1/2 flex justify-center">
                <a href="https://sdgs.un.org/goals/goal5" target="_blank" rel="noopener noreferrer">
                  <div className="h-32 w-32 flex items-center justify-center rounded-lg bg-white">
                    <img src={image2} alt="Gender Equality" className="w-full object-cover rounded-lg" />
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

export default Suistanbility;