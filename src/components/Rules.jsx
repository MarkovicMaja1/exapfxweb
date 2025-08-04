import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // If using react-router for navigation

const Rules = () => {
  const { t } = useTranslation();

  // Scroll to top on mount or tab visibility change
  useEffect(() => {
    window.scrollTo(0, 0);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        window.scrollTo(0, 0);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  const contentVariants = {
    hidden: (i) => ({
      opacity: 0,
      x: i % 2 === 0 ? -100 : 100,
      scale: 0.9,
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      scale: 1.05,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
        delay: 0.3 + i * 0.15,
      },
    }),
  };

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 + i * 0.15 },
    }),
  };

  const circleVariants = {
    hidden: { strokeDashoffset: 251.2 },
    visible: (i) => ({
      strokeDashoffset: 0,
      transition: { duration: 2, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 + i * 0.15 },
    }),
  };

  const tailwindColors = {
    'orange-500': '#f97316',
    'red-500': '#ef4444',
    'yellow-400': '#facc15',
    'purple-500': '#a855f7',
    'pink-500': '#ec4899',
    'blue-400': '#60a5fa',
    'indigo-500': '#6366f1',
    'green-500': '#22c55e',
    'emerald-500': '#10b981',
    'blue-300': '#93c5fd',
    'sky-400': '#38bdf8',
    'green-400': '#4ade80',
    'lime-500': '#84cc16',
    'amber-500': '#f59e0b',
    'yellow-300': '#fde047',
    'yellow-500': '#eab308',
    'purple-400': '#c084fc',
    'violet-500': '#8b5cf6',
    'yellow-200': '#fef08a',
    'purple-300': '#d8b4fe',
    'blue-200': '#bfdbfe',
    'green-300': '#86efac',
    'teal-500': '#14b8a6',
    'orange-300': '#fdba74',
  };

  const practices = [
    {
      title: t('rules.practices.outsourcingChallenge.title'),
      description: t('rules.practices.outsourcingChallenge.description'),
      color: 'from-orange-500 to-red-500',
    },
    {
      title: t('rules.practices.copyTrading.title'),
      description: t('rules.practices.copyTrading.description'),
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: t('rules.practices.highFrequencyArbitrage.title'),
      description: t('rules.practices.highFrequencyArbitrage.description'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: t('rules.practices.accountSharing.title'),
      description: t('rules.practices.accountSharing.description'),
      color: 'from-blue-400 to-indigo-500',
    },
    {
      title: t('rules.practices.platformExploits.title'),
      description: t('rules.practices.platformExploits.description'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: t('rules.practices.newsEventGambling.title'),
      description: t('rules.practices.newsEventGambling.description'),
      color: 'from-blue-300 to-sky-400',
    },
    {
      title: t('rules.practices.expertAdvisors.title'),
      description: t('rules.practices.expertAdvisors.description'),
      color: 'from-green-400 to-lime-500',
    },
    {
      title: t('rules.practices.teamTrading.title'),
      description: t('rules.practices.teamTrading.description'),
      color: 'from-orange-400 to-amber-500',
    },
    {
      title: t('rules.practices.roundTripScalping.title'),
      description: t('rules.practices.roundTripScalping.description'),
      color: 'from-yellow-300 to-yellow-500',
    },
    {
      title: t('rules.practices.tradingLimitsManipulation.title'),
      description: t('rules.practices.tradingLimitsManipulation.description'),
      color: 'from-purple-400 to-violet-500',
    },
    {
      title: t('rules.practices.falseIdentity.title'),
      description: t('rules.practices.falseIdentity.description'),
      color: 'from-yellow-200 to-yellow-400',
    },
    {
      title: t('rules.practices.gamblingBehaviour.title'),
      description: t('rules.practices.gamblingBehaviour.description'),
      color: 'from-purple-300 to-purple-500',
    },
    {
      title: t('rules.practices.consistencyRule.title'),
      description: t('rules.practices.consistencyRule.description'),
      color: 'from-blue-200 to-blue-400',
    },
    {
      title: t('rules.practices.misleadingConduct.title'),
      description: t('rules.practices.misleadingConduct.description'),
      color: 'from-green-300 to-teal-500',
    },
    {
      title: t('rules.practices.breachedAccountRules.title'),
      description: t('rules.practices.breachedAccountRules.description'),
      color: 'from-orange-300 to-orange-500',
    },
  ];

  return (
    <section
      id="rules"
      className="pt-24 bg-white relative overflow-hidden min-h-screen font-sans text-black"
    >
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      <div className="absolute inset-0 opacity-5 sm:opacity-10 hidden sm:block">
        <div className="absolute w-64 h-64 bg-green-400 rounded-full -top-32 -left-32 transform rotate-45 blur-xl"></div>
        <div className="absolute w-48 h-48 bg-blue-300 rounded-full top-1/4 right-1/4 transform -rotate-15 blur-xl"></div>
        <div className="absolute w-72 h-72 bg-gray-200 rounded-full bottom-1/3 left-1/4 transform rotate-30 blur-xl"></div>
      </div>

      {/* Hero Section */}
      <motion.div
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 relative z-10 text-center mb-[-75px] mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="mb-12 mx-auto lg:max-w-4xl">
          <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
            {t('rules.title')}
          </h2>
          <p className="text-lg sm:text-xl font-medium tracking-tight text-black">
            {t('rules.description')}
          </p>
        </div>
      </motion.div>

      {/* Rules Section */}
      <section
        className="relative px-6 sm:px-12 mx-auto max-w-6xl py-5"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/10x900.png?text=Dashed+Green+Line&color=1d8348)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '10px auto',
        }}
      >
        <div className="relative space-y-12">
          {practices.map((practice, index) => (
            <Rule
              key={index}
              custom={index}
              color={practice.color}
              number={String(index + 1).padStart(2, '0')}
              reverse={index % 2 === 1}
              contentVariants={contentVariants}
              badgeVariants={badgeVariants}
              circleVariants={circleVariants}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d8348] mt-6 leading-snug">{practice.title}</h3>
              <p className="text-black mt-3 text-base sm:text-lg leading-relaxed">{practice.description}</p>
            </Rule>
          ))}
        </div>
      </section>

      {/* Final Note */}
      <section className="relative px-6 sm:px-12 mx-auto max-w-6xl py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0] p-6 sm:p-8 rounded-2xl shadow-xl border border-[#1d8348]/20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-[#1d8348] mb-4">{t('rules.finalNote.heading')}</h3>
          <p className="text-black text-base sm:text-lg leading-relaxed">
            {t('rules.finalNote.text').split('<a')[0]}
            <Link
              to="/terms"
              className="text-[#1d8348] hover:underline"
            >
              Terms & Conditions
            </Link>
            {' and contact our 24/7 support team for clarification.'}
          </p>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="flex justify-center pt-16 pb-16 px-6 sm:px-12">
        <a
          href="https://active.ecapfx.com/auth/signin"
          target="_blank"
          rel="noopener noreferrer"
          className="getstarted-button text-lg sm:text-xl px-5 py-2.5 text-white font-roboto bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 rounded-2xl transition duration-300 ease-in-out hover:scale-105 select-none z-20 pointer-events-auto"
          style={{ pointerEvents: 'auto' }}
        >
          {t('rules.callToAction')}
        </a>
      </section>

      {/* Disclaimer */}
      <section className="pb-12 px-6 sm:px-12 text-center">
        {/* Uncomment if needed */}
        {/* <p className="text-[#f7e59f] text-base font-medium leading-relaxed">
          ECAPFX is not a financial institution · This website does not promote or sell any financial products or services
        </p> */}
      </section>

      {/* Separator */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#1d8348] to-transparent shadow-lg" />
    </section>
  );
};

