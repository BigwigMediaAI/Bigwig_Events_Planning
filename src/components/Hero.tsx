
const HeroSection = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="container mx-auto text-center">
        {/* Hero Image */}
        <div className="mb-6">
          <img
            src="https://images.squarespace-cdn.com/content/v1/585ac0bb414fb5eed215d4e3/1694627570727-4Z839ITBKYQUD67EZ9MI/52438307865_d0b07f02c1_o+%282%29.jpg?format=2500w"
            alt="Bigwig Events"
            className=" shadow-lg mx-auto"
          />
        </div>

        <div className=" w-full h-full py-6 px-6 flex flex-col items-center justify-center text-justify md:text-center  text-teal-900">
        <h1 className="text-3xl md:text-5xl mb-4">We are Bigwig.</h1>
        <p className="text-md md:text-lg max-w-5xl">
          Bigwig Events is a premier, luxury wedding and event planning company
          serving NYC and Boston. We specialize in creating extraordinary,
          tailor-made experiences for dynamic and discerning clients who value
          elegance, creativity, and seamless execution.
        </p>
        <p className="text-md md:text-lg max-w-3xl mt-4">
          At Bigwig, we draw inspiration from your vision and story,
          transforming them into unforgettable events that leave a lasting
          impression. Let us handle the details so you can focus on enjoying a
          flawless and stress-free planning experience.
        </p>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
