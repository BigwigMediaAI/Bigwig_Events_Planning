import img1 from "../assets/Hero/town3.webp";
import img2 from "../assets/Hero/weeding.webp";
import img3 from "../assets/Hero/weeding4.webp";
import img4 from "../assets/Hero/weeding2.webp";

const WeddingSection = () => {
  return (
    <div id="bigweddings" className="relative text-gray-800">
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
            <div className="rounded-lg overflow-hidden shadow-lg h-60">
              <img
                src={img1}
                alt="Wedding Venue"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-60">
              <img
                src={img2}
                alt="Wedding Decor"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-60">
              <img
                src={img3}
                alt="Couple Dancing"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg h-60">
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
            <p className="text-justify md:text-left text-gray-600 mb-3">
              At our wedding planning services, we specialize in transforming
              your dreams into reality. Whether it's a grand celebration or an
              intimate gathering, we ensure that every detail is carefully
              handled—from selecting the perfect venue to designing exquisite
              decor and managing all aspects of the event. Our team of seasoned
              professionals takes pride in creating unforgettable memories,
              leaving you free to enjoy your special day without any stress or
              worries.
            </p>
            <p className="text-justify md:text-left text-gray-600 mb-3">
              Our personalized approach means we listen to your unique vision
              and turn it into a beautifully orchestrated experience. With our
              expertise in handling everything from floral arrangements to
              entertainment, catering, and guest management, you can be assured
              that your wedding will be a seamless blend of elegance and joy.
            </p>
            <ul className="text-justify md:text-left list-disc list-inside text-gray-600 mb-3">
              <li>Stunning venues handpicked to match your vision and style</li>
              <li>
                Flawless execution of every detail, ensuring a smooth flow of
                events
              </li>
              <li>
                Personalized themes and decor tailored to your preferences
              </li>
              <li>
                Expert coordination by dedicated professionals for a stress-free
                experience
              </li>
              <li>
                High-quality catering with menus curated to delight your guests
              </li>
              <li>
                Entertainment options designed to enhance the joy of your
                special day
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingSection;
