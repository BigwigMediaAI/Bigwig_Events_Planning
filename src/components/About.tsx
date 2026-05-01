import React from "react";

const About: React.FC = () => {
  return (
    <section id="aboutus" className="py-20 bg-[#050505]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_0.85fr] items-center">
          <div>
            <span className="inline-block uppercase tracking-[0.35em] text-yellow-400 text-sm mb-4">
              bigwig events
            </span>
            <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
              Premium events that feel modern, elevated, and unforgettable.
            </h2>
            <p className="text-gray-300 leading-8 mb-6">
              At <strong className="text-yellow-400">Bigwig Events</strong>, we
              bring thoughtful design and flawless execution together for
              weddings, corporate activations, travel programs, and private
              celebrations. Every detail is curated to create a lasting,
              unforgettable experience.
            </p>
            <ul className="grid gap-3 text-gray-300 mb-8">
              <li className="flex gap-3">
                <span className="text-yellow-400">•</span>
                Expert creative direction with polished, boutique service.
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-400">•</span>
                Seamless, end-to-end planning for every moment of your event.
              </li>
              <li className="flex gap-3">
                <span className="text-yellow-400">•</span>
                Memorable experiences designed to feel premium and effortless.
              </li>
            </ul>
            <p className="text-gray-300 leading-8">
              Our boutique approach means we accept a limited number of events,
              so your project receives the attention it deserves. Expect
              polished service, creative storytelling, and a truly tailored
              celebration.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-[32px] border border-gray-800 bg-[#111111] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-400 mb-3">
                What we do
              </p>
              <h3 className="text-2xl text-white font-semibold mb-3">
                Bespoke event planning with premium care.
              </h3>
              <p className="text-gray-300 leading-7">
                From concept to execution, we design each moment with style,
                precision, and emotion.
              </p>
            </div>

            <div className="rounded-[32px] border border-gray-800 bg-[#111111] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
              <p className="text-sm uppercase tracking-[0.3em] text-yellow-400 mb-3">
                Our promise
              </p>
              <h3 className="text-2xl text-white font-semibold mb-3">
                Exceptional service, every step of the way.
              </h3>
              <p className="text-gray-300 leading-7">
                We ensure seamless coordination, inspired design, and a
                stress-free client experience from first call to final details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
