import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/img/logo.png";

function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#071A1C]/80 backdrop-blur-md border-b border-white/10">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">

        <img 
          src={logo}
          alt="logo"
          className="w-32"
        />

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-gray-300">

          <a href="#home" className="hover:text-green-400">
            Home
          </a>

          <a href="#services" className="hover:text-green-400">
            Services
          </a>

          <a href="#work" className="hover:text-green-400">
            Work
          </a>

          <a href="#about" className="hover:text-green-400">
            About
          </a>

          <a href="#contact"
          className="bg-green-500 text-black px-5 py-2 rounded-full font-medium">
            Start Project
          </a>

        </div>


        {/* Mobile */}
        <div className="md:hidden text-white text-2xl">

          {
            menu ?
            <FiX onClick={()=>setMenu(false)}/>
            :
            <FiMenu onClick={()=>setMenu(true)}/>
          }

        </div>

      </div>


      {
        menu && (

          <div className="md:hidden bg-[#0D2B2E] flex flex-col gap-6 p-6 text-white">

            <a onClick={()=>setMenu(false)} href="#home">
              Home
            </a>

            <a onClick={()=>setMenu(false)} href="#services">
              Services
            </a>

            <a onClick={()=>setMenu(false)} href="#work">
              Work
            </a>

            <a onClick={()=>setMenu(false)} href="#contact">
              Contact
            </a>

          </div>

        )
      }


    </nav>
  );
}

export default Nav;