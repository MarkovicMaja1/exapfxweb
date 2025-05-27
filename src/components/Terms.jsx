import React from 'react';

function TermsAndConditions() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-black-100 min-h-screen pt-20 pb-12">
      <h4 className="text-4xl text-center font-bold text-[#1d8348] mt-5 mb-10">Terms and Conditions</h4>
      <p className="text-2xl font-semibold text-black-200 mt-10 mb-10">ECAPFX Proprietary Firm – Terms and Conditions</p>
      <p className="text-black-400 mb-10">
        <strong className="text-black">Effective Date:</strong> 11/04/2025
        <br />
        <strong className="text-black">Jurisdiction:</strong> United Kingdom
      </p>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">1. About ECAPFX</h6>
        <p className="text-black-400">
          ECAPFX Proprietary Firm is a financial technology and prop trading company offering evaluation challenges for aspiring traders. Upon successful completion, traders may be offered a funded account under a profit-sharing model.
          <br />
          We are <strong className="text-black">not a broker</strong> and <strong className="text-black">do not offer investment advice</strong>. All trading activities are simulated or executed through third-party brokerage accounts with demo or real capital.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">2. Eligibility</h6>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Be 18 years or older</li>
          <li className="text-black">Have the legal capacity to enter into a contract</li>
          <li className="text-black">Not be prohibited under any applicable law from participating in financial activities</li>
          <li className="text-black">Not be located in any restricted or sanctioned country (per FCA and UK law)</li>
        </ul>
        <p className="text-black-400 mt-2">By registering, you confirm that all information you provide is truthful and accurate.</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">3. Services Offered</h6>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Trading challenges across forex, commodities, and futures markets</li>
          <li className="text-black">Funded account opportunities subject to challenge success and compliance</li>
          <li className="text-black">Profit-sharing schemes (details available in individual programme pages)</li>
          <li className="text-black">Educational and performance analytics tools</li>
        </ul>
        <p className="text-black-400 mt-2">All services are subject to change without prior notice.</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">4. Funded Accounts and Payouts</h6>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Profit split ratios (e.g., 80/20) are outlined before challenge entry</li>
          <li className="text-black">Payouts are subject to identity verification, AML checks, KYC and account health</li>
          <li className="text-black">Violations of trading rules (e.g., daily drawdown breach) may void eligibility</li>
          <li className="text-black">We reserve the right to revoke funding if we suspect fraud, manipulation, or breach of rules</li>
        </ul>
        <p className="text-black-400 mt-2">Payouts are typically processed within 5–10 business days after approval.</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">5. Fees and Payments</h6>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Fees are one-time, non-refundable</li>
          <li className="text-black">Include applicable UK VAT where required</li>
          <li className="text-black">Payments via Stripe, PayPal, or other approved gateways</li>
        </ul>
        <p className="text-black-400 mt-2">Refunds are only issued for technical faults or service failures, and must be requested within 7 days.</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">6. User Conduct</h6>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">No bots, scripts, or automation</li>
          <li className="text-black">No misuse or breach of platform rules</li>
          <li className="text-black">No reverse engineering or interference</li>
          <li className="text-black">No impersonation or false documentation</li>
          <li className="text-black">No unlawful, deceptive, or malicious use</li>
        </ul>
        <p className="text-black-400 mt-2">We reserve the right to introduce new rules deemed necessary at any point.</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">7. Intellectual Property</h6>
        <p className="text-black-400">
          All website content is the intellectual property of ECAPFX or licensors. Commercial use without written permission is prohibited.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">8. Limitation of Liability</h6>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">No liability for profit/loss or third-party platform errors</li>
          <li className="text-black">Not liable for indirect or consequential damages</li>
          <li className="text-black">No liability for force majeure events</li>
        </ul>
        <p className="text-black-400 mt-2">Total liability is limited to your challenge fee.</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">9. Privacy and Data Protection</h6>
        <p className="text-black-400">
          See our <a href="/privacy-policy" className="text-[#1d8348] hover:text-[#f9e79f] underline">Privacy Policy</a> and <a href="/terms" className="text-[#1d8348] hover:text-[#f9e79f] underline">Cookie Policy</a>.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">10. Complaints and Dispute Resolution</h6>
        <p className="text-black-400">
          Refer to our <a href="/claim" className="text-[#1d8348] hover:text-[#f9e79f] underline">Complaints Policy</a>. If unresolved after 8 weeks, you may contact the UK Financial Ombudsman.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">11. Termination</h6>
        <p className="text-black-400">
          We may terminate your access for breaches, fraud, or regulatory reasons. You may cancel by emailing <a href="mailto:support@ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">support@ecapfx.com</a>. Refunds are not granted for voluntary cancellations.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">12. Governing Law</h6>
        <p className="text-black-400">These Terms are governed by the laws of England and Wales. Disputes fall under their courts' exclusive jurisdiction.</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">13. Changes to These Terms</h6>
        <p className="text-black-400">We may update these Terms at any time. Updates will be posted online and take effect immediately.</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">14. Contact Information</h6>
        <p className="text-black-400">
          For questions, email us at <a href="mailto:support@ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">support@ecapfx.com</a> or visit <a href="https://www.ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">https://www.ecapfx.com</a>.
        </p>
      </section>
    </main>
  );
}

export default TermsAndConditions;
