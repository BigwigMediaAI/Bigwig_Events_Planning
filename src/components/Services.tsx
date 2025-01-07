import React from 'react';

const Services: React.FC = () => {
  return (
    <div id='services' className="px-6 py-12 sm:px-12 lg:px-24 mt-10">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-semibold text-teal-900 mb-6">OUR SERVICES</h2>
      
      {/* Description */}
      <p className="text-justify md:text-center text-lg text-gray-700 mb-8">
        We know that you want the best, so at Brilliant Event Planning, we take a limited number of events
        per year in order to ensure each client receives a high touch planning experience. Each level of service
        is tailor-made to fit the needs and scope of your event.
      </p>
      
      {/* Offices Info */}
      <p className="text-justify md:text-center text-lg text-gray-700 mb-12">
        We have offices in both <span className="text-pink-500 font-semibold">Boston</span> and
        <span className="text-pink-500 font-semibold"> New York City</span>. Our Boston wedding and event planners service Boston, Cape Cod,
        Newport, Martha’s Vineyard, and Nantucket, as well as the New England states of Massachusetts, Maine,
        Rhode Island, New Hampshire, Vermont, and Connecticut. Our New York City office services all of the
        boroughs of NYC, as well as New York State, New Jersey, Connecticut, Pennsylvania, and D.C. However,
        we do travel and both offices offer destination event services. In the past, our work has taken us to
        Mexico, Ireland, Italy, Antigua, The Bahamas, California, and more!
      </p>
      
      {/* Images Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <img
          src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1578334026759-BOIGG9X6YMRYLBOCGB0B/Jen%26Tylan-Married_907.jpg?format=300w" 
          alt="Tent event"
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1719947072592-X5UHT4HXE2Z4DK354NJQ/52274286301_6b6b8835fa_o.jpg?format=300w" 
          alt="Wedding couple"
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1578334148271-R03XLZ5JDGFJ8K8KJUWE/Jen%26Tylan-Married_149.jpg?format=300w" 
          alt="Bridesmaids and dog"
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
        <img
          src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1719947184484-4Z0XV8FELZCRG2DIG9J6/52438423905_838ac29f01_o.jpg?format=300w" 
          alt="Dinner event"
          className="w-full h-80 object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Services;
