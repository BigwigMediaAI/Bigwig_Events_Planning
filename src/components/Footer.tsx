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
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#030303] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_0.9fr_1fr]">
        <div className="space-y-6">
          <img src={logo} alt="Bigwig Events logo" className="w-48" />
          <p className="text-gray-300 leading-7">
            We create elevated event experiences with meticulous planning,
            creative direction, and premium service for brands, weddings, and
            corporate celebrations.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <button
                onClick={() => scrollToSection("aboutus")}
                className="hover:text-yellow-400"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("bigevents")}
                className="hover:text-yellow-400"
              >
                Corporate Events
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("bigfolio")}
                className="hover:text-yellow-400"
              >
                Gallery
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("bigclients")}
                className="hover:text-yellow-400"
              >
                Clients
              </button>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="text-gray-300 leading-7">
            Email us at <br />
            <a
              href="mailto:info@bigwigmedia.in"
              className="text-yellow-400 hover:underline"
            >
              info@bigwigmedia.in
            </a>
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-4">
            {[
              {
                href: "https://www.facebook.com/people/Bigwig-Digital/61575340735142/",
                icon: <FaFacebookF />,
              },
              {
                href: "https://x.com/bigwig_digital",
                icon: <FaXTwitter />,
              },
              {
                href: "https://www.linkedin.com/company/106698073/admin/dashboard/",
                icon: <FaLinkedin />,
              },
              {
                href: "https://www.instagram.com/bigwigdigital/?hl=en",
                icon: <FaInstagram />,
              },
              {
                href: "https://www.youtube.com/@BigwigDigital2024",
                icon: <FaYoutube />,
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gray-800 text-white transition hover:bg-yellow-400 hover:text-black"
                target="_blank"
                rel="noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
        ©2025 BIGWIGEVENT, All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
