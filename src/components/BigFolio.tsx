import React, { useEffect, useState } from "react";
import img1 from "../assets/DB2A5526.webp";
import img2 from "../assets/DB2A5541.webp";
import img3 from "../assets/DSC_0074.webp";
import img4 from "../assets/DSC_0170.webp";
import img5 from "../assets/DSC_6509.webp";
import img6 from "../assets/DSC_6536.webp";
import img7 from "../assets/DSC_6662.webp";
import img8 from "../assets/IMG-20250113-WA0020.webp";
import img9 from "../assets/IMG-20250113-WA0021.webp";
import img10 from "../assets/IMG-20250113-WA0022.webp";
import img11 from "../assets/IMG-20250113-WA0023.webp";
import img12 from "../assets/IMG-20250113-WA0024.webp";
import img13 from "../assets/IMG-20250113-WA0025.webp";
import img14 from "../assets/IMG-20250113-WA0026.webp";
import img15 from "../assets/IMG-20250113-WA0030.webp";
import img16 from "../assets/IMG-20250113-WA0032.webp";
import img17 from "../assets/IMG-20250113-WA0045.webp";
import img18 from "../assets/IMG-20250113-WA0046.webp";
import img19 from "../assets/IMG-20250113-WA0047.webp";
import img20 from "../assets/IMG-20250113-WA0050.webp";
import img21 from "../assets/IMG-20250113-WA0051.webp";
import img22 from "../assets/IMG-20250113-WA0052.webp";
import img23 from "../assets/IMG-20250113-WA0053.webp";
import img24 from "../assets/IMG-20250113-WA0058.webp";
import img25 from "../assets/IMG_0196.webp";
import img26 from "../assets/IMG_0197.webp";
import img27 from "../assets/IMG_0201.webp";
import img28 from "../assets/IMG_0202.webp";
import img29 from "../assets/IMG_0420.webp";
import img30 from "../assets/IMG_0427.webp";
import img31 from "../assets/IMG_5791.webp";
import img32 from "../assets/IMG_5836.webp";
import img33 from "../assets/IMG_6293.webp";
import img34 from "../assets/IMG_7662.webp";
import img35 from "../assets/IMG_7756.webp";
import img36 from "../assets/_MG_5102.webp";
import img37 from "../assets/_MG_5119.webp";
import img38 from "../assets/_MG_5156.webp";
import img39 from "../assets/_MG_5260.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
    src: img5, // Replace with actual image URL
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
    src: img9, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img10, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img11, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img12, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img13, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img14, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img15, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img16, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img17, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img18, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img19, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img20, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img21, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img22, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img23, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img24, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img25, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img26, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img27, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img28, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img29, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img30, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img31, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img32, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img33, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img34, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img35, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img36, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img37, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img38, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  {
    src: img39, // Replace with actual image URL
    alt: "ROMANTIC MEXICO",
    label: "ROMANTIC MEXICO",
  },
  // Add more images here
];

const BigFolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds

    // Clean up the interval when the component is unmounted or user interacts
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="bigfolio" className=" mt-10">
      <h1 className="text-4xl font-bold text-center text-white mb-8">
        Gallery View
      </h1>

      <section className="relative bg-black py-5">
        <div className="flex items-center justify-center space-x-6">
          {/* Prev Button */}
          <button
            onClick={prevImage}
            className="p-2 rounded-full bg-white shadow-md z-10"
          >
            ◀
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex justify-center items-center relative"
                >
                  <LazyLoadImage
                    src={image.src}
                    alt={image.alt}
                    className="rounded-lg max-w-7xl h-[500px] "
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextImage}
            className="p-2 rounded-full bg-white shadow-md z-10"
          >
            ▶
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="hidden md:flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-2 rounded-full ${
                index === currentIndex
                  ? "bg-yellow-400"
                  : "bg-gray-500 hover:bg-yellow-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BigFolio;
