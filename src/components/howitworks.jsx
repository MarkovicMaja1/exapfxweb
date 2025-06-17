import React from 'react';

const HowItWorks = () => {
  return (
    <div id="how-it-works" className="relative bg-[#151515] min-h-screen">
      {/* Main Section */}
      <section className="relative flex flex-col items-center justify-center z-10 pt-24 pb-24 px-4 sm:px-8 mx-auto max-w-screen-2xl text-center">
        <div className="mx-auto max-w-4xl">
          <h3 className="text-3xl sm:text-4xl tracking-wide uppercase text-[#1d8348] font-black" style={{ wordSpacing: '0.5rem' }}>
            How It Works
          </h3>
          <p className="text-white mt-6 text-xl sm:text-2xl font-semibold">
            Follow these steps to turn your trading skills into funded success with ECAPFX.
          </p>

          {/* Steps Section */}
          <div className="mt-12 text-left space-y-12">
            {/* Step 1 */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-[#f9e7a0]">
              <h4 className="text-2xl font-bold text-[#1d8348]">Step 1: Sign Up & Choose Your Challenge</h4>
              <p className="text-white mt-4">
                Create your account and select a challenge plan that matches your trading goals. We offer three structured options to suit every trader:
              </p>
              <ul className="text-white mt-4 space-y-2 list-disc list-inside">
                <li><strong>Beginner (Greenwave)</strong> – Designed for those new to trading, with relaxed targets and more time to learn and get funded.</li>
                <li><strong>Experienced (El Verde)</strong> – Ideal for traders with some track record looking to scale up with moderate risk.</li>
                <li><strong>Seasoned (Ecosphere)</strong> – Built for professional-level traders ready to meet tighter targets and maximize funding potential.</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-[#f9e7a0]">
              <h4 className="text-2xl font-bold text-[#1d8348]">Step 2: Prove Your Skills</h4>
              <p className="text-white mt-4">
                Trade in a simulated environment and demonstrate your strategy while staying within our risk parameters:
              </p>
              <ul className="text-white mt-4 space-y-2 list-disc list-inside">
                <li><strong>Daily Loss Limit</strong> – Stay within daily risk thresholds to demonstrate disciplined trading.</li>
                <li><strong>Max Drawdown</strong> – Avoid hitting the overall account drawdown limit.</li>
                <li><strong>Profit Targets</strong> – Reach the required profit level to pass the phase or challenge.</li>
                <li><strong>Consistency Rules</strong> – Evaluated based on your selected path (Phased or Instant), ensuring sustainable performance.</li>
                <li><strong>Instant Challenges</strong> – Include trailing drawdown with tight measurement guidelines to test high-level discipline and skill.</li>
                <li><strong>Profit Split</strong> – Starts from 80/20.</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-[#f9e7a0]">
              <h4 className="text-2xl font-bold text-[#1d8348]">Step 3: Get Funded</h4>
              <p className="text-white mt-4">
                Once you’ve successfully passed the evaluation process:
              </p>
              <ul className="text-white mt-4 space-y-2 list-disc list-inside">
                <li>You’ll go through our KYC (Know Your Customer) and AML (Anti-Money Laundering) checks.</li>
                <li>We aim to grant account access within 5 calendar days, ensuring all legal and compliance requirements are met.</li>
                <li>Before trading, please review our prohibited practices to avoid any violations. Check our <a href="/rules" className="text-[#1d8348] hover:underline">Rules Page</a> or refer to the <a href="/terms" className="text-[#1d8348] hover:underline">Terms & Conditions</a>.</li>
              </ul>
            </div>

            {/* Step 4 */}
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-md border border-[#f9e7a0]">
              <h4 className="text-2xl font-bold text-[#1d8348]">Step 4: Trade, Earn & Make a Difference</h4>
              <p className="text-white mt-4">
                Congratulations, you’re now a funded ECAPFX trader!
              </p>
              <ul className="text-white mt-4 space-y-2 list-disc list-inside">
                <li>You’ll earn a profit share based on the model selected during your challenge.</li>
                <li>After your first successful year, ECAPFX will donate 1% of our profits to our sustainability project, creating meaningful impact beyond the charts.</li>
                <li>Your success helps shape a more sustainable world - trade with purpose.</li>
              </ul>
            </div>
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

export default HowItWorks;