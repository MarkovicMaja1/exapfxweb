import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import step3 from '../assets/step3.png';
import step4 from '../assets/step4.png';
import step5 from '../assets/step5.jpg';

/**
 * Updated: 2025-07-28
 *  - Swapped content (text and image) between Step 3 and Step 4 as requested.
 *  - Removed scroll reset on mount and visibility change to allow page-level scroll restoration.
 */
const HowItWorks = () => {
  const { t } = useTranslation();

  /* ------------------------------------------------------------------ */
  /*  Animation variants                                                */
  /* ------------------------------------------------------------------ */
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

  const imageVariants = contentVariants; // identical behaviour

  const badgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 + i * 0.15 },
    }),
  };

  /* ------------------------------------------------------------------ */
  /*  Render                                                            */
  /* ------------------------------------------------------------------ */
  return (
    <section id="how-it-works" className="bg-white relative overflow-hidden min-h-screen font-sans text-black">
      {/* ---- subtle radial blobs in the background ------------------- */}
      <div className="absolute inset-0 bg-black/10 z-0" />
      <div className="absolute inset-0 opacity-5 sm:opacity-10 hidden sm:block">
        {/* <div className="absolute w-64 h-64 bg-green-400 rounded-full -top-32 -left-32 transform rotate-45 blur-xl" /> */}
        <div className="absolute w-48 h-48 bg-blue-300 rounded-full top-1/4 right-1/4 transform -rotate-15 blur-xl" />
        <div className="absolute w-72 h-72 bg-gray-200 rounded-full bottom-1/3 left-1/4 transform rotate-30 blur-xl" />
      </div>

      {/* ------------------------------------------------------------------ */
      /*  Hero                                                              */
      /* ------------------------------------------------------------------ */}
      <motion.div
        className="mx-auto max-w-7xl mt-5 px-4 py-24 sm:px-6 lg:px-8 lg:py-24 relative z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="mb-14 mx-auto lg:max-w-4xl">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-black uppercase">
            {t('howItWorks.hero.title')}
          </h2>
          <p className="text-xl font-medium tracking-tight text-black">
            {t('howItWorks.hero.description')}
          </p>
        </div>
      </motion.div>

      {/* ------------------------------------------------------------------ */
      /*  Steps with vertical dashed line                                */}
      {/* ------------------------------------------------------------------ */}
      <section
        className="relative px-6 sm:px-12 mx-auto max-w-6xl my-5 py-12"
        style={{
          backgroundImage:
            'ur[](https://via.placeholder.com/10x900.png?text=Dashed+Green+Line&color=1d8348)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '10px auto',
        }}
      >
        <div className="relative space-y-24">
          {/* ---------------------------- 1 */}
          <Step
            custom={0}
            image={step1}
            alt={t('howItWorks.steps.step1.imageAlt')}
            contentVariants={contentVariants}
            imageVariants={imageVariants}
            badgeVariants={badgeVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1d8348] mt-8 leading-snug">
              {t('howItWorks.steps.step1.title')}
            </h3>
            <p className="text-black mt-4 text-base sm:text-lg leading-relaxed">
              {t('howItWorks.steps.step1.description')}
            </p>
            <ul className="text-black mt-4 space-y-2 list-none text-sm sm:text-base">
              <li className="flex items-start">
                <span className="mr-2 text-green-600">➤</span>
                <span dangerouslySetInnerHTML={{ __html: t('howItWorks.steps.step1.items.beginner') }} />
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">➤</span>
                <span dangerouslySetInnerHTML={{ __html: t('howItWorks.steps.step1.items.experienced') }} />
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-green-600">➤</span>
                <span dangerouslySetInnerHTML={{ __html: t('howItWorks.steps.step1.items.seasoned') }} />
              </li>
            </ul>
          </Step>

          {/* ---------------------------- 2 */}
          <Step
            custom={1}
            image={step2}
            alt={t('howItWorks.steps.step2.imageAlt')}
            reverse
            contentVariants={contentVariants}
            imageVariants={imageVariants}
            badgeVariants={badgeVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1d8348] mt-8 leading-snug">
              {t('howItWorks.steps.step2.title')}
            </h3>
            <p className="text-black mt-4 text-base sm:text-lg leading-relaxed">
              {t('howItWorks.steps.step2.description')}
            </p>
            <ul className="text-black mt-4 space-y-2 list-none text-sm sm:text-base">
              <li>
                <span className="mr-1 text-green-700">➤</span>
                <span dangerouslySetInnerHTML={{ __html: t('howItWorks.steps.step2.items.dailyLossLimit') }} />
              </li>
              <li>
                <span className="mr-1 text-green-700">➤</span>
                <span dangerouslySetInnerHTML={{ __html: t('howItWorks.steps.step2.items.maxDrawdown') }} />
              </li>
              <li>
                <span className="mr-1 text-green-700">➤</span>
                <span dangerouslySetInnerHTML={{ __html: t('howItWorks.steps.step2.items.profitTargets') }} />
              </li>
              <li>
                <span className="mr-1 text-green-700">➤</span>
                <span dangerouslySetInnerHTML={{ __html: t('howItWorks.steps.step2.items.consistency') }} />
              </li>
            </ul>
          </Step>

          {/* ---------------------------- 3 (content from former Step 4) */}
          <Step
            custom={2}
            image={step4}
            alt={t('howItWorks.steps.step3.imageAlt')}
            contentVariants={contentVariants}
            imageVariants={imageVariants}
            badgeVariants={badgeVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1d8348] mt-8 leading-snug">
              {t('howItWorks.steps.step3.title')}
            </h3>
            <p className="text-black mt-4 text-base sm:text-lg leading-relaxed">
              {t('howItWorks.steps.step3.description')}
            </p>
            <ul className="text-black mt-4 space-y-2 list-none text-sm sm:text-base">
              <li>
                <span className="mr-1 text-green-700">➤</span>
                <span dangerouslySetInnerHTML={{ __html: t('howItWorks.steps.step3.items.kycAml') }} />
              </li>
              <li>
                <span className="mr-1 text-green-700">➤</span>
                <span dangerouslySetInnerHTML={{ __html: t('howItWorks.steps.step3.items.fundingAccess') }} />
              </li>
              <li>
                <span className="mr-1 text-green-700">➤</span>
                <span dangerouslySetInnerHTML={{ __html: t('howItWorks.steps.step3.items.rulesAndTerms') }} />
              </li>
              <li>
                <span className="mr-1 text-green-700">➤</span>
                <span dangerouslySetInnerHTML={{ __html: t('howItWorks.steps.step2.items.profitSplit') }} />
              </li>
            </ul>
          </Step>

          {/* ---------------------------- 4 (content from former Step 3) */}
          <Step
            custom={3}
            image={step3}
            alt="Secure payouts illustration"
            contentVariants={contentVariants}
            imageVariants={imageVariants}
            badgeVariants={badgeVariants}
            reverse
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1d8348] mt-8 leading-snug">
              {t('howItWorks.steps.stepPayout.title', 'Payouts within 5–7 calendar days')}
            </h3>
            <p className="text-black mt-4 text-base sm:text-lg leading-relaxed">
              {t(
                'howItWorks.steps.stepPayout.description',
                'Our automated payout system sends your share directly to the wallet or bank of your choice just days after the profit‑split date.'
              )}
            </p>
            <ul className="text-black mt-4 space-y-2 list-none text-sm sm:text-base">
              <li>
                <span className="mr-1 text-green-700">➤</span>
                {t('howItWorks.steps.stepPayout.items.weekly', 'Weekly payout cycles – no long waiting‑lists.')}
              </li>
              <li>
                <span className="mr-1 text-green-700">➤</span>
                {t('howItWorks.steps.stepPayout.items.methods', 'Multiple payment methods including USDT, BTC, wire & local gateways.')}
              </li>
              <li>
                <span className="mr-1 text-green-700">➤</span>
                {t('howItWorks.steps.stepPayout.items.transparency', 'Full transparency: track the status of every invoice in your dashboard.')}
              </li>
            </ul>
          </Step>

          {/* ---------------------------- 5 (formerly 4) */}
          <Step
            custom={4}
            image={step5}
            alt={t('howItWorks.steps.step4.imageAlt')}
            contentVariants={contentVariants}
            imageVariants={imageVariants}
            badgeVariants={badgeVariants}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#1d8348] mt-8 leading-snug">
              {t('howItWorks.steps.step4.title')}
            </h3>
            <p className="text-black mt-4 text-base sm:text-lg leading-relaxed">
              {t('howItWorks.steps.step4.description')}
            </p>
            <ul className="text-black mt-4 space-y-2 list-none text-sm sm:text-base">
              <li>
                <span className="mr-1 text-green-700">➤</span>
                <span dangerouslySetInnerHTML={{ __html: t('howItWorks.steps.step4.items.profitDonation') }} />
              </li>
              <li>
                <span className="mr-1 text-green-700">➤</span>
                <span dangerouslySetInnerHTML={{ __html: t('howItWorks.steps.step4.items.sustainableFuture') }} />
              </li>
              <li>
                <span className="mr-1 text-green-700">➤</span>
                <span dangerouslySetInnerHTML={{ __html: t('howItWorks.steps.step4.items.sustainableWorld') }} />
              </li>
            </ul>
          </Step>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */
      /*  CTA                                                               */
      /* ------------------------------------------------------------------ */}
      <section className="flex justify-center pt-12 pb-12 px-6 sm:px-12">
        <motion.a
          href="https://active.ecapfx.com/promotion/challenge"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="getstarted-button sm:text-xl px-5 py-2.5 text-white font-roboto bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 rounded-2xl transition duration-300 ease-in-out hover:scale-105 select-none z-20 pointer-events-auto"
        >
          {t('howItWorks.cta.button')}
        </motion.a>
      </section>
    </section>
  );
};

/* --------------------------------------------------------------------
 *  <Step> : shared animation wrapper                                    
 * ------------------------------------------------------------------ */
const Step = ({ custom, image, alt, reverse, children, contentVariants, imageVariants, badgeVariants }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1, rootMargin: '200px 0px' });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      custom={custom}
      initial="hidden"
      animate={controls}
      className={`flex flex-col ${reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'} items-center justify-between mt-5 gap-16`}
    >
      <motion.div
        custom={custom}
        variants={contentVariants}
        className="relative bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0] p-8 sm:p-10 rounded-2xl shadow-xl border border-[#1d8348]/20 flex-1 z-10"
        style={{ overflow: 'visible' }}
      >
        <motion.div
          custom={custom}
          variants={badgeVariants}
          className="absolute -top-5 left-6 bg-[#1d8348] text-white text-xl font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
        >
          {custom + 1}
        </motion.div>
        {children}
      </motion.div>
      <motion.div
        custom={custom}
        variants={imageVariants}
        className="flex-shrink-0 w-full sm:w-1/3 h-58 sm:h-full"
      >
        <img src={image} alt={alt} className="w-full h-full object-cover rounded-xl" />
      </motion.div>
    </motion.div>
  );
};

export default HowItWorks;