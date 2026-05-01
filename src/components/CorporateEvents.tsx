import React from "react";
import rnrImage1 from "../assets/Hero/RR2.webp";
import awardsImage1 from "../assets/Hero/awards.webp";
import productLaunchImage1 from "../assets/Hero/productlaunch.webp";
import townhallsImage1 from "../assets/background.webp";

const CorporateEvents: React.FC = () => {
  const sections = [
    {
      title: "Rewards & Recognition",
      subtitle: "Celebrate success with impact.",
      description:
        "We create memorable recognition events that celebrate achievement, boost morale, and strengthen culture.",
      image: rnrImage1,
    },
    {
      title: "Awards Ceremonies",
      subtitle: "Elegant production for every winner.",
      description:
        "From stage lighting to guest experience, we design award nights that feel premium and unforgettable.",
      image: awardsImage1,
    },
    {
      title: "Product Launches",
      subtitle: "Reveal your next big idea.",
      description:
        "We build launch experiences that showcase your product with energy, storytelling, and polished execution.",
      image: productLaunchImage1,
    },
    {
      title: "Townhalls",
      subtitle: "Connect teams with clarity.",
      description:
        "Interactive townhalls that elevate communication and keep every attendee engaged from start to finish.",
      image: townhallsImage1,
    },
  ];

  return (
    <section id="bigevents" className="py-16 bg-[#090909]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">
            corporate events
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Executive experiences designed for every team.
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-8">
            From R&R awards to launches and townhalls, we plan corporate events
            that feel elegant, strategic, and distinctly tailored to your brand.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[32px] border border-gray-800 bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
                    {section.title}
                  </p>
                  <p className="text-white text-2xl font-semibold mt-3">
                    {section.subtitle}
                  </p>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-300 leading-7">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateEvents;
