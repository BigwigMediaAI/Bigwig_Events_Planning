
const Footer = () => {
 return (
    <footer className="bg-teal-800 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Slideshow */}
        <div className="flex justify-center md:justify-start">
          <h1 className="text-3xl md:text-5xl ">BIGWIG EVENTS</h1>
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
