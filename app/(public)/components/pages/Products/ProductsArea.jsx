"use client";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { blurPlaceholder } from "../../utils/blur-placeholder";

function ProductsArea() {
  const [buttonVisible, setButtonVisible] = useState(true);
  const productsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!productsRef.current) return;

      // Get the bottom position of the ProductsArea component
      const productsBottom = productsRef.current.getBoundingClientRect().bottom;
      // Get viewport height
      const viewportHeight = window.innerHeight;

      // Hide button when ProductsArea bottom reaches top of viewport (footer starts appearing)
      setButtonVisible(productsBottom > viewportHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // title animation
  const titleRef = useRef(null);
  const charRefs = useRef([]);

  // Title animation
  useEffect(() => {
    if (!charRefs.current.length) return;

    gsap.fromTo(
      charRefs.current,
      { color: "gray" },
      {
        color: "#09e5e5",
        stagger: {
          from: "random",
          each: 0.05,
        },
        ease: "power2.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <section className=" px-[20px]  md:px-10 lg:px-[50px] xl:px-39 2xl:px-50 mt-[5vh]  py-[10vh] md:py-[10vh] lg:py-[20vh] text-white">
        <div className="grid grid-cols-2 gap-[4vh] md:gap-x-[5vw] xl:gap-x-[7vw]">
          {/* first row start */}
          <div className="">
            <h2
              ref={titleRef}
              className="text-left w-full max-w-2xl text-2xl md:text-4xl lg:text-6xl xl:text-6xl text-gray-400 font-helvetica font-extrabold leading-[1]"
              style={{ letterSpacing: "-0.05em" }}
            >
              <span className="inline-block">
                {"Our".split("").map((char, ci) => (
                  <span
                    key={`Our-${ci}`}
                    ref={(el) => (charRefs.current[ci] = el)}
                    className="inline-block"
                  >
                    {char}
                  </span>
                ))}

                <span
                  ref={(el) => (charRefs.current[100] = el)}
                  className="inline-block"
                >
                  &nbsp;
                </span>
                {"Products".split("").map((char, ci) => (
                  <span
                    key={`Products-${ci}`}
                    ref={(el) => (charRefs.current[101 + ci] = el)}
                    className="inline-block"
                  >
                    {char}
                  </span>
                ))}
              </span>
            </h2>

            <div className="mt-[10vh] md:mt-[25vh] mb-[5vh] md:mb-0 md:w-[60%] relative">
              <Image
                src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/productPage/stockogen.webp"
                height={1000}
                width={1000}
                placeholder="blur"
                blurDataURL={blurPlaceholder}
                className="object-cover w-full h-full"
                priority
                loading="eager"
                alt="Stockogen"
              />
              <div className="mt-3">
                <a
                  href="https://stockogen.com/"
                  target="_blank"
                  className="md:text-xl xl:text-2xl 2xl:text-3xl font-helvetica font-bold py-3 cursor-pointer hover:text-[#09e5e5]"
                  style={{ letterSpacing: "-0.05em" }}
                >
                  Stockogen
                </a>
              </div>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                Stock Managment
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>
            </div>
          </div>

          <div className="h-[23vh] mt-5 md:h-[50vh] lg:h-[60h] xl:h-[70vh]">
            <video
              src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/productPage/staffsynk.webm"
              muted
              autoPlay
              loop
              className="h-full w-full object-cover"
            ></video>
            <div className="mt-3">
              <a
                href="https://staffsynk.com/"
                target="_blank"
                className=" md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-5 font-helvetica cursor-pointer hover:text-[#09e5e5]"
                style={{ letterSpacing: "-0.05em" }}
              >
                Staffsynk
              </a>
            </div>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              HR Managment Software
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>
          </div>

          {/* second row start */}
          <div className=" md:mt-[15vh] lg:mt-[25vh]">
            <div>
              <Image
                src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/productPage/school-hub.webp"
                width={1000}
                height={1000}
                className="object-cover h-full w-full"
                alt="School Hub"
              />
              <h3
                className="md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#09e5e5]"
                style={{ letterSpacing: "-0.05em" }}
              >
                School Hub
              </h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                site / management software
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>
            </div>
          </div>

          <div className="h-[23vh] md:h-[20vh] lg:h-[30vh]">
            <Image
              src="https://pub-d88e94f6ca8d4f2d9dcb7f5ba3ccfcf0.r2.dev/productPage/ollent.webp"
              height={1000}
              width={1000}
              alt="Ollent"
              className="h-[30vh] xl:h-[60vh] w-full object-cover"
            ></Image>
            <h3
              className="md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica"
              style={{ letterSpacing: "-0.05em" }}
            >
              Ollent
            </h3>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              site / rent webApp
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>
          </div>

          {/* <div className=''>
            <div className='grid md:grid-cols-2 gap-[2vw] gap-y-[25vh] md:gap-y-0 -mt-[10vh] md:mt-0'>
              <div className='h-[23vh] md:h-[20vh] lg:h-[30vh]'>
                <video
                  src='https://mater.agency/wp-content/uploads/2024/03/nordeus.mp4'
                  muted
                  autoPlay
                  loop
                  className='h-full w-full object-cover'
                ></video>
                <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica' style={ { letterSpacing: "-0.05em" }}>
                  Nordeus Unleashed
                </h3>
                <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                  site /Branding
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </p>

              </div>

              <div className='h-[23vh] md:h-[20vh] lg:h-[30vh] md:mt-0 -mt-[5vh]'>
                <video
                  src='https://mater.agency/wp-content/uploads/2024/02/green_tree.mp4'
                  muted
                  autoPlay
                  loop
                  className='h-full w-full object-cover'
                ></video>
                <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#09e5e5]' style={ { letterSpacing: "-0.05em" }}>Green Tree Villas Website</h3>
                <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                  site /Branding
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </p>

              </div>
            </div>
          </div> */}

          {/* third row start */}
          {/* <div className='-mt-[10vh] md:mt-[30vh] lg:mt-[50vh] '>
            <div className='h-[40vh] md:w-[60%]'>
              <div>
                <video
                  src='https://mater.agency/wp-content/uploads/2024/02/led_elektronika.mp4'
                  muted
                  autoPlay
                  loop
                  className='h-full w-full object-cover'
                ></video>
                <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#09e5e5]' style={ { letterSpacing: "-0.05em" }}> Honor 9 – The Light Catcher</h3>
                <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                  site /Branding
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </p>

              </div>
            </div>
          </div> */}

          {/* <div className='mt-[20vh] md:mt-0'>
            <div>
              <video
                src='https://mater.agency/wp-content/uploads/2024/02/honor9.mp4'
                muted
                autoPlay
                loop
                className='h-full w-full object-cover'
              ></video>
              <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#09e5e5]' style={ { letterSpacing: "-0.05em" }}>Led Elektronika</h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                site /Branding
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>
          </div> */}

          {/* fourth row start */}
          {/* <div className='md:mt-[25vh] -mt-[24vh] lg:mt-[40vh] xl:mt-[50vh]'>
            <div>
              <Image
                src='https://mater.agency/wp-content/uploads/2024/01/AZ-pension-fund.jpg'
                height={1000}
                width={1000}
                className='object-cover h-full w-full'
                alt='AZ Pension Fund'
              />
              <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#09e5e5]' style={ { letterSpacing: "-0.05em" }}>
                Rethinking the AZ Retirement Fund Mobile App
              </h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                site /Branding
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>
          </div>
          <div className='mt-[8vh] md:mt-[10vh] lg:mt-[20vh] xl:mt-[30vh]'>
            <div className='grid md:grid-cols-2 gap-[2vw] gap-y-[20vh] md:gap-y-0'>
              <div className='h-[23vh] md:h-[20vh] lg:h-[30vh]'>
                <Image
                  height={1000}
                  width={1000}
                  src='https://mater.agency/wp-content/uploads/2024/03/rba.jpg'
                  className='h-full w-full object-cover'
                  alt='RBA'
                />
                <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#09e5e5]' style={ { letterSpacing: "-0.05em" }}>
                  RBA: Evolution
                </h3>
                <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                  site /Branding
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </p>

              </div>
              <div className='h-[23vh] md:h-[20vh] lg:h-[30vh]'>
                <video
                  src='https://mater.agency/wp-content/uploads/2024/02/telenor-2.mp4'
                  muted
                  autoPlay
                  loop
                  className='h-full w-full object-cover'
                ></video>
                <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#09e5e5]' style={ { letterSpacing: "-0.05em" }}>Telenor Bank</h3>
                <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                  site /Branding
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </p>

              </div>
            </div>
          </div> */}

          {/* fifth row */}
          {/* <div className='hidden md:block'></div>
          <div className='-mt-[55vh] md:mt-[5vh] '>
            <div>
              <video
                src='https://mater.agency/wp-content/uploads/2024/02/zvjerici-1.mp4'
                muted
                autoPlay
                loop
                className='h-full w-full object-cover'
              ></video>
              <h3 className='md:text-xl xl:text-2xl 2xl:text-3xl font-bold py-3 font-helvetica cursor-pointer hover:text-[#09e5e5]' style={ { letterSpacing: "-0.05em" }}>
                Journey into the world of wild animals called Zvjerići
              </h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                site /Branding
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>
          </div> */}
        </div>
      </section>

      {/* Fixed bottom button */}
      {/* <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1a1a1a] border-none px-4 md:px-8 py-3 md:py-6 rounded-full flex items-center gap-4 border shadow-lg transition-all duration-300 ${buttonVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}> */}
      {/* Services */}
      {/* <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          <span>Services: All</span>
        </div> */}

      {/* Divider */}
      {/* <div className="w-px h-5 bg-gray-600" /> */}

      {/* Industry */}
      {/* <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
          <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          <span>Industry: All</span>
        </div>
      </div> */}
    </>
  );
}

export default ProductsArea;
