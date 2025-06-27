import React, { useState, useEffect } from 'react';
import provider1 from '../assets/payment-provider-1.webp';
import provider2 from '../assets/payment-provider-2.webp';
import provider3 from '../assets/payment-provider-3.webp';
import provider4 from '../assets/payment-provider-4.webp';
import provider6 from '../assets/payment-provider-6.webp';
import provider7 from '../assets/payment-provider-7.webp';
import provider8 from '../assets/payment-provider-8.webp';
import provider9 from '../assets/payment-provider-9.webp';
import provider10 from '../assets/payment-provider-10.webp';
import provider11 from '../assets/payment-provider-11.webp';
import provider12 from '../assets/payment-provider-12.webp';
import provider13 from '../assets/payment-provider-13.webp';
import provider14 from '../assets/payment-provider-14.webp';
import provider15 from '../assets/payment-provider-15.webp';
import provider16 from '../assets/payment-provider-16.webp';
import provider17 from '../assets/payment-provider-17.webp';
import './LogoSlider.css';

const LogoSlider = () => {
  const [animationDuration, setAnimationDuration] = useState(20);

  const logos = [
    provider1,
    provider2,
    provider3,
    provider4,
    provider6,
    provider7,
    provider8,
    provider9,
    provider10,
    provider11,
    provider12,
    provider13,
    provider14,
    provider15,
    provider16,
    provider17,
  ];

  useEffect(() => {
    setAnimationDuration(Math.max(15, logos.length * 1.2));
  }, [logos.length]);

  return (
    <>
      <section
        id="logo-slider"
        className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-[#151515] py-8"
        role="region"
        aria-label="Logo Slider showcasing payment providers"
      >
        <div className="relative w-full max-w-[2000px] mx-auto">
          {/* Desktop Slider - Normal Direction */}
          <div className="group flex overflow-hidden p-2 [gap:var(--gap)] flex-row [--duration:20s] [--gap:0px]">
            {/* First track */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
              {[...logos, ...logos].map((logo, index) => (
                <div key={`logo-${index}`} className="mr-2 sm:mr-2.5 inline-block">
                  <img
                    alt={`Payment provider logo ${index % logos.length + 1}`}
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    className="w-16 sm:w-20 xl:w-24"
                    style={{ color: 'transparent' }}
                    src={logo}
                  />
                </div>
              ))}
            </div>

            {/* Second track */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
              {[...logos, ...logos].map((logo, index) => (
                <div key={`logo-2-${index}`} className="mr-2 sm:mr-2.5 inline-block">
                  <img
                    alt={`Payment provider logo ${index % logos.length + 1}`}
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    className="w-16 sm:w-20 xl:w-24"
                    style={{ color: 'transparent' }}
                    src={logo}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Slider - Reverse Direction */}
          <div className="group flex overflow-hidden p-2 [gap:var(--gap)] flex-row [--duration:20s] [--gap:0px] md:hidden">
            {/* First track */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row [animation-direction:reverse]">
              {[...logos, ...logos].map((logo, index) => (
                <div key={`logo-reverse-${index}`} className="mr-2 sm:mr-2.5 inline-block">
                  <img
                    alt={`Payment provider logo ${index % logos.length + 1}`}
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    className="w-16 sm:w-20 xl:w-24"
                    style={{ color: 'transparent' }}
                    src={logo}
                  />
                </div>
              ))}
            </div>

            {/* Second track */}
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row [animation-direction:reverse]">
              {[...logos, ...logos].map((logo, index) => (
                <div key={`logo-reverse-2-${index}`} className="mr-2 sm:mr-2.5 inline-block">
                  <img
                    alt={`Payment provider logo ${index % logos.length + 1}`}
                    loading="lazy"
                    width="100"
                    height="100"
                    decoding="async"
                    className="w-16 sm:w-20 xl:w-24"
                    style={{ color: 'transparent' }}
                    src={logo}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Gradient Overlays */}
          <div
            className="gradient-overlay pointer-events-none absolute inset-y-0 left-0 w-[35%] z-10 h-full"
            style={{
              backgroundImage: 'linear-gradient(to right, rgb(21, 21, 21), rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.4), transparent)',
            }}
          />
          <div
            className="gradient-overlay pointer-events-none absolute inset-y-0 right-0 w-[35%] z-10 h-full"
            style={{
              backgroundImage: 'linear-gradient(to left, rgb(21, 21, 21), rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.4), transparent)',
            }}
          />
        </div>
      </section>

      {/* Gradient Divider Below Logo Slider */}
      <div className="relative w-full h-4 overflow-hidden">
        <svg
          className="absolute top-0 left-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon fill="#151515" points="0,0 100,0 100,100 0,100" />
        </svg>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#151515] to-white" />
      </div>
    </>
  );
};

export default LogoSlider;