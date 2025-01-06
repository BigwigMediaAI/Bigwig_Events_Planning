import { useState } from "react";
import { FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import intro from "../assets/Boston & NYC Wedding Planners & Event Planners Brilliant.mp4"

const HeroSection = () => {
  const [isMuted2, setisMuted2] = useState(true);

  const toggleMute = () => {
    setisMuted2(!isMuted2);
  };
  return (
    <div className="bg-gray-100 pb-5">
      <div>
        {/* Hero Image */}
        <div className="mb-6">
          <img
            src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1694627570727-4Z839ITBKYQUD67EZ9MI/52438307865_d0b07f02c1_o+%282%29.jpg?format=2500w"
            alt="Bigwig Events"
            className=" shadow-lg w-full"
          />
        </div>

        <div className=" w-full h-full py-6 px-6 flex flex-col items-center justify-center text-justify md:text-center  text-teal-900">
        <h1 className="text-3xl md:text-5xl mb-4">We are Bigwig.</h1>
        <p className="text-md md:text-lg max-w-5xl">
          Bigwig Events is a premier, luxury wedding and event planning company
          serving NYC and Boston. We specialize in creating extraordinary,
          tailor-made experiences for dynamic and discerning clients who value
          elegance, creativity, and seamless execution.
        </p>
        <p className="text-md md:text-lg max-w-3xl mt-4">
          At Bigwig, we draw inspiration from your vision and story,
          transforming them into unforgettable events that leave a lasting
          impression. Let us handle the details so you can focus on enjoying a
          flawless and stress-free planning experience.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-3 rounded-lg overflow-hidden transform transition-all duration-300">
                <video
                  src={intro}
                  className="w-full h-auto rounded-lg shadow-lg lazyload"
                  autoPlay
                  muted={isMuted2}
                  loop
                />

                {/* Mute/Unmute Button */}
                <button
                  onClick={toggleMute}
                  className="absolute top-4 left-4 bg-gray-100 bg-opacity-75 text-gray-800 rounded-full p-3 hover:bg-gray-100 focus:outline-none transition-all duration-300 flex items-center group"
                >
                  {/* Icon */}

                  {isMuted2 ? (
                    <FaVolumeMute className="text-sm md:text-2xl" />
                  ) : (
                    <FaVolumeUp className="text-sm md:text-2xl" />
                  )}

                  {/* Expanding Text */}
                  <span
                    className="ml-2 text-xl font-bold text-gray-800 overflow-hidden transition-all duration-300 ease-in-out max-w-0 opacity-0 group-hover:min-w-[6rem] group-hover:opacity-100
    hidden sm:inline-block" // Hide on mobile, show on screens >= sm
                  >
                    {isMuted2 ? "Listen" : "Mute"}
                  </span>
                </button>
              </div>
      </div>
    </div>
  );
};

export default HeroSection;
