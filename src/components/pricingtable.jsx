import React, { useState, useEffect, useRef } from 'react';
import './pricingtable.css';

function PricingTable() {
  const [selectedStep, setSelectedStep] = useState("Three Step");
  const [selectedSize, setSelectedSize] = useState("10k");
  const [price, setPrice] = useState("$69");
  const [isAnimating, setIsAnimating] = useState(false);
  const tableContainerRef = useRef(null);

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

  // Reset scroll position when selectedStep or selectedSize changes
  useEffect(() => {
    if (tableContainerRef.current) {
      tableContainerRef.current.scrollLeft = 0;
    }
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

  // Calculate dynamic minimum width based on number of columns
  const getMinWidth = () => {
    const baseWidth = 120; // Width per column
    const metricsWidth = 120; // Width for Metrics column
    const totalColumns = visibleColumns();
    return `${metricsWidth + totalColumns * baseWidth}px`;
  };

  const columnHeaders = getColumnHeaders();
  const columns = visibleColumns();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Select Your Evaluation Plan
        </h2>
        <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          <span></span>
        </h2>
      </div>
      <div className="ps_wrapper">
        <div className="ps_intro">
          <p className="mb-10 mt-6 text-gray-600 text-center text-sm sm:text-base">
            The Choice Is Yours Select The Right Evaluation And Become A Funded Trader With ECAPFX Trader
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6">
        {/* Left sidebar with options */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6" style={{ border: '1px solid #e5e7eb' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#1f2937' }}>Steps</h3>
            <div className="flex flex-col gap-2">
              {steps.map((step) => (
                <button
                  key={step}
                  className={`text-left px-4 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base ${selectedStep === step ? 'active' : ''}`}
                  onClick={() => handleStepChange(step)}
                  style={{
                    backgroundColor: selectedStep === step ? '#1d8348' : '#e5e7eb',
                    color: selectedStep === step ? '#ffffff' : '#374151',
                    transition: 'background-color 0.6s ease, color 0.6s ease',
                  }}
                  onMouseEnter={(e) => { if (selectedStep !== step) e.target.style.backgroundColor = '#d1d5db'; }}
                  onMouseLeave={(e) => { if (selectedStep !== step) e.target.style.backgroundColor = '#e5e7eb'; }}
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
                  className={`text-left px-4 py-2 sm:py-3 rounded-md font-medium text-sm sm:text-base ${selectedSize === size ? 'active' : ''} ${selectedStep === "Instant Funding" && size === "200k" ? 'hidden' : ''}`}
                  onClick={() => handleSizeChange(size)}
                  style={{
                    backgroundColor: selectedSize === size ? '#1d8348' : '#e5e7eb',
                    color: selectedSize === size ? '#ffffff' : '#374151',
                    transition: 'background-color 0.3s ease, color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { if (selectedSize !== size) e.target.style.backgroundColor = '#d1d5db'; }}
                  onMouseLeave={(e) => { if (selectedSize !== size) e.target.style.backgroundColor = '#e5e7eb'; }}
                >
                  {size} Challenge
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center" style={{ border: '1px solid #e5e7eb' }}>
            <h2 className="text-xl sm:text-3xl font-bold" style={{ color: '#1d8348', background: 'linear-gradient(90deg, #1d8348, #28a745)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{price}</h2>
            <p className="text-gray-500 mt-1 text-sm sm:text-base">One-time Fee</p>
          </div>
        </div>

        {/* Right side table */}
        <div className="lg:col-span-9">
          <div className="bg-white rounded-lg shadow-md" style={{ border: '1px solid #e5e7eb', position: 'relative' }}>
            <div className="overflow-x-auto" ref={tableContainerRef}>
              <div className="min-w-[240px] sm:min-w-[360px] md:min-w-full" style={{ minWidth: getMinWidth() }}>
                <table className="w-full" aria-label="Trading Challenge Details">
                  <thead>
                    <tr className="bg-gray-100 text-gray-800" style={{ borderBottom: '2px solid #e5e7eb' }}>
                      <th className="p-2 sm:p-4 text-left font-medium text-xs sm:text-base sticky left-0 bg-gray-100" style={{ color: '#1f2937', zIndex: 1 }}>Metrics</th>
                      {columnHeaders.slice(0, columns).map((header, index) => (
                        header ? (
                          <th key={index} className="p-2 sm:p-4 text-left font-medium text-xs sm:text-base" style={{ color: '#1f2937' }}>
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
                        <td className="p-2 sm:p-4 font-medium text-xs sm:text-base sticky left-0 bg-white" style={{ color: '#374151', zIndex: 1 }}>{metric}</td>
                        {getTableData(metric).slice(0, columns).map((value, index) => (
                          <td
                            key={index}
                            className={`p-2 sm:p-4 text-xs sm:text-base ${isAnimating ? 'animate-change' : ''}`}
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
            <div className="p-4 sm:p-6 text-center border-t border-gray-200" style={{ backgroundColor: '#f9fafb', position: 'sticky', bottom: 0, left: 0, width: '100%', zIndex: 2 }}>
              <p className="text-gray-600 mb-4 max-w-lg mx-auto text-sm sm:text-base" style={{ color: '#6b7280' }}>
                We allow our traders to trade on their own terms. Get Funded with No Consistency Rule!
              </p>
              <button
                className="bg-[#1d8348] text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm sm:text-base"
                style={{ transition: 'background-color 0.3s ease, transform 0.2s ease' }}
                onMouseEnter={(e) => { e.target.style.backgroundColor = '#166c3a'; e.target.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { e.target.style.backgroundColor = '#1d8348'; e.target.style.transform = 'scale(1)'; }}
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