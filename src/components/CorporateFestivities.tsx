import React, { useEffect, useState } from "react";
import decorImage1 from "../assets/background.webp"; // Replace with actual images
import decorImage2 from "../assets/background.webp"; // Replace with actual images
import partyImage1 from "../assets/background.webp"; // Replace with actual images
import partyImage2 from "../assets/background.webp"; // Replace with actual images
import partyImage3 from "../assets/background.webp"; // Replace with actual images

const CorporateFestivities: React.FC = () => {
  const subsections = [
    {
      title: "Office Décor",
      description:
        "Transform your workplace into a festive haven with our expert office décor services. From vibrant themes to intricate details, we create a captivating ambiance for every occasion.",
      images: [decorImage1, decorImage2],
    },
    {
      title: "Parties",
      description:
        "Celebrate your milestones and festive occasions with unforgettable corporate parties. We handle everything from theme creation to flawless execution, ensuring a lively and enjoyable experience.",
      images: [partyImage1, partyImage2, partyImage3],
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
    <div id="event5" className="bg-gray-100 py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Corporate Festivities
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Celebrate every occasion in style with our office décor and party planning services, tailored to make your festivities memorable.
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
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h2>
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

export default CorporateFestivities;
