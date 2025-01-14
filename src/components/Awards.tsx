import award1 from "../assets/DSC_0170.webp";
import award2 from "../assets/DSC_0170.webp";
import award3 from "../assets/DSC_0170.webp";
import award4 from "../assets/DSC_0170.webp";

const AwardsSection = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-16 px-6 md:px-12 lg:px-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Achievements</h1>
        <p className="mt-4 text-lg text-gray-600">
          We are proud to be recognized for our exceptional service and commitment to excellence.
        </p>
      </div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Award 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={award1}
              alt="Award 1"
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-700">
            Best Event Planner
          </h3>
          <p className="text-gray-600 mt-2">
            Recognized for organizing the most exceptional events of the year.
          </p>
        </div>

        {/* Award 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={award2}
              alt="Award 2"
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-700">
            Excellence in Design
          </h3>
          <p className="text-gray-600 mt-2">
            Honored for delivering outstanding and creative decor designs.
          </p>
        </div>

        {/* Award 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={award3}
              alt="Award 3"
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-700">
            Customer Satisfaction
          </h3>
          <p className="text-gray-600 mt-2">
            Awarded for providing exceptional customer service and experiences.
          </p>
        </div>

        {/* Award 4 */}
        <div className="flex flex-col items-center text-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src={award4}
              alt="Award 4"
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold text-gray-700">
            Innovative Solutions
          </h3>
          <p className="text-gray-600 mt-2">
            Recognized for implementing cutting-edge solutions in the industry.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwardsSection;
