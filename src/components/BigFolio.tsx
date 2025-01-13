import React, { useEffect, useState } from "react";
import img1 from "../assets/DB2A5526.webp"
import img2 from "../assets/DB2A5541.webp"
import img3 from "../assets/DSC_0074.webp"
import img4 from "../assets/DSC_0170.webp"
import img5 from "../assets/DSC_6509.webp"
import img6 from "../assets/DSC_6536.webp"
import img7 from "../assets/DSC_6662.webp"
import img8 from "../assets/IMG-20250113-WA0020.webp"
import img9 from "../assets/IMG-20250113-WA0021.webp"
import img10 from "../assets/IMG-20250113-WA0022.webp"
import img11 from "../assets/IMG-20250113-WA0023.webp"
import img12 from "../assets/IMG-20250113-WA0024.webp"
import img13 from "../assets/IMG-20250113-WA0025.webp"
import img14 from "../assets/IMG-20250113-WA0026.webp"
import img15 from "../assets/IMG-20250113-WA0030.webp"
import img16 from "../assets/IMG-20250113-WA0032.webp"
import img17 from "../assets/IMG-20250113-WA0045.webp"
import img18 from "../assets/IMG-20250113-WA0046.webp"
import img19 from "../assets/IMG-20250113-WA0047.webp"
import img20 from "../assets/IMG-20250113-WA0050.webp"
import img21 from "../assets/IMG-20250113-WA0051.webp"
import img22 from "../assets/IMG-20250113-WA0052.webp"
import img23 from "../assets/IMG-20250113-WA0053.webp"
import img24 from "../assets/IMG-20250113-WA0058.webp"
import img25 from "../assets/IMG_0196.webp"
import img26 from "../assets/IMG_0197.webp"
import img27 from "../assets/IMG_0201.webp"
import img28 from "../assets/IMG_0202.webp"
import img29 from "../assets/IMG_0420.webp"
import img30 from "../assets/IMG_0427.webp"
import img31 from "../assets/IMG_5791.webp"
import img32 from "../assets/IMG_5836.webp"
import img33 from "../assets/IMG_6293.webp"
import img34 from "../assets/IMG_7662.webp"
import img35 from "../assets/IMG_7756.webp"
import img36 from "../assets/_MG_5102.webp"
import img37 from "../assets/_MG_5119.webp"
import img38 from "../assets/_MG_5156.webp"
import img39 from "../assets/_MG_5260.webp"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import logo from "../assets/Capture-removebg-preview.png"
import bg from "../assets/background.webp";



interface ImageItem {
  src: string;
  alt: string;
  label: string;
}

const images: ImageItem[] = [
    {
      src: img1, // Replace with actual image URL
      alt: "Newport Fairytale",
      label: "NEWPORT FAIRYTALE",
    },
    {
      src: img2, // Replace with actual image URL
      alt: "Whimsical Boathouse",
      label: "WHIMSICAL BOATHOUSE",
    },
    {
      src: img3, // Replace with actual image URL
      alt: "Southern Elegance",
      label: "SOUTHERN ELEGANCE",
    },
    {
      src: img4, // Replace with actual image URL
      alt: "FARMHOUSE CHIC",
      label: "FARMHOUSE CHIC",
    },
    {
      src:img5, // Replace with actual image URL
      alt: "LAKESIDE HUDSON VALLEY",
      label: "LAKESIDE HUDSON VALLEY",
    },
    {
      src: img6, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src: img7, // Replace with actual image URL
      alt: "TENTED BOSTON ROOFTOP",
      label: "TENTED BOSTON ROOFTOP",
    },
    {
      src: img8, // Replace with actual image URL
      alt: "MODERN MUSEUM",
      label: "MODERN MUSEUM",
    },
    {
      src:img9, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img10, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img11, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img12, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img13, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img14, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img15, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img16, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img17, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img18, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img19, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img20, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img21, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img22, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img23, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img24, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img25, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img26, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img27, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img28, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img29, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img30, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img31, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img32, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img33, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img34, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img35, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img36, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img37, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img38, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src:img39, // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    // Add more images here
  ];

   

const BigFolio: React.FC = () => {

    const [isScrolled, setIsScrolled] = useState(false)

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
    <div>
        <div  className="bg-black bg-opacity-50 relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}>
        <nav
        className={`fixed w-full px-8 py-2 text-white flex justify-between items-center z-10 transition-all duration-300 ${
          isScrolled ? "bg-black bg-opacity-65" : ""
        }`}
      >
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-44 md:w-52 cursor-pointer"
          
          />
        </div>

        <div
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-gray-300 px-4 z-0"
      >
      </div>
        
      </nav>
        </div>
       
    
    <section id='weddings' className="pt-12 px-4 lg:px-20 bg-gray-50 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-teal-900 mb-6">Planning and Design</h2>
        <p className="text-gray-600 mb-8">
          We offer wedding planning and design across New England from our studios in{" "}
          <span className="text-pink-500 font-medium">New York City</span> and{" "}
          <span className="text-pink-500 font-medium">Boston</span>. We also plan destination
          weddings across the United States, as well as abroad in places such as Mexico, the
          Caribbean, and Europe. Our recent destination weddings have brought us to Lake Tahoe,
          Napa, Charleston, The Maldives, and Savannah, to name a few.
        </p>
        <p className="text-gray-600 mb-12">
          We’re known for seamlessly orchestrating complex events, with a focus on tents, raw space,
          private estates, and celebrations with multiple days of events. We believe that every
          wedding we plan and design should reflect our couple's unique love story and blend their
          families together. We love fusion weddings of all kinds, especially{" "}
          <span className="text-pink-500 font-medium">Indian fusion weddings</span>.
        </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <LazyLoadImage
              src={image.src}
              alt={image.alt}
              className="w-96 h-[400px] rounded-lg"
              delayTime={30}
              threshold={100}
            />
            {/* <div className="px-3 py-1 text-sm font-medium rounded shadow">
              {image.label}
            </div> */}
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default BigFolio;
