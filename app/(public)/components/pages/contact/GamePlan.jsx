import { useState } from "react";

const services = [
  "Strategy",
  "Branding",
  "UI/UX design",
  "Web site",
  "Web shop",
  "Web app",
  "Mobile App",
  "Social media",
  "Performance & Growth",
  "Video production",
];

const GamePlan = () => {
  const [selected, setSelected] = useState([]);

  const handleToggle = (service) => {
    if (selected.includes(service)) {
      setSelected(selected.filter((item) => item !== service));
    } else {
      setSelected([...selected, service]);
    }
  };

  return (
    <div className="mt-5  px-5 md:px-10 lg:px-10 xl:px-20 xl:max-w-screen-2xl xl:mx-auto p-6 bg-white rounded-lg">
      <div className="mb-6 lg:flex gap-20">
        <div className="flex-1/3">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold font-helvetica leading-[1]" style={ { letterSpacing: "-0.05em" }}>What’s the game plan?</h2>
          <p className="mt-5 mb-5 lg:mb-0 text-xl text-gray-700 font-helvetica">
            Tell us how we can back you up. Select all the services your project requires.
          </p>
        </div>

        <div className="space-y-4 flex-2/3 relative font-helvetica">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => handleToggle(service)}
              className={`text-xl lg:text-2xl font-medium py-2 lg:py-4 px-3 lg:px-6 border border-[#111] mr-4 lg:mr-7 rounded-full font-helvetica transition-all duration-300 ${
                selected.includes(service)
                  ? "bg-[#111] text-white"
                  : "text-gray-700"
              }`}
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GamePlan;
