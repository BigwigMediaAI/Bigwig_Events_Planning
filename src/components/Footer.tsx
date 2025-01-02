import { useState, useEffect } from "react";

const Footer = () => {
  // Slideshow images
  const images = [
    "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1599165661161-DYF8YYD0C7BDNM2HX2I8/826dc292cc7643e96a4b2e5cfbceb7a05b-NYM-Logo.rsocial.w1200.jpg?format=750w",
    "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1599597285647-M6PL0VN8ZK1IY43XPC7J/Screen+Shot+2020-09-08+at+4.34.19+PM.png?format=300w", // Replace with your actual image
    "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1588082195058-9N7E43WZZK9FRBZZHRBI/over-the-moon-logo-2.jpg?format=500w", // Replace with your actual image
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle automatic image change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <footer className="bg-teal-800 text-white py-8 px-6">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Slideshow */}
        <div className="flex justify-center md:justify-start">
          <img
            src={images[currentImageIndex]}
            alt={`Slideshow Image ${currentImageIndex + 1}`}
            className="max-w-xs transition-opacity duration-500 h-[200px]"
          />
        </div>

        {/* Right Section: Content */}
        <div>
          <p className="text-sm leading-6 mb-6">
            Top wedding and event planner and luxury design studio with offices
            in <span className="underline">Boston</span> and{" "}
            <span className="underline">New York City</span>. New England
            wedding planner serving New York, Boston, Cape Cod, Nantucket,
            Martha’s Vineyard, Rhode Island, The Hamptons,{" "}
            <span className="underline">Maine</span> & Destinations in Europe,
            Mexico, and beyond.
          </p>
          <div className="text-center md:text-left">
            <button className="bg-white text-teal-800 py-2 px-6 rounded-full text-sm font-medium hover:bg-gray-200 mb-4">
              Contact Us
            </button>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-gray-300 text-lg"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-gray-300 text-lg"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="hover:text-gray-300 text-lg"
              >
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-gray-600 mt-8 pt-6 text-center text-xs">
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">
            Client Login
          </a>
          <a href="#" className="hover:underline">
            Credits
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
        <p className="mt-4">
          ©2008-2024 Brilliant Event Planning™ LLC, All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
