import React from 'react';

const LogoSlider = () => {
  // Array of logo image URLs - replace with your actual image paths
  const logos = [
    '../payment-provider-1.webp',
    '../payment-provider-2.webp',
    '../payment-provider-3.webp',
    '../payment-provider-4.webp',
    '../payment-provider-6.webp',
    '../payment-provider-7.webp',
    '../payment-provider-8.webp',
    '../payment-provider-9.webp',
    '../payment-provider-10.webp',
    '../payment-provider-11.webp',
    '../payment-provider-12.webp',
    '../payment-provider-13.webp',
    '../payment-provider-14.webp',
    '../payment-provider-15.webp',
    '../payment-provider-16.webp',
    '../payment-provider-17.webp',
    '../payment-provider-18.webp',
    '../payment-provider-19.webp',
    '../payment-provider-20.webp',
  ];

  return (
    <>
      {/* Embedded CSS styles */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(calc(-100% - var(--gap, 0px)));
          }
        }
        .animate-marquee {
          animation: marquee var(--duration, 20s) linear infinite;
        }
      `}</style>

      {/* Component markup */}
      <section className="pt-[80px] lg:pt-[130px]">
        <div className="v2-container">
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            {/* Desktop marquee (visible on md and up) */}
            <div 
              className="group hidden overflow-hidden p-2 md:flex flex-row"
              style={{ '--duration': '20s', '--gap': '0px' }}
            >
              {/* First marquee track */}
              <div className="flex shrink-0 justify-around animate-marquee flex-row">
                {logos.map((logo, index) => (
                  <div key={`desktop-1-${index}`} className="mr-2 sm:mr-2.5 inline-block">
                    <img
                      alt="logo img"
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
              
              {/* Second marquee track (duplicate for seamless looping) */}
              <div className="flex shrink-0 justify-around animate-marquee flex-row">
                {logos.map((logo, index) => (
                  <div key={`desktop-2-${index}`} className="mr-2 sm:mr-2.5 inline-block">
                    <img
                      alt="logo img"
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

            {/* Mobile marquee (visible on md and down) */}
            <div 
              className="group flex overflow-hidden p-2 flex-row md:hidden"
              style={{ '--duration': '20s', '--gap': '0px' }}
            >
              {/* First marquee track (reverse direction) */}
              <div className="flex shrink-0 justify-around animate-marquee flex-row" style={{ animationDirection: 'reverse' }}>
                {logos.map((logo, index) => (
                  <div key={`mobile-1-${index}`} className="mr-2 sm:mr-2.5 inline-block">
                    <img
                      alt="logo img"
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
              
              {/* Second marquee track (reverse direction, duplicate for seamless looping) */}
              <div className="flex shrink-0 justify-around animate-marquee flex-row" style={{ animationDirection: 'reverse' }}>
                {logos.map((logo, index) => (
                  <div key={`mobile-2-${index}`} className="mr-2 sm:mr-2.5 inline-block">
                    <img
                      alt="logo img"
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

            {/* Gradient overlays */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-ebony"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-ebony"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoSlider;