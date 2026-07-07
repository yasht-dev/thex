import React from "react";

function Work() {

  const projects = [
    {
      title: "Business Website",
      type: "Web Development",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      title: "E-Commerce Store",
      type: "UI/UX Design",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d"
    },
    {
      title: "Brand Identity",
      type: "Creative Design",
      img: "https://images.unsplash.com/photo-1558655146-d09347e92766"
    }
  ];

  return (
    <section
      id="work"
      className="bg-[#071A1C] text-white py-20 scroll-mt-20"
    >

      <div className="max-w-6xl mx-auto px-5">

        <div className="text-center">
          <p className="text-green-400">
            Portfolio
          </p>

          <h1 className="text-4xl font-bold mt-2">
            Our Recent Work
          </h1>

          <p className="text-gray-400 mt-3">
            Projects that create real impact for brands
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {
            projects.map((item, index) => (

              <div
                key={index}
                className="
                bg-[#0D2B2E]
                rounded-2xl
                overflow-hidden
                border
                border-white/10
                hover:-translate-y-2
                hover:border-green-400
                transition
                duration-500
                "
              >

                <div className="overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="
                    w-full
                    h-52
                    object-cover
                    hover:scale-110
                    transition
                    duration-500
                    "
                  />
                </div>


                <div className="p-5">

                  <h2 className="text-xl font-semibold">
                    {item.title}
                  </h2>

                  <p className="text-green-400 mt-2">
                    {item.type}
                  </p>

                </div>

              </div>

            ))
          }

        </div>

      </div>

    </section>
  );
}

export default Work;