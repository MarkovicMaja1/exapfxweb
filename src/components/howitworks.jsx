import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import step3 from '../assets/step3.png';
import step4 from '../assets/step4.jpg';

const HowItWorks = () => {
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

  // Animation controls for steps
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const stepVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
    }),
  };

  const badgeVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section
      id="how-it-works"
      className="bg-gradient-to-br from-blue-800 via-blue-700 to-green-800 sm:from-blue-900 sm:via-blue-800 sm:to-green-900 dark:from-slate-800 dark:via-slate-700 dark:to-green-800 mt-16 relative overflow-hidden min-h-screen font-sans text-white"
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="absolute inset-0 opacity-5 sm:opacity-10 hidden sm:block">
        <div className="absolute w-64 h-64 bg-green-400 rounded-full -top-32 -left-32 transform rotate-45 blur-xl"></div>
        <div className="absolute w-48 h-48 bg-blue-300 rounded-full top-1/4 right-1/4 transform -rotate-15 blur-xl"></div>
        <div className="absolute w-72 h-72 bg-white rounded-full bottom-1/3 left-1/4 transform rotate-30 blur-xl"></div>
      </div>

      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-24 relative z-10 text-center">
        <div className="mx-auto lg:max-w-4xl">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
            How It Works
          </h2>
          <p className="text-xl font-medium tracking-tight text-white">
            Follow these steps to transform your trading skills into funded success with ECAPFX.
          </p>
        </div>
      </div>

      {/* Steps Section with Stylized Line */}
      <section
        ref={ref}
        className="relative px-6 sm:px-12 mx-auto max-w-6xl py-5"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/10x900.png?text=Dashed+Green+Line&color=1d8348)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '10px auto',
        }}
      >
        <div className="relative space-y-16">
          {/* Step 1 - Text Left, Image Right */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={controls}
            variants={stepVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-8"
          >
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#222222] p-8 sm:p-10 rounded-2xl shadow-xl border border-[#1d8348]/20 flex-1 z-10">
              <motion.div
                variants={badgeVariants}
                className="absolute -top-5 left-6 bg-[#1d8348] text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
              >
                1
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d8348] mt-8 leading-snug">Sign Up & Choose Challenge</h3>
              <p className="text-white mt-4 text-base sm:text-lg leading-relaxed">Select a plan tailored to your trading expertise.</p>
              <ul className="text-white mt-4 space-y-2 list-disc list-inside text-sm sm:text-base">
                <li><strong>Beginner (Greenwave)</strong> - Ideal for new traders.</li>
                <li><strong>Experienced (El Verde)</strong> - Moderate risk options.</li>
                <li><strong>Seasoned (Ecosphere)</strong> - Designed for professionals.</li>
              </ul>
            </div>
            <div className="flex-shrink-0 w-full sm:w-1/3 h-48 sm:h-full">
              <img src={step1} alt="Person signing up on a form" className="w-full h-full object-cover rounded-xl" />
            </div>
          </motion.div>

          {/* Step 2 - Image Left, Text Right */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={controls}
            variants={stepVariants}
            className="flex flex-col sm:flex-row-reverse items-center justify-between gap-8"
          >
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#222222] p-8 sm:p-10 rounded-2xl shadow-xl border border-[#1d8348]/20 flex-1 z-10">
              <motion.div
                variants={badgeVariants}
                className="absolute -top-5 left-6 bg-[#1d8348] text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
              >
                2
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d8348] mt-8 leading-snug">Prove Your Skills</h3>
              <p className="text-white mt-4 text-base sm:text-lg leading-relaxed">Demonstrate your trading ability in a simulated environment.</p>
              <ul className="text-white mt-4 space-y-2 list-disc list-inside text-sm sm:text-base">
                <li><strong>Daily Loss Limit</strong> - Maintain discipline.</li>
                <li><strong>Max Drawdown</strong> - Stay within bounds.</li>
                <li><strong>Profit Targets</strong> - Achieve goals.</li>
                <li><strong>Consistency</strong> - Ensure steady performance.</li>
                <li><strong>Instant Challenges</strong> - Quick skill assessment.</li>
                <li><strong>Profit Split</strong> - Begin at 80/20.</li>
              </ul>
            </div>
            <div className="flex-shrink-0 w-full sm:w-1/3 h-48 sm:h-full">
              <img src={step2} alt="Trading chart analysis" className="w-full h-full object-cover rounded-xl" />
            </div>
          </motion.div>

          {/* Step 3 - Text Left, Image Right */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={controls}
            variants={stepVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-8"
          >
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#222222] p-8 sm:p-10 rounded-2xl shadow-xl border border-[#1d8348]/20 flex-1 z-10">
              <motion.div
                variants={badgeVariants}
                className="absolute -top-5 left-6 bg-[#1d8348] text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
              >
                3
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d8348] mt-8 leading-snug">Get Funded</h3>
              <p className="text-white mt-4 text-base sm:text-lg leading-relaxed">Unlock funding upon successful completion.</p>
              <ul className="text-white mt-4 space-y-2 list-disc list-inside text-sm sm:text-base">
                <li>KYC & AML checks completed.</li>
                <li>Funding access within 5 days.</li>
                <li>Review <a href="/rules" className="text-[#1d8348] hover:underline">Rules</a> & <a href="/terms" className="text-[#1d8348] hover:underline">Terms</a>.</li>
              </ul>
            </div>
            <div className="flex-shrink-0 w-full sm:w-1/3 h-48 sm:h-full">
              <img src={step3} alt="Passing funded account challenge" className="w-full h-full object-cover rounded-xl" />
            </div>
          </motion.div>

          {/* Step 4 - Image Left, Text Right */}
          <motion.div
            custom={3}
            initial="hidden"
            animate={controls}
            variants={stepVariants}
            className="flex flex-col sm:flex-row-reverse items-center justify-between gap-8"
          >
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#222222] p-8 sm:p-10 rounded-2xl shadow-xl border border-[#1d8348]/20 flex-1 z-10">
              <motion.div
                variants={badgeVariants}
                className="absolute -top-5 left-6 bg-[#1d8348] text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
              >
                4
              </motion.div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#1d8348] mt-8 leading-snug">Trade, Earn & Impact</h3>
              <p className="text-white mt-4 text-base sm:text-lg leading-relaxed">Trade with purpose as a funded trader.</p>
              <ul className="text-white mt-4 space-y-2 list-disc list-inside text-sm sm:text-base">
                <li>Profit share at 80/20.</li>
                <li>1% profit donation post year one.</li>
                <li>Contribute to a sustainable future.</li>
              </ul>
            </div>
            <div className="flex-shrink-0 w-full sm:w-1/3 h-48 sm:h-full">
              <img src={step4} alt="Global trading market" className="w-full h-full object-cover rounded-xl" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex justify-center pt-20 pb-20 px-6 sm:px-12">
        <motion.a
          href="https://active.ecapfx.com/auth/signin"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="getstarted-button px-5 py-2.5 sm:text-lg text-white font-roboto bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 rounded-2xl transition duration-300 ease-in-out hover:scale-105 select-none z-20 pointer-events-auto"
        >
          Get Started Now
        </motion.a>
      </section>

      {/* Disclaimer */}
      <section className="pb-16 px-6 sm:px-12 text-center">
        <p className="text-[#f7e59f] text-base font-medium leading-relaxed">
          ECAPFX is not a financial institution · This website does not promote or sell financial products or services.
        </p>
      </section>

      {/* Separator */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#1d8348] to-transparent shadow-lg" />
    </section>
  );
};

export default HowItWorks;