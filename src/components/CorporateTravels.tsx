import React from "react";
import miceImage1 from "../assets/Hero/MICE.webp";
import offsiteImage1 from "../assets/Hero/OFSITE.webp";
import domesticImage1 from "../assets/background.webp";

const CorporateTravels: React.FC = () => {
  const sections = [
    {
      title: "MICE Experiences",
      subtitle: "Meetings, incentives, conferences and exhibitions.",
      description:
        "We manage every detail for corporate travel programs so your teams arrive inspired, connected, and ready to perform.",
      image: miceImage1,
    },
    {
      title: "Offsites",
      subtitle: "Strategic retreats designed to energize.",
      description:
        "Our offsite events blend purposeful work with curated leisure, creating a refreshing environment for team growth.",
      image: offsiteImage1,
    },
    {
      title: "Domestic Travel",
      subtitle: "Thoughtful itineraries with seamless logistics.",
      description:
        "From transport to venues and hospitality, we make domestic travel effortless and memorable for every group.",
      image: domesticImage1,
    },
  ];

  return (
    <section id="event3" className="py-16 bg-[#0b0b0d]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">
            corporate travels
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Travel programs with precision, comfort, and visual polish.
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-8">
            From incentive journeys to executive retreats, our team handles
            crafting experiences that feel premium and effortless.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
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

export default CorporateTravels;
