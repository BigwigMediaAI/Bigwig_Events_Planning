import React from 'react';

const NavBar: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <img
            src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/7b0b3ce0-f3b4-4e2d-bf32-b389ebd89d41/BEP+Stacked+Logo+-+Stars+-+Color+%281%29.png?format=300w"
            alt="Brilliant Event Planning"
            className="w-12 h-12"
          /> */}
          <span className="text-2xl font-bold text-teal-900">
            Bigwig Event's 
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-teal-900">
          {['Home', 'Weddings', 'Events', 'Services', 'About', 'Love Notes', 'Blog', 'Boutique', 'Contact'].map(
            (link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="hover:text-pink-500 transition"
              >
                {link.toUpperCase()}
              </a>
            )
          )}
        </nav>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Instagram">
            <i className="fab fa-instagram text-teal-900 text-xl hover:text-pink-500"></i>
          </a>
          <a href="#" aria-label="Facebook">
            <i className="fab fa-facebook text-teal-900 text-xl hover:text-pink-500"></i>
          </a>
          <a href="#" aria-label="Pinterest">
            <i className="fab fa-pinterest text-teal-900 text-xl hover:text-pink-500"></i>
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
