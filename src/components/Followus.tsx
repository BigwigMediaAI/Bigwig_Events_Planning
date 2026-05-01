import React from "react";
import follow1 from "../assets/IMG_7756.webp";
import follow2 from "../assets/IMG-20250113-WA0047.webp";
import follow3 from "../assets/DB2A5526.webp";
import follow4 from "../assets/IMG-20250113-WA0030.webp";

const FollowUsSection: React.FC = () => {
  const cards = [
    { src: follow1, label: "Creative Setup" },
    { src: follow2, label: "Stage Story" },
    { src: follow3, label: "VIP Moments" },
    { src: follow4, label: "Event Highlights" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#070707] via-[#101010] to-[#111111]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">
            follow us
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            See the moments we build behind the scenes.
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-8">
            Follow our work on social media for event highlights, production
            details, and fresh inspiration.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] border border-gray-800 bg-[#111111] shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
            >
              <img
                src={card.src}
                alt={card.label}
                className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute left-4 bottom-4 text-sm uppercase tracking-[0.35em] text-white">
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowUsSection;
