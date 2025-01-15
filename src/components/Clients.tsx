import React from "react";
import Slider from "react-slick";
import volkeswagen from "../assets/volkswagen.png"
import hero from "../assets/hero.png"
import indianoil from "../assets/indianoil.png"
import sos from "../assets/sos.png"
import icg from "../assets/Indian_Coast_Guard_Logo.svg"
import govt from "../assets/govt.png"
import itzcash from "../assets/itzcash.png"
import moc from "../assets/moc.png"
import delmonte from "../assets/delmonte.png"
import lenovo from "../assets/lenovo.png"

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  volkeswagen,
  hero,
  indianoil,
  sos,
  icg,
  govt,
  itzcash,
  moc,
  delmonte,
  lenovo
];

const Clients: React.FC = () => {
    const settings = {
      infinite: true, // Loop infinitely
      speed: 2000, // Speed of slide transition (in ms)
      slidesToShow: 4, // Number of visible slides
      slidesToScroll: 1, // Number of slides to scroll at a time
      autoplay: true, // Enable automatic sliding
      autoplaySpeed: 0, // Continuous autoplay with no delay
      cssEase: "linear",
      arrows: false,
      responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }
    ] // Smooth animation
    };
  
    return (
      <div id="bigclients" className="w-11/12 mx-auto bg-white mt-16 mb-12">
        <h1 className="text-4xl text-center mb-12 font-bold text-gray-800">Our Clients</h1>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="flex justify-center">
              <img
                src={image}
                alt={`logo-${index}`}
                className="w-24 h-24 object-contain"
              />
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default Clients;
  