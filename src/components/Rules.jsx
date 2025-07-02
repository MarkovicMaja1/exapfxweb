import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Rules = () => {
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
      title: "Outsourcing Your Challenge",
      description: "You must complete the trading challenge yourself. Paying a third party, using trade services, or hiring someone else to pass the challenge on your behalf is strictly forbidden.",
      color: 'from-orange-500 to-red-500',
    },
    {
      title: "Copy Trading / Signal Mirroring",
      description: "Using any form of: Copy trading platforms, Social signal services, Trade replication software, Manual mirroring of trades from other accounts is not allowed.",
      color: 'from-yellow-400 to-orange-500',
    },
    {
      title: "High-Frequency Arbitrage / Tick Scalping",
      description: "Using latency arbitrage, tick scalping (ultra-fast entries/exits within seconds), or exploiting broker execution delays is a violation.",
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: "Account Sharing or Third-Party Access",
      description: "Only the registered trader may access and operate the account. ECAPFX reserves the right to disqualify any trader if we believe someone else is in control of the account or unauthorised activity is taking place.",
      color: 'from-blue-400 to-indigo-500',
    },
    {
      title: "Platform or Pricing Exploits",
      description: "Abusing pricing errors, execution glitches, or misusing software bugs is prohibited. Trades must reflect fair, legitimate market behaviour.",
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: "News Event Gambling",
      description: "Placing oversized trades before or during major economic news releases, with the intent of capitalising on unpredictable volatility, is not allowed.",
      color: 'from-blue-300 to-sky-400',
    },
    {
      title: "Use of Expert Advisors (EAs) or Bots",
      description: "Automated systems, bots, or EAs are not allowed unless specifically authorised by ECAPFX in writing.",
      color: 'from-green-400 to-lime-500',
    },
    {
      title: "Team/Group Trading",
      description: "Coordinating with others to influence positions, hedge across multiple ECAPFX accounts, or replicate trades is strictly forbidden.",
      color: 'from-orange-400 to-amber-500',
    },
    {
      title: "Round-Trip Scalping / Spread Exploitation",
      description: "Trades placed solely to benefit from short-term spreads or commission loopholes — with no market intent — are disallowed.",
      color: 'from-yellow-300 to-yellow-500',
    },
    {
      title: "Breach of Trading Limits via Manipulation",
      description: "Passing or failing a challenge by manipulating lot sizes, timing, or open PnL to avoid hitting drawdown rules or to force target completion will result in disqualification.",
      color: 'from-purple-400 to-violet-500',
    },
    {
      title: "False Identity or Fake KYC/AML",
      description: "Submitting fraudulent identification documents or impersonating another person will result in a permanent ban and may trigger legal action.",
      color: 'from-yellow-200 to-yellow-400',
    },
    {
      title: "Gambling Behaviour & Excessive Risk-Taking",
      description: "If we detect substantial profits gained through reckless, inconsistent, or gambling-like behaviour, ECAPFX reserves the right to investigate or revoke payout eligibility — even if technical rules have not been broken.",
      color: 'from-purple-300 to-purple-500',
    },
    {
      title: "Consistency Rule (Discretionary Enforcement)",
      description: "While our Consistency Rule may not be enforced during your challenge, ECAPFX reserves the right to enforce it at the payout stage. If we believe the strategy used to pass the challenge or generate profits is inconsistent, manipulated, or violates the spirit of sustainable trading, we may: Withhold or adjust payouts, Request further verification, Disqualify the account.",
      color: 'from-blue-200 to-blue-400',
    },
    {
      title: "Misleading Conduct or Fraudulent Intent",
      description: "Any attempt to mislead ECAPFX, evade our systems, or abuse trust will result in immediate account termination.",
      color: 'from-green-300 to-teal-500',
    },
    {
      title: "Breached Account Rules",
      description: "If your account breaches any of the following limits or rules, ECAPFX reserves the right to take immediate action, including but not limited to: Daily Loss Limit, Overall (Max) Loss Limit, Profit Loss Limit, Days Trading Limit. Actions may include: Immediate disqualification from the challenge or funded program, Termination of your funded trading account without prior notice, Forfeiture of any pending profits or payouts, Permanent ban from future ECAPFX challenges and funding opportunities, Reporting to relevant authorities in cases of fraud or legal violations.",
      color: 'from-orange-300 to-orange-500',
    },
  ];

  return (
    <section
      id="rules"
      className="bg-white relative overflow-hidden min-h-screen font-sans text-black"
    >
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      <div className="absolute inset-0 opacity-5 sm:opacity-10 hidden sm:block">
        <div className="absolute w-64 h-64 bg-green-400 rounded-full -top-32 -left-32 transform rotate-45 blur-xl"></div>
        <div className="absolute w-48 h-48 bg-blue-300 rounded-full top-1/4 right-1/4 transform -rotate-15 blur-xl"></div>
        <div className="absolute w-72 h-72 bg-gray-200 rounded-full bottom-1/3 left-1/4 transform rotate-30 blur-xl"></div>
      </div>

      {/* Hero Section */}
      <motion.div
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20 relative z-10 text-center mb-[-75px] mt-[75px]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="mb-12 mx-auto lg:max-w-4xl">
          <h2 className="mb-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
            ECAPFX Prohibited Practices
          </h2>
          <p className="text-lg sm:text-xl font-medium tracking-tight text-black">
            At ECAPFX, we are committed to protecting the integrity of our challenges, our traders, and the firm. The following practices are strictly prohibited.
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
          <h3 className="text-xl sm:text-2xl font-bold text-[#1d8348] leading-snug">⚠️ Final Note</h3>
          <p className="text-black mt-3 text-base sm:text-lg leading-relaxed">
            By participating in any ECAPFX challenge or funded program, you agree to abide by these rules. Ignorance is not an excuse. Review the{' '}
            <a href="/terms" className="text-[#1d8348] hover:underline">
              Terms & Conditions
            </a>{' '}
            and contact our 24/7 support team for clarification.
          </p>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="flex justify-center pt-16 pb-16 px-6 sm:px-12">
        <motion.a
          href="https://active.ecapfx.com/auth/signin"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="getstarted-button text-lg sm:text-xl px-5 py-2.5 text-white font-roboto bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 rounded-2xl transition duration-300 ease-in-out hover:scale-105 select-none z-20 pointer-events-auto"
        >
          Get Started Now
        </motion.a>
      </section>

      {/* Disclaimer */}
      <section className="pb-12 px-6 sm:px-12 text-center">
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
            strokeLinecap="round" // Smooths the stroke ends
            transform="rotate(1 50 50)" // Slight rotation to hide the seam
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