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
            text: [
                "Responsive website",
                "Landing Page Development",
                "Business WebDev",
            ]
        },
        {
            icon: <FaPaintBrush />,
            title: "UI/UX Design",
            text: [
                "User Interface (UI) Design",
                "Web & Mobile App Design",
                "Responsive Design"
            ]
        },
        {
            icon: <FaBullhorn />,
            title: "Digital Marketing",
            text: [
                "Social Media Management",
                "Social Media Marketing",
                "Brand Promotion",
            ],
        },
        {
            icon: <FaMobileAlt />,
            title: "Video Editing",
            text: [
                "Reels & Short Video Editing",
                "YouTube Video Editing",
                "Color Grading",
            ]
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
                        className="bg-[#0D2B2E] p-6 rounded-2xl border border-white/10 hover:border-green-500 hover:-translate-y-2 transition"
                    >

                        <div className="text-green-400 text-3xl">
                            {service.icon}
                        </div>

                        <h2 className="text-xl font-semibold mt-5">
                            {service.title}
                        </h2>

                        <ul className="text-gray-400 mt-3 space-y-2">
                            {service.text.map((item, i) => (
                                <li key={i}>
                                    <span className="text-green-400">•</span> {item}
                                </li>
                            ))}
                        </ul>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default Services;