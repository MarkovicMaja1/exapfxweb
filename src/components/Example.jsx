import React from 'react';
import trader from '../assets/trader.png'; // Putanja do slike

const Example = () => {
  return (
    <div className="funding-journey-container">
      <h1 className="section-title">Choose Your Funding Journey</h1>
      <div className="boxes-container">
        {/* Boks 1 */}
        <div className="box-wrapper">
          <span className="badge badge-hyper">Best for Experienced</span>
          <div className="inner-box">
            <img src={trader} alt="Crypto Trader" className="blurred-background" />
            <div className="text-overlay">
              <h2 className="box-title">Hyper Growth</h2>
              <h3 className="box-subtitle">1-Step Program</h3>
              <p className="box-description">
                Get paid from the first target! Double your account every milestone.
              </p>
              <p className="box-price">Starting from <span className="highlight-price">$260</span></p>
              <button className="action-button hyper-button">Select Program</button>
            </div>
          </div>
        </div>

        {/* Boks 2 */}
        <div className="box-wrapper">
          <span className="badge badge-high">Best for Risk Takers</span>
          <div className="inner-box">
            <img src={trader} alt="Crypto Trader" className="blurred-background" />
            <div className="text-overlay">
              <h2 className="box-title">High Stakes</h2>
              <h3 className="box-subtitle">2-Step Program</h3>
              <p className="box-description">
                High-risk, high-reward. Scale your account every milestone.
              </p>
              <p className="box-price">Starting from <span className="highlight-price">$39</span></p>
              <button className="action-button high-button">Select Program</button>
            </div>
          </div>
        </div>

        {/* Boks 3 */}
        <div className="box-wrapper">
          <span className="badge badge-bootcamp">Take It Slow</span>
          <div className="inner-box">
            <img src={trader} alt="Crypto Trader" className="blurred-background" />
            <div className="text-overlay">
              <h2 className="box-title">Bootcamp</h2>
              <h3 className="box-subtitle">3-Step Low-Cost Program</h3>
              <p className="box-description">
                Pay upon success. Scale your account every milestone.
              </p>
              <p className="box-price">Starting from <span className="highlight-price">$95</span></p>
              <button className="action-button bootcamp-button">Select Program</button>
            </div>
          </div>
        </div>
      </div>
      <p className="explainer-link">
        Feeling lost? <a href="#">Click here to Watch our Explanation Video</a>
      </p>

      {/* Stilovi unutar komponente */}
      <style jsx>{`
        .funding-journey-container {
          width: 100%;
          padding: 40px 20px;
          background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
          text-align: center;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          margin-bottom: 40px;
          text-shadow: 0 0 10px rgba(0, 255, 204, 0.5);
        }

        .boxes-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .box-wrapper {
          position: relative;
          width: 100%;
          max-width: 350px;
          padding-top: 15px; /* Prostor za badge */
        }

        .inner-box {
          position: relative;
          width: 100%;
          height: 400px;
          background: linear-gradient(145deg, #1a1a2e, #2a2a4e);
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.4s ease;
          box-shadow: 0 0 15px rgba(0, 255, 204, 0.2);
        }

        .inner-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 0 25px rgba(0, 255, 204, 0.4);
        }

        .blurred-background {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: blur(2px);
          opacity: 0.9;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          transition: opacity 0.3s ease;
        }

        .inner-box:hover .blurred-background {
          opacity: 1;
        }

        .text-overlay {
          position: relative;
          z-index: 2;
          padding: 20px;
          color: white;
          text-align: left;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.6);
          border-radius: 1rem;
          backdrop-filter: blur(5px);
        }

        .badge {
          position: absolute;
          top: 0;
          left: 20px;
          padding: 5px 15px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          border-radius: 12px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          z-index: 3; /* Osigurava da badge bude iznad svega */
        }

        .badge-hyper {
          background: #facc15;
          color: #1a1a2e;
        }

        .badge-high {
          background: #14b8a6;
          color: #1a1a2e;
        }

        .badge-bootcamp {
          background: #a855f7;
          color: #ffffff;
        }

        .box-title {
          font-size: 1.75rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 5px;
          text-transform: uppercase;
        }

        .box-subtitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: #00ffcc;
          margin-bottom: 15px;
        }

        .box-description {
          font-size: 0.9rem;
          color: #d1d5db;
          line-height: 1.5;
          margin-bottom: 20px;
        }

        .box-price {
          font-size: 1rem;
          color: #ffffff;
          margin-bottom: 15px;
        }

        .highlight-price {
          font-weight: 700;
          color: #ffd700;
          text-shadow: 0 0 5px rgba(255, 215, 0, 0.5);
        }

        .action-button {
          width: 100%;
          padding: 12px;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hyper-button {
          background: #facc15;
          color: #1a1a2e;
        }

        .hyper-button:hover {
          background: #eab308;
          box-shadow: 0 0 10px rgba(250, 204, 21, 0.5);
        }

        .high-button {
          background: #14b8a6;
          color: #1a1a2e;
        }

        .high-button:hover {
          background: #0d9488;
          box-shadow: 0 0 10px rgba(20, 184, 166, 0.5);
        }

        .bootcamp-button {
          background: #a855f7;
          color: #ffffff;
        }

        .bootcamp-button:hover {
          background: #9333ea;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
        }

        .explainer-link {
          margin-top: 30px;
          font-size: 0.9rem;
          color: #d1d5db;
        }

        .explainer-link a {
          color: #00ffcc;
          text-decoration: underline;
        }

        .explainer-link a:hover {
          color: #ff00ff;
        }

        @media (max-width: 768px) {
          .boxes-container {
            flex-direction: column;
            align-items: center;
          }

          .box-wrapper {
            max-width: 100%;
            margin-bottom: 30px; /* Dodatni prostor za badge */
          }

          .section-title {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Example;