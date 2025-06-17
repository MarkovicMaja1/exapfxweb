import React, { useEffect } from 'react';

const Rules = () => {
  // Scroll to top when the tab becomes active or on initial mount
  useEffect(() => {
    // Scroll to top on initial mount
    window.scrollTo(0, 0);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Prohibited Practices data
  const practices = [
    {
      title: "Outsourcing Your Challenge",
      description: "You must complete the trading challenge yourself. Paying a third party, using trade services, or hiring someone else to pass the challenge on your behalf is strictly forbidden.",
    },
    {
      title: "Copy Trading / Signal Mirroring",
      description: "Using any form of: Copy trading platforms, Social signal services, Trade replication software, Manual mirroring of trades from other accounts is not allowed.",
    },
    {
      title: "High-Frequency Arbitrage / Tick Scalping",
      description: "Using latency arbitrage, tick scalping (ultra-fast entries/exits within seconds), or exploiting broker execution delays is a violation.",
    },
    {
      title: "Account Sharing or Third-Party Access",
      description: "Only the registered trader may access and operate the account. ECAPFX reserves the right to disqualify any trader if we believe someone else is in control of the account or unauthorised activity is taking place.",
    },
    {
      title: "Platform or Pricing Exploits",
      description: "Abusing pricing errors, execution glitches, or misusing software bugs is prohibited. Trades must reflect fair, legitimate market behaviour.",
    },
    {
      title: "News Event Gambling",
      description: "Placing oversized trades before or during major economic news releases, with the intent of capitalising on unpredictable volatility, is not allowed.",
    },
    {
      title: "Use of Expert Advisors (EAs) or Bots",
      description: "Automated systems, bots, or EAs are not allowed unless specifically authorised by ECAPFX in writing.",
    },
    {
      title: "Team/Group Trading",
      description: "Coordinating with others to influence positions, hedge across multiple ECAPFX accounts, or replicate trades is strictly forbidden.",
    },
    {
      title: "Round-Trip Scalping / Spread Exploitation",
      description: "Trades placed solely to benefit from short-term spreads or commission loopholes — with no market intent — are disallowed.",
    },
    {
      title: "Breach of Trading Limits via Manipulation",
      description: "Passing or failing a challenge by manipulating lot sizes, timing, or open PnL to avoid hitting drawdown rules or to force target completion will result in disqualification.",
    },
    {
      title: "False Identity or Fake KYC/AML",
      description: "Submitting fraudulent identification documents or impersonating another person will result in a permanent ban and may trigger legal action.",
    },
    {
      title: "Gambling Behaviour & Excessive Risk-Taking",
      description: "If we detect substantial profits gained through reckless, inconsistent, or gambling-like behaviour, ECAPFX reserves the right to investigate or revoke payout eligibility — even if technical rules have not been broken.",
    },
    {
      title: "Consistency Rule (Discretionary Enforcement)",
      description: "While our Consistency Rule may not be enforced during your challenge, ECAPFX reserves the right to enforce it at the payout stage. If we believe the strategy used to pass the challenge or generate profits is inconsistent, manipulated, or violates the spirit of sustainable trading, we may: Withhold or adjust payouts, Request further verification, Disqualify the account.",
    },
    {
      title: "Misleading Conduct or Fraudulent Intent",
      description: "Any attempt to mislead ECAPFX, evade our systems, or abuse trust will result in immediate account termination.",
    },
    {
      title: "Breached Account Rules",
      description: "If your account breaches any of the following limits or rules, ECAPFX reserves the right to take immediate action, including but not limited to: Daily Loss Limit, Overall (Max) Loss Limit, Profit Loss Limit, Days Trading Limit. Actions may include: Immediate disqualification from the challenge or funded program, Termination of your funded trading account without prior notice, Forfeiture of any pending profits or payouts, Permanent ban from future ECAPFX challenges and funding opportunities, Reporting to relevant authorities in cases of fraud or legal violations.",
    },
  ];

  return (
    <div id="rules" className="relative bg-[#151515] min-h-screen">
      {/* Main Section */}
      <section className="relative flex flex-col items-center justify-center z-10 pt-24 pb-24 px-4 sm:px-8 mx-auto max-w-screen-2xl text-center">
        <div className="mx-auto max-w-4xl">
          {/* Heading */}
          <h3 className="text-3xl sm:text-4xl tracking-wide uppercase text-[#1d8348] font-black" style={{ wordSpacing: '0.5rem' }}>
            ECAPFX Prohibited Practices – Strict Rules Enforcement
          </h3>

          {/* Intro Text */}
          <p className="text-white mt-6 text-xl sm:text-2xl font-semibold">
            At ECAPFX, we are committed to protecting the integrity of our challenges, our traders, and the firm. The following practices are strictly prohibited. Breaching any of these rules may result in: Immediate disqualification, Termination of funded accounts, Forfeiture of profit share, Permanent ban from ECAPFX programs, Report to local authorities (Passing services for example).
          </p>

          {/* Practices Section */}
          <div className="mt-12 text-left space-y-12">
            {practices.map((practice, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-[#f9e7a0]"
              >
                <h4 className="text-2xl font-bold text-[#1d8348]">{practice.title}</h4>
                <p className="text-white mt-4">{practice.description}</p>
              </div>
            ))}
          </div>

          {/* Final Note */}
          <div className="mt-12 bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-[#f9e7a0]">
            <h4 className="text-2xl font-bold text-[#1d8348]">⚠️ Final Note</h4>
            <p className="text-white mt-4">
              By participating in any ECAPFX challenge or funded program, you agree to abide by these rules. Ignorance is not an excuse. We encourage all traders to review the{' '}
              <a href="/terms" className="text-[#1d8348] hover:underline">
                Terms & Conditions
              </a>{' '}
              and Rules Page thoroughly. For questions or clarification, contact our support team — available 24/7, we will aim to respond within 48 hours.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-16 flex justify-center">
            <a
              href="https://active.ecapfx.com/auth/signin"
              className="bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437] hover:via-[#1d8348] hover:to-[#0e3f24] px-6 py-3 rounded-lg text-white text-lg font-semibold transition duration-300 ease-in-out hover:scale-105"
            >
              Get Started Now
            </a>
          </div>

          {/* Disclaimer */}
          <p className="text-[#f7e59f] mt-12 text-base font-semibold text-center">
            ECAPFX is not a financial institution · This website does not promote or sell any financial products or services
          </p>
        </div>
      </section>

      {/* Separator */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#1d8348] to-transparent shadow-lg" />

      {/* Custom Scoped CSS */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding-top: 12vh;
            padding-bottom: 8vh;
          }
        }
      `}</style>
    </div>
  );
};

export default Rules;