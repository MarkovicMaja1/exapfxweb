import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'; // Added for navigation links

const TermsAndConditions = () => {
  // Only scroll to top if no hash is present
  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-black-100 min-h-screen pt-20 pb-12">
      <h4 className="text-4xl text-center font-bold text-[#1d8348] mt-5 mb-10">Terms and Conditions</h4>
      <p className="text-2xl font-semibold text-black-200 mt-10 mb-10">ECAPFX Proprietary Firm – Terms and Conditions</p>
      <p className="text-black-400 mb-10">
        <strong className="text-black">Effective Date:</strong> June 2, 2025
        <br />
        <strong className="text-black">Website:</strong>{' '}
        <a href="https://www.ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">
          https://www.ecapfx.com
        </a>
        <br />
        <strong className="text-black">Jurisdiction:</strong> United Kingdom
      </p>
      <p className="text-black-400 mb-10">
        These Terms and Conditions (“Terms”) govern your access to and use of the services, website, and trading programmes provided by ECAPFX Proprietary Firm (“ECAPFX”, “we”, “us”, or “our”). By using our website or participating in any of our services, you agree to be bound by these Terms.
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
        <p className="text-black-400">
          To use our services, you must:
        </p>
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
        <p className="text-black-400">
          ECAPFX offers:
        </p>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Trading challenges across forex, commodities, and futures markets</li>
          <li className="text-black">Funded account opportunities subject to challenge success and compliance</li>
          <li className="text-black">Profit-sharing schemes (details available in individual programme pages)</li>
          <li className="text-black">Educational and performance analytics tools</li>
        </ul>
        <p className="text-black-400 mt-2">
          All services are subject to change without prior notice. Detailed rules are outlined in each challenge’s FAQ or programme guide.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">4. Funded Accounts and Payouts</h6>
        <p className="text-black-400">
          Successful completion of our multi-phase evaluation may qualify you for a simulated or real capital trading account. Terms include:
        </p>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Profit split ratios (e.g., 80/20) are outlined before challenge entry</li>
          <li className="text-black">Payouts are subject to identity verification, AML checks, KYC and account health</li>
          <li className="text-black">Violations of trading rules (e.g., daily drawdown breach) may void eligibility—please confirm with rules before purchase of a challenge</li>
          <li className="text-black">We reserve the right to revoke funding if we suspect fraud, manipulation, or breach of rules</li>
        </ul>
        <p className="text-black-400 mt-2">Payouts are typically processed within 5–10 business days after approval.</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">5. Fees and Payments</h6>
        <p className="text-black-400">
          Participation in trading challenges requires payment of a one-time, non-refundable fee. All fees:
        </p>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Are clearly listed prior to purchase</li>
          <li className="text-black">Include applicable UK VAT where required</li>
          <li className="text-black">May be paid via Stripe, PayPal, or other approved gateways</li>
        </ul>
        <p className="text-black-400 mt-2">
          Refunds will only be issued in the case of technical faults or service failure on our part. Users must submit refund requests in writing within 7 days of the issue.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">6. User Conduct</h6>
        <p className="text-black-400">
          You agree not to:
        </p>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Use bots, scripts, or automation to trade</li>
          <li className="text-black">Misuse platform access or breach challenge rules</li>
          <li className="text-black">Attempt to reverse-engineer or interfere with the platform</li>
          <li className="text-black">Impersonate others or submit false documents</li>
          <li className="text-black">Use our service for unlawful, deceptive, or malicious purposes</li>
          <li className="text-black">We reserve the right to implement any trading rule we perceive to be a risk to our company at any point of your trading journey with us</li>
        </ul>
        <p className="text-black-400 mt-2">
          Violation of this clause may result in account suspension, forfeiture of any payouts, or legal action.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">7. Intellectual Property</h6>
        <p className="text-black-400">
          All website content, including but not limited to branding, logos, videos, documents, software, and layout, is the intellectual property of ECAPFX or our licensors. You may not copy, reproduce, or use it for commercial purposes without written permission.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">8. Limitation of Liability</h6>
        <p className="text-black-400">
          To the maximum extent permitted by law, ECAPFX will not be liable for:
        </p>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Any loss of profits or opportunity</li>
          <li className="text-black">Errors resulting from third-party platforms (e.g., brokers or data feeds)</li>
          <li className="text-black">Indirect, incidental, or consequential damages</li>
          <li className="text-black">Delays or failures due to force majeure events (e.g., server outages, war, regulation)</li>
        </ul>
        <p className="text-black-400 mt-2">
          Our total liability under these Terms shall not exceed the amount paid by you for the challenge in question.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">9. Privacy and Data Protection</h6>
        <p className="text-black-400">
          We are committed to protecting your personal data under UK GDPR and the Data Protection Act 2018. Please refer to our{' '}
          <Link to="/privacy-policy" className="text-[#1d8348] hover:text-[#f9e79f] underline">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link to="/cookie-policy" className="text-[#1d8348] hover:text-[#f9e79f] underline">
            Cookie Policy
          </Link>{' '}
          for full details on how we handle your data.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">10. Complaints and Dispute Resolution</h6>
        <p className="text-black-400">
          If you are dissatisfied with our services, please refer to our{' '}
          <Link to="/complaints-policy" className="text-[#1d8348] hover:text-[#f9e79f] underline">
            Complaints Policy
          </Link>{' '}
          to raise your concern.
          <br />
          If your complaint is unresolved after 8 weeks, and you are an eligible complainant, you may refer the case to the UK Financial Ombudsman Service.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">11. Termination</h6>
        <p className="text-black-400">
          We may terminate your access to our platform or funded accounts at any time for cause, including:
        </p>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Breach of these Terms</li>
          <li className="text-black">Violation of trading rules</li>
          <li className="text-black">Evidence of fraudulent behaviour</li>
          <li className="text-black">Regulatory concerns</li>
        </ul>
        <p className="text-black-400 mt-2">
          You may cancel your account at any time by emailing{' '}
          <a href="mailto:support@ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">
            support@ecapfx.com
          </a>
          . Refunds are not issued for voluntary cancellations.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">12. Governing Law</h6>
        <p className="text-black-400">
          These Terms are governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">13. Changes to These Terms</h6>
        <p className="text-black-400">
          We reserve the right to modify these Terms at any time. Updated Terms will be posted on our website and take effect immediately. You are responsible for reviewing the Terms periodically.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">14. Know Your Customer (KYC) and Restricted Jurisdictions</h6>
        <p className="text-black-400">
          To comply with international regulations and applicable laws, all users of ECAPFX must complete identity verification to participate in evaluation programmes or receive payouts.
        </p>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">14.1 KYC Requirements</h6>
        <p className="text-black-400">
          As part of our registration and payout procedures, you are required to submit full identity verification using a valid government-issued photo ID (e.g., passport or national identity card). We utilize secure identity verification solutions provided by Kenmore Design to process and validate KYC documents. Payouts will only be processed upon successful completion of identity verification.
        </p>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">14.2 Prohibited Jurisdictions</h6>
        <p className="text-black-400">
          The use of ECAPFX services is strictly prohibited from the following jurisdictions, regardless of attempts to bypass restrictions through VPNs or other methods:
        </p>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Afghanistan</li>
          <li className="text-black">Belarus</li>
          <li className="text-black">Canada</li>
          <li className="text-black">Cuba</li>
          <li className="text-black">Iran</li>
          <li className="text-black">Myanmar (Burma)</li>
          <li className="text-black">North Korea (DPRK)</li>
          <li className="text-black">Russia</li>
          <li className="text-black">Syria</li>
          <li className="text-black">United States of America (USA)</li>
          <li className="text-black">Crimea, Donetsk, and Luhansk regions of Ukraine</li>
        </ul>
        <p className="text-black-400 mt-2">
          If access from any of these jurisdictions is detected, ECAPFX reserves the right to terminate your account and withhold any pending payouts.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">15. Anti-Money Laundering (AML) Policy</h6>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">15.1 Introduction</h6>
        <p className="text-black-400">
          ECAPFX is an educational trading evaluation platform that provides traders with access to simulated (demo) trading accounts. Our platform is designed exclusively for the development, assessment, and demonstration of trading skills in a risk-free environment.
        </p>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">15.2 Scope</h6>
        <p className="text-black-400">
          This AML Policy applies to all ECAPFX employees, contractors, and associated personnel. It outlines the company’s approach to Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) in relation to its operations.
        </p>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">15.3 Business Model and Nature of Services</h6>
        <p className="text-black-400">
          <ul className="list-disc pl-6 text-black-400">
            <li className="text-black">ECAPFX does not accept, hold, or manage any client funds.</li>
            <li className="text-black">ECAPFX does not provide financial advice, investment recommendations, or manage real capital.</li>
            <li className="text-black">All trading activities on the ECAPFX platform occur in a simulated, risk-free environment using demo accounts only.</li>
            <li className="text-black">ECAPFX operates strictly for educational and evaluation purposes.</li>
          </ul>
        </p>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">15.4 AML Regulatory Status</h6>
        <p className="text-black-400">
          Given the nature of ECAPFX’s services, the company is not subject to the regulatory obligations typically imposed on financial institutions or entities that handle real client funds or conduct actual financial transactions. This includes, but is not limited to:
        </p>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Customer due diligence (CDD) and Know Your Customer (KYC) requirements beyond those outlined in Section 14.</li>
          <li className="text-black">Transaction monitoring for suspicious activity.</li>
          <li className="text-black">Reporting of suspicious activity to financial intelligence units (FIUs).</li>
          <li className="text-black">Sanctions screening and risk assessments.</li>
        </ul>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">15.5 Commitment to Compliance</h6>
        <p className="text-black-400">
          While ECAPFX is not obligated to implement formal AML controls due to the absence of real fund handling, the company remains committed to:
        </p>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Maintaining transparency in all business operations.</li>
          <li className="text-black">Ensuring legal and regulatory compliance in all applicable areas.</li>
          <li className="text-black">Monitoring regulatory developments that may affect the business model or obligations.</li>
          <li className="text-black">Implementing a comprehensive AML program immediately should the business model evolve to include handling of real client funds or financial transactions.</li>
        </ul>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">15.6 Future AML Policy Implementation</h6>
        <p className="text-black-400">
          Should ECAPFX expand or modify its business operations to include the acceptance, management, or processing of client funds, the company will:
        </p>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Develop and implement a full AML/CTF compliance program in line with relevant regulations.</li>
          <li className="text-black">Conduct appropriate customer due diligence (CDD) and ongoing monitoring.</li>
          <li className="text-black">Appoint a Money Laundering Reporting Officer (MLRO) responsible for AML compliance.</li>
          <li className="text-black">Provide AML training and awareness to all staff members.</li>
        </ul>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">15.7 Policy Development and Support</h6>
        <p className="text-black-400">
          This AML Policy has been developed with the support of a private company that supplies ECAPFX with its Customer Relationship Management (CRM) platform. This partnership assists ECAPFX in maintaining and implementing compliance best practices aligned with industry standards.
        </p>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">15.8 Conclusion</h6>
        <p className="text-black-400">
          ECAPFX maintains a clear position as an educational and simulated trading platform without real money involvement. The company acknowledges the importance of AML regulations and stands ready to implement necessary controls if its business operations change.
        </p>
        <p className="text-black-400 mt-4">
          <strong>Document Version:</strong> 1.1
          <br />
          <strong>Reviewed by:</strong> ECAPFX Compliance Officer
          <br />
          <strong>Approved by:</strong> EcapFX Management Team
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">16. Contact Information</h6>
        <p className="text-black-400">
          If you have any questions about these Terms, please contact us:
          <br />
          <strong>ECAPFX Proprietary Firm</strong>
          <br />
          <strong>Email:</strong>{' '}
          <a href="mailto:support@ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">
            support@ecapfx.com
          </a>
          <br />
          <strong>Website:</strong>{' '}
          <a href="https://www.ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">
            https://www.ecapfx.com
          </a>
        </p>
      </section>

    </main>
  );
};

export default TermsAndConditions;