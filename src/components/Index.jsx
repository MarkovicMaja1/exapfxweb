import React from 'react'
import image1 from '../assets/Greenwave.png';
import image2 from '../assets/Verde.png';
import image3 from '../assets/Untitled.png';

const Index = () => {
  return (
    <div>
        {/* <section className="mx-auto py-20 px-8 max-w-6xl"> */}
        <section className=" mx-auto py-20 px-8 max-w-screen-xl">

{/* 
  <p className="tracking-widest text-sm font-bold text-gray-600 text-center uppercase">blog</p> */}
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
        {/* <a href="#" className="text-lg font-semibold text-black cursor-pointer">Read more...</a> */}
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
        {/* <img alt="Harsh image" src="https://images.unsplash.com/photo-1557425631-f132f06f4aa1?q=80&w=2692&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full rounded-lg"> */}
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
        {/* <a href="#" className="text-lg font-semibold text-black cursor-pointer">Read more...</a> */}
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
        {/* <img alt="Harsh image" src="https://images.unsplash.com/photo-1543269865-4430f94492b9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w-full rounded-lg"> */}
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
    {/* <a href="#" className="h-fit w-fit items-center font-medium flex gap-2"> */}
      {/* <span>View all</span> */}
      {/* <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="Windframe_W51bLX5IWNR"><path d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858
            9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5" stroke="currentColor" strokewidth="1" strokelinecap="round" strokelinejoin="round"></path></svg>
    </a> */}
  </div>
</section>
      
    </div>
  )
}

export default Index
