import React from "react";
import teamBuildingImage from "../assets/Hero/TEAM.webp";

const CorporateTraining: React.FC = () => {
  const benefits = [
    "Interactive team-building exercises that spark collaboration.",
    "Custom learning journeys aligned to your company goals.",
    "Expert facilitation delivered with polished execution.",
    "Long-term impact through thoughtful storytelling and design.",
  ];

  return (
    <section id="event4" className="py-20 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">
          corporate training
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
          Training experiences that energize teams and create real momentum.
        </h2>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div>
            <p className="text-gray-300 leading-8 mb-8">
              Whether your team needs leadership coaching, soft-skill
              development, or a memorable team-building day, we design learning
              experiences that feel premium, purposeful, and easy to engage
              with.
            </p>
            <div className="grid gap-4">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="group rounded-[28px] border border-gray-800 bg-[#111111] p-4 transition duration-300 hover:-translate-y-1 shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
                >
                  <p className="text-gray-200 leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-gray-800 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
            <img
              src={teamBuildingImage}
              alt="Team Building"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-8">
              <p className="text-white text-3xl font-semibold drop-shadow-lg">
                Build stronger teams with confidence.
              </p>
              <p className="mt-3 text-gray-300 max-w-xl leading-7">
                Designed for leadership, connection, and long-term momentum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateTraining;
