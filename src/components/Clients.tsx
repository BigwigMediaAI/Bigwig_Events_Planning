import React from "react";
import Slider from "react-slick";
import volkeswagen from "../assets/clients/volkswagen.png";
import hero from "../assets/clients/hero.png";
import indianoil from "../assets/clients/indianoil.png";
import sos from "../assets/clients/sos.png";
import icg from "../assets/clients/Indian_Coast_Guard_Logo.svg";
import itzcash from "../assets/clients/itzcash.png";
import delmonte from "../assets/clients/delmonte.png";
import wu from "../assets/clients/wu.png";
import maruti from "../assets/clients/maruti.png";
import escorts from "../assets/clients/Escorts.svg";
import kirby from "../assets/clients/kirby.png";
import american from "../assets/clients/American.png";
import sembcorp from "../assets/clients/sembcorp.png";
import task from "../assets/clients/TaskUs_logo.svg";
import convergys from "../assets/clients/Convergys_logo.svg.png";
import concentrix from "../assets/clients/concentrix.png";
import tadiran from "../assets/clients/taniran.png";
import samsung from "../assets/clients/Samsung.png";
import nynas from "../assets/clients/Nynas.png";
import aai from "../assets/clients/aai.webp";
import moc from "../assets/clients/moc.svg";
import stellar from "../assets/clients/styller.png";
import nokia from "../assets/clients/Nokia.svg";
import shoolini from "../assets/clients/shoolini.png";
import jnu from "../assets/clients/jnu.jpeg";
import jwmarriot from "../assets/clients/jwmarriot.png";
import srm from "../assets/clients/srm.png";
import imi from "../assets/clients/imi.png";
import gartner from "../assets/clients/Gartner.png";
import bata from "../assets/clients/bata.jpg";
import tcs from "../assets/clients/tcs.png";
import colt from "../assets/clients/colt.png";
import mars from "../assets/clients/Mars_Logo.svg.png";
import iris from "../assets/clients/iris.png";
import nestle from "../assets/clients/Nestle-Logo.png";
import baidu from "../assets/clients/baidu.png";
import careindia from "../assets/clients/CARE_Logo_Orange.png";
import bankofamerica from "../assets/clients/boa.png";
import barclays from "../assets/clients/barclays-logo-vector-1.svg";
import durrdentals from "../assets/clients/Dürr_Dental_logo.svg.png";
import encore from "../assets/clients/encore_logo_RGB-1.png";
import godfrey from "../assets/clients/godfrey.png";
import google from "../assets/clients/Google_2015_logo.svg.webp";
import hsbc from "../assets/clients/hsbc.png";
import infinite from "../assets/clients/infinite.webp";
import genpact from "../assets/clients/gena.png";
import gmr from "../assets/clients/GMR_Group_(logo).svg.png";
import luminous from "../assets/clients/luminous.png";
import mdh from "../assets/clients/MDH_spices_logo.png";
import oracle from "../assets/clients/Oracle-Logo.png";
import procam from "../assets/clients/procam-logo-off.png";
import weace from "../assets/clients/we-ace-logo.png";
import sahara from "../assets/clients/sahara.png";
import timesgroup from "../assets/clients/The_Times_Group.webp";
import vestergaard from "../assets/clients/vestergaard.png";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  volkeswagen,
  hero,
  indianoil,
  sos,
  icg,
  itzcash,
  delmonte,
  wu,
  maruti,
  escorts,
  kirby,
  american,
  sembcorp,
  task,
  convergys,
  concentrix,
  tadiran,
  samsung,
  nynas,
  aai,
  moc,
  stellar,
  nokia,
  shoolini,
  jnu,
  jwmarriot,
  srm,
  imi,
  gartner,
  bata,
  tcs,
  colt,
  mars,
  iris,
  nestle,
  baidu,
  careindia,
  bankofamerica,
  barclays,
  durrdentals,
  encore,
  godfrey,
  google,
  hsbc,
  infinite,
  genpact,
  gmr,
  luminous,
  mdh,
  oracle,
  procam,
  weace,
  sahara,
  timesgroup,
  vestergaard,
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
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ], // Smooth animation
  };

  return (
    <div id="bigclients" className="w-11/12 mx-auto  mt-16 mb-12">
      <h1 className="text-4xl text-center mb-12 font-semibold text-white">
        Our Clients
      </h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center bg-[#d7d7eb]">
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
