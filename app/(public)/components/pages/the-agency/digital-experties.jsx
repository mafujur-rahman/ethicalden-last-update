import React from "react";

const DigitalExpertis = () => {
  return (
    <section className="bg-[#011627] text-white py-16 px-6 md:px-16 lg:px-32">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Side Text */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
            Where digital <br /> expertise meets a <br /> personal touch.
          </h2>
          <p className="text-[#cbd5e1] text-base leading-relaxed">
            You know what? We're gonna tell it like it is. We're not your
            typical, everyday, just another run-of-the-mill agency. We're more
            like your digital partners in crime.
          </p>
          <p className="text-[#cbd5e1] text-base leading-relaxed">
            Sure, we know our code and design like the back of our screens, but
            what sets us apart is the human touch we bring to the table.
          </p>
          <p className="text-[#cbd5e1] text-base leading-relaxed">
            We're not afraid to blur the lines between work and play because,
            let's face it, the best ideas often emerge over a friendly banter
            or a pint of beer.
          </p>
        </div>

        {/* Right Side Images and Texts */}
        <div className="grid grid-cols-2 gap-4">
          {/* Top Right Image */}
          <img
            src="https://images.unsplash.com/photo-1620784195281-93e6e24df697"
            alt="Team"
            className="rounded-lg w-full h-full object-cover col-span-2"
          />

          {/* Middle Image & Text Block */}
          <img
            src="https://images.unsplash.com/photo-1531058020387-3be344556be6"
            alt="Workspace"
            className="rounded-lg w-full h-40 object-cover"
          />

          <div className="bg-[#011627] text-[#cbd5e1] text-sm space-y-3">
            <p>
              We take our work seriously, but not ourselves, because there’s
              life beyond all the pixels and code.
            </p>
            <p>
              When you partner with us, you’re not just getting experts, you’re
              getting allies who know how to balance the two.
            </p>
            <p>
              Real connections, real results — that’s the master way. Let’s
              build stuff together.
            </p>
            <button className="bg-yellow-300 text-black text-sm px-4 py-1 rounded-full mt-2 hover:bg-yellow-400 transition">
              Start →
            </button>
          </div>

          {/* Bottom Left Image */}
          <img
            src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b"
            alt="Office"
            className="rounded-lg w-full h-40 object-cover"
          />

          {/* Bottom Right Image */}
          <img
            src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
            alt="Person"
            className="rounded-lg w-full h-40 object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default DigitalExpertis;
