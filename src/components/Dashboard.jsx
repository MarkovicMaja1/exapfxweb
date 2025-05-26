import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './FundingPlans.css';

const FundingPlans = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [activeSize, setActiveSize] = useState('100000'); 
  const [uPromeni, setUPromeni] = useState(false);
  const swiperRef = useRef(null);

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
    setUPromeni(true);
    setActiveSize(size);
    const index = Object.keys(sizes).indexOf(size);
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
    setTimeout(() => setUPromeni(false), 300);
  };

  const currentPlan = sizes[activeSize];

  const mobileSlides = Object.keys(sizes).map((size) => (
    <SwiperSlide key={size}>
      <div className="plans_table">
        <div className="table_footer">
          <h3 className={`${uPromeni ? 'promena' : ''} text-white`}>ECAPFX {sizes[size].label}</h3>
          <div className="rightBox">
            <p className={uPromeni ? 'promena' : ''}>Assessment Price: ${sizes[size].price}</p>
            <button className="normalButton">Start ECAPFX Evaluation</button>
          </div>
        </div>
        <div className="mobileSteps">
          <div className="table_row">
            <div className="table_row_key">
              <div className="key_header">Leverage</div>
            </div>
            <div className="table_row_values">
              <div className="table_cell">
                <span>1 Step:</span>
                <span>1:30</span>
              </div>
              <div className="table_cell">
                <span>Qualified:</span>
                <span>1:30</span>
              </div>
            </div>
          </div>
          <div className="table_row table_row_white">
            <div className="table_row_key">
              <div className="key_header">Sim Profit Target</div>
            </div>
            <div className="table_row_values">
              <div className="table_cell">
                <span>1 Step:</span>
                <span>${sizes[size].profit.toLocaleString()} (10%)</span>
              </div>
              <div className="table_cell">
                <span>Qualified:</span>
                <span>NA</span>
              </div>
            </div>
          </div>
          <div className="table_row">
            <div className="table_row_key">
              <div className="key_header">Max Sim Drawdown</div>
            </div>
            <div className="table_row_values">
              <div className="table_cell">
                <span>1 Step:</span>
                <span>${sizes[size].drawdown.toLocaleString()} (6%)</span>
              </div>
              <div className="table_cell">
                <span>Qualified:</span>
                <span>${sizes[size].drawdown.toLocaleString()} (6%)</span>
              </div>
            </div>
          </div>
          <div className="table_row table_row_white">
            <div className="table_row_key">
              <div className="key_header">Max Daily Drawdown</div>
            </div>
            <div className="table_row_values">
              <div className="table_cell">
                <span>1 Step:</span>
                <span>${sizes[size].daily.toLocaleString()} (4%)</span>
              </div>
              <div className="table_cell">
                <span>Qualified:</span>
                <span>${sizes[size].daily.toLocaleString()} (4%)</span>
              </div>
            </div>
          </div>
          <div className="table_row">
            <div className="table_row_key">
              <div className="key_header">Max Sim Trading Days</div>
            </div>
            <div className="table_row_values">
              <div className="table_cell">
                <span>1 Step:</span>
                <span>Unlimited</span>
              </div>
              <div className="table_cell">
                <span>Qualified:</span>
                <span>NA</span>
              </div>
            </div>
          </div>
          <div className="table_row table_row_white">
            <div className="table_row_key">
              <div className="key_header">Analyst Performance Fee</div>
            </div>
            <div className="table_row_values">
              <div className="table_cell">
                <span>1 Step:</span>
                <span>NA</span>
              </div>
              <div className="table_cell">
                <span>Qualified:</span>
                <span>80%</span>
              </div>
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
          <div className="mx-auto lg:max-w-4xl text-center mt-20">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-center">
              Still Not Sure?
            </h2>
            <h2 className="mt-2 text-4xl lg:text-5xl font-extrabold tracking-tight text-center">
              <span>Check out our other plans</span>
            </h2>
          </div>
          <div className="ps_wrapper">
            <div className="ps_intro">
              <p className="mb-12 mt-10 text-gray-600">
                Choose the evaluation based on your preference to become an ECAPFX Trader.
              </p>
              <div className="plan_select step_select">
                <div className="tabinationContainer variant2_tabs">
                  <div className="tabinationWrapper">
                    <ul className="tabinationBox">
                      {[1, 2, 3].map((step) => (
                        <li
                          key={step}
                          className={`tabinationButton ${activeStep === step ? 'activeTab' : ''}`}
                          onClick={() => handleStepChange(step)}
                        >
                          <p>
                            <span>{step}</span>
                            <span>Step</span>
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="plan_select plan_selector_container">
                {/* <div className="tabinationContainer variant2_tabs">
                  <div className="tabinationWrapper">
                    <ul className="tabinationBox">
                      <li className="tabinationButton activeTab">
                        <p><span>ECAPFX</span></p>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </div>
              <div className="plan_select account_size_select">
                <div className="tabinationContainer variant6_tabs">
                  <div className="tabinationWrapper">
                    <ul className="tabinationBox">
                      {Object.keys(sizes).map((size) => (
                        <li
                          key={size}
                          className={`tabinationButton ${activeSize === size ? 'activeTab' : ''}`}
                          onClick={() => handleSizeChange(size)}
                          data-size={size}
                        >
                          <p>
                            <span>${parseInt(size).toLocaleString()}</span>
                          </p>
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
                      <div className="plan_name"><h4>Analyst Assessment</h4></div>
                    </div>
                    <div className="steps_info">
                      <span className="gradientText">Qualified</span>
                      <div className="plan_name"><h4>Qualified Analyst</h4></div>
                    </div>
                  </div>
                  <div className="plan_highlights">
                    <div><p>No Profit Cap</p></div>
                    <div><p>Payout-on-demand</p></div>
                    <div><p>Quickest way to become an ECAPFX Trader</p></div>
                  </div>
                </div>
                <div className="tableWrapper">
                  <div className="tableBox">
                    <div className="table_header">
                      <div className="table_head">
                        <h4 className="stepHeader py-6">1 Step</h4>
                        <h4 className="stepHeader py-6">Qualified</h4>
                      </div>
                    </div>
                    <div className="table_rows">
                      <div className="table_row">
                        <small className="table_row_data keys">Leverage</small>
                        <div className="table_row_data">1:30</div>
                        <div className="table_row_data">1:30</div>
                      </div>
                      <div className="table_row table_row_white">
                        <small className="table_row_data keys">Sim Profit Target</small>
                        <div className={`table_row_data ${uPromeni ? 'promena' : ''}`}>
                          ${currentPlan.profit.toLocaleString()} (10%)
                        </div>
                        <div className="table_row_data">NA</div>
                      </div>
                      <div className="table_row">
                        <small className="table_row_data keys">Max Sim Drawdown</small>
                        <div className={`table_row_data ${uPromeni ? 'promena' : ''}`}>
                          ${currentPlan.drawdown.toLocaleString()} (6%)
                        </div>
                        <div className={`table_row_data ${uPromeni ? 'promena' : ''}`}>
                          ${currentPlan.drawdown.toLocaleString()} (6%)
                        </div>
                      </div>
                      <div className="table_row table_row_white">
                        <small className="table_row_data keys">Max Daily Drawdown</small>
                        <div className={`table_row_data ${uPromeni ? 'promena' : ''}`}>
                          ${currentPlan.daily.toLocaleString()} (4%)
                        </div>
                        <div className={`table_row_data ${uPromeni ? 'promena' : ''}`}>
                          ${currentPlan.daily.toLocaleString()} (4%)
                        </div>
                      </div>
                      <div className="table_row">
                        <small className="table_row_data keys">Max Sim Trading Days</small>
                        <div className="table_row_data">Unlimited</div>
                        <div className="table_row_data">NA</div>
                      </div>
                      <div className="table_row table_row_white">
                        <small className="table_row_data keys">Analyst Performance Fee</small>
                        <div className="table_row_data">NA</div>
                        <div className="table_row_data">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="table_footer">
                  <h4 className={uPromeni ? 'promena' : ''}>ECAPFX {currentPlan.label}</h4>
                  <div className="rightBox">
                    <p className={uPromeni ? 'promena' : ''}>Assessment Price: ${currentPlan.price}</p>
                    <button className="normalButton">Start ECAPFX Capital Evaluation</button>
                  </div>
                </div>
              </div>
              <div className="mobile_plan_table">
                <Swiper
                  ref={swiperRef}
                  modules={[Pagination, Navigation]}
                  spaceBetween={10}
                  slidesPerView={1}
                  centeredSlides={true}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  navigation
                  onSlideChange={(swiper) => handleSizeChange(Object.keys(sizes)[swiper.activeIndex])}
                  style={{ width: '100%', minHeight: '500px' }}
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