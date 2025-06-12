import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './pricingtable.css';

function PricingTable() {
  const [selectedStep, setSelectedStep] = useState("Three Step");
  const [selectedSize, setSelectedSize] = useState("10k");
  const [price, setPrice] = useState("$69");
  const [isAnimating, setIsAnimating] = useState(false);

  // Price mapping based on size and step
  const priceMap = {
    "One Step": {
      "10k": "$149",
      "25k": "$249",
      "50k": "$349",
      "100k": "$549",
      "200k": "$899"
    },
    "Two Step": {
      "10k": "$99",
      "25k": "$199",
      "50k": "$299",
      "100k": "$499",
      "200k": "$799"
    },
    "Three Step": {
      "10k": "$69",
      "25k": "$99",
      "50k": "$149",
      "100k": "$199",
      "200k": "$499"
    },
    "Instant Funding": {
      "10k": "$99",
      "25k": "$199",
      "50k": "$299",
      "100k": "$499",
      "200k": "$999"
    }
  };

  // Table data based on step type and size
  const tableData = {
    "One Step": {
      "10k": {
        "Profit Target": ["$800 (8%)", "None", "", ""],
        "Duration": ["Unlimited", "Unlimited", "", ""],
        "Leverage": ["Up to 1:50", "Up to 1:50", "", ""],
        "Min Trading Days": ["7 Days", "None", "", ""],
        "Max Loss": ["$600 (6%)", "$600 (6%)", "", ""],
        "Daily Loss": ["$300 (3%)", "$300 (3%)", "", ""],
        "Profit Share": ["None", "90/10", "", ""],
        "Fee": ["$149", "Refunded", "", ""]
      },
      "25k": {
        "Profit Target": ["$2,000 (8%)", "None", "", ""],
        "Duration": ["Unlimited", "Unlimited", "", ""],
        "Leverage": ["Up to 1:50", "Up to 1:50", "", ""],
        "Min Trading Days": ["7 Days", "None", "", ""],
        "Max Loss": ["$1,500 (6%)", "$1,500 (6%)", "", ""],
        "Daily Loss": ["$750 (3%)", "$750 (3%)", "", ""],
        "Profit Share": ["None", "90/10", "", ""],
        "Fee": ["$249", "Refunded", "", ""]
      },
      "50k": {
        "Profit Target": ["$5,000 (10%)", "$4,000 (8%)", "$2,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": ["$2,500 (5%)", "$2,500 (5%)", "$2,500 (5%)", "$2,500 (5%)"],
        "Daily Loss": ["$1,500 (3%)", "$1,500 (3%)", "$1,500 (3%)", "$1,500 (3%)"],
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": ["$209", "Free", "Free", "Refunded"]
      },
      "100k": {
        "Profit Target": ["$10,000 (10%)", "$8,000 (8%)", "$4,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": ["$5,000 (5%)", "$5,000 (5%)", "$5,000 (5%)", "$5,000 (5%)"],
        "Daily Loss": ["$3,000 (3%)", "$3,000 (3%)", "$3,000 (3%)", "$3,000 (3%)"],
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": ["$349", "Free", "Free", "Refunded"]
      },
      "200k": {
        "Profit Target": ["$20,000 (10%)", "$16,000 (8%)", "$8,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": ["$10,000 (5%)", "$10,000 (5%)", "$10,000 (5%)", "$10,000 (5%)"],
        "Daily Loss": ["$6,000 (3%)", "$6,000 (3%)", "$6,000 (3%)", "$6,000 (3%)"],
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": ["$599", "Free", "Free", "Refunded"]
      }
    },
    "Two Step": {
      "10k": {
        "Profit Target": ["$1,000 (10%)", "$500 (5%)", "None", ""],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", ""],
        "Leverage": ["Up to 1:100", "Up to 1:100", "Up to 1:100", ""],
        "Min Trading Days": ["None", "None", "None", ""],
        "Max Loss": ["$1,000 (10%)", "$1,000 (10%)", "$1,000 (10%)", ""],
        "Daily Loss": ["$500 (5%)", "$500 (5%)", "$500 (5%)", ""],
        "Profit Share": ["None", "None", "90/10", ""],
        "Fee": ["$99", "Free", "Refunded", ""]
      },
      "25k": {
        "Profit Target": ["$2,000 (8%)", "None", "", ""],
        "Duration": ["Unlimited", "Unlimited", "", ""],
        "Leverage": ["Up to 1:50", "Up to 1:50", "", ""],
        "Min Trading Days": ["7 Days", "None", "", ""],
        "Max Loss": ["$1,500 (6%)", "$1,500 (6%)", "", ""],
        "Daily Loss": ["$750 (3%)", "$750 (3%)", "", ""],
        "Profit Share": ["None", "90/10", "", ""],
        "Fee": ["$249", "Refunded", "", ""]
      },
      "50k": {
        "Profit Target": ["$5,000 (10%)", "$4,000 (8%)", "$2,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": ["$2,500 (5%)", "$2,500 (5%)", "$2,500 (5%)", "$2,500 (5%)"],
        "Daily Loss": ["$1,500 (3%)", "$1,500 (3%)", "$1,500 (3%)", "$1,500 (3%)"],
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": ["$209", "Free", "Free", "Refunded"]
      },
      "100k": {
        "Profit Target": ["$10,000 (10%)", "$8,000 (8%)", "$4,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": ["$5,000 (5%)", "$5,000 (5%)", "$5,000 (5%)", "$5,000 (5%)"],
        "Daily Loss": ["$3,000 (3%)", "$3,000 (3%)", "$3,000 (3%)", "$3,000 (3%)"],
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": ["$349", "Free", "Free", "Refunded"]
      },
      "200k": {
        "Profit Target": ["$20,000 (10%)", "$16,000 (8%)", "$8,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": ["$10,000 (5%)", "$10,000 (5%)", "$10,000 (5%)", "$10,000 (5%)"],
        "Daily Loss": ["$6,000 (3%)", "$6,000 (3%)", "$6,000 (3%)", "$6,000 (3%)"],
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": ["$599", "Free", "Free", "Refunded"]
      }
    },
    "Three Step": {
      "10k": {
        "Profit Target": ["$1,000 (10%)", "$800 (8%)", "$400 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": ["$500 (5%)", "$500 (5%)", "$500 (5%)", "$500 (5%)"],
        "Daily Loss": ["$300 (3%)", "$300 (3%)", "$300 (3%)", "$300 (3%)"],
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": ["$69", "Free", "Free", "Refunded"]
      },
      "25k": {
        "Profit Target": ["$2,000 (8%)", "None", "", ""],
        "Duration": ["Unlimited", "Unlimited", "", ""],
        "Leverage": ["Up to 1:50", "Up to 1:50", "", ""],
        "Min Trading Days": ["7 Days", "None", "", ""],
        "Max Loss": ["$1,500 (6%)", "$1,500 (6%)", "", ""],
        "Daily Loss": ["$750 (3%)", "$750 (3%)", "", ""],
        "Profit Share": ["None", "90/10", "", ""],
        "Fee": ["$249", "Refunded", "", ""]
      },
      "50k": {
        "Profit Target": ["$5,000 (10%)", "$4,000 (8%)", "$2,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": ["$2,500 (5%)", "$2,500 (5%)", "$2,500 (5%)", "$2,500 (5%)"],
        "Daily Loss": ["$1,500 (3%)", "$1,500 (3%)", "$1,500 (3%)", "$1,500 (3%)"],
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": ["$209", "Free", "Free", "Refunded"]
      },
      "100k": {
        "Profit Target": ["$10,000 (10%)", "$8,000 (8%)", "$4,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": ["$5,000 (5%)", "$5,000 (5%)", "$5,000 (5%)", "$5,000 (5%)"],
        "Daily Loss": ["$3,000 (3%)", "$3,000 (3%)", "$3,000 (3%)", "$3,000 (3%)"],
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": ["$349", "Free", "Free", "Refunded"]
      },
      "200k": {
        "Profit Target": ["$20,000 (10%)", "$16,000 (8%)", "$8,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": ["$10,000 (5%)", "$10,000 (5%)", "$10,000 (5%)", "$10,000 (5%)"],
        "Daily Loss": ["$6,000 (3%)", "$6,000 (3%)", "$6,000 (3%)", "$6,000 (3%)"],
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": ["$599", "Free", "Free", "Refunded"]
      }
    },
    "Instant Funding": {
      "10k": {
        "Profit Target": ["None", "", "", ""],
        "Duration": ["Unlimited", "", "", ""],
        "Leverage": ["Up to 1:50", "", "", ""],
        "Min Trading Days": ["10 Days", "", "", ""],
        "Max Loss": ["$500 (5%)", "", "", ""],
        "Daily Loss": ["$300 (3%)", "", "", ""],
        "Profit Share": ["90/10", "", "", ""],
        "Fee": ["$99", "", "", ""]
      },
      "25k": {
        "Profit Target": ["$2,500 (10%)", "$2,000 (8%)", "$1,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": ["$1,250 (5%)", "$1,250 (5%)", "$1,250 (5%)", "$1,250 (5%)"],
        "Daily Loss": ["$750 (3%)", "$750 (3%)", "$750 (3%)", "$750 (3%)"],
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": ["$139", "Free", "Free", "Refunded"]
      },
      "50k": {
        "Profit Target": ["$5,000 (10%)", "$4,000 (8%)", "$2,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": ["$2,500 (5%)", "$2,500 (5%)", "$2,500 (5%)", "$2,500 (5%)"],
        "Daily Loss": ["$1,500 (3%)", "$1,500 (3%)", "$1,500 (3%)", "$1,500 (3%)"],
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": ["$209", "Free", "Free", "Refunded"]
      },
      "100k": {
        "Profit Target": ["$10,000 (10%)", "$8,000 (8%)", "$4,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": ["$5,000 (5%)", "$5,000 (5%)", "$5,000 (5%)", "$5,000 (5%)"],
        "Daily Loss": ["$3,000 (3%)", "$3,000 (3%)", "$3,000 (3%)", "$3,000 (3%)"],
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": ["$349", "Free", "Free", "Refunded"]
      },
      "200k": {
        "Profit Target": ["$20,000 (10%)", "$16,000 (8%)", "$8,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": ["$10,000 (5%)", "$10,000 (5%)", "$10,000 (5%)", "$10,000 (5%)"],
        "Daily Loss": ["$6,000 (3%)", "$6,000 (3%)", "$6,000 (3%)", "$6,000 (3%)"],
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": ["$599", "Free", "Free", "Refunded"]
      }
    }
  };

  useEffect(() => {
    setPrice(priceMap[selectedStep][selectedSize]);
  }, [selectedStep, selectedSize]);

  const handleStepChange = (step) => {
    setIsAnimating(true);
    setSelectedStep(step);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const handleSizeChange = (size) => {
    setIsAnimating(true);
    setSelectedSize(size);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const steps = ["One Step", "Two Step", "Three Step", "Instant Funding"];
  const sizes = ["10k", "25k", "50k", "100k", "200k"];
  const metrics = ["Profit Target", "Duration", "Leverage", "Min Trading Days", "Max Loss", "Daily Loss", "Profit Share", "Fee"];

  const getTableData = (metric) => {
    if (tableData[selectedStep] && tableData[selectedStep][selectedSize]) {
      return tableData[selectedStep][selectedSize][metric];
    }
    return tableData[selectedStep]["10k"][metric];
  };

  const getColumnHeaders = () => {
    switch (selectedStep) {
      case "One Step":
        return ["Stage One", "Funded", "", ""];
      case "Two Step":
        return ["Stage One", "Stage Two", "Funded", ""];
      case "Instant Funding":
        return ["Funded", "", "", ""];
      default:
        return ["Stage One", "Stage Two", "Stage Three", "Funded"];
    }
  };

  const visibleColumns = () => {
    switch (selectedStep) {
      case "One Step":
        return 2;
      case "Two Step":
        return 3;
      case "Instant Funding":
        return 1;
      default:
        return 4;
    }
  };

  const columnHeaders = getColumnHeaders();
  const columns = visibleColumns();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h2 className="text-5xl lg:text-5xl font-extrabold tracking-tight text-center">
            Our Plans
          </h2>
          <h2 className="mt-2 text-5xl lg:text-5xl font-extrabold tracking-tight text-center">
            <span></span>
          </h2>
        </div>
        <div className="ps_wrapper">
          <div className="ps_intro">
            <p className="mb-14 mt-10 text-black-600 text-center">
              The Choice Is Yours Select The Right Evaluation And Become An ECAPFX Trader
            </p>
          </div>
        </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left sidebar with options */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6" style={{ border: '1px solid #e5e7eb' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#1f2937' }}>Steps</h3>
            <div className="flex flex-col gap-2">
              {steps.map((step) => (
                <button
                  key={step}
                  className={`text-left px-4 py-3 rounded-md font-medium text-sm sm:text-base active:cursor-pointer select-none ${selectedStep === step ? 'active' : ''}`}
                  onClick={(e) => {
                    handleStepChange(step);
                  }}
                  style={{
                    background: selectedStep === step 
                      ? 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)' 
                      : 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)',
                    color: selectedStep === step ? '#000000' : '#ffffff',
                    transition: 'background 0.6s ease, color 0.6s ease, transform 0.3s ease, box-shadow 0.3s ease',
                    display: 'inline-block',
                    transform: selectedStep === step ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: selectedStep === step ? '0 4px 6px -1px rgba(0, 128, 0, 0.5)' : 'none',
                  }}
                  onMouseEnter={(e) => { 
                    if (selectedStep !== step) {
                      e.target.style.background = 'linear-gradient(to right, rgba(21, 100, 55, 0.9), rgba(29, 131, 72, 0.9), rgba(14, 63, 36, 0.9))';
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 128, 0, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => { 
                    if (selectedStep !== step) {
                      e.target.style.background = 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)';
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                >
                  {step}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6" style={{ border: '1px solid #e5e7eb' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#1f2937' }}>Size</h3>
            <div className="flex flex-col gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`text-left px-4 py-3 rounded-md font-medium text-sm sm:text-base active:cursor-pointer select-none ${selectedSize === size ? 'active' : ''} ${selectedStep === "Instant Funding" && size === "200k" ? 'hidden' : ''}`}
                  onClick={(e) => {
                    handleSizeChange(size);
                  }}
                  style={{
                    background: selectedSize === size 
                      ? 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)' 
                      : 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)',
                    color: selectedSize === size ? '#000000' : '#ffffff',
                    transition: 'background 0.6s ease, color 0.6s ease, transform 0.3s ease, box-shadow 0.3s ease',
                    display: 'inline-block',
                    transform: selectedSize === size ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: selectedSize === size ? '0 4px 6px -1px rgba(0, 128, 0, 0.5)' : 'none',
                  }}
                  onMouseEnter={(e) => { 
                    if (selectedSize !== size) {
                      e.target.style.background = 'linear-gradient(to right, rgba(21, 100, 55, 0.9), rgba(29, 131, 72, 0.9), rgba(14, 63, 36, 0.9))';
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 128, 0, 0.5)';
                    }
                  }}
                  onMouseLeave={(e) => { 
                    if (selectedSize !== size) {
                      e.target.style.background = 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)';
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                >
                  {size} Challenge
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center" style={{ border: '1px solid #e5e7eb' }}>
            <h2 className="text-2xl sm:text-4xl font-bold" style={{ color: '#1d8348', background: 'linear-gradient(90deg, #1d8348, #28a745)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{price}</h2>
            <p className="text-gray-500 mt-1 text-sm sm:text-base">One-time Fee</p>
          </div>
        </div>

        {/* Right side table */}
        <div className="lg:col-span-9">
          <div className="bg-white rounded-lg shadow-md" style={{ border: '1px solid #e5e7eb', position: 'relative' }}>
            <div className="overflow-x-auto">
              <div className="min-w-[600px] md:min-w-full">
                <table className="w-full" aria-label="Trading Challenge Details">
                  <thead>
                    <tr className="bg-gray-100 text-gray-800" style={{ borderBottom: '2px solid #e5e7eb' }}>
                      <th className="p-4 text-left font-medium text-sm sm:text-base sticky left-0 bg-gray-100" style={{ color: '#1f2937', zIndex: 1 }}>Metrics</th>
                      {columnHeaders.slice(0, columns).map((header, index) => (
                        header ? (
                          <th key={index} className="p-4 text-left font-medium text-sm sm:text-base" style={{ color: '#1f2937' }}>
                            {header}
                          </th>
                        ) : null
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {metrics.map((metric) => (
                      <tr
                        key={metric}
                        className="border-b border-gray-200 hover:bg-gray-100"
                      >
                        <td className="p-4 font-medium text-sm sm:text-base sticky left-0 bg-white" style={{ color: '#374151', zIndex: 1 }}>{metric}</td>
                        {getTableData(metric).slice(0, columns).map((value, index) => (
                          <td
                            key={index}
                            className={`p-4 text-sm sm:text-base ${isAnimating ? 'animate-change' : ''}`}
                            style={{ color: '#4b5563' }}
                          >
                            {value}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="p-6 text-center border-t border-gray-200" style={{ backgroundColor: '#f9fafb', position: 'sticky', bottom: 0, left: 0, width: '100%', zIndex: 2 }}>
              <p className="text-gray-600 mb-4 max-w-lg mx-auto text-sm sm:text-base" style={{ color: '#6b7280' }}>
                We allow our traders to trade on their own terms. Get Funded with No Consistency Rule!
              </p>
              <button
                className="font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base text-white active:cursor-pointer select-none"
                style={{
                  background: 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)',
                  color: '#ffffff',
                  transition: 'background 0.6s ease, color 0.6s ease, transform 0.3s ease, box-shadow 0.3s ease',
                  display: 'inline-block',
                  transform: 'scale(1)',
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => { 
                  e.target.style.background = 'linear-gradient(to right, rgba(21, 100, 55, 0.9), rgba(29, 131, 72, 0.9), rgba(14, 63, 36, 0.9))';
                  e.target.style.color = '#000000';
                  e.target.style.transform = 'scale(1.05)';
                  e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 128, 0, 0.5)';
                }}
                onMouseLeave={(e) => { 
                  e.target.style.background = 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)';
                  e.target.style.color = '#ffffff';
                  e.target.style.transform = 'scale(1)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Start Challenge
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingTable;