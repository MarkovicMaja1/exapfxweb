import React from 'react'
import image1 from '../assets/investment.png';
import image2 from '../assets/growth.png';
import Background from './Background';

const AboutUs = () => {
  return (
    <div>
      
      <section className="bg-[#101919] text-white py-20 sm:py-32">
        <div className="mx-auto px-4 max-w-screen-2xl relative isolate">
         
          <div className="mx-auto lg:max-w-4xl text-center">
<p className="mt-2 text-4xl lg:text-5xl font-extrabold tracking-tight text-center ">About Us</p>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">

               {/*About us*/}
          <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid grid-cols-1 gap-y-16">
            <div className="text-left">
            <dt className="text-3xl font-semibold mb-4 inline-block ">
              About Us
            </dt>

            <dd className="text-lg text-gray-400 mb-4">

                At Eco Capital FX, we are redefining proprietary trading by creating opportunities for skilled traders while making a positive impact on the world. Our platform empowers traders to access substantial capital, refine their strategies, and achieve financial success without the limitations of traditional funding.
              </dd>
              <dd className="text-lg text-gray-400 mb-4">

                But we’re more than just a prop firm. We believe that financial growth and sustainability can go hand in hand. That’s why we commit 1-3% of our annual profits to sustainability (SDGS)-focused initiatives, ensuring that our success contributes to a better future for both traders and the planet.
              </dd>
            </div>
            </dl>
            </div>
            <div className="flex justify-center mt-10">
              <img src={image1} alt="About Us" className="w-3/4 h-3/4 rounded-lg bg-transparent hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
          </div>

          <div className="w-3/4 mx-auto mt-8 border-t-2 border-green-500"></div>



                {/*Mission*/}
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
                {/* Leva strana - Slika */}
                <div className="flex justify-center mt-10 mr-10">
                <img src={image2} alt="About Us" className="w-3/4 h-3/4  mr-10 rounded-lg bg-transparent hover:scale-105 transition-transform duration-300" />
                </div>


                {/* Desna strana - Tekst */}
                <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl text-left">
                  <dl className="grid grid-cols-1 gap-y-16">
                    <div className="text-left">
                      <dt className="text-3xl font-semibold mb-4 inline-block ">Our Mission</dt>
                      <dd className="text-lg text-gray-400 mb-4">

                      We are on a mission to build the largest and most impactful proprietary trading firm, one that not only fuels the success of traders but also fosters a strong, values-driven community overtime. We aim to support ambitious traders in reaching their full potential while integrating responsible practices that promote a sustainable future.                 
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>


            {/* <div className="w-3/4 mx-auto mt-8 border-t-2 border-green-500"></div>


                Our Goals
                <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16">
                  <div className="text-left">
                    <p className="text-3xl font-semibold mb-4 inline-block border-b-2 border-green-500">Our Goals</p>
                    <ul className="text-lg text-gray-400 list-disc pl-5 space-y-4">
                      <li><span role="img" aria-label="lightning">⚡</span> <strong>Empower Traders:</strong> Provide opportunities for skilled traders to scale their strategies with substantial funding.</li>
                      <li><span role="img" aria-label="community">🌍</span> <strong>Build a Thriving Community:</strong> Grow a network of <strong>1,000+ funded traders</strong> within the first year.</li>
                      <li><span role="img" aria-label="rocket">🚀</span> <strong>Drive Industry Leadership:</strong> Become the <strong>leading proprietary trading firm</strong> by 2030, measured by active traders, capital deployed, and profits.</li>
                      <li><span role="img" aria-label="globe">🌍</span> <strong>Expand Globally:</strong> Establish a presence in <strong>at least 5 international markets</strong> within two years.</li>
                      <li><span role="img" aria-label="eco">🌱</span> <strong>Commit to Sustainability:</strong> Partner with eco-friendly initiatives and donate 1-3% of profits to sustainability-driven causes (SDGS).</li>
                    </ul>
                    <ul className="text-lg text-gray-400 list-disc pl-5 space-y-4">
                      <li><span role="img" aria-label="lightning">⚡</span> <strong>Empower Traders:</strong> Provide opportunities for skilled traders to scale their strategies with substantial funding.</li>
                      <li><span role="img" aria-label="community">🌍</span> <strong>Build a Thriving Community:</strong> Grow a network of <strong>1,000+ funded traders</strong> within the first year.</li>
                      <li><span role="img" aria-label="rocket">🚀</span> <strong>Drive Industry Leadership:</strong> Become the <strong>leading proprietary trading firm</strong> by 2030, measured by active traders, capital deployed, and profits.</li>
                      <li><span role="img" aria-label="globe">🌍</span> <strong>Expand Globally:</strong> Establish a presence in <strong>at least 5 international markets</strong> within two years.</li>
                      <li><span role="img" aria-label="eco">🌱</span> <strong>Commit to Sustainability:</strong> Partner with eco-friendly initiatives and donate 1-3% of profits to sustainability-driven causes (SDGS).</li>
                    </ul>
                    
                    <p className="text-lg text-gray-400 mt-8">
                      At Eco Capital FX, we believe in <strong>trading with purpose</strong>, where success isn’t just measured in profits but in the positive impact we create together. Join us, and be part of a prop firm that’s shaping the future of trading and sustainability.
                    </p>
                  </div>
                </div> */}

          
        </div>
      </section>
    </div>
  )
}

export default AboutUs
