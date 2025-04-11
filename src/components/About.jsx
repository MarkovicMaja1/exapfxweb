import React from 'react'
import image1 from '../assets/investment.png';
import image2 from '../assets/growth.png';
import Background from './Background';

const AboutUs = () => {
  return (
    <div>
      <section className="bg-[#101919] text-white pt-28 pb-16">
        <div className="mx-auto px-4 max-w-screen-2xl relative isolate">
          <div className="mx-auto lg:max-w-4xl text-center">
            <p className="text-4xl lg:text-5xl font-extrabold tracking-tight text-center">About Us</p>
          </div>

          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              {/* Eco Capital FX */}
              <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid grid-cols-1 gap-y-16">
                  <div className="text-left">
                    <dt className="text-3xl font-semibold mb-4 inline-block">
                    ECapFX
                    </dt>
                    <dd className="text-lg text-gray-400 mb-4">
                      At ECapFX, we are redefining proprietary trading by creating opportunities for skilled traders while making a positive impact on the world. Our platform empowers traders to access substantial capital, refine their strategies, and achieve financial success without the limitations of traditional funding.
                    </dd>
                    <dd className="text-lg text-gray-400 mb-4">
                      But we’re more than just a prop firm. We believe that financial growth and sustainability can go hand in hand. That’s why we commit 1-3% of our annual profits to sustainability (SDGS)-focused initiatives, ensuring that our success contributes to a better future for both traders and the planet.
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="flex justify-center mt-10 image1">
                <img src={image1} alt="About Us" className="w-3/4 h-3/4 rounded-lg bg-transparent hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>

          <div className="w-3/4 mx-auto mt-8 border-t-2 border-green-500"></div>

          {/* Mission */}
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
              {/* Left side - Image */}
              <div className="flex justify-center  mr-10 image2">
                <img src={image2} alt="About Us" className="w-3/4 h-3/4  mr-10 rounded-lg bg-transparent hover:scale-105 transition-transform duration-300" />
              </div>

              {/* Right side - Text */}
              <div className="mx-auto  sm:mt-20 lg:max-w-4xl text-left">
                <dl className="grid grid-cols-1 gap-y-16">
                  <div className="text-left">
                    <dt className="text-3xl font-semibold mb-4 inline-block">Our Mission</dt>
                    <dd className="text-lg text-gray-400">
                      We are on a mission to build the largest and most impactful proprietary trading firm, one that not only fuels the success of traders but also fosters a strong, values-driven community over time. We aim to support ambitious traders in reaching their full potential while integrating responsible practices that promote a sustainable future.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 768px) {
          /* Za mobilne uređaje, slika i tekst idu u horizontalni raspored */
          .grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .grid .text-left,
          .grid .flex {
            width: 100%;
            margin-bottom: 20px;
          }

          .grid .text-left {
            order: 1; /* Tekst prvo */
          }

          .grid .flex {
            order: 2; /* Slika druga */
            display: flex;
            justify-content: center;
            align-items: center;
          }
            .image1 {
             margin-top: -40px;
             
            }
              .image2 {
             margin-top: -40px;
             
            }
        }
      `}</style>
    </div>
  )
}

export default AboutUs;