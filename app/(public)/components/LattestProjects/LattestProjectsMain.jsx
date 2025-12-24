import React from "react";
import Loader from "../Loader/Loader";

const projects = [
  {
    title: "Vogue Advis",
    image: "/images/lattest-projects/project-1.jpg",
  },
  {
    title: "UNS: Creating the World’s Most Recognisable Sports Identity",
    image: "/images/lattest-projects/project-1.jpg",
  },
  {
    title: "Stream live TV plus thousands of shows with NetTVPlus",
    image: "/images/lattest-projects/project-1.jpg",
  },
  {
    title: "Wireless Headphones – Designing a Vibrant Journey for Press Play 2022",
    image: "/images/lattest-projects/project-1.jpg",
  },
  {
    title: "Green Tree Villas",
    image: "/images/lattest-projects/project-1.jpg",
  },
  {
    title: "Honor 8 – The Light Catcher",
    image: "/images/lattest-projects/project-1.jpg",
  },
  {
    title: "Led Elektronika",
    image: "/images/lattest-projects/project-1.jpg",
  },
];

const LatestProjectsMain = () => {
  return (
    <div className="bg-[#031015] text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-teal-300 text-lg font-semibold mb-10">Our latest projects</h2>
        <div className="grid grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`rounded overflow-hidden ${
                index === 0 ? "row-span-2" : ""
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover rounded"
              />
              <h3 className="mt-2 text-sm font-semibold text-white">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>

      <Loader />
    </div>
  );
};

export default LatestProjectsMain;
