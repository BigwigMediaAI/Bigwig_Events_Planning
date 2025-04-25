import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <section id="aboutus" className="py-12 bg-black">
        <div className="w-5/6 mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
          <p className="text-lg text-gray-300 mb-8 text-justify md:text-center">
            At <strong className="text-yellow-400">Bigwig Events</strong>, we
            believe that every celebration deserves to be exceptional. With a
            passion for creativity and excellence, we specialize in crafting
            unforgettable moments tailored to your unique vision.
          </p>
          <p className="text-lg text-gray-300 mb-8 text-justify md:text-center">
            From elegant weddings and corporate gatherings to private
            celebrations and immersive experiences, our team is dedicated to
            delivering seamless, personalized service from start to finish.
            Every detail matters — and we ensure nothing is overlooked.
          </p>
          <p className="text-lg text-gray-300 text-justify md:text-center">
            At <strong className="text-yellow-400">Bigwig Events</strong>, we
            take on a limited number of events each year to maintain our
            commitment to quality and customization. Your story is our
            inspiration, and we’re here to transform your vision into a
            beautifully orchestrated reality that leaves a lasting impression.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
