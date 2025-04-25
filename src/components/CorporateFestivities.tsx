import React, { useEffect, useState } from "react";
import decorImage1 from "../assets/Hero/Decor.webp"; // Replace with actual images
import decorImage2 from "../assets/Hero/Decor2.webp"; // Replace with actual images
import decorImage3 from "../assets/Hero/Decor3.webp"; // Replace with actual images
import partyImage1 from "../assets/Hero/parties.webp"; // Replace with actual images
import partyImage2 from "../assets/Hero/parties2.webp"; // Replace with actual images
import partyImage3 from "../assets/Hero/parties3.webp"; // Replace with actual images

const CorporateFestivities: React.FC = () => {
  const subsections = [
    {
      title:
        "Office Décor – Transform Your Workspace into a Festive Wonderland",
      description:
        "Looking to brighten up your office with festive vibes, Our expert décor team can transform your workspace into a stunning, joyful environment—be it for the holiday season, annual celebrations, or themed occasions. From elegant designs to bold, colorful setups, we’ll make your office come alive with the festive spirit.",
      images: [decorImage1, decorImage2, decorImage3],
    },
    {
      title: "Parties – Celebrate Success, Big or Small",
      description:
        "Whether it’s a year-end bash, a milestone celebration, or a festival party, we know how to throw an event your team will rave about. From venue selection and décor to entertainment and catering, we handle everything so you can focus on enjoying the moment. Let’s make your next party an unforgettable experience!",
      images: [partyImage1, partyImage2, partyImage3],
    },
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
    <div id="event5" className=" py-8 px-4 mb-10">
      <h1 className="text-4xl font-bold text-center text-white mb-2">
        Corporate Festivities
      </h1>
      <p className="text-center text-gray-300 mb-12">
        Celebrate every occasion in style with our office décor and party
        planning services, tailored to make your festivities memorable.
      </p>
      <div className="space-y-12 md:w-4/5 mx-auto">
        {subsections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-start md:[400px] bg-[#28282B] border border-gray-700 p-2 shadow-lg rounded-lg overflow-hidden ${
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

export default CorporateFestivities;
