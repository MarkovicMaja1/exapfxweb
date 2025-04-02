import React from 'react';
import trader from '../assets/backg.jpeg';

const ChoosePlan = () => {
  return (
    <div className="funding-journey-container">
      {/* Top half with black background */}
      <div className="top-section">
        <h1 className="section-title" style={{ marginTop: '50px' }}>Choose Your Funding Journey</h1>
        <div className="w-2/4 mx-auto mt-1 mb-10 border-t-2 border-green-500"></div>
        <div className="promo-text">
          <p>Sharpen your trading skills with ECO CaP FX <b>Simulated Trading Platform</b>! </p>
          <p> Access up to <strong>$200,000</strong> in virtual funds</p>
          <p> Claim <b>up to 90%</b> of your simulated profits</p>
          <p>Take the first step toward becoming a Eco pro trader today! </p>
          
        </div>
      </div>

      {/* Bottom half (boxes) */}
      <div className="boxes-container">
        {/* Boks 1 */}
        <div className="box-wrapper" style={{ marginBottom: '30px' }}>
          <span className="badge badge-hyper">Best for Experienced</span>
          <div className="inner-box">
            <img src={trader} alt="Crypto Trader" className="blurred-background" />
            <div className="text-overlay">
              <h2 className="box-title">Ecosphere Pro</h2>
              <p className="box-description bigger">
                Account Size: <span className="highlight-price">$100K </span>or<span className="highlight-price"> $200K</span> funded accounts.<br />
                </p>
                <p className="box-description">
                • 1-Phase Challenge: Quick evaluation for experienced traders to get funded.<br />
                • 2-Phase Challenge: Two-stage evaluation for traders to prove consistency and risk control.
              </p>
              <p className="box-description">
                This program is designed for skilled traders, offering flexibility while ensuring sustainable capital management.
              </p>
              <p className="box-price">Starting from <span className="highlight-price">$379-$999</span></p>
              <button className="action-button hyper-button">Select Program</button>
            </div>
          </div>
        </div>

        {/* Boks 2 */}
        <div className="box-wrapper">
          <span className="badge badge-green">Best for Risk Takers</span>
          <div className="inner-box">
            <img src={trader} alt="Crypto Trader" className="blurred-background" />
            <div className="text-overlay">
              <h2 className="box-title">Greenwave Growth</h2>
              <p className="box-description bigger">
                Account Size: From <span className="highlight-price">  $6K</span> to<span className="highlight-price">  $25K </span>funded accounts.<br />
                </p>
                <p className="box-description">
                • 1-Phase Challenge: Quick evaluation for experienced traders to get funded.<br />
                • 2-Phase Challenge: Two-stage evaluation for traders to show consistency and risk control.
              </p>
              <p className="box-description">
                This program helps traders grow while ensuring sustainable capital management and flexible evaluation paths.
              </p>
              <p className="box-price">Starting from <span className="highlight-price">$79-$179 </span></p>
              <button className="action-button green-button">Select Program</button>
            </div>
          </div>
        </div>

        {/* Boks 3 */}
        <div className="box-wrapper">
          <span className="badge badge-blue">Take it slow</span>
          <div className="inner-box">
            <img src={trader} alt="Crypto Trader" className="blurred-background" />
            <div className="text-overlay">
              <h2 className="box-title">El Verde Pro Program</h2>
              <p className="box-description bigger">
                Account Size: <span className="highlight-price">  $50K</span> to <span className="highlight-price">  $100K </span> funded accounts.<br />
                </p>
                <p className="box-description ">
                • 1-Phase Challenge: Quick evaluation for experienced traders to get funded.<br />
                • 2-Phase Challenge: Two-stage evaluation for traders to prove consistency and risk control.
              </p>
              <p className="box-description">
                This program helps pro traders grow with flexible, sustainable funding while focusing on risk management.
              </p>
              <p className="box-price">Starting from <span className="highlight-price">$159 - $359</span></p>
              <button className="action-button blue-button">Select Program</button>
            </div>
          </div>
        </div>
      </div>

      {/* Stilovi */}
      <style jsx>{`
        .funding-journey-container {
          width: 100%;
          text-align: center;
          background: #101919;
        }

        .top-section {
           /* Black background for the top half */
          padding: 20px 0px; /* Matches the original padding */
          color: #ffffff; /* White text for contrast */
         
        }

        .promo-text {
          margin-bottom: 20px;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #ffffff; /* White text for promo section */
          font-weight:bold;
        }

      

        .promo-text p {
          margin: 5px 0;
        }

        .promo-text strong {
          color: #facc15; /* Keep the highlight color */
        }
        
        .promo-big {
          font-size: 1.9rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff; /* White title for contrast */
         
          margin-bottom: 17px;
        }

        .boxes-container {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          
          padding: 40px 20px; /* Matches the original padding for bottom half */
          // background: #f5f5f5; 
        }

        .box-wrapper {
          position: relative;
          width: 100%;
          max-width: 350px;
          padding-top: 15px;
          border-radius: 1rem;
        }

        .inner-box {
  position: relative;
  width: 100%;
  height: 450px;
  background: #101919;
  border-radius: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 255, 255, 0.2); /* Bela svetla senka */
}


        .blurred-background {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
          border-radius: 1rem;
        }

        .sticker-container {
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 3;
        }

        .sticker-image {
          width: 100px;
          height: 100px;
          object-fit: cover;
          border-radius: 50%;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .text-overlay {
          position: relative;
          z-index: 2;
          padding: 40px 20px 20px 20px;
          color: white;
          text-align: left;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 1rem;
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
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          z-index: 3;
        }

        .badge-hyper {
          background: #facc15;
          color: #1a1a2e;
        }

        .badge-green {
          background: #1d8348;
          color: rgb(255, 255, 255);
        }

        .badge-blue {
          background: #3b82f6;
          color: #ffffff;
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
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .box-subtitle {
          font-size: 1.25rem;
          font-weight: 600;
          color: #14b8a6;
          margin-bottom: 15px;
        }

        .box-description {
          font-size: 0.9rem;
          color: #d1d5db;
          line-height: 1.2;
          margin-bottom: 15px;
        }
        
        .bigger{
        font-weight:bold;
        font-size: 1.3rem;
        }

        .box-price {
          font-size: 1.2rem;
          color: #ffffff;
          margin-bottom: 10px;
          text-align: center;
        }

        .highlight-price {
          font-weight: 700;
          color: #facc15;
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
        transition: all 0.3s ease;
      }

      .hyper-button:hover {
        background: #fde047; /* Svetlija nijansa */
        box-shadow: 0 4px 10px rgba(250, 204, 21, 0.4); /* Blaga senka */
      }

      .green-button {
        background: #1d8348;
        color: rgb(255, 255, 255);
        transition: all 0.3s ease;
      }

      .green-button:hover {
        background: #28a75b; /* Svetlija zelena */
        box-shadow: 0 4px 10px rgba(29, 131, 72, 0.4);
      }

      .blue-button {
        background: #3b82f6;
        color: #ffffff;
        transition: all 0.3s ease;
      }

      .blue-button:hover {
        background: #60a5fa; /* Svetlija nijansa plave */
        box-shadow: 0 4px 10px rgba(59, 130, 246, 0.4); /* Blaga senka */
      }


      .high-button {
        background: #14b8a6;
        color: #1a1a2e;
        transition: all 0.3s ease;
      }

        .bootcamp-button {
          background: #a855f7;
          color: #ffffff;
        }

        

        @media (max-width: 768px) {
          .boxes-container {
            flex-direction: column;
            align-items: center;
          }

          .box-wrapper {
            max-width: 100%;
            margin-bottom: 30px;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .sticker-container {
            top: -40px;
          }

          .sticker-image {
            width: 80px;
            height: 80px;
          }
        }
      `}</style>
    </div>
  );
};

export default ChoosePlan;