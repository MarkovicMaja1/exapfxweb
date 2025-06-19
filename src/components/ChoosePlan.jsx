import React from 'react';
import trader from '../assets/backg.jpeg';
import { Link } from 'react-router-dom';

const ChoosePlan = () => {
  return (
    <div className="funding-journey-container">
      <div className="top-section">
        {/* <h1 className="section-title mt-2 text-4xl lg:text-4xl font-extrabold tracking-tight text-center" style={{ marginTop: '50px' }}>Choose Your Funding Journey</h1> */}
        <div className="mx-auto lg:max-w-4xl text-center ">
        <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-center ">Choose Your Funding Challenge</h2>
          </div>
        
        {/* <div className="w-2/4 mx-auto mt-6 mb-10 border-t-2 border-green-500"></div> */}
        <div className="promo-text mt-14 text-white">
          <p> Advance Your Trading Skills with ECAPFX’s Simulated Platform </p>
          <p> Access up to <strong>$200,000</strong> in virtual capital</p>
          <p> Keep <b>up to 90%</b> of your simulated profits</p>
          <p> Take the first step toward becoming a funded trader today </p>
          
        </div>
      </div>

      <div className="boxes-container mt-14 ">
        {/* Boks 1 */}
        <div className="box-wrapper">
          <span className="badge badge-hyper">Best for Seasoned traders</span>
          <div className="inner-box">
            <img src={trader} alt="Crypto Trader" className="blurred-background" />
            <div className="text-overlay">
              <h4 className="box-title">Ecosphere PRO </h4>
              <p className="box-description bigger">
                Instant Funding or One Step: <span className="highlight-price"><br />$10K </span>to<span className="highlight-price"> $200K</span> funded accounts.<br />
                </p>
                <small className="box-description text-white">
                • Instant Funding: No evaluation for experienced traders to get funded instantly.<br />
                • 1-Step Challenge: One-Step evaluation for traders to demonstrate strategy and risk control.
              </small>
              <small className="box-description text-white">
                 ECOSPHERE PRO is designed for skilled traders, instant funding, one step evaluation with stricter criteria.
              </small>
              <p className="box-price">Starting from: <span className="text-2xl font-semibold highlight-price">$80</span></p>
                <a href="/pricing?step=Instant+Funding&size=100k">
                  <button className="action-button hyper-button">Select Program</button>
                </a>
            </div>
          </div>
        </div>

        {/* Boks 2 */}
        <div className="box-wrapper">
          <span className="badge badge-green">Best For Beginners</span>
          <div className="inner-box">
            <img src={trader} alt="Crypto Trader" className="blurred-background" />
            <div className="text-overlay">
              <h4 className="box-title">Greenwave Growth</h4>
              <p className="box-description bigger">
                Two Step or Three Step Evaluations: <span className="highlight-price">  $10K</span> to<span className="highlight-price">  $200K </span>funded accounts.<br />
                </p>
                <small className="box-description text-white">
                • 2-Step Challenge: Balanced metrics for begginer to find their edge and get funded.<br />
                • 3-Step Challenge: Three-step evaluation with bonuses on every step.
              </small>
              <small className="box-description text-white">
                GREENWAVE GROWTH  is designed for begginers that rewards new traders with consistency and good risk menagement skils.
              </small>
              <p className="box-price">Starting from: <span className="text-2xl font-semibold highlight-price">$55 </span></p>
              <button className="action-button green-button">Select Program</button>
            </div>
          </div>
        </div>

        {/* Boks 3 */}
        <div className="box-wrapper">
          <span className="badge badge-blue">Best For Experienced traders</span>
          <div className="inner-box">
            <img src={trader} alt="Crypto Trader" className="blurred-background" />
            <div className="text-overlay">
              <h4 className="box-title">El Verde Pro</h4>
              <p className="box-description bigger">
                One Step or Two Step: <span className="highlight-price">  $10K</span> to <span className="highlight-price">  $200K </span> funded accounts.<br />
                </p>
                <small className="box-description text-white">
                • 1-Step Challenge: Strict metrics for experienced traders to get funded.<br />
                • 2-Step Challenge: Two-step evaluation for traders to prove consistency and risk control.
              </small>
              <small className="box-description text-white">
                EL VERDE PRO is designed for pro traders with stricter metrics to manage capital, while focusing on risk management.
              </small>
              <p className="box-price">Starting from: <span className="text-2xl font-semibold highlight-price">$159</span></p>
              <button className="action-button blue-button">Select Program</button>
            </div>
          </div>
        </div>
      </div>
      {/* SVG Divider */}
      {/* Bottom SVG Divider */}
      <div className="bottom-divider">
        <div className="mb-14 w-full h-2 bg-gradient-to-r from-transparent via-[#1d8348]/50 to-transparent shadow-md" />
      </div>
      <style jsx>{`
        .funding-journey-container {
          width: 100%;
          text-align: center;
          background: #151515;
        }

        .top-section {
           /* Black background for the top half */
          // padding: 20px 0px; 
          padding-top: 6rem;
          color: #ffffff; /* White text for contrast */
         
        }

        .promo-text {
          margin-bottom: 20px;
          font-size: 1.1rem;
          line-height: 1.6;
        /* White text for promo section */
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
          //font-size: 2.5rem;
          // font-weight: 700;
          color: #ffffff; /* White title for contrast */
         
          margin-bottom: 17px;
        }

        .boxes-container {
          display: flex;
          justify-content: center;
          gap: 63px;
          flex-wrap: wrap;
          
   
        }

        .box-wrapper {
          position: relative;
          width: 100%;
          max-width: 350px;
          margin-bottom: 6rem;
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
          top: -5px;
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
          background: #1d8147;
          color:rgb(255, 255, 255);
        }

        .badge-green {
          background:rgb(255, 255, 255);
          color: rgb(0, 0, 0);
        }

        .badge-blue {
          background: #f7e59d;
          color:rgb(0, 0, 0);
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
          font-size: 1.3rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
          text-transform: uppercase;
        }

        .box-subtitle {
          font-size: 1.1rem;
          font-weight: 600;
          color: #14b8a6;
          margin-bottom: 15px;
        }

        .box-description {
          font-size: 1rem;
        
          line-height: 1.2;
          margin-bottom: 15px;
        }
        
        .bigger{
        font-weight:bold;
        font-size: 1.3rem;
         color: #d1d5db !important;
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
        .getstarted-button {
          text-transform: uppercase;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hyper-button {
          background: #1d8147;
          color:rgb(255, 255, 255);
          transition: all 0.3s ease;
        }

        .hyper-button:hover {
          background:#28a75b; /* Svetlija nijansa */
          box-shadow: 0 4px 10px rgba(29, 131, 72, 0.4); /* Blaga senka */
        }

        .green-button {
          background:rgb(255, 255, 255);
          color: rgb(0, 0, 0);
          transition: all 0.3s ease;
        }

        .green-button:hover {
          background:rgb(155, 155, 155); /* Svetlija zelena */
          box-shadow: 0 4px 10px rgba(123, 123, 123, 0.4);
        }

        .blue-button {
          background: #f7e59d;
          color:rgb(0, 0, 0);
          transition: all 0.3s ease;
        }

        .blue-button:hover {
          background:rgb(255, 242, 190); /* Svetlija nijansa plave */
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
          .funding-journey-container{
            padding-bottom: 70px;
              padding-left: 33px;
            padding-right: 33px;
          }
          .boxes-container {
            flex-direction: column;
            align-items: center;
          }

          .box-wrapper {
            max-width: 100%;
            margin-bottom: 30px;
            //  padding-left: 20px;
            // padding-right: 20px;
          }
             .top-section {
            // padding-left: 20px;
            // padding-right: 20px;
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