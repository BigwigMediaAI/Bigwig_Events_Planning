import logo from "../assets/Footer.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // Adjust based on your navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section: Logo and Description */}
        <div>
          <img
            src={logo}
            alt="Brilliant Event Planning logo"
            className="w-full mb-4"
          />
        </div>

        {/* Middle Section: Quick Links */}
        <div className="md:text-center">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                onClick={() => scrollToSection("aboutus")}
                className="hover:underline cursor-pointer"
              >
                About<span className="text-yellow-500">Us</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("bigevents")}
                className="hover:underline cursor-pointer"
              >
                Big<span className="text-yellow-500">Events</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("bigfolio")}
                className="hover:underline cursor-pointer"
              >
                Big<span className="text-yellow-500">Folio</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("bigclients")}
                className="hover:underline cursor-pointer"
              >
                Big<span className="text-yellow-500">Clients</span>
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToSection("bigweddings")}
                className="hover:underline cursor-pointer"
              >
                Big<span className="text-yellow-500">Weddings</span>
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:underline cursor-pointer">
                Contact<span className="text-yellow-500">Us</span>
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:underline cursor-pointer"
              >
                Privacy <span className="text-yellow-500">Policy</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Right Section: Contact Information */}
        <div>
          <p className="text-sm leading-6 text-justify md:text-wrap">
            Bringing your dream <strong>weddings</strong> and{" "}
            <strong>events</strong> to life with unmatched elegance. Based in{" "}
            <span className="underline">Boston</span> and{" "}
            <span className="underline">New York City</span>, we serve Cape Cod,
            Nantucket, The Hamptons, and destinations worldwide.
          </p>
          <p className="text-sm mt-4">
            Email:{" "}
            <a href="mailto:info@bigwigmedia.in" className="text-blue-400">
              info@bigwigmedia.in
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-start space-x-4 mt-6">
            <a
              href="https://www.facebook.com/people/Bigwig-Digital/61575340735142/"
              className="hover:bg-yellow-400 bg-gray-400 p-1 rounded"
              target="blank"
            >
              <FaFacebookF color="black" />
            </a>
            <a
              href="https://x.com/bigwig_digital"
              className="hover:bg-yellow-400 bg-gray-400 p-1 rounded"
              target="blank"
            >
              <FaXTwitter color="black" />
            </a>
            <a
              href="https://www.linkedin.com/company/106698073/admin/dashboard/"
              className="hover:bg-yellow-400 bg-gray-400 p-1 rounded"
              target="blank"
            >
              <FaLinkedin color="black" />
            </a>
            <a
              href="https://www.instagram.com/bigwigdigital/?hl=en"
              className="hover:bg-yellow-400 bg-gray-400 p-1 rounded"
              target="blank"
            >
              <FaInstagram color="black" />
            </a>
            <a
              href="https://www.youtube.com/@BigwigDigital2024"
              className="hover:bg-yellow-400 bg-gray-400 p-1 rounded"
              target="blank"
            >
              <FaYoutube color="black" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-teal-700 mt-12 pt-6 text-center text-xs">
        {/* <div className="flex justify-center space-x-4 mb-4">
          <a href="#" className="hover:underline">
            Client Login
          </a>
          <a href="#" className="hover:underline">
            Credits
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div> */}
        <p>©2025 BIGWIGEVENT, All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
