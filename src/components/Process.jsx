import React from "react";

function Process() {

  const steps = [
    "Discover",
    "Strategy",
    "Design",
    "Development",
    "Launch"
  ];

  return (
    <section className="bg-[#071A1C] text-white py-20">

      <div className="max-w-6xl mx-auto px-5">

        <h1 className="text-4xl font-bold text-center">
          Our Process
        </h1>

        <p className="text-gray-400 text-center mt-3">
          Simple steps to build your digital success
        </p>


        <div className="grid md:grid-cols-5 gap-5 mt-10">

          {steps.map((step, index) => (

            <div
              key={index}
              className="
              bg-[#0D2B2E]
              p-5
              rounded-xl
              border
              border-white/10
              text-center
              hover:border-green-400
              transition
              "
            >

              <span className="text-green-400 text-2xl font-bold">
                0{index + 1}
              </span>

              <h2 className="mt-3 text-lg font-semibold">
                {step}
              </h2>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Process;