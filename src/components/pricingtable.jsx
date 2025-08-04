import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from 'react-i18next';
import './pricingtable.css';
import usdFlag from '../assets/usd-flag.png';
import gbpFlag from '../assets/gbp-flag.png';
import eurFlag from '../assets/eur-flag.png';

const getTranslationKey = (text) => {
  const keyMap = {
    "One Step": "onestep",
    "Two Step": "twostep",
    "Three Step": "threestep",
    "Profit": "profit",
    "Maxloss": "maxLoss",
    "Daily Loss": "dailyLoss",
    "Mintradingdays": "minTradingDays",
    "Profit Share": "profitShare",
  };
  return keyMap[text] || text.toLowerCase().replace(/ /g, '');
};

function PricingTable() {
  const { t } = useTranslation();
  const [selectedStep, setSelectedStep] = useState("Three Step");
  const [selectedSize, setSelectedSize] = useState("100k");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [price, setPrice] = useState("$325");
  const [isAnimating, setIsAnimating] = useState(false);
  const [timeLeft, setTimeLeft] = useState(604800); // 7 days in seconds

  // Price mapping based on step, size, and currency
  const priceMap = {
    "One Step": {
      "10k": { USD: "$80", GBP: "£65", EUR: "€75" },
      "25k": { USD: "$145", GBP: "£115", EUR: "€130" },
      "50k": { USD: "$260", GBP: "£215", EUR: "€240" },
      "100k": { USD: "$440", GBP: "£365", EUR: "€405" },
      "200k": { USD: "$855", GBP: "£705", EUR: "€785" }
    },
    "Two Step": {
      "10k": { USD: "$60", GBP: "£50", EUR: "€60" },
      "25k": { USD: "$125", GBP: "£100", EUR: "€110" },
      "50k": { USD: "$205", GBP: "£170", EUR: "€185" },
      "100k": { USD: "$370", GBP: "£305", EUR: "€335" },
      "200k": { USD: "$720", GBP: "£600", EUR: "€650" }
    },
    "Three Step": {
      "10k": { USD: "$55", GBP: "£45", EUR: "€50" },
      "25k": { USD: "$105", GBP: "£90", EUR: "€100" },
      "50k": { USD: "$180", GBP: "£150", EUR: "€165" },
      "100k": { USD: "$325", GBP: "£270", EUR: "€295" },
      "200k": { USD: "$630", GBP: "£520", EUR: "€570" }
    },
    "Instant Funding": {
      "10k": { USD: "$315", GBP: "£260", EUR: "€295" },
      "15k": { USD: "$450", GBP: "£375", EUR: "€425" },
      "20k": { USD: "$585", GBP: "£485", EUR: "€550" },
      "25k": { USD: "$720", GBP: "£595", EUR: "€675" }
    }
  };

  // Table data based on step type, size, and currency
  const tableData = {
    "One Step": {
      "10k": {
        "Profit": ["$900 (9%)", "None", "", ""],
        "Duration": ["Unlimited", "Unlimited", "", ""],
        "Leverage": ["Up to 1:100", "Up to 1:100", "", ""],
        "Mintradingdays": ["5 Days", "5 days", "", ""],
        "Maxloss": { USD: ["$800 (8%)", "$800 (8%)", "", ""], GBP: ["£800 (8%)", "£800 (8%)", "", ""], EUR: ["€800 (8%)", "€800 (8%)", "", ""] },
        "Daily Loss": { USD: ["$500 (5%)", "$500 (5%)", "", ""], GBP: ["£500 (5%)", "£500 (5%)", "", ""], EUR: ["€500 (5%)", "€500 (5%)", "", ""] },
        "Profit Share": ["None", "80/20", "", ""],
        "Fee": { USD: ["$80", "Refunded", "", ""], GBP: ["£65", "Refunded", "", ""], EUR: ["€75", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "25k": {
        "Profit": ["$2,250 (9%)", "None", "", ""],
        "Duration": ["Unlimited", "Unlimited", "", ""],
        "Leverage": ["Up to 1:100", "Up to 1:100", "", ""],
        "Mintradingdays": ["5 Days", "None", "", ""],
        "Maxloss": { USD: ["$2,000 (8%)", "$2,000 (8%)", "", ""], GBP: ["£2,000 (8%)", "£2,000 (8%)", "", ""], EUR: ["€2,000 (8%)", "€2,000 (8%)", "", ""] },
        "Daily Loss": { USD: ["$1,250 (5%)", "$1,250 (5%)", "", ""], GBP: ["£1,250 (5%)", "£1,250 (5%)", "", ""], EUR: ["€1,250 (5%)", "€1,250 (5%)", "", ""] },
        "Profit Share": ["None", "80/20", "", ""],
        "Fee": { USD: ["$145", "Refunded", "", ""], GBP: ["£115", "Refunded", "", ""], EUR: ["€130", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "50k": {
        "Profit": ["$5,000 (10%)", "None", "", ""],
        "Duration": ["Unlimited", "Unlimited", "", ""],
        "Leverage": ["Up to 1:100", "Up to 1:100", "", ""],
        "Mintradingdays": ["5 Days", "None", "", ""],
        "Maxloss": { USD: ["$4,000 (8%)", "$4,000 (8%)", "", ""], GBP: ["£4,000 (8%)", "£4,000 (8%)", "", ""], EUR: ["€4,000 (8%)", "€4,000 (8%)", "", ""] },
        "Daily Loss": { USD: ["$2,500 (5%)", "$2,500 (5%)", "", ""], GBP: ["£2,500 (5%)", "£2,500 (5%)", "", ""], EUR: ["€2,500 (5%)", "€2,500 (5%)", "", ""] },
        "Profit Share": ["None", "80/20", "", ""],
        "Fee": { USD: ["$260", "Refunded", "", ""], GBP: ["£215", "Refunded", "", ""], EUR: ["€240", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "100k": {
        "Profit": ["$10,000 (10%)", "None", "", ""],
        "Duration": ["Unlimited", "Unlimited", "", ""],
        "Leverage": ["Up to 1:100", "Up to 1:100", "", ""],
        "Mintradingdays": ["5 Days", "None", "", ""],
        "Maxloss": { USD: ["$8,000 (8%)", "$8,000 (8%)", "", ""], GBP: ["£8,000 (8%)", "£8,000 (8%)", "", ""], EUR: ["€8,000 (8%)", "€8,000 (8%)", "", ""] },
        "Daily Loss": { USD: ["$5,000 (5%)", "$5,000 (5%)", "", ""], GBP: ["£5,000 (5%)", "£5,000 (5%)", "", ""], EUR: ["€5,000 (5%)", "€5,000 (5%)", "", ""] },
        "Profit Share": ["None", "80/20", "", ""],
        "Fee": { USD: ["$440", "Refunded", "", ""], GBP: ["£365", "Refunded", "", ""], EUR: ["€405", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "200k": {
        "Profit": ["$20,000 (10%)", "None", "", ""],
        "Duration": ["Unlimited", "Unlimited", "", ""],
        "Leverage": ["Up to 1:100", "Up to 1:100", "", ""],
        "Mintradingdays": ["5 Days", "None", "", ""],
        "Maxloss": { USD: ["$16,000 (8%)", "$16,000 (8%)", "", ""], GBP: ["£16,000 (8%)", "£16,000 (8%)", "", ""], EUR: ["€16,000 (8%)", "€16,000 (8%)", "", ""] },
        "Daily Loss": { USD: ["$10,000 (5%)", "$10,000 (5%)", "", ""], GBP: ["£10,000 (5%)", "£10,000 (5%)", "", ""], EUR: ["€10,000 (5%)", "€10,000 (5%)", "", ""] },
        "Profit Share": ["None", "80/20", "", ""],
        "Fee": { USD: ["$855", "Refunded", "", ""], GBP: ["£705", "Refunded", "", ""], EUR: ["€785", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      }
    },
    "Two Step": {
      "10k": {
        "Profit": ["$1,000 (10%)", "$500 (5%)", "None", ""],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", ""],
        "Leverage": ["Up to 1:100", "Up to 1:100", "Up to 1:100", ""],
        "Mintradingdays": ["5 Days", "None", "None", ""],
        "Maxloss": { USD: ["$800 (8%)", "$500 (5%)", "$800 (8%)", ""], GBP: ["£800 (8%)", "£500 (5%)", "£800 (8%)", ""], EUR: ["€800 (8%)", "€500 (5%)", "€800 (8%)", ""] },
        "Daily Loss": { USD: ["$500 (5%)", "$300 (3%)", "$500 (5%)", ""], GBP: ["£500 (5%)", "£300 (3%)", "£500 (5%)", ""], EUR: ["€500 (5%)", "€300 (3%)", "€500 (5%)", ""] },
        "Profit Share": ["None", "None", "80/20", ""],
        "Fee": { USD: ["$60", "Refunded", "", ""], GBP: ["£50", "Refunded", "", ""], EUR: ["€60", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "25k": {
        "Profit": ["$2,500 (10%)", "$1,250 (5%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:100", "Up to 1:100", "Up to 1:100"],
        "Mintradingdays": ["5 Days", "None", "None"],
        "Maxloss": { USD: ["$2,500 (8%)", "$1,250 (5%)", "$2,500 (8%)"], GBP: ["£2,500 (8%)", "£1,250 (5%)", "£2,500 (8%)"], EUR: ["€2,500 (8%)", "€1,250 (5%)", "€2,500 (8%)"] },
        "Daily Loss": { USD: ["$1,250 (5%)", "$750 (3%)", "$1,250 (5%)"], GBP: ["£1,250 (5%)", "£750 (3%)", "£1,250 (5%)"], EUR: ["€1,250 (5%)", "€750 (3%)", "€1,250 (5%)"] },
        "Profit Share": ["None", "None", "80/20"],
        "Fee": { USD: ["$125", "Refunded", ""], GBP: ["£100", "Refunded", ""], EUR: ["€110", "Refunded", ""] },
        "Bonus After Stage": { USD: ["", "", ""], GBP: ["", "", ""], EUR: ["", "", ""] }
      },
      "50k": {
        "Profit": ["$5,000 (10%)", "$2,500 (5%)", "None", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:100", "Up to 1:100", "Up to 1:100", "Up to 1:100"],
        "Mintradingdays": ["None", "None", "None", "None"],
        "Maxloss": { USD: ["$4,000 (8%)", "$2,500 (5%)", "$4,000 (8%)", "None"], GBP: ["£4,000 (8%)", "£2,500 (5%)", "£4,000 (8%)", "None"], EUR: ["€4,000 (8%)", "€2,500 (5%)", "€4,000 (8%)", "None"] },
        "Daily Loss": { USD: ["$2,500 (5%)", "$1,200 (3%)", "$2,500 (5%)", "None"], GBP: ["£2,500 (5%)", "£1,200 (3%)", "£2,500 (5%)", "None"], EUR: ["€2,500 (5%)", "€1,200 (3%)", "€600 (2)", "None"] },
        "Profit Share": ["None", "None", "None", "80/20"],
        "Fee": { USD: ["$205", "Refunded", "", ""], GBP: ["£170", "Refunded", "", ""], EUR: ["€185", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "100k": {
        "Profit": ["$10,000 (10%)", "$5,000 (5%)", "None", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:100", "Up to 1:100", "Up to 1:100", "Up to 1:100"],
        "Mintradingdays": ["None", "None", "None", "None"],
        "Maxloss": { USD: ["$8,000 (8%)", "$5,000 (5%)", "$8,000 (8%)", "None"], GBP: ["£8,000 (8%)", "£4,000 (4%)", "£8,000 (8%)", "None"], EUR: ["€8,000 (8%)", "€4,000 (4%)", "€8,000 (8%)", "None"] },
        "Daily Loss": { USD: ["$5,000 (5%)", "$3,000 (3%)", "$5,000 (5%)", "None"], GBP: ["£5,000 (5%)", "£3,000 (3%)", "£5,000 (5%)", "None"], EUR: ["€5,000 (5%)", "€3,000 (3%)", "€5,000 (5%)", "None"] },
        "Profit Share": ["None", "None", "None", "80/20"],
        "Fee": { USD: ["$370", "Refunded", "", ""], GBP: ["£305", "Refunded", "", ""], EUR: ["€335", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "200k": {
        "Profit": ["$20,000 (10%)", "$10,000 (5%)", "None", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:100", "Up to 1:100", "Up to 1:100", "Up to 1:100"],
        "Mintradingdays": ["None", "None", "None", "None"],
        "Maxloss": { USD: ["$16,000 (8%)", "$10,000 (5%)", "$16,000 (8%)", "None"], GBP: ["£16,000 (8%)", "£10,000 (5%)", "£16,000 (8%)", "None"], EUR: ["€16,000 (8%)", "€10,000 (5%)", "€16,000 (8%)", "None"] },
        "Daily Loss": { USD: ["$10,000 (5%)", "$4,800 (3%)", "$10,000 (5%)", "None"], GBP: ["£6,000 (3%)", "£4,800 (3%)", "£10,000 (5%)", "None"], EUR: ["€6,000 (3%)", "€4,800 (3%)", "€10,000 (5%)", "None"] },
        "Profit Share": ["None", "None", "None", "80/20"],
        "Fee": { USD: ["$720", "Refunded", "", ""], GBP: ["£600", "Refunded", "", ""], EUR: ["€650", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      }
    },
    "Three Step": {
      "10k": {
        "Profit": ["$800 (8%)", "$600 (6%)", "$400 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:100", "Up to 1:100", "Up to 1:100", "Up to 1:100"],
        "Mintradingdays": ["None", "None", "None", "None"],
        "Maxloss": { USD: ["$800 (8%)", "$500 (5%)", "$300 (3%)", "$800 (8%)"], GBP: ["£800 (8%)", "£500 (5%)", "£300 (3%)", "£800 (8%)"], EUR: ["€800 (8%)", "€500 (5%)", "€300 (3%)", "€800 (8%)"] },
        "Daily Loss": { USD: ["$500 (5%)", "$300 (3%)", "$300 (3%)", "$500 (5%)"], GBP: ["£500 (5%)", "£300 (3%)", "£300 (3%)", "£500 (5%)"], EUR: ["€500 (5%)", "€300 (3%)", "€300 (3%)", "€500 (5%)"] },
        "Profit Share": ["None", "None", "None", "80/20"],
        "Fee": { USD: ["$55", "", "Refunded", ""], GBP: ["£45", "", "Refunded", ""], EUR: ["€50", "", "Refunded", ""] },
        "Bonus After Stage": { USD: ["$10", "$15", "$20", ""], GBP: ["£10", "£15", "£20", ""], EUR: ["€10", "€15", "€20", ""] }
      },
      "25k": {
        "Profit": ["$2,000 (8%)", "$1,500 (6%)", "$1000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:100", "Up to 1:100", "Up to 1:100", "Up to 1:100"],
        "Mintradingdays": ["None", "None", "None", "None"],
        "Maxloss": { USD: ["$2,000 (8%)", "$1,250 (5%)", "$750 (3%)", "$2,000 (8%)"], GBP: ["£2,000 (8%)", "£1,250 (5%)", "£750 (3%)", "£2,000 (8%)"], EUR: ["€2,000 (8%)", "€1,250 (5%)", "€750 (3%)", "€2,000 (8%)"] },
        "Daily Loss": { USD: ["$1250 (5%)", "$750 (3%)", "$750 (3%)", "$1250 (5%)"], GBP: ["£1250 (5%)", "£750 (3%)", "£750 (3%)", "£1250 (5%)"], EUR: ["€1250 (5%)", "€750 (3%)", "€750 (3%)", "€1250 (5%)"] },
        "Profit Share": ["None", "None", "None", "80/20"],
        "Fee": { USD: ["$105", "", "Refunded", ""], GBP: ["£90", "", "Refunded", ""], EUR: ["€100", "", "Refunded", ""] },
        "Bonus After Stage": { USD: ["$25", "$30", "$50", ""], GBP: ["£25", "£30", "£50", ""], EUR: ["€25", "€30", "€50", ""] }
      },
      "50k": {
        "Profit": ["$4,000 (8%)", "$3,000 (6%)", "$2,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:100", "Up to 1:100", "Up to 1:100", "Up to 1:100"],
        "Mintradingdays": ["None", "None", "None", "None"],
        "Maxloss": { USD: ["$4,000 (8%)", "$2,500 (5%)", "$1,500 (3%)", "$4,000 (8%)"], GBP: ["£4,000 (8%)", "£2,500 (5%)", "£1,500 (3%)", "£4,000 (8%)"], EUR: ["€4,000 (8%)", "€2,500 (5%)", "€1,500 (3%)", "€4,000 (8%)"] },
        "Daily Loss": { USD: ["$2500 (5%)", "$1500 (3%)", "$1500 (3%)", "$2500 (5%)"], GBP: ["£2500 (5%)", "£1500 (3%)", "£1500 (3%)", "£2500 (5%)"], EUR: ["€2500 (5%)", "€1500 (3%)", "€1500 (3%)", "€2500 (5%)"] },
        "Profit Share": ["None", "None", "None", "80/20"],
        "Fee": { USD: ["$180", "", "Refunded", ""], GBP: ["£150", "", "Refunded", ""], EUR: ["€165", "", "Refunded", ""] },
        "Bonus After Stage": { USD: ["$40", "$60", "$80", ""], GBP: ["£40", "£60", "£80", ""], EUR: ["€40", "€60", "€80", ""] }
      },
      "100k": {
        "Profit": ["$8,000 (8%)", "$6,000 (6%)", "$4,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:100", "Up to 1:100", "Up to 1:100", "Up to 1:100"],
        "Mintradingdays": ["None", "None", "None", "None"],
        "Maxloss": { USD: ["$8,000 (8%)", "$5,000 (5%)", "$3,000 (3%)", "$8,000 (8%)"], GBP: ["£8,000 (8%)", "£5,000 (5%)", "£3,000 (3%)", "£8,000 (8%)"], EUR: ["€8,000 (8%)", "€5,000 (5%)", "€3,000 (3%)", "€8,000 (8%)"] },
        "Daily Loss": { USD: ["$5000 (5%)", "$3000 (3%)", "$3000 (3%)", "$5000 (5%)"], GBP: ["£5000 (5%)", "£3000 (3%)", "£3000 (3%)", "£5000 (5%)"], EUR: ["€5000 (5%)", "€3000 (3%)", "€3000 (3%)", "€5000 (5%)"] },
        "Profit Share": ["None", "None", "None", "80/20"],
        "Fee": { USD: ["$325", "", "Refunded", ""], GBP: ["£270", "", "Refunded", ""], EUR: ["€295", "", "Refunded", ""] },
        "Bonus After Stage": { USD: ["$80", "$120", "$125", ""], GBP: ["£80", "£120", "£125", ""], EUR: ["€80", "€120", "€125", ""] }
      },
      "200k": {
        "Profit": ["$16,000 (8%)", "$12,000 (6%)", "$8,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:100", "Up to 1:100", "Up to 1:100", "Up to 1:100"],
        "Mintradingdays": ["None", "None", "None", "None"],
        "Maxloss": { USD: ["$16,000 (8%)", "$10,000 (5%)", "$6,000 (3%)", "$16,000 (8%)"], GBP: ["£16,000 (8%)", "£10,000 (5%)", "£6,000 (3%)", "£16,000 (8%)"], EUR: ["€16,000 (8%)", "€10,000 (5%)", "€6,000 (3%)", "€16,000 (8%)"] },
        "Daily Loss": { USD: ["$10000 (5%)", "$6000 (3%)", "$6000 (3%)", "$10000 (5%)"], GBP: ["£10000 (5%)", "£6000 (3%)", "£6000 (3%)", "£10000 (5%)"], EUR: ["€10000 (5%)", "€6000 (3%)", "€6000 (3%)", "€10000 (5%)"] },
        "Profit Share": ["None", "None", "None", "80/20"],
        "Fee": { USD: ["$630", "", "Refunded", ""], GBP: ["£520", "", "Refunded", ""], EUR: ["€570", "", "Refunded", ""] },
        "Bonus After Stage": { USD: ["$150", "$200", "$280", ""], GBP: ["£150", "£200", "£280", ""], EUR: ["€150", "€200", "€280", ""] }
      }
    },
    "Instant Funding": {
      "10k": {
        "Profit": ["None", "", "", ""],
        "Duration": ["Unlimited", "", "", ""],
        "Leverage": ["Up to 1:100", "", "", ""],
        "Mintradingdays": ["10 Days", "", "", ""],
        "Maxloss": { USD: ["$500 (5%)", "", "", ""], GBP: ["£500 (5%)", "", "", ""], EUR: ["€500 (5%)", "", "", ""] },
        "Daily Loss": { USD: ["$300 (3%)", "", "", ""], GBP: ["£300 (3%)", "", "", ""], EUR: ["€300 (3%)", "", "", ""] },
        "Profit Share": ["70/20", "", "", ""],
        "Fee": { USD: ["$315", "Refunded", "", ""], GBP: ["£260", "Refunded", "", ""], EUR: ["€295", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "15k": {
        "Profit": ["None", "", "", ""],
        "Duration": ["Unlimited", "", "", ""],
        "Leverage": ["Up to 1:100", "", "", ""],
        "Mintradingdays": ["10 Days", "", "", ""],
        "Maxloss": { USD: ["$750 (5%)", "", "", ""], GBP: ["£750 (5%)", "", "", ""], EUR: ["€750 (5%)", "", "", ""] },
        "Daily Loss": { USD: ["$450 (3%)", "", "", ""], GBP: ["£450 (3%)", "", "", ""], EUR: ["€450 (3%)", "", "", ""] },
        "Profit Share": ["70/20", "", "", ""],
        "Fee": { USD: ["$450", "Refunded", "", ""], GBP: ["£375", "Refunded", "", ""], EUR: ["€425", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "20k": {
        "Profit": ["None", "", "", ""],
        "Duration": ["Unlimited", "", "", ""],
        "Leverage": ["Up to 1:100", "", "", ""],
        "Mintradingdays": ["10 Days", "", "", ""],
        "Maxloss": { USD: ["$1,000 (5%)", "", "", ""], GBP: ["£1,000 (5%)", "", "", ""], EUR: ["€1,000 (5%)", "", "", ""] },
        "Daily Loss": { USD: ["$600 (3%)", "", "", ""], GBP: ["£600 (3%)", "", "", ""], EUR: ["€600 (3%)", "", "", ""] },
        "Profit Share": ["70/20", "", "", ""],
        "Fee": { USD: ["$585", "Refunded", "", ""], GBP: ["£485", "Refunded", "", ""], EUR: ["€550", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "25k": {
        "Profit": ["None", "", "", ""],
        "Duration": ["Unlimited", "", "", ""],
        "Leverage": ["Up to 1:100", "", "", ""],
        "Mintradingdays": ["10 Days", "", "", ""],
        "Maxloss": { USD: ["$1,250 (5%)", "", "", ""], GBP: ["£1,250 (5%)", "", "", ""], EUR: ["€1,250 (5%)", "", "", ""] },
        "Daily Loss": { USD: ["$750 (3%)", "", "", ""], GBP: ["£750 (3%)", "", "", ""], EUR: ["€750 (3%)", "", "", ""] },
        "Profit Share": ["70/20", "", "", ""],
        "Fee": { USD: ["$720", "Refunded", "", ""], GBP: ["£595", "Refunded", "", ""], EUR: ["€675", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      }
    }
  };

  // Dynamically generate available sizes based on selected step
  const getAvailableSizes = () => {
    switch (selectedStep) {
      case "One Step":
        return ["10k", "25k", "50k", "100k", "200k"];
      case "Two Step":
        return ["10k", "25k", "50k", "100k", "200k"];
      case "Three Step":
        return ["10k", "25k", "50k", "100k", "200k"];
      case "Instant Funding":
        return ["10k", "15k", "20k", "25k"];
      default:
        return ["10k", "25k", "50k", "100k", "200k"];
    }
  };

  useEffect(() => {
    if (priceMap[selectedStep][selectedSize]?.[selectedCurrency]) {
      setPrice(priceMap[selectedStep][selectedSize][selectedCurrency]);
    } else {
      setPrice("N/A");
    }
    // Reset selectedSize if it's not available for the new step
    const availableSizes = getAvailableSizes();
    if (!availableSizes.includes(selectedSize)) {
      setSelectedSize(availableSizes[0]);
    }
  }, [selectedStep, selectedSize, selectedCurrency]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

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

  const handleCurrencyChange = (currency) => {
    setIsAnimating(true);
    setSelectedCurrency(currency);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const steps = ["One Step", "Two Step", "Three Step", "Instant Funding"]; //"Instant Funding" get this back inside when we enable it.
  const currencies = ["USD", "GBP", "EUR"];
  const baseMetrics = ["Profit", "Duration", "Leverage", "Mintradingdays", "Maxloss", "Daily Loss", "Profit Share", "Fee"];
  const metrics = selectedStep === "Three Step" ? [...baseMetrics, "Bonus After Stage"] : baseMetrics;

  const getTableData = (metric) => {
    if (!tableData[selectedStep] || !tableData[selectedStep][selectedSize]) {
      return Array(columns).fill("");
    }
    if (metric === "Fee" && tableData[selectedStep][selectedSize][metric]?.[selectedCurrency]) {
      return tableData[selectedStep][selectedSize][metric][selectedCurrency];
    } else if ((metric === "Maxloss" || metric === "Daily Loss") && tableData[selectedStep][selectedSize][metric]?.[selectedCurrency]) {
      return tableData[selectedStep][selectedSize][metric][selectedCurrency];
    } else if (metric === "Bonus After Stage" && tableData[selectedStep][selectedSize][metric]?.[selectedCurrency]) {
      return tableData[selectedStep][selectedSize][metric][selectedCurrency];
    }
    return tableData[selectedStep][selectedSize][metric] || Array(columns).fill("");
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
  const availableSizes = getAvailableSizes();

  const renderDesktopTable = () => (
    <table className="w-full table-auto" aria-label="Trading Challenge Details" style={{ borderSpacing: '0' }}>
      <thead>
        <tr className="bg-gray-100 text-gray-800" style={{ borderBottom: '2px solid #e5e7eb', borderRadius: '0.5rem 0.5rem 0 0', overflow: 'hidden' }}>
          <th className="p-4 text-left font-medium text-sm sm:text-base sticky left-0 bg-gray-100" style={{ color: '#1f2937', zIndex: 1, minWidth: '120px' }}>{t('pricingTable.metricsLabel')}</th>
          {columnHeaders.slice(0, columns).map((header, index) => (
            header ? (
              <th
                key={index}
                className="p-4 text-left font-medium text-sm sm:text-base"
                style={{ color: '#1f2937', minWidth: '120px' }}
              >
                {t(`pricingTable.${getTranslationKey(header)}`)}
              </th>
            ) : null
          ))}
        </tr>
      </thead>
      <tbody>
        {metrics.map((metric) => (
          <tr key={metric} className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-4 font-medium text-sm sm:text-base sticky left-0 bg-white" style={{ color: '#374151', zIndex: 1, minWidth: '120px' }}>{t(`pricingTable.${metric.toLowerCase().replace(/ /g, '')}`)}</td>
            {getTableData(metric).slice(0, columns).map((value, index) => (
              <td
                key={index}
                className={`p-4 text-sm sm:text-base ${isAnimating ? 'animate-change' : ''}`}
                style={{ color: '#4b5563', minWidth: '120px' }}
              >
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div
      id="start-challenge"
      className="rounded-rt-[40px] relative z-0 pt-[90px] bg-[#151515] transition duration-500 ease-in-out overflow-hidden pb-[160px]"
    >
      <div
        className="absolute left-[50%] top-0 h-full w-[1500px] sm:w-[2000px] xl:w-[3061px] translate-x-[-50%]"
        style={{
          background: 'linear-gradient(90.01deg, rgb(42 42 42) 18.62%, #55ff9d 81.47%)',
          borderRadius: '50% 50% 0px 0px',
        }}
      />
      <div
        className="absolute left-[50%] top-[60px] w-[2300px] translate-x-[-50%]"
        style={{
          borderRadius: '50% 50% 0px 0px',
          height: 'calc(100% - 60px)',
          display: 'flow-root',
        }}
      >
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'inherit',
            border: '1px solid transparent',
            background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.3) 4.46%, rgba(0, 0, 0, 0) 50.25%, rgba(0, 0, 0, 0.3) 95.61%)',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'exclude',
          }}
        />
      </div>
      <div
        className="absolute left-[50%] top-[120px] w-[2000px] translate-x-[-50%]"
        style={{
          borderRadius: '50% 50% 0px 0px',
          height: 'calc(100% - 120px)',
          display: 'flow-root',
        }}
      >
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'inherit',
            border: '1px solid transparent',
            background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.3) 4.46%, rgba(0, 0, 0, 0) 50.25%, rgba(0, 0, 0, 0.3) 95.61%)',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'exclude',
          }}
        />
      </div>
      <div
        className="absolute left-[50%] top-[180px] w-[1700px] translate-x-[-50%]"
        style={{
          borderRadius: '50% 50% 0px 0px',
          height: 'calc(100% - 180px)',
          display: 'flow-root',
        }}
      >
        <div
          className="absolute left-0 top-0 h-full w-full"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'inherit',
            border: '1px solid transparent',
            background: 'linear-gradient(270deg, rgba(0, 0, 0, 0.3) 4.46%, rgba(0, 0, 0, 0) 50.25%, rgba(0, 0, 0, 0.3) 95.61%)',
            WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'destination-out',
            maskComposite: 'exclude',
          }}
        />
      </div>
      <div
        className="absolute left-0 top-0 h-full w-full"
        style={{
          background: 'linear-gradient(rgba(18, 27, 113, 0) 0%, rgb(69 69 69) 60.24%, rgb(18 18 18) 100%)',
        }}
      />
      <div className="z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h2 className="text-5xl lg:text-5xl font-extrabold tracking-tight text-center text-white">
              {t('pricingTable.chooseTheBestPlan')}
            </h2>
            <h2 className="mt-2 text-5xl lg:text-5xl font-extrabold tracking-tight text-center">
              <span></span>
            </h2>
          </div>
          <div className="ps_wrapper">
            <div className="ps_intro">
              <p className="mb-14 mt-10 text-white text-center">
                {t('pricingTable.theChoiceIsYours')}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Currency selector at the top */}
            <div className="lg:col-span-12 mb-4">
              <div
                className="bg-white rounded-lg shadow-md p-4 sm:p-6"
                style={{
                  border: '1px solid #e5e7eb',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '20px',
                  flexWrap: 'wrap', // Allow wrapping on smaller screens
                }}
              >
                {/* Currency Selector */}
                  <div
                    className="flex items-center gap-4"
                    style={{ flex: '1 1 auto', minWidth: '200px' }}
                  >
                    <h6
                      className="text-lg font-semibold mb-0"
                      style={{ color: '#1f2937', whiteSpace: 'nowrap' }}
                    >
                      {t('pricingTable.currencyLabel')}
                    </h6>
                    <div className="flex gap-2 flex-wrap">
                      {currencies.map((currency) => (
                        <button
                          key={currency}
                          className={`px-4 py-2 rounded-md font-medium text-sm sm:text-base select-none transition-all duration-300 ease-in-out flex items-center justify-center min-w-[60px] h-10 ${
                            selectedCurrency === currency
                              ? 'bg-gradient-to-r from-[#1a6f3d] to-[#145c33] text-white'
                              : 'bg-gray-200 text-black hover:bg-gray-300'
                          }`}
                          onClick={() => handleCurrencyChange(currency)}
                          style={{ minWidth: '0' }} // Allow shrinking on mobile
                        >
                          {currency === 'USD' && (
                            <img
                              src={usdFlag}
                              alt="USD Flag"
                              style={{ width: '24px', height: '24px', marginRight: '4px' }}
                            />
                          )}
                          {currency === 'GBP' && (
                            <img
                              src={gbpFlag}
                              alt="GBP Flag"
                              style={{ width: '24px', height: '24px', marginRight: '4px' }}
                            />
                          )}
                          {currency === 'EUR' && (
                            <img
                              src={eurFlag}
                              alt="EUR Flag"
                              style={{ width: '24px', height: '24px', marginRight: '4px' }}
                            />
                          )}
                          {currency}
                        </button>
                      ))}
                    </div>
                  </div>

                {/* Add Price Display Here */}
                <div
                  className="text-center"
                  style={{ flex: '1 1 auto', minWidth: '150px' }}
                >
                  <div
                    className={`flex items-center justify-center gap-1 px-4 py-2 rounded-md ${
                      isAnimating ? 'animate-pulse' : ''
                    }`}
                    style={{
                      background: 'linear-gradient(to right, #1a6f3d, #145c33)',
                      color: '#ffffff',
                      minWidth: '150px',
                    }}
                  >
                    <span className="text-sm sm:text-base font-medium" style={{ color: '#d1d5db' }}>
                      {t('pricingTable.oneTimeFee')}
                    </span>
                    <span className="ml-6 text-xl sm:text-4xl font-bold">
                      {price}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Left sidebar with options */}
            <div className="lg:col-span-3 space-y-4">
              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6" style={{ border: '1px solid #e5e7eb' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#1f2937' }}>{t('pricingTable.stepsLabel')}</h3>
                <div className="flex flex-col gap-2">
                  {steps.map((step) => (
                    <button
                      key={step}
                      className={`text-left px-4 py-3 rounded-md font-medium text-sm sm:text-base select-none ${selectedStep === step ? 'active' : ''}`}
                      onClick={() => handleStepChange(step)}
                      style={{
                        background: selectedStep === step ? 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)' : 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)',
                        color: selectedStep === step ? '#000000' : '#ffffff',
                        transition: 'background 0.6s ease, color 0.6s ease, transform 0.3s ease, box-shadow 0.3s ease',
                        display: 'inline-block',
                        transform: selectedStep === step ? 'scale(1.05)' : 'scale(1)',
                        boxShadow: selectedStep === step ? '0 4px 6px -1px rgba(0, 128, 0, 0.5)' : 'none',
                      }}
                      onMouseEnter={(e) => {
                        if (selectedStep !== step) {
                          e.currentTarget.style.background = 'linear-gradient(to right, rgba(21, 100, 55, 0.9), rgba(29, 131, 72, 0.9), rgba(14, 63, 36, 0.9))';
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 128, 0, 0.5)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedStep !== step) {
                          e.currentTarget.style.background = 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)';
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      {t(`pricingTable.${step.toLowerCase().replace(/ /g, '')}`)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6" style={{ border: '1px solid #e5e7eb' }}>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#1f2937' }}>{t('pricingTable.sizeLabel')}</h3>
                <div className="flex flex-col gap-2">
                  {availableSizes.map((size) => (
                    <button
                      key={size}
                      className={`text-left px-4 py-3 rounded-md font-medium text-sm sm:text-base select-none ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => handleSizeChange(size)}
                      style={{
                        background: selectedSize === size ? 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)' : 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)',
                        color: selectedSize === size ? '#000000' : '#ffffff',
                        transition: 'background 0.6s ease, color 0.6s ease, transform 0.3s ease, box-shadow 0.3s ease',
                        display: 'inline-block',
                        transform: selectedSize === size ? 'scale(1.05)' : 'scale(1)',
                        boxShadow: selectedSize === size ? '0 4px 6px -1px rgba(0, 128, 0, 0.5)' : 'none',
                      }}
                      onMouseEnter={(e) => {
                        if (selectedSize !== size) {
                          e.currentTarget.style.background = 'linear-gradient(to right, rgba(21, 100, 55, 0.9), rgba(29, 131, 72, 0.9), rgba(14, 63, 36, 0.9))';
                          e.currentTarget.style.transform = 'scale(1.05)';
                          e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 128, 0, 0.5)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (selectedSize !== size) {
                          e.currentTarget.style.background = 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)';
                          e.currentTarget.style.transform = 'scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                        }
                      }}
                    >
                      <div className="flex items-center">
                        {size} {t('pricingTable.challenge')}
                        {size === "100k" && (
                          <svg
                            viewBox="-8.21 -8.21 98.56 98.56"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#f7e59d"
                            className="w-5 h-5 ml-16"
                          >
                            <g>
                              <path d="M503.592,662.923v0l41.02-13.494-27.587-5.138-13.433,18.629Z" fill="#f7e59d" transform="translate(-462.47 -619.736)" />
                              <path d="M525.465,669.942l19.147-20.51-41.02,13.494Z" fill="#f7e59d" transform="translate(-462.47 -619.736)" />
                              <path d="M481.772,670.1,478.33,697.95l25.256-35.023Z" fill="#f7e59d" transform="translate(-462.47 -619.736)" />
                              <path d="M503.586,662.926,478.33,697.95l25.345-12.057-.083-22.967Z" fill="#f7e59d" transform="translate(-462.47 -619.736)" />
                              <path d="M517.025,644.294l-13.588-24.559.155,43.188Z" fill="#f7e59d" transform="translate(-462.47 -619.736)" />
                              <path d="M503.592,662.926h0L529.1,697.77l-3.632-27.828Z" fill="#f7e59d" transform="translate(-462.47 -619.736)" />
                              <path d="M503.592,662.926l.083,22.967L529.1,697.77l-25.505-34.844Z" fill="#f7e59d" transform="translate(-462.47 -619.736)" />
                              <path d="M503.592,662.923h0l-.155-43.187-13.416,24.652,13.57,18.535Z" fill="#f7e59d" transform="translate(-462.47 -619.736)" />
                              <path d="M490.021,644.388l-27.551,5.336,41.122,13.2Z" fill="#f7e59d" transform="translate(-462.47 -619.736)" />
                              <path d="M503.592,662.923h0l-41.122-13.2,19.3,20.375,21.814-7.173Z" fill="#f7e59d" transform="translate(-462.47 -619.736)" />
                            </g>
                          </svg>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                {/* Add Discount Message and Countdown Timer Below Size Buttons */}
                <div className="mt-6 p-5 bg-gradient-to-br from-[#1a6f3d] to-[#145c33] border border-gray-800 rounded-xl shadow-lg text-center text-white w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto">
                  <p className="text-lg sm:text-xl font-semibold sm:font-bold leading-snug">
                    Exclusive Offer:&nbsp;
                    <span className="px-[10px] w-[175px] h-[35px] rounded-[50px] overflow-hidden flex items-center gap-1 border-[1px] border-[#1a6f3d]" style={{ background: 'linear-gradient(0deg, #1a6f3d 0%, #145c33 100%)' }}>
                      <p className="px-[5px] py-[0px] bg-[#FFC107] text-xs font-bold text-[#1a6f3d] uppercase rounded-[50px]">USE CODE</p>
                      <p className="text-xs font-bold text-white uppercase text-center flex items-center justify-center gap-1">
                        <span>NEW</span>
                        <button
                          type="button"
                          className="cursor-pointer transition-all duration-300 relative"
                          onClick={() => {
                            navigator.clipboard.writeText("NEW");
                            alert("Copied to clipboard!");
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 19 19" fill="none">
                            <path d="M18.3672 6.86819C18.3672 6.0013 17.8611 5.24305 17.1315 4.87266C16.7405 4.64074 16.2358 4.77709 16.0142 5.17408C15.7973 5.56301 15.9353 6.0543 16.3235 6.27245C16.5808 6.34745 16.7536 6.57732 16.7536 6.86818L16.7536 16.1309C16.7536 16.4885 16.491 16.7511 16.1334 16.7511L6.8675 16.7511C6.58732 16.7511 6.36734 16.5896 6.28439 16.3479C6.06625 15.9596 5.57416 15.8216 5.18523 16.0386C4.78824 16.2601 4.65189 16.7649 4.88382 17.1559C5.2578 17.8729 6.0105 18.3679 6.8675 18.3679L16.1334 18.3679C17.3583 18.3679 18.3672 17.3559 18.3672 16.1309L18.3672 6.86819ZM14.3256 2.82901C14.3256 1.60406 13.3176 0.592041 12.0926 0.592041L2.82675 0.59204C1.6018 0.59204 0.592934 1.60406 0.592934 2.82901L0.592933 12.0917C0.592933 13.3167 1.60179 14.3287 2.82675 14.3287L12.0926 14.3287C13.3176 14.3287 14.3256 13.3167 14.3256 12.0917L14.3256 2.82901ZM12.7128 2.82901L12.7128 12.0917C12.7128 12.4494 12.4503 12.7119 12.0926 12.7119L2.82675 12.7119C2.4691 12.7119 2.20576 12.4494 2.20576 12.0917L2.20576 2.82901C2.20576 2.47136 2.4691 2.20881 2.82675 2.20881L12.0926 2.20881C12.4503 2.20881 12.7128 2.47136 12.7128 2.82901Z" fill="white"></path>
                          </svg>
                        </button>
                      </p>
                    </span>
                    for <span className="font-bold">25% Off</span> !
                  </p>
                  
                  <div className="mt-3 text-sm sm:text-base flex flex-wrap items-center justify-center gap-2">
                    <span className="font-medium">⏳ Time Remaining:</span>
                    <span className="font-mono bg-white text-[#1a6f3d] px-3 py-1 rounded font-semibold shadow-sm" id="countdown">
                      {`${Math.floor(timeLeft / 86400)}d ${Math.floor((timeLeft % 86400) / 3600)}h ${Math.floor((timeLeft % 3600) / 60)}m ${timeLeft % 60}s`}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center" style={{ border: '1px solid #e5e7eb' }}>
                <h2 className="text-2xl sm:text-4xl font-bold" style={{ color: '#1d8348', background: 'linear-gradient(90deg, #1d8348, #28a745)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{price}</h2>
                <p className="text-gray-500 mt-1 text-sm sm:text-base">{t('pricingTable.oneTimeFee')}</p>
              </div>
            </div>

            {/* Right side table */}
            <div className="lg:col-span-9 h-full">
              <div className="bg-white rounded-lg shadow-md" style={{ border: '1px solid #e5e7eb', minHeight: '100%', position: 'relative', overflow: 'hidden' }}>
                <div className="table-container h-full p-0">
                  <div className="desktop-table hidden sm:block">
                    {renderDesktopTable()}
                  </div>
                  <div className="mobile-table block sm:hidden">
                    <Swiper
                      modules={[Pagination, Navigation]}
                      spaceBetween={10}
                      slidesPerView={1}
                      pagination={{ clickable: true }}
                      navigation
                      style={{ padding: '30px 10px 40px 10px', height: '100%' }}
                    >
                      {columnHeaders.slice(0, columns).map((header, index) => (
                        header ? (
                          <SwiperSlide key={index}>
                            <table className="w-full table-auto" aria-label={t('pricingTable.tradingChallengeDetails', { header: t(`pricingTable.${header.toLowerCase().replace(/ /g, '')}`) })}>
                              <thead>
                                <tr className="bg-gray-100 text-gray-800" style={{ borderBottom: '2px solid #e5e7eb', borderRadius: '0.5rem 0.5rem 0 0', overflow: 'hidden' }}>
                                  <th className="p-4 text-left font-medium text-sm" style={{ color: '#1f2937', minWidth: '100px' }}>{t('pricingTable.metricsLabel')}</th>
                                  <th
                                    className="p-4 text-left font-medium text-sm sm:text-base"
                                    style={{ color: '#1f2937', minWidth: '120px' }}
                                  >
                                    {t(`pricingTable.${getTranslationKey(header)}`)}
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {metrics.map((metric) => (
                                  <tr key={metric} className="border-b border-gray-200 hover:bg-gray-100">
                                    <td className="p-4 font-medium text-sm" style={{ color: '#374151', minWidth: '100px' }}>{t(`pricingTable.${metric.toLowerCase().replace(/ /g, '')}`)}</td>
                                    <td
                                      className={`p-4 text-sm ${isAnimating ? 'animate-change' : ''}`}
                                      style={{ color: '#4b5563', minWidth: '100px' }}
                                    >
                                      {getTableData(metric)[index]}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </SwiperSlide>
                        ) : null
                      ))}
                    </Swiper>
                  </div>
                </div>
                <div className="p-6 text-center border-t border-gray-200" style={{ backgroundColor: '#f9fafb', position: 'sticky', bottom: 0, left: 0, width: '100%', zIndex: 2 }}>
                  <p className="text-gray-600 mt-10 mb-4 max-w-lg mx-auto text-sm sm:text-base" style={{ color: '#6b7280' }}>
                    {t('pricingTable.weAllowOurTraders')}
                  </p>
                  <button
                    className="font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-md text-sm sm:text-base text-white select-none"
                    style={{
                      background: 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)',
                      color: '#ffffff',
                      transition: 'background 0.6s ease, color 0.6s ease, transform 0.3s ease, box-shadow 0.3s ease',
                      display: 'inline-block',
                      transform: 'scale(1)',
                      boxShadow: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(to right, rgba(21, 100, 55, 0.9), rgba(29, 131, 72, 0.9), rgba(14, 63, 36, 0.9))';
                      e.currentTarget.style.color = '#000000';
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 128, 0, 0.5)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'linear-gradient(to right, #1a6f3d, #1d8348, #145c33)';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    onClick={() => window.open('https://active.ecapfx.com/promotion/challenge', '_blank', 'noopener,noreferrer')}
                  >
                    {t('pricingTable.startChallenge')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop separator */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#1d8348] to-transparent hidden shadow-lg sm:block z-20" />
      <style jsx>{`
        @media (max-width: 640px) {
          .max-w-7xl {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .grid {
            display: flex;
            flex-direction: column;
          }
          .lg\\:col-span-3, .lg\\:col-span-9, .lg\\:col-span-12 {
            width: 100%;
          }
          .table-container {
            overflow-x: hidden;
          }
          .mobile-table {
            padding-bottom: 40px;
          }
          .swiper-button-next,
          .swiper-button-prev {
            width: 24px;
            height: 24px;
            background: rgb(255, 255, 255);
            border-radius: 50%;
            color: #1d8348;
            margin-top: 0;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            transition: background 0.3s ease, transform 0.3s ease;
          }
          .swiper-button-prev {
            left: -6px;
          }
          .swiper-button-next {
            right: -6px;
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: rgb(190, 190, 190);
            transform: scale(1.1);
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 12px;
            font-weight: bold;
          }
          .swiper-pagination-bullet {
            background: #1d8348;
            width: 8px;
            height: 8px;
          }
          .swiper-pagination-bullet-active {
            background: #145c33;
          }
          th, td {
            padding: 0.75rem;
            min-width: 100px;
          }
          .text-5xl {
            font-size: 2rem;
          }
          .ps_wrapper p {
            font-size: 0.875rem;
          }
        }
        .animate-change {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default PricingTable;