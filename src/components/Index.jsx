import React from 'react'
import image1 from '../assets/Greenwave.png';
import image2 from '../assets/Verde.png';
import image3 from '../assets/Untitled.png';

const Index = () => {
  return (
    <div>
     <section className=" mx-auto py-20 px-8 max-w-screen-xl">
      <p className="mt-2 mb-14 text-center text-4xl md:text-5xl font-bold text-black tracking-tight">Home Page - Index</p>
      <div className="mb-14 justify-center md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0 flex
          flex-wrap gap-y-8">
        <div className=" bg-[#101919] w-full rounded-2xl lg:w-1/3 group cursor-pointer border border-gray-300 p-5 transition-all duration-300
            hover:border-black max-lg:max-w-xl">
          <div className="mb-6 items-center flex">
          <img
                      src={image3}
                      alt="Clean Water & Sanitation"
                      className="w-full object-cover"
                    />
          </div>
      <div className="block ">
       
        <p className="mb-2 text-xl font-medium leading-8 text-white line-clamp-2">Ecosphere Pro </p>
        <span className="mb-2 font-medium text-white block "><span className="text-[#b8860b]">$379-$999 </span></span>
        <p className="mb-2 leading-6 text-gray-400 whitespace-pre-line text-sm  ">Our Ecosphere Pro Trading Program offers traders the opportunity to access $100K or $200K funded accounts, with the flexibility to choose between a 1-phase or 2-phase evaluation.

        </p>
        <p className="mb-2 text-gray-400 text-sm  whitespace-pre-line ">• 1-Phase Challenge: A streamlined path for experienced traders to prove their skills in a single evaluation phase. Meet the profit target while adhering to risk management rules, and you’ll qualify for a funded account.
        </p>
        <p className="mb-2 text-gray-400 whitespace-pre-line text-sm ">• 2-Phase Challenge: A structured evaluation with two stages, allowing traders to showcase consistency and risk control over a longer period before receiving funding, with more advanced risk management measures.
        </p>
        <p className="mb-2 text-gray-400 whitespace-pre-line text-sm ">This model is designed to identify skilled traders while ensuring capital sustainability, giving you the freedom to trade confidently and responsibly.
        </p>
        
      </div>
    </div>
    <div className=" bg-[#101919] w-full rounded-2xl lg:w-1/3 group cursor-pointer border border-gray-300 p-5 transition-all duration-300
        hover:border-black max-lg:max-w-xl">
      <div className="mb-6 items-center flex">
      <img
                  src={image1}
                  alt="Clean Water & Sanitation"
                  className="w-full object-cover"
                />
      </div>
      <div className="block">
      <p className="mb-2 text-xl font-medium leading-8 text-white line-clamp-2">Greenwave Growth </p>
        <span className="mb-2 font-medium text-white block"><span className="text-[#b8860b]">$79 - $179</span> New Traders from $79 (Ability to add larger drawdown and easier profit targets) </span>
        <p className="mb-2 leading-6 text-gray-400 whitespace-pre-line text-sm ">Our Greenwave Growth Trading Program offers traders the opportunity to access $6K upto $25K funded accounts, with the flexibility to choose between a 1-phase or 2-phase evaluation.
        </p>
        <p className="mb-2 text-gray-400 whitespace-pre-line text-sm ">• 1-Phase Challenge: A streamlined path for experienced traders to prove their skills in a single evaluation phase. Meet the profit target while adhering to risk management rules, and you’ll qualify for a funded account.
        </p>
        <p className="mb-2 text-gray-400 whitespace-pre-line text-sm ">2-Phase Challenge: A structured evaluation with two stages, allowing traders to showcase consistency and risk control over a longer period before receiving funding, with more advanced risk management measures.
        </p>
        <p className="mb-2 text-gray-400 whitespace-pre-line text-sm  ">Fornew traders, Greenwave Growth offers an easier entry point from just $79, featuring simplified evaluation criteria and measured risk parameters to help traders develop their strategies in a lower-risk environment.
        </p>
        <p className="mb-2 text-gray-400 whitespace-pre-line text-sm ">
        This model is designed to identify new traders while ensuring capital sustainability, giving you the freedom to trade confidently and responsibly.
        </p>
      </div>
    </div>
    <div className="w-full bg-[#101919] rounded-2xl lg:w-1/3 group cursor-pointer border border-gray-300 p-5 transition-all duration-300
        hover:border-black max-lg:max-w-xl">
      <div className="mb-6 items-center flex">
      <img
                  src={image2}
                  alt="Clean Water & Sanitation"
                  className="w-full object-cover"
                />
      </div>
      <div className="block">
      <p className="mb-2 text-xl font-medium leading-8 text-white line-clamp-2">El Verde </p>
        <span className="mb-2 font-medium text-white block"> <span className="text-[#b8860b]">$159 - $359 </span>- El Verde Pro from $159 (Ability to add larger drawdown and easier profit targets) </span>
        <p className="mb-2 leading-6 text-gray-400 whitespace-pre-line text-sm ">Our Verde Pro Program offers traders the opportunity to access $50K up to $100K funded accounts, with the flexibility to choose between a 1-phase or 2-phase evaluation.
        </p>
        <p className="mb-2 text-gray-400 whitespace-pre-line text-sm ">• 1-Phase Challenge: A streamlined path for experienced traders to prove their skills in a single evaluation phase. Meet the profit target while adhering to risk management rules, and you’ll qualify for a funded account.
        </p>
        <p className="mb-2 text-gray-400 whitespace-pre-line text-sm ">• 2-Phase Challenge: A structured evaluation with two stages, allowing traders to showcase consistency and risk control over a longer period before receiving funding, with more advanced risk management measures.
        </p>
        <p className="mb-2 text-gray-400 whitespace-pre-line text-sm ">For Verde Traders, Verde Capital offers an easier entry point from just $159, featuring simplified evaluation criteria and measured risk parameters to help traders develop their strategies in a lower-risk environment.
        </p>

        <p className="mb-2 text-gray-400 whitespace-pre-line text-sm ">
        This model is designed to identify pro traders while ensuring capital sustainability, giving you the freedom to trade confidently and responsibly.
        </p>
        {/* <a href="#" className="text-lg font-semibold text-black cursor-pointer">Read more...</a> */}
      </div>
    </div>
  </div>
  <div className="items-center justify-center flex">

  </div>
</section>
      
</div>
  )
}

export default Index
