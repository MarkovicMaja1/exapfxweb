/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#2E7D32', // Main green from FundingPlans.css
        primaryDark: '#1B5E20', // Darker green for gradients
        secondary: '#4CAF50', // Additional green shade
        accent: '#E8F5E9', // Light green for table rows
        neutral: '#F5F5F5', // Light gray for tabination background
        textPrimary: '#010310', // Dark text color
        textSecondary: '#131217', // Secondary text color
        gradientGrayStart: '#C0C0C0', // Gradient for tabination text
        gradientGrayEnd: '#A9A9A9', // Gradient end
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(90deg, #1B5E20 0%, #2E7D32 100%)',
        'text-gradient': 'linear-gradient(90deg, #C0C0C0 0%, #A9A9A9 100%)',
        'key-header-gradient': 'linear-gradient(90deg, #2E7D32 51.41%, #1B5E20 68.28%, #4CAF50 85.89%, #2E7D32 101.03%)',
      },
      // transitionProperty: {
      //   'all-ease': 'all',
      // },
      // transitionDuration: {
      //   '300': '300ms',
      // },
      // transitionTimingFunction: {
      //   'ease': 'ease',
      // },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // Dodajemo Poppins
      },
      position: ['sticky'], // Dodajemo position: sticky
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-52px)" },
        },
      },
    },
  },
  plugins: [],
};

