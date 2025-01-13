import React, { useEffect, useState } from "react";
import atlImage1 from "../assets/background.webp"; // Replace with actual images
import atlImage2 from "../assets/DB2A5526.webp"; // Replace with actual images
import btlImage1 from "../assets/background.webp"; // Replace with actual images
import btlImage2 from "../assets/background.webp"; // Replace with actual images

const CorporateActivationsATLBTL: React.FC = () => {
  const subsections = [
    {
      title: "ATL (Above the Line) Activations",
      description:
        "Reach a larger audience with mass media channels. From TV ads to print media, ATL strategies are perfect for brand awareness.",
      images: [atlImage1, atlImage2],
      listItems: [
        "TV Campaigns",
        "Radio Advertisements",
        "Print Ads (Newspapers, Magazines)",
        "Outdoor Advertising (Billboards, Posters)"
      ]
    },
    {
      title: "BTL (Below the Line) Activations",
      description:
        "Engage directly with your audience through personalized experiences. BTL activations include events, promotions, and direct mail.",
      images: [btlImage1, btlImage2],
      listItems: [
        "Direct Mail Campaigns",
        "Event Sponsorships",
        "Promotional Activations",
        "Sampling and Product Demonstrations"
      ]
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % subsections[0].images.length); // Loop through images
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div id="event2" className="bg-gray-100 py-8 px-4 ">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Corporate Activations
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Whether it's ATL for mass outreach or BTL for personalized engagement, we help execute impactful corporate activations.
      </p>
      <div className="space-y-12 max-w-6xl mx-auto">
        {subsections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-start bg-white shadow-lg rounded-lg overflow-hidden ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="p-6 md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">{section.title}</h2>
              <p className="text-gray-600 mb-6">{section.description}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {section.listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 p-4 relative">
              {/* Single image displayed with smooth transitions */}
              <img
                src={section.images[currentImageIndex]}
                alt={`${section.title} ${currentImageIndex + 1}`}
                className="w-full h-64 object-cover rounded-lg shadow-md transition-all duration-1000"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorporateActivationsATLBTL;
