import React from 'react';
import { useState, useEffect, useCallback } from "react";

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const blogPosts = [
    {
      id: 1,
      category: "Michael Pearn",
      title: "Founder & CEO",
      description: "As the visionary behind ECAPFX, Michael leads the firm with extensive experience in proprietary trading and financial markets."
    },
    {
      id: 2,
      category: "Carly Pearn",
      title: "Co-Founder & Chief Sustainability Officer",
      description: "Carly oversees the firm's sustainability initiatives, ensuring that environmental and social responsibility are integrated into our business model."
    },
    {
      id: 3,
      category: "Nebojša Sladoje",
      title: "Chief Operating Officer (COO)",
      description: "Nebojša is responsible for overseeing company operations and managing all internal teams."
    },
    {
      id: 4,
      category: "Maja Marković",
      title: "Lead Developer",
      description: "Maja specializes in developing and optimizing our trading platform, ensuring seamless user experiences and cutting-edge trading tools."
    },
    {
      id: 5,
      category: "Nikola Ilić",
      title: "Lead Developer",
      description: "Nikola focuses on building and maintaining the technical infrastructure that powers our proprietary trading systems."
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const itemsPerView = window.innerWidth < 640 ? 1 : 3;
      const maxIndex = blogPosts.length - itemsPerView;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  }, [blogPosts.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const itemsPerView = window.innerWidth < 640 ? 1 : 3;
      const maxIndex = blogPosts.length - itemsPerView;
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
    <section className="bg-[#151515] py-24 text-center">
      <div className="mx-auto lg:max-w-4xl text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-white">Meet The Team</h2>
        <p className="mb-24 text-4xl font-extrabold tracking-tight text-center text-white">Our Leadership & Talent</p>
      </div>

      <div className="max-w-7xl mx-auto px-8 paddingTeam">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (window.innerWidth < 640 ? 100 : 100 / 3)}%)`
              }}
            >
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="w-full sm:w-1/3 flex-shrink-0 px-4"
                  role="article"
                  aria-label={post.title}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transition-transform duration-300 border-t-4 border-green-600">
                    <div className="p-4"> {/* Reduced padding for smaller cards */}
                      <h4 className="mt-1 text-xl font-bold text-gray-900 leading-tight">
                        {post.category}
                      </h4>
                      <h5 className="mt-1 text-xl font-bold leading-tight text-green-600">
                        {post.title}
                      </h5>
                      <p className="mt-2 text-gray-600">{post.description}</p> {/* Reduced spacing for tighter content */}
                    </div>
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

          {/* <button
            onClick={toggleAutoplay}
            className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
          > */}
            {/* Ikona za play/pause */}
          {/* </button> */}
        </div>
        <style jsx>{`
          @media (max-width: 768px) {
          .paddingTeam{
            
              padding-left: 28px;
            padding-right:28px;
          }
      }
      `}</style>
      </div>
    </section>
  );
};

export default Team;


