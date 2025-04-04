import React from 'react';

const Team = () => {
  return (
    <section className="bg-[#101919] py-16 text-center">
      <div className="mx-auto lg:max-w-4xl text-center">
        <p className="mt-10 text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
          Meet Our Team
        </p>
      </div>

      {/* Gornja tri člana tima */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-6 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 w-full border-t-4 border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Michael Pearn – <span className="text-yellow-600">Founder & CEO</span>
          </h3>
          <p className="text-gray-600 leading-relaxed">
            As the visionary behind EcapFX, Michael leads the firm with extensive experience in proprietary trading and financial markets.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 w-full border-t-4 border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Carly Pearn – <span className="text-yellow-600">Co-Founder & Chief Sustainability Officer</span>
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Carly oversees the firm's sustainability initiatives, ensuring that environmental and social responsibility are integrated into our business model.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 w-full border-t-4 border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Nebojša Sladoje – <span className="text-yellow-600">Chief Operating Officer (COO)</span>
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Nebojša is responsible for overseeing company operations and managing all internal teams.
          </p>
        </div>
      </div>

      {/* Donja dva člana tima - vertikalno na telefonu */}
      <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 px-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-1/3 border-t-4 border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Maja Marković – <span className="text-yellow-600">Lead Developer</span>
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Maja specializes in developing and optimizing our trading platform, ensuring seamless user experiences and cutting-edge trading tools.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-1/3 border-t-4 border-yellow-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">
            Nikola Ilić – <span className="text-yellow-600">Lead Developer</span>
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Nikola focuses on building and maintaining the technical infrastructure that powers our proprietary trading systems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;