// Rule Component
const Rule = ({ custom, color, number, reverse, children, contentVariants, badgeVariants, circleVariants }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '200px 0px',
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const tailwindColors = {
    'orange-500': '#f97316',
    'red-500': '#ef4444',
    'yellow-400': '#facc15',
    'purple-500': '#a855f7',
    'pink-500': '#ec4899',
    'blue-400': '#60a5fa',
    'indigo-500': '#6366f1',
    'green-500': '#22c55e',
    'emerald-500': '#10b981',
    'blue-300': '#93c5fd',
    'sky-400': '#38bdf8',
    'green-400': '#4ade80',
    'lime-500': '#84cc16',
    'amber-500': '#f59e0b',
    'yellow-300': '#fde047',
    'yellow-500': '#eab308',
    'purple-400': '#c084fc',
    'violet-500': '#8b5cf6',
    'yellow-200': '#fef08a',
    'purple-300': '#d8b4fe',
    'blue-200': '#bfdbfe',
    'green-300': '#86efac',
    'teal-500': '#14b8a6',
    'orange-300': '#fdba74',
  };

  const [startColor, endColor] = color.split(' ').map(c => {
    const className = c.replace('from-', '').replace('to-', '');
    return tailwindColors[className] || '#000000';
  });

  return (
    <motion.div
      ref={ref}
      custom={custom}
      initial="hidden"
      animate={controls}
      className={`flex flex-col ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center justify-between gap-6`}
    >
      <motion.div
        custom={custom}
        variants={contentVariants}
        className="relative bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0] p-6 sm:p-8 rounded-2xl shadow-xl border border-[#1d8348]/20 flex-1 z-10"
      >
        <motion.div
          custom={custom}
          variants={badgeVariants}
          className="absolute -top-4 left-4 bg-[#1d8348] text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
        >
          {custom + 1}
        </motion.div>
        {children}
      </motion.div>
      <motion.div
        custom={custom}
        className="flex-shrink-0 w-full sm:w-1/3 h-48 sm:h-64 flex items-center justify-center"
      >
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
          />
          <motion.circle
            custom={custom}
            cx="50"
            cy="50"
            r="40"
            fill="none"
            stroke={`url(#gradient-${custom})`}
            strokeWidth="8"
            strokeDasharray="251.2"
            strokeLinecap="round"
            transform="rotate(1 50 50)"
            variants={circleVariants}
          />
          <defs>
            <linearGradient id={`gradient-${custom}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: startColor }} />
              <stop offset="100%" style={{ stopColor: endColor }} />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute text-xl font-semibold text-gray-800">{number}</span>
      </motion.div>
    </motion.div>
  );
};

export default Rules;