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
      "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588192761940-7Q2PMBSFN32XMDTSXRTQ/Best+Wedding+Planner+NYC+and+Boston?format=1500w",
    reverse: true,
  },
  {
    title: "Personal touches",
    description:"You don’t only want a beautiful event, you want it to be YOUR beautiful event. We believe that behind every event is a story. So, whether it’s a bespoke escort card display or creative ways to make each guest feel included, we’re here to help you tell your story.",
    buttonText: "Our Services",
    buttonLink: "#",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588215096662-5S5PA0BZ15BCHQ26CK1F/Boston+Weddings+and+NYC+Weddings?format=1500w",
    reverse: false,
  },
  {
    title: "Flawless Execution",
    description:"We specialize in planning and designing weddings and events in private homes and raw spaces. We pride ourselves on flawless execution with high level touches. Weekend affairs, multiple days of tent installation, ferries and travel logistics are a typical day at the office.",
    buttonText: "What Clients Are Saying",
    buttonLink: "#",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/dda4e41e-6f23-408c-a9d5-5b259b3d0a36/52438123974_4a904d120b_o.jpg?format=1500w",
    reverse: true,
  },
];

const FeatureSection: React.FC = () => {
    return (
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-3 space-y-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 bg-pink-50 items-center pt-10 md:pt-0 ${
                feature.reverse ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Content */}
              <div className={`${feature.reverse ? "md:col-start-2" : ""}`}>
                <h2 className="text-4xl px-5 font-semibold text-teal-900 mb-4">
                  {feature.title}
                </h2>
                <p className="text-gray-700 mb-6 px-5">{feature.description}</p>
                <a
                  href={feature.buttonLink}
                  className="bg-pink-500 text-white py-2 px-6 mx-5 rounded-lg hover:bg-pink-600 transition"
                >
                  {feature.buttonText}
                </a>
              </div>
  
              {/* Image */}
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
