import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Cookies = () => {
  const { t } = useTranslation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-black-100 min-h-screen pt-20 pb-12">
      <h4 className="text-4xl text-center font-bold text-[#1d8348] mt-5 mb-10">{t('cookiePolicy.title')}</h4>
      <p className="text-2xl font-semibold text-black-200 mt-10 mb-10">{t('cookiePolicy.header')}</p>
      <p className="text-black-400 mb-10">
        <strong className="text-black">{t('cookiePolicy.effectiveDateLabel')}</strong> {t('cookiePolicy.effectiveDate')}
        <br />
        <strong className="text-black">{t('cookiePolicy.applicableLawLabel')}</strong> {t('cookiePolicy.applicableLaw')}
      </p>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('cookiePolicy.sections.introduction.title')}</h6>
        <p className="text-black-400">
          {t('cookiePolicy.sections.introduction.text1')}{' '}
          <a href={t('cookiePolicy.sections.introduction.website')} className="text-[#1d8348] hover:text-[#f9e79f] underline">
            {t('cookiePolicy.sections.introduction.website')}
          </a>{' '}
          {t('cookiePolicy.sections.introduction.text2')}
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('cookiePolicy.sections.operator.title')}</h6>
        <p className="text-black-400">{t('cookiePolicy.sections.operator.text1')}</p>
        <p className="text-black-400 mt-2">
          <strong className="text-black">{t('cookiePolicy.sections.operator.contactLabel')}</strong>{' '}
          <a href={`mailto:${t('cookiePolicy.sections.operator.email')}`} className="text-[#1d8348] hover:text-[#f9e79f] underline">
            {t('cookiePolicy.sections.operator.email')}
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('cookiePolicy.sections.whatAreCookies.title')}</h6>
        <p className="text-black-400">{t('cookiePolicy.sections.whatAreCookies.text')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('cookiePolicy.sections.typesOfCookies.title')}</h6>
        <p className="text-black-400">{t('cookiePolicy.sections.typesOfCookies.text')}</p>
        <h7 className="text-lg font-medium text-black-300 mt-4">{t('cookiePolicy.sections.typesOfCookies.subsections.necessary.title')}</h7>
        <ul className="list-disc pl-6 text-black-400">
          {t('cookiePolicy.sections.typesOfCookies.subsections.necessary.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <h7 className="text-lg font-medium text-black-300 mt-4">{t('cookiePolicy.sections.typesOfCookies.subsections.analytical.title')}</h7>
        <ul className="list-disc pl-6 text-black-400">
          {t('cookiePolicy.sections.typesOfCookies.subsections.analytical.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <h7 className="text-lg font-medium text-black-300 mt-4">{t('cookiePolicy.sections.typesOfCookies.subsections.marketing.title')}</h7>
        <ul className="list-disc pl-6 text-black-400">
          {t('cookiePolicy.sections.typesOfCookies.subsections.marketing.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('cookiePolicy.sections.cookieManagement.title')}</h6>
        <p className="text-black-400">{t('cookiePolicy.sections.cookieManagement.text1')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('cookiePolicy.sections.cookieManagement.items', { returnObjects: true }).map((item, index) => (
            <li key={index} className="text-black">{item}</li>
          ))}
        </ul>
        <p className="text-black-400 mt-2">{t('cookiePolicy.sections.cookieManagement.text2')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('cookiePolicy.sections.thirdPartyCookies.title')}</h6>
        <p className="text-black-400">{t('cookiePolicy.sections.thirdPartyCookies.text')}</p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('cookiePolicy.sections.yourRights.title')}</h6>
        <p className="text-black-400">{t('cookiePolicy.sections.yourRights.text')}</p>
        <ul className="list-disc pl-6 text-black-400">
          {t('cookiePolicy.sections.yourRights.items', { returnObjects: true }).map((item, index) => (
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
          {t('cookiePolicy.sections.yourRights.contactText')}{' '}
          <a href={`mailto:${t('cookiePolicy.sections.yourRights.email')}`} className="text-[#1d8348] hover:text-[#f9e79f] underline">
            {t('cookiePolicy.sections.yourRights.email')}
          </a>
        </p>
      </section>

      <section className="mb-8">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('cookiePolicy.sections.updates.title')}</h6>
        <p className="text-black-400">{t('cookiePolicy.sections.updates.text')}</p>
      </section>

      <section className="mb-20">
        <h6 className="text-xl font-semibold text-black-200 mb-2">{t('cookiePolicy.sections.contact.title')}</h6>
        <p className="text-black-400">{t('cookiePolicy.sections.contact.text')}</p>
        <p className="text-black-400 mt-2">
          {t('cookiePolicy.sections.contact.company')}
          <br />
          <strong className="text-black">{t('cookiePolicy.sections.contact.emailLabel')}</strong>{' '}
          <a href={`mailto:${t('cookiePolicy.sections.contact.email')}`} className="text-[#1d8348] hover:text-[#f9e79f] underline">
            {t('cookiePolicy.sections.contact.email')}
          </a>
          <br />
          <strong className="text-black">{t('cookiePolicy.sections.contact.websiteLabel')}</strong>{' '}
          <a href={t('cookiePolicy.sections.contact.website')} className="text-[#1d8348] hover:text-[#f9e79f] underline">
            {t('cookiePolicy.sections.contact.website')}
          </a>
        </p>
      </section>
    </main>
  );
};

export default Cookies;