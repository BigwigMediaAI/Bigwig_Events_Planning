import React from "react";
import decorImage1 from "../assets/Hero/Decor.webp";
import partyImage1 from "../assets/Hero/parties.webp";

const CorporateFestivities: React.FC = () => {
  const events = [
    {
      title: "Office Décor",
      subtitle: "Set the scene with premium style.",
      description:
        "From holiday themes to branded activations, our décor transforms spaces into immersive environments.",
      image: decorImage1,
    },
    {
      title: "Celebration Parties",
      subtitle: "Designed for joy and remarkable moments.",
      description:
        "We plan parties that feel polished, fun, and effortless from start to finish.",
      image: partyImage1,
    },
  ];

  return (
    <section id="event5" className="py-16 bg-[#090909]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">
            corporate festivities
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Festive experiences crafted with bold, modern style.
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-8">
            We combine decor, entertainment and seamless planning to deliver
            celebrations that look incredible and feel effortless.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {events.map((item, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[32px] border border-gray-800 bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
                    {item.title}
                  </p>
                  <h3 className="text-white text-2xl font-semibold mt-3">
                    {item.subtitle}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-300 leading-7">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateFestivities;
