import React, { useState, useEffect } from "react";
import logo from "../assets/Capture-removebg-preview.png";
import bg from "../assets/background.webp";
import Typewriter from "typewriter-effect";

const HeroSection: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [bigEventsOpen, setBigEventsOpen] = useState(false);

  const splitWords: Record<string, [string, string]> = {
    Home: ["Home", ""],
    AboutUs: ["About", "Us"],
    BigEvents: ["Big", "Events"],
    BigFolio: ["Big", "Folio"],
    BigWeddings: ["Big", "Weddings"],
    BigAwards: ["Big", "Awards"],
    ContactUs: ["Contact", "Us"],
  };

  const splitText = (text: string) => {
    const [firstPart, secondPart] = splitWords[text] || [text, ""];
    return (
      <>
        <span className="text-white">{firstPart}</span>
        <span className="text-yellow-400">{secondPart}</span>
      </>
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="bg-black bg-opacity-50 relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Navbar */}
      <nav
        className={`fixed w-full px-8 py-2 text-white flex justify-between items-center z-10 transition-all duration-300 ${
          isScrolled ? "bg-black bg-opacity-65" : ""
        }`}
      >
        <div>
          <img src={logo} alt="Logo" className="w-44 md:w-52" />
        </div>
        <div className="hidden md:flex space-x-8 text-lg font-semibold relative">
          {[
            "Home",
            "AboutUs",
            "BigEvents",
            "BigFolio",
            "BigWeddings",
            "BigAwards",
            "ContactUs",
          ].map((item) => (
            <div
              key={item}
              className="relative"
              onMouseEnter={() => item === "BigEvents" && setBigEventsOpen(true)}
              onMouseLeave={() => item === "BigEvents" && setBigEventsOpen(false)}
            >
              <a
                href={`#${item}`}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                {splitText(item)}
              </a>
              {item === "BigEvents" && bigEventsOpen && (
                <div className="absolute top-7 left-0 bg-black bg-opacity-60 text-white p-4 shadow-lg w-60 rounded">
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="#event1"
                        className="block hover:text-yellow-400 transition-colors"
                      >
                        Corporate Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="#event2"
                        className="block hover:text-yellow-400 transition-colors"
                      >
                        Corporate Activations
                      </a>
                    </li>
                    <li>
                      <a
                        href="#event3"
                        className="block hover:text-yellow-400 transition-colors"
                      >
                        Corporate Travels
                      </a>
                    </li>
                    <li>
                      <a
                        href="#event3"
                        className="block hover:text-yellow-400 transition-colors"
                      >
                        Corporate Training
                      </a>
                    </li>
                    <li>
                      <a
                        href="#event3"
                        className="block hover:text-yellow-400 transition-colors"
                      >
                        Corporate Festivities
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-yellow-400 text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
{menuOpen && (
  <div className="fixed top-20 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center space-y-4 py-4 z-20">
    {[
      "Home",
      "AboutUs",
      "BigEvents",
      "BigFolio",
      "BigWeddings",
      "BigAwards",
      "ContactUs",
    ].map((item) => (
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
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-300 px-4 z-0 bg-black bg-opacity-50">
        <h1 className="text-3xl md:text-5xl font-bold">
          <Typewriter
            options={{
              strings: [
                "Big Moments, Big Memories - Crafted Just for You",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed:50,
            }}
          />
        </h1>
        <p className="text-lg md:text-xl mt-4">
          From grand weddings to awe-inspiring events, we bring your vision to life.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
