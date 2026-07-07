import React from "react";
import hero_img from "../assets/assets/hero_img.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";

function Hero1() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#071A1C] text-white flex items-center scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 py-24 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <div className="inline-flex items-center gap-2 bg-[#0D2B2E] border border-white/10 rounded-full px-4 py-2 text-sm text-green-400">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            Digital Design & Marketing Agency
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mt-6">
            We Build Digital
            <span className="text-green-400"> Experiences </span>
            <br />
            That Grow Brands
          </h1>

          <p className="text-gray-400 mt-6 max-w-xl leading-7">
            We create high-performance websites, creative UI/UX designs and
            digital marketing strategies that help businesses grow online.
          </p>

          <div className="flex gap-4 mt-8">
            <a href="#contact">
              <button className="bg-green-500 text-black px-7 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-green-400 transition">
                Start Project
                <IoIosArrowForward />
              </button>
            </a>

            <a href="#work">
              <button className="border border-white/20 px-7 py-3 rounded-full hover:bg-white hover:text-black transition">
                View Work
              </button>
            </a>
          </div>

          <div className="flex gap-6 mt-10 text-sm text-gray-300">
            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              Modern Design
            </p>

            <p className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" />
              Fast Delivery
            </p>
          </div>
        </div>


        <div className="relative flex justify-center">

          <div className="absolute w-96 h-96 bg-green-500 rounded-full blur-[150px] opacity-20"></div>

          <div className="relative bg-[#0D2B2E] border border-white/10 rounded-3xl p-5 shadow-2xl">
            <img
              src={hero_img}
              alt="Digital Agency"
              className="w-[300px] md:w-[520px] rounded-2xl"
            />
          </div>

          <div className="absolute top-10 -left-5 bg-[#0D2B2E] border border-white/10 px-5 py-3 rounded-xl">
            <p className="text-green-400 font-bold">500+</p>
            <p className="text-xs text-gray-400">Projects</p>
          </div>

          <div className="absolute bottom-10 -right-5 bg-green-500 text-black px-5 py-3 rounded-xl font-semibold">
            🚀 Growth
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero1;