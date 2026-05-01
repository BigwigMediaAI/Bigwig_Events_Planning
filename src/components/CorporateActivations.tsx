import React from "react";
import atlImage1 from "../assets/Hero/ATL.webp";
import btlImage1 from "../assets/Hero/BTL.webp";

const CorporateActivationsATLBTL: React.FC = () => {
  const sections = [
    {
      title: "ATL Activations",
      subtitle: "Scale awareness across mass audiences.",
      description:
        "We design Above-the-Line campaigns that blend media, visuals and activation moments for strong brand presence.",
      items: [
        "TV and streaming campaigns",
        "Radio and audio promotions",
        "Print and outdoor media",
        "Integrated brand storytelling",
      ],
      image: atlImage1,
    },
    {
      title: "BTL Activations",
      subtitle: "Create deeper connections on the ground.",
      description:
        "From branded experiences to promotional activations, we help you build direct engagement with your audience.",
      items: [
        "Event activations and pop-ups",
        "Sampling and in-store demos",
        "Experiential roadshows",
        "Targeted relationship campaigns",
      ],
      image: btlImage1,
    },
  ];

  return (
    <section id="event2" className="py-16 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">
            corporate activations
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            Activation campaigns with visual impact and strategic energy.
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-8">
            From broad awareness to personalized engagement, our activations
            move audiences with clarity and creative direction.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-[32px] border border-gray-800 bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={section.image}
                  alt={section.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <p className="text-sm uppercase tracking-[0.35em] text-yellow-400">
                    {section.title}
                  </p>
                  <h3 className="text-white text-2xl font-semibold mt-3">
                    {section.subtitle}
                  </h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-300 leading-7 mb-6">{section.description}</p>
                <ul className="list-disc space-y-3 pl-5 text-gray-300">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateActivationsATLBTL;
