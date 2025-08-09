import React from 'react';
import sustainability from '../assets/sustainability.png';

const SustainabilityIcon = () => {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 40,
        cursor: 'pointer',
      }}
      onClick={() => {
        window.open('https://sdgs.un.org/', '_blank', 'noopener,noreferrer');
      }}
    >
      <img
        src={sustainability}
        alt="Chat"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
      />
    </div>
  );
};

export default SustainabilityIcon;
