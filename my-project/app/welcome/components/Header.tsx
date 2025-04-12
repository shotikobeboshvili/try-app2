import React, { useState } from 'react';
import close from "./assets/close-fill.png";
import apps from "./assets/apps-2-fill.png";

export default function header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    }
  return (
    <div>
        <header
                id="header"
                className="fixed w-full flex justify-center p-4 bg-[rgba(0,0,0,0.3)] backdrop-blur-md shadow-md z-50"
              >
                <nav className="grid grid-flow-col items-center justify-between w-[1200px] pt-2 pb-2 max-xl:justify-between max-xl:pr-8">
                  <a href="#Home" className="text-3xl font-bold text-[#74e291] hover:text-white transition">
                    Shotiko
                  </a>
        
                  <div
                    className={`max-md:bg-[rgba(15,32,39,0.95)]  text-white scale-z-100 max-md:fixed max-md:top-0 max-md:h-screen max-md:w-[65%] max-md:transition-all max-md:duration-300 ${
                      isMenuOpen ? "max-md:right-0" : "max-md:right-[-100%]"
                    }`}
                  >
                    <ul className="flex gap-7 pt-0.5 max-md:flex-col max-md:p-[2.5rem] max-md:gap-24 max-md:pt-24">
                      <li className="text-2xl">
                        <a href="#Home" className="text-[#74e291] hover:text-[#eff396] transition duration-300">Home</a>
                      </li>
                      <li className="text-2xl">
                        <a href="#Education" className="text-[#74e291] hover:text-[#eff396] transition duration-300">Education</a>
                      </li>
                      <li className="text-2xl">
                        <a href="#Skills" className="text-[#74e291] hover:text-[#eff396] transition duration-300">Skills</a>
                      </li>
                      <li className="text-2xl">
                        <a href="#Projects" className="text-[#74e291] hover:text-[#eff396] transition duration-300">Projects</a>
                      </li>
                      <li className="text-2xl">
                        <a href="#Contact" className="text-[#74e291] hover:text-[#eff396] transition duration-300">Contact</a>
                      </li>
                    </ul>
        
                    <div className="absolute top-4 right-[100%] max-md:right-4">
                      <button onClick={toggleMenu}>
                        <img src={close} alt="" className="w-9 cursor-pointer hover:scale-110 transition duration-200" />
                      </button>
                    </div>
                  </div>
        
                  {!isMenuOpen && (
                    <div className="max-md:block hidden absolute right-5 w-6">
                      <button onClick={toggleMenu}>
                        <img src={apps} alt="Open Menu" className="w-9 cursor-pointer hover:scale-110 transition duration-200" />
                      </button>
                    </div>
                  )}
                </nav>
              </header>
    </div>
  )
}
