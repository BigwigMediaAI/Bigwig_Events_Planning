import React from "react";

interface ImageItem {
  src: string;
  alt: string;
  label: string;
}

const images: ImageItem[] = [
    {
      src: "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1687892098467-BGAYR7HSKM68KKPEZVHL/47054380471_a6f060afb0_o.jpg?format=500w", // Replace with actual image URL
      alt: "Newport Fairytale",
      label: "NEWPORT FAIRYTALE",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1683829890364-JILYFI2SIEJ7JTMHRBD8/52694980316_b7b5ef3b19_o+%281%29.jpg?format=500w", // Replace with actual image URL
      alt: "Whimsical Boathouse",
      label: "WHIMSICAL BOATHOUSE",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1683823863253-RT2ZTX8CT398B1JNSV3F/SKP-1992.jpg?format=500w", // Replace with actual image URL
      alt: "Southern Elegance",
      label: "SOUTHERN ELEGANCE",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1688008093634-DSPRPSWCX3KZ5W4LQZCY/Jen%2526Tylan-Married_907.jpg?format=500w", // Replace with actual image URL
      alt: "FARMHOUSE CHIC",
      label: "FARMHOUSE CHIC",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1675362923570-G5DTKTA632JX67Q43S9P/51902240599_f977b42057_c.jpg?format=500w", // Replace with actual image URL
      alt: "LAKESIDE HUDSON VALLEY",
      label: "LAKESIDE HUDSON VALLEY",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1543416654584-6VMAX9TR6MTEW7AEVTRF/24371709186_0881841eef_o.jpg?format=500w", // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1640797170023-AG5R2SFPGZ3BV1ILSBRX/0564_StudioNouveau_MargLuka.jpg?format=500w", // Replace with actual image URL
      alt: "TENTED BOSTON ROOFTOP",
      label: "TENTED BOSTON ROOFTOP",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1730131635450-SYS96LOK0FUOY6U9BI0J/libby-tim-wedding-62224-530_websize.jpg?format=500w", // Replace with actual image URL
      alt: "MODERN MUSEUM",
      label: "MODERN MUSEUM",
    },
    {
      src: "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1543416654584-6VMAX9TR6MTEW7AEVTRF/24371709186_0881841eef_o.jpg?format=500w", // Replace with actual image URL
      alt: "ROMANTIC MEXICO",
      label: "ROMANTIC MEXICO",
    },
    // Add more images here
  ];

const Wedding: React.FC = () => {
  return (
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-96 h-[500px] rounded-lg"
            />
            <div className="px-3 py-1 text-sm font-medium rounded shadow">
              {image.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Wedding;
