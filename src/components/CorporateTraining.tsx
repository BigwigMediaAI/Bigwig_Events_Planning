import React, { useEffect, useState } from "react"; // Replace with actual images
import teamBuildingImage1 from "../assets/Hero/TEAM.webp"; // Replace with actual images
import teamBuildingImage2 from "../assets/Hero/TEAM2.webp"; // Replace with actual images
import teamBuildingImage3 from "../assets/Hero/TEAM3.webp"; // Replace with actual images

const CorporateTraining: React.FC = () => {
  const subsections = [
    {
      title: "Team Building – Strengthen Bonds, Build Trust",
      description:
        "A strong team is the foundation of every successful organization. Our team-building programs are designed to break barriers, improve collaboration, and create a sense of unity. With fun, interactive activities and real-world scenarios, your team will leave feeling energized, motivated, and more connected than ever.",
      images: [teamBuildingImage1, teamBuildingImage2,teamBuildingImage3],
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
    <div id="event4" className="bg-gray-100 py-8 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Corporate Training
      </h1>
      <p className="text-center text-gray-600 mb-12">
        Empower your workforce with training and team-building activities that inspire and deliver results.
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

export default CorporateTraining;
