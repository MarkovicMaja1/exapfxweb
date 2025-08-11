import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import TermsAndConditionsPDF from '../assets/ECAPFX_Terms_And_Conditions.pdf';

const TermsAndConditions = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-black-100 min-h-screen pt-24 pb-12">
      <h4 className="text-4xl text-center font-bold text-[#1d8348] mt-20 mb-10">{t('termsAndConditions.title')}</h4>
      <p className="text-2xl font-semibold text-black-200 mt-10 mb-10">{t('termsAndConditions.header')}</p>
      <p className="text-black-400 mb-10">
        <strong className="text-black">{t('termsAndConditions.effectiveDateLabel')}</strong> {t('termsAndConditions.effectiveDate')}
        <br />
        <strong className="text-black">{t('termsAndConditions.websiteLabel')}</strong>{' '}
        <a href={t('termsAndConditions.website')} className="text-[#1d8348] hover:text-[#f9e79f] underline" aria-label="Visit ECAPFX website">
          {t('termsAndConditions.website')}
        </a>
        <br />
        <strong className="text-black">{t('termsAndConditions.jurisdictionLabel')}</strong> {t('termsAndConditions.jurisdiction')}
      </p>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.about.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.about.text')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.eligibility.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.eligibility.text1')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('termsAndConditions.sections.eligibility.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">{t('termsAndConditions.sections.eligibility.text2')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.servicesOffered.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.servicesOffered.text1')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('termsAndConditions.sections.servicesOffered.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">{t('termsAndConditions.sections.servicesOffered.text2')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.fundedAccounts.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.fundedAccounts.text1')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('termsAndConditions.sections.fundedAccounts.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">{t('termsAndConditions.sections.fundedAccounts.text2')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.feesAndPayments.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.feesAndPayments.text1')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('termsAndConditions.sections.feesAndPayments.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">{t('termsAndConditions.sections.feesAndPayments.text2')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.userConduct.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.userConduct.text1')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('termsAndConditions.sections.userConduct.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">{t('termsAndConditions.sections.userConduct.text2')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.intellectualProperty.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.intellectualProperty.text')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.limitationOfLiability.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.limitationOfLiability.text1')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('termsAndConditions.sections.limitationOfLiability.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">{t('termsAndConditions.sections.limitationOfLiability.text2')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.privacy.title')}</h6>
        <p className="text-black-400">
          {t('termsAndConditions.sections.privacy.text1')}{' '}
          <Link to="/privacy-policy" className="text-[#1d8348] hover:text-[#f9e79f] underline" aria-label="View Privacy Policy">
            {t('termsAndConditions.sections.privacy.privacyPolicyLink')}
          </Link>{' '}
          {t('termsAndConditions.sections.privacy.text2')}{' '}
          <Link to="/cookies" className="text-[#1d8348] hover:text-[#f9e79f] underline" aria-label="View Cookie Policy">
            {t('termsAndConditions.sections.privacy.cookiePolicyLink')}
          </Link>
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.complaints.title')}</h6>
        <p className="text-black-400">
          {t('termsAndConditions.sections.complaints.text1')}{' '}
          <Link to="/complaints-policy" className="text-[#1d8348] hover:text-[#f9e79f] underline" aria-label="View Complaints Policy">
            {t('termsAndConditions.sections.complaints.complaintsPolicyLink')}
          </Link>{' '}
          {t('termsAndConditions.sections.complaints.text2')}
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.termination.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.termination.text1')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('termsAndConditions.sections.termination.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">
          {t('termsAndConditions.sections.termination.text2')}{' '}
          <a
            href={`mailto:${t('termsAndConditions.sections.termination.email')}`}
            className="text-[#1d8348] hover:text-[#f9e79f] underline"
            aria-label="Email support for account cancellation"
          >
            {t('termsAndConditions.sections.termination.email')}
          </a>{' '}
          {t('termsAndConditions.sections.termination.text3')}
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.governingLaw.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.governingLaw.text')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.changesToTerms.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.changesToTerms.text')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.kyc.title')}</h6>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">{t('termsAndConditions.sections.kyc.subsections.requirements.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.kyc.subsections.requirements.text')}</p>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">{t('termsAndConditions.sections.kyc.subsections.prohibitedJurisdictions.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.kyc.subsections.prohibitedJurisdictions.text1')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('termsAndConditions.sections.kyc.subsections.prohibitedJurisdictions.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">{t('termsAndConditions.sections.kyc.subsections.prohibitedJurisdictions.text2')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.aml.title')}</h6>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">{t('termsAndConditions.sections.aml.subsections.introduction.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.aml.subsections.introduction.text')}</p>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">{t('termsAndConditions.sections.aml.subsections.scope.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.aml.subsections.scope.text')}</p>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">{t('termsAndConditions.sections.aml.subsections.businessModel.title')}</h6>
        <ul className="list-disc pl-6 text-black-400">
          {t('termsAndConditions.sections.aml.subsections.businessModel.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">{t('termsAndConditions.sections.aml.subsections.regulatoryStatus.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.aml.subsections.regulatoryStatus.text')}</p>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">{t('termsAndConditions.sections.aml.subsections.compliance.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.aml.subsections.compliance.text')}</p>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">{t('termsAndConditions.sections.aml.subsections.futurePolicy.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.aml.subsections.futurePolicy.text')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('termsAndConditions.sections.aml.subsections.futurePolicy.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">{t('termsAndConditions.sections.aml.subsections.policyDevelopment.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.aml.subsections.policyDevelopment.text')}</p>
        <h6 className="text-lg font-semibold text-black-200 mt-4 mb-2">{t('termsAndConditions.sections.aml.subsections.conclusion.title')}</h6>
        <p className="text-black-400">{t('termsAndConditions.sections.aml.subsections.conclusion.text')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('termsAndConditions.sections.contact.title')}</h6>
        <p className="text-black-400">
          {t('termsAndConditions.sections.contact.text')}
          <br />
          <strong className="text-black">{t('termsAndConditions.sections.contact.company')}</strong>
          <br />
          <strong className="text-black">{t('termsAndConditions.sections.contact.emailLabel')}</strong>{' '}
          <a
            href={`mailto:${t('termsAndConditions.sections.contact.email')}`}
            className="text-[#1d8348] hover:text-[#f9e79f] underline"
            aria-label="Email support for inquiries"
          >
            {t('termsAndConditions.sections.contact.email')}
          </a>
          <br />
          <strong className="text-black">{t('termsAndConditions.sections.contact.websiteLabel')}</strong>{' '}
          <a
            href={t('termsAndConditions.sections.contact.website')}
            className="text-[#1d8348] hover:text-[#f9e79f] underline"
            aria-label="Visit ECAPFX website"
          >
            {t('termsAndConditions.sections.contact.website')}
          </a>
        </p>
      </section>

      <section className="mb-8 text-center">
        <a
          href={TermsAndConditionsPDF}
          download
          className="bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 px-6 py-2 rounded-lg text-white inline-block transition duration-300 ease-in-out hover:scale-105 active:cursor-pointer select-none w-full md:w-auto text-center"
        >
          {t('termsAndConditions.downloadButton')}
        </a>
      </section>
    </main>
  );
};

export default TermsAndConditions;