import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [activePlan, setActivePlan] = useState('1step'); // Kontroliše 1, 2, 3 Step dugmiće
  const [selectedAmount, setSelectedAmount] = useState({ amount: 5000, price: 50 }); // Kontroliše iznos
  const [radioSelection, setRadioSelection] = useState('1step'); // Nezavisno kontroliše radio dugmiće

  const plans = {
    '1step': [
      { label: 'Sim Profit Target', step: '$500 (10%)', qualified: 'NA' },
      { label: 'Max Sim Drawdown', step: '$300 (6%)', qualified: '$300 (6%)' },
      { label: 'Max Daily Drawdown', step: '$200 (4%)', qualified: '$200 (4%)' },
      { label: 'Max Sim Trading Days', step: 'Unlimited', qualified: 'NA' },
      { label: 'Analyst Performance Fee', step: 'NA', qualified: '80%' },
    ],
    '2step': [
      { label: 'Sim Profit Target', step: '$500 (8%)', qualified: 'NA' },
      { label: 'Max Sim Drawdown', step: '$600 (6%)', qualified: '$600 (6%)' },
      { label: 'Max Daily Drawdown', step: '$400 (4%)', qualified: '$400 (4%)' },
      { label: 'Max Sim Trading Days', step: 'Unlimited', qualified: 'NA' },
      { label: 'Analyst Performance Fee', step: 'NA', qualified: '80%' },
    ],
    '3step': [
      { label: 'Sim Profit Target', step: '$600 (8%)', qualified: 'NA' },
      { label: 'Max Sim Drawdown', step: '$700 (6%)', qualified: '$700 (6%)' },
      { label: 'Max Daily Drawdown', step: '$500 (4%)', qualified: '$500 (4%)' },
      { label: 'Max Sim Trading Days', step: 'Unlimited', qualified: 'NA' },
      { label: 'Analyst Performance Fee', step: 'NA', qualified: '80%' },
    ],
  };

  const stepColumns = ['1step', '2step', '3step'];

  const showPlan = (plan) => {
    setActivePlan(plan);
  };

  const selectAmount = (amount, price) => {
    setSelectedAmount({ amount, price });
  };

  const updatePlanDetails = (plan) => {
    setRadioSelection(plan); // Samo menja radio selekciju, ne utiče na korake ili tabelu
  };

  useEffect(() => {
    showPlan('1step'); // Inicijalizuje sa 1 Step
  }, []);

  const radioDetails = () => {
    switch (radioSelection) {
      case '1step':
        return { step: '1 Step', description: 'Analyst Assessment' };
      case '2step':
        return { step: '2 Step', description: 'Analyst Assessment with additional benefits' };
      case '3step':
        return { step: '3 Step', description: 'Comprehensive Analyst Assessment' };
      default:
        return { step: '1 Step', description: 'Analyst Assessment' };
    }
  };

  const { step, description } = radioDetails();

  return (
    <div className="bg-gray-50 font-roboto">
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-center text-2xl md:text-4xl font-bold mb-4">
          Still Not Sure? <span className="text-green-5000">Check out our other plans</span>
        </h1>
        <p className="text-center mb-6">
          Choose the evaluation based on your preference to become an Eco Capital FX.
        </p>

        {/* Tabination for Steps */}
        <div className="tabinationContainer variant2_tabs">
          <div className="tabinationWrapper">
            <ul className="tabinationBox flex justify-center space-x-2 mb-4">
              <li
                className={`tabinationButton ${activePlan === '1step' ? 'activeTab' : ''}`}
                onClick={() => showPlan('1step')}
              >
                1 Step
              </li>
              <li
                className={`tabinationButton ${activePlan === '2step' ? 'activeTab' : ''}`}
                onClick={() => showPlan('2step')}
              >
                2 Step
              </li>
              <li
                className={`tabinationButton ${activePlan === '3step' ? 'activeTab' : ''}`}
                onClick={() => showPlan('3step')}
              >
                3 Step
              </li>
            </ul>
          </div>
        </div>

        {/* Amount Selection */}
        <div className="tabinationContainer variant2_tabs">
          <div className="tabinationWrapper">
            <ul className="tabinationBox flex justify-center space-x-2 mb-6">
              <li
                className={`amountButton px-4 py-2 border border-gray-300 rounded-full text-gray-500 ${
                  selectedAmount.amount === 5000 ? 'activeAmount' : ''
                }`}
                onClick={() => selectAmount(5000, 50)}
              >
                $5,000
              </li>
              <li
                className={`amountButton px-4 py-2 border border-gray-300 rounded-full text-gray-500 ${
                  selectedAmount.amount === 10000 ? 'activeAmount' : ''
                }`}
                onClick={() => selectAmount(10000, 100)}
              >
                $10,000
              </li>
              <li
                className={`amountButton px-4 py-2 border border-gray-300 rounded-full text-gray-500 ${
                  selectedAmount.amount === 25000 ? 'activeAmount' : ''
                }`}
                onClick={() => selectAmount(25000, 200)}
              >
                $25,000
              </li>
              <li
                className={`amountButton px-4 py-2 border border-gray-300 rounded-full text-gray-500 ${
                  selectedAmount.amount === 50000 ? 'activeAmount' : ''
                }`}
                onClick={() => selectAmount(50000, 300)}
              >
                $50,000
              </li>
              <li
                className={`amountButton px-4 py-2 border border-gray-300 rounded-full text-gray-500 ${
                  selectedAmount.amount === 100000 ? 'activeAmount' : ''
                }`}
                onClick={() => selectAmount(100000, 500)}
              >
                $100,000
              </li>
              <li
                className={`amountButton px-4 py-2 border border-gray-300 rounded-full text-gray-500 ${
                  selectedAmount.amount === 200000 ? 'activeAmount' : ''
                }`}
                onClick={() => selectAmount(200000, 1000)}
              >
                $200,000
              </li>
            </ul>
          </div>
        </div>

        {/* Radio Buttons and Plan Info */}
        <div className="bg-white shadow-md rounded-lg p-4 mb-6">
          <div className="flex justify-center space-x-4 mb-4">
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="1step"
                name="plan"
                checked={radioSelection === '1step'}
                onChange={() => updatePlanDetails('1step')}
              />
              <label htmlFor="1step" className="text-gray-700">No Profit Cap</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="2step"
                name="plan"
                checked={radioSelection === '2step'}
                onChange={() => updatePlanDetails('2step')}
              />
              <label htmlFor="2step" className="text-gray-700">Payout-on-demand</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="3step"
                name="plan"
                checked={radioSelection === '3step'}
                onChange={() => updatePlanDetails('3step')}
              />
              <label htmlFor="3step" className="text-gray-700">Quickest way to become an Eco Capital FX</label>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mb-4">
            <div className="text-center">
              <h2 className="text-lg font-bold">{step}</h2>
              <p className="text-gray-500">{description}</p>
            </div>
            <div className="text-center">
              <h2 className="text-lg font-bold">Qualified</h2>
              <p className="text-gray-500">Qualified Analyst</p>
            </div>
          </div>
        </div>

        {/* Plan Details Table */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="py-2 px-4 text-gray-500">
                  Leverage <i className="fas fa-info-circle"></i>
                </th>
                {stepColumns.map((step, index) => (
                  <th
                    key={step}
                    className={`py-2 px-4 text-gray-500 ${index > stepColumns.indexOf(activePlan) ? 'hidden' : ''}`}
                  >
                    {step.replace('step', ' Step')}
                  </th>
                ))}
                <th className="py-2 px-4 text-gray-500">Qualified</th>
              </tr>
            </thead>
            <tbody id="plan-details">
              {plans['1step'].map((item, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-2 px-4">
                    {item.label} <i className="fas fa-info-circle"></i>
                  </td>
                  {stepColumns.map((step, index) => (
                    <td
                      key={step}
                      className={`py-2 px-4 ${index > stepColumns.indexOf(activePlan) ? 'hidden' : ''}`}
                    >
                      {plans[step][idx].step}
                    </td>
                  ))}
                  <td className="py-2 px-4">{plans[activePlan][idx].qualified}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Call to Action */}
        <div className="bg-green-900 text-white rounded-lg p-4 mt-6 flex justify-between items-center">
          <div>
            <h2 className="text-lg font-bold">Swing Plan {(selectedAmount.amount / 1000).toLocaleString()}K</h2>
            <p>Assessment Price: ${selectedAmount.price}</p>
          </div>
          <button className="bg-white text-green-900 px-4 py-2 rounded-full">
            Start Eco Capital Evaluation
          </button>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .tabinationContainer.variant2_tabs .tabinationWrapper .tabinationBox li.tabinationButton.activeTab,
        .tabinationContainer.variant2_tabs .tabinationWrapper .tabinationBox li.tabinationButton:hover {
          background: #fff;
          border-radius: 100px;
          box-shadow: 0 4px 4px 0 #8d95db40;
        }
        .tabinationContainer.variant2_tabs .tabinationWrapper .tabinationBox li.tabinationButton {
          cursor: pointer;
          padding: 9px 20px;
          transition: background 0.2s ease-in;
        }
        .tabinationContainer.variant2_tabs .tabinationWrapper .tabinationBox li {
          text-wrap: wrap;
          align-items: center;
          border-radius: 100px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          height: 43.5px;
          justify-content: center;
          width: 100%;
        }
        .tabinationButton {
          background: #edf2fa;
          border: 2px solid #ced3db;
          border-radius: 12px !important;
          box-shadow: none;
          height: 50px;
          cursor: pointer;
          padding: 9px 20px;
          transition: background 0.2s ease-in;
        }
        .tabinationButton.activeTab {
          background: #fff;
          border-radius: 100px;
          box-shadow: 0 4px 4px 0 #8d95db40;
        }
        .tabinationButton:active {
          border-color: #006039;
          color: #1d8348;
          background-color: white;
          box-shadow: 0 4px 4px 0 #8d95db40;
        }
        .amountButton {
          cursor: pointer;
          padding: 9px 20px;
          transition: background 0.2s ease-in;
        }
        .amountButton.activeAmount {
          border-color: #22c55e;
          color: #1d8348;
          background-color: white;
          box-shadow: 0 4px 4px 0 #8d95db40;
        }
        button.bg-white.text-green-900.px-4.py-2.rounded-full:hover {
          background-position: 0px 0px;
          background-image: url('buttonBg2.png');
          color: var(--White) !important;
        }
        .bg-green-900 {
          background-image: repeating-linear-gradient(45deg, #006039, #1d8348 100px);
        }
        .text-green-5000 {
          color: rgb(29 131 72);
        }
      `}</style>
    </div>
  );
};

export default Dashboard;