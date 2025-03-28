import React from 'react'

const Footer = () => {
  return (
    <div className="mx-auto px-4 py-20 max-w-screen-2xl bg-[#101919] text-white" >
      <section className="mx-auto py-10 max-w-screen-2xl p-4">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="mb-8">
            <p className="text-center text-gray-600 mb-2 font-medium tracking-wide uppercase">Logo</p>
         
          </div>
          <div className="flex justify-center gap-20 text-white text-lg font-bold mb-7">
            <a href="#home" className="hover:text-[#1d8348] transition" style={{ fontWeight: 'bold' }}>Home</a>
            <a href="#about" className="hover:text-[#1d8348] transition" style={{ fontWeight: 'bold' }}>About Us</a>
            <a href="#sustainability" className="hover:text-[#1d8348] transition" style={{ fontWeight: 'bold' }}>Sustainability</a>
            <a href="#team" className="hover:text-[#1d8348] transition" style={{ fontWeight: 'bold' }}>Team</a>
            <a href="#contact" className="hover:text-[#1d8348] transition" style={{ fontWeight: 'bold' }}>Contact</a>
          </div>
          <div className="md:grid-cols-2 md:gap-8 md:max-w-2xl lg:max-w-full mx-auto grid grid-cols-1 gap-5 max-w-lg">
            <div className="bg-[#101919] rounded-xl w-full mx-auto group p-6 transition-all duration-500  ">
              <p className="text-white font-medium mb-1 transition-all duration-500 mb-5">FOLLOW US</p>
              <div className="md:order-2 flex space-x-6">
                    <a href="#" className="text-white hover:text-white">
                        <span className="sr-only">Facebook</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="" id="Windframe_k590Y-dfnfv6">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" className="text-white hover:text-white">
                        <span className="sr-only">Instagram</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="" id="Windframe_5UA_W5fNlVjo">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    <a href="#" className="text-white hover:text-white">
                        <span className="sr-only">X</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="" id="Windframe_3RCiTyIk3U2O">
                        <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path>
                        </svg>
                    </a>
                    <a href="#" className="text-white hover:text-white">
                        <span className="sr-only">GitHub</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="" id="Windframe_WL8iHde6pT6Y">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
                        </svg>
                    </a>
                    {/* <a href="#" className="text-white hover:text-white">
                        <span className="sr-only">YouTube</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="" id="Windframe_NPsEF425rKSR">
                        <path fillRule="evenodd" d="M23.498 7.166c-.271-1.01-1.08-1.803-2.072-1.838-1.721-.052-8.651-.054-8.651-.054v8.728s6.931-.002 8.651-.053c.991-.035 1.8-.828 2.072-1.838.135-.504.185-.94.185-1.302 0-.362-.05-.798-.185-1.302zM12 8.22c-2.029 0-3.663 1.348-3.663 3.003 0 1.653 1.626 2.998 3.663 2.998 2.035 0 3.661-1.345 3.661-2.998 0-1.655-1.626-3.003-3.661-3.003zM12 13.116c-.915 0-1.65-.607-1.65-1.113 0-.654.735-1.075 1.65-1.075 1.016 0 1.653.421 1.653 1.075 0 .506-.637 1.113-1.653 1.113z" clip-rule="evenodd"></path>
                        </svg>
                    </a> */}
                    </div>

            </div>
            <div className="bg-[#101919] rounded-xl w-full mx-auto group  p-6 transition-all duration-500 ">
              <div>
                <p className="text-base text-black leading-6 pb-4 transition-all duration-500 group-hover:text-gray-800">
                </p>
                <div className="flex justify-end">
                    <a
                        className="px-5 py-2.5  text-white "
                        style={{ backgroundColor: '#1d8348', borderRadius: '30px' }}
                    >
                        Explore now
                    </a>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-10 pt-2 text-center border-t border-white/10">
            <p className="text-xs leading-5 text-gray-400">© 2024 Windframe, Inc. All rights reserved.</p>
            </div>
    </div>
  )
}

export default Footer