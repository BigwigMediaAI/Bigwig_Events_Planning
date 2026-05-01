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
    infinite: true,
    speed: 2500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <section id="bigclients" className="py-20 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-yellow-400 mb-3">
          our clients
        </p>
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-4">
          Trusted by brands across every discipline.
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto leading-8 mb-10">
          A selection of the clients we’ve partnered with to create premium
          events, activations, and experiences.
        </p>

        <div className="rounded-[32px] border border-gray-800 bg-[#111111] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="flex justify-center px-4 py-6">
                <div className="flex h-24 w-full max-w-[180px] items-center justify-center rounded-3xl bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-yellow-400/20">
                  <img
                    src={image}
                    alt={`logo-${index}`}
                    className="h-16 object-contain"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Clients;
