import React from "react";
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-[#071A1C] text-white py-20 scroll-mt-20"
      >
        <div className="max-w-6xl mx-auto px-5">

          <div className="text-center mb-12">
            <p className="text-green-400">
              Get In Touch
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3">
              Let's Build Something Amazing
            </h1>

            <p className="text-gray-400 mt-4">
              Have a project idea? Let's discuss and turn your vision into reality.
            </p>
          </div>


          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-[#0D2B2E] p-8 rounded-2xl border border-white/10">

              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>

              <div className="space-y-5 text-gray-300">

                <p className="flex items-center gap-3">
                  <FaPhoneAlt className="text-green-400" />
                  +91 987654321
                </p>

                <p className="flex items-center gap-3">
                  <FaInstagram className="text-green-400" />
                  Thex_vision_
                </p>

                <p className="flex items-center gap-3">
                  <FaLocationDot className="text-green-400" />
                  Udaipur, Rajasthan
                </p>

              </div>


              <div className="mt-10 bg-[#071A1C] p-5 rounded-xl">

                <h3 className="text-xl">
                  Ready to start?
                </h3>

                <p className="text-gray-400 mt-2">
                  Let's create a digital experience for your business.
                </p>

              </div>

            </div>



            <form className="bg-[#0D2B2E] p-8 rounded-2xl border border-white/10 flex flex-col gap-4">

              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#071A1C] border border-white/10 p-3 rounded-lg outline-none focus:border-green-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#071A1C] border border-white/10 p-3 rounded-lg outline-none focus:border-green-400"
              />

              <input
                type="text"
                placeholder="Project Type"
                className="bg-[#071A1C] border border-white/10 p-3 rounded-lg outline-none focus:border-green-400"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="bg-[#071A1C] border border-white/10 p-3 rounded-lg outline-none focus:border-green-400"
              />

              <button
                className="bg-green-500 text-black py-3 rounded-lg font-semibold hover:bg-green-400 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>
      </section>


      <footer className="bg-[#050F10] text-gray-400 text-center py-5">
        © 2026 TheX_Vision. All Rights Reserved.
      </footer>
    </>
  );
}

export default Contact;