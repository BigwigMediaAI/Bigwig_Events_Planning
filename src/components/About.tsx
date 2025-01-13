
const AboutSection = () => {
  return (
    <div id="aboutus" className="relative bg-black text-white">
      {/* Top Triangle (Pointing Down) */}
      <div
        className="absolute top-0 left-0 w-full bg-black"
        style={{
          clipPath: "polygon(50% 100%, 0% 0%, 100% 0%)",
          height: "12rem", // Adjust the height as needed
        }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10 pt-20 pb-32 px-6 md:px-12 lg:px-24 max-w-4xl mx-auto text-center">
        {/* Logo/Icon */}
        <div className="mb-6 flex justify-center items-center">
          <div className="relative bg-teal-500 w-12 h-12 rounded-full flex justify-center items-center">
            <div className="absolute w-6 h-6 bg-yellow-400 rounded-full"></div>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold md:mb-20">
          BIG<span className="text-yellow-400">WIG</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed">
          <span className='font-semibold'>At BIGWIG</span>, we specialize in crafting exceptional experiences
            tailored for your corporate needs. From stunning events to
            impactful training, creative activations to seamless travels, we
            ensure every detail is perfectly executed. Elevate your brand,
            engage your teams, and celebrate success with our bespoke services
            designed to make a lasting impression.
        </p>
      </div>

      {/* Bottom Triangle (Pointing Up) */}
      <div
        className="absolute bottom-0 left-0 w-full bg-gray-900"
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          height: "26rem",
        }}
      ></div>
    </div>
  );
};

export default AboutSection;
