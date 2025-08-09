import React, { useState, useEffect } from 'react';

const Cookie = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the user has already made a cookie consent choice
  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent !== 'accepted' && consent !== 'declined') {
      setIsVisible(true);
    }
  }, []);

  // Handle the "Accept" button click
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  // Handle the "Decline" button click
  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent fixed bottom-0 left-0 w-full z-50 p-3 sm:p-4 md:p-6 bg-[#151515] text-white">
      <div className="container mx-auto flex flex-col sm:flex-row sm:flex-wrap items-center justify-between">
        <div className="flex items-center flex-1 mr-0 sm:mr-4 mb-4 sm:mb-0">
          <img
            className="w-10 h-10 sm:w-12 sm:h-12 mr-4 hidden sm:block"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/cookies/cookieImage1.svg"
            alt="cookieImage1"
          />
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#f7e59f]">Cookie Consent</h3>
            <p className="text-xs sm:text-sm md:text-base text-white">
              We use cookies to optimize our communication and enhance your experience. By clicking "Approve", you agree to the collection of cookies. For more information, please see our{' '}
              <a href="/cookies" className="text-[#f7e59f] hover:underline">
                Cookie Policy
              </a>
              .
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">
          <button
            type="button"
            className="bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 hover:from-gray-700/90 hover:via-gray-600/90 hover:to-gray-700/90 hover:text-white hover:shadow-md hover:shadow-gray-500/50 text-white font-bold py-2 px-6 rounded transition duration-300 active:scale-95 touch-action-manipulation w-full sm:w-auto"
            aria-label="Decline cookies"
            onClick={handleDecline}
          >
            Decline
          </button>
          <button
            id="rcc-confirm-button"
            type="button"
            className="bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 text-white font-bold py-2 px-6 rounded transition duration-300 active:scale-95 touch-action-manipulation w-full sm:w-auto"
            aria-label="Accept cookies"
            onClick={handleAccept}
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Cookie);