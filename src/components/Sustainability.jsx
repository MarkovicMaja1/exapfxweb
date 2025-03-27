import React from 'react'
import img3 from '../assets/3.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';

const Suistanbility = () => {
  return (
    <div>
      <section className="bg-white py-20 sm:py-32">
        <div className="mx-auto px-12 max-w-screen-xl relative isolate">

          <div className="mx-auto lg:max-w-4xl text-center">
            <p className="tracking-widest text-sm font-bold text-gray-600 text-center uppercase"></p>
            <p className="mt-2 text-4xl lg:text-5xl font-extrabold tracking-tight text-center">Our Commitment to Sustainability</p>
            <p className="mt-6 text-lg leading-8 text-gray-600">At Eco Capital FX, we align our efforts with the United Nations Sustainable Development Goals (SDGs) to create a positive global impact. Our focus is on three key areas:</p>
          </div>

          <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl flex flex-col gap-12">

            <div className="flex items-center gap-8">
              <div className="h-32 w-32 flex items-center justify-center rounded-full bg-white border border-gray-500">
                <img
                  src={image1}
                  alt="Clean Water & Sanitation"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-1">
                {/* <p className="mb-1.5 text-xs text-black font-semibold"></p> */}
                <dt className="text-xl font-semibold leading-7 text-black">🌍 Clean Water & Sanitation</dt>
                <dd className="mt-2 text-base leading-7 text-gray-500">We support initiatives that provide access to clean water and sanitation for communities in need, ensuring a healthier and more sustainable future.</dd>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="h-32 w-32 flex items-center justify-center rounded-full bg-white border border-gray-500">
                <img
                  src={image2}
                  alt="Quality Education"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-1">
                {/* <p className="mb-1.5 text-xs text-black font-semibold"></p> */}
                <dt className="text-xl font-semibold leading-7 text-black">📚 Quality Education</dt>
                <dd className="mt-2 text-base leading-7 text-gray-500">Education is the key to opportunity. We contribute to programs that provide learning resources, scholarships, and training to empower the next generation.</dd>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <div className="h-32 w-32 flex items-center justify-center rounded-full bg-white border border-gray-500">
                <img
                  src={img3}
                  alt="Gender Equality"
                  className="w-full object-cover"
                />
              </div>
              <div className="flex-1">
                {/* <p className="mb-1.5 text-xs text-black font-semibold"></p> */}
                <dt className="text-xl font-semibold leading-7 text-black">⚖️ Gender Equality</dt>
                <dd className="mt-2 text-base leading-7 text-gray-500">We advocate for equal opportunities in finance and beyond, supporting programs that promote women’s participation in trading, education, and leadership.</dd>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

export default Suistanbility

