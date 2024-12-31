import React from "react";

interface Feature {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  imageUrl: string;
  reverse: boolean; // Determines layout direction
}

const features: Feature[] = [
  {
    title: "Effortless Elegance",
    description:
      "We create bespoke weddings and events that are inspired by our clients. We work collaboratively to ensure your event is cohesive and thoughtful. At Brilliant Event Planning, we believe that even the smallest details can have a huge impact.",
    buttonText: "Wedding Portfolio",
    buttonLink: "#",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588202699404-B8V1QQZ8SRO9GTVK8LC3/luxury-event-planner-nyc-new-england?format=1500w",
    reverse: false,
  },
  {
    title: "Award Winning Team",
    description:
      "We are Type-A creatives backed by experienced event planning teams in both our Boston and NYC locations. We take on a limited number of events per year to ensure each client receives the highest level of service and attention. At Brilliant Event Planning, we’re dedicated to producing not only a spectacular event, but the foundation for memories that will last a lifetime.",
    buttonText: "Meet Sarah and Chelsea",
    buttonLink: "#",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588215096662-5S5PA0BZ15BCHQ26CK1F/Boston+Weddings+and+NYC+Weddings?format=1500w",
    reverse: true,
  },
  {
    title: "Unforgettable Memories",
    description:
      "At Brilliant Event Planning, we specialize in crafting events that leave lasting impressions. Whether it’s a wedding, gala, or corporate retreat, our goal is to ensure your event is remembered for years to come.",
    buttonText: "Learn More",
    buttonLink: "#",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588192761940-7Q2PMBSFN32XMDTSXRTQ/Best+Wedding+Planner+NYC+and+Boston?format=1500w",
    reverse: false,
  },
];

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-8 items-center ${
              feature.reverse ? "md:grid-flow-dense" : ""
            }`}
          >
            {/* Content Section */}
            <div className={`${feature.reverse ? "md:col-start-2" : ""}`}>
              <h2 className="text-4xl font-semibold text-teal-900 mb-4">
                {feature.title}
              </h2>
              <p className="text-gray-700 mb-6">{feature.description}</p>
              <a
                href={feature.buttonLink}
                className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition"
              >
                {feature.buttonText}
              </a>
            </div>

            {/* Image Section */}
            <div>
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
