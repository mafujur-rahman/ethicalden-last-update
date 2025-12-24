'use client'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { blurPlaceholder } from '../../utils/blur-placeholder'



function OurWorksArea2() {
  gsap.registerPlugin(ScrollTrigger)



  // title animation
  const titleRef = useRef(null);
  const charRefs = useRef([]);


  // Title animation
  useEffect(() => {
    if (!charRefs.current.length) return;

    gsap.fromTo(charRefs.current,
      { color: 'gray' },
      {
        color: '#09e5e5',
        stagger: {
          from: 'random',
          each: 0.05,
        },
        ease: 'power2.out',
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
          end: "top 50%",
          toggleActions: "play none none none",
        }
      }
    );
  }, []);

  // image loading spinner
  const [isImageLoaded, setIsImageLoaded] = useState(false);


  return (
    <section  className=' px-[20px]  md:px-10 lg:px-[50px] xl:px-39 2xl:px-50 pt-[100px] md:pt-[150px] lg:pt-[250px] xl:pt-[300px] 2xl:pt-[300px]  py-[10vh] md:py-[10vh]  text-white'>
      <div className='grid grid-cols-2 gap-[4vh] md:gap-x-[5vw] xl:gap-x-[6vw]'>
        {/* first row start */}
        <div className=''>
          <h2
            ref={titleRef}
            className="text-left w-full max-w-2xl text-4xl md:text-6xl lg:text-7xl xl:text-7xl text-gray-400 font-helvetica font-extrabold leading-[1]"
            style={{ letterSpacing: "-0.05em" }}
          >
            {/* First Line: "Our latest" */}
            <span className="inline-block whitespace-nowrap">
              {"Our".split("").map((char, ci) => (
                <span
                  key={`our-${ci}`}
                  ref={(el) => (charRefs.current[ci] = el)}
                  className="inline-block"
                >
                  {char}
                </span>
              ))}
              {/* Real space after "Our" */}
              <span
                ref={(el) => (charRefs.current[100] = el)}
                className="inline-block"
              >
                &nbsp;
              </span>
              {"Works".split("").map((char, ci) => (
                <span
                  key={`Works-${ci}`}
                  ref={(el) => (charRefs.current[101 + ci] = el)}
                  className="inline-block"
                >
                  {char}
                </span>
              ))}
            </span>


            
          </h2>


          {/* first row */}
          <div className='mt-[10vh] md:mt-[25vh] mb-[5vh] md:mb-0 md:w-[70%] h-[30%] md:h-[40%] relative'>

            {/* Spinner on top */}
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Image with blur placeholder and fade-in effect */}
            <Image
              src='https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/mr-cafe.webp?updatedAt=1749702821699'
              height={1000}
              width={1000}
              placeholder='blur'
              blurDataURL={blurPlaceholder}
              onLoadingComplete={() => setIsImageLoaded(true)}
              priority
              loading="eager"
              className='object-cover w-full h-full'
              alt='Mr Cafe'
            />

            <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-helvetica font-bold py-3' style={{ letterSpacing: "-0.05em" }}>
              <a href="/project-mrCafe" className="no-underline  cursor-pointer text-white hover:text-[#09e5e5]">
                Mr Cafe
              </a>
            </h3>

            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              Restaurant
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>

        <div className='h-[23vh] mt-14 md:mt-[0vh] lg:mt-0 md:h-[50vh] lg:h-[60h] xl:h-[70vh]'>
          <video
            src='https://res.cloudinary.com/dztzjmedo/video/upload/v1749708111/marzii_ixl75r.webm'
            loading='lazy'
            muted
            autoPlay
            loop
            className='h-full w-full object-cover'
          ></video>
          <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
            <a href="/project-marzii" className="no-underline text-white hover:text-[#09e5e5] cursor-pointer ">
              Marzii
            </a>
          </h3>
          <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
            E-commerce / Branding
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </p>

        </div>

        {/* second row start */}
        <div className='mt-[10vh] md:mt-[15vh] lg:mt-[25vh] '>
          <div className='relative h-[23vh] md:h-[50vh] lg:h-[75vh]'>

            {/* Spinner on top */}
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <Image
              src='https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/e-laj.webp?updatedAt=1749702842765'
              width={1000}
              height={1000}
              placeholder='blur'
              blurDataURL={blurPlaceholder}
              onLoadingComplete={() => setIsImageLoaded(true)}
              className='object-cover w-full h-full'
              priority
              loading="eager"
              alt='E-laz'
            />
            <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
              <a href="/project-e-laj" className="no-underline text-white hover:text-[#09e5e5] cursor-pointer ">
                E-laj
              </a>
            </h3>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              Medical Healthcare
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>

        <div className=''>
          <div className='grid md:grid-cols-2 gap-[2vw] gap-y-[25vh] md:gap-y-0 mt-[6vh] md:mt-12 lg:mt-2 xl:mt-16'>
            <div className='h-[23vh] md:h-[20vh] lg:h-[30vh]'>
              <video
                src='https://res.cloudinary.com/dztzjmedo/video/upload/v1749708062/makcommunity_sglza5.webm'
                muted
                autoPlay
                loop
                className='h-full w-full object-cover'
              ></video>
              <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
                <a href="/project-mak-community" className="no-underline text-white hover:text-[#09e5e5] cursor-pointer ">
                  Mak Community
                </a>
              </h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                site /Branding
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>

            <div className='h-[23vh] md:h-[20vh] lg:h-[30vh] md:mt-0 -mt-[5vh] relative'>

              {/* Spinner on top */}
              {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              <Image
                width={500}
                height={100}
                placeholder='blur'
                blurDataURL={blurPlaceholder}
                onLoadingComplete={() => setIsImageLoaded(true)}
                alt='Agarwal Tibrewal Co'
                src='https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/3.jpg?updatedAt=1750496283381'
                priority
                loading="eager"
                className='h-full w-full object-cover'
              ></Image>
              <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
                <a href="/project-agarwal-tibrewal" className="no-underline text-white hover:text-[#09e5e5] cursor-pointer ">
                  Agarwal Tibrewal Co
                </a>
              </h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                site /Branding
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>
          </div>
        </div>

        {/* third row start */}
        <div className='-mt-[8vh] md:mt-[30vh] lg:mt-[60vh] '>
          <div className='h-[40vh] md:w-[60%] relative'>

            {/* Spinner on top */}
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <Image
              src='https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/emopract.jpg?updatedAt=1749702849547'
              height={100}
              width={500}
              placeholder='blur'
              blurDataURL={blurPlaceholder}
              onLoadingComplete={() => setIsImageLoaded(true)}
              alt='Emopract'
              priority
              loading="eager"
              className='h-full w-full object-cover'
            ></Image>
            <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
              <a href="/project-emopract" className="no-underline text-white hover:text-[#09e5e5] cursor-pointer ">
                Emopract
              </a>
            </h3>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              UI/UX / site
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>

        <div className='mt-[20vh] md:mt-0'>
          <div>
            <video
              src='https://res.cloudinary.com/dztzjmedo/video/upload/v1749708152/SAFL_xpax75.mp4'
              muted
              autoPlay
              loop
              className='h-full w-full object-cover'
            ></video>
            <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
              <a href="/project-sandeep-autolines" className="no-underline text-white hover:text-[#09e5e5] cursor-pointer ">
                Sandeep Autolines
              </a>
            </h3>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              Marketing /Branding
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>

        {/* fourth row start */}
        <div className='md:mt-[25vh] -mt-[14vh] lg:mt-[40vh] xl:mt-[50vh]'>
          <div className='relative h-[23vh] md:h-[50vh] lg:h-[70vh]'>

            {/* Spinner on top */}
            {!isImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            <Image
              src='https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/2.jpg?updatedAt=1750495904013'
              height={1000}
              width={1000}
              placeholder='blur'
              blurDataURL={blurPlaceholder}
              onLoadingComplete={() => setIsImageLoaded(true)}
              className='object-cover h-full w-full'
              priority
              loading="eager"
              alt='Laljhal'
            />
            <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
              <a href="/project-laljhal" className="no-underline text-white hover:text-[#09e5e5] cursor-pointer ">
                Laljhal
              </a>
            </h3>
            <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
              UI/Ux /site
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </p>

          </div>
        </div>
        <div className='mt-[8vh] md:mt-[10vh] lg:mt-[10vh] xl:mt-[10vh]'>
          <div className='grid md:grid-cols-2 gap-[2vw] gap-y-[20vh] md:gap-y-0'>
            {/* <div className='h-[23vh] md:h-[20vh] lg:h-[30vh]'>
              <Image
                height={1000}
                width={1000}
                placeholder='blur'
                blurDataURL={blurPlaceholder}
                src='https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/healing.jpg?updatedAt=1750069858123'
                className='h-full w-full object-cover'
                loading='lazy'
                alt='Healing Home '
              />
              <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
                <a href="/project-healing-home" className="no-underline text-white hover:text-[#09e5e5] cursor-pointer ">
                  Healing Home Healthcare LLC
                </a>
              </h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                site / Branding  / UI/Ux Design
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div> */}
            <div className='h-[23vh] md:h-[20vh] lg:h-[30vh] relative'>

              {/* Spinner on top */}
              {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-12 h-12 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}

              <Image
                height={1000}
                width={1000}
                placeholder='blur'
                blurDataURL={blurPlaceholder}
                onLoadingComplete={() => setIsImageLoaded(true)}
                priority
                loading="eager"
                src='https://ik.imagekit.io/ckncpdy03/Ethical%20den%20-%20gsap/Home%20Page/massart.png?updatedAt=1749702878941'
                className='h-full w-full object-cover'
                alt='massArt'
              />
              <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
                <a href="/project-massArt" className="no-underline text-white hover:text-[#09e5e5] cursor-pointer ">
                  massArt
                </a>
              </h3>
              <p className="relative inline-block text-base font-semibold text-white/70 font-helvetica hover:text-white group">
                UI/UX / site
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </p>

            </div>
          </div>
        </div>

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
            <h3 className='md:text-xl xl:text-3xl 2xl:text-4xl font-bold py-3 font-helvetica ' style={{ letterSpacing: "-0.05em" }}>
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
  )
}

export default OurWorksArea2
