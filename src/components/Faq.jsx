import React, { useState, useEffect } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Faq = () => {
  const [animatedElements, setAnimatedElements] = useState({});
  const [openIndex, setOpenIndex] = useState(null);

  // Reset scroll position to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this runs only on mount

  // Animation timeouts
  useEffect(() => {
    const delays = {
      heading: 0,
      intro: 200,
      faq_0: 400,
      faq_1: 500,
      faq_2: 600,
      faq_3: 700,
      faq_4: 800,
    };

    Object.keys(delays).forEach((key) => {
      setTimeout(() => {
        setAnimatedElements((prev) => ({ ...prev, [key]: true }));
      }, delays[key] + 200); // Animation duration (200ms) + delay
    });
  }, []);

  // Particle initialization
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Particle configuration
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
      number: { value: 30, density: { enable: true, value_area: 600 } },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.3, max: 0.8 },
        random: true,
        animation: { enable: true, speed: 0.5, minimumValue: 0.3, sync: false },
      },
      size: {
        value: { min: 1, max: 4 },
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
        random: true,
        direction: 'none',
        straight: false,
        outModes: { default: 'out' },
        attract: { enable: true, rotate: { x: 600, y: 1200 } },
      },
      links: { enable: true, distance: 120, color: '#00ff99', opacity: 0.4, width: 1 },
      twinkle: { particles: { enable: true, frequency: 0.05, opacity: 1 } },
    },
    detectRetina: true,
  };

  // Sample FAQ data
  const faqs = [
    {
      question: "What is ECAPFX?",
      answer: "ECAPFX is a platform that offers trading evaluation programs, allowing traders to demonstrate their skills and access funded accounts with up to 90% profit sharing.",
    },
    {
      question: "How do the evaluation steps work?",
      answer: "ECAPFX offers One Step, Two Step, Three Step, and Instant Funding programs. Each has specific profit targets, loss limits, and trading rules to qualify for a funded account.",
    },
    {
      question: "What is the profit split for funded accounts?",
      answer: "Once funded, traders can earn up to 90% of the profits generated, with ECAPFX retaining 10%.",
    },
    {
      question: "Are there any trading restrictions?",
      answer: "There are no consistency rules, allowing traders to trade on their own terms. However, specific leverage, loss limits, and minimum trading days may apply based on the chosen plan.",
    },
    {
      question: "How can I contact support?",
      answer: "You can reach ECAPFX support via email at support@eurocapex.com or by phone at +441618187456.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="relative bg-[#151515] min-h-screen">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Main Section */}
      <section className="relative z-10 pt-24 pb-24 px-4 sm:px-8 mx-auto max-w-screen-2xl text-center faqPadding isolate">
        {/* Background Blur SVG */}
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

        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <h1
            className={`animate-fadeInUp ${animatedElements.heading ? 'animated' : ''} text-white text-5xl sm:text-6xl font-extrabold tracking-tight animation-delay-0`}
            style={{ letterSpacing: '0.03em' }}
          >
            Frequently Asked Questions
          </h1>

          {/* Intro Text */}
          <p
            className={`animate-fadeInUp ${animatedElements.intro ? 'animated' : ''} text-white mt-6 text-lg sm:text-xl text-center font-medium animation-delay-200`}
          >
            Find answers to common questions about ECAPFX’s trading programs and funding opportunities.
          </p>

          {/* FAQ Accordion */}
          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`animate-fadeInUp ${animatedElements[`faq_${index}`] ? 'animated' : ''} bg-[#1a1a1a] rounded-lg border border-[#f9e7a0] p-4 sm:p-6 animation-delay-${400 + index * 100}`}
              >
                <button
                  className="w-full flex justify-between items-center text-left text-white text-base sm:text-lg font-semibold"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  <span className="ml-2">
                    {openIndex === index ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-white text-sm sm:text-base font-normal">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Scoped CSS */}
      <style jsx>{`
        .faqPadding {
          padding-left: 1rem;
          padding-right: 1rem;
          padding-top: 19vh;
          padding-bottom: 16vh;
        }

        @media (max-width: 768px) {
          .faqPadding {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            padding-top: 12vh;
            padding-bottom: 8vh;
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

        /* Animation Styles */
        .animate-fadeInUp {
          opacity: 0;
          transform: translateY(200px);
          position: absolute;
          animation: fadeInUp 0.2s ease-out forwards;
          will-change: opacity, transform;
        }

        .animate-fadeInUp.animated {
          position: relative;
        }

        .animation-delay-0 {
          animation-delay: 0ms;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        .animation-delay-800 {
          animation-delay: 800ms;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(200px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Faq;