import React from "react";
import {
  FaCode,
  FaPaintBrush,
  FaBullhorn,
  FaMobileAlt,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      text: "Fast, modern and responsive websites.",
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      text: "Beautiful interfaces users love.",
    },
    {
      icon: <FaBullhorn />,
      title: "Digital Marketing",
      text: "Strategies that grow your business.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Brand Design",
      text: "Strong identity for your brand.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-[#071A1C] text-white py-20 scroll-mt-20"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Our Services
        </h1>

        <p className="text-gray-400 mt-3">
          Solutions that help your business grow
        </p>
      </div>


      <div className="max-w-6xl mx-auto px-5 mt-12 grid md:grid-cols-4 gap-6">

        {services.map((service, index) => (
          <div
            key={index}
            className="
              bg-[#0D2B2E]
              p-6
              rounded-2xl
              border
              border-white/10
              hover:border-green-500
              hover:-translate-y-2
              transition
            "
          >

            <div className="text-green-400 text-3xl">
              {service.icon}
            </div>

            <h2 className="text-xl font-semibold mt-5">
              {service.title}
            </h2>

            <p className="text-gray-400 mt-3">
              {service.text}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Services;