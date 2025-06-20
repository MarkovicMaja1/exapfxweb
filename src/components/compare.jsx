import React from 'react';

// SVG component for checkmark (true)
const CheckIcon = () => (
  <div className="flex justify-center items-center">
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 .125a11.875 11.875 0 100 23.75A11.875 11.875 0 0012 .125zm0 21.375a9.5 9.5 0 110-19 9.5 9.5 0 010 19z"
        fill="#665BFF"
      />
      <path
        d="M15.206 7.713l-4.489 5.938-1.935-2.505a1.19 1.19 0 00-1.877 1.46l2.886 3.693a1.187 1.187 0 001.461.328c.163-.08.304-.196.415-.34l5.426-7.125a1.195 1.195 0 10-1.9-1.449h.012z"
        fill="#665BFF"
      />
    </svg>
  </div>
);

// SVG component for cross (false)
const CrossIcon = () => (
  <div className="flex justify-center items-center">
    <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.91 0C5.331 0 0 5.331 0 11.91c0 6.58 5.331 11.91 11.91 11.91 6.58 0 11.91-5.33 11.91-11.91C23.82 5.331 18.49 0 11.91 0zm0 21.5c-5.307 0-9.604-4.298-9.604-9.59 0-5.292 4.297-9.604 9.604-9.604 5.292 0 9.59 4.312 9.59 9.604 0 5.292-4.298 9.59-9.59 9.59zm4.889-12.593l-2.987 2.987 2.987 2.987a.577.577 0 010 .816l-1.085 1.085a.577.577 0 01-.816 0l-2.987-2.987-2.987 2.987a.577.577 0 01-.816 0l-1.085-1.085a.577.577 0 010-.816l2.987-2.987-2.987-2.897a.577.577 0 010-.816l1.085-1.085a.577.577 0 01.816 0l2.987 2.987 2.987-2.987a.577.577 0 01.816 0l1.085 1.085a.576.576 0 010 .816z"
        fill="#EC2D2D"
      />
    </svg>
  </div>
);

const data = [
  { label: 'Challenge Phase', 'Stellar': { '1-Step': '1', '2-Step': '2' }, 'Stellar Lite': '2' },
  { label: 'Challenge Phase Profit Share', 'Stellar': { '1-Step': '15%', '2-Step': '15%' }, 'Stellar Lite': 'N/A' },
  { label: 'Profit Target', 'Stellar': { '1-Step': '10%', '2-Step': 'P1: 8%, P2: 5%' }, 'Stellar Lite': 'P1: 8%, P2: 4%' },
  { label: 'Daily Loss Limit', 'Stellar': { '1-Step': '3%', '2-Step': '5%' }, 'Stellar Lite': '4%' },
  { label: 'Overall Loss Limit', 'Stellar': { '1-Step': '6%', '2-Step': '10%' }, 'Stellar Lite': '8%' },
  { label: 'Time Limit', 'Stellar': { '1-Step': 'No Time Limit', '2-Step': 'No Time Limit' }, 'Stellar Lite': 'No time limit' },
  { label: 'Minimum Trading Day', 'Stellar': { '1-Step': '2', '2-Step': '5' }, 'Stellar Lite': '5' },
  { label: 'Commission', 'Stellar': { '1-Step': '$5/Lot', '2-Step': '$5/Lot' }, 'Stellar Lite': '$7/Lot' },
  { label: 'Profit Split Upto', 'Stellar': { '1-Step': '95%', '2-Step': '95%' }, 'Stellar Lite': '95%' },
  { label: 'Trading Leverage', 'Stellar': { '1-Step': '1:30', '2-Step': '1:100' }, 'Stellar Lite': '1:100' },
  { label: 'News Trading', 'Stellar': { '1-Step': true, '2-Step': true }, 'Stellar Lite': true },
  { label: 'Weekend Holding', 'Stellar': { '1-Step': true, '2-Step': true }, 'Stellar Lite': true },
  { label: 'Expert Advisors', 'Stellar': { '1-Step': true, '2-Step': true }, 'Stellar Lite': true },
  { label: 'Trade Copier', 'Stellar': { '1-Step': true, '2-Step': true }, 'Stellar Lite': true },
  { label: 'Reset Discount', 'Stellar': { '1-Step': '10%', '2-Step': '10%' }, 'Stellar Lite': '5%' },
  { label: 'Consistency Rule', 'Stellar': { '1-Step': false, '2-Step': false }, 'Stellar Lite': false },
  { label: 'First Reward', 'Stellar': { '1-Step': '5 Business Days', '2-Step': '21 Days' }, 'Stellar Lite': '21 Days' },
  { label: 'Subsequent Rewards', 'Stellar': { '1-Step': '5 Business Days', '2-Step': 'Bi-Weekly' }, 'Stellar Lite': 'Bi-Weekly' },
];

export default function App() {
  return (
    <div className="container mx-auto p-4 overflow-x-auto">
      <table className="w-full max-w-4xl border border-gray-200 rounded-lg shadow-md bg-white">
        <thead>
          <tr>
            <th className="bg-blue-900 text-white font-semibold text-sm py-3 px-4 text-center min-w-[150px] border-r border-gray-200">
              Features
            </th>
            <th className="bg-blue-900 text-white font-semibold text-sm py-3 px-4 text-center min-w-[120px] border-r border-gray-200">
              1-Step
            </th>
            <th className="bg-blue-900 text-white font-semibold text-sm py-3 px-4 text-center min-w-[120px] border-r border-gray-200">
              2-Step
            </th>
            <th className="bg-blue-900 text-white font-semibold text-sm py-3 px-4 text-center min-w-[120px]">
              Stellar Lite
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100 transition-colors border-b border-gray-200">
              <td className="py-3 px-4 font-medium text-blue-900 text-sm text-center min-w-[150px] border-r border-gray-200">
                {item.label}
              </td>
              <td className="py-3 px-4 text-center font-medium text-gray-800 text-sm min-w-[120px] border-r border-gray-200">
                {typeof item.Stellar['1-Step'] === 'boolean'
                  ? item.Stellar['1-Step'] ? <CheckIcon /> : <CrossIcon />
                  : item.Stellar['1-Step']}
              </td>
              <td className="py-3 px-4 text-center font-medium text-gray-800 text-sm min-w-[120px] border-r border-gray-200">
                {typeof item.Stellar['2-Step'] === 'boolean'
                  ? item.Stellar['2-Step'] ? <CheckIcon /> : <CrossIcon />
                  : item.Stellar['2-Step']}
              </td>
              <td className="py-3 px-4 text-center font-medium text-gray-800 text-sm min-w-[120px]">
                {typeof item['Stellar Lite'] === 'boolean'
                  ? item['Stellar Lite'] ? <CheckIcon /> : <CrossIcon />
                  : item['Stellar Lite']}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}