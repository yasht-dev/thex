import React from "react";

const About = () => {
  const stats = [
    {
      number: "500+",
      title: "Projects Completed",
    },
    {
      number: "200+",
      title: "Happy Clients",
    },
    {
      number: "5+",
      title: "Years Experience",
    },
    {
      number: "24/7",
      title: "Support",
    },
  ];

  return (
    <section
      id="about"
      className="bg-[#071A1C] text-white py-20 scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">

        <div>
          <p className="text-green-400">
            Why Choose Us
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-3">
            We Create Digital Solutions That Make Brands Stand Out
          </h1>

          <p className="text-gray-400 mt-5 leading-7">
            We are a creative digital agency helping businesses build a
            strong online presence through modern websites, creative designs
            and smart marketing strategies.
          </p>
        </div>


        <div className="grid grid-cols-2 gap-5">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#0D2B2E] p-6 rounded-2xl"
            >
              <h2 className="text-3xl text-green-400">
                {item.number}
              </h2>

              <p className="text-gray-400">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;