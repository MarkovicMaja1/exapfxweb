import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ClaimsComplaintsPDF from '../assets/ECAPFX_Claims_Complaints_Policy.pdf';

const Claim = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-black-100 min-h-screen pt-24 pb-12">
      <h4 className="text-4xl text-center font-bold text-[#1d8348] mt-20 mb-10">{t('claimPolicy.title')}</h4>
      <p className="text-2xl font-semibold text-black-200 mt-10 mb-10">{t('claimPolicy.header')}</p>
      <p className="text-black-400 mb-10">
        <strong className="text-black">{t('claimPolicy.effectiveDateLabel')}</strong> {t('claimPolicy.effectiveDate')}<br />
        <strong className="text-black">{t('claimPolicy.regulatoryReferenceLabel')}</strong> {t('claimPolicy.regulatoryReference')}
      </p>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.purpose.title')}</h6>
        <p className="text-black-400">
          {t('claimPolicy.sections.purpose.text1')}
          <br />
          {t('claimPolicy.sections.purpose.text2')}
          <br />
          {t('claimPolicy.sections.purpose.text3')}
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.definitions.title')}</h6>
        <p className="text-black-400">
          {t('claimPolicy.sections.definitions.text1')} <strong className="text-black">{t('claimPolicy.sections.definitions.complaintBold')}</strong> {t('claimPolicy.sections.definitions.complaintText')}
          <br />
          {t('claimPolicy.sections.definitions.text2')} <strong className="text-black">{t('claimPolicy.sections.definitions.claimBold')}</strong> {t('claimPolicy.sections.definitions.claimText')}
          <br />
          {t('claimPolicy.sections.definitions.text3')} <strong className="text-black">{t('claimPolicy.sections.definitions.eligibleBold')}</strong> {t('claimPolicy.sections.definitions.eligibleText')}
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.scope.title')}</h6>
        <p className="text-black-400">
          {t('claimPolicy.sections.scope.text')}
        </p>
        <ul className="list-disc pl-6 text-black-400">
          {t('claimPolicy.sections.scope.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.submission.title')}</h6>
        <p className="text-black-400">
          {t('claimPolicy.sections.submission.text1')}<a href="mailto:complaints@ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">{t('claimPolicy.sections.contact.complaintsEmail')}</a>.
          <br />
          {t('claimPolicy.sections.submission.text2')}
        </p>
        <ul className="list-disc pl-6 text-black-400">
          {t('claimPolicy.sections.submission.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.acknowledgement.title')}</h6>
        <ul className="list-disc pl-6 text-black-400">
          {t('claimPolicy.sections.acknowledgement.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.internalReview.title')}</h6>
        <ul className="list-disc pl-6 text-black-400">
          {t('claimPolicy.sections.internalReview.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.escalation.title')}</h6>
        <p className="text-black-400">
          {t('claimPolicy.sections.escalation.text1')}
          <br />
          {t('claimPolicy.sections.escalation.text2')}
        </p>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">{t('claimPolicy.sections.escalation.websiteLabel')} <a href="https://www.financial-ombudsman.org.uk" className="text-[#1d8348] hover:text-[#f9e79f] underline">{t('claimPolicy.sections.escalation.website')}</a></li>
          <li className="text-black">{t('claimPolicy.sections.escalation.emailLabel')} <a href="mailto:complaint.info@financial-ombudsman.org.uk" className="text-[#1d8348] hover:text-[#f9e79f] underline">{t('claimPolicy.sections.contact.complaintsEmail2')}</a></li>
          <li className="text-black">{t('claimPolicy.sections.escalation.phoneLabel')} {t('claimPolicy.sections.escalation.phone')}</li>
          <li className="text-black">{t('claimPolicy.sections.escalation.addressLabel')} {t('claimPolicy.sections.escalation.address')}</li>
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.malicious.title')}</h6>
        <p className="text-black-400">
          {t('claimPolicy.sections.malicious.text')}
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.intellectualProperty.title')}</h6>
        <p className="text-black-400">
          {t('claimPolicy.sections.intellectualProperty.text')}
        </p>
        <ul className="list-disc pl-6 text-black-400">
          {t('claimPolicy.sections.intellectualProperty.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.fcaPrinciples.title')}</h6>
        <p className="text-black-400">
          {t('claimPolicy.sections.fcaPrinciples.text')}
        </p>
        <ul className="list-disc pl-6 text-black-400">
          {t('claimPolicy.sections.fcaPrinciples.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.contact.title')}</h6>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">{t('claimPolicy.sections.contact.complaintsLabel')} <a href="mailto:complaints@ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">{t('claimPolicy.sections.contact.complaintsEmail')}</a></li>
          <li className="text-black">{t('claimPolicy.sections.contact.generalLabel')} <a href="mailto:contact@ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">{t('claimPolicy.sections.contact.generalEmail')}</a></li>
          <li className="text-black">{t('claimPolicy.sections.contact.websiteLabel')} <a href="https://www.ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">{t('claimPolicy.sections.contact.website')}</a></li>
        </ul>
      </section>

      <section className="mb-8 text-center">
        <a
          href={ClaimsComplaintsPDF}
          download
          className="bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 px-6 py-2 rounded-lg text-white inline-block transition duration-300 ease-in-out hover:scale-105 active:cursor-pointer select-none w-full md:w-auto text-center"
        >
          {t('claimPolicy.downloadButton')}
        </a>
      </section>
    </main>
  );
};

export default Claim;