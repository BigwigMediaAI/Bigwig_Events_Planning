import React from "react";

interface ImageItem {
  src: string;
  alt: string;
  label: string;
}

const images: ImageItem[] = [
  {
    src: "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1577994364694-I3GB20QVGEI0U9RY3K22/IMG_1186.jpg?format=300w", // Replace with actual image URL
    alt: "FLAMINGO BABY SHOWER",
    label: "FLAMINGO BABY SHOWER",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1578061046465-AMBUQ118CCEM1622LOKE/48953828347_7ac5df67e0_h.jpg?format=300w", // Replace with actual image URL
    alt: "URBAN ENGAGEMENT PARTY",
    label: "URBAN ENGAGEMENT PARTY",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1549166148872-8NTVDQ7DIY21BO8RQK9A/21412157240_06dcb07643_h+%281%29.jpg?format=500w", // Replace with actual image URL
    alt: "PAPER AIRPLANE PROPOSAL",
    label: "PAPER AIRPLANE PROPOSAL",
  },
  {
    src: "https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1578062160026-BNUVTGCTLJS611JO1WWH/SVegliante_BostonWeddingPhotographer_BPDC-77.jpg?format=300w", // Replace with actual image URL
    alt: "INDUSTRY FARM DINNER",
    label: "INDUSTRY FARM DINNER",
  },
  // Add more images here
];

const Events: React.FC = () => {
  return (
    <section className="py-16 px-4 lg:px-20 bg-gray-50 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-semibold mb-6">PARTIES AND CELEBRATIONS</h2>
        <p className="text-gray-600 mb-8">
        We plan and design bespoke parties and social events across New England and have offices in          <span className="text-blue-600 font-medium">Boston</span> and{" "}
         and <span className="text-blue-600 font-medium">New York City</span>. Our portfolio includes festive baby showers, elegant bridal showers, romantic engagement parties, intimate marriage proposals, exclusive dinners, corporate parties, modern mitzvahs, and trendy quinceañeras. If you can celebrate it, our event planners can create it! 
          </p>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="w-96 h-96 rounded-lg"
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

export default Events;
