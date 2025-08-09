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
        <strong className="text-black">{t('claimPolicy.effectiveDateLabel')}</strong> 11/04/2025<br />
        <strong className="text-black">{t('claimPolicy.regulatoryAlignmentLabel')}</strong> UK Financial Conduct Authority (FCA) – DISP sourcebook
      </p>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.purpose.title')}</h6>
        <p className="text-black-400">
          {t('claimPolicy.sections.purpose.text')}
          <br />
          {t('claimPolicy.sections.purpose.appliesTo')}
        </p>
        <ul className="list-disc pl-6 text-black-400">
          {t('claimPolicy.sections.purpose.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.definition.title')}</h6>
        <p className="text-black-400">
          {t('claimPolicy.sections.definition.text')}<strong className="text-black">{t('claimPolicy.sections.definition.complaint')}</strong> {t('claimPolicy.sections.definition.definition')}
          <br />
          {t('claimPolicy.sections.definition.claim')}<strong className="text-black">{t('claimPolicy.sections.definition.claimText')}</strong> refers to disputes around service delivery or trading progression eligibility.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.howToComplain.title')}</h6>
        <p className="text-black-400">
          {t('claimPolicy.sections.howToComplain.textPrefix')}<a href="mailto:complaints@ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">{t('claimPolicy.sections.howToComplain.email')}</a>{t('claimPolicy.sections.howToComplain.textSuffix')}
        </p>
        <ul className="list-disc pl-6 text-black-400">
          {t('claimPolicy.sections.howToComplain.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.timelines.title')}</h6>
        <ul className="list-disc pl-6 text-black-400">
          {t('claimPolicy.sections.timelines.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.reviewProcess.title')}</h6>
        <ol className="list-decimal pl-6 text-black-400">
          {t('claimPolicy.sections.reviewProcess.steps', { returnObjects: true }).map((step, index) => (
            <li key={index} className="text-black">{step}</li>
          ))}
        </ol>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.escalation.title')}</h6>
        <p className="text-black-400">
          {t('claimPolicy.sections.escalation.text')}
        </p>
        <ul className="list-disc pl-6 text-black-400">
          <li className="text-black">Website: <a href="https://www.financial-ombudsman.org.uk" className="text-[#1d8348] hover:text-[#f9e79f] underline">{t('claimPolicy.sections.escalation.website')}</a></li>
          <li className="text-black">Email: {t('claimPolicy.sections.escalation.email')}</li>
          <li className="text-black">Phone: {t('claimPolicy.sections.escalation.phone')}</li>
          <li className="text-black">Address: {t('claimPolicy.sections.escalation.address')}</li>
        </ul>
        <p className="text-black-400 mt-2">{t('claimPolicy.sections.escalation.referral')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.misuse.title')}</h6>
        <ul className="list-disc pl-6 text-black-400">
          {t('claimPolicy.sections.misuse.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.intellectualProperty.title')}</h6>
        <ul className="list-disc pl-6 text-black-400">
          {t('claimPolicy.sections.intellectualProperty.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">{t('claimPolicy.sections.intellectualProperty.review')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.fcaPrinciples.title')}</h6>
        <ul className="list-disc pl-6 text-black-400">
          {t('claimPolicy.sections.fcaPrinciples.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('claimPolicy.sections.contact.title')}</h6>
        <p className="text-black-400">
          Email: <a href="mailto:contact@ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">{t('claimPolicy.sections.contact.email')}</a><br />
          Website: <a href="https://www.ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">{t('claimPolicy.sections.contact.website')}</a>
        </p>
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