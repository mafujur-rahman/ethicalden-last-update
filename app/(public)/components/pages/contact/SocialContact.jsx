import { FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";

export default function SocialContact() {
  return (
    <section className="pt-[100px] md:pt-[150px] lg:pt-[180px] 2xl:pt-[200px] rounded-lg">
      <div className="">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold font-helvetica leading-tight xl:leading-[1.15] mb-8 text-gray-900" style={{ letterSpacing: "-0.05em" }}>
          Prefer a personal conversation<br className="hidden md:block" /> over filling out a web form?
        </h1>

        <div className="mt-12 lg:mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 font-helvetica">
            Connect with us directly
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Facebook */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/ethicalden/"
              className="group flex items-center gap-4 px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#111] hover:bg-[#111]"
            >
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 aspect-square bg-[#111] group-hover:bg-white group-hover:text-black rounded-full text-white transition-colors duration-300">
                <FaFacebook className="w-7 md:w-9 h-7 md:h-9" />
              </div>
              <div>
                <span className="font-semibold text-lg md:text-xl text-gray-800 group-hover:text-white">Facebook</span>
                <p className="text-sm text-gray-500 mt-1 group-hover:text-white">Message us</p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/ethicalden/?originalSubdomain=in"
              className="group flex items-center gap-4 px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#111] hover:bg-[#111]"
            >
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 aspect-square bg-[#111] group-hover:bg-white group-hover:text-black rounded-full text-white transition-colors duration-300">
                <FaLinkedinIn className="w-7 md:w-9 h-7 md:h-9" />
              </div>
              <div>
                <span className="font-semibold text-lg md:text-xl text-gray-800 group-hover:text-white">LinkedIn</span>
                <p className="text-sm text-gray-500 mt-1 group-hover:text-white">Connect with us</p>
              </div>
            </a>

            {/* Instagram */}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/ethical.den/"
              className="group flex items-center gap-4 px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#111] hover:bg-[#111]"
            >
              <div className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 aspect-square bg-[#111] group-hover:bg-white group-hover:text-black rounded-full text-white transition-colors duration-300">
                <FaInstagram className="w-7 md:w-9 h-7 md:h-9" />
              </div>
              <div>
                <span className="font-semibold text-lg md:text-xl text-gray-800 group-hover:text-white">Instagram</span>
                <p className="text-sm text-gray-500 mt-1 group-hover:text-white">DM us</p>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}