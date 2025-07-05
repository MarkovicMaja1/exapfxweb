import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-black-100 min-h-screen pt-20 pb-12">
      <h4 className="text-4xl text-center font-bold text-[#1d8348] mt-5 mb-10">{t('privacyPolicy.title')}</h4>
      <p className="text-2xl font-semibold text-black-200 mt-10 mb-10">{t('privacyPolicy.header')}</p>
      <p className="text-black-400 mb-10">
        <strong className="text-black">{t('privacyPolicy.effectiveDateLabel')}</strong> 11/04/2025
        <br />
        <strong className="text-black">{t('privacyPolicy.applicableLawLabel')}</strong> UK General Data Protection Regulation (UK GDPR), Data Protection Act 2018, and Financial Conduct Authority (FCA) Principles
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
        <p className="text-black-400 mt-2">{t('privacyPolicy.sections.introduction.agreement')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.dataController.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.dataController.text1')}</p>
        <p className="text-black-400 mt-2">
          <strong className="text-black">{t('privacyPolicy.sections.dataController.registeredAddressLabel')}</strong> Office 7330MO 182-184, High Street North Area 1/1, East Ham, London, E6 2JA
          <br />
          <strong className="text-black">{t('privacyPolicy.sections.dataController.contactLabel')}</strong>{' '}
          <a href={`mailto:${t('privacyPolicy.sections.dataController.email')}`} className="text-[#1d8348] hover:text-[#f9e79f] underline">
            {t('privacyPolicy.sections.dataController.email')}
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.informationWeCollect.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.informationWeCollect.text')}</p>
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
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.howWeUse.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.howWeUse.text')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.howWeUse.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.legalBasis.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.legalBasis.text')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.legalBasis.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">
              <strong className="text-black">{item.bold}</strong> {item.description}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.dataSharing.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.dataSharing.text1')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.dataSharing.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">{t('privacyPolicy.sections.dataSharing.text2')}</p>
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
          {t('privacyPolicy.sections.cookies.text2')}{' '}
          <Link to="/cookies" className="text-[#1d8348] hover:text-[#f9e79f] underline">
            {t('privacyPolicy.sections.cookies.link')}
          </Link>.
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
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.yourRights.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.yourRights.text')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.yourRights.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">
              {item.includes('https://ico.org.uk/') ? (
                <>
                  {item.split('https://ico.org.uk/')[0]}{' '}
                  <a href="https://ico.org.uk/" className="text-[#1d8348] hover:text-[#f9e79f] underline">
                    https://ico.org.uk/
                  </a>
                </>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">
          {t('privacyPolicy.sections.yourRights.contactText')}{' '}
          <a href={`mailto:${t('privacyPolicy.sections.yourRights.email')}`} className="text-[#1d8348] hover:text-[#f9e79f] underline">
            {t('privacyPolicy.sections.yourRights.email')}
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
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.marketing.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.marketing.text1')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('privacyPolicy.sections.marketing.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">
              {index === 1 ? (
                <>
                  {item.split('privacy@ecapfx.com')[0]}{' '}
                  <a href="mailto:privacy@ecapfx.com" className="text-[#1d8348] hover:text-[#f9e79f] underline">
                    privacy@ecapfx.com
                  </a>
                </>
              ) : (
                item
              )}
            </li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">{t('privacyPolicy.sections.marketing.text2')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.updates.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.updates.text')}</p>
      </section>

      <section className="mb-20">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('privacyPolicy.sections.contactUs.title')}</h6>
        <p className="text-black-400">{t('privacyPolicy.sections.contactUs.text1')}</p>
        <p className="text-black-400 mt-2">
          {t('privacyPolicy.sections.contactUs.company')}
          <br />
          <strong className="text-black">{t('privacyPolicy.sections.contactUs.emailLabel')}</strong>{' '}
          <a href={`mailto:${t('privacyPolicy.sections.contactUs.email')}`} className="text-[#1d8348] hover:text-[#f9e79f] underline">
            {t('privacyPolicy.sections.contactUs.email')}
          </a>
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;