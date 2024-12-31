import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-teal-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center space-y-4 md:space-y-6">
        <h3 className="text-sm uppercase tracking-widest">Featured On</h3>
        <img
          src="path-to-your-image/logo-placeholder.png"
          alt="Featured Logo"
          className="w-20 h-20"
        />
        <p className="text-sm md:text-base leading-relaxed">
          Top wedding and event planner and luxury design studio with offices in{' '}
          <strong>Boston</strong> and <strong>New York City</strong>. New England
          wedding planner serving New York, Boston, Cape Cod, Nantucket, Martha’s Vineyard, Rhode
          Island, The Hamptons, <strong>Maine</strong> & Destinations in Europe, Mexico, and beyond.
        </p>
        <button className="bg-white text-teal-900 px-6 py-2 rounded-md shadow hover:bg-gray-100">
          Contact Us
        </button>
        <div className="flex space-x-4 mt-4">
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook text-xl"></i>
          </a>
          <a href="#" aria-label="Pinterest">
            <i className="fab fa-pinterest text-xl"></i>
          </a>
        </div>
        <div className="text-xs md:text-sm mt-6 space-y-2">
          <nav className="space-x-4">
            <a href="#" className="hover:underline">Client Login</a>
            <a href="#" className="hover:underline">Credits</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </nav>
          <p>©2008-2024 Brilliant Event Planning™ LLC, All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
