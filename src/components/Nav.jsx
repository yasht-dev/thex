import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/img/logo.png";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#071A1C]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 py-4">

        <img src={logo} alt="logo" className="w-32" />

        <div className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#home" className="hover:text-green-400">Home</a>
          <a href="#services" className="hover:text-green-400">Services</a>
          <a href="#work" className="hover:text-green-400">Work</a>
          <a href="#about" className="hover:text-green-400">About</a>

          <a
            href="#contact"
            className="bg-green-500 text-black px-5 py-2 rounded-full"
          >
            Start Project
          </a>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {open && (
        <div className="md:hidden bg-[#0D2B2E] p-6 flex flex-col gap-5 text-white">

          <a href="#home" onClick={() => setOpen(false)}>
            Home
          </a>

          <a href="#services" onClick={() => setOpen(false)}>
            Services
          </a>

          <a href="#work" onClick={() => setOpen(false)}>
            Work
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

        </div>
      )}

    </nav>
  );
};

export default Nav;