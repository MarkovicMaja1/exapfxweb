import React from 'react';
import trader from '../assets/trader.png'
const Example3 = () => {
  return (
<div className="ecosphere-container">
      <div className="box-wrapper">
        <img src={trader} alt="Trader Background" className="blurred-background" />
        <div className="text-overlay">
          <h2 className="text-2xl font-bold text-white mb-4">Ecosphere Pro</h2>
          <ul className="text-white text-sm leading-6 mb-4">
            <li><strong>Account Size:</strong> $100K or $200K funded accounts.</li>
            <li><strong>1-Phase Challenge:</strong> Quick evaluation for experienced traders to get funded.</li>
            <li><strong>2-Phase Challenge:</strong> Two-stage evaluation for traders to prove consistency and risk control.</li>
          </ul>
          <p className="text-gray-200 text-sm mb-4">
            This program is designed for skilled traders, offering flexibility while ensuring sustainable capital management.
          </p>
          <p className="text-[#b8860b] font-bold text-lg">
            Starting from - $379-$999
          </p>
        </div>
      </div>

         {/* Stilovi unutar komponente */}
         <style jsx>{`
       .ecosphere-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
}

.box-wrapper {
  position: relative;
  width: 100%;
  max-width: 400px; /* Podešava širinu boksa, možeš promeniti */
  background: #101919; /* Tamna pozadina boksa */
  border: 1px solid #d1d5db; /* Siva granica */
  border-radius: 1rem; /* Zaobljeni uglovi */
  overflow: hidden;
  transition: border-color 0.3s ease;
}

.box-wrapper:hover {
  border-color: #000000; /* Crna granica na hover */
}

.blurred-background {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(5px); /* Zamućenje slike */
  opacity: 0.6; /* Smanjena prozirnost za kontrast */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.text-overlay {
  position: relative;
  z-index: 2; /* Tekst iznad slike */
  padding: 20px;
  color: white;
  text-align: left;
  background: rgba(0, 0, 0, 0.5); /* Poluprozirna pozadina za čitljivost */
  border-radius: 1rem; /* Sinhronizovano sa boksom */
}

.text-overlay h2 {
  font-size: 1.5rem; /* 24px */
  font-weight: bold;
  margin-bottom: 1rem;
}

.text-overlay ul {
  list-style-type: none;
  padding: 0;
  margin-bottom: 1rem;
}

.text-overlay ul li {
  margin-bottom: 0.5rem;
}

.text-overlay ul li strong {
  color: #ffffff;
}

.text-overlay p {
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .box-wrapper {
    max-width: 100%;
  }

  .text-overlay {
    padding: 15px;
  }
}
      `}</style>
    </div>


  );
};

export default Example3;