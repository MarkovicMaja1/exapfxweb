import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import PrivacyPolicyPDF from '../assets/ECAPFX_Privacy_Policy_2025.pdf'; // Import the PDF

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-black-100 min-h-screen pt-24 pb-12">
      <h4 className="text-4xl text-center font-bold text-[#1d8348] mt-20 mb-10">{t('privacyPolicy.title')}</h4>
      <p className="text-2xl font-semibold text-black-200 mt-10 mb-10">{t('privacyPolicy.header')}</p>
      <p className="text-black-400 mb-10">
        <strong className="text-black">{t('privacyPolicy.effectiveDateLabel')}</strong> {t('privacyPolicy.effectiveDate')}
        <br />
        <strong className="text-black">{t('privacyPolicy.applicableLawLabel')}</strong> {t('privacyPolicy.applicableLaw')}
      </p>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.introduction.title')}</h6>
        <p className="text-black-400">
          {t('privacyPolicy.sections.introduction.text1')}{' '}
          <a href={t('privacyPolicy.sections.introduction.website')} className="text-[#1d8348] hover:text-[#f9e79f] underline">
            {t('privacyPolicy.sections.introduction.website')}
          </a>{' '}
          {t('privacyPolicy.sections.introduction.text2')}
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.dataController.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.dataController.text1')}</p>
        <p className="text-black-400 mt-2">
          <strong className="text-black">{t('privacyPolicy.sections.dataController.registeredAddressLabel')}</strong> {t('privacyPolicy.sections.dataController.registeredAddress')}
          <br />
          <strong className="text-black">{t('privacyPolicy.sections.dataController.contactLabel')}</strong>{' '}
          <a href={`mailto:${t('privacyPolicy.sections.dataController.email')}`} className="text-[#1d8348] hover:text-[#f9e79f] underline">
            {t('privacyPolicy.sections.dataController.email')}
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.informationWeCollect.title')}</h6>
        <h7 className="text-lg font-medium text-black-300 mt-4">{t('privacyPolicy.sections.informationWeCollect.subsections.a.title')}</h7>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.informationWeCollect.subsections.a.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <h7 className="text-lg font-medium text-black-300 mt-4">{t('privacyPolicy.sections.informationWeCollect.subsections.b.title')}</h7>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.informationWeCollect.subsections.b.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <h7 className="text-lg font-medium text-black-300 mt-4">{t('privacyPolicy.sections.informationWeCollect.subsections.c.title')}</h7>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.informationWeCollect.subsections.c.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.dataSources.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.dataSources.text')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.dataSources.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.howWeUse.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.howWeUse.text')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.howWeUse.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <h7 className="text-lg font-medium text-black-300 mt-4">{t('privacyPolicy.sections.howWeUse.subsections.special.title')}</h7>
        <p className="text-black-400">{t('privacyPolicy.sections.howWeUse.subsections.special.text')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.legalBasis.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.legalBasis.text')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.legalBasis.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">{t('privacyPolicy.sections.legalBasis.text2')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.dataSharing.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.dataSharing.text1')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.dataSharing.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">
          {t('privacyPolicy.sections.dataSharing.text2')}{' '}
          {/* <a href="https://www.ecapfx.com/processors" className="text-[#1d8348] hover:text-[#f9e79f] underline">
            www.ecapfx.com/processors
          </a>. */}
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.internationalDataTransfers.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.internationalDataTransfers.text')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.cookies.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.cookies.text1')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.cookies.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">
          {t('privacyPolicy.sections.cookies.text2')} {' '}
          <a href="https://www.ecapfx.com/cookies" className="text-[#1d8348] hover:text-[#f9e79f] underline">
            www.ecapfx.com/cookies
          </a>.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.dataRetention.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.dataRetention.text')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.dataRetention.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">
          {t('privacyPolicy.sections.dataRetention.text2')} {' '}
          <a href="mailto:privacy@ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">
            privacy@ecapfx.com
          </a>.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.yourRights.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.yourRights.text')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.yourRights.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">
          {t('privacyPolicy.sections.yourRights.text2')} {' '}
          <a href="mailto:privacy@ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">
            privacy@ecapfx.com
          </a>.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.security.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.security.text')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.security.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">{t('privacyPolicy.sections.security.text2')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.marketing.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.marketing.text1')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.marketing.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">{t('privacyPolicy.sections.marketing.text2')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.howToComplain.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.howToComplain.text')}</p>
        <p className="text-black-400 mt-2">
          {t('privacyPolicy.sections.howToComplain.icoAddress')}
          <br />
          {t('privacyPolicy.sections.howToComplain.helpline')}
          <br />
          <a href="https://www.ico.org.uk/make-a-complaint" className="text-[#1d8348] hover:text-[#f9e79f] underline">
            {t('privacyPolicy.sections.howToComplain.website')}
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.updates.title')}</h6>
        <p className="text-black-400">
          {t('privacyPolicy.sections.updates.text')} {' '}
          <a href="https://www.ecapfx.com/privacy-policy" className="text-[#1d8348] hover:text-[#f9e79f] underline">
            www.ecapfx.com/privacy-policy
          </a>.
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.accountability.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.accountability.text')}</p>
      </section>

      <section className="mb-20">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.contactUs.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.contactUs.text')}</p>
        <p className="text-black-400 mt-2">
          {t('privacyPolicy.sections.contactUs.company')}
          <br />
          <strong className="text-black">{t('privacyPolicy.sections.contactUs.emailLabel')}</strong>{' '}
          <a href={`mailto:${t('privacyPolicy.sections.contactUs.email')}`} className="text-[#1d8348] hover:text-[#f9e79f] underline">
            {t('privacyPolicy.sections.contactUs.email')}
          </a>
          <br />
          <strong className="text-black">{t('privacyPolicy.sections.contactUs.websiteLabel')}</strong>{' '}
          <a href={t('privacyPolicy.sections.contactUs.website')} className="text-[#1d8348] hover:text-[#f9e79f] underline">
            {t('privacyPolicy.sections.contactUs.website')}
          </a>
        </p>
      </section>

      <section className="mb-8 text-center">
        <a
          href={PrivacyPolicyPDF}
          download
          className="bg-gradient-to-r from-[#1a6f3d] via-[#1d8348] to-[#145c33] hover:from-[#156437]/90 hover:via-[#1d8348]/90 hover:to-[#0e3f24]/90 hover:text-black hover:shadow-md hover:shadow-green-700/50 px-6 py-2 rounded-lg text-white inline-block transition duration-300 ease-in-out hover:scale-105 active:cursor-pointer select-none w-full md:w-auto text-center"
        >
          {t('privacyPolicy.downloadButton')}
        </a>
      </section>
    </main>
  );
};

export default PrivacyPolicy;