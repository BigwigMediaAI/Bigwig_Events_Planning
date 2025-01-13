import React, { useEffect, useState } from "react";
import miceImage1 from "../assets/background.webp";
import miceImage2 from "../assets/background.webp";
import offsiteImage1 from "../assets/background.webp";
import offsiteImage2 from "../assets/background.webp";
import domesticImage1 from "../assets/background.webp";
import domesticImage2 from "../assets/background.webp";

const CorporateTravels: React.FC = () => {
  const subsections = [
    {
      title: "MICE (Meetings, Incentives, Conferences, Exhibitions)",
      description:
        "Organize world-class MICE events that are tailored to your company's needs. From venue selection to event management, we've got you covered.",
      images: [miceImage1, miceImage2],
    },
    {
      title: "Offsites",
      description:
        "Plan team-building retreats and offsite activities to foster collaboration and boost morale. We make your offsites unforgettable.",
      images: [offsiteImage1, offsiteImage2],
    },
    {
      title: "Domestic Travel Packages",
      description:
        "Explore exciting destinations within the country. We provide customized travel packages to suit your corporate needs.",
      images: [domesticImage1, domesticImage2],
    },
    // Add more subsections here if needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % subsections[0].images.length); // Loop through images
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div id="event3" className="bg-gray-100 py-8 px-4">
      <h1 id="travels" className="text-4xl font-bold text-center text-gray-800 mb-8">
        Corporate Travels
      </h1>
      <p className="text-center text-gray-600 mb-12">
        From MICE events to domestic travel packages, we ensure seamless corporate travel experiences tailored to your needs.
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

export default CorporateTravels;
