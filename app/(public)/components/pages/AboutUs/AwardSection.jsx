import { RiBearSmileLine } from "react-icons/ri";
import { FaFire } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { FaTeamspeak } from "react-icons/fa";
import { SiCaffeine } from "react-icons/si";
import { IoBugSharp } from "react-icons/io5";
import { FaHatWizard } from "react-icons/fa";
import { FaCode } from "react-icons/fa";






const awards = [
  { name: "Internal Meme Wars Won", count: "09", icon: <RiBearSmileLine />, cta: "Meme" },
  { name: "Best client Feedback (Actual Fire Emoji )", count: "07", icon: <FaFire />, cta: "clients" },
  { name: "Projects Launched At 2AM", count: "11", icon: <GrProjects />, cta: "Projects" },
  { name: "Font Debates Survived", count: "13", icon: <FaTeamspeak />, cta: "Debates" },
  { name: "Caffeine- Driven Breakthroughs", count: "16", icon: <SiCaffeine />, cta: "Breakthroughs" },
  { name: "Bugs Squashed on a Friday Night", count: "08", icon: <IoBugSharp />, cta: "Bugs" },
  { name: "Clients Who Called Us 'Wizards' ", count: "05", icon: <FaHatWizard />, cta: "Clients" },
  { name: "Websites That Made Someone Cry", count: "03", icon: <FaCode />, cta: "Websites" },
];

const AwardsSection = () => {
  return (
    <div className="2xl:max-w-4xl 2xl:mx-auto px-5 md:px-10 lg:px-10 xl:px-20 pt-[50px] md:pt-[100px] lg:pt-[130px] xl:pt-[150px] 2xl:pt-[160px] font-sans">
      <div className="grid md:grid-cols-1 gap-6">
        {awards.map((award, index) => (
          <div key={index} className="flex items-center justify-between pb-4">
            <div className="flex items-center gap-4 w-full">
              <p className="custom-input text-3xl font-bold">{award.icon}</p>
              <div className="flex-1 border-b border-gray-300">
                <span className="font-bold custom-input text-xl md:text-3xl text-[#00263a] font-helvetica">{award.name}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl md:text-2xl custom-input font-bold text-black leading-none font-helvetica">{award.count}</p>
              <p className="text-xl md:text-2xl custom-input text-black font-helvetica">{award.cta}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Custom style for small devices */}
      <style jsx>{`
        @media (max-width: 320px) {
          .custom-input {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default AwardsSection;