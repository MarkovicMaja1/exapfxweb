import React from 'react';
import image1 from '../assets/investment.png';
import image2 from '../assets/growth.png';


const AboutUs = () => {
  return (
    <div>
      <section className="bg-[#151515] text-white pt-24 pb-14">
        <div className="mx-auto px-4 max-w-screen-2xl relative isolate">
          <div className="mx-auto lg:max-w-4xl text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-center">About Us</h2>
          </div>

          <div className="max-w-7xl mx-auto px-4 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 about-us-grid">
              <div className="about-us-text mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid grid-cols-1 gap-y-16">
                  <div className="text-left">
                    <h3 className="text-3xl font-semibold mb-4 inline-block">
                    ECAPFX
                    </h3>
                    <p className="text-lg text-white mb-4">
                      At ECAPFX, we are redefining proprietary trading by creating opportunities for skilled traders while making a positive impact on the world. Our platform empowers traders to access substantial capital, refine their strategies, and achieve financial success without the limitations of traditional funding.
                    </p>
                    <p className="text-lg text-white mb-4">
                      But we’re more than just a prop firm. We believe that financial growth and sustainability can go hand in hand. That’s why we commit 1-3% of our annual profits to sustainability (SDGS)-focused initiatives, ensuring that our success contributes to a better future for both traders and the planet.
                    </p>
                    <h3 className="text-3xl font-semibold mb-4 inline-block">Our Mission</h3>
                    <p className="text-lg text-white">
                      We are on a mission to build the largest and most impactful proprietary trading firm, one that not only fuels the success of traders but also fosters a strong, values-driven community over time. We aim to support ambitious traders in reaching their full potential while integrating responsible practices that promote a sustainable future.
                    </p>
                  </div>
                </dl>
              </div>

              <div className="about-us-image ecoImage flex justify-center mt-10">
                <img src={image2} alt="About Us" loading="lazy" className="w-3/4 h-3/4 mr-10 rounded-lg bg-transparent hover:scale-105 transition-transform duration-300" />
                {/* <img src={image1} alt="About Us" loading="lazy" className="w-3/4 h-3/4 rounded-lg bg-transparent hover:scale-105 transition-transform duration-300" /> */}
              </div>
            </div>
          </div>

          {/* <div className="w-3/4 mx-auto mt-8 border-t-[1px] border-green-500 line"></div> */}


          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-16 about-us-grid">
                  <div className="text-left">
                    {/* <h3 className="text-3xl font-semibold mb-4 inline-block">Our Mission</h3>
                    <p className="text-lg text-white">
                      We are on a mission to build the largest and most impactful proprietary trading firm, one that not only fuels the success of traders but also fosters a strong, values-driven community over time. We aim to support ambitious traders in reaching their full potential while integrating responsible practices that promote a sustainable future.
                    </p> */}
                  </div>

              <div className="about-us-text mx-auto sm:mt-20 lg:max-w-4xl text-left">
                <dl className="grid grid-cols-1 gap-y-16">
                  <div className="about-us-image missionImage flex justify-center mr-10">
                    {/* <img src={image2} alt="About Us" loading="lazy" className="w-3/4 h-3/4 mr-10 rounded-lg bg-transparent hover:scale-105 transition-transform duration-300" /> */}
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        /* Za mobilne uređaje */
        @media (max-width: 768px) {
          .about-us-grid {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .about-us-text,
          .about-us-image {
            width: 100%;
            margin-bottom: 20px;
          }

          .about-us-text {
            order: 1; /* Tekst prvo */
          }

          .about-us-image {
            order: 2; /* Slika druga */
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .ecoImage {
           margin-top: -40px;
          }
           .missionImage {
           margin-top:-20px;
           margin-right:-20px;
           }

           .line {
           margin-bottom: 70px;}
        }
      `}</style>
    </div>
  )
}

export default AboutUs;
