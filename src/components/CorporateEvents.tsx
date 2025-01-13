import React, { useEffect, useState } from "react";
import rnrImage1 from "../assets/background.webp";
import rnrImage2 from "../assets/Capture-removebg-preview.png";
import rnrImage3 from "../assets/background.webp";
import awardsImage1 from "../assets/background.webp";
import awardsImage2 from "../assets/background.webp";
import productLaunchImage1 from "../assets/background.webp";
import productLaunchImage2 from "../assets/background.webp";
import townhallsImage1 from "../assets/background.webp";
import townhallsImage2 from "../assets/background.webp";
import townhallsImage3 from "../assets/background.webp";

const CorporateEvents: React.FC = () => {
  const subsections = [
    {
      title: "🎉 Rewards & Recognition (R&R)",
      description:
        "Celebrate the achievements of your team with exciting R&R events. Create unforgettable moments of recognition and reward.",
      images: [rnrImage1, rnrImage2, rnrImage3],
    },
    {
      title: "🏆 Awards",
      description:
        "Host glamorous award ceremonies to honor excellence. From stunning stages to engaging themes, we bring your vision to life.",
      images: [awardsImage1, awardsImage2],
    },
    {
      title: "🚀 Product Launch",
      description:
        "Unveil your latest innovations with style. Our team ensures a flawless launch event that leaves a lasting impression.",
      images: [productLaunchImage1, productLaunchImage2],
    },
    {
      title: "📢 Townhalls",
      description:
        "Engage and connect with your team in impactful townhalls. From professional setups to seamless execution, we handle it all.",
      images: [townhallsImage1, townhallsImage2, townhallsImage3],
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
    <div id="bigevents" className="bg-gray-100 py-8 px-4">
      <h1 id="event1" className="text-4xl font-bold text-center text-gray-800 mb-8">
        Corporate Events
      </h1>
      <p className="text-center text-gray-600 mb-12">
        From rewards and recognition to product launches, we deliver exceptional corporate events tailored to your needs.
      </p>
      <div className="space-y-12">
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

export default CorporateEvents;
