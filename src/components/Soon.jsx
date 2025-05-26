import React, { useState, useEffect } from 'react';

export default function ComingSoon() {
  const targetDate = new Date('2025-07-25T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-green-100 flex items-center justify-center py-12">
      <section className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative">
        <div className="absolute top-6 left-6">
          <span className="text-2xl font-semibold text-green-700"></span>
        </div>
        <aside className="w-full md:w-1/2 space-y-8 mt-16 md:mt-0">
          <h1 className="text-7xl md:text-9xl font-bold text-black">
            Coming Soon
          </h1>
          <h2 className="text-xl md:text-2xl text-black max-w-prose">
            We're{' '}
            <span className="bg-gold-300 text-black font-semibold px-3 py-1 rounded-lg shadow-sm">
              Under Construction
            </span>{' '}
          </h2>
          <h2 className="text-xl md:text-2xl text-black max-w-prose">
            and will be here soon.
          </h2>
          <div className="flex justify-start gap-4 mt-10">
            <span className="flex flex-col justify-center items-center bg-black text-white text-3xl md:text-4xl w-20 md:w-28 py-4 rounded-lg shadow-lg">
              {timeLeft.days} <small className="text-xs md:text-sm">Days</small>
            </span>
            <span className="flex flex-col justify-center items-center bg-black text-white text-3xl md:text-4xl w-20 md:w-28 py-4 rounded-lg shadow-lg">
              {timeLeft.hours} <small className="text-xs md:text-sm">Hours</small>
            </span>
            <span className="flex flex-col justify-center items-center bg-black text-white text-3xl md:text-4xl w-20 md:w-28 py-4 rounded-lg shadow-lg">
              {timeLeft.minutes} <small className="text-xs md:text-sm">Minutes</small>
            </span>
            <span className="flex flex-col justify-center items-center bg-black text-white text-3xl md:text-4xl w-20 md:w-28 py-4 rounded-lg shadow-lg">
              {timeLeft.seconds} <small className="text-xs md:text-sm">Seconds</small>
            </span>
          </div>
          <button className="inline-block bg-green-700 text-white text-xl md:text-2xl font-semibold uppercase px-6 py-3 rounded-lg shadow-md hover:bg-green-800 transition">
            Stay tuned!
          </button>
        </aside>
        <aside className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center">
          <img
            src="/ECAPFX.png"
            alt="ECAPFX Logo"
            className="max-w-full h-auto md:max-w-lg rounded-lg shadow-md"
          />
        </aside>
      </section>
    </main>
  );
}