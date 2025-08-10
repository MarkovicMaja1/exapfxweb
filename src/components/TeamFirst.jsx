import React from 'react';
import { useState, useEffect, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import Mikecard from '../assets/Mikecard.png';
import carlypearn from '../assets/Carlycard.png';
import Nebocard from '../assets/Nebocard.png';
import Majacard from '../assets/Majacard.png';
import Nikolacard from '../assets/Nikolacard.png';

const TeamCard = ({ post }) => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100; // Character limit for truncation
  const isLongDescription = post.description.length > maxLength;
  const truncatedDescription = isLongDescription ? post.description.slice(0, maxLength) + '...' : post.description;

  return (
    <div
      className="w-full sm:w-1/3 flex-shrink-0 px-4"
      role="article"
      aria-label={post.title}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transition-transform duration-300 border-t-4 border-green-600 flex flex-col">
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-center mb-4">
            <div className="relative w-24 h-24">
              <img
                src={post.image}
                alt={`${post.title} Avatar`}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="absolute inset-0 rounded-full border-4 border-transparent transition-all duration-300 hover:border-gradient"></div>
            </div>
          </div>
          <h4 className="mt-1 text-xl font-bold text-gray-900 leading-tight line-clamp-1 min-h-[1.5rem]">
            {post.category}
          </h4>
          <h5 className="mt-1 text-xl font-bold leading-tight text-green-600 line-clamp-1 min-h-[1.5rem]">
            {post.title}
          </h5>
          <p className="mt-2 text-gray-600 min-h-[4.5rem]">
            {isExpanded || !isLongDescription ? post.description : truncatedDescription}
            {isLongDescription && (
              <button
                className="text-[#145c33] hover:text-[#03a84e] text-sm font-medium ml-2"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? t('team.readLess') : t('team.readMore')}
              </button>
            )}
          </p>
          <div className="flex-grow"></div>
          <ul className="flex justify-center mt-4">
            <li>
              <a href={post.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const blogPosts = [
    {
      id: 1,
      key: 'michaelPearn',
      category: t(`team.${'michaelPearn'}.category`),
      title: t(`team.${'michaelPearn'}.title`),
      description: t(`team.${'michaelPearn'}.description`),
      linkedin: 'https://www.linkedin.com/in/michael-pearn-4652ab8a/',
      image: Mikecard
    },
    {
      id: 2,
      key: 'carlyPearn',
      category: t(`team.${'carlyPearn'}.category`),
      title: t(`team.${'carlyPearn'}.title`),
      description: t(`team.${'carlyPearn'}.description`),
      linkedin: '#',
      image: carlypearn
    },
    {
      id: 3,
      key: 'nebojsaSladoje',
      category: t(`team.${'nebojsaSladoje'}.category`),
      title: t(`team.${'nebojsaSladoje'}.title`),
      description: t(`team.${'nebojsaSladoje'}.description`),
      linkedin: 'https://www.linkedin.com/in/nebojsa-sladoje',
      image: Nebocard
    },
    {
      id: 4,
      key: 'majaMarkovic',
      category: t(`team.${'majaMarkovic'}.category`),
      title: t(`team.${'majaMarkovic'}.title`),
      description: t(`team.${'majaMarkovic'}.description`),
      linkedin: 'https://www.linkedin.com/in/maja-markovic-75580a244/',
      image: Majacard
    },
    {
      id: 5,
      key: 'nikolaIlic',
      category: t(`team.${'nikolaIlic'}.category`),
      title: t(`team.${'nikolaIlic'}.title`),
      description: t(`team.${'nikolaIlic'}.description`),
      linkedin: 'https://www.linkedin.com/in/nikola-ilic-900a32138/',
      image: Nikolacard
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
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-white">
          {t('team.hero.title')}
        </h2>
        <p className="mb-24 text-4xl font-extrabold tracking-tight text-center text-white">
          {t('team.hero.subtitle')}
        </p>
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
                <TeamCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z"/>
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.59 16.59L13.17 12l-4.58-4.59L10 6l6 6-6 6z"/>
            </svg>
          </button>
        </div>
        <style jsx>{`
          @media (max-width: 768px) {
            .paddingTeam {
              padding-left: 28px;
              padding-right: 28px;
            }
          }
          .border-gradient {
            background: linear-gradient(45deg, #00b4db, #0083b0, #00d4ff);
            background-size: 200% 200%;
            animation: gradientAnimation 5s ease infinite;
          }
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .line-clamp-1 {
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .min-h-\[1\.5rem\] {
            min-height: 1.5rem;
          }
          .min-h-\[4\.5rem\] {
            min-height: 4.5rem;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Team;