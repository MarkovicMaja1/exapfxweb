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
      faq_5: 900,
      faq_6: 1000,
      faq_7: 1100,
      faq_8: 1200,
      faq_9: 1300,
      faq_10: 1400,
      faq_11: 1500,
      faq_12: 1600,
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

  // Updated FAQ data
  const faqs = [
    {
      question: "What is ECAPFX?",
      answer: "ECAPFX is a proprietary trading firm that provides traders with access to funded capital after successfully completing a challenge. We combine performance-based funding with a commitment to positive global impact, donating 1% of annual profits to sustainability initiatives.",
    },
    {
      question: "What types of challenges do you offer?",
      answer: "We offer three structured challenge types designed for different levels of trading experience: Beginner – For those new to trading, Experienced – For traders with moderate experience, Seasoned – For professional and high-performance traders. Each structure comes with its own risk parameters, targets, and evaluation metrics.",
    },
    {
      question: "What are the evaluation criteria?",
      answer: "To pass a challenge, you must stay within the following rules: Daily Loss Limit, Max Drawdown, Profit Targets, Consistency Rules based on the type of challenge (Phased or Instant), Trailing Drawdown for Instant accounts, measured with precision.",
    },
    {
      question: "How long does it take to get funded?",
      answer: "After you pass the evaluation and complete KYC/AML compliance checks, we aim to provide access to your funded account within 5 calendar days.",
    },
    {
      question: "What is the profit split?",
      answer: "Your profit share depends on the challenge type and account tier selected. Details are clearly outlined before you start the challenge.",
    },
    {
      question: "Do I keep my profits?",
      answer: "Yes — funded traders receive a profit share from the earnings they generate, based on their selected model.",
    },
    {
      question: "What are prohibited practices?",
      answer: "We strictly prohibit strategies such as: Copy trading, High-frequency arbitrage, News exploitation, Any form of system abuse. Please review the full list on our Rules Page.",
    },
    {
      question: "What happens if I break the rules?",
      answer: "Rule violations may lead to disqualification or termination of your funded account. We encourage all traders to read and understand our guidelines before participating.",
    },
    {
      question: "What makes ECAPFX different from other prop firms?",
      answer: "At ECAPFX, we stand against cheap gimmicks and misleading promotions. We don’t offer shallow discounts or flashy marketing tricks just to drive volume. Our focus is on meaningful challenges that develop real traders, not short-term hype. We’re here to support long-term growth, accountability, and impact — both in trading and the world beyond.",
    },
    {
      question: "What platforms do you support?",
      answer: "We currently offer Match-Trader as our trading platform, available on both web and mobile for seamless trading across devices.",
    },
    {
      question: "What are your support hours?",
      answer: "Our support team is available 24/7 to assist you with any questions or technical issues. Whether you're just starting or actively trading, we’re always here to help.",
    },
    {
      question: "How does ECAPFX give back?",
      answer: "After your first successful year of trading, ECAPFX donates 1% of firm profits to sustainability-focused projects. It’s our way of aligning trading success with a greater purpose.",
    },
    {
      question: "How do I get started?",
      answer: "Sign up at ecapfx.com, choose the challenge that matches your level, and begin your evaluation. You’ll be guided through every step of the journey.",
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
        .animation-delay-900 {
          animation-delay: 900ms;
        }
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        .animation-delay-1100 {
          animation-delay: 1100ms;
        }
        .animation-delay-1200 {
          animation-delay: 1200ms;
        }
        .animation-delay-1300 {
          animation-delay: 1300ms;
        }
        .animation-delay-1400 {
          animation-delay: 1400ms;
        }
        .animation-delay-1500 {
          animation-delay: 1500ms;
        }
        .animation-delay-1600 {
          animation-delay: 1600ms;
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