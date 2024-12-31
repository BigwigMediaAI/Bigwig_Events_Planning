import React from 'react';

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-semibold text-teal-900 mb-4">Effortless Elegance</h2>
            <p className="text-gray-700 mb-6">
              We create bespoke weddings and events that are inspired by our clients. We work
              collaboratively to ensure your event is cohesive and thoughtful. At Brilliant Event
              Planning, we believe that even the smallest details can have a huge impact.
            </p>
            <button className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition">
              Wedding Portfolio
            </button>
          </div>

          {/* Right Image */}
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588192761940-7Q2PMBSFN32XMDTSXRTQ/Best+Wedding+Planner+NYC+and+Boston?format=1500w"
              alt="Elegant Event"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Image */}
          <div>
            <img
              src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588192761940-7Q2PMBSFN32XMDTSXRTQ/Best+Wedding+Planner+NYC+and+Boston?format=1500w"
              alt="Award Winning Team"
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="bg-teal-900 text-white p-8 rounded-lg">
            <h2 className="text-4xl font-semibold mb-4">Award Winning Team</h2>
            <p className="mb-6">
              We are Type-A creatives backed by experienced event planning teams in both our Boston
              and NYC locations. We take on a limited number of events per year to ensure each
              client receives the highest level of service and attention. At Brilliant Event
              Planning, we’re dedicated to producing not only a spectacular event, but the
              foundation for memories that will last a lifetime.
            </p>
            <button className="bg-pink-500 text-white py-2 px-6 rounded-lg hover:bg-pink-600 transition">
              Meet Sarah and Chelsea
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
