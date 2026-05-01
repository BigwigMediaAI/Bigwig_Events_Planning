import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
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

interface ImageItem {
  src: string;
  alt: string;
  label: string;
}

const images: ImageItem[] = [
  { src: img1, alt: "Newport Fairytale", label: "NEWPORT FAIRYTALE" },
  { src: img2, alt: "Whimsical Boathouse", label: "WHIMSICAL BOATHOUSE" },
  { src: img3, alt: "Southern Elegance", label: "SOUTHERN ELEGANCE" },
  { src: img4, alt: "Farmhouse Chic", label: "FARMHOUSE CHIC" },
  { src: img5, alt: "Lakeside Hudson Valley", label: "LAKESIDE HUDSON VALLEY" },
  { src: img6, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img7, alt: "Tented Boston Rooftop", label: "TENTED BOSTON ROOFTOP" },
  { src: img8, alt: "Modern Museum", label: "MODERN MUSEUM" },
  { src: img9, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img10, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img11, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img12, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img13, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img14, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img15, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img16, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img17, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img18, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img19, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img20, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img21, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img22, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img23, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img24, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img25, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img26, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img27, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img28, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img29, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img30, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img31, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img32, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img33, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img34, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img35, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img36, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img37, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img38, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
  { src: img39, alt: "Romantic Mexico", label: "ROMANTIC MEXICO" },
];

const BigFolio: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    );
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="bigfolio" className="py-16 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">
            gallery view
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-white">
            A curated portfolio of events and bold visual moments.
          </h2>
          <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-8">
            Explore our signature work through a refined gallery experience
            built to highlight large-format imagery in a premium setting.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[32px] border border-gray-800 bg-[#121212] shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="flex flex-col gap-4 px-4 py-4 md:px-8 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <button
                onClick={prevImage}
                className="h-12 w-12 rounded-full bg-white/10 text-white transition hover:bg-yellow-400 hover:text-black"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={nextImage}
                className="h-12 w-12 rounded-full bg-white/10 text-white transition hover:bg-yellow-400 hover:text-black"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </div>
            <div className="text-sm uppercase tracking-[0.35em] text-gray-400">
              {currentIndex + 1}/{images.length}
            </div>
          </div>

          <div className="relative h-[520px] overflow-hidden">
            <div
              className="flex h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <LazyLoadImage
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center gap-3 p-4">
            {images.slice(0, 8).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-8 rounded-full transition ${
                  index === currentIndex
                    ? "bg-yellow-400"
                    : "bg-gray-600 hover:bg-yellow-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigFolio;
