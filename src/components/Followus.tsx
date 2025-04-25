import React from "react";
import follow1 from "../assets/IMG_7756.webp";
import follow2 from "../assets/IMG-20250113-WA0047.webp";
import follow3 from "../assets/DB2A5526.webp";
import follow4 from "../assets/IMG-20250113-WA0030.webp";

const FollowUsSection: React.FC = () => {
  return (
    <div className="md:w-11/12 mx-auto py-4 mb-10">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Follow us to see behind the scenes:
        </h2>
        <p className="text-lg text-gray-300 mt-2">@BIGWIGEVENTS</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 mx-auto">
        <img
          src={follow1}
          alt="Event 1"
          className="w-full h-[200px] md:h-[350px] rounded-lg object-fill"
        />

        <img
          src={follow2}
          alt="Event 3"
          className="w-full h-[200px] md:h-[350px] rounded-lg object-fill"
        />
        <img
          src={follow4}
          alt="Event 4"
          className="w-full h-[200px] md:h-[350px] rounded-lg object-fill"
        />

        <img
          src={follow3}
          alt="Event 6"
          className="w-full h-[200px] md:h-[350px] rounded-lg object-fill"
        />
      </div>
    </div>
  );
};

export default FollowUsSection;
