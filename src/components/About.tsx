import React from 'react';

const About: React.FC = () => {
  return (
    <div>
        <section id="aboutus" className="py-12 bg-gray-50">
  <div className="container mx-auto px-4 md:px-16 text-center">
    <h2 className="text-3xl font-semibold text-teal-900 mb-6">About Us</h2>
    <p className="text-lg text-gray-700 mb-8 text-justify md:text-center">
      At <span className="text-pink-500 font-semibold">Bigwig Events</span>, we believe that every event deserves to be extraordinary. 
      With a passion for creating unforgettable moments, we specialize in delivering tailor-made event planning services 
      designed to meet the unique needs and visions of our clients. From weddings and corporate events to milestone celebrations, 
      we bring creativity, precision, and unparalleled attention to detail to every occasion.
    </p>
    <p className="text-lg text-gray-700 mb-8 text-justify md:text-center">
      With offices in <span className="text-pink-500 font-semibold">Boston</span> and <span className="text-pink-500 font-semibold">New York City</span>, our experienced team proudly serves local clients throughout 
      New England and the Tri-State area, while also offering destination event services worldwide. Over the years, 
      we’ve transformed venues across the globe, from the sandy beaches of the Bahamas to the historic charm of Italy and Ireland.
    </p>
    <p className="text-lg text-gray-700 text-justify md:text-center">
      At Bigwig Events, we take on a limited number of events each year to ensure a high-touch, personalized planning experience 
      for every client. Your vision is our mission, and we’re here to make your dream event a stunning reality.
    </p>
  </div>
</section>

    </div>
  );
};

export default About;
