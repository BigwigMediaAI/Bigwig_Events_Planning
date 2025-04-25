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
    BigClients: ["Big", "Clients"],
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setMenuOpen(false);
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
      id="home"
      className="relative h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay for dark tint */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-black bg-opacity-65" : ""
        }`}
      >
        <div className="md:w-5/6 mx-auto px-4 md:px-8 py-2 flex justify-between items-center">
          <div>
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="w-full max-w-[140px] cursor-pointer"
              />
            </a>
          </div>
          <div className="hidden md:flex space-x-8 text-lg font-semibold relative text-white">
            {[
              "Home",
              "AboutUs",
              "BigEvents",
              "BigFolio",
              "BigClients",
              "BigWeddings",
              "ContactUs",
            ].map((item) => (
              <div
                key={item}
                className="relative"
                onMouseEnter={() =>
                  item === "BigEvents" && setBigEventsOpen(true)
                }
                onMouseLeave={() =>
                  item === "BigEvents" && setBigEventsOpen(false)
                }
              >
                {item === "ContactUs" ? (
                  // For ContactUs, add a border and make it a link to the contact page
                  <a
                    href="/contact" // Assuming "/contact" is the contact page URL
                    className="border-2 border-yellow-400 px-4 py-2 rounded-lg text-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    {splitText(item)}
                  </a>
                ) : (
                  <a
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="cursor-pointer hover:text-yellow-400 transition-colors duration-300"
                  >
                    {splitText(item)}
                  </a>
                )}
                {item === "BigEvents" && bigEventsOpen && (
                  <div className="absolute top-7 left-0 bg-black bg-opacity-70 text-white p-4 shadow-lg w-60 rounded">
                    <ul className="space-y-2">
                      {[
                        ["Corporate Events", "event1"],
                        ["Corporate Activations", "event2"],
                        ["Corporate Travels", "event3"],
                        ["Corporate Training", "event4"],
                        ["Corporate Festivities", "event5"],
                      ].map(([label, id]) => (
                        <li key={id}>
                          <a
                            onClick={() => scrollToSection(id)}
                            className="block hover:text-yellow-400 transition-colors cursor-pointer"
                          >
                            {label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-yellow-400 text-3xl focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-16 left-0 w-full bg-black bg-opacity-90 text-white flex flex-col items-center space-y-4 py-4 z-20">
          {[
            "Home",
            "AboutUs",
            "BigEvents",
            "BigFolio",
            "BigClients",
            "BigWeddings",
            "ContactUs",
          ].map((item) => (
            <a
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="cursor-pointer hover:text-yellow-400 transition-colors duration-300"
            >
              {splitText(item)}
            </a>
          ))}
        </div>
      )}

      {/* Hero Content */}
      <div
        id="top"
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-300 px-4 z-10"
      >
        <div className="w-5/6 mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold">
            <Typewriter
              options={{
                strings: ["Big Moments, Big Memories - Crafted Just for You"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h1>
          <p className="text-lg md:text-xl mt-4">
            From grand weddings to awe-inspiring events, we bring your vision to
            life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
