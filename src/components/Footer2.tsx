import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer2() {
  return (
    <div className="flex flex-col justify-between">
      {/* Footer Section */}
      <footer className="bg-black text-white text-sm pb-16 md:pb-5 py-7 px-10 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0 text-gray-400">
          © Bigwig Events 2025 |{" "}
          <a href="/privacy-policy" className="underline hover:text-gray-400">
            PRIVACY POLICY
          </a>
        </div>
        <div className="mb-2 md:mb-0 text-gray-400">
          MADE WITH <span className="text-red-500">❤️</span>
        </div>
        <div className="flex space-x-4 text-xl">
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
      </footer>
    </div>
  );
}
