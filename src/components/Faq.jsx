import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Initialize AOS and reset scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  // FAQ data
  const faqs = [
    {
      question: "What is ECAPFX?",
      answer: "ECAPFX is a proprietary trading firm that provides traders with access to funded capital after successfully completing a challenge. We combine performance-based funding with a commitment to positive global impact, donating 1% of annual profits to sustainability initiatives.",
    },
    {
      question: "What types of challenges do you offer?",
      answer: "We offer three structured challenge types designed for different levels of trading experience: Beginner – For those new to trading, Experienced – For traders with moderate experience, Seasoned – For professional and high-performance traders. Each structure comes with its own risk parameters, targets, and evaluation metrics.",
    },
    {
      question: "What are the evaluation criteria?",
      answer: "To pass a challenge, you must stay within the following rules: Daily Loss Limit, Max Drawdown, Profit Targets, Consistency Rules based on the type of challenge (Phased or Instant), Trailing Drawdown for Instant accounts, measured with precision.",
    },
    {
      question: "How long does it take to get funded?",
      answer: "After you pass the evaluation and complete KYC/AML compliance checks, we aim to provide access to your funded account within 5 calendar days.",
    },
    {
      question: "What is the profit split?",
      answer: "Your profit share depends on the challenge type and account tier selected. Details are clearly outlined before you start the challenge.",
    },
    {
      question: "Do I keep my profits?",
      answer: "Yes — funded traders receive a profit share from the earnings they generate, based on their selected model.",
    },
    {
      question: "What are prohibited practices?",
      answer: "We strictly prohibit strategies such as: Copy trading, High-frequency arbitrage, News exploitation, Any form of system abuse. Please review the full list on our Rules Page.",
    },
    {
      question: "What happens if I break the rules?",
      answer: "Rule violations may lead to disqualification or termination of your funded account. We encourage all traders to read and understand our guidelines before participating.",
    },
    {
      question: "What makes ECAPFX different from other prop firms?",
      answer: "At ECAPFX, we stand against cheap gimmicks and misleading promotions. We don’t offer shallow discounts or flashy marketing tricks just to drive volume. Our focus is on meaningful challenges that develop real traders, not short-term hype. We’re here to support long-term growth, accountability, and impact — both in trading and the world beyond.",
    },
    {
      question: "What platforms do you support?",
      answer: "We currently offer Match-Trader as our trading platform, available on both web and mobile for seamless trading across devices.",
    },
    {
      question: "What are your support hours?",
      answer: "Our support team is available 24/7 to assist you with any questions or technical issues. Whether you're just starting or actively trading, we’re always here to help.",
    },
    {
      question: "How does ECAPFX give back?",
      answer: "After your first successful year of trading, ECAPFX donates 1% of firm profits to sustainability-focused projects. It’s our way of aligning trading success with a greater purpose.",
    },
    {
      question: "How do I get started?",
      answer: "Sign up at ecapfx.com, choose the challenge that matches your level, and begin your evaluation. You’ll be guided through every step of the journey.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-gradient-to-br from-blue-800 via-blue-700 to-green-800 sm:from-blue-900 sm:via-blue-800 sm:to-green-900 dark:from-slate-800 dark:via-slate-700 dark:to-green-800 mt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="absolute inset-0 opacity-5 sm:opacity-10 hidden sm:block">
        <div className="absolute w-64 h-64 bg-green-400 rounded-full -top-32 -left-32 transform rotate-45 blur-xl"></div>
        <div className="absolute w-48 h-48 bg-blue-300 rounded-full top-1/4 right-1/4 transform -rotate-15 blur-xl"></div>
        <div className="absolute w-72 h-72 bg-white rounded-full bottom-1/3 left-1/4 transform rotate-30 blur-xl"></div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-24 relative z-10 text-center">
        {/* Title Section */}
        <div className="mx-auto lg:max-w-4xl">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="mb-24 text-xl font-medium tracking-tight text-white">
            Find answers to common questions about ECAPFX’s trading programs and funding opportunities.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1E2A44] rounded-lg p-4 sm:p-6"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <button
                className="w-full flex justify-between items-center text-left text-white text-2xl sm:text-3xl !important font-semibold"
                onClick={() => toggleFaq(index)}
              >
                <span>{faq.question}</span>
                <span className="ml-2">
                  {openIndex === index ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-4 text-white text-sm sm:text-base font-normal">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Custom Scoped CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
          .mb-24 {
            margin-bottom: 6rem;
          }
        }
        #faq button {
          font-size: 1.2rem !important;
        }
        @media (min-width: 640px) {
          #faq button {
            font-size: 1.375rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Faq;