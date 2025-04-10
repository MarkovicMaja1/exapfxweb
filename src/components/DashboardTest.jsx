import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  const [activePlan, setActivePlan] = useState('1step');
  const [selectedAmount, setSelectedAmount] = useState({ amount: 5000, price: 50 });

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
    setActivePlan(plan);
  };

  useEffect(() => {
    showPlan('1step'); // Initialize with 1 Step plan
  }, []);

  const planDetails = () => {
    switch (activePlan) {
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

  const { step, description } = planDetails();

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
                checked={activePlan === '1step'}
                onChange={() => updatePlanDetails('1step')}
              />
              <label htmlFor="1step" className="text-gray-700">No Profit Cap</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="2step"
                name="plan"
                checked={activePlan === '2step'}
                onChange={() => updatePlanDetails('2step')}
              />
              <label htmlFor="2step" className="text-gray-700">Payout-on-demand</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="3step"
                name="plan"
                checked={activePlan === '3step'}
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



//ORIGINAL
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './FundingPlans.css'; // Assuming you have your styles in a separate CSS file

const FundingPlans = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [activeSize, setActiveSize] = useState('5000');

  const sizes = {
    '5000': { price: 50, label: '5K', profit: 500, drawdown: 300, daily: 200 },
    '10000': { price: 100, label: '10K', profit: 1000, drawdown: 600, daily: 400 },
    '25000': { price: 250, label: '25K', profit: 2500, drawdown: 1500, daily: 1000 },
    '50000': { price: 500, label: '50K', profit: 5000, drawdown: 3000, daily: 2000 },
    '100000': { price: 1000, label: '100K', profit: 10000, drawdown: 6000, daily: 4000 },
    '200000': { price: 2000, label: '200K', profit: 20000, drawdown: 12000, daily: 8000 },
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const handleSizeChange = (size) => {
    setActiveSize(size);
  };

  const currentPlan = sizes[activeSize];

  const mobileSlides = Object.keys(sizes).map((size) => (
    <SwiperSlide key={size}>
      <div className="plans_table">
        <div className="table_footer">
          <h3>Alpha One {sizes[size].label}</h3>
          <div className="rightBox">
            <p>Assessment Price: ${sizes[size].price}</p>
            <button className="normalButton">
            Start Alpha Capital Evaluation    {/* Start Alpha Capital Evaluation <img src="/arrow-blue.svg" alt="arrow" /> */}
            </button>
          </div>
        </div>
        <div className="mobileSteps">
          <div className="table_row">
            <div className="table_row_key">
              <div className="key_header">
                {/* <img src="/arrow-down-circle.svg" alt="arrow" className="arrow-icon" /> Leverage */}Leverage
              </div>
            </div>
            <div className="table_row_values">
              <div className="table_cell"><span>1:30</span></div>
            </div>
          </div>
          <div className="table_row table_row_white">
            <div className="table_row_key">
              <div className="key_header">
                {/* <img src="/arrow-down-circle.svg" alt="arrow" className="arrow-icon" /> Sim Profit Target */}Sim Profit Target
              </div>
            </div>
            <div className="table_row_values">
              <div className="table_cell"><span>1 Step:</span><span>${sizes[size].profit.toLocaleString()} (10%)</span></div>
              <div className="table_cell"><span>Qualified:</span><span>NA</span></div>
            </div>
          </div>
          <div className="table_row">
            <div className="table_row_key">
              <div className="key_header">
                {/* <img src="/arrow-down-circle.svg" alt="arrow" className="arrow-icon" /> Max Sim Drawdown */}Max Sim Drawdown
              </div>
            </div>
            <div className="table_row_values">
              <div className="table_cell"><span>${sizes[size].drawdown.toLocaleString()} (6%)</span></div>
            </div>
          </div>
          <div className="table_row table_row_white">
            <div className="table_row_key">
              <div className="key_header">
                {/* <img src="/arrow-down-circle.svg" alt="arrow" className="arrow-icon" /> Max Daily Drawdown */}Max Daily Drawdown 
              </div>
            </div>
            <div className="table_row_values">
              <div className="table_cell"><span>${sizes[size].daily.toLocaleString()} (4%)</span></div>
            </div>
          </div>
          <div className="table_row">
            <div className="table_row_key">
              <div className="key_header">
                {/* <img src="/arrow-down-circle.svg" alt="arrow" className="arrow-icon" /> Max Sim Trading Days */}Max Sim Trading Days
              </div>
            </div>
            <div className="table_row_values">
              <div className="table_cell"><span>1 Step:</span><span>Unlimited</span></div>
              <div className="table_cell"><span>Qualified:</span><span>NA</span></div>
            </div>
          </div>
          <div className="table_row table_row_white">
            <div className="table_row_key">
              <div className="key_header">
                {/* <img src="/arrow-down-circle.svg" alt="arrow" className="arrow-icon" /> Analyst Performance Fee */}Analyst Performance Fee
              </div>
            </div>
            <div className="table_row_values">
              <div className="table_cell"><span>1 Step:</span><span>NA</span></div>
              <div className="table_cell"><span>Qualified:</span><span>80%</span></div>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  ));

  return (
    <div id="TestYourSkills">
      <div className="fundingSectionContainer">
        <div className="fundingSectionWrapper">
        <div className="mx-auto lg:max-w-4xl text-center mt-24">
<p className="mt-2 text-4xl lg:text-5xl font-extrabold tracking-tight text-center ">Still Not Sure? </p>
<p className="mt-2 text-4xl lg:text-5xl font-extrabold tracking-tight text-center "><span className="">Check out our other plans</span></p>
          </div>
          <div className="ps_wrapper">
            <div className="ps_intro">                     
              <p>Choose the evaluation based on your preference to become an Alpha Trader.</p>
              <div className="plan_select step_select">
                <div className="tabinationContainer variant2_tabs">
                  <div className="tabinationWrapper">
                    <ul className="tabinationBox">
                      {[1, 2, 3].map(step => (
                        <li
                          key={step}
                          className={`tabinationButton ${activeStep === step ? 'activeTab' : ''}`}
                          onClick={() => handleStepChange(step)}
                        >
                          <p><span>{step}</span><span>Step</span></p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="plan_select plan_selector_container">
                <div className="tabinationContainer variant2_tabs">
                  <div className="tabinationWrapper">
                    <ul className="tabinationBox">
                      <li className="tabinationButton activeTab">
                        <p><span>Alpha</span><span>One</span></p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="plan_select account_size_select">
                <div className="tabinationContainer variant6_tabs">
                  <div className="tabinationWrapper">
                    <ul className="tabinationBox">
                      {Object.keys(sizes).map(size => (
                        <li
                          key={size}
                          className={`tabinationButton ${activeSize === size ? 'activeTab' : ''}`}
                          onClick={() => handleSizeChange(size)}
                          data-size={size}
                        >
                          <p><span>${parseInt(size).toLocaleString()}</span><span></span></p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="plansTable_wrapper">
              <div className="plans_table laptop">
                <div className="planDetails_wrapper">
                  <div className="planDetails_inner_main">
                    <div className="steps_info">
                      <span className="gradientText">1 Step</span>
                      <div className="plan_name"><h3>Analyst Assessment</h3></div>
                    </div>
                    <div className="steps_info">
                      <span className="gradientText">Qualified</span>
                      <div className="plan_name"><h3>Qualified Analyst</h3></div>
                    </div>
                  </div>
                  <div className="plan_highlights">
                    {/* <div><img src="/tick-circle-blue.svg" alt="tick" /><p>No Profit Cap</p></div>
                    <div><img src="/tick-circle-blue.svg" alt="tick" /><p>Payout-on-demand</p></div>
                    <div><img src="/tick-circle-blue.svg" alt="tick" /><p>Quickest way to become an Alpha Trader</p></div> */}
                     <div><p>No Profit Cap</p></div>
                    <div><p>Payout-on-demand</p></div>
                    <div><p>Quickest way to become an Alpha Trader</p></div>
                  </div>
                </div>
                <div className="tableWrapper">
                  <div className="tableBox">
                    <div className="table_header">
                      <div className="table_head">
                        <h3 className="stepHeader py-4">1 Step</h3>
                        <h3 className="stepHeader py-4">Qualified</h3>
                      </div>
                    </div>
                    <div className="table_rows">
                      <div className="table_row">
                        <div className="table_row_data keys">
                        Leverage      {/* Leverage <img src="/arrow-down-circle.svg" alt="arrow" className="arrow-icon" /> */}
                        </div>
                        <div className="table_row_data">1:30</div>
                        <div className="table_row_data">1:30</div>
                      </div>
                      <div className="table_row table_row_white">
                        <div className="table_row_data keys">
                        Sim Profit Target    {/* Sim Profit Target <img src="/arrow-down-circle.svg" alt="arrow" className="arrow-icon" /> */}
                        </div>
                        <div className="table_row_data">${currentPlan.profit.toLocaleString()} (10%)</div>
                        <div className="table_row_data">NA</div>
                      </div>
                      <div className="table_row">
                        <div className="table_row_data keys">
                        Max Sim Drawdown   {/* Max Sim Drawdown <img src="/arrow-down-circle.svg" alt="arrow" className="arrow-icon" /> */}
                        </div>
                        <div className="table_row_data">${currentPlan.drawdown.toLocaleString()} (6%)</div>
                        <div className="table_row_data">${currentPlan.drawdown.toLocaleString()} (6%)</div>
                      </div>
                      <div className="table_row table_row_white">
                        <div className="table_row_data keys">
                        Max Daily Drawdown   {/* Max Daily Drawdown <img src="/arrow-down-circle.svg" alt="arrow" className="arrow-icon" /> */}
                        </div>
                        <div className="table_row_data">${currentPlan.daily.toLocaleString()} (4%)</div>
                        <div className="table_row_data">${currentPlan.daily.toLocaleString()} (4%)</div>
                      </div>
                      <div className="table_row">
                        <div className="table_row_data keys">
                        Max Sim Trading Days    {/* Max Sim Trading Days <img src="/arrow-down-circle.svg" alt="arrow" className="arrow-icon" /> */}
                        </div>
                        <div className="table_row_data">Unlimited</div>
                        <div className="table_row_data">NA</div>
                      </div>
                      <div className="table_row table_row_white">
                        <div className="table_row_data keys">
                        Analyst Performance Fee   {/* Analyst Performance Fee <img src="/arrow-down-circle.svg" alt="arrow" className="arrow-icon" /> */}
                        </div>
                        <div className="table_row_data">NA</div>
                        <div className="table_row_data">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table_footer">
                  <h3>Alpha One {currentPlan.label}</h3>
                  <div className="rightBox">
                    <p>Assessment Price: ${currentPlan.price}</p>
                    <button className="normalButton">
                    Start Alpha Capital Evaluation    {/* Start Alpha Capital Evaluation <img src="/arrow-blue.svg" alt="arrow" /> */}
                    </button>
                  </div>
                </div>
              </div>
              <div className="mobile_plan_table">
                <Swiper
                  modules={[Pagination, Navigation]}
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  navigation
                  onSlideChange={(swiper) => handleSizeChange(Object.keys(sizes)[swiper.activeIndex])}
                >
                  {mobileSlides}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingPlans;