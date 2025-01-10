import React, { useState, useEffect } from "react";
import logo from "../assets/Capture-removebg-preview.png";
import bg from "../assets/background.webp"


const HeroSection: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Define a more specific type for splitWords to avoid the TypeScript error
  const splitWords: Record<string, [string, string]> = {
    "Home": ["Home", ""],
    "AboutUs": ["About", "Us"],
    "BigEvents": ["Big", "Events"],
    "BigFolio": ["Big", "Folio"],
    "BigWeddings": ["Big", "Weddings"],
    "BigAwards": ["Big", "Awards"],
    "ContactUs": ["Contact", "Us"],
  };

  const splitText = (text: string) => {
    // Use the splitWords object with the correct types
    const [firstPart, secondPart] = splitWords[text] || [text, ""];

    return (
      <>
        <span className="text-white">{firstPart}</span>
        <span className="text-yellow-400">{secondPart}</span>
      </>
    );
  };

  useEffect(() => {
    // Listen for scroll events
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);  // Set isScrolled to true if scroll position is greater than 50px
      } else {
        setIsScrolled(false); // Set isScrolled to false if scroll position is less than 50px
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bg})` }}>
      {/* Navbar */}
      <nav className={`fixed w-full px-8 py-2 text-white flex justify-between items-center z-10 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-75' : ''}`}>
        <div>
          <img src={logo} alt="" className="w-44" />
        </div>
        <div className="hidden md:flex space-x-8 text-lg font-semibold">
          {["Home", "AboutUs", "BigEvents", "BigFolio", "BigWeddings", "BigAwards", "ContactUs"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              {splitText(item)}
            </a>
          ))}
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-yellow-400 focus:outline-none">
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-14 left-0 w-full bg-black bg-opacity-75 text-white flex flex-col items-center space-y-4 py-4 md:hidden z-10">
          {["Home", "AboutUs", "BigEvents", "BigFolio", "BigWeddings", "BigAwards", "ContactUs"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              {splitText(item)}
            </a>
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-0 bg-black bg-opacity-50">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">
          <span className="text-yellow-400">Big</span>
          <span className="text-white">Wigs Concept</span>
        </h1>
        <p className="text-2xl lg:text-3xl font-semibold">Mission Statement</p>
      </div>
    </div>
  );
};

export default HeroSection;
