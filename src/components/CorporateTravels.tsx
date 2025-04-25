import React, { useEffect, useState } from "react";
import miceImage1 from "../assets/Hero/MICE.webp";
import miceImage2 from "../assets/Hero/MICE2.webp";
import miceImage3 from "../assets/Hero/MICE3.webp";
import offsiteImage1 from "../assets/Hero/OFSITE.webp";
import offsiteImage2 from "../assets/Hero/OFSITE1.webp";
import offsiteImage3 from "../assets/Hero/OFSITE2.webp";
import domesticImage1 from "../assets/background.webp";
import domesticImage2 from "../assets/background.webp";

const CorporateTravels: React.FC = () => {
  const subsections = [
    {
      title: "MICE (Meetings, Incentives, Conferences, Exhibitions)",
      description:
        "Make your next business gathering a resounding success. From high-level meetings and rewarding incentive trips to large-scale conferences and exhibitions, we handle all the logistics to ensure your event is productive, enjoyable, and perfectly executed.",
      images: [miceImage1, miceImage2, miceImage3],
    },
    {
      title: "Offsites – Work Hard, Play Harder",
      description:
        "Want to strengthen team spirit while working in a refreshing new environment? Our expertly curated offsites blend professional development with relaxation and team bonding, helping your employees recharge and collaborate in inspiring destinations.",
      images: [offsiteImage1, offsiteImage2, offsiteImage3],
    },
    {
      title: "Domestic Travel Packages – Discover New Horizons",
      description:
        "Planning a business trip within the country? Our custom domestic travel packages cover everything from transportation and accommodation to curated itineraries ensuring a smooth and delightful travel experience for your team.",
      images: [domesticImage1, domesticImage2, offsiteImage3],
    },
    // Add more subsections here if needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % subsections[0].images.length
      ); // Loop through images
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div id="event3" className=" py-8 px-4 md:px-10 mb-10">
      <h1
        id="travels"
        className="text-4xl font-semibold text-center text-white mb-2"
      >
        Corporate Travels
      </h1>
      <p className="text-center text-gray-300 mb-12">
        From MICE events to domestic travel packages, we ensure seamless
        corporate travel experiences tailored to your needs.
      </p>
      <div className="space-y-12 md:w-11/12 mx-auto">
        {subsections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:h-[400px] md:flex-row items-start bg-[#28282B] border border-gray-700 p-2 shadow-lg rounded-lg overflow-hidden ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="p-6 md:w-1/2">
              <h2 className="text-2xl font-semibold text-gray-200 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-300 mb-6">{section.description}</p>
            </div>
            <div className="md:w-1/2 p-4 relative">
              {/* Single image displayed with smooth transitions */}
              <img
                src={section.images[currentImageIndex]}
                alt={`${section.title} ${currentImageIndex + 1}`}
                className="w-full h-64 md:h-[350px] object-cover rounded-lg shadow-md transition-all duration-1000"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CorporateTravels;
