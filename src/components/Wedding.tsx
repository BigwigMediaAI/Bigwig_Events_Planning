import img1 from "../assets/Hero/town3.webp";
import img2 from "../assets/Hero/weeding.webp";
import img3 from "../assets/Hero/weeding4.webp";
import img4 from "../assets/Hero/weeding2.webp";

const WeddingSection = () => {
  return (
    <div id="bigweddings" className="relative bg-gray-50 text-gray-800">
      {/* Content Section */}
      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Make Your Dream Wedding a Reality
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Discover stunning venues, breathtaking decor, and seamless planning
            to make your special day unforgettable.
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Section - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg overflow-hidden shadow-lg h-40">
              <img
                src={img1}
                alt="Wedding Venue"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-40">
              <img
                src={img2}
                alt="Wedding Decor"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-40">
              <img
                src={img3}
                alt="Couple Dancing"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-40">
              <img
                src={img4}
                alt="Wedding Cake"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="text-center md:text-left flex flex-col justify-center">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Your Perfect Day, Tailored to You
            </h2>
            <p className="text-justify md:text-left text-gray-600 mb-6">
              At our wedding planning services, we bring your dream wedding to
              life. Whether it's a grand celebration or an intimate gathering,
              we take care of every detail—from selecting the perfect venue to
              designing exquisite decor and managing all arrangements.
            </p>
            <ul className="text-justify md:text-left list-disc list-inside text-gray-600 mb-6">
              <li>Stunning venues to match your vision</li>
              <li>Flawless execution of every detail</li>
              <li>Personalized themes and decor</li>
              <li>Expert coordination for a stress-free day</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingSection;
