import React from "react";

const FollowUsSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-semibold text-gray-800">
          Follow us to see behind the scenes:
        </h2>
        <p className="text-lg text-gray-600 mt-2">@BIGWIGEVENTS</p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 px-8 max-w-6xl mx-auto">
        <img
          src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1722640258496-6SH1NCY7YC0P29EELFBP/image-asset.jpeg?format=300w"
          alt="Event 1"
          className="w-full h-auto rounded-lg object-cover"
        />
        
        <img
          src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1721775783789-JVYCZIP5ITATLITU99B3/image-asset.jpeg?format=300w"
          alt="Event 3"
          className="w-full h-auto rounded-lg object-cover"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1721394966249-NS81SL3AVW7A09UOM1IL/image-asset.jpeg?format=300w"
          alt="Event 4"
          className="w-full h-auto rounded-lg object-cover"
        />
      
        <img
          src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1720652662498-WB533A8F3V22H6D1XFGP/image-asset.jpeg?format=300w"
          alt="Event 6"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default FollowUsSection;
