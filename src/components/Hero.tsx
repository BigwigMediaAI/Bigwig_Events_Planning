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
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Overlay for dark tint */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_35%),linear-gradient(180deg,rgba(0,0,0,0.48),rgba(0,0,0,0.9))] z-0" />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "bg-slate-950/90 backdrop-blur-md shadow-xl" : ""
        }`}
      >
        <div className="md:w-11/12 mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <div>
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="w-full max-w-[140px] cursor-pointer"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-10 text-lg font-semibold text-white">
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
                  <a
                    href="/contact"
                    className="border-2 border-yellow-400 px-4 py-2 rounded-full text-white hover:border-white hover:text-yellow-400 transition-colors duration-300"
                  >
                    {splitText(item)}
                  </a>
                ) : (
                  <button
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="cursor-pointer hover:text-yellow-400 transition-colors duration-300"
                  >
                    {splitText(item)}
                  </button>
                )}
                {item === "BigEvents" && bigEventsOpen && (
                  <div className="absolute top-12 left-0 bg-slate-900/95 text-white p-4 shadow-2xl w-64 rounded-2xl">
                    <ul className="space-y-2">
                      {[
                        ["Corporate Events", "event1"],
                        ["Corporate Travels", "event3"],
                        ["Corporate Training", "event4"],
                        ["Corporate Festivities", "event5"],
                        ["Corporate Activations", "event2"],
                      ].map(([label, id]) => (
                        <li key={id}>
                          <button
                            onClick={() => scrollToSection(id)}
                            className="w-full text-left hover:text-yellow-400 transition-colors duration-300"
                          >
                            {label}
                          </button>
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
              aria-label="Open menu"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div
        className={`fixed inset-0 z-50 transition-transform duration-300 ease-out pointer-events-none ${
          menuOpen ? "pointer-events-auto" : ""
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={`fixed top-0 right-0 h-full w-11/12 max-w-sm bg-slate-950/95 shadow-2xl border-l border-white/10 backdrop-blur-xl transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
            <div>
              <img
                src={logo}
                alt="Logo"
                className="w-full max-w-[140px] cursor-pointer"
              />
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-3xl text-white focus:outline-none"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>

          <div className="px-6 py-8 space-y-6 text-white">
            {[
              "Home",
              "AboutUs",
              "BigEvents",
              "BigFolio",
              "BigClients",
              "BigWeddings",
              "ContactUs",
            ].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setMenuOpen(false);
                }}
                className="w-full text-left text-2xl font-semibold hover:text-yellow-400 transition-colors duration-300"
              >
                {splitText(item)}
              </button>
            ))}
          </div>
        </aside>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 z-10">
        <div className="mx-auto w-full max-w-5xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight md:leading-snug drop-shadow-2xl">
            <Typewriter
              options={{
                strings: ["Big Moments, Big Memories - Crafted Just for You"],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg md:text-xl text-slate-200/95 leading-relaxed">
            From grand weddings to immersive corporate activations, our team
            delivers bespoke planning, immersive design, and flawless execution
            across every detail.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              ["Weddings", "Elegant ceremonies & receptions"],
              ["Corporate Events", "Professional brand experiences"],
              ["Travel & Retreats", "Curated journeys for teams"],
            ].map(([title, subtitle]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl shadow-2xl shadow-black/20"
              >
                <h2 className="text-xl font-semibold text-white mb-2">
                  {title}
                </h2>
                <p className="text-sm text-slate-300">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
