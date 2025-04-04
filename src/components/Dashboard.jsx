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
        <div className="mx-auto lg:max-w-4xl text-center mt-24 mb-10">
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
                        <h3 className="stepHeader">1 Step</h3>
                        <h3 className="stepHeader">Qualified</h3>
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