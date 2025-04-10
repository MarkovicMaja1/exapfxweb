import React from 'react';

const Team = () => {
  return (
    <section className="bg-[#101919] py-16 text-white text-center overflow-hidden">
      <h2 className="text-4xl font-extrabold mb-12">Meet Our Team</h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-6 px-6">
          
          {/* Michael Pearn */}
          <div className="bg-white text-black w-80 flex-shrink-0 rounded-xl shadow-md p-6 border-t-4 border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Michael Pearn</h3>
            <p className="text-yellow-600 text-lg">Founder & CEO</p>
            <p className="text-gray-600 leading-relaxed text-sm mt-2">
              As the visionary behind EcapFX, Michael leads the firm with extensive experience in proprietary trading and financial markets.
            </p>
          </div>

          {/* Carly Pearn */}
          <div className="bg-white text-black w-80 flex-shrink-0 rounded-xl shadow-md p-6 border-t-4 border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Carly Pearn</h3>
            <p className="text-yellow-600 text-lg">Co-Founder & Chief Sustainability Officer</p>
            <p className="text-gray-600 leading-relaxed text-sm mt-2">
              Carly oversees the firm's sustainability initiatives, ensuring that environmental and social responsibility are integrated into our business model.
            </p>
          </div>

          {/* Nebojša Sladoje */}
          <div className="bg-white text-black w-80 flex-shrink-0 rounded-xl shadow-md p-6 border-t-4 border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Nebojša Sladoje</h3>
            <p className="text-yellow-600 text-lg">Chief Operating Officer (COO)</p>
            <p className="text-gray-600 leading-relaxed text-sm mt-2">
              Nebojša is responsible for overseeing company operations and managing all internal teams.
            </p>
          </div>

          {/* Maja Marković */}
          <div className="bg-white text-black w-80 flex-shrink-0 rounded-xl shadow-md p-6 border-t-4 border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Maja Marković</h3>
            <p className="text-yellow-600 text-lg">Lead Developer</p>
            <p className="text-gray-600 leading-relaxed text-sm mt-2">
              Maja specializes in developing and optimizing our trading platform, ensuring seamless user experiences and cutting-edge trading tools.
            </p>
          </div>

          {/* Nikola Ilić */}
          <div className="bg-white text-black w-80 flex-shrink-0 rounded-xl shadow-md p-6 border-t-4 border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Nikola Ilić</h3>
            <p className="text-yellow-600 text-lg">Lead Developer</p>
            <p className="text-gray-600 leading-relaxed text-sm mt-2">
              Nikola focuses on building and maintaining the technical infrastructure that powers our proprietary trading systems.
            </p>
          </div>

          {/* Duplicirani Michael Pearn */}
          <div className="bg-white text-black w-80 flex-shrink-0 rounded-xl shadow-md p-6 border-t-4 border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Michael Pearn</h3>
            <p className="text-yellow-600 text-lg">Founder & CEO</p>
            <p className="text-gray-600 leading-relaxed text-sm mt-2">
              As the visionary behind EcapFX, Michael leads the firm with extensive experience in proprietary trading and financial markets.
            </p>
          </div>

          {/* Duplicirani Carly Pearn */}
          <div className="bg-white text-black w-80 flex-shrink-0 rounded-xl shadow-md p-6 border-t-4 border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Carly Pearn</h3>
            <p className="text-yellow-600 text-lg">Co-Founder & Chief Sustainability Officer</p>
            <p className="text-gray-600 leading-relaxed text-sm mt-2">
              Carly oversees the firm's sustainability initiatives, ensuring that environmental and social responsibility are integrated into our business model.
            </p>
          </div>

          {/* Duplicirani Nebojša Sladoje */}
          <div className="bg-white text-black w-80 flex-shrink-0 rounded-xl shadow-md p-6 border-t-4 border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">Nebojša Sladoje</h3>
            <p className="text-yellow-600 text-lg">Chief Operating Officer (COO)</p>
            <p className="text-gray-600 leading-relaxed text-sm mt-2">
              Nebojša is responsible for overseeing company operations and managing all internal teams.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
import React, { useState, useEffect, useCallback } from "react";

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const teamMembers = [
    {
      id: 1,
      name: "Michael Pearn",
      role: "Founder & CEO",
      description: "As the visionary behind EcapFX, Michael leads the firm with extensive experience in proprietary trading and financial markets."
    },
    {
      id: 2,
      name: "Carly Pearn",
      role: "Co-Founder & Chief Sustainability Officer",
      description: "Carly oversees the firm's sustainability initiatives, ensuring that environmental and social responsibility are integrated into our business model."
    },
    {
      id: 3,
      name: "Nebojša Sladoje",
      role: "Chief Operating Officer (COO)",
      description: "Nebojša is responsible for overseeing company operations and managing all internal teams."
    },
    {
      id: 4,
      name: "Maja Marković",
      role: "Lead Developer",
      description: "Maja specializes in developing and optimizing our trading platform, ensuring seamless user experiences and cutting-edge trading tools."
    },
    {
      id: 5,
      name: "Nikola Ilić",
      role: "Lead Developer",
      description: "Nikola focuses on building and maintaining the technical infrastructure that powers our proprietary trading systems."
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const itemsPerView = window.innerWidth < 640 ? 1 : 3;
      const maxIndex = teamMembers.length - itemsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  }, [teamMembers.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const itemsPerView = window.innerWidth < 640 ? 1 : 3;
      const maxIndex = teamMembers.length - itemsPerView;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(nextSlide, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <section className="bg-[#101919] py-16 text-center">
      <div className="mx-auto lg:max-w-4xl text-center">
        <p className="mt-12 text-4xl lg:text-5xl font-extrabold tracking-tight text-center text-white">Meet Our Team</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (window.innerWidth < 640 ? 100 : 100 / 3)}%)`
              }}
            >
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="w-full sm:w-1/3 flex-shrink-0 px-4"
                  role="article"
                  aria-label={member.name}
                >
                  <div className="bg-white rounded-xl shadow-md p-6 w-full border-t-4 border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">{member.name}</h3>
                    <p className="text-yellow-600 text-lg">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous slide"
          >
            {/* Ikona za prethodni slajd */}
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next slide"
          >
            {/* Ikona za sledeći slajd */}
          </button>

          <button
            onClick={toggleAutoplay}
            className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
          >
            {/* Ikona za play/pause */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;