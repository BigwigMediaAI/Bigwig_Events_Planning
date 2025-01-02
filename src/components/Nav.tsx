import React, { useState } from "react";

const Nav: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 70; // Adjust for sticky navbar height
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close the mobile menu
  };

  return (
    <nav className="bg-white sticky top-0 z-50">
      <div className="container px-4 md:px-16 mx-auto flex justify-between items-center py-3">
        {/* Logo Section */}
        <div className="flex items-center font-semibold text-lg md:text-xl space-x-4">
          <button onClick={() => handleScroll("home")} className="text-teal-900">
            BIGWIG EVENTS
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-teal-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-2 text-teal-900 text-base">
          {[
            "HOME",
            "WEDDINGS",
            "EVENTS",
            "SERVICES",
            "ABOUT",
            "LOVE NOTES",
            "BLOGS",
            "BOUTIQUE",
            "CONTACT",
          ].map((label, index) => (
            <li key={index}>
              <button
                className="relative overflow-hidden group rounded-lg px-3 py-2 hover:text-pink-500"
                onClick={() => handleScroll(label.toLowerCase())}
              >
                <span className="relative z-10">{label}</span>
                <span className="absolute inset-0 bg-gray-200 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 ease-in-out"></span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay for Darkening/Blur Effect */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-20 right-0 bg-black bg-opacity-70" />
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md p-4 flex flex-col space-y-4 z-50 h-[50vh] w-full max-w-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {[
              "HOME",
              "WEDDINGS",
              "EVENTS",
              "SERVICES",
              "ABOUT",
              "LOVE NOTES",
              "BLOGS",
              "BOUTIQUE",
              "CONTACT",
            ].map((label, index) => (
              <li key={index}>
                <button
                  className="text-teal-900 hover:text-pink-500 text-base"
                  onClick={() => handleScroll(label.toLowerCase())}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
