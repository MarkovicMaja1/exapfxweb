import React, { useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
    <div id="how-it-works" className="relative bg-[#151515] min-h-screen font-sans overflow-x-hidden text-white">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center pt-20 sm:pt-28 px-4 sm:px-8 mx-auto py-16 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl tracking-wide uppercase text-[#1d8348] font-extrabold" style={{ wordSpacing: '0.3rem' }}>
          How It Works
        </h1>
        <p className="text-white mt-4 text-lg sm:text-xl font-semibold max-w-2xl">
          Follow these steps to turn your trading skills into funded success with ECAPFX.
        </p>
      </motion.section>

      {/* Steps Section with PNG Background Line */}
      <section
        ref={ref}
        className="relative px-4 sm:px-6 mx-auto max-w-5xl py-12"
        style={{
          backgroundImage: 'url(https://via.placeholder.com/50x800.png?text=Green+Line)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        <div className="relative space-y-12">
          {/* Step 1 - Text Left, Image Right */}
          <motion.div
            custom={0}
            initial="hidden"
            animate={controls}
            variants={stepVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#222222] p-6 sm:p-8 rounded-xl shadow-lg border border-[#1d8348]/20 flex-1 z-10">
              <motion.div
                variants={badgeVariants}
                className="absolute -top-4 left-4 bg-[#1d8348] text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              >
                1
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d8348] mt-6">Sign Up & Choose Challenge</h3>
              <p className="text-white mt-3 text-sm sm:text-base">Select a plan tailored to your trading goals.</p>
              <ul className="text-white mt-3 space-y-2 list-disc list-inside text-xs sm:text-sm">
                <li>🌱 <strong>Beginner (Greenwave)</strong> - Easy targets for new traders.</li>
                <li>🌿 <strong>Experienced (El Verde)</strong> - Moderate risk options.</li>
                <li>🌳 <strong>Seasoned (Ecosphere)</strong> - Challenging targets for pros.</li>
              </ul>
            </div>
            <div className="flex-shrink-0 w-full sm:w-1/3 h-40 sm:h-36">
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80" alt="Illustration of signing up and choosing a challenge" className="w-full h-full object-contain rounded-lg" />
            </div>
          </motion.div>

          {/* Step 2 - Image Left, Text Right */}
          <motion.div
            custom={1}
            initial="hidden"
            animate={controls}
            variants={stepVariants}
            className="flex flex-col sm:flex-row-reverse items-center justify-between gap-6"
          >
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#222222] p-6 sm:p-8 rounded-xl shadow-lg border border-[#1d8348]/20 flex-1 z-10">
              <motion.div
                variants={badgeVariants}
                className="absolute -top-4 left-4 bg-[#1d8348] text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              >
                2
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d8348] mt-6">Prove Your Skills</h3>
              <p className="text-white mt-3 text-sm sm:text-base">Trade in a simulation with strict limits.</p>
              <ul className="text-white mt-3 space-y-2 list-disc list-inside text-xs sm:text-sm">
                <li>⏳ <strong>Daily Loss Limit</strong> - Stay disciplined.</li>
                <li>📉 <strong>Max Drawdown</strong> - Avoid limits.</li>
                <li>💰 <strong>Profit Targets</strong> - Meet goals.</li>
                <li>📊 <strong>Consistency</strong> - Sustain performance.</li>
                <li>⚡ <strong>Instant Challenges</strong> - Test skills.</li>
                <li>🤝 <strong>Profit Split</strong> - 80/20 start.</li>
              </ul>
            </div>
            <div className="flex-shrink-0 w-full sm:w-1/3 h-40 sm:h-36">
              <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80" alt="Illustration of proving trading skills" className="w-full h-full object-contain rounded-lg" />
            </div>
          </motion.div>

          {/* Step 3 - Text Left, Image Right */}
          <motion.div
            custom={2}
            initial="hidden"
            animate={controls}
            variants={stepVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-6"
          >
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#222222] p-6 sm:p-8 rounded-xl shadow-lg border border-[#1d8348]/20 flex-1 z-10">
              <motion.div
                variants={badgeVariants}
                className="absolute -top-4 left-4 bg-[#1d8348] text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              >
                3
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d8348] mt-6">Get Funded</h3>
              <p className="text-white mt-3 text-sm sm:text-base">Pass to unlock funding.</p>
              <ul className="text-white mt-3 space-y-2 list-disc list-inside text-xs sm:text-sm">
                <li>🔍 KYC & AML checks.</li>
                <li>⏰ Access in 5 days.</li>
                <li>📜 Review <a href="/rules" className="text-[#1d8348] hover:underline">Rules</a> & <a href="/terms" className="text-[#1d8348] hover:underline">Terms</a>.</li>
              </ul>
            </div>
            <div className="flex-shrink-0 w-full sm:w-1/3 h-40 sm:h-36">
              <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80" alt="Illustration of getting funded" className="w-full h-full object-contain rounded-lg" />
            </div>
          </motion.div>

          {/* Step 4 - Image Left, Text Right */}
          <motion.div
            custom={3}
            initial="hidden"
            animate={controls}
            variants={stepVariants}
            className="flex flex-col sm:flex-row-reverse items-center justify-between gap-6"
          >
            <div className="relative bg-gradient-to-br from-[#1a1a1a] to-[#222222] p-6 sm:p-8 rounded-xl shadow-lg border border-[#1d8348]/20 flex-1 z-10">
              <motion.div
                variants={badgeVariants}
                className="absolute -top-4 left-4 bg-[#1d8348] text-white text-lg font-bold rounded-full w-10 h-10 flex items-center justify-center shadow-md"
              >
                4
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d8348] mt-6">Trade, Earn & Impact</h3>
              <p className="text-white mt-3 text-sm sm:text-base">Become a funded trader with purpose.</p>
              <ul className="text-white mt-3 space-y-2 list-disc list-inside text-xs sm:text-sm">
                <li>💸 Profit share at 80/20.</li>
                <li>🌍 1% profit donation after year one.</li>
                <li>🌱 Trade for a sustainable future.</li>
              </ul>
            </div>
            <div className="flex-shrink-0 w-full sm:w-1/3 h-40 sm:h-36">
              <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=150&q=80" alt="Illustration of trading and making an impact" className="w-full h-full object-contain rounded-lg" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="flex justify-center pb-16 px-4 sm:px-8"
      >
        <a
          href="https://active.ecapfx.com/auth/signin"
          className="bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437] hover:via-[#1d8348] hover:to-[#0e3f24] px-8 py-3 rounded-lg text-white text-lg font-semibold transition duration-300 hover:scale-105 shadow-md"
        >
          Get Started Now
        </a>
      </motion.section>

      {/* Disclaimer */}
      <section className="pb-12 px-4 sm:px-8 text-center">
        <p className="text-[#f7e59f] text-sm font-semibold">
          ECAPFX is not a financial institution · This website does not promote or sell any financial products or services
        </p>
      </section>

      {/* Separator */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#1d8348] to-transparent shadow-md" />
    </div>
  );
};

export default HowItWorks;