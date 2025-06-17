import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import './pricingtable.css';
import usdFlag from '../assets/usd-flag.png';
import gbpFlag from '../assets/gbp-flag.png';
import eurFlag from '../assets/eur-flag.png';

function PricingTable() {
  const [selectedStep, setSelectedStep] = useState("Three Step");
  const [selectedSize, setSelectedSize] = useState("10k");
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [price, setPrice] = useState("$55");
  const [isAnimating, setIsAnimating] = useState(false);

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
        "Profit Target": ["$800 (8%)", "None", "", ""],
        "Duration": ["Unlimited", "Unlimited", "", ""],
        "Leverage": ["Up to 1:50", "Up to 1:50", "", ""],
        "Min Trading Days": ["7 Days", "None", "", ""],
        "Max Loss": { USD: ["$500 (5%)", "None", "", ""], GBP: ["£500 (5%)", "None", "", ""], EUR: ["€500 (5%)", "None", "", ""] },
        "Daily Loss": { USD: ["$300 (3%)", "None", "", ""], GBP: ["£300 (3%)", "None", "", ""], EUR: ["€300 (3%)", "None", "", ""] },
        "Profit Share": ["None", "90/10", "", ""],
        "Fee": { USD: ["$80", "Refunded", "", ""], GBP: ["£65", "Refunded", "", ""], EUR: ["€75", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "25k": {
        "Profit Target": ["$2,000 (8%)", "None", "", ""],
        "Duration": ["Unlimited", "Unlimited", "", ""],
        "Leverage": ["Up to 1:50", "Up to 1:50", "", ""],
        "Min Trading Days": ["7 Days", "None", "", ""],
        "Max Loss": { USD: ["$1,250 (5%)", "None", "", ""], GBP: ["£1,250 (5%)", "None", "", ""], EUR: ["€1,250 (5%)", "None", "", ""] },
        "Daily Loss": { USD: ["$750 (3%)", "None", "", ""], GBP: ["£750 (3%)", "None", "", ""], EUR: ["€750 (3%)", "None", "", ""] },
        "Profit Share": ["None", "90/10", "", ""],
        "Fee": { USD: ["$145", "Refunded", "", ""], GBP: ["£115", "Refunded", "", ""], EUR: ["€130", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "50k": {
        "Profit Target": ["$5,000 (10%)", "$4,000 (8%)", "$2,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": { USD: ["$2,500 (5%)", "$2,000 (4%)", "$1,000 (2%)", "None"], GBP: ["£2,500 (5%)", "£2,000 (4%)", "£1,000 (2%)", "None"], EUR: ["€2,500 (5%)", "€2,000 (4%)", "€1,000 (2%)", "None"] },
        "Daily Loss": { USD: ["$1,500 (3%)", "$1,200 (2.4%)", "$600 (1.2%)", "None"], GBP: ["£1,500 (3%)", "£1,200 (2.4%)", "£600 (1.2%)", "None"], EUR: ["€1,500 (3%)", "€1,200 (2.4%)", "€600 (1.2%)", "None"] },
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": { USD: ["$260", "Refunded", "", ""], GBP: ["£215", "Refunded", "", ""], EUR: ["€240", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "100k": {
        "Profit Target": ["$10,000 (10%)", "$8,000 (8%)", "$4,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": { USD: ["$5,000 (5%)", "$4,000 (4%)", "$2,000 (2%)", "None"], GBP: ["£5,000 (5%)", "£4,000 (4%)", "£2,000 (2%)", "None"], EUR: ["€5,000 (5%)", "€4,000 (4%)", "€2,000 (2%)", "None"] },
        "Daily Loss": { USD: ["$3,000 (3%)", "$2,400 (2.4%)", "$1,200 (1.2%)", "None"], GBP: ["£3,000 (3%)", "£2,400 (2.4%)", "£1,200 (1.2%)", "None"], EUR: ["€3,000 (3%)", "€2,400 (2.4%)", "€1,200 (1.2%)", "None"] },
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": { USD: ["$440", "Refunded", "", ""], GBP: ["£365", "Refunded", "", ""], EUR: ["€405", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "200k": {
        "Profit Target": ["$20,000 (10%)", "$16,000 (8%)", "$8,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": { USD: ["$10,000 (5%)", "$8,000 (4%)", "$4,000 (2%)", "None"], GBP: ["£10,000 (5%)", "£8,000 (4%)", "£4,000 (2%)", "None"], EUR: ["€10,000 (5%)", "€8,000 (4%)", "€4,000 (2%)", "None"] },
        "Daily Loss": { USD: ["$6,000 (3%)", "$4,800 (2.4%)", "$2,400 (1.2%)", "None"], GBP: ["£6,000 (3%)", "£4,800 (2.4%)", "£2,400 (1.2%)", "None"], EUR: ["€6,000 (3%)", "€4,800 (2.4%)", "€2,400 (1.2%)", "None"] },
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": { USD: ["$855", "Refunded", "", ""], GBP: ["£705", "Refunded", "", ""], EUR: ["€785", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      }
    },
    "Two Step": {
      "10k": {
        "Profit Target": ["$1,000 (10%)", "$500 (5%)", "None", ""],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", ""],
        "Leverage": ["Up to 1:100", "Up to 1:100", "Up to 1:100", ""],
        "Min Trading Days": ["None", "None", "None", ""],
        "Max Loss": { USD: ["$1,000 (10%)", "$500 (5%)", "None", ""], GBP: ["£1,000 (10%)", "£500 (5%)", "None", ""], EUR: ["€1,000 (10%)", "€500 (5%)", "None", ""] },
        "Daily Loss": { USD: ["$500 (5%)", "$250 (2.5%)", "None", ""], GBP: ["£500 (5%)", "£250 (2.5%)", "None", ""], EUR: ["€500 (5%)", "€250 (2.5%)", "None", ""] },
        "Profit Share": ["None", "None", "90/10", ""],
        "Fee": { USD: ["$60", "Refunded", "", ""], GBP: ["£50", "Refunded", "", ""], EUR: ["€60", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "25k": {
        "Profit Target": ["$2,000 (8%)", "$1,250 (5%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["7 Days", "None", "None"],
        "Max Loss": { USD: ["$1,500 (6%)", "$1,000 (4%)", "None"], GBP: ["£1,500 (6%)", "£1,000 (4%)", "None"], EUR: ["€1,500 (6%)", "£1,000 (4%)", "None"] },
        "Daily Loss": { USD: ["$750 (3%)", "$500 (2%)", "None"], GBP: ["£750 (3%)", "£500 (2%)", "None"], EUR: ["€750 (3%)", "£500 (2%)", "None"] },
        "Profit Share": ["None", "None", "90/10"],
        "Fee": { USD: ["$125", "Refunded", ""], GBP: ["£100", "Refunded", ""], EUR: ["€110", "Refunded", ""] },
        "Bonus After Stage": { USD: ["", "", ""], GBP: ["", "", ""], EUR: ["", "", ""] }
      },
      "50k": {
        "Profit Target": ["$5,000 (10%)", "$4,000 (8%)", "$2,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": { USD: ["$2,500 (5%)", "$2,000 (4%)", "$1,000 (2%)", "None"], GBP: ["£2,500 (5%)", "£2,000 (4%)", "£1,000 (2%)", "None"], EUR: ["€2,500 (5%)", "€2,000 (4%)", "€1,000 (2%)", "None"] },
        "Daily Loss": { USD: ["$1,500 (3%)", "$1,200 (2.4%)", "$600 (1.2%)", "None"], GBP: ["£1,500 (3%)", "£1,200 (2.4%)", "£600 (1.2%)", "None"], EUR: ["€1,500 (3%)", "€1,200 (2.4%)", "€600 (1.2%)", "None"] },
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": { USD: ["$205", "Refunded", "", ""], GBP: ["£170", "Refunded", "", ""], EUR: ["€185", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "100k": {
        "Profit Target": ["$10,000 (10%)", "$8,000 (8%)", "$4,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": { USD: ["$5,000 (5%)", "$4,000 (4%)", "$2,000 (2%)", "None"], GBP: ["£5,000 (5%)", "£4,000 (4%)", "£2,000 (2%)", "None"], EUR: ["€5,000 (5%)", "€4,000 (4%)", "€2,000 (2%)", "None"] },
        "Daily Loss": { USD: ["$3,000 (3%)", "$2,400 (2.4%)", "$1,200 (1.2%)", "None"], GBP: ["£3,000 (3%)", "£2,400 (2.4%)", "£1,200 (1.2%)", "None"], EUR: ["€3,000 (3%)", "€2,400 (2.4%)", "€1,200 (1.2%)", "None"] },
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": { USD: ["$370", "Refunded", "", ""], GBP: ["£305", "Refunded", "", ""], EUR: ["€335", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "200k": {
        "Profit Target": ["$20,000 (10%)", "$16,000 (8%)", "$8,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": { USD: ["$10,000 (5%)", "$8,000 (4%)", "$4,000 (2%)", "None"], GBP: ["£10,000 (5%)", "£8,000 (4%)", "£4,000 (2%)", "None"], EUR: ["€10,000 (5%)", "€8,000 (4%)", "€4,000 (2%)", "None"] },
        "Daily Loss": { USD: ["$6,000 (3%)", "$4,800 (2.4%)", "$2,400 (1.2%)", "None"], GBP: ["£6,000 (3%)", "£4,800 (2.4%)", "£2,400 (1.2%)", "None"], EUR: ["€6,000 (3%)", "€4,800 (2.4%)", "€2,400 (1.2%)", "None"] },
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": { USD: ["$720", "Refunded", "", ""], GBP: ["£600", "Refunded", "", ""], EUR: ["€650", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      }
    },
    "Three Step": {
      "10k": {
        "Profit Target": ["$1,000 (10%)", "$800 (8%)", "$400 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": { USD: ["$500 (5%)", "$400 (4%)", "$200 (2%)", "None"], GBP: ["£500 (5%)", "£400 (4%)", "£200 (2%)", "None"], EUR: ["€500 (5%)", "€400 (4%)", "€200 (2%)", "None"] },
        "Daily Loss": { USD: ["$300 (3%)", "$240 (2.4%)", "$120 (1.2%)", "None"], GBP: ["£300 (3%)", "£240 (2.4%)", "£120 (1.2%)", "None"], EUR: ["€300 (3%)", "€240 (2.4%)", "€120 (1.2%)", "None"] },
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": { USD: ["$55", "Refunded", "", ""], GBP: ["£45", "Refunded", "", ""], EUR: ["€50", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["$10", "$15", "$20", "$25"], GBP: ["£10", "£15", "£20", "£25"], EUR: ["€10", "€15", "€20", "€25"] }
      },
      "25k": {
        "Profit Target": ["$2,000 (10%)", "$2000 (8%)", "$1000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": { USD: ["$1250 (5%)", "$1000 (4%)", "$500 (2%)", "None"], GBP: ["£1250 (5%)", "£1000 (4%)", "£500 (2%)", "None"], EUR: ["€1250 (5%)", "€1000 (4%)", "€500 (2%)", "None"] },
        "Daily Loss": { USD: ["$750 (3%)", "$600 (2.4%)", "$300 (1.2%)", "None"], GBP: ["£750 (3%)", "£600 (2.4%)", "£300 (1.2%)", "None"], EUR: ["€750 (3%)", "€600 (2.4%)", "€300 (1.2%)", "None"] },
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": { USD: ["$105", "Refunded", "", ""], GBP: ["£90", "Refunded", "", ""], EUR: ["€100", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["$25", "$37.50", "$50", "$62.50"], GBP: ["£25", "£37.50", "£50", "£62.50"], EUR: ["€25", "€37.50", "€50", "€62.50"] }
      },
      "50k": {
        "Profit Target": ["$5,000 (10%)", "$4,000 (8%)", "$2,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": { USD: ["$2,500 (5%)", "$2,000 (4%)", "$1,000 (2%)", "None"], GBP: ["£2,500 (5%)", "£2,000 (4%)", "£1,000 (2%)", "None"], EUR: ["€2,500 (5%)", "€2,000 (4%)", "€1,000 (2%)", "None"] },
        "Daily Loss": { USD: ["$1,500 (3%)", "$1,200 (2.4%)", "$600 (1.2%)", "None"], GBP: ["£1,500 (3%)", "£1,200 (2.4%)", "£600 (1.2%)", "None"], EUR: ["€1,500 (3%)", "€1,200 (2.4%)", "€600 (1.2%)", "None"] },
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": { USD: ["$180", "Refunded", "", ""], GBP: ["£150", "Refunded", "", ""], EUR: ["€165", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["$50", "$75", "$100", "$125"], GBP: ["£50", "£75", "£100", "£125"], EUR: ["€50", "€75", "€100", "€125"] }
      },
      "100k": {
        "Profit Target": ["$10,000 (10%)", "$8,000 (8%)", "$4,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": { USD: ["$5,000 (5%)", "$4,000 (4%)", "$2,000 (2%)", "None"], GBP: ["£5,000 (5%)", "£4,000 (4%)", "£2,000 (2%)", "None"], EUR: ["€5,000 (5%)", "€4,000 (4%)", "€2,000 (2%)", "None"] },
        "Daily Loss": { USD: ["$3,000 (3%)", "$2,400 (2.4%)", "$1,200 (1.2%)", "None"], GBP: ["£3,000 (3%)", "£2,400 (2.4%)", "£1,200 (1.2%)", "None"], EUR: ["€3,000 (3%)", "€2,400 (2.4%)", "€1,200 (1.2%)", "None"] },
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": { USD: ["$325", "Refunded", "", ""], GBP: ["£270", "Refunded", "", ""], EUR: ["€295", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["$100", "$150", "$200", "$250"], GBP: ["£100", "£150", "£200", "£250"], EUR: ["€100", "€150", "€200", "€250"] }
      },
      "200k": {
        "Profit Target": ["$20,000 (10%)", "$16,000 (8%)", "$8,000 (4%)", "None"],
        "Duration": ["Unlimited", "Unlimited", "Unlimited", "Indefinite"],
        "Leverage": ["Up to 1:50", "Up to 1:50", "Up to 1:50", "Up to 1:50"],
        "Min Trading Days": ["None", "None", "None", "None"],
        "Max Loss": { USD: ["$10,000 (5%)", "$8,000 (4%)", "$4,000 (2%)", "None"], GBP: ["£10,000 (5%)", "£8,000 (4%)", "£4,000 (2%)", "None"], EUR: ["€10,000 (5%)", "€8,000 (4%)", "€4,000 (2%)", "None"] },
        "Daily Loss": { USD: ["$6,000 (3%)", "$4,800 (2.4%)", "$2,400 (1.2%)", "None"], GBP: ["£6,000 (3%)", "£4,800 (2.4%)", "£2,400 (1.2%)", "None"], EUR: ["€6,000 (3%)", "€4,800 (2.4%)", "€2,400 (1.2%)", "None"] },
        "Profit Share": ["None", "None", "None", "90/10"],
        "Fee": { USD: ["$630", "Refunded", "", ""], GBP: ["£520", "Refunded", "", ""], EUR: ["€570", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["$200", "$300", "$400", "$500"], GBP: ["£200", "£300", "£400", "£500"], EUR: ["€200", "€300", "€400", "€500"] }
      }
    },
    "Instant Funding": {
      "10k": {
        "Profit Target": ["None", "", "", ""],
        "Duration": ["Unlimited", "", "", ""],
        "Leverage": ["Up to 1:50", "", "", ""],
        "Min Trading Days": ["10 Days", "", "", ""],
        "Max Loss": { USD: ["$500 (5%)", "", "", ""], GBP: ["£500 (5%)", "", "", ""], EUR: ["€500 (5%)", "", "", ""] },
        "Daily Loss": { USD: ["$300 (3%)", "", "", ""], GBP: ["£300 (3%)", "", "", ""], EUR: ["€300 (3%)", "", "", ""] },
        "Profit Share": ["90/10", "", "", ""],
        "Fee": { USD: ["$315", "Refunded", "", ""], GBP: ["£260", "Refunded", "", ""], EUR: ["€295", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "15k": {
        "Profit Target": ["None", "", "", ""],
        "Duration": ["Unlimited", "", "", ""],
        "Leverage": ["Up to 1:50", "", "", ""],
        "Min Trading Days": ["10 Days", "", "", ""],
        "Max Loss": { USD: ["$750 (5%)", "", "", ""], GBP: ["£750 (5%)", "", "", ""], EUR: ["€750 (5%)", "", "", ""] },
        "Daily Loss": { USD: ["$450 (3%)", "", "", ""], GBP: ["£450 (3%)", "", "", ""], EUR: ["€450 (3%)", "", "", ""] },
        "Profit Share": ["90/10", "", "", ""],
        "Fee": { USD: ["$450", "Refunded", "", ""], GBP: ["£375", "Refunded", "", ""], EUR: ["€425", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "20k": {
        "Profit Target": ["None", "", "", ""],
        "Duration": ["Unlimited", "", "", ""],
        "Leverage": ["Up to 1:50", "", "", ""],
        "Min Trading Days": ["10 Days", "", "", ""],
        "Max Loss": { USD: ["$1,000 (5%)", "", "", ""], GBP: ["£1,000 (5%)", "", "", ""], EUR: ["€1,000 (5%)", "", "", ""] },
        "Daily Loss": { USD: ["$600 (3%)", "", "", ""], GBP: ["£600 (3%)", "", "", ""], EUR: ["€600 (3%)", "", "", ""] },
        "Profit Share": ["90/10", "", "", ""],
        "Fee": { USD: ["$585", "Refunded", "", ""], GBP: ["£485", "Refunded", "", ""], EUR: ["€550", "Refunded", "", ""] },
        "Bonus After Stage": { USD: ["", "", "", ""], GBP: ["", "", "", ""], EUR: ["", "", "", ""] }
      },
      "25k": {
        "Profit Target": ["None", "", "", ""],
        "Duration": ["Unlimited", "", "", ""],
        "Leverage": ["Up to 1:50", "", "", ""],
        "Min Trading Days": ["10 Days", "", "", ""],
        "Max Loss": { USD: ["$1,250 (5%)", "", "", ""], GBP: ["£1,250 (5%)", "", "", ""], EUR: ["€1,250 (5%)", "", "", ""] },
        "Daily Loss": { USD: ["$750 (3%)", "", "", ""], GBP: ["£750 (3%)", "", "", ""], EUR: ["€750 (3%)", "", "", ""] },
        "Profit Share": ["90/10", "", "", ""],
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

  const steps = ["One Step", "Two Step", "Three Step", "Instant Funding"];
  const currencies = ["USD", "GBP", "EUR"];
  const baseMetrics = ["Profit Target", "Duration", "Leverage", "Min Trading Days", "Max Loss", "Daily Loss", "Profit Share", "Fee"];
  const metrics = selectedStep === "Three Step" ? [...baseMetrics, "Bonus After Stage"] : baseMetrics;

  const getTableData = (metric) => {
    if (!tableData[selectedStep] || !tableData[selectedStep][selectedSize]) {
      return Array(columns).fill("");
    }
    if (metric === "Fee" && tableData[selectedStep][selectedSize][metric]?.[selectedCurrency]) {
      return tableData[selectedStep][selectedSize][metric][selectedCurrency];
    } else if ((metric === "Max Loss" || metric === "Daily Loss") && tableData[selectedStep][selectedSize][metric]?.[selectedCurrency]) {
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
    <table className="w-full table-auto" aria-label="Trading Challenge Details">
      <thead>
        <tr className="bg-gray-100 text-gray-800" style={{ borderBottom: '2px solid #e5e7eb' }}>
          <th className="p-4 text-left font-medium text-sm sm:text-base sticky left-0 bg-gray-100" style={{ color: '#1f2937', zIndex: 1, minWidth: '120px' }}>Metrics</th>
          {columnHeaders.slice(0, columns).map((header, index) => (
            header ? (
              <th key={index} className="p-4 text-left font-medium text-sm sm:text-base" style={{ color: '#1f2937', minWidth: '120px' }}>
                {header}
              </th>
            ) : null
          ))}
        </tr>
      </thead>
      <tbody>
        {metrics.map((metric) => (
          <tr key={metric} className="border-b border-gray-200 hover:bg-gray-100">
            <td className="p-4 font-medium text-sm sm:text-base sticky left-0 bg-white" style={{ color: '#374151', zIndex: 1, minWidth: '120px' }}>{metric}</td>
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
        {/* Currency selector at the top */}
        <div className="lg:col-span-12 mb-4">
          <div className="bg-white rounded-lg text-center shadow-md p-4 sm:p-6" style={{ border: '1px solid #e5e7eb', display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <h6 className="text-lg font-semibold mb-0 mr-4" style={{ color: '#1f2937', alignSelf: 'center' }}>CURRENCY:</h6>
            {currencies.map((currency) => (
              <button
                key={currency}
                className={`px-4 py-2 rounded-md font-medium text-sm sm:text-base select-none ${selectedCurrency === currency ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
                onClick={() => handleCurrencyChange(currency)}
                style={{
                  transition: 'background 0.3s ease, color 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: '60px',
                  height: '40px',
                }}
                onMouseEnter={(e) => { if (selectedCurrency !== currency) e.currentTarget.style.background = '#e0e0e0'; }}
                onMouseLeave={(e) => { if (selectedCurrency !== currency) e.currentTarget.style.background = '#f5f5f5'; }}
              >
                {currency === "USD" && <img src={usdFlag} alt="USD Flag" style={{ width: '24px', height: '24px', marginRight: '4px' }} />}
                {currency === "GBP" && <img src={gbpFlag} alt="GBP Flag" style={{ width: '24px', height: '24px', marginRight: '4px' }} />}
                {currency === "EUR" && <img src={eurFlag} alt="EUR Flag" style={{ width: '24px', height: '24px', marginRight: '4px' }} />}
                {currency}
              </button>
            ))}
          </div>
        </div>

        {/* Left sidebar with options */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6" style={{ border: '1px solid #e5e7eb' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#1f2937' }}>Steps</h3>
            <div className="flex flex-col gap-2">
              {steps.map((step) => (
                <button
                  key={step}
                  className={`text-left px-4 py-3 rounded-md font-medium text-sm sm:text-base select-none ${selectedStep === step ? 'active' : ''}`}
                  onClick={() => handleStepChange(step)}
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
                  {step}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6" style={{ border: '1px solid #e5e7eb' }}>
            <h3 className="text-lg font-semibold mb-3" style={{ color: '#1f2937' }}>Size</h3>
            <div className="flex flex-col gap-2">
              {availableSizes.map((size) => (
                <button
                  key={size}
                  className={`text-left px-4 py-3 rounded-md font-medium text-sm sm:text-base select-none ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => handleSizeChange(size)}
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
            <div className="table-container">
              <div className="desktop-table hidden sm:block overflow-x-auto">
                {renderDesktopTable()}
              </div>
              <div className="mobile-table block sm:hidden">
                <Swiper
                  modules={[Pagination, Navigation]}
                  spaceBetween={10}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  navigation
                  style={{ padding: '30px 10px 40px 10px' }}
                >
                  {columnHeaders.slice(0, columns).map((header, index) => (
                    header ? (
                      <SwiperSlide key={index}>
                        <table className="w-full table-auto" aria-label={`Trading Challenge Details - ${header}`}>
                          <thead>
                            <tr className="bg-gray-100 text-gray-800" style={{ borderBottom: '2px solid #e5e7eb' }}>
                              <th className="p-4 text-left font-medium text-sm" style={{ color: '#1f2937', minWidth: '100px' }}>Metrics</th>
                              <th className="p-4 text-left font-medium text-sm" style={{ color: '#1f2937', minWidth: '100px' }}>{header}</th>
                            </tr>
                          </thead>
                          <tbody>
                            {metrics.map((metric) => (
                              <tr key={metric} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="p-4 font-medium text-sm" style={{ color: '#374151', minWidth: '100px' }}>{metric}</td>
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
              <p className="text-gray-600 mb-4 max-w-lg mx-auto text-sm sm:text-base" style={{ color: '#6b7280' }}>
                We allow our traders to trade on their own terms. Get Funded with No Consistency Rule!
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
              >
                Start Challenge
              </button>
            </div>
          </div>
        </div>
      </div>
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
            background:rgb(255, 255, 255);
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
            background:rgb(190, 190, 190);
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