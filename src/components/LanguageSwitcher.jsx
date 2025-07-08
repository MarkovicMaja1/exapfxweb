import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// SVG for English flag
const FlagEn = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 15" width="18" height="12" className="border border-gray-400">
    <rect width="25" height="15" fill="#FFF"/>
    <g fill="#CE1124">
      <rect width="3" height="15" x="11"/>
      <rect width="25" height="3" y="6"/>
    </g>
  </svg>
);

// SVG for Spanish flag
const FlagEs = () => (
  <svg width="18" height="12" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="border border-gray-400">
    <rect width="36" height="24" rx="1" fill="#CE1126"/>
    <rect width="36" height="8" y="8" fill="#FFC400"/>
  </svg>
);

// SVG for German flag
const FlagDe = () => (
  <svg width="18" height="12" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="border border-gray-400">
    <rect width="36" height="8" fill="#000000"/>
    <rect y="8" width="36" height="8" fill="#DD0000"/>
    <rect y="16" width="36" height="8" fill="#FFCE00"/>
  </svg>
);

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', textAlign: 'left' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '0.25rem 0.5rem',
          background: 'transparent',
          color: '#fff',
          borderRadius: '0.375rem',
          transition: 'background-color 0.2s',
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 500,
          border: '1px solid #4b5563',
        }}
      >
        {i18n.language === 'en' ? (
          <FlagEn style={{ marginRight: '8px' }} />
        ) : i18n.language === 'es' ? (
          <FlagEs style={{ marginRight: '8px' }} />
        ) : (
          <FlagDe style={{ marginRight: '8px' }} />
        )}
        <svg style={{ marginLeft: '4px', height: '1rem', width: '1rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          right: 0,
          marginTop: '0.25rem',
          width: '7rem',
          borderRadius: '0.375rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          background: '#151515',
          border: '1px solid #4b5563',
        }}>
          <div style={{ padding: '0.25rem 0' }}>
            <button
              onClick={() => changeLanguage('en')}
              style={{
                display: 'flex',
                width: '100%',
                padding: '0.25rem 0.5rem',
                color: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'background-color 0.2s',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              role="menuitem"
            >
              <FlagEn style={{ marginRight: '12px', verticalAlign: 'middle' }} />
              <span style={{ marginLeft: '8px', verticalAlign: 'middle' }}>EN</span>
            </button>
            <button
              onClick={() => changeLanguage('es')}
              style={{
                display: 'flex',
                width: '100%',
                padding: '0.25rem 0.5rem',
                color: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'background-color 0.2s',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              role="menuitem"
            >
              <FlagEs style={{ marginRight: '12px', verticalAlign: 'middle' }} />
              <span style={{ marginLeft: '8px', verticalAlign: 'middle' }}>ES</span>
            </button>
            <button
              onClick={() => changeLanguage('de')}
              style={{
                display: 'flex',
                width: '100%',
                padding: '0.25rem 0.5rem',
                color: '#fff',
                justifyContent: 'center',
                alignItems: 'center',
                transition: 'background-color 0.2s',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
              role="menuitem"
            >
              <FlagDe style={{ marginRight: '12px', verticalAlign: 'middle' }} />
              <span style={{ marginLeft: '8px', verticalAlign: 'middle' }}>DE</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;