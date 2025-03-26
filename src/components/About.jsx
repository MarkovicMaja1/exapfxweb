import React from 'react'

const AboutUs = () => {
  return (
    <div>
      <section className="bg-white py-20 sm:py-32">
        <div className="mx-auto px-4 max-w-screen-2xl relative isolate">
          {/* <svg className="h-[788px] w-[350px] absolute top-0 -z-10 transform-gpu overflow-hidden blur-2xl left-12" viewBox="0 0 468 788" fill="none" xmlns="http://www.w3.org/2000/svg" id="Windframe__jc0N6lGXp4">
            <circle cx="44.5105" cy="378.637" r="156.383" fill="#4A3AFF"></circle>
            <circle cx="119.803" cy="529.24" r="156.383" fill="#702DFF"></circle>
            <circle cx="173.364" cy="372.857" r="156.383" fill="#2D5BFF"></circle>
            <g filter="url(#filter0_b_1410_520)">
              <circle cx="73.5409" cy="394.049" r="393.819" fill="white" fillOpacity="0.79"></circle>
            </g> */}
            {/* <defs>
              <filter x="-460.404" y="-139.896" width="1067.89" height="1067.89" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="70.063"></feGaussianBlur>
                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1410_520"></feComposite>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1410_520" result="shape"></feBlend>
              </filter>
            </defs>
          </svg> */}
          <div className="mx-auto lg:max-w-4xl text-center">
            <p className="mt-2 text-4xl lg:text-5xl font-bold tracking-tight text-center">About Us</p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a Elementum pulvinar et feugiat blandit at. In mi viverra elit nunc.</p> */}
          </div>

          <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid grid-cols-1 gap-y-16">
            <div className="flex flex-col items-start gap-6 py-10 bg-gray-100 rounded-lg shadow-md p-6">
  {/* <div className="h-36 w-36 items-center justify-center rounded-full bg-white text-4xl font-bold flex border border-gray-500">1</div> */}
  <div className="w-full text-left">
    <dt className="text-xl font-semibold text-black mb-4">About Us</dt>
    <dd className="mt-2 text-base text-gray-500 mb-4">
      At Eco Capital FX, we are redefining proprietary trading by creating opportunities for skilled traders while making a positive impact on the world. Our platform empowers traders to access substantial capital, refine their strategies, and achieve financial success without the limitations of traditional funding.
    </dd>
    <dd className="mt-2 text-base text-gray-500">
      But we’re more than just a prop firm. We believe that financial growth and sustainability can go hand in hand. That’s why we commit 1-3% of our annual profits to sustainability (SDGS)-focused initiatives, ensuring that our success contributes to a better future for both traders and the planet.
    </dd>
  </div>
</div>

{/* 
              <div className="flex flex-col items-center gap-6 py-10 bg-gray-100 rounded-lg shadow-md">
                <div className="h-36 w-36 items-center justify-center rounded-full bg-white text-4xl font-bold flex border border-gray-500">2</div>
                <div className="w-full text-center">
                  <dt className="text-xl font-semibold text-black">Product Development</dt>
                  <dd className="mt-2 text-base text-gray-500">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</dd>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 py-10 bg-gray-100 rounded-lg shadow-md">
                <div className="h-36 w-36 items-center justify-center rounded-full bg-white text-4xl font-bold flex border border-gray-500">3</div>
                <div className="w-full text-center">
                  <dt className="text-xl font-semibold text-black">Product Testing</dt>
                  <dd className="mt-2 text-base text-gray-500">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</dd>
                </div>
              </div>

              <div className="flex flex-col items-center gap-6 py-10 bg-gray-100 rounded-lg shadow-md">
                <div className="h-36 w-36 items-center justify-center rounded-full bg-white text-4xl font-bold flex border border-gray-500">4</div>
                <div className="w-full text-center">
                  <dt className="text-xl font-semibold text-black">Product Launch</dt>
                  <dd className="mt-2 text-base text-gray-500">Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.</dd>
                </div>
              </div> */}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutUs

