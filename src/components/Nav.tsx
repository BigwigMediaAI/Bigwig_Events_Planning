import { useState, useEffect } from "react";
import logo from "../assets/Capture-removebg-preview.png"; // Adjust the path as needed

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 bg-black ${
          isScrolled ? "bg-black bg-opacity-65" : ""
        }`}
      >
        <div className="md:w-5/6 mx-auto px-4 md:px-8 py-2 flex justify-between items-center">
          {/* Logo */}
          <div>
            <a href="/">
              <img
                src={logo}
                alt="Logo"
                className="w-full max-w-[140px] cursor-pointer"
              />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
