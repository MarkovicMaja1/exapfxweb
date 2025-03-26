import React from 'react'

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky z-50 top-0 inset-x-0">
    <nav className="items-center  mx-auto flex max-w-screen-2xl p-4">
      {/* <div className="lg:flex-1 flex">
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Windframe</span>
          <img
            alt=""
            src="https://res.cloudinary.com/speedwares/image/upload/v1659284687/windframe-logo-main_daes7r.png"
            className="h-8 w-auto"
          />
        </a>
      </div> */}
      <ul className="hidden lg:flex gap-20 text-black ml-40 text-lg font-bold justify-center flex-1 font-medium">
  <li><a href="#home" className="hover:text-[#1d8348] transition" style={{fontWeight: 'bold'}}>Home</a></li>
  <li><a href="#about" className="hover:text-[#1d8348] transition" style={{fontWeight: 'bold'}}>About Us</a></li>
  <li><a href="#suistanbility" className="hover:text-[#1d8348] transition" style={{fontWeight: 'bold'}}>Sustainability</a></li>
  <li><a href="#team" className="hover:text-[#1d8348] transition" style={{fontWeight: 'bold'}}>Team</a></li>
  <li><a href="#contact" className="hover:text-[#1d8348] transition" style={{fontWeight: 'bold'}}>Contact</a></li>
</ul>

      <a
  className="px-5 py-2.5 rounded-md text-black"
  style={{ backgroundColor: '#f9e79f' }}
>
  Get Started
</a>

      </nav>
  </header>
  )
}

export default Header

