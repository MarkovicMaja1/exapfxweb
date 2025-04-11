import React from 'react';
import funding from '../assets/funding2.png';
import network from '../assets/networking2.png';
import leadership from '../assets/leadership2.png';
import expansion from '../assets/expansion2.png';
import planet from '../assets/planet2.png';
import './Home.css'; // Obavezno zadrži ovo

const Goals = () => {
  const goalsData = [
    {
      image: funding,
      title: 'Empower Traders',
      text: 'Provide opportunities for skilled traders to scale their strategies with substantial funding.',
    },
    {
      image: network,
      title: 'Build a Thriving Community',
      text: 'Grow a network of <strong>1,000+ funded traders</strong> within the first year.',
    },
    {
      image: leadership,
      title: 'Drive Industry Leadership',
      text: 'Become the <strong>leading proprietary trading firm</strong> by 2030, measured by active traders, capital deployed, and profits.',
    },
    {
      image: expansion,
      title: 'Expand Globally',
      text: 'Establish a presence in <strong>at least 5 international markets</strong> within two years.',
    },
    {
      image: planet,
      title: 'Commit to Sustainability',
      text: 'Partner with eco-friendly initiatives and donate 1-3% of profits to sustainability-driven causes (SDGS).',
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* 👇 Animated Background */}
      <div className="animated-bg-goals"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 mb-24 relative z-10">
        <div className="text-center">
          <div className="mx-auto lg:max-w-4xl text-center">
            <p className="mt-2 text-4xl lg:text-5xl font-extrabold tracking-tight text-center">Our Goals</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16 mt-16">
            {goalsData.map((goal, index) => (
              <div
                key={index}
                className="bg-[#101919] rounded-lg shadow-lg p-4 flex flex-col items-center text-center text-gray-400 hover:bg-gray-800 transition duration-300"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-800 rounded-full">
                  <img
                    src={goal.image}
                    alt={goal.title}
                    className="w-10 h-10 object-contain filter brightness-100 saturate-200"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{goal.title}</h3>
                <p
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: goal.text }}
                />
              </div>
            ))}
          </div>

          <p className="text-lg text-gray-600 mt-16 mb-14">
            At ECAPFX, we believe in trading with purpose, where success isn’t just measured in profits but in the positive impact we create together. Join us, and be part of a prop firm that’s shaping the future of trading and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
