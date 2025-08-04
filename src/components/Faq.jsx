import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  // Initialize AOS and reset scroll position only if no hash
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // FAQ data
  const faqs = [
    {
      question: t('faq.whatIsECAPFX.question'),
      answer: t('faq.whatIsECAPFX.answer'),
    },
    {
      question: t('faq.challengeTypes.question'),
      answer: t('faq.challengeTypes.answer'),
    },
    {
      question: t('faq.evaluationCriteria.question'),
      answer: t('faq.evaluationCriteria.answer'),
    },
    {
      question: t('faq.fundingTime.question'),
      answer: t('faq.fundingTime.answer'),
    },
    {
      question: t('faq.profitSplit.question'),
      answer: t('faq.profitSplit.answer'),
    },
    {
      question: t('faq.keepProfits.question'),
      answer: t('faq.keepProfits.answer'),
    },
    {
      question: t('faq.prohibitedPractices.question'),
      answer: t('faq.prohibitedPractices.answer'),
    },
    {
      question: t('faq.ruleBreaks.question'),
      answer: t('faq.ruleBreaks.answer'),
    },
    {
      question: t('faq.uniqueDifference.question'),
      answer: t('faq.uniqueDifference.answer'),
    },
    {
      question: t('faq.supportedPlatforms.question'),
      answer: t('faq.supportedPlatforms.answer'),
    },
    {
      question: t('faq.supportHours.question'),
      answer: t('faq.supportHours.answer'),
    },
    {
      question: t('faq.givingBack.question'),
      answer: t('faq.givingBack.answer'),
    },
    {
      question: t('faq.gettingStarted.question'),
      answer: t('faq.gettingStarted.answer'),
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation variants for dropdown effect
  const answerVariants = {
    hidden: { maxHeight: 0, opacity: 0, overflow: 'hidden' },
    visible: {
      maxHeight: 250,
      opacity: 1,
      transition: {
        maxHeight: { duration: 0.5, ease: 'easeInOut' },
        opacity: { duration: 0.3, delay: 0.1 },
      },
    },
    exit: {
      maxHeight: 0,
      opacity: 0,
      transition: {
        maxHeight: { duration: 0.5, ease: 'easeInOut' },
        opacity: { duration: 0.2 },
      },
    },
  };

  return (
    <section
      id="faq"
      className="pt-[73px] lg:pt-[63px] bg-gradient-to-br from-[#0e404f] via-[#0e404f] to-green-800 sm:from-[#0e404f] sm:via-[#0e404f] sm:to-green-900 dark:from-slate-800 dark:via-slate-700 dark:to-green-800 mt-16 relative overflow-hidden min-h-screen font-sans text-white"
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="absolute inset-0 opacity-5 sm:opacity-10 hidden sm:block">
        <div className="absolute w-64 h-64 bg-green-400 rounded-full -top-32 -left-32 transform rotate-45 blur-xl"></div>
        <div className="absolute w-48 h-48 bg-blue-300 rounded-full top-1/4 right-1/4 transform -rotate-15 blur-xl"></div>
        <div className="absolute w-72 h-72 bg-white rounded-full bottom-1/3 left-1/4 transform rotate-30 blur-xl"></div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-24 relative z-10 text-center">
        {/* Title Section */}
        <div className="mx-auto lg:max-w-4xl">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
            {t('faq.title')}
          </h2>
          <p className="mb-24 text-xl font-medium tracking-tight text-white">
            {t('faq.description')}
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1E2A44] rounded-lg p-4 sm:p-6 overflow-hidden border border-[#1E2A44] transition duration-500"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
              id={`accordion-${index}`}
            >
              <button
                className={`group inline-flex items-center justify-between text-left text-2xl sm:text-3xl font-semibold text-white w-full transition duration-500 hover:text-[#1d8348] ${
                  openIndex === index ? 'text-[#1d8348]' : ''
                }`}
                onClick={() => toggleFaq(index)}
                aria-controls={`collapse-${index}`}
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-6 h-6 transition duration-500 ${
                    openIndex === index ? 'hidden' : 'block'
                  } group-hover:text-[#1d8348] ${
                    openIndex === index ? 'text-[#1d8348]' : 'text-white'
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18M12 18V6"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <svg
                  className={`w-6 h-6 transition duration-500 ${
                    openIndex === index ? 'block' : 'hidden'
                  } group-hover:text-[#1d8348] ${
                    openIndex === index ? 'text-[#1d8348]' : 'text-white'
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 12H18"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    id={`collapse-${index}`}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={answerVariants}
                    className="w-full overflow-hidden pr-4"
                    aria-labelledby={`accordion-${index}`}
                  >
                    <p className="mt-4 text-white text-sm sm:text-base font-normal leading-6">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Navigation Links to Homepage Sections */}
        <div className="mt-8 flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6">
         </div>
      </div>

      {/* Custom Scoped CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          .mb-24 {
            margin-bottom: 6rem;
          }
        }
        #faq button {
          font-size: 1.5rem !important;
        }
        @media (min-width: 640px) {
          #faq button {
            font-size: 1.375rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Faq;