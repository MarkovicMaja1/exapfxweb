import React, { useEffect } from 'react';
import mtIcon from '../assets/mticon.png';

const Popprice = ({ isOpen, onClose, step, size }) => {
  // Define challenge URLs
  const challengeUrls = {
    "One Step": {
      "10k": "https://active.ecapfx.com/promotion/challenge?challengeId=d2de65a0-6ee2-11f0-90e8-23d7e3e41c0d",
      "25k": "https://active.ecapfx.com/promotion/challenge?challengeId=b16d5c31-6e62-11f0-90e8-23d7e3e41c0d",
      "50k": "https://active.ecapfx.com/promotion/challenge?challengeId=b1a932a0-6ee4-11f0-90e8-23d7e3e41c0d",
      "100k": "https://active.ecapfx.com/promotion/challenge?challengeId=478c2b60-6ee5-11f0-90e8-23d7e3e41c0d",
      "200k": "https://active.ecapfx.com/promotion/challenge?challengeId=e28330a0-6ee5-11f0-90e8-23d7e3e41c0d"
    },
    "Two Step": {
      "10k": "https://active.ecapfx.com/promotion/challenge?challengeId=72a370e1-6ee7-11f0-90e8-23d7e3e41c0d",
      "25k": "https://active.ecapfx.com/promotion/challenge?challengeId=ab071270-6eec-11f0-90e8-23d7e3e41c0d",
      "50k": "https://active.ecapfx.com/promotion/challenge?challengeId=44e61800-6eed-11f0-90e8-23d7e3e41c0d",
      "100k": "https://active.ecapfx.com/promotion/challenge?challengeId=d2b7a2c1-6eed-11f0-90e8-23d7e3e41c0d",
      "200k": "https://active.ecapfx.com/promotion/challenge?challengeId=f209ee80-6ef7-11f0-90e8-23d7e3e41c0d"
    },
    "Three Step": {
      "10k": "https://active.ecapfx.com/promotion/challenge?challengeId=c5d5db50-708a-11f0-90e8-23d7e3e41c0d",
      "25k": "https://active.ecapfx.com/promotion/challenge?challengeId=7df2ec91-708c-11f0-90e8-23d7e3e41c0d",
      "50k": "https://active.ecapfx.com/promotion/challenge?challengeId=e1e551c1-708c-11f0-90e8-23d7e3e41c0d",
      "100k": "https://active.ecapfx.com/promotion/challenge?challengeId=5a1683d0-708d-11f0-90e8-23d7e3e41c0d",
      "200k": "https://active.ecapfx.com/promotion/challenge?challengeId=98f72a00-708d-11f0-90e8-23d7e3e41c0d"
    },
    "Instant Funding": {
      "10k": "https://active.ecapfx.com/promotion/challenge?challengeId=3511cde0-7071-11f0-90e8-23d7e3e41c0d",
      "15k": "https://active.ecapfx.com/promotion/challenge?challengeId=a4c28700-7072-11f0-90e8-23d7e3e41c0d",
      "20k": "https://active.ecapfx.com/promotion/challenge?challengeId=6664fe11-7073-11f0-90e8-23d7e3e41c0d",
      "25k": "https://active.ecapfx.com/promotion/challenge?challengeId=38522471-7074-11f0-90e8-23d7e3e41c0d"
    }
  };

  // Determine iframe URL based on step and size
  const iframeUrl = challengeUrls[step]?.[size] || 'https://active.ecapfx.com/promotion/challenge';

  // Set --vh for mobile viewport height and focus trap for accessibility
  useEffect(() => {
    // Set --vh
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);

    // Focus trap
    if (isOpen) {
      const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const modal = document.querySelector('.fixed.z-\\\[10001\\\]');
      const firstFocusable = modal?.querySelectorAll(focusableElements)[0];
      const lastFocusable = modal?.querySelectorAll(focusableElements)[modal?.querySelectorAll(focusableElements).length - 1];

      const trapFocus = (e) => {
        if (e.key === 'Tab') {
          if (e.shiftKey && document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable?.focus();
          } else if (!e.shiftKey && document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable?.focus();
          }
        }
      };

      modal?.addEventListener('keydown', trapFocus);
      firstFocusable?.focus();

      return () => {
        modal?.removeEventListener('keydown', trapFocus);
        window.removeEventListener('resize', setVh);
      };
    }

    return () => window.removeEventListener('resize', setVh);
  }, [isOpen]);

  // If modal isn't open, don't show anything
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] overflow-hidden">
      {/* Background overlay to dim the page */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        style={{ pointerEvents: 'auto' }}
      ></div>

      {/* Desktop Modal (right-side drawer) */}
      <div
        className="fixed right-0 top-0 h-full w-full pt-[122px] max-w-[1200px] bg-white transform transition-transform duration-300 ease-in-out flex flex-col hidden md:flex z-[999]"
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)' }}
      >
        <div className="relative p-4 bg-[#151515] flex items-center justify-center gap-2">
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-600 transition-colors duration-200 text-xl font-semibold z-[10002]"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
          <img src={mtIcon} alt="Challenge Icon" className="w-38 h-28" />
          <h3 className="text-lg font-semibold uppercase text-white">Challenge Details</h3>
        </div>
        <div className="flex-grow min-h-0 w-full">
          <iframe
            src={iframeUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Challenge Modal"
            style={{ pointerEvents: 'auto', overflow: 'hidden' }}
          ></iframe>
        </div>
      </div>

      {/* Mobile Modal (centered pop-up) */}
      <div className="fixed top-1/2 left-1/2 pt-[85px] transform -translate-x-1/2 -translate-y-1/2 w-[95%] max-w-[600px] h-[calc(var(--vh,1vh)*90)] max-h-[800px] bg-white rounded-lg flex flex-col md:hidden z-[999]">
        <div className="flex justify-between items-center p-4 bg-[#151515]">
          <div className="flex items-center gap-2">
            <img src={mtIcon} alt="Challenge Icon" className="w-26 h-16" />
            <p className="extrasmallfont font-semibold uppercase text-white">Challenge Details</p>
          </div>
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-600 transition-colors duration-200 text-lg font-semibold z-[10002]"
            onClick={onClose}
            aria-label="Close modal"
          >
            ×
          </button>
        </div>
        <div className="flex-grow relative">
          <iframe
            src={iframeUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Challenge Modal"
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden' }}
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      <style jsx>{`
        /* Prevent background scrolling when modal is open */
        :global(html:has(.fixed.z-\\[999\\])), :global(body:has(.fixed.z-\\[999\\])) {
          overflow: hidden;
        }

        /* Mobile Modal Styles */
        @media (max-width: 767px) {
          .fixed.z-\\[9999\\] {
            z-index: 999 !important;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }
          .fixed.top-1\\/2 {
            width: 95%;
            max-width: 600px;
            height: calc(var(--vh, 1vh) * 90);
            max-height: 800px;
            border-radius: 8px;
            overflow: hidden;
          }
          .fixed.top-1\\/2 iframe {
            width: 100% !important;
            height: 100% !important;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: none;
          }
        }
          .extrasmallfont {
            font-size:14px !important;
            font-weight:700 !important;
          }

        /* Desktop Modal Styles */
        @media (min-width: 768px) {
          .fixed.right-0 {
            z-index: 999 !important;
            top: 0;
            width: 100%;
            max-width: 1200px;
            height: 100%;
            transition: transform 0.3s ease-in-out;
          }
          .fixed.right-0 iframe {
            width: 100% !important;
            height: 100% !important;
            border: none;
          }
        }
      `}</style>
    </div>
  );
};

export default Popprice